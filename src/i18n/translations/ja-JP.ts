import type { TranslationSchema } from '../types';

export const jaJP: TranslationSchema = {
  meta: {
    siteTitle: 'Gamelette — 無料ブラウザゲーム | Moody Man ＆ Mancala',
    siteDescription:
      'Gameletteでダウンロードや会員登録なしですぐ遊べる無料ブラウザゲームをお楽しみください。Moody Man（ワード当て）とMancala（古典ボードゲーム）を配信中。',
    homeTitle: 'Gamelette — 無料ブラウザゲーム | Moody Man ＆ Mancala',
    homeDescription:
      '手軽に楽しめる無料ブラウザゲームハブGamelette。Moody ManとMancalaをブラウザで今すぐプレイ。待ち時間ゼロ、インストール不要。',
    privacyTitle: 'プライバシーポリシー — Gamelette',
    privacyDescription: 'Gameletteおよび掲載ゲームのプライバシーポリシーに関する情報。',
    contactTitle: 'お問い合わせ — Gamelette',
    contactDescription: 'Gameletteへのお問い合わせおよびフィードバック窓口。',
    keywords:
      'ブラウザゲーム, 無料Webゲーム, オンラインゲーム, Moody Man, マンカラ, 単語当てゲーム, ハングマン, ボードゲーム, バントゥミ, カジュアルゲーム, すぐ遊べるゲーム',
  },
  common: {
    skipToContent: 'メインコンテンツへスキップ',
    brandTagline: 'ポケットブラウザゲーム',
    brandAria: 'Gamelette ホーム - 無料ブラウザゲーム',
    brandHomeAria: 'Gamelette ホーム',
    languageSelectorLabel: '言語を選択',
    cookedWithLove: '心を込めて調理',
    forWebGamers: '世界中のWebゲーマーへ',
    allRightsReserved: 'Gamelette. 無断転載を禁じます。',
    independentDeploymentNote:
      '独立デプロイ：各ゲームのサブドメインはこのルートドメインから独立して動作します。',
    returnHome: '← Gamelette ホームに戻る',
    breadcrumbHome: 'ホーム',
  },
  nav: {
    games: 'ゲーム一覧',
    why: 'Gameletteの魅力',
    about: 'サイトについて',
    playNow: '今すぐプレイ',
  },
  hero: {
    badge: 'Webゲームの新しい楽しみ方',
    badgeHighlight: '完全無料＆即プレイ',
    titleLine1: 'サクッと遊べるブラウザゲーム。',
    titleLine2: 'スキマ時間にできたての楽しさを。',
    description:
      'Gameletteへようこそ — 手軽でストレスフリーなWebゲームのコレクションです。重いランチャーや課金、事前設定は一切不要。ブラウザを開いてクリックするだけで、すぐにゲームを始められます。',
    descriptionBrand: 'Gamelette',
    ctaExplore: 'ゲームを見る',
    ctaWhy: '「Gamelette」の由来',
    propFreeTitle: '100% 無料',
    propFreeDesc: '隠れた課金なし',
    propInstallTitle: 'インストール不要',
    propInstallDesc: 'タブですぐ起動',
    propDeviceTitle: '全端末対応',
    propDeviceDesc: 'スマホ・タブレット・PC',
    propBreakTitle: 'クイック休憩',
    propBreakDesc: 'いつでも手軽に',
  },
  gamesSection: {
    badge: '🎮 配信中',
    title: 'フライパンからのできたてゲーム',
    subtitle:
      '遊びたいゲームを選んで今すぐスタート。各ゲームは専用サブドメインで超高速に読み込まれます。',
    expectTitle: 'ゲームの特徴：',
    playAction: '{title} をプレイ',
    playAria: '{title} を {subdomain} で今すぐプレイ（新しいタブで開きます）',
    teaserBadge: '新作ゲームもじっくり調理中',
    teaserTitle: '新作ゲームもじっくり調理中',
    teaserDesc:
      'ブラウザでサクッと動く新作タイトルを準備しています。軽快な言葉パズルや空間思考ゲーム、ターン制レトロゲームなどをお楽しみに。',
    teaserPrototyping: 'プロトタイプ開発中',
    teaserWebFirst: '常にWebファースト',
    teaserNoBloat: 'ダウンロード不要の軽快さ',
  },
  games: {
    moodyman: {
      title: 'Moody Man',
      tagline: '多彩なカテゴリとモードで楽しむ単語推測ゲーム',
      category: 'ワードパズル',
      previewAlt: 'Moody Man のゲームイラストと表情豊かなキャラクター',
      description:
        '古典的なハングマンゲームを現代風にアレンジ。多彩なカテゴリで語彙力を試し、制限時間内に正解を導き出してキャラクターの機嫌を保ちましょう。',
      tags: ['ワードパズル', 'マルチモード', 'ソロ＆カジュアル', '短時間プレイ'],
      features: [
        '多彩なテーマ別カテゴリと選べる難易度設定',
        '画面上のソフトキーボードおよび物理キーボードの両方に対応',
        '感情豊かなキャラクターのアニメーションと軽快な効果音',
        'スマホ、タブレット、PCブラウザで即座に快適動作',
      ],
    },
    mancala: {
      title: 'Mancala',
      tagline: '種を蒔いて奪い合う古代の頭脳ボードゲーム',
      category: '戦略ボードゲーム',
      previewAlt: 'マンカラの木製ボードと石のポケット画面',
      description:
        '世界最古の知略ボードゲームがWebで登場。木製ポケットに石を蒔き、相手の駒を奪い合う、奥深い駆け引きを味わってください。',
      tags: ['クラシック戦略', 'ターン制', 'AI対戦または2人プレイ', '古代ボードゲーム'],
      features: [
        '本格的なバントゥミ / マンカラのルールと種蒔きメカニクス',
        '1人用の賢いAI対戦および2人用のパス＆プレイ機能',
        '温かみのある木製ボードデザインとなめらかな石の動き',
        'Web標準技術によりインストール不要で一瞬で起動',
      ],
    },
  },
  whySection: {
    badge: '⚡ すぐ遊べる気軽さを追求',
    title: 'なぜ Gamelette なのか？',
    subtitle:
      'Webゲームに大容量ストレージや面倒な会員登録は必要ありません。いつでも素早く楽しめる工夫をご紹介します。',
    card1Title: 'ブラウザで即プレイ',
    card1Desc:
      'リンクを開くだけで即ゲーム開始。インストールもアップデートの待ち時間も、端末の空き容量を圧迫することもありません。',
    card2Title: '快適操作＆アクセシビリティ',
    card2Desc:
      'パソコンのマウス・キーボードでも、スマホのタッチ操作でも、あらゆる画面サイズに美しく最適化されます。',
    card3Title: '専用サブドメイン運用',
    card3Desc:
      '各ゲームは独立したサブドメインで稼働しており、最高レベルの読み込み速度と安定した配信を実現しています。',
  },
  aboutSection: {
    badge: '🍳 名前に込められた想い',
    title: 'Gamelette とは？',
    subtitle:
      '「ゲーム（Game）」と「オムレツ（Omelette）」を掛け合わせた、シンプルでできたてのおいしさを届けるネーミングです。',
    card1Title: 'オムレツの哲学',
    card1Desc:
      'おいしいオムレツに無駄な複雑さはいりません。良質な素材、強火、そして数分の調理時間があれば十分です。カジュアルゲームもそうあるべきだと私たちは考えます。仕事の合間の5分休みに、長いダウンロードや広告ポップアップに悩まされる必要はありません。',
    card2Title: 'オープンWebのために構築',
    card2Desc:
      'どちらのゲームもWeb標準技術を駆使し、最新のブラウザで軽快に動くよう設計されています。gamelette.com がポータルとなり、各ゲームは独立したサブドメイン（moodyman.gamelette.com と mancala.gamelette.com）で快適に稼働します。',
    card3Title: 'プレイヤーの時間を大切に',
    card3Desc:
      'Gamelette の全ゲームは完全無料です。ゲーム本来の面白さと洗練された画面設計に集中し、余計な邪魔が入らない心地よいプレイ体験をお届けします。',
  },
  footer: {
    aboutText:
      'Gameletteは、日常のちょっとした休憩のために作られた無料ブラウザゲームのポケットコレクションです。インストール不要で手軽に楽しめます。',
    gamesHeading: 'ゲーム',
    allGames: 'すべてのゲーム',
    siteHeading: 'サイト情報・規約',
    aboutLink: 'Gameletteについて',
    privacyLink: 'プライバシーポリシー',
    contactLink: 'お問い合わせ',
  },
  privacyPage: {
    breadcrumb: 'プライバシーポリシー',
    badge: '📋 データとプライバシー',
    title: 'プライバシーポリシー',
    lastUpdated: '最終更新日：2026年10月',
    section1Title: '1. 概要',
    section1Text:
      'Gamelette（gamelette.com）は、軽量ブラウザゲームへのリンクを提供するオープンなWebポータルです。アカウント登録不要でカタログを閲覧し、直接ゲームをプレイできるプライバシー配慮型の設計を行っています。',
    section2Title: '2. 個人情報について',
    section2Text:
      'Gameletteでは、当ポータルサイトの閲覧や掲載ゲームのプレイにあたり、お名前、メールアドレス、位置情報、決済情報などを要求することはありません。',
    section3Title: '3. 独立したゲームサブドメイン',
    section3Text:
      '掲載ゲーム（moodyman.gamelette.com および mancala.gamelette.com）は独立したサブドメインでホストされています。スコアや個人設定などのプレイ記録は、お使いの端末内のブラウザ（LocalStorage）にローカル保存され、外部追跡サーバーへ送信されることはありません。',
    section4Title: '4. ホスティングおよびログ情報',
    section4Text:
      'Netlify等の一般的なホスティングプラットフォームと同様、DDoS対策やパフォーマンス改善、セキュリティ監視のため、標準的な技術ログ（IPアドレス、ブラウザ情報など）が一時的に処理される場合があります。',
    section5Title: '5. お問い合わせ先',
    section5Text:
      '本ポリシーに関するご質問は、お問い合わせページよりご連絡ください。',
  },
  contactPage: {
    breadcrumb: 'お問い合わせ',
    badge: '📬 お問い合わせ窓口',
    title: 'お問い合わせ',
    subtitle:
      'Moody ManやMancalaのご感想や、新ゲームのリクエストなど、皆様からのメッセージをお待ちしております。',
    bugTitle: 'バグ・不具合報告',
    bugSubtitle: 'ゲームの動作不良や改善要望',
    bugDesc:
      'ゲーム名（Moody Man または Mancala）とお使いのブラウザ・端末の種類をご記入ください。',
    formTitle: 'メッセージを送る',
    formSubtitle: 'いただいたメッセージには目を通し、数日以内にご返信いたします。',
    formSuccess: 'メッセージを送信しました！ご連絡ありがとうございます。確認次第返信いたします。',
    labelName: 'お名前',
    placeholderName: '例: 田中',
    labelTopic: '件名 / 対象ゲーム',
    topicGeneral: 'Gamelette 全般',
    topicMoodyMan: 'Moody Man',
    topicMancala: 'Mancala',
    labelEmail: 'メールアドレス',
    placeholderEmail: 'tanaka@example.com',
    labelMessage: 'メッセージ / ゲームのアイデア',
    placeholderMessage: 'ご意見や新しいゲームのアイデアをお書きください...',
    btnSubmit: 'メッセージを送信',
    btnSending: '送信中…',
    errorAlert: 'メッセージの送信中にエラーが発生しました。後ほどもう一度お試しください。',
  },
};

