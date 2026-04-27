// 東京セレクトショップ データ
// category: "high-sense" (ハイセンス) | "high-fashion" (ハイファッション)
// coords: [lat, lng]  (Google Maps基準のおおよその座標)
window.SHOPS = [
  // ================== ハイファッション編 ==================
  {
    id: "dover-street-market-ginza",
    name: "DOVER STREET MARKET GINZA",
    nameJa: "ドーバー ストリート マーケット 銀座",
    category: "high-fashion",
    rank: 1,
    area: "銀座",
    address: "東京都中央区銀座6-9-5 ギンザコマツ東館",
    coords: [35.6699, 139.7642],
    description: "コム・デ・ギャルソンの川久保玲氏がディレクションする世界的セレクトショップ。ハイブランドの最先端アイテムが揃う。",
    url: "https://ginza.doverstreetmarket.com/"
  },
  {
    id: "estnation-roppongi",
    name: "ESTNATION Roppongi Hills",
    nameJa: "エストネーション 六本木ヒルズ",
    category: "high-fashion",
    rank: 2,
    area: "六本木",
    address: "東京都港区六本木6-10-1 六本木ヒルズ ウェストウォーク3F",
    coords: [35.6604, 139.7292],
    description: "国内外のラグジュアリーブランドを揃えるラージスケールのフラッグシップ。",
    url: "https://www.estnation.co.jp/"
  },
  {
    id: "restir-roppongi",
    name: "RESTIR Boutique",
    nameJa: "リステア ブティック",
    category: "high-fashion",
    rank: 3,
    area: "六本木",
    address: "東京都港区赤坂9-7-2 東京ミッドタウン ガレリア2F",
    coords: [35.6657, 139.7308],
    description: "東京ミッドタウン内、上質で大人なハイブランドラインナップ。",
    url: "https://restir.com/"
  },
  {
    id: "gr8",
    name: "GR8",
    nameJa: "グレイト",
    category: "high-fashion",
    rank: 4,
    area: "原宿",
    address: "東京都渋谷区神宮前1-11-6 ラフォーレ原宿 2F",
    coords: [35.6685, 139.7035],
    description: "原宿ラフォーレ内、ストリート×ハイファッションの先端を行く話題のショップ。",
    url: "https://gr8.jp/"
  },
  {
    id: "addition-adelaide",
    name: "ADDITION ADELAIDE",
    nameJa: "アディッション アデライデ",
    category: "high-fashion",
    rank: 5,
    area: "南青山",
    address: "東京都港区南青山5-2-12",
    coords: [35.6635, 139.7160],
    description: "南青山の隠れ家的ハイファッション。モード好きの大人女性に支持される。",
    url: "https://www.adeladd.com/"
  },
  {
    id: "tabaya-united-arrows",
    name: "TABAYA UNITED ARROWS",
    nameJa: "タバヤ ユナイテッドアローズ",
    category: "high-fashion",
    rank: 6,
    area: "南青山",
    address: "東京都港区南青山4-21-25",
    coords: [35.6660, 139.7180],
    description: "ユナイテッドアローズの上級ラインを揃える、青山の隠れ家的ブティック。",
    url: "https://store.united-arrows.co.jp/shop/ua/tabaya/"
  },
  {
    id: "international-gallery-beams",
    name: "International Gallery BEAMS",
    nameJa: "インターナショナル ギャラリー ビームス 原宿",
    category: "high-fashion",
    rank: 7,
    area: "原宿",
    address: "東京都渋谷区神宮前3-25-15 1F",
    coords: [35.6710, 139.7062],
    description: "BEAMSのモードライン旗艦店。世界中のクリエイションが集結。",
    url: "https://www.beams.co.jp/shop/igb/"
  },
  {
    id: "land-of-tomorrow",
    name: "LAND OF TOMORROW",
    nameJa: "ランド オブ トゥモロー 丸の内店",
    category: "high-fashion",
    rank: 8,
    area: "丸の内",
    address: "東京都千代田区丸の内2-7-2 JPタワー KITTE 4F",
    coords: [35.6795, 139.7649],
    description: "丸の内KITTE内、洗練された上質モードを展開。",
    url: "https://www.land-of-tomorrow.com/"
  },
  {
    id: "lift-daikanyama",
    name: "Lift DAIKANYAMA",
    nameJa: "リフト 代官山",
    category: "high-fashion",
    rank: 9,
    area: "代官山",
    address: "東京都渋谷区猿楽町11-1 代官山アドレス・ディセ 2F",
    coords: [35.6488, 139.7036],
    description: "代官山アドレス内、希少なインポートブランドが見つかる。",
    url: "https://lift-tokyo.com/"
  },
  {
    id: "midwest-tokyo",
    name: "MIDWEST TOKYO",
    nameJa: "ミッドウエスト トウキョウ",
    category: "high-fashion",
    rank: 10,
    area: "渋谷",
    address: "東京都渋谷区神宮前6-18-11",
    coords: [35.6670, 139.7050],
    description: "国内外の旬ブランドをいち早く取り入れるセレクト。",
    url: "https://midwest.jp/"
  },

  // ================== ハイセンス編 ==================
  {
    id: "biotop",
    name: "BIOTOP",
    nameJa: "ビオトープ",
    category: "high-sense",
    rank: 1,
    area: "白金台",
    address: "東京都港区白金台4-6-44",
    coords: [35.6388, 139.7217],
    description: "ファッション×ライフスタイル×カフェ×グリーンを融合する複合セレクトショップ。",
    url: "https://www.biotop.jp/"
  },
  {
    id: "graphpaper",
    name: "Graphpaper",
    nameJa: "グラフペーパー",
    category: "high-sense",
    rank: 2,
    area: "南青山",
    address: "東京都港区南青山5-3-12",
    coords: [35.6647, 139.7163],
    description: "南貴之氏ディレクション。ミニマルかつ知的なスタイルで国内外から高い支持。",
    url: "https://www.graphpaper-tokyo.com/"
  },
  {
    id: "h-beauty-and-youth",
    name: "H BEAUTY&YOUTH",
    nameJa: "エイチ ビューティーアンドユース",
    category: "high-sense",
    rank: 3,
    area: "南青山",
    address: "東京都港区南青山6-1-3 H 1〜2F",
    coords: [35.6618, 139.7156],
    description: "ユナイテッドアローズの上級セレクト。建築自体もアート性が高い。",
    url: "https://store.united-arrows.co.jp/shop/by/h/"
  },
  {
    id: "ron-herman-sendagaya",
    name: "Ron Herman Sendagaya",
    nameJa: "ロン ハーマン 千駄ヶ谷店",
    category: "high-sense",
    rank: 4,
    area: "千駄ヶ谷",
    address: "東京都渋谷区千駄ヶ谷3-63-12",
    coords: [35.6789, 139.7067],
    description: "L.A.発の人気店。リラックスムードと上質な生活感が魅力。",
    url: "https://www.ronherman.jp/"
  },
  {
    id: "cabinet-of-curiosities",
    name: "CABINET OF CURIOSITIES",
    nameJa: "キャビネット オブ キュリオシティーズ",
    category: "high-sense",
    rank: 5,
    area: "代々木八幡",
    address: "東京都渋谷区上原1-17-12",
    coords: [35.6713, 139.6862],
    description: "ヴィンテージ家具とモードを融合した独自の世界観。",
    url: "https://www.cabinetofcuriosities.jp/"
  },
  {
    id: "carol",
    name: "carol",
    nameJa: "キャロル",
    category: "high-sense",
    rank: 6,
    area: "三軒茶屋",
    address: "東京都世田谷区三軒茶屋1-32-12",
    coords: [35.6437, 139.6707],
    description: "三軒茶屋の路地裏、こだわりが詰まった大人カジュアル。",
    url: "https://carol-online.jp/"
  },
  {
    id: "coverchord-nakameguro",
    name: "COVERCHORD nakameguro",
    nameJa: "カバーコード 中目黒",
    category: "high-sense",
    rank: 7,
    area: "中目黒",
    address: "東京都目黒区青葉台1-14-11",
    coords: [35.6447, 139.6989],
    description: "中目黒のニュー定番、洗練ミニマルなセレクト。",
    url: "https://coverchord.com/"
  },
  {
    id: "1ldk-aoyama",
    name: "1LDK AOYAMA",
    nameJa: "ワンエルディーケー青山",
    category: "high-sense",
    rank: 8,
    area: "北青山",
    address: "東京都港区北青山3-7-12 1F",
    coords: [35.6651, 139.7202],
    description: "アパレル・雑貨・カフェをミックスした青山のコンセプトショップ。",
    url: "https://1ldkshop.com/"
  },
  {
    id: "the-library-omotesando",
    name: "THE LIBRARY 表参道店",
    nameJa: "ザ ライブラリー 表参道店",
    category: "high-sense",
    rank: 9,
    area: "表参道",
    address: "東京都渋谷区神宮前5-3-23",
    coords: [35.6657, 139.7088],
    description: "表参道のバックストリートにあるシックなセレクトショップ。",
    url: "https://www.thelibrary.tokyo/"
  },
  {
    id: "style-department",
    name: "style department",
    nameJa: "スタイル デパートメント",
    category: "high-sense",
    rank: 10,
    area: "表参道",
    address: "東京都渋谷区神宮前4-25-15",
    coords: [35.6691, 139.7095],
    description: "表参道の路地裏、独自視点でセレクトされた一点モノが揃う。",
    url: "https://styledepartment.jp/"
  }
];
