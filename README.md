# 安静导航

集中放置每天会打开的网站，方便从不同设备访问。首页使用四个蜡笔涂鸦风格的纯图入口，分别对应自己的网站、工具网站、公司网站、乱七八糟看的网站。默认全部收起，只显示四个图案；四个入口固定在一排，悬停时在下方展开当前分类列表，入口位置与大小不变。插画只使用物件，不包含人物；入口不显示编号、分类标题、描述、计数或加减号，页面没有页头、介绍或页脚文字。

使用 React + Vite，仅一个首页，无登录、路由、后端或 UI 组件库。

## 网站维护

全部 mock 网站已清空。“自己的网站”按用户筛选收录 17 个真实子域名，其余三个分类暂为空。两个 GitHub Journey 域名按用户要求分别保留；不收录 bounty、date、richfree-api、super-context、we-company、yanyinglu。个人网站名称统一使用子域名前缀，例如 `ai-coding.anjing.cc` 显示为 `ai-coding`；已选预览使用相同名称。真实网站统一在 `src/data.js` 中按用户提供的名称、分类和地址逐条维护；条目使用唯一 `id`、`name`、`domain`，有路径或查询参数的地址使用完整 `url`。不自动补充示例网站，空分类不显示占位文字。

支持 hover 的鼠标悬停入口即展开列表，悬停其他入口切换分类。移出后保持展开，方便访问网站列表和上方已选预览；鼠标点击保持展开，点击空白处收起并清空选择。触屏点击或键盘操作仍可切换，再次操作当前入口收起。任一时刻最多展开一类，刷新后全部收起；hover 不改变已选网站。展开的网站名称按紧凑网格排列，按钮统一尺寸；桌面面板宽度最多 520px，按钮最小高度 46px，窄屏自动减少列数。布局不随分类条目数重新居中，滚动条出现也不改变入口位置。网址通过浏览器原生悬停提示显示，使用自然高度，不在小卡片里嵌套滚动。所有屏幕下四个图案入口保持一排，列表在下方显示，宽度不超过屏幕可用空间。列表不附加网站详情、占位说明或操作提示，纯图入口仍保留分类名称等可访问性属性。

单击网站选中，再次单击取消，支持跨分类多选；hover 和切换分类不清除选择。点击页面空白处会收起分类并清空全部已选网站，网站按钮和已选预览不触发该操作。已选网站按选择顺序在卡片上方呈现一个个小方块，每个方块只显示名称，网址在悬停时显示，并可用独立的 × 取消。上方预览单击仅聚焦，双击打开全部已选；取消使用独立按钮，避免第一下点击移除方块而破坏双击。选择区高度固定，可横向滚动，滚动页面时保持 sticky，选择变化不会移动分类卡片。

双击列表中的网站会将它并入已有选择，一次请求打开全部已选网站；没有其它选择时打开双击的单个网站。Enter 打开全部已选，Esc 清除全部选择，刷新页面也会清空。打开之后仍保留选择，直到用户取消或清空。

键盘用 Tab 移动，分类入口支持左右方向键和 Home/End 移动焦点、Space 切换分类；网站按钮用空格切换选择。没有已选项时，Enter 保留按钮的原生操作；有已选项时全局 Enter 优先执行批量打开，长按不会重复打开。

替换真实地址时修改条目的 `domain`，也可用完整 `url` 指定目标（优先于 `domain`），仅接受 HTTP/HTTPS。批量打开在用户双击/按键事件中同步请求，使用新标签及 `noopener,noreferrer`；[浏览器可能拦截多标签](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)。`src/navigation.js` 保留 mock 地址保护、无效地址过滤与请求统计，界面不显示这些说明，也不据请求数量推断浏览器已成功打开。

插画保存在 `public/illustrations/`，生成提示词见 `artwork-prompts.md`。使用本地图像和系统字体，不依赖外部字体或 UI 库。浏览器标签页继续使用用户提供的地球图标。

光标复用 `anjing-anjing` 的 Richfree 普通/点击 PNG，保存在 `public/assets/cursors/`；保留原项目的 `2x` 显示尺寸和热点，不引入桌面应用的主题设置或 Tauri 依赖。

## 本地开发

Node.js 22.12+（或 20.19+）。

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run preview
npm test
```

## 部署

站点地址：[安静导航](https://nav.anjing.cc/)。

自定义域名在 Cloudflare Pages 中绑定，DNS 记录为 `CNAME nav → anjing-nav.pages.dev`。

Cloudflare Pages 连接 GitHub 仓库 `anjing-le/anjing-nav`：

- 生产分支：`main`
- 构建命令：`npm run build`
- 输出目录：`dist`
- Node.js：`22.22.0`

`main` 推送后由 Cloudflare Pages 自动构建部署。GitHub 的 Cloudflare Workers and Pages 应用已授权访问本仓库。

Node 版本由根目录 `.node-version` 指定，依赖版本由 `package-lock.json` 固定，下载使用项目 `.npmrc` 中的 npm 官方源。

## Git 身份

作者与提交者使用 `anjing-le <245548353+anjing-le@users.noreply.github.com>`。Git remote 使用 SSH，当前工作树独立配置 `anjing-le` 的 SSH 密钥。
