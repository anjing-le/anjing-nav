// All entries are mock content. The reserved .example domains never navigate.
const extraMockNames = {
  personal: ['四次元口袋', '我的作品', '学习地图', 'GitHub 旅途', '阅读记录', '习惯清单', '小镇街道', '金融笔记', '素材仓库', '周末计划', '灵感便签', '工具收藏'],
  tools: ['代码格式化', '图片压缩', '时间转换', '正则练习', '画板', 'JSON 整理', '配色收藏', '图标小铺', '差异对比', 'Markdown 预览', '临时白板', '格式转换'],
  work: ['代码仓库', '工作文档', '日志平台', '部署记录', '接口目录', '会议室', '测试面板', '问题清单', '排期日历', '资源目录', '数据查询', '知识库'],
  wander: ['随便看看', '设计灵感', '一张照片', '声音角落', '有趣的文章', '独立小站', '夜晚书架', '陌生城市', '电影碎片', '游戏杂记', '好奇心', '今天发现'],
}

export const categories = [
  {
    id: 'personal',
    number: '01',
    title: '自己的网站',
    subtitle: '一点点，搭起自己的小世界。',
    illustration: '/illustrations/personal.webp',
    sites: [
      { id: 'little-yard', mark: '院', name: '安静的小院', domain: 'yard.anjing.example', description: '给自己的小作品留一块地方，随时回来逛逛。' },
      { id: 'journey-notes', mark: '旅', name: '旅途备忘', domain: 'journey.anjing.example', description: '记下路上的见闻，也装一些还没出发的念头。' },
      { id: 'score-corner', mark: '谱', name: '曲谱角落', domain: 'music.anjing.example', description: '收藏正在练的曲子，慢慢弹，慢慢听。' },
      { id: 'small-notes', mark: '记', name: '零碎笔记', domain: 'notes.anjing.example', description: '学习时随手写下来的小发现，都放在这里。' },
    ],
  },
  {
    id: 'tools',
    number: '02',
    title: '工具网站',
    subtitle: '顺手的小工具，帮一点小忙。',
    illustration: '/illustrations/tools.webp',
    sites: [
      { id: 'little-scissors', mark: '剪', name: '小剪刀', domain: 'scissors.example', description: '临时裁一张图片，顺手改改尺寸。' },
      { id: 'pixel-palette', mark: '色', name: '像素调色台', domain: 'palette.example', description: '找一组舒服的配色，存下今天喜欢的颜色。' },
      { id: 'text-mill', mark: '字', name: '文本磨坊', domain: 'textmill.example', description: '整理一段文字，让换行和格式都清清爽爽。' },
      { id: 'file-stop', mark: '件', name: '文件中转站', domain: 'file-stop.example', description: '给偶尔用到的格式转换工具留一个入口。' },
    ],
  },
  {
    id: 'work',
    number: '03',
    title: '公司网站',
    subtitle: '上班会用到的，放在一处。',
    illustration: '/illustrations/work.webp',
    sites: [
      { id: 'team-door', mark: '门', name: '团队入口', domain: 'team.company.example', description: '工作日从这里开始，找到常用的团队资源。' },
      { id: 'project-board', mark: '板', name: '项目看板', domain: 'board.company.example', description: '看看今天要处理的事情，记住正在推进的进度。' },
      { id: 'duty-notes', mark: '册', name: '值班手册', domain: 'handbook.company.example', description: '遇到问题时，回来查找流程和排查记录。' },
      { id: 'test-playground', mark: '试', name: '实验环境', domain: 'lab.company.example', description: '放置测试环境入口，方便日常验证和联调。' },
    ],
  },
  {
    id: 'wander',
    number: '04',
    title: '乱七八糟看的网站',
    subtitle: '没有什么目的，就是想看看。',
    illustration: '/illustrations/wander.webp',
    sites: [
      { id: 'one-page', mark: '页', name: '今日一页', domain: 'one-page.example', description: '每天读一点有趣的文字，偶尔停下来想想。' },
      { id: 'roaming-radio', mark: '听', name: '漫游电台', domain: 'roaming-radio.example', description: '挑一段没听过的声音，陪着放空一会儿。' },
      { id: 'curiosity-museum', mark: '奇', name: '奇怪收藏馆', domain: 'curiosity.example', description: '收藏说不上用途、但看着就觉得有意思的东西。' },
      { id: 'daydream-map', mark: '逛', name: '发呆地图', domain: 'daydream.example', description: '随便看看世界的某个角落，不急着去哪里。' },
    ],
  },
].map((category) => ({
  ...category,
  sites: [
    ...category.sites,
    ...extraMockNames[category.id].map((name, index) => ({
      id: `${category.id}-extra-${index + 1}`,
      name,
      domain: `${category.id}-${index + 5}.example`,
    })),
  ],
}))
