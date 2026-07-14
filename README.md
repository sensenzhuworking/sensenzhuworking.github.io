# Sensen Zhu · 朱森森 · 个人主页

中英文双语个人求职网站，使用 GitHub Pages 免费托管。

**一个网站，多个版本。** 通过不同的 URL 链接展示不同岗位方向的内容，页面完全独立，人事看不出你还在看别的方向。

## 可用链接

| 方向 | 链接 |
|---|---|
| **Trading（默认）** | `https://sensenzhuworking.github.io` |
| **工程 / Engineering** | `https://sensenzhuworking.github.io/?mode=engineering` |
| **金融 / Finance** | `https://sensenzhuworking.github.io/?mode=finance` |
| **咨询 / Consulting** | `https://sensenzhuworking.github.io/?mode=consulting` |

## 网站结构

```
site/
├── index.html            # 主页面
├── css/style.css         # 样式
├── js/
│   ├── config.js         # ★ 所有岗位配置都在这里（你要改的主要文件）
│   ├── i18n.js           # 中英文翻译 + 模式加载引擎（不用动）
│   └── data.js           # 成果渲染（不用动）
└── pdfs/                 # PDF 文件
    ├── msc-research-project.pdf
    ├── literature-review.pdf
    ├── unit-design-1.pdf
    └── unit-design-2.pdf
```

## 如何修改

### 修改某个方向的内容
编辑 `js/config.js`，找到对应的模式（如 `trading:`、`engineering:`），修改里面的文字即可。

### 新增一个方向
在 `js/config.js` 的 `modes: { }` 里复制一段已有的模式（比如 `consulting: { ... }`），把 key 换成新名字，然后改里面的文字和作品列表。

### 增删成果
在每个模式的 `works: [ ]` 里添加或删除条目。每条包含：

| 字段 | 说明 |
|---|---|
| icon | Emoji 图标 |
| title | `{zh: 中文标题, en: 英文标题}` |
| meta | `{zh: 中文副信息, en: 英文副信息}` |
| desc | `{zh: 中文简介, en: 英文简介}` |
| pdf | PDF 文件路径（没有就填 `"#"`） |

## 更新线上网站

修改后，把以下文件通过 GitHub 网页重新上传覆盖即可：
- `index.html`
- `css/style.css`
- `js/config.js`
- `js/i18n.js`
- `js/data.js`
- `pdfs/`（如果新增了 PDF）

操作：打开 https://github.com/sensenzhuworking/sensenzhuworking.github.io → **Add file → Upload files** → 拖进去 → **Commit changes**。等 1-2 分钟生效。
