# 协作约定

- 这是精简的 React 单页导航网站，当前首页保持空白。新增内容和视觉交互按用户后续要求进行。
- 不自动添加登录、下钻页面、后端、UI 库或额外基础设施。
- Git 作者与提交者都使用 `anjing-le <245548353+anjing-le@users.noreply.github.com>`，只设置仓库本地身份，提交前核验。
- Git remote 使用 `git@github.com:anjing-le/anjing-nav.git`，当前工作树使用 `~/.ssh/id_rsa_anjing`，不依赖默认 GitHub SSH 身份。
- 发布前执行 `npm run build` 与 `git diff --check`，区分本地构建成功与 Cloudflare 部署、线上页面验证。
