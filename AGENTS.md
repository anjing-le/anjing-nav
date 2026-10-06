# 协作约定

- 这是精简的 React 单页导航网站，首页使用蜡笔涂鸦风格和四个分类入口块，不放人物。数据集中放在 `src/data.js`，当前为明确标注的 mock；不要把示例域名当作真实书签。
- 分类支持鼠标悬停、手机点击和键盘操作；保持同一时刻最多展开一类，不能只支持 hover。
- 网站单击切换选择，支持跨分类多选；hover/focus 仅预览。双击把目标并入已选集合后批量打开，Enter 打开全部已选，Esc/刷新清空。不要在切换分类或打开后自动清除选择。
- 保持双击已选项不会被第一 click 漏掉；打开请求在用户事件内同步发出，不从 noopener 的 null 返回值推断打开成功或被拦截。当前示例网址不得跳转。
- 首页只保留入口卡片，不添加卡片外的页头、介绍、操作提示或页脚文字。
- 不自动添加登录、下钻页面、后端、UI 库或额外基础设施。
- Git 作者与提交者都使用 `anjing-le <245548353+anjing-le@users.noreply.github.com>`，只设置仓库本地身份，提交前核验。
- Git remote 使用 `git@github.com:anjing-le/anjing-nav.git`，当前工作树使用 `~/.ssh/id_rsa_anjing`，不依赖默认 GitHub SSH 身份。
- 发布前执行 `npm run build` 与 `git diff --check`，区分本地构建成功与 Cloudflare 部署、线上页面验证。
