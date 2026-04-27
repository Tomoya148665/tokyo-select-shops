(function () {
  "use strict";

  const CATEGORY_LABEL = {
    "high-sense": "ハイセンス",
    "high-fashion": "ハイファッション"
  };

  const TOKYO_CENTER = [35.6657, 139.7163]; // 南青山あたり
  const map = L.map("map", {
    center: TOKYO_CENTER,
    zoom: 13,
    zoomControl: true,
    scrollWheelZoom: true
  });

  // Dark base map (CARTO Dark Matter, free)
  L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; OpenStreetMap &copy; CARTO',
    subdomains: "abcd",
    maxZoom: 19
  }).addTo(map);

  /** @type {Map<string, L.Marker>} */
  const markers = new Map();
  /** @type {string} */
  let currentCategory = "all";

  // ---- Build markers ----
  window.SHOPS.forEach((shop) => {
    const icon = L.divIcon({
      className: "",
      html: `<div class="shop-marker ${shop.category}">${shop.rank}</div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -14]
    });

    const marker = L.marker(shop.coords, { icon }).bindPopup(buildPopupHTML(shop), {
      maxWidth: 280
    });

    marker.on("click", () => {
      highlightListItem(shop.id);
    });

    markers.set(shop.id, marker);
    marker.addTo(map);
  });

  function buildPopupHTML(shop) {
    const catLabel = CATEGORY_LABEL[shop.category] || "";
    return `
      <div class="popup-rank">${catLabel} ${shop.rank}位</div>
      <div class="popup-name">${escapeHtml(shop.name)}</div>
      <div class="popup-name-ja">${escapeHtml(shop.nameJa)}</div>
      <div class="popup-desc">${escapeHtml(shop.description)}</div>
      <div class="popup-meta">📍 ${escapeHtml(shop.address)}</div>
      ${shop.url ? `<a class="popup-link" href="${shop.url}" target="_blank" rel="noopener">公式サイト →</a>` : ""}
    `;
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (m) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[m]);
  }

  // ---- Build list ----
  const listEl = document.getElementById("shop-list");
  function renderList(category) {
    listEl.innerHTML = "";
    const filtered = window.SHOPS
      .filter((s) => category === "all" || s.category === category)
      .sort((a, b) => {
        // High-fashion first if ALL, then high-sense — within group sort by rank
        if (a.category !== b.category) {
          return a.category === "high-fashion" ? -1 : 1;
        }
        return a.rank - b.rank;
      });

    filtered.forEach((shop) => {
      const li = document.createElement("li");
      li.className = "shop-item";
      li.dataset.id = shop.id;
      li.innerHTML = `
        <div class="shop-item-head">
          <span class="shop-rank">${shop.rank}位</span>
          <span class="shop-cat ${shop.category}">${CATEGORY_LABEL[shop.category]}</span>
        </div>
        <div class="shop-name">${escapeHtml(shop.name)}</div>
        <div class="shop-name-ja">${escapeHtml(shop.nameJa)}</div>
        <div class="shop-area">📍 ${escapeHtml(shop.area)}</div>
      `;
      li.addEventListener("click", () => {
        focusShop(shop.id);
      });
      listEl.appendChild(li);
    });
  }

  function focusShop(id) {
    const shop = window.SHOPS.find((s) => s.id === id);
    if (!shop) return;
    const marker = markers.get(id);
    map.flyTo(shop.coords, 16, { duration: 0.6 });
    marker.openPopup();
    highlightListItem(id);
  }

  function highlightListItem(id) {
    Array.from(listEl.children).forEach((li) => {
      li.classList.toggle("is-active", li.dataset.id === id);
    });
    const active = listEl.querySelector(".shop-item.is-active");
    if (active) active.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // ---- Filter markers ----
  function applyCategory(category) {
    currentCategory = category;
    window.SHOPS.forEach((shop) => {
      const m = markers.get(shop.id);
      const visible = category === "all" || shop.category === category;
      if (visible) {
        if (!map.hasLayer(m)) m.addTo(map);
      } else {
        if (map.hasLayer(m)) map.removeLayer(m);
      }
    });
    renderList(category);
    // Fit bounds to visible markers
    const visibleCoords = window.SHOPS
      .filter((s) => category === "all" || s.category === category)
      .map((s) => s.coords);
    if (visibleCoords.length > 0) {
      map.flyToBounds(L.latLngBounds(visibleCoords).pad(0.15), { duration: 0.6 });
    }
  }

  // ---- Tabs ----
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");
      applyCategory(tab.dataset.category);
    });
  });

  // ---- Counts ----
  function updateCounts() {
    const all = window.SHOPS.length;
    const hs = window.SHOPS.filter((s) => s.category === "high-sense").length;
    const hf = window.SHOPS.filter((s) => s.category === "high-fashion").length;
    document.querySelector('[data-count="all"]').textContent = all;
    document.querySelector('[data-count="high-sense"]').textContent = hs;
    document.querySelector('[data-count="high-fashion"]').textContent = hf;
  }

  // ---- Init ----
  updateCounts();
  renderList("all");
})();
