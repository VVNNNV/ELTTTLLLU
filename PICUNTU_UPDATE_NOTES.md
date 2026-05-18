# PicUn tu 网站改造说明

本项目已根据要求完成 Logo、首页跳转、SEO、金色背景主题与构建验证修改。当前构建命令 `npm run build` 已执行成功，产物位于 `dist/` 目录。

## 已完成修改

| 类别 | 修改内容 |
|---|---|
| Logo 替换 | 已将用户提供的 `logo-new.png` 放入 `public/logo-new.png`，并在页面 Logo 与 favicon 中使用该图标。 |
| Logo 点击返回首页 | 页面左上角 Logo 已改为可点击链接，点击跳转到 `https://www.tttia.com`。 |
| 首页按钮 | 首页头部新增“首页”按钮，点击跳转到 `https://www.tttia.com`。 |
| SEO 标题 | 页面标题已改为 `PicUn tu - 免费在线图片压缩与图片优化工具 | JPEG/PNG/WEBP/AVIF/SVG/GIF`。 |
| SEO 元信息 | 已添加 description、keywords、canonical、robots、Open Graph、Twitter Card、结构化数据 JSON-LD。 |
| 搜索引擎文件 | 已新增 `public/robots.txt` 与 `public/sitemap.xml`。 |
| PWA/移动端图标 | 已新增 `public/site.webmanifest`，并引用新 Logo。 |
| 品牌文案 | 多语言文件中的旧品牌名已统一替换为 `PicUn tu`，中文首页文案已增强为图片压缩和 SEO 优化定位。 |
| 金色主题 | 页面背景、头部、按钮和 Ant Design 主题色已改为金色系。 |
| 构建验证 | 已运行 `npm install` 与 `npm run build`，构建成功。 |

## 推荐部署方式

在服务器上进入项目目录后，建议使用以下命令重新安装依赖并构建：

```bash
npm install
npm run build
```

构建完成后，将 `dist/` 目录作为静态网站根目录部署到 Nginx、宝塔面板或其他静态托管服务即可。

如果需要本地预览生产构建结果，可运行：

```bash
npm run preview -- --host 0.0.0.0 --port 3001
```

如果需要开发模式，可运行：

```bash
npm run dev -- --host 0.0.0.0 --port 3000
```

## 关于你粘贴的 Vite 插件缺失错误

你粘贴的错误中出现了 `@intlify/unplugin-vue-i18n` 和 `@vitejs/plugin-vue-jsx`，这属于 Vue 项目的插件依赖；本次上传的 `pic-smaller-master` 项目是 React + Vite 项目，当前 `vite.config.ts` 使用的是 `@vitejs/plugin-react`，因此不会再触发上述 Vue 插件缺失问题。

如服务器上运行的是另一个 `/root/it-tools-` Vue 项目，需要在那个项目里单独安装对应依赖或恢复正确的 `package.json` / lock 文件；本交付包已针对当前上传的 PicUn tu 图片压缩网站完成验证。
