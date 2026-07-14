/* ====== 中英文翻译字典 ====== */
const i18n = {
    "nav.about": {
        zh: "关于",
        en: "About"
    },
    "nav.works": {
        zh: "成果",
        en: "Works"
    },
    "nav.contact": {
        zh: "联系",
        en: "Contact"
    },
    "hero.subtitle": {
        zh: "大宗商品交易 · Imperial MSc / UCL BEng",
        en: "Commodity Trading · Imperial MSc / UCL BEng"
    },
    "hero.desc": {
        zh: "化学工程背景，具备华泰证券交易台支持经验。擅长数据驱动的研究分析、Python 建模与行业研究，致力于在 commodity trading 领域发展。",
        en: "Chemical engineer with hands-on trading desk experience at Huatai Securities. Skilled in data-driven research, Python modelling, and market analysis — pursuing a career in commodity trading."
    },
    "hero.cta": {
        zh: "浏览成果 ↓",
        en: "View my work ↓"
    },
    "about.title": {
        zh: "关于我",
        en: "About Me"
    },
    "about.edu.title": {
        zh: "教育",
        en: "Education"
    },
    "about.edu.msc": {
        zh: "<strong>帝国理工大学</strong> · 高等化学工程 · 硕士 (2024–2025)",
        en: "<strong>Imperial College London</strong> · MSc Advanced Chemical Eng. (2024–2025)"
    },
    "about.edu.beng": {
        zh: "<strong>伦敦大学学院 (UCL)</strong> · 化学工程 · 学士 (2021–2024)",
        en: "<strong>UCL</strong> · BEng Chemical Engineering (2021–2024)"
    },
    "about.skills.title": {
        zh: "专长",
        en: "Expertise"
    },
    "about.skills.tech": {
        zh: "Python (pandas, matplotlib) · Excel · Bloomberg · SQL",
        en: "Python (pandas, matplotlib) · Excel · Bloomberg · SQL"
    },
    "about.skills.field": {
        zh: "数据分析 · 量化建模 · 行业研究 · 交易台支持",
        en: "Data Analysis · Quantitative Modelling · Research · Trading Desk Support"
    },
    "about.interests.title": {
        zh: "方向",
        en: "Target Role"
    },
    "about.interests.eng": {
        zh: "大宗商品交易 · 能源/化工品种 · 结构化产品",
        en: "Commodity Trading · Energy/Chemicals · Structured Products"
    },
    "about.interests.fin": {
        zh: "CFA Level I Candidate · 市场分析 · 风险管理",
        en: "CFA Level I Candidate · Market Analysis · Risk Management"
    },
    "works.title": {
        zh: "成果展示",
        en: "Selected Works"
    },
    "works.desc": {
        zh: "点击「查看 PDF」即可阅读完整文档。",
        en: "Click the link to view the full document."
    },
    "contact.title": {
        zh: "联系方式",
        en: "Contact"
    },
    "contact.location": {
        zh: "中国香港 (TTPS)",
        en: "Hong Kong (TTPS)"
    }
};

/* ====== 语言切换逻辑 ====== */
let currentLang = localStorage.getItem('lang') || 'zh';

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // 更新所有 data-i18n 元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (i18n[key] && i18n[key][lang]) {
            el.innerHTML = i18n[key][lang];
        }
    });

    // 更新语言切换按钮文字
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'zh' ? 'EN' : '中';

    // 更新作品列表（如果已经渲染）
    if (typeof renderWorks === 'function') {
        renderWorks();
    }
}

function toggleLang() {
    setLang(currentLang === 'zh' ? 'en' : 'zh');
}

// DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('lang-toggle')?.addEventListener('click', toggleLang);
    setLang(currentLang);
});
