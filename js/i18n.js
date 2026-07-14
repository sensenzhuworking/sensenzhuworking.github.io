/*
 * ====== 国际化 + 模式切换引擎 ======
 * 自动读取 URL 参数 ?mode=xxx，加载对应岗位内容
 */

// 读取 URL 参数
function getModeFromURL() {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get('mode');
    // 检查 mode 是否在配置中，不在则默认 trading
    return (mode && SITE_CONFIG.modes[mode]) ? mode : 'trading';
}

const CURRENT_MODE = getModeFromURL();

// ====== 基础翻译字典 ======
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
        zh: "",
        en: ""
    },
    "hero.desc": {
        zh: "",
        en: ""
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
        zh: "",
        en: ""
    },
    "about.skills.field": {
        zh: "",
        en: ""
    },
    "about.interests.title": {
        zh: "方向",
        en: "Target Role"
    },
    "about.interests.eng": {
        zh: "",
        en: ""
    },
    "about.interests.fin": {
        zh: "",
        en: ""
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

// ====== 从 config 填充模式内容 ======
function loadModeContent(mode) {
    const mc = SITE_CONFIG.modes[mode];
    if (!mc) return;

    i18n["hero.subtitle"] = mc.subtitle;
    i18n["hero.desc"] = mc.heroDesc;
    i18n["about.skills.tech"] = mc.skills;
    i18n["about.skills.field"] = mc.field;
    i18n["about.interests.eng"] = mc.interest1;
    i18n["about.interests.fin"] = mc.interest2;
}

// 加载当前模式内容
loadModeContent(CURRENT_MODE);

// ====== 语言切换逻辑 ======
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

    // 更新语言切换按钮
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'zh' ? 'EN' : '中';

    // 更新作品列表
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
