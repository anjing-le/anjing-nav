export const backgrounds = [
  { id: 'starry-sky', title: '星月夜', artist: '文森特·梵高',
    description: '旋转的星空、明亮的月亮和高耸的柏树，与下方安静的小镇形成对照。梵高用流动的笔触，让夜空充满动感。',
    source: 'https://www.moma.org/collection/works/79802' },
  { id: 'water-lilies', title: '睡莲', artist: '克洛德·莫奈',
    description: '睡莲浮在池面，树木倒影与水光交织。莫奈把目光放在水面的色彩变化，让花朵、倒影和水融成一片。',
    source: 'https://www.artic.edu/artworks/16568/water-lilies' },
  { id: 'great-wave', title: '神奈川冲浪里', artist: '葛饰北斋',
    description: '巨浪卷起如爪的浪花，小船穿行其间，远处是小小的富士山。近处汹涌的海浪与远山的静止，构成鲜明对比。',
    source: 'https://www.metmuseum.org/art/collection/search/45434' },
  { id: 'mona-lisa', title: '蒙娜丽莎', artist: '列奥纳多·达·芬奇',
    description: '人物双手交叠，面带含蓄的微笑，身后是远山与水道。柔和的明暗过渡，让面部轮廓显得细腻而朦胧。',
    source: 'https://collections.louvre.fr/ark:/53355/cl010062370' },
  { id: 'pearl-earring', title: '戴珍珠耳环的少女', artist: '约翰内斯·维米尔',
    description: '少女回眸，蓝黄色头巾与明亮的耳饰格外醒目。这幅画属于描绘人物类型的“特罗尼”，并非身份明确的肖像。',
    source: 'https://www.mauritshuis.nl/en/our-collection/artworks/670-girl-with-a-pearl-earring' },
  { id: 'the-scream', title: '呐喊', artist: '爱德华·蒙克',
    description: '桥上的人物双手贴脸、张口呐喊，天空和峡湾一起扭动。夸张的线条与色彩，把不安的情绪变成了可见的画面。',
    source: 'https://www.nasjonalmuseet.no/en/collection/object/NG.M.00939' },
  { id: 'grande-jatte', title: '大碗岛的星期天下午', artist: '乔治·修拉',
    description: '人们在塞纳河畔散步、休息、垂钓。原作以细小色点构成画面，让不同颜色在观看时交织，是点彩画的代表作。',
    source: 'https://www.artic.edu/artworks/27992/a-sunday-on-la-grande-jatte-1884' },
  { id: 'sunflowers', title: '向日葵', artist: '文森特·梵高',
    description: '盛开与凋谢的向日葵放在同一只花瓶里。梵高用不同层次的黄色，描绘花朵的形状、质感与生命阶段。',
    source: 'https://www.nationalgallery.org.uk/paintings/vincent-van-gogh-sunflowers' },
  { id: 'the-kiss', title: '吻', artist: '古斯塔夫·克林姆特',
    description: '相拥的恋人位于繁花草地边，金色衣袍把两人包裹在一起。方块与圆形纹样区分彼此，也让人物融入装饰图案。',
    source: 'https://sammlung.belvedere.at/objects/6678/der-kuss-liebespaar' },
  { id: 'american-gothic', title: '美国哥特式', artist: '格兰特·伍德',
    description: '一对神情严肃的人物立在尖拱窗农舍前，男子手持三齿叉。伍德以妹妹和牙医为模特，描绘美国乡村的形象。',
    source: 'https://www.artic.edu/artworks/6565/american-gothic' },
]
const storageKey = 'anjing-nav:last-background'

// Choose once before React renders; selecting sites never changes the background.
export function applyPageBackground() {
  let previous
  try {
    previous = window.localStorage.getItem(storageKey)
  } catch {
    // The page still works when browser storage is unavailable.
  }

  const candidates = backgrounds.filter((artwork) => artwork.id !== previous)
  const chosen = candidates[Math.floor(Math.random() * candidates.length)]
  document.documentElement.style.setProperty('--page-art', `url("/backgrounds/${chosen.id}-v2.webp")`)

  try {
    window.localStorage.setItem(storageKey, chosen.id)
  } catch {
    // Storage is only used to avoid consecutive repeats.
  }
  return chosen
}
