# 安静导航

集中放置每天会打开的网站，方便从不同设备访问。当前版本只建立工程和部署，首页保持空白；导航内容与视觉设计后续迭代。

使用 React + Vite，仅一个首页，无登录、路由、后端或 UI 组件库。

## 本地开发

Node.js 22.12+（或 20.19+）。

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run preview
```

## 部署

站点地址：[安静导航](https://anjing-nav.pages.dev/)。

Cloudflare Pages 连接 GitHub 仓库 `anjing-le/anjing-nav`：

- 生产分支：`main`
- 构建命令：`npm run build`
- 输出目录：`dist`
- Node.js：`22.22.0`

`main` 推送后自动构建部署。Node 版本由根目录 `.node-version` 指定，依赖版本由 `package-lock.json` 固定，下载使用项目 `.npmrc` 中的 npm 官方源。

## Git 身份

作者与提交者使用 `anjing-le <245548353+anjing-le@users.noreply.github.com>`。Git remote 使用 SSH，当前工作树独立配置 `anjing-le` 的 SSH 密钥。
