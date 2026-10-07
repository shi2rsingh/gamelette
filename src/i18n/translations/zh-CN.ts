import type { TranslationSchema } from '../types';

export const zhCN: TranslationSchema = {
  meta: {
    siteTitle: 'Gamelette — 免费网页游戏中心 | Moody Man 与 Mancala',
    siteDescription:
      '在 Gamelette 畅玩免下载、免注册的即时网页游戏。收录 Moody Man（猜词挑战）与 Mancala（经典播种棋）。',
    homeTitle: 'Gamelette — 免费网页游戏中心 | Moody Man 与 Mancala',
    homeDescription:
      '探索 Gamelette 精选轻量网页小游戏。收录 Moody Man 与播种棋 Mancala，点击即玩，零等待、零安装。',
    privacyTitle: '隐私政策 — Gamelette',
    privacyDescription: 'Gamelette 及其网页游戏合集的隐私政策声明。',
    contactTitle: '联系我们 — Gamelette',
    contactDescription: 'Gamelette 联系方式与用户反馈渠道。',
    keywords:
      '网页游戏, 免费小游戏, 在线游戏, Moody Man, 播种棋, Mancala, 猜词游戏, 吊死鬼游戏, 棋盘游戏, Bantumi, 休闲游戏, 即开即玩, 免下载游戏',
  },
  common: {
    skipToContent: '跳转至主要内容',
    brandTagline: '口袋网页游戏',
    brandAria: 'Gamelette 首页 - 免费网页游戏',
    brandHomeAria: 'Gamelette 首页',
    languageSelectorLabel: '选择语言',
    cookedWithLove: '用心烹制',
    forWebGamers: '献给世界各地的网页玩家',
    allRightsReserved: 'Gamelette. 保留所有权利。',
    independentDeploymentNote:
      '独立部署：各游戏子域名与主域名独立运行，互不干扰。',
    returnHome: '← 返回 Gamelette 首页',
    breadcrumbHome: '首页',
  },
  nav: {
    games: '精选游戏',
    why: '为何选择 Gamelette',
    about: '关于我们',
    playNow: '立即开始',
  },
  hero: {
    badge: '网页游戏的新鲜吃法',
    badgeHighlight: '免费且即开即玩',
    titleLine1: '轻快小巧的网页小游戏。',
    titleLine2: '新鲜出炉，随心畅玩。',
    description:
      '欢迎来到 Gamelette — 一个精选轻量、纯粹无扰网页游戏的温暖港湾。没有庞大的启动器，没有付费墙，也无需繁琐配置。在浏览器中轻轻一点，即可随时开启乐趣。',
    descriptionBrand: 'Gamelette',
    ctaExplore: '浏览所有游戏',
    ctaWhy: '为何叫 "Gamelette"？',
    propFreeTitle: '100% 免费',
    propFreeDesc: '绝无隐藏付费',
    propInstallTitle: '零安装门槛',
    propInstallDesc: '在标签页中即开即玩',
    propDeviceTitle: '全设备通用',
    propDeviceDesc: '手机、平板与电脑',
    propBreakTitle: '碎片化放松',
    propBreakDesc: '点开即玩无负担',
  },
  gamesSection: {
    badge: '🎮 现已上线',
    title: '刚出锅的热腾腾游戏',
    subtitle:
      '在下方挑选一款心仪的游戏，立即开玩。每款游戏均部署在专属子域名上，极速加载、畅通无阻。',
    expectTitle: '游戏亮点：',
    playAction: '开始游玩 {title}',
    playAria: '立即在 {subdomain} 游玩 {title}（新标签页打开）',
    teaserBadge: '更多好味正在炉火上烹调',
    teaserTitle: '更多好味正在炉火上烹调',
    teaserDesc:
      '我们正在精心打造更多原生网页小游戏。敬请期待轻巧有趣的单词谜题、空间益智以及经典回合对战游戏。',
    teaserPrototyping: '原型设计中',
    teaserWebFirst: '坚持 Web 优先',
    teaserNoBloat: '无多余下载包袱',
  },
  games: {
    moodyman: {
      title: 'Moody Man',
      tagline: '多类别与多模式的猜词解谜挑战',
      category: '单词解谜',
      previewAlt: 'Moody Man 游戏插画与表情丰富的角色',
      description:
        '经典猜词游戏（刽子手）的现代重制版。在丰富多样的分类中挑战词汇量，争分夺秒，让角色的心情保持明朗。',
      tags: ['单词解谜', '多种模式', '单人休闲', '快节奏对局'],
      features: [
        '丰富的主题类别与由浅入深的难度梯度',
        '屏幕虚拟键盘与物理键盘全功能支持',
        '生动细腻的情绪动画与清脆音效',
        '在手机、平板及电脑浏览器上即刻丝滑运行',
      ],
    },
    mancala: {
      title: 'Mancala',
      tagline: '古老经典的播种与俘获博弈棋盘游戏',
      category: '策略棋盘',
      previewAlt: 'Mancala 木质棋盘与石子棋洞界面',
      description:
        '专为现代 Web 焕新重现的千年益智策略游戏。在木质棋洞中播撒棋子，俘获对手棋子，体验经久不衰的战术节奏。',
      tags: ['经典策略', '回合制', '人机对战或双人同屏', '古老棋盘'],
      features: [
        '纯正经典的 Bantumi / Mancala 规则与播种俘获机制',
        '适合单人推演的智能 AI 或适合双人的同屏轮流对战',
        '温润古朴的木纹棋盘与灵动平滑的落子动效',
        '基于开放 Web 标准秒级载入，无需任何安装',
      ],
    },
  },
  whySection: {
    badge: '⚡ 为纯粹的快乐而生',
    title: '为什么选择在 Gamelette 游玩？',
    subtitle:
      '网页游戏本就不该霸占动辄数 GB 的存储空间，也不该逼迫玩家繁琐注册。以下是我们保持轻快愉悦的秘诀。',
    card1Title: '浏览器即时畅玩',
    card1Desc:
      '点击链接即刻进入游戏。无需安装，无需漫长等待更新，丝毫不占用设备存储空间。',
    card2Title: '自适应与无障碍友好',
    card2Desc:
      '无论在电脑前使用键鼠，还是在手机屏幕上轻轻一点，界面都能自动适应，带来流畅无缝的体验。',
    card3Title: '专属独立子域名',
    card3Desc:
      '每款游戏均部署在独立的子域名上，保障最佳运行性能，并与主页完全解耦、独立发布。',
  },
  aboutSection: {
    badge: '🍳 名字背后的故事',
    title: '什么是 Gamelette？',
    subtitle:
      '它是「游戏（Game）」与「煎蛋卷（Omelette）」的妙趣结合 — 简单、可口、新鲜出炉。',
    card1Title: '蛋卷哲学',
    card1Desc:
      '一份美味的煎蛋卷无需繁复配方：只需优质食材、滚烫的锅温和短短几分钟的用心翻炒。我们认为休闲网页游戏亦当如此。在工作间隙偷闲五分钟时，你不该被漫长的下载进度条或弹窗打扰。',
    card2Title: '为开放 Web 而造',
    card2Desc:
      '这两款游戏均采用现代 Web 标准打造，确保在主流手机与桌面浏览器中都能如丝般顺滑。Gamelette 在 gamelette.com 扮演核心枢纽，而各游戏则独立部署在专属子域（moodyman.gamelette.com 和 mancala.gamelette.com）。',
    card3Title: '珍视您的宝贵时间',
    card3Desc:
      'Gamelette 旗下的所有游戏均可免费体验。我们全心投入于游戏玩法与清爽的界面设计，让您可以心无旁骛地享受单词解谜或棋盘对弈的乐趣。',
  },
  footer: {
    aboutText:
      'Gamelette 是一份随身口袋网页游戏合集，专为碎片化片刻而烹调。用心打造，无需安装。',
    gamesHeading: '游戏',
    allGames: '所有游戏',
    siteHeading: '网站与条款',
    aboutLink: '关于 Gamelette',
    privacyLink: '隐私政策',
    contactLink: '联系我们',
  },
  privacyPage: {
    breadcrumb: '隐私政策',
    badge: '📋 数据与隐私',
    title: '隐私政策',
    lastUpdated: '最近更新：2026年10月',
    section1Title: '1. 概述',
    section1Text:
      'Gamelette (gamelette.com) 是一个开放的网页游戏门户。我们坚持注重隐私的网页设计：无需注册任何账号，即可浏览目录并直接畅玩游戏。',
    section2Title: '2. 个人信息收集',
    section2Text:
      'Gamelette 不需要您提供姓名、邮箱地址、地理位置或支付信息即可浏览此落地页或体验相关游戏。',
    section3Title: '3. 独立的游戏子域名',
    section3Text:
      'Gamelette 链接的游戏（包括 moodyman.gamelette.com 和 mancala.gamelette.com）部署在独立子域名上。游戏进度（如得分或本地设置）可能会保存在您本地设备的浏览器 LocalStorage 中，不会上传至中央追踪服务器。',
    section4Title: '4. 托管与 CDN 日志',
    section4Text:
      '与绝大多数部署在 Netlify 等平台上的网站相同，托管基础设施可能会临时处理标准的服务器访问日志（IP 地址、User-Agent、请求 URL），用于防御 DDoS 攻击、性能加速及安全审计。',
    section5Title: '5. 联系方式',
    section5Text:
      '如果您对本隐私政策有任何疑问，欢迎通过我们的联系页面与我们取得沟通。',
  },
  contactPage: {
    breadcrumb: '联系',
    badge: '📬 意见反馈通道',
    title: '保持联系',
    subtitle:
      '对 Moody Man 或 Mancala 有任何建议？想到了绝妙的新游戏创意？我们非常期待您的来信。',
    bugTitle: '问题与故障反馈',
    bugSubtitle: '针对特定游戏的 Bug 或建议',
    bugDesc:
      '请注明游戏名称（Moody Man 或 Mancala）以及您使用的浏览器和设备型号。',
    formTitle: '发送留言',
    formSubtitle: '我们会仔细阅读每一封留言，并争取在几个工作日内答复。',
    formSuccess: '留言已成功发送！感谢您的来信，我们会尽快与您联络。',
    labelName: '您的称呼',
    placeholderName: '例如：李雷',
    labelTopic: '主题 / 相关游戏',
    topicGeneral: 'Gamelette（通用反馈）',
    topicMoodyMan: 'Moody Man',
    topicMancala: 'Mancala',
    labelEmail: '电子邮箱',
    placeholderEmail: 'lilei@example.com',
    labelMessage: '留言内容 / 游戏创意',
    placeholderMessage: '分享您的想法或提出新的游戏建议...',
    btnSubmit: '提交留言',
    btnSending: '发送中…',
    errorAlert: '发送留言时出现异常，请稍后再试。',
  },
};

