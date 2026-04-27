(function () {
  "use strict";

  /* ============================================================
   * Constants
   * ============================================================ */
  const CATEGORY_LABEL = {
    "mens": "メンズ",
    "high-sense": "ハイセンス",
    "high-fashion": "ハイファッション",
    "street": "ストリート",
    "quality-simple": "上質シンプル"
  };
  const CATEGORY_ORDER = ["mens", "high-sense", "high-fashion", "street", "quality-simple"];

  // 主要駅の座標（出発/帰着用）
  const STATIONS = {
    shibuya:    { name: "渋谷駅",     coords: [35.6580, 139.7016] },
    harajuku:   { name: "原宿駅",     coords: [35.6702, 139.7026] },
    omotesando: { name: "表参道駅",   coords: [35.6654, 139.7126] },
    ginza:      { name: "銀座駅",     coords: [35.6717, 139.7649] },
    roppongi:   { name: "六本木駅",   coords: [35.6627, 139.7314] },
    nakameguro: { name: "中目黒駅",   coords: [35.6440, 139.6989] }
  };

  const TOKYO_CENTER = [35.6657, 139.7163];

  /* ============================================================
   * Map setup
   * ============================================================ */
  const map = L.map("map", { center: TOKYO_CENTER, zoom: 13, scrollWheelZoom: true });

  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: "&copy; OpenStreetMap &copy; CARTO",
    subdomains: "abcd",
    maxZoom: 19
  }).addTo(map);

  /** @type {Map<string, L.Marker>} */
  const markers = new Map();
  let currentCategory = "all";
  /** @type {Set<string>} 空 = すべてのエリアを表示 */
  const selectedAreas = new Set();
  let routeLayer = null;
  let routeMarkersLayer = null;

  /* ============================================================
   * Helpers
   * ============================================================ */
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (m) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[m]);
  }
  function primaryTag(shop) {
    for (const t of CATEGORY_ORDER) if (shop.tags.includes(t)) return t;
    return shop.tags[0];
  }
  // Lowest rank across all categories (for sorting & marker label)
  function bestRank(shop) {
    const vals = shop.ranks ? Object.values(shop.ranks) : [];
    return vals.length ? Math.min(...vals) : 999;
  }
  // Rank to display on a marker: prefer current category's rank if filtered
  function displayRank(shop) {
    if (currentCategory !== "all" && shop.ranks && shop.ranks[currentCategory] != null) {
      return shop.ranks[currentCategory];
    }
    const r = bestRank(shop);
    return r < 999 ? r : null;
  }
  // HTML for ranking badges per category (shown in cards & popups)
  function rankBadgesHtml(shop) {
    if (!shop.ranks) return "";
    return Object.entries(shop.ranks)
      .sort((a, b) => CATEGORY_ORDER.indexOf(a[0]) - CATEGORY_ORDER.indexOf(b[0]))
      .map(([cat, n]) => `<span class="rank-badge rank-${cat}">${CATEGORY_LABEL[cat]} <strong>${n}位</strong></span>`)
      .join("");
  }
  function shopMatchesCategory(shop, category) {
    return category === "all" || shop.tags.includes(category);
  }
  function shopMatchesAreas(shop) {
    return selectedAreas.size === 0 || selectedAreas.has(shop.area);
  }
  function shopMatchesFilters(shop) {
    return shopMatchesCategory(shop, currentCategory) && shopMatchesAreas(shop);
  }
  function fmtTime(min) {
    const total = Math.round(min);
    const h = Math.floor(total / 60), m = total % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  }
  function parseTime(s) {
    const [h, m] = s.split(":").map(Number);
    return h * 60 + m;
  }
  // Haversine distance in km
  function distKm(a, b) {
    const R = 6371;
    const toRad = (d) => d * Math.PI / 180;
    const dLat = toRad(b[0] - a[0]);
    const dLng = toRad(b[1] - a[1]);
    const lat1 = toRad(a[0]), lat2 = toRad(b[0]);
    const x = Math.sin(dLat/2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng/2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(x));
  }
  // Travel minutes between two coords
  function travelMin(a, b, mode) {
    const km = distKm(a, b);
    if (mode === "mixed") {
      if (km < 0.5) return Math.max(2, km * 1000 / 70);
      if (km < 1.2) return km * 1000 / 70 * 1.4;
      if (km < 4) return 12 + km * 3;          // walk to station + ride + walk
      return 18 + km * 2;
    }
    // walk-centric
    if (km < 0.5) return Math.max(2, km * 1000 / 70);
    if (km < 2.5) return km * 1000 / 70 * 1.4;
    return 10 + km * 4; // long distance still allowed but slower
  }

  /* ============================================================
   * Markers
   * ============================================================ */
  window.SHOPS.forEach((shop) => {
    const marker = L.marker(shop.coords, { icon: makeShopIcon(shop) })
      .bindPopup(buildPopupHTML(shop), { maxWidth: 300 });
    marker.on("click", () => highlightListItem(shop.id));
    marker.addTo(map);
    markers.set(shop.id, marker);
  });

  function makeShopIcon(shop) {
    const tag = (currentCategory !== "all" && shop.ranks && shop.ranks[currentCategory] != null)
      ? currentCategory : primaryTag(shop);
    const r = displayRank(shop);
    return L.divIcon({
      className: "",
      html: `<div class="shop-marker cat-${tag}" title="${escapeHtml(shop.name)}">${r ?? "•"}</div>`,
      iconSize: [28, 28], iconAnchor: [14, 14], popupAnchor: [0, -14]
    });
  }
  function refreshAllMarkerIcons() {
    window.SHOPS.forEach((shop) => {
      const m = markers.get(shop.id);
      if (m) m.setIcon(makeShopIcon(shop));
    });
  }

  function buildPopupHTML(shop) {
    const closedTxt = shop.hours.closedDays.length
      ? ` (定休: ${shop.hours.closedDays.map(jaDay).join("・")})` : "";
    const imgHtml = shop.image
      ? `<div class="popup-image"><img src="${escapeHtml(shop.image)}?width=600" alt="${escapeHtml(shop.name)}" loading="lazy" onerror="this.parentNode.style.display='none'" /></div>`
      : "";
    return `
      ${imgHtml}
      <div class="rank-badges">${rankBadgesHtml(shop)}</div>
      <div class="popup-name">${escapeHtml(shop.name)}</div>
      <div class="popup-name-ja">${escapeHtml(shop.nameJa)}</div>
      <div class="popup-desc">${escapeHtml(shop.description)}</div>
      <div class="popup-meta">📍 ${escapeHtml(shop.address)}</div>
      <div class="popup-meta">🕐 ${shop.hours.open}–${shop.hours.close}${closedTxt} ／ 滞在目安 ${shop.stayMin}分</div>
      ${shop.url ? `<a class="popup-link" href="${shop.url}" target="_blank" rel="noopener">公式サイト →</a>` : ""}
    `;
  }
  function jaDay(d) {
    return ({ Mon:"月", Tue:"火", Wed:"水", Thu:"木", Fri:"金", Sat:"土", Sun:"日" })[d] || d;
  }

  /* ============================================================
   * List rendering
   * ============================================================ */
  const listEl = document.getElementById("shop-list");
  const listCountEl = document.getElementById("list-count");

  function renderList() {
    listEl.innerHTML = "";
    const filtered = window.SHOPS
      .filter(shopMatchesFilters)
      .sort((a, b) => {
        // Sort by rank in current category if filtered, else best rank
        const ra = (currentCategory !== "all" && a.ranks?.[currentCategory] != null)
          ? a.ranks[currentCategory] : bestRank(a);
        const rb = (currentCategory !== "all" && b.ranks?.[currentCategory] != null)
          ? b.ranks[currentCategory] : bestRank(b);
        if (ra !== rb) return ra - rb;
        return a.name.localeCompare(b.name);
      });

    const areaLabel = selectedAreas.size === 0
      ? ""
      : ` ／ 📍${Array.from(selectedAreas).join("・")}`;
    listCountEl.textContent = `${filtered.length}店表示中${areaLabel}`;

    filtered.forEach((shop) => {
      const li = document.createElement("li");
      li.className = "shop-item";
      li.dataset.id = shop.id;
      const closedTxt = shop.hours.closedDays.length
        ? `定休:${shop.hours.closedDays.map(jaDay).join("・")}` : "";
      const thumbHtml = shop.image
        ? `<div class="shop-thumb"><img src="${escapeHtml(shop.image)}?width=400" alt="" loading="lazy" onerror="this.parentNode.style.display='none'" /></div>`
        : "";
      li.innerHTML = `
        ${thumbHtml}
        <div class="shop-body">
          <div class="rank-badges">${rankBadgesHtml(shop)}</div>
          <div class="shop-name">${escapeHtml(shop.name)}</div>
          <div class="shop-name-ja">${escapeHtml(shop.nameJa)}</div>
          <div class="shop-desc">${escapeHtml(shop.description)}</div>
          <div class="shop-meta">
            <span>📍 ${escapeHtml(shop.area)}</span>
            <span>🕐 ${shop.hours.open}–${shop.hours.close}</span>
            <span>⏱ ${shop.stayMin}分</span>
            ${closedTxt ? `<span>🚫 ${closedTxt}</span>` : ""}
          </div>
        </div>
      `;
      li.addEventListener("click", () => focusShop(shop.id));
      listEl.appendChild(li);
    });
  }

  function focusShop(id) {
    const shop = window.SHOPS.find((s) => s.id === id);
    if (!shop) return;
    const marker = markers.get(id);
    map.flyTo(shop.coords, 16, { duration: 0.5 });
    if (marker) marker.openPopup();
    highlightListItem(id);
  }
  function highlightListItem(id) {
    Array.from(listEl.children).forEach((li) => {
      li.classList.toggle("is-active", li.dataset.id === id);
    });
    const active = listEl.querySelector(".shop-item.is-active");
    if (active) active.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  /* ============================================================
   * Filters: category (tabs) + area (dropdown)
   * ============================================================ */
  function applyFilters() {
    refreshAllMarkerIcons();
    window.SHOPS.forEach((shop) => {
      const m = markers.get(shop.id);
      const visible = shopMatchesFilters(shop);
      if (visible) { if (!map.hasLayer(m)) m.addTo(map); }
      else { if (map.hasLayer(m)) map.removeLayer(m); }
    });
    renderList();
    updateCounts();
    const visibleCoords = window.SHOPS.filter(shopMatchesFilters).map((s) => s.coords);
    if (visibleCoords.length > 0) {
      map.flyToBounds(L.latLngBounds(visibleCoords).pad(0.18), { duration: 0.5 });
    }
  }

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((t) => {
        t.classList.remove("is-active"); t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active"); tab.setAttribute("aria-selected", "true");
      currentCategory = tab.dataset.category;
      applyFilters();
    });
  });

  // ----- Area multi-select (popover) -----
  const areaButton = document.getElementById("area-button");
  const areaButtonLabel = document.getElementById("area-button-label");
  const areaPopover = document.getElementById("area-popover");
  const areaOptionsEl = document.getElementById("area-options");

  function buildAreaOptions() {
    const counts = new Map();
    window.SHOPS.forEach((s) => counts.set(s.area, (counts.get(s.area) || 0) + 1));
    const areas = Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], "ja"));

    areaOptionsEl.innerHTML = areas.map(([area, n]) => `
      <label>
        <input type="checkbox" value="${escapeHtml(area)}" ${selectedAreas.has(area) ? "checked" : ""} />
        <span>${escapeHtml(area)}</span>
        <span class="area-count">${n}</span>
      </label>
    `).join("");

    areaOptionsEl.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
      cb.addEventListener("change", () => {
        if (cb.checked) selectedAreas.add(cb.value);
        else selectedAreas.delete(cb.value);
        updateAreaButtonLabel();
        applyFilters();
      });
    });
  }

  function updateAreaButtonLabel() {
    if (selectedAreas.size === 0) {
      areaButtonLabel.textContent = "すべて";
    } else if (selectedAreas.size === 1) {
      areaButtonLabel.textContent = Array.from(selectedAreas)[0];
    } else {
      const arr = Array.from(selectedAreas);
      areaButtonLabel.textContent = `${arr[0]} +${arr.length - 1}件`;
    }
  }

  areaButton.addEventListener("click", (e) => {
    e.stopPropagation();
    const opening = areaPopover.classList.contains("is-hidden");
    areaPopover.classList.toggle("is-hidden");
    areaButton.setAttribute("aria-expanded", String(opening));
  });
  document.addEventListener("click", (e) => {
    if (!areaPopover.classList.contains("is-hidden")
        && !areaPopover.contains(e.target)
        && !areaButton.contains(e.target)) {
      areaPopover.classList.add("is-hidden");
      areaButton.setAttribute("aria-expanded", "false");
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !areaPopover.classList.contains("is-hidden")) {
      areaPopover.classList.add("is-hidden");
      areaButton.setAttribute("aria-expanded", "false");
    }
  });

  document.getElementById("area-select-all").addEventListener("click", () => {
    selectedAreas.clear();
    window.SHOPS.forEach((s) => selectedAreas.add(s.area));
    syncAreaCheckboxes();
    updateAreaButtonLabel();
    applyFilters();
  });
  document.getElementById("area-select-none").addEventListener("click", () => {
    selectedAreas.clear();
    syncAreaCheckboxes();
    updateAreaButtonLabel();
    applyFilters();
  });
  function syncAreaCheckboxes() {
    areaOptionsEl.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
      cb.checked = selectedAreas.has(cb.value);
    });
  }

  // Counts adapt to current area filter so tab badges are meaningful
  function updateCounts() {
    const inArea = shopMatchesAreas;
    document.querySelector('[data-count="all"]').textContent = window.SHOPS.filter(inArea).length;
    CATEGORY_ORDER.forEach((cat) => {
      const el = document.querySelector(`[data-count="${cat}"]`);
      if (el) el.textContent = window.SHOPS.filter((s) => inArea(s) && s.tags.includes(cat)).length;
    });
  }

  /* ============================================================
   * Panel mode toggle (list / route)
   * ============================================================ */
  document.querySelectorAll(".panel-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".panel-tab").forEach((t) => {
        t.classList.remove("is-active"); t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("is-active"); tab.setAttribute("aria-selected", "true");
      const mode = tab.dataset.mode;
      document.querySelectorAll(".panel-body").forEach((b) => {
        b.classList.toggle("is-hidden", b.dataset.pane !== mode);
      });
      if (mode === "route") buildShopChecklist();
    });
  });

  document.getElementById("btn-route-from-list").addEventListener("click", () => {
    document.querySelector('.panel-tab[data-mode="route"]').click();
    setTimeout(() => selectChecksByCurrentFilters(), 0);
  });

  /* ============================================================
   * Route planner
   * ============================================================ */
  const routeForm = document.getElementById("route-form");
  const routeChecksEl = document.getElementById("route-shop-checks");
  const routeResultEl = document.getElementById("route-result");

  function buildShopChecklist() {
    routeChecksEl.innerHTML = "";
    const sorted = [...window.SHOPS].sort((a, b) => {
      const aa = primaryTag(a), bb = primaryTag(b);
      if (aa !== bb) return CATEGORY_ORDER.indexOf(aa) - CATEGORY_ORDER.indexOf(bb);
      return bestRank(a) - bestRank(b);
    });
    sorted.forEach((shop) => {
      const id = `chk-${shop.id}`;
      const checked = shopMatchesFilters(shop);
      const el = document.createElement("label");
      el.innerHTML = `
        <input type="checkbox" id="${id}" value="${shop.id}" ${checked ? "checked" : ""} />
        <span>${escapeHtml(shop.name)} <span style="color:var(--text-faint)">(${escapeHtml(shop.area)})</span></span>
      `;
      routeChecksEl.appendChild(el);
    });
  }
  function selectChecksByCurrentFilters() {
    routeChecksEl.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
      const shop = window.SHOPS.find((s) => s.id === cb.value);
      cb.checked = shopMatchesFilters(shop);
    });
  }

  document.getElementById("btn-select-all").addEventListener("click", () =>
    routeChecksEl.querySelectorAll('input[type="checkbox"]').forEach((cb) => cb.checked = true));
  document.getElementById("btn-select-none").addEventListener("click", () =>
    routeChecksEl.querySelectorAll('input[type="checkbox"]').forEach((cb) => cb.checked = false));
  document.getElementById("btn-select-current").addEventListener("click", () =>
    selectChecksByCurrentFilters());

  routeForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const fd = new FormData(routeForm);
    const startMin = parseTime(fd.get("startTime"));
    const endMin = parseTime(fd.get("endTime"));
    const defaultStay = Number(fd.get("defaultStay"));
    const travelMode = fd.get("travelMode");
    const startKey = fd.get("startPoint");
    const endKey = fd.get("endPoint");

    const startPoint = await resolveStartPoint(startKey);
    if (!startPoint) return;
    const endPoint = endKey === "same" ? startPoint : { name: STATIONS[endKey].name, coords: STATIONS[endKey].coords };

    const selectedIds = Array.from(routeChecksEl.querySelectorAll('input:checked')).map((cb) => cb.value);
    if (selectedIds.length === 0) {
      alert("対象ショップを1件以上選択してください。");
      return;
    }
    const candidates = selectedIds.map((id) => window.SHOPS.find((s) => s.id === id));

    if (endMin <= startMin) {
      alert("終了時刻は開始時刻より後に設定してください。");
      return;
    }

    const result = planRoute({
      startPoint, endPoint,
      startMin, endMin,
      candidates,
      defaultStay,
      travelMode,
      // 今日の曜日で定休日チェック
      todayKey: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][new Date().getDay()]
    });

    renderRoute(result, { startPoint, endPoint });
  });

  async function resolveStartPoint(key) {
    if (key === "geo") {
      try {
        const pos = await new Promise((res, rej) => {
          navigator.geolocation.getCurrentPosition(res, rej, { timeout: 10000 });
        });
        return { name: "現在地", coords: [pos.coords.latitude, pos.coords.longitude] };
      } catch (e) {
        alert("現在地が取得できませんでした。別の出発地点を選んでください。");
        return null;
      }
    }
    const st = STATIONS[key];
    return st ? { name: st.name, coords: st.coords } : null;
  }

  /* ----- Greedy + 2-opt orienteering with time windows ----- */
  function planRoute({ startPoint, endPoint, startMin, endMin, candidates, defaultStay, travelMode, todayKey }) {
    // Filter out shops closed today
    const usable = candidates.filter((s) => !s.hours.closedDays.includes(todayKey));
    const closedToday = candidates.filter((s) => s.hours.closedDays.includes(todayKey));

    const plan = greedy(usable);
    const optimized = twoOpt(plan, usable);
    return {
      timeline: optimized.timeline,
      visited: optimized.visited,
      skipped: candidates.filter((s) => !optimized.visited.find((v) => v.shop.id === s.id)),
      closedToday,
      totals: optimized.totals
    };

    function greedy(pool) {
      let curTime = startMin, curLoc = startPoint.coords;
      const remaining = new Set(pool.map((s) => s.id));
      const visited = [];
      while (remaining.size > 0) {
        let best = null, bestArrival = null, bestTravel = null;
        for (const id of remaining) {
          const s = pool.find((x) => x.id === id);
          const tt = travelMin(curLoc, s.coords, travelMode);
          const arrive = Math.max(curTime + tt, parseTime(s.hours.open));
          const stay = s.stayMin || defaultStay;
          const depart = arrive + stay;
          if (depart > parseTime(s.hours.close)) continue;
          const tBack = travelMin(s.coords, endPoint.coords, travelMode);
          if (depart + tBack > endMin) continue;
          if (best === null || tt < bestTravel) {
            best = s; bestTravel = tt; bestArrival = arrive;
          }
        }
        if (!best) break;
        const stay = best.stayMin || defaultStay;
        visited.push({
          shop: best,
          travelFromPrev: bestTravel,
          arrive: bestArrival,
          stay,
          depart: bestArrival + stay
        });
        curTime = bestArrival + stay;
        curLoc = best.coords;
        remaining.delete(best.id);
      }
      return visited;
    }

    function evaluateOrder(order) {
      // Returns null if infeasible, else {visited, totals, timeline}
      let curTime = startMin, curLoc = startPoint.coords;
      const visited = [];
      let totalTravel = 0, totalStay = 0;
      for (const s of order) {
        const tt = travelMin(curLoc, s.coords, travelMode);
        const arrive = Math.max(curTime + tt, parseTime(s.hours.open));
        const stay = s.stayMin || defaultStay;
        const depart = arrive + stay;
        if (depart > parseTime(s.hours.close)) return null;
        const tBack = travelMin(s.coords, endPoint.coords, travelMode);
        if (depart + tBack > endMin) return null;
        visited.push({ shop: s, travelFromPrev: tt, arrive, stay, depart });
        totalTravel += tt; totalStay += stay;
        curTime = depart; curLoc = s.coords;
      }
      const tFinal = travelMin(curLoc, endPoint.coords, travelMode);
      const finishTime = curTime + tFinal;
      const timeline = buildTimeline(visited, tFinal, finishTime);
      return {
        visited,
        totals: {
          count: visited.length,
          travel: totalTravel + tFinal,
          stay: totalStay,
          startMin, endMin,
          finishTime,
          slack: endMin - finishTime
        },
        timeline
      };
    }

    function twoOpt(initial, pool) {
      let best = evaluateOrder(initial.map((v) => v.shop));
      if (!best) return { visited: [], totals: { count: 0, travel: 0, stay: 0, finishTime: startMin, slack: endMin - startMin }, timeline: [] };

      const order = initial.map((v) => v.shop);
      let improved = true, guard = 0;
      while (improved && guard < 4) {
        improved = false; guard++;
        for (let i = 0; i < order.length - 1; i++) {
          for (let j = i + 1; j < order.length; j++) {
            const next = [...order.slice(0, i), ...order.slice(i, j + 1).reverse(), ...order.slice(j + 1)];
            const cand = evaluateOrder(next);
            if (cand && (cand.visited.length > best.visited.length ||
                (cand.visited.length === best.visited.length && cand.totals.travel < best.totals.travel))) {
              best = cand; order.splice(0, order.length, ...next); improved = true;
            }
          }
        }
      }

      // Try inserting any unvisited candidates if time permits
      const visitedIds = new Set(best.visited.map((v) => v.shop.id));
      const leftover = pool.filter((s) => !visitedIds.has(s.id));
      let inserted = true; let guard2 = 0;
      while (inserted && guard2 < 6) {
        inserted = false; guard2++;
        for (const s of leftover) {
          if (visitedIds.has(s.id)) continue;
          for (let i = 0; i <= order.length; i++) {
            const cand = evaluateOrder([...order.slice(0, i), s, ...order.slice(i)]);
            if (cand && cand.visited.length > best.visited.length) {
              best = cand;
              order.splice(0, order.length, ...cand.visited.map((v) => v.shop));
              visitedIds.add(s.id);
              inserted = true;
              break;
            }
          }
          if (inserted) break;
        }
      }
      return best;
    }

    function buildTimeline(visited, tFinal, finishTime) {
      const items = [];
      items.push({ kind: "terminus", label: "出発", time: startMin, name: startPoint.name });
      for (let i = 0; i < visited.length; i++) {
        const v = visited[i];
        items.push({ kind: "travel", time: null, minutes: Math.round(v.travelFromPrev) });
        items.push({
          kind: "stop", index: i + 1, time: v.arrive, depart: v.depart,
          shop: v.shop, stay: v.stay
        });
      }
      items.push({ kind: "travel", time: null, minutes: Math.round(tFinal) });
      items.push({ kind: "terminus", label: "帰着", time: finishTime, name: endPoint.name });
      return items;
    }
  }

  /* ----- Route rendering ----- */
  function renderRoute(result, { startPoint, endPoint }) {
    if (routeLayer) { map.removeLayer(routeLayer); routeLayer = null; }
    if (routeMarkersLayer) { map.removeLayer(routeMarkersLayer); routeMarkersLayer = null; }

    const { timeline, visited, totals, skipped, closedToday } = result;
    const stops = visited.map((v) => v.shop);

    if (visited.length === 0) {
      routeResultEl.classList.remove("is-hidden");
      routeResultEl.innerHTML = `
        <div class="route-warning">条件に合うルートを見つけられませんでした。終了時刻を延ばすか、対象ショップを増やしてみてください。</div>
      `;
      return;
    }

    // Polyline through start → stops → end
    const path = [startPoint.coords, ...stops.map((s) => s.coords), endPoint.coords];
    routeLayer = L.polyline(path, {
      color: "#b8902a", weight: 3.5, opacity: 0.9,
      dashArray: "8 8", lineCap: "round"
    }).addTo(map);

    // Numbered route markers
    routeMarkersLayer = L.layerGroup().addTo(map);
    addRouteMarker(startPoint.coords, "S", true);
    visited.forEach((v, i) => addRouteMarker(v.shop.coords, String(i + 1), false));
    if (endPoint.coords[0] !== startPoint.coords[0] || endPoint.coords[1] !== startPoint.coords[1]) {
      addRouteMarker(endPoint.coords, "G", true);
    } else {
      // start = end: combine label
      addRouteMarker(endPoint.coords, "S/G", true);
    }
    map.flyToBounds(L.latLngBounds(path).pad(0.15), { duration: 0.5 });

    // Result panel
    const skippedHtml = (skipped.length || closedToday.length) ? `
      <div class="skipped">
        ${skipped.length ? `<strong>時間内に行けなかった (${skipped.length}店):</strong>
          <ul>${skipped.map((s) => `<li>${escapeHtml(s.name)} (${escapeHtml(s.area)})</li>`).join("")}</ul>` : ""}
        ${closedToday.length ? `<strong>今日は定休日 (${closedToday.length}店):</strong>
          <ul>${closedToday.map((s) => `<li>${escapeHtml(s.name)} (${escapeHtml(s.area)})</li>`).join("")}</ul>` : ""}
      </div>` : "";

    routeResultEl.classList.remove("is-hidden");
    routeResultEl.innerHTML = `
      <h3>計算結果</h3>
      <div class="route-summary">
        <div class="route-summary-item"><span class="label">訪問数</span><span class="value">${visited.length}店</span></div>
        <div class="route-summary-item"><span class="label">移動合計</span><span class="value">${Math.round(totals.travel)}分</span></div>
        <div class="route-summary-item"><span class="label">滞在合計</span><span class="value">${Math.round(totals.stay)}分</span></div>
      </div>
      ${totals.slack < 0 ? `<div class="route-warning">⚠ 帰着が ${Math.abs(Math.round(totals.slack))} 分超過しています</div>` : ""}
      <ol class="timeline">${timeline.map(timelineItemHtml).join("")}</ol>
      ${skippedHtml}
    `;

    // Click on timeline item → focus shop
    routeResultEl.querySelectorAll("[data-shop-id]").forEach((el) => {
      el.addEventListener("click", () => focusShop(el.dataset.shopId));
    });
  }

  function timelineItemHtml(item) {
    if (item.kind === "terminus") {
      return `<li class="timeline-item terminus">
        <span class="timeline-dot">${item.label === "出発" ? "▶" : "■"}</span>
        <div class="timeline-time">${fmtTime(item.time)}</div>
        <div class="timeline-name">${escapeHtml(item.label)}： ${escapeHtml(item.name)}</div>
      </li>`;
    }
    if (item.kind === "travel") {
      return `<li class="timeline-item travel">
        <span class="timeline-dot">▼</span>
        <div class="timeline-meta">移動 約 ${item.minutes} 分</div>
      </li>`;
    }
    // stop
    const s = item.shop;
    return `<li class="timeline-item" data-shop-id="${s.id}" style="cursor:pointer">
      <span class="timeline-dot">${item.index}</span>
      <div class="timeline-time">${fmtTime(item.time)}〜${fmtTime(item.depart)} (${item.stay}分)</div>
      <div class="timeline-name">${escapeHtml(s.name)}</div>
      <div class="timeline-meta">${escapeHtml(s.area)} ／ ${s.hours.open}–${s.hours.close}</div>
    </li>`;
  }

  function addRouteMarker(coords, label, isTerminus) {
    const icon = L.divIcon({
      className: "",
      html: `<div class="route-marker ${isTerminus ? "terminus" : ""}">${escapeHtml(label)}</div>`,
      iconSize: [32, 32], iconAnchor: [16, 16]
    });
    L.marker(coords, { icon, zIndexOffset: 1000 }).addTo(routeMarkersLayer);
  }

  /* ============================================================
   * Init
   * ============================================================ */
  buildAreaOptions();
  updateCounts();
  renderList();
})();
