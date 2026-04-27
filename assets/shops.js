// 東京セレクトショップ データ
//
// tags: ["mens","high-sense","high-fashion","street","quality-simple"] から複数指定
// hours: { open:"HH:MM", close:"HH:MM", closedDays:["Sun","Mon",...] }  // 不定休/常時OPEN は closedDays:[]
// stayMin: 標準滞在時間（分）。利用者がUI側でも上書き可能
// rank: 元記事ランキング（参考表示用）
//
// ※ 座標は Google Maps ベースで概算しています。実住所と微差がある場合は coords を直接修正してください。
window.SHOPS = [
  /* ============================================================
   * ハイファッション編 (ベスト10)
   * ============================================================ */
  {
    id: "dover-street-market-ginza", name: "DOVER STREET MARKET GINZA", nameJa: "ドーバー ストリート マーケット 銀座",
    tags: ["high-fashion","mens"], rank: 1, area: "銀座",
    address: "東京都中央区銀座6-9-5 ギンザコマツ東館",
    coords: [35.6699, 139.7642],
    description: "コム・デ・ギャルソンの川久保玲がディレクションする世界的ハイブランド集積店。フロアごとに違うインスタレーション空間。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 50,
    url: "https://ginza.doverstreetmarket.com/"
  },
  {
    id: "estnation-roppongi", name: "ESTNATION Roppongi Hills", nameJa: "エストネーション 六本木ヒルズ",
    tags: ["high-fashion","mens"], rank: 2, area: "六本木",
    address: "東京都港区六本木6-10-1 六本木ヒルズ ウェストウォーク3F",
    coords: [35.6604, 139.7292],
    description: "国内外ラグジュアリーを大型フロアで揃える。落ち着いた接客とフォーマル寄りの品揃え。",
    hours: { open: "11:00", close: "21:00", closedDays: [] }, stayMin: 40,
    url: "https://www.estnation.co.jp/"
  },
  {
    id: "restir-roppongi", name: "RESTIR Boutique", nameJa: "リステア ブティック",
    tags: ["high-fashion"], rank: 3, area: "六本木",
    address: "東京都港区赤坂9-7-2 東京ミッドタウン ガレリア2F",
    coords: [35.6657, 139.7308],
    description: "東京ミッドタウン内、上質で大人なハイブランド。鉄板の銘品が見つかる。",
    hours: { open: "11:00", close: "21:00", closedDays: [] }, stayMin: 35,
    url: "https://restir.com/"
  },
  {
    id: "gr8", name: "GR8", nameJa: "グレイト",
    tags: ["high-fashion","street","mens"], rank: 4, area: "原宿",
    address: "東京都渋谷区神宮前1-11-6 ラフォーレ原宿 2F",
    coords: [35.6685, 139.7035],
    description: "ストリート×ハイブランドの先端。ラフォーレ原宿内、新進気鋭デザイナーの取扱量が圧巻。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 30,
    url: "https://gr8.jp/"
  },
  {
    id: "addition-adelaide", name: "ADDITION ADELAIDE", nameJa: "アディッション アデライデ",
    tags: ["high-fashion"], rank: 5, area: "南青山",
    address: "東京都港区南青山5-2-12",
    coords: [35.6635, 139.7160],
    description: "南青山の隠れ家的ハイファッション。モード好きの大人女性に支持される。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 30,
    url: "https://www.adeladd.com/"
  },
  {
    id: "tabaya-united-arrows", name: "TABAYA UNITED ARROWS", nameJa: "タバヤ ユナイテッドアローズ",
    tags: ["high-fashion","mens"], rank: 6, area: "南青山",
    address: "東京都港区南青山4-21-25",
    coords: [35.6660, 139.7180],
    description: "ユナイテッドアローズの上級ライン。青山の隠れ家的ブティック、限定ピースが揃う。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 30,
    url: "https://store.united-arrows.co.jp/shop/ua/tabaya/"
  },
  {
    id: "international-gallery-beams", name: "International Gallery BEAMS", nameJa: "インターナショナル ギャラリー ビームス 原宿",
    tags: ["high-fashion","mens"], rank: 7, area: "原宿",
    address: "東京都渋谷区神宮前3-25-15 1F",
    coords: [35.6710, 139.7062],
    description: "BEAMSのモードライン旗艦店。世界中のクリエイションが集結する別格の品揃え。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 30,
    url: "https://www.beams.co.jp/shop/igb/"
  },
  {
    id: "land-of-tomorrow", name: "LAND OF TOMORROW", nameJa: "ランド オブ トゥモロー 丸の内店",
    tags: ["high-fashion"], rank: 8, area: "丸の内",
    address: "東京都千代田区丸の内2-7-2 JPタワー KITTE 4F",
    coords: [35.6795, 139.7649],
    description: "丸の内KITTE内、洗練された上質モード。出張のついでに寄りやすい立地。",
    hours: { open: "11:00", close: "21:00", closedDays: [] }, stayMin: 30,
    url: "https://www.land-of-tomorrow.com/"
  },
  {
    id: "lift-daikanyama", name: "Lift DAIKANYAMA", nameJa: "リフト 代官山",
    tags: ["high-fashion","mens"], rank: 9, area: "代官山",
    address: "東京都渋谷区猿楽町11-1 代官山アドレス・ディセ 2F",
    coords: [35.6488, 139.7036],
    description: "代官山アドレス内、希少なインポートブランドが見つかる。スニーカーとモードの融合店。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://lift-tokyo.com/"
  },
  {
    id: "midwest-tokyo", name: "MIDWEST TOKYO", nameJa: "ミッドウエスト トウキョウ",
    tags: ["high-fashion","mens"], rank: 10, area: "渋谷",
    address: "東京都渋谷区神宮前6-18-11",
    coords: [35.6670, 139.7050],
    description: "国内外の旬ブランドをいち早く取り入れるセレクト。トレンドのハブ。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 30,
    url: "https://midwest.jp/"
  },

  /* ============================================================
   * ハイセンス編 (ベスト10)
   * ============================================================ */
  {
    id: "biotop", name: "BIOTOP", nameJa: "ビオトープ",
    tags: ["high-sense","quality-simple"], rank: 1, area: "白金台",
    address: "東京都港区白金台4-6-44",
    coords: [35.6388, 139.7217],
    description: "ファッション×ライフスタイル×カフェ×グリーン。屋上テラスもある複合セレクト。一日過ごせる。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 50,
    url: "https://www.biotop.jp/"
  },
  {
    id: "graphpaper", name: "Graphpaper", nameJa: "グラフペーパー",
    tags: ["high-sense","quality-simple","mens"], rank: 2, area: "南青山",
    address: "東京都港区南青山5-3-12",
    coords: [35.6647, 139.7163],
    description: "南貴之ディレクション。ミニマルかつ知的なセレクト。床下展示の独特な空間も話題。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 35,
    url: "https://www.graphpaper-tokyo.com/"
  },
  {
    id: "h-beauty-and-youth", name: "H BEAUTY&YOUTH", nameJa: "エイチ ビューティーアンドユース",
    tags: ["high-sense","quality-simple","mens"], rank: 3, area: "南青山",
    address: "東京都港区南青山6-1-3 H 1〜2F",
    coords: [35.6618, 139.7156],
    description: "ユナイテッドアローズの上級セレクト。建築自体がアートで、空間体験そのものが価値。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 35,
    url: "https://store.united-arrows.co.jp/shop/by/h/"
  },
  {
    id: "ron-herman-sendagaya", name: "Ron Herman Sendagaya", nameJa: "ロン ハーマン 千駄ヶ谷店",
    tags: ["high-sense"], rank: 4, area: "千駄ヶ谷",
    address: "東京都渋谷区千駄ヶ谷3-63-12",
    coords: [35.6789, 139.7067],
    description: "L.A.発の人気店。リラックスムードと上質な生活感、カフェ併設で一服も。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 40,
    url: "https://www.ronherman.jp/"
  },
  {
    id: "cabinet-of-curiosities", name: "CABINET OF CURIOSITIES", nameJa: "キャビネット オブ キュリオシティーズ",
    tags: ["high-sense"], rank: 5, area: "代々木八幡",
    address: "東京都渋谷区上原1-17-12",
    coords: [35.6713, 139.6862],
    description: "ヴィンテージ家具とモードを融合した独自の世界観。空間そのものが見もの。",
    hours: { open: "12:00", close: "20:00", closedDays: ["Wed"] }, stayMin: 30,
    url: "https://www.cabinetofcuriosities.jp/"
  },
  {
    id: "carol", name: "carol", nameJa: "キャロル",
    tags: ["high-sense"], rank: 6, area: "三軒茶屋",
    address: "東京都世田谷区三軒茶屋1-32-12",
    coords: [35.6437, 139.6707],
    description: "三軒茶屋の路地裏、こだわりが詰まった大人カジュアル。隠れ家系。",
    hours: { open: "12:00", close: "19:00", closedDays: ["Wed"] }, stayMin: 25,
    url: "https://carol-online.jp/"
  },
  {
    id: "coverchord-nakameguro", name: "COVERCHORD nakameguro", nameJa: "カバーコード 中目黒",
    tags: ["high-sense","quality-simple","mens"], rank: 7, area: "中目黒",
    address: "東京都目黒区青葉台1-14-11",
    coords: [35.6447, 139.6989],
    description: "中目黒のニュー定番。洗練ミニマルなセレクト、店内も美しい。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 30,
    url: "https://coverchord.com/"
  },
  {
    id: "1ldk-aoyama", name: "1LDK AOYAMA", nameJa: "ワンエルディーケー青山",
    tags: ["high-sense","quality-simple","mens"], rank: 8, area: "北青山",
    address: "東京都港区北青山3-7-12 1F",
    coords: [35.6651, 139.7202],
    description: "アパレル・雑貨・カフェをミックスした青山のコンセプトショップ。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 30,
    url: "https://1ldkshop.com/"
  },
  {
    id: "the-library-omotesando", name: "THE LIBRARY 表参道店", nameJa: "ザ ライブラリー 表参道店",
    tags: ["high-sense"], rank: 9, area: "表参道",
    address: "東京都渋谷区神宮前5-3-23",
    coords: [35.6657, 139.7088],
    description: "表参道のバックストリートにあるシック&知的なセレクト。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://www.thelibrary.tokyo/"
  },
  {
    id: "style-department", name: "style department", nameJa: "スタイル デパートメント",
    tags: ["high-sense"], rank: 10, area: "表参道",
    address: "東京都渋谷区神宮前4-25-15",
    coords: [35.6691, 139.7095],
    description: "表参道の路地裏、独自視点でセレクトされた一点モノが揃う。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://styledepartment.jp/"
  },

  /* ============================================================
   * ストリート編 (原宿エリア)
   * ============================================================ */
  {
    id: "palace-skateboards", name: "PALACE SKATEBOARDS TOKYO", nameJa: "パレス スケートボード 東京",
    tags: ["street","mens"], rank: 1, area: "北青山",
    address: "東京都港区北青山3-12-12",
    coords: [35.6663, 139.7148],
    description: "英国発のスケートブランド「PALACE」唯一の東京旗艦店。入荷時は行列必至。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://shop.palaceskateboards.com/"
  },
  {
    id: "v-a", name: "V.A.", nameJa: "ヴイエー",
    tags: ["street","high-fashion","mens"], rank: 2, area: "原宿",
    address: "東京都渋谷区神宮前4-25-9",
    coords: [35.6690, 139.7088],
    description: "ストリートxモードを横断する高感度セレクト。海外ブランドにも強い。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://va-online.com/"
  },
  {
    id: "bape-store", name: "BAPE STORE 原宿", nameJa: "ベイプストア 原宿",
    tags: ["street","mens"], rank: 3, area: "原宿",
    address: "東京都渋谷区神宮前4-21-5",
    coords: [35.6700, 139.7080],
    description: "裏原のカリスマ NIGO 設立の元祖裏原ブランド A BATHING APE 直営店。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://bape.com/"
  },
  {
    id: "brain-dead-studios", name: "BRAIN DEAD STUDIOS", nameJa: "ブレインデッド ステュディオズ",
    tags: ["street","mens"], rank: 4, area: "原宿",
    address: "東京都渋谷区神宮前4-26-30",
    coords: [35.6699, 139.7090],
    description: "L.A.のクリエイティブ集団 BRAIN DEAD の旗艦店。ヴィヴィッドなアートピース。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://wearebraindead.com/"
  },
  {
    id: "neighborhood-harajuku", name: "NEIGHBORHOOD 原宿", nameJa: "ネイバーフッド 原宿",
    tags: ["street","mens"], rank: 5, area: "原宿",
    address: "東京都渋谷区神宮前4-32-7",
    coords: [35.6710, 139.7100],
    description: "裏原の代表ブランド NEIGHBORHOOD の１号店。タフでクラフト感ある世界観。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://neighborhood.jp/"
  },
  {
    id: "supreme-harajuku", name: "Supreme 原宿", nameJa: "シュプリーム 原宿",
    tags: ["street","mens"], rank: 6, area: "原宿",
    address: "東京都渋谷区神宮前4-32-7",
    coords: [35.6712, 139.7100],
    description: "アメリカを代表するストリートブランド Supreme の裏原宿店。聖地のひとつ。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://www.supremenewyork.com/"
  },
  {
    id: "carhartt-wip-harajuku", name: "Carhartt WIP Store 原宿", nameJa: "カーハート ダブリューアイピー 原宿",
    tags: ["street","mens"], rank: 7, area: "原宿",
    address: "東京都渋谷区神宮前4-26-15",
    coords: [35.6707, 139.7088],
    description: "老舗ワークウェア Carhartt のカジュアルライン WIP の旗艦店。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://carhartt-wip.com/"
  },
  {
    id: "stussy-harajuku", name: "STUSSY 原宿 (Chapter)", nameJa: "ステューシー 原宿",
    tags: ["street","mens"], rank: 8, area: "原宿",
    address: "東京都渋谷区神宮前4-28-2",
    coords: [35.6705, 139.7092],
    description: "STUSSY の旗艦店。ハイブランドとのコラボも続き、再燃中の人気ブランド。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://www.stussy.com/"
  },
  {
    id: "noah-clubhouse", name: "NOAH CLUBHOUSE", nameJa: "ノア クラブハウス",
    tags: ["street","mens"], rank: 9, area: "原宿",
    address: "東京都渋谷区神宮前4-26-29",
    coords: [35.6700, 139.7088],
    description: "NYのライフスタイルブランド NOAH の路面店。サーフ×プレッピー。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://noahny.com/"
  },
  {
    id: "studious-3rd", name: "STUDIOUS 3rd 原宿店", nameJa: "ステュディオス 3rd 原宿店",
    tags: ["street","high-fashion","mens"], rank: 10, area: "原宿",
    address: "東京都渋谷区神宮前1-12-7",
    coords: [35.6692, 139.7035],
    description: "日本ブランドのみを取り扱う “TOKYO” を体現するセレクト。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://studious.co.jp/"
  },
  {
    id: "nubian-harajuku", name: "NUBIAN HARAJUKU", nameJa: "ヌビアン 原宿",
    tags: ["street","high-fashion","mens"], rank: 12, area: "原宿",
    address: "東京都渋谷区神宮前6-7-12",
    coords: [35.6671, 139.7048],
    description: "ストリートからモード、ハイブランドまで揃う高感度セレクト。メンズランキング1位常連。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 30,
    url: "https://nubian.jp/"
  },
  {
    id: "blackeyepatch-harajuku", name: "BlackEyePatch Harajuku", nameJa: "ブラックアイパッチ 原宿",
    tags: ["street","mens"], rank: 13, area: "原宿",
    address: "東京都渋谷区神宮前4-26-7",
    coords: [35.6695, 139.7088],
    description: "東京発ストリートブランド BlackEyePatch の路面店。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 20,
    url: "https://blackeyepatch.jp/"
  },
  {
    id: "bape-think", name: "BAPE THINK", nameJa: "ベイプシンク",
    tags: ["street","mens"], rank: 14, area: "原宿",
    address: "東京都渋谷区神宮前4-25-15",
    coords: [35.6692, 139.7085],
    description: "A BATHING APE のコンセプトストア。実験的なライン展開が特徴。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 20,
    url: "https://bape.com/"
  },
  {
    id: "union-tokyo", name: "UNION TOKYO", nameJa: "ユニオン トウキョウ",
    tags: ["street","mens"], rank: 15, area: "原宿",
    address: "東京都渋谷区神宮前1-20-2",
    coords: [35.6678, 139.7042],
    description: "L.A.発UNIONの東京旗艦。Air Jordanコラボなどでも有名。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://uniontokyo.jp/"
  },
  {
    id: "soph-tokyo", name: "SOPH. TOKYO", nameJa: "ソフ トウキョウ",
    tags: ["street","mens"], rank: 16, area: "千駄ヶ谷",
    address: "東京都渋谷区千駄ヶ谷3-1-22",
    coords: [35.6783, 139.7100],
    description: "F.C.Real Bristol/uniform experiment のSOPH.旗艦店。スポーツ×モード。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://soph.net/"
  },
  {
    id: "human-made-offline", name: "HUMAN MADE OFFLINE STORE", nameJa: "ヒューマンメイド オフラインストア",
    tags: ["street","mens"], rank: 17, area: "渋谷",
    address: "東京都渋谷区神宮前6-3-13",
    coords: [35.6673, 139.7058],
    description: "NIGOによる HUMAN MADE のフラッグシップ。アメカジ×ハイクオリティ。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://humanmade.jp/"
  },

  /* ============================================================
   * メンズ編 (ベスト10) — 既出ID(NUBIAN/UNION/1LDK)はマージ済み
   * ============================================================ */
  {
    id: "le-grand-closet-parigot-man", name: "Le GRAND CLOSET de PARIGOT MAN", nameJa: "ル グランド クローゼット ドゥ パリゴ マン",
    tags: ["mens","high-fashion"], rank: 2, area: "原宿",
    address: "東京都渋谷区神宮前4-26-28",
    coords: [35.6700, 139.7095],
    description: "PARIGOT のメンズ旗艦。フレンチ感のあるシックなセレクト。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 30,
    url: "https://parigot.jp/"
  },
  {
    id: "lechoppe-aoyama", name: "L'ECHOPPE 青山店", nameJa: "レショップ 青山店",
    tags: ["mens","quality-simple"], rank: 3, area: "北青山",
    address: "東京都港区北青山3-5-25",
    coords: [35.6650, 139.7156],
    description: "上質ベーシックを軸にしたシップス系セレクト。スーツも私服も網羅。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 30,
    url: "https://www.lechoppe.shop/"
  },
  {
    id: "1ldk-nakameguro", name: "1LDK", nameJa: "ワンエルディーケー (中目黒本店)",
    tags: ["mens","quality-simple","high-sense"], rank: 5, area: "中目黒",
    address: "東京都目黒区上目黒1-7-13",
    coords: [35.6435, 139.6982],
    description: "1LDK の本店。生活と地続きの審美眼で選ばれるアパレル&雑貨。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 30,
    url: "https://1ldkshop.com/"
  },
  {
    id: "maidens-shop", name: "MAIDENS SHOP", nameJa: "メイデンズ ショップ",
    tags: ["mens","quality-simple"], rank: 6, area: "渋谷",
    address: "東京都渋谷区神宮前6-25-14",
    coords: [35.6660, 139.7060],
    description: "アメリカントラッド/ヴィンテージ志向の大人向けセレクト。",
    hours: { open: "12:00", close: "20:00", closedDays: ["Wed"] }, stayMin: 30,
    url: "https://maidens-shop.com/"
  },
  {
    id: "best-packing-store", name: "BEST PACKING STORE", nameJa: "ベスト パッキング ストア",
    tags: ["mens","quality-simple"], rank: 7, area: "中目黒",
    address: "東京都目黒区青葉台1-13-3",
    coords: [35.6452, 139.6989],
    description: "アメリカンスタンダードを上質に再解釈。中目黒の名店。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://www.bestpackingstore.com/"
  },
  {
    id: "waremokou", name: "吾亦紅", nameJa: "ワレモコウ",
    tags: ["mens","quality-simple"], rank: 8, area: "三軒茶屋",
    address: "東京都世田谷区三軒茶屋2-15-15",
    coords: [35.6432, 139.6700],
    description: "和の美意識でセレクトされた大人向けのアイテム。職人モノ多数。",
    hours: { open: "12:00", close: "19:00", closedDays: ["Tue"] }, stayMin: 25,
    url: "https://waremokou.com/"
  },
  {
    id: "eliminator", name: "ELIMINATOR", nameJa: "エリミネイター",
    tags: ["mens"], rank: 9, area: "表参道",
    address: "東京都渋谷区神宮前5-17-19",
    coords: [35.6648, 139.7110],
    description: "アメカジxドレスをミックス。骨太なメンズスタイル。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://eliminator.jp/"
  },
  {
    id: "freshservice-hq", name: "FreshService headquarters", nameJa: "フレッシュサービス ヘッドクォーターズ",
    tags: ["mens","quality-simple"], rank: 10, area: "表参道",
    address: "東京都渋谷区神宮前4-12-10",
    coords: [35.6678, 139.7090],
    description: "FreshService の旗艦店。ワーク×モダンの効いた上質ベーシック。",
    hours: { open: "11:30", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://freshservice.jp/"
  }
];
