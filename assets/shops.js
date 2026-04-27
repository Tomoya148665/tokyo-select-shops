// 東京セレクトショップ データ
//
// tags: ["mens","high-sense","high-fashion","street","quality-simple"] から複数指定
// hours: { open:"HH:MM", close:"HH:MM", closedDays:["Sun","Mon",...] }  // 不定休/常時OPEN は closedDays:[]
// stayMin: 標準滞在時間（分）。利用者がUI側でも上書き可能
// rank: 元記事ランキング（参考表示用）
//
// ※ 営業時間・住所・URLは 2026-04 時点で公式サイト/Fashion Press/Google Maps 等で再検証済み。
//   平日と土日で営業時間が異なる店舗は代表値を採用。詳細は公式サイトを確認のこと。
window.SHOPS = [
  /* ============================================================
   * ハイファッション編 (ベスト10)
   * ============================================================ */
  {
    id: "dover-street-market-ginza", name: "DOVER STREET MARKET GINZA", nameJa: "ドーバー ストリート マーケット 銀座",
    tags: ["high-fashion","mens"], rank: 1, area: "銀座",
    address: "東京都中央区銀座6-9-5 ギンザコマツ東館",
    coords: [35.6699, 139.7642],
    image: "https://assets.st-note.com/img/1721651687995-yjKwD02sbB.jpg",
    description: "コム・デ・ギャルソンの川久保玲がディレクションする世界的ハイブランド集積店。フロアごとに違うインスタレーション空間。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 50,
    url: "https://ginza.doverstreetmarket.com/"
  },
  {
    id: "estnation-roppongi", name: "ESTNATION Roppongi Hills", nameJa: "エストネーション 六本木ヒルズ",
    tags: ["high-fashion","mens"], rank: 2, area: "六本木",
    address: "東京都港区六本木6-10-2 六本木ヒルズ ヒルサイドけやき坂コンプレックス1F・2F",
    coords: [35.6604, 139.7292],
    image: "https://assets.st-note.com/img/1721651597823-oeq53u65gO.jpg",
    description: "国内外ラグジュアリーを大型フロアで揃える。落ち着いた接客とフォーマル寄りの品揃え。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 40,
    url: "https://www.estnation.co.jp/store/roppongi"
  },
  {
    id: "restir-roppongi", name: "RESTIR Boutique", nameJa: "リステア ブティック",
    tags: ["high-fashion"], rank: 3, area: "赤坂",
    address: "東京都港区赤坂9-6-17",
    coords: [35.6663, 139.7320],
    image: "https://assets.st-note.com/img/1721651527067-sPggvDokol.jpg",
    description: "上質で大人なハイブランド。鉄板の銘品が見つかる、東京を代表するブティック。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 35,
    url: "https://restir.com/"
  },
  {
    id: "gr8", name: "GR8", nameJa: "グレイト",
    tags: ["high-fashion","street","mens"], rank: 4, area: "原宿",
    address: "東京都渋谷区神宮前1-11-6 ラフォーレ原宿 2F",
    coords: [35.6685, 139.7035],
    image: "https://assets.st-note.com/img/1721651453136-fUJqqq1DKy.jpg",
    description: "ストリート×ハイブランドの先端。ラフォーレ原宿内、新進気鋭デザイナーの取扱量が圧巻。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 30,
    url: "https://gr8.jp/"
  },
  {
    id: "addition-adelaide", name: "ADDITION ADELAIDE", nameJa: "アディッション アデライデ",
    tags: ["high-fashion"], rank: 5, area: "原宿",
    address: "東京都渋谷区神宮前4-19-8 アロープラザ1F",
    coords: [35.6695, 139.7080],
    image: "https://assets.st-note.com/img/1721651279479-5RHiwHYdFD.jpg",
    description: "原宿の隠れ家的ハイファッション。モード好きの大人女性に支持される。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 30,
    url: "https://adelaide-addition.com/"
  },
  {
    id: "tabaya-united-arrows", name: "TABAYA UNITED ARROWS", nameJa: "タバヤ ユナイテッドアローズ",
    tags: ["high-fashion","mens"], rank: 6, area: "原宿",
    address: "東京都渋谷区神宮前3-28-1",
    coords: [35.6712, 139.7068],
    image: "https://assets.st-note.com/img/1721958584342-PXPLXfyojD.jpg",
    description: "ユナイテッドアローズの上級ライン。2025年4月リニューアルし、限定ピースとカフェバーを併設。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 30,
    url: "https://store.united-arrows.co.jp/brand/ua/stores/tby.html"
  },
  {
    id: "international-gallery-beams", name: "International Gallery BEAMS", nameJa: "インターナショナル ギャラリー ビームス 原宿",
    tags: ["high-fashion","mens"], rank: 7, area: "原宿",
    address: "東京都渋谷区神宮前3-25-15 1F",
    coords: [35.6710, 139.7062],
    image: "https://assets.st-note.com/img/1721651177630-V4PTk00Zog.jpg",
    description: "BEAMSのモードライン旗艦店。世界中のクリエイションが集結する別格の品揃え。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 30,
    url: "https://www.beams.co.jp/shop/igb/"
  },
  {
    id: "land-of-tomorrow", name: "LAND OF TOMORROW", nameJa: "ランド オブ トゥモロー 丸の内店",
    tags: ["high-fashion"], rank: 8, area: "丸の内",
    address: "東京都千代田区丸の内2-6-1 丸の内パークビル ブリックスクエア1F・2F",
    coords: [35.6776, 139.7634],
    image: "https://assets.st-note.com/img/1721650886877-9TrvCIMoCe.jpg",
    description: "丸の内ブリックスクエア内、洗練された上質モード。出張のついでに寄りやすい立地。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 30,
    url: "https://www.landoftomorrow.jp/"
  },
  {
    id: "lift-daikanyama", name: "Lift DAIKANYAMA", nameJa: "リフト 代官山",
    tags: ["high-fashion","mens"], rank: 9, area: "代官山",
    address: "東京都渋谷区代官山町16-5 アドレスガーデン代官山101",
    coords: [35.6488, 139.7036],
    image: "https://assets.st-note.com/img/1721650819281-LN57cNr6WN.jpg",
    description: "希少なインポートブランドが見つかる。スニーカーとモードの融合店、Lift ecru/étage 統合店。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://lift-net.co.jp/"
  },
  {
    id: "midwest-tokyo", name: "MIDWEST TOKYO", nameJa: "ミッドウエスト トウキョウ",
    tags: ["high-fashion","mens"], rank: 10, area: "渋谷",
    address: "東京都渋谷区神南1-6-1",
    coords: [35.6620, 139.6997],
    image: "https://assets.st-note.com/img/1721650187295-aJioxr1si7.jpg",
    description: "国内外の旬ブランドをいち早く取り入れるセレクト。トレンドのハブ。",
    hours: { open: "12:00", close: "20:00", closedDays: ["Thu"] }, stayMin: 30,
    url: "https://store-midwest.com/"
  },

  /* ============================================================
   * ハイセンス編 (ベスト10)
   * ============================================================ */
  {
    id: "biotop", name: "BIOTOP", nameJa: "ビオトープ",
    tags: ["high-sense","quality-simple"], rank: 1, area: "白金台",
    address: "東京都港区白金台4-6-44",
    coords: [35.6388, 139.7217],
    image: "https://assets.st-note.com/img/1721654697130-YHn7AwjKwz.jpg",
    description: "ファッション×ライフスタイル×カフェ×グリーン。屋上テラスもある複合セレクト。一日過ごせる。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 50,
    url: "https://www.biotop.jp/"
  },
  {
    id: "graphpaper", name: "Graphpaper AOYAMA", nameJa: "グラフペーパー 青山",
    tags: ["high-sense","quality-simple","mens"], rank: 2, area: "原宿",
    address: "東京都渋谷区神宮前5-36-6 ケーリーマンション 1F/2F",
    coords: [35.6645, 139.7080],
    image: "https://assets.st-note.com/img/1721654593851-TYqbPWCwWZ.jpg",
    description: "南貴之ディレクション。ミニマルかつ知的なセレクト。床下展示の独特な空間も話題。",
    hours: { open: "12:00", close: "19:00", closedDays: ["Mon"] }, stayMin: 35,
    url: "https://www.graphpaper-tokyo.com/"
  },
  {
    id: "h-beauty-and-youth", name: "H BEAUTY&YOUTH", nameJa: "エイチ ビューティーアンドユース",
    tags: ["high-sense","quality-simple","mens"], rank: 3, area: "南青山",
    address: "東京都港区南青山3-14-17 H 1〜2F",
    coords: [35.6660, 139.7148],
    image: "https://assets.st-note.com/img/1721655193032-eTzdW7WLqu.jpg",
    description: "ユナイテッドアローズの上級セレクト。建築自体がアートで、空間体験そのものが価値。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 35,
    url: "https://store.united-arrows.co.jp/shop/by/h/"
  },
  {
    id: "ron-herman-sendagaya", name: "Ron Herman Sendagaya", nameJa: "ロン ハーマン 千駄ヶ谷店",
    tags: ["high-sense"], rank: 4, area: "千駄ヶ谷",
    address: "東京都渋谷区千駄ヶ谷2-11-1",
    coords: [35.6802, 139.7100],
    image: "https://assets.st-note.com/img/1721653775432-Bc6nEvAY92.jpg",
    description: "L.A.発の人気店。リラックスムードと上質な生活感、カフェ併設で一服も。",
    hours: { open: "11:00", close: "19:30", closedDays: [] }, stayMin: 40,
    url: "https://ronherman.jp/"
  },
  {
    id: "cabinet-of-curiosities", name: "CABINET OF CURIOSITIES", nameJa: "キャビネット オブ キュリオシティーズ",
    tags: ["high-sense"], rank: 5, area: "日比谷",
    address: "東京都千代田区有楽町1-1-2 東京ミッドタウン日比谷 3F HIBIYA CENTRAL MARKET内",
    coords: [35.6735, 139.7607],
    image: "https://assets.st-note.com/img/1721653325810-rQalLl3Drl.jpg",
    description: "ヴィンテージ家具とモードを融合した独自の世界観。HIBIYA CENTRAL MARKET内の名物店。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 30,
    url: "https://hibiya-central-market.jp/shop/01.html"
  },
  {
    id: "carol", name: "carol", nameJa: "キャロル",
    tags: ["high-sense"], rank: 6, area: "原宿",
    address: "東京都渋谷区神宮前5-23-3 長谷部ビル 1F",
    coords: [35.6660, 139.7100],
    image: "https://assets.st-note.com/img/1721653240949-uMePHzKt1a.jpg",
    description: "原宿の路地裏、こだわりが詰まった大人カジュアル。隠れ家系。",
    hours: { open: "12:00", close: "20:00", closedDays: ["Wed"] }, stayMin: 25,
    url: "https://storecarol.com/"
  },
  {
    id: "coverchord-nakameguro", name: "COVERCHORD nakameguro", nameJa: "カバーコード 中目黒",
    tags: ["high-sense","quality-simple","mens"], rank: 7, area: "中目黒",
    address: "東京都目黒区青葉台1-23-14 1F",
    coords: [35.6437, 139.6985],
    image: "https://assets.st-note.com/img/1721653157800-VSXmuUYD05.jpg",
    description: "中目黒のニュー定番。洗練ミニマルなセレクト、店内も美しい。",
    hours: { open: "11:00", close: "19:00", closedDays: [] }, stayMin: 30,
    url: "https://coverchord.com/"
  },
  {
    id: "1ldk-aoyama", name: "1LDK AOYAMA HOTEL", nameJa: "ワンエルディーケー 青山",
    tags: ["high-sense","quality-simple","mens"], rank: 8, area: "表参道",
    address: "東京都渋谷区神宮前5-47-11 青山学院アスタジオ 1F",
    coords: [35.6655, 139.7115],
    image: "https://assets.st-note.com/img/1721653055286-KVVuLdQdhE.jpg",
    description: "アパレル・雑貨・カフェをミックスした青山のコンセプトショップ。",
    hours: { open: "13:00", close: "19:00", closedDays: [] }, stayMin: 30,
    url: "https://1ldkshop.com/"
  },
  {
    id: "the-library-omotesando", name: "THE LIBRARY 表参道店", nameJa: "ザ ライブラリー 表参道店",
    tags: ["high-sense"], rank: 9, area: "表参道",
    address: "東京都渋谷区神宮前4-11-2 高野ビル 1F",
    coords: [35.6685, 139.7068],
    image: "https://assets.st-note.com/img/1721652784901-RNsvh04Mua.jpg",
    description: "表参道のバックストリートにあるシック&知的なセレクト。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://www.thelibrary.tokyo/"
  },
  {
    id: "style-department", name: "style department", nameJa: "スタイル デパートメント",
    tags: ["high-sense"], rank: 10, area: "奥渋",
    address: "東京都渋谷区神山町7-12 グランデュオ神山町 102",
    coords: [35.6628, 139.6955],
    image: "https://assets.st-note.com/img/1757857209-dKFN08gmeuarItLDHxZQ4iTh.jpg",
    description: "奥渋(神山町)、独自視点でセレクトされた一点モノが揃う。",
    hours: { open: "13:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://styledepartment-store.com/"
  },

  /* ============================================================
   * ストリート編 (原宿エリア)
   * ============================================================ */
  {
    id: "palace-skateboards", name: "PALACE SKATEBOARDS TOKYO", nameJa: "パレス スケートボード 東京",
    tags: ["street","mens"], rank: 1, area: "原宿",
    address: "東京都渋谷区神宮前5-9-20 2F・3F",
    coords: [35.6655, 139.7088],
    image: "https://assets.st-note.com/img/1751795644-uUbLyKVIBQz2hnMv0J53N1lc.jpg",
    description: "英国発のスケートブランド「PALACE」唯一の東京旗艦店。入荷時は行列必至。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://palaceskateboards.com/shop/tokyo"
  },
  {
    id: "v-a", name: "V.A.", nameJa: "ヴイエー",
    tags: ["street","high-fashion","mens"], rank: 2, area: "原宿",
    address: "東京都渋谷区神宮前6-1-9",
    coords: [35.6680, 139.7060],
    image: "https://assets.st-note.com/img/1751795757-aKYXmftnIpS9TxMONFVCr5R6.jpg",
    description: "ストリートxモードを横断する高感度セレクト。海外ブランドにも強い。",
    hours: { open: "10:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://vatokyo.com/"
  },
  {
    id: "bape-store", name: "BAPE STORE 原宿", nameJa: "ベイプストア 原宿",
    tags: ["street","mens"], rank: 3, area: "原宿",
    address: "東京都渋谷区神宮前4-21-5",
    coords: [35.6700, 139.7080],
    image: "https://assets.st-note.com/img/1751803866-LzituSHnlBRs37g82Cc9U640.jpg",
    description: "裏原のカリスマ NIGO 設立の元祖裏原ブランド A BATHING APE 直営店。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://jp.bape.com/pages/store-list/harajuku"
  },
  {
    id: "brain-dead-studios", name: "BRAIN DEAD STUDIOS", nameJa: "ブレインデッド ステュディオズ",
    tags: ["street","mens"], rank: 4, area: "原宿",
    address: "東京都渋谷区神宮前4-29-8",
    coords: [35.6700, 139.7090],
    image: "https://assets.st-note.com/img/1751803898-lPWnfUvwVThD2i53ytX1xpaR.jpg",
    description: "L.A.のクリエイティブ集団 BRAIN DEAD の旗艦店。ヴィヴィッドなアートピース。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://wearebraindead.com/"
  },
  {
    id: "neighborhood-harajuku", name: "NEIGHBORHOOD 原宿", nameJa: "ネイバーフッド 原宿",
    tags: ["street","mens"], rank: 5, area: "原宿",
    address: "東京都渋谷区神宮前4-32-7",
    coords: [35.6710, 139.7100],
    image: "https://assets.st-note.com/img/1751803934-bPAu8sYazNO4gnBUmr6hpRZE.jpg",
    description: "裏原の代表ブランド NEIGHBORHOOD の１号店。タフでクラフト感ある世界観。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://neighborhood.jp/"
  },
  {
    id: "supreme-harajuku", name: "Supreme 原宿", nameJa: "シュプリーム 原宿",
    tags: ["street","mens"], rank: 6, area: "原宿",
    address: "東京都渋谷区神宮前4-32-7",
    coords: [35.6712, 139.7100],
    image: "https://assets.st-note.com/img/1751803974-vIZDaKgHBUTAP1dzq9ifhWJ6.jpg",
    description: "アメリカを代表するストリートブランド Supreme の裏原宿店。聖地のひとつ。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://www.supremenewyork.com/"
  },
  {
    id: "carhartt-wip-harajuku", name: "Carhartt WIP Store 原宿", nameJa: "カーハート ダブリューアイピー 原宿",
    tags: ["street","mens"], rank: 7, area: "原宿",
    address: "東京都渋谷区神宮前4-28-25",
    coords: [35.6707, 139.7088],
    image: "https://assets.st-note.com/img/1751796096-Q0TvtfPVs1Rbp5ZjUl6Xomq9.jpg",
    description: "老舗ワークウェア Carhartt のカジュアルライン WIP の旗艦店(2024年12月リニューアル)。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://carhartt-wip.com/"
  },
  {
    id: "stussy-harajuku", name: "STUSSY 原宿 (Chapter)", nameJa: "ステューシー 原宿",
    tags: ["street","mens"], rank: 8, area: "原宿",
    address: "東京都渋谷区神宮前4-28-2",
    coords: [35.6705, 139.7092],
    image: "https://assets.st-note.com/img/1751796174-6zdsCeZjk4VmWBF7ycTaHbiG.jpg",
    description: "STUSSY の旗艦店。ハイブランドとのコラボも続き、再燃中の人気ブランド。",
    hours: { open: "11:30", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://www.stussy.com/"
  },
  {
    id: "noah-clubhouse", name: "NOAH CLUBHOUSE", nameJa: "ノア クラブハウス",
    tags: ["street","mens"], rank: 9, area: "原宿",
    address: "東京都渋谷区神宮前4-26-29",
    coords: [35.6700, 139.7088],
    image: "https://assets.st-note.com/img/1751804010-0cX2zpGZJvHhRflDNg58imT7.jpg",
    description: "NYのライフスタイルブランド NOAH の路面店。サーフ×プレッピー。",
    hours: { open: "11:30", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://noahny.com/"
  },
  {
    id: "studious-3rd", name: "STUDIOUS 3rd 原宿店", nameJa: "ステュディオス 3rd 原宿店",
    tags: ["street","high-fashion","mens"], rank: 10, area: "原宿",
    address: "東京都渋谷区神宮前4-28-5",
    coords: [35.6705, 139.7090],
    image: "https://assets.st-note.com/img/1751804034-ix9GZwFedYTl30C72rvpbNk8.jpg",
    description: "日本ブランドのみを取り扱う “TOKYO” を体現するセレクト。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://studious.co.jp/"
  },
  {
    id: "nubian-harajuku", name: "NUBIAN HARAJUKU", nameJa: "ヌビアン 原宿",
    tags: ["street","high-fashion","mens"], rank: 12, area: "原宿",
    address: "東京都渋谷区神宮前1-20-2",
    coords: [35.6680, 139.7048],
    image: "https://assets.st-note.com/img/1751804059-D8ImgrTRsPG2kSihbVac3XN0.jpg",
    description: "ストリートからモード、ハイブランドまで揃う高感度セレクト。メンズランキング1位常連。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 30,
    url: "https://nubiantokyo.com/"
  },
  {
    id: "blackeyepatch-harajuku", name: "BlackEyePatch Harajuku", nameJa: "ブラックアイパッチ 原宿",
    tags: ["street","mens"], rank: 13, area: "原宿",
    address: "東京都渋谷区神宮前3-21-20",
    coords: [35.6712, 139.7080],
    image: "https://assets.st-note.com/img/1751901092-lpviyxzPgmuMtFXBYrDKVTUN.jpg",
    description: "東京発ストリートブランド BlackEyePatch の路面店(2023年原宿移転)。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 20,
    url: "https://blackeyepatch.com/"
  },
  {
    id: "bape-think", name: "BAPE THINK", nameJa: "ベイプシンク",
    tags: ["street","mens"], rank: 14, area: "原宿",
    address: "東京都渋谷区神宮前3-25-13",
    coords: [35.6710, 139.7068],
    image: "https://assets.st-note.com/img/1751901106-9iZRp2GkcJ8I4SqyQXVeCAWH.jpg",
    description: "A BATHING APE のコンセプトストア。実験的なライン展開が特徴。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 20,
    url: "https://jp.bape.com/pages/store-list/think-harajuku"
  },
  {
    id: "union-tokyo", name: "UNION TOKYO", nameJa: "ユニオン トウキョウ",
    tags: ["street","mens"], rank: 15, area: "原宿",
    address: "東京都渋谷区神宮前2-26-5",
    coords: [35.6735, 139.7080],
    image: "https://assets.st-note.com/img/1751804101-a8WG2AtBRcbF09hxzZYvULNJ.jpg",
    description: "L.A.発UNIONの東京旗艦。Air Jordanコラボなどでも有名。",
    hours: { open: "11:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://uniontokyo.jp/"
  },
  {
    id: "soph-tokyo", name: "SOPH. TOKYO", nameJa: "ソフ トウキョウ",
    tags: ["street","mens"], rank: 16, area: "原宿",
    address: "東京都渋谷区神宮前3-34-10",
    coords: [35.6725, 139.7060],
    image: "https://assets.st-note.com/img/1751804137-w6MPb8nRzCd2fGIiexYSyUmQ.jpg",
    description: "F.C.Real Bristol/uniform experiment のSOPH.旗艦店。スポーツ×モード。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 25,
    url: "https://soph.net/"
  },
  {
    id: "human-made-offline", name: "HUMAN MADE OFFLINE STORE", nameJa: "ヒューマンメイド オフラインストア",
    tags: ["street","mens"], rank: 17, area: "外苑前",
    address: "東京都渋谷区神宮前2-6-6 秀和外苑レジデンス1F",
    coords: [35.6735, 139.7113],
    image: "https://assets.st-note.com/img/1751804150-BuzDmrKt1Sb4qxYOhZ0i2ncJ.jpg",
    description: "NIGOによる HUMAN MADE のフラッグシップ。アメカジ×ハイクオリティ。",
    hours: { open: "11:00", close: "19:00", closedDays: [] }, stayMin: 25,
    url: "https://humanmade.jp/"
  },

  /* ============================================================
   * メンズ編 (ベスト10) — 既出ID(NUBIAN/UNION/1LDK)はマージ済み
   * ============================================================ */
  {
    id: "le-grand-closet-parigot-man", name: "Le GRAND CLOSET de PARIGOT MAN GINZA SIX", nameJa: "ル グランド クローゼット ドゥ パリゴ マン 銀座シックス",
    tags: ["mens","high-fashion"], rank: 2, area: "銀座",
    address: "東京都中央区銀座6-10-1 GINZA SIX 5F",
    coords: [35.6695, 139.7635],
    image: "https://assets.st-note.com/img/1721657937464-vThHmRU6JK.jpg",
    description: "PARIGOT のメンズ旗艦。フレンチ感のあるシックなセレクト(GINZA SIX 5F)。",
    hours: { open: "10:30", close: "20:30", closedDays: [] }, stayMin: 30,
    url: "https://ginza6.tokyo/shops/194223"
  },
  {
    id: "lechoppe-aoyama", name: "L'ECHOPPE 青山店", nameJa: "レショップ 青山店",
    tags: ["mens","quality-simple"], rank: 3, area: "南青山",
    address: "東京都港区南青山3-17-3",
    coords: [35.6663, 139.7130],
    image: "https://assets.st-note.com/img/1757851649-OuSg52Lh8dVBrTtxm1iG4YKl.png",
    description: "上質ベーシックを軸にしたシップス系セレクト。スーツも私服も網羅。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 30,
    url: "https://lechoppe.jp/"
  },
  {
    id: "1ldk-nakameguro", name: "1LDK", nameJa: "ワンエルディーケー (中目黒本店)",
    tags: ["mens","quality-simple","high-sense"], rank: 5, area: "中目黒",
    address: "東京都目黒区上目黒1-7-13",
    coords: [35.6435, 139.6982],
    image: "https://assets.st-note.com/img/1721659261082-8bCMRDupCl.jpg",
    description: "1LDK の本店。生活と地続きの審美眼で選ばれるアパレル&雑貨。",
    hours: { open: "12:00", close: "20:00", closedDays: [] }, stayMin: 30,
    url: "https://1ldkshop.com/"
  },
  {
    id: "maidens-shop", name: "MAIDENS SHOP", nameJa: "メイデンズ ショップ",
    tags: ["mens","quality-simple"], rank: 6, area: "原宿",
    address: "東京都渋谷区神宮前2-19-12",
    coords: [35.6728, 139.7090],
    image: "https://assets.st-note.com/img/1721657509436-vfpfKk0Cf7.jpg",
    description: "アメリカントラッド/ヴィンテージ志向の大人向けセレクト。",
    hours: { open: "12:00", close: "19:00", closedDays: [] }, stayMin: 30,
    url: "https://maidens-shop.jp/"
  },
  {
    id: "best-packing-store", name: "BEST PACKING STORE", nameJa: "ベスト パッキング ストア",
    tags: ["mens","quality-simple"], rank: 7, area: "中目黒",
    address: "東京都目黒区青葉台1-23-5",
    coords: [35.6438, 139.6985],
    image: "https://assets.st-note.com/img/1721657403869-os9blELqVt.jpg",
    description: "アメリカンスタンダードを上質に再解釈。中目黒の名店。",
    hours: { open: "12:00", close: "19:00", closedDays: [] }, stayMin: 25,
    url: "https://www.bestpackingstore.com/"
  },
  {
    id: "waremokou", name: "吾亦紅", nameJa: "ワレモコウ",
    tags: ["mens","quality-simple"], rank: 8, area: "渋谷",
    address: "東京都渋谷区神南1-17-4 神南ビル",
    coords: [35.6620, 139.6990],
    image: "https://assets.st-note.com/img/1757849813-2zp107TKAjqBUDnQNvbMJkYE.jpg",
    description: "和の美意識でセレクトされた大人向けのアイテム。職人モノ多数。",
    hours: { open: "11:30", close: "21:00", closedDays: [] }, stayMin: 25,
    url: "https://waremo-kou.jp/"
  },
  {
    id: "eliminator", name: "ELIMINATOR", nameJa: "エリミネイター",
    tags: ["mens"], rank: 9, area: "代官山",
    address: "東京都渋谷区猿楽町26-13 グレイス代官山1F",
    coords: [35.6488, 139.7036],
    image: "https://assets.st-note.com/img/1721657206133-X4rLE6Nmds.jpg",
    description: "アメカジxドレスをミックス。骨太なメンズスタイル。",
    hours: { open: "12:00", close: "19:00", closedDays: [] }, stayMin: 25,
    url: "https://eliminator.co.jp/"
  },
  {
    id: "freshservice-hq", name: "FreshService headquarters", nameJa: "フレッシュサービス ヘッドクォーターズ",
    tags: ["mens","quality-simple"], rank: 10, area: "原宿",
    address: "東京都渋谷区神宮前2-6-7",
    coords: [35.6738, 139.7115],
    image: "https://assets.st-note.com/img/1757848068-UlPWLK7os46dYuDqmrEjBc5w.jpg",
    description: "FreshService の旗艦店。ワーク×モダンの効いた上質ベーシック。",
    hours: { open: "12:00", close: "19:00", closedDays: ["Wed"] }, stayMin: 25,
    url: "https://freshservice.jp/"
  }
];
