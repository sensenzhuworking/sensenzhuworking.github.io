# Sensen Zhu 个人主页 — 使用说明

## 文件说明

| 文件 | 说明 |
|------|------|
| `index.html` | **唯一需要编辑的文件**，包含页面结构、样式、配置、数据 |
| `pta-2026-h1-strategy.pdf` | 你上传的 PTA 期货研究报告（示例） |

---

## 如何部署到 GitHub Pages

### 第一次部署

1. 打开你的 GitHub 仓库：`https://github.com/sensenzhuworking/sensenzhuworking.github.io`
2. 点击 **Add file → Upload files**
3. 把 `index.html` 拖进去上传
4. 如果已有 `css/`、`js/` 文件夹里的旧文件，可以删除它们（新页面是单文件，不再需要）
5. 点击 **Commit changes**
6. 等 1-2 分钟，访问 `https://sensenzhuworking.github.io` 查看效果

### 以后更新

只需要重复上面的步骤，上传新的 `index.html` 覆盖旧的即可。

---

## 如何添加新的 PDF

### 步骤 1：上传 PDF 文件

在 GitHub 仓库里：
1. 点击 **Add file → Upload files**
2. 把 PDF 拖进去
3. **重要**：把文件名改得简洁，不要有空格和中文，例如：
   - `pdfs/my-new-report.pdf`
4. 点击 **Commit changes**

### 步骤 2：在页面上添加这个 PDF

打开 `index.html`，找到 `<script>` 标签里的 `CONFIG` 对象。

在对应模式的 `works: [ ]` 数组里，复制一个现有的作品条目，修改即可：

```javascript
{
  icon: "&#128200;",                    // Emoji 图标（可选）
  title: {
    zh: "中文标题",
    en: "English Title"
  },
  meta: {
    zh: "副信息 · 机构 (年份)",
    en: "Subtitle · Institution (Year)"
  },
  desc: {
    zh: "中文简介...",
    en: "English description..."
  },
  pdf: "pdfs/你的文件名.pdf"            // PDF 文件路径
}
```

> **提示**：`icon` 字段可以用 Emoji，也可以换成 `&#128300;` 这样的 HTML 实体。

### 步骤 3：重新上传 index.html

改好后，把 `index.html` 重新上传到 GitHub 覆盖旧文件。

---

## 如何切换页面模式

你的主页支持 **4 个模式**，通过 URL 参数切换：

| 模式 | 链接 |
|------|------|
| Trading（默认） | `https://sensenzhuworking.github.io` |
| Engineering | `https://sensenzhuworking.github.io/?mode=engineering` |
| Finance | `https://sensenzhuworking.github.io/?mode=finance` |
| Consulting | `https://sensenzhuworking.github.io/?mode=consulting` |

每个模式显示不同的自我介绍和作品列表。投递不同岗位时，可以给对方发对应的链接。

---

## 如何修改某个模式的内容

在 `index.html` 的 `<script>` 部分，找到 `CONFIG.modes` 对象：

```javascript
modes: {
  trading: {      // 模式名称
    subtitle: {   // 副标题
      zh: "...",  // 中文
      en: "..."   // 英文
    },
    heroDesc: {   // 简介
      zh: "...",
      en: "..."
    },
    skills: { zh: "...", en: "..." },   // 专长
    focus: { zh: "...", en: "..." },    // 方向
    works: [ ... ]  // 作品列表
  },
  engineering: { ... },
  finance: { ... },
  consulting: { ... }
}
```

修改对应字段的内容即可。

---

## 如何修改联系方式

在 HTML 的 Contact 区域找到邮箱、电话、地址，直接修改：

```html
<a href="mailto:你的邮箱@example.com" class="contact-item-value">你的邮箱@example.com</a>
<a href="tel:+8612345678900" class="contact-item-value">+86 123 4567 8900</a>
```

---

## 设计风格

- **Bauhaus 极简风格**：几何形状、网格布局、无衬线字体
- **主色调**：深蓝/黑色 + 琥珀金强调色
- **字体**：Inter + Playfair Display
- **响应式**：适配手机、平板、桌面

---

## 当前包含的 PDF

| 文件名 | 对应作品 |
|--------|----------|
| `pdfs/pta-2026-h1-strategy.pdf` | PTA 2026年半年度策略报告 |
| `pdfs/msc-research-project.pdf` | 硕士研究项目 |
| `pdfs/literature-review.pdf` | 文献综述 |
| `pdfs/unit-design-1.pdf` | 反应器设计报告 |
| `pdfs/unit-design-2.pdf` | P&ID 与控制设计 |

> 注意：你仓库里原有的 PDF 文件仍然需要保留在 `pdfs/` 文件夹中。新的 `pta-2026-h1-strategy.pdf` 需要上传到这个文件夹。
