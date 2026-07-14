# Sensen Zhu · 朱森森 · 个人主页

中英文双语个人求职网站，使用 GitHub Pages 免费托管。

## 网站结构

```
site/
├── index.html          # 主页面
├── css/style.css       # 样式
├── js/
│   ├── i18n.js         # 中英文翻译字典 + 切换逻辑
│   └── data.js         # 成果数据（你要改的地方）
└── pdfs/               # 你的 PDF 文件
    ├── msc-research-project.pdf
    ├── literature-review.pdf
    ├── unit-design-1.pdf
    └── unit-design-2.pdf
```

## 如何修改

### 增删成果
编辑 `js/data.js`，按格式添加或删除条目即可。每条包含：

| 字段 | 说明 |
|---|---|
| icon | Emoji 图标 |
| title | {zh: 中文标题, en: 英文标题} |
| meta | {zh: 中文副信息, en: 英文副信息} |
| desc | {zh: 中文简介, en: 英文简介} |
| pdf | PDF 文件路径 |

### 修改个人介绍
编辑 `js/i18n.js` 中的翻译字典，找到对应 key 修改即可。

## 部署步骤

```bash
cd site
git init
git add .
git commit -m "init"
# 改成你的 GitHub 用户名
git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
git branch -M main
git push -u origin main
```

然后去 GitHub 仓库 **Settings → Pages**，Source 选 `Deploy from a branch` → `main` → `/ (root)`。等 1-2 分钟即可访问。
