# 安静导航

集中放置每天会打开的网站，方便从不同设备访问。首页只保留蜡笔涂鸦风格的四个分类入口块：自己的网站、工具网站、公司网站、乱七八糟看的网站。插画只使用物件，不包含人物；卡片外没有页头、介绍或页脚文字。

使用 React + Vite，仅一个首页，无登录、路由、后端或 UI 组件库。

## 当前原型

每个分类有 4 条 mock，共 16 条，集中维护在 `src/data.js`。名称、说明和 `.example` 域名均为示例，可参与多选但不会跳转到假网站；尝试打开时会在卡片内显示提示。

电脑悬停分类展开列表，悬停网站查看说明；点击分类可固定展开，再点收起。手机点击展开。任一时刻只展开一类，列表在分类块内显示。

单击网站选中，再次单击取消，支持跨分类多选；hover 和切换分类只改变预览，不清除选择。双击网站会将它并入已有选择，一次请求打开全部已选网站；没有其它选择时打开双击的单个网站。Enter 打开全部已选，Esc 清除全部选择，刷新页面也会清空。打开之后仍保留选择，直到用户取消或清空。

键盘用 Tab 移动，空格切换网站选择。没有已选项时，Enter 保留按钮的原生操作；有已选项时全局 Enter 优先执行批量打开，长按不会重复打开。

替换真实地址时修改条目的 `domain`，也可用完整 `url` 指定目标（优先于 `domain`），仅接受 HTTP/HTTPS。批量打开在用户双击/按键事件中同步请求，使用新标签及 `noopener,noreferrer`；[浏览器可能拦截多标签](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)，卡片内会提示允许本站弹出窗口后重试。页面只报告请求数量，不据此声称浏览器已成功打开。

插画保存在 `public/illustrations/`，生成提示词见 `artwork-prompts.md`。使用本地图像和系统字体，不依赖外部字体或 UI 库。浏览器标签页继续使用用户提供的地球图标。

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
