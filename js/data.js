/*
 * ============================
 *  📝 你的成果列表
 *  ============================
 *  每条数据包含中英文两套信息。
 *  想增加 / 删减条目，直接编辑这个数组即可。
 */

const works = [
    {
        icon: "🔬",
        title: { zh: "近等温压缩空气储能：板式换热器作为压缩机的数值与实验研究", en: "Near-Isothermal CAES: Numerical & Experimental Investigation of a Plate Heat Exchanger as Compressor" },
        meta: { zh: "帝国理工大学 · 硕士研究项目 (2025)", en: "Imperial College London · MSc Research Project (2025)" },
        desc: { zh: "开发 Python 数值模型模拟压缩空气储能系统，设计与搭建实验装置验证板式换热器作为压缩机的可行性。", en: "Developed a Python numerical model for CAES systems; designed and built an experimental rig to validate a plate heat exchanger as a compressor." },
        pdf: "pdfs/msc-research-project.pdf"
    },
    {
        icon: "📖",
        title: { zh: "液态活塞近等温压缩空气用于跨季储能的文献综述", en: "Literature Review: Liquid-piston nI-CAES for Inter-seasonal Electricity Storage" },
        meta: { zh: "帝国理工大学 · 文献综述 (2025)", en: "Imperial College London · Literature Review (2025)" },
        desc: { zh: "系统综述跨季储能技术，聚焦近等温压缩空气储能的技术路线与 CFD 方法。", en: "A systematic review of inter-seasonal storage technologies, focusing on near-isothermal CAES and CFD approaches." },
        pdf: "pdfs/literature-review.pdf"
    },
    {
        icon: "⚗️",
        title: { zh: "单元设计 I：苯硝化反应器设计报告", en: "Unit Design I: Nitration Reactor Design Report" },
        meta: { zh: "伦敦大学学院 · 本科课程设计 (2024)", en: "UCL · Undergraduate Design Project (2024)" },
        desc: { zh: "完成苯硝化 CSTR 反应器的工艺设计、动力学建模与敏感性分析，获得 70% 转化率最优工况。", en: "Completed the process design, kinetic modelling, and sensitivity analysis of a benzene nitration CSTR, achieving 70% conversion at optimal conditions." },
        pdf: "pdfs/unit-design-1.pdf"
    },
    {
        icon: "📐",
        title: { zh: "单元设计 II：硝化反应器管道与仪表图 (P&ID) 报告", en: "Unit Design II: P&ID Report of Nitration Reactor" },
        meta: { zh: "伦敦大学学院 · 本科课程设计 (2024)", en: "UCL · Undergraduate Design Project (2024)" },
        desc: { zh: "设计反应器控制回路与安全联锁系统，绘制完整 P&ID 图纸，完成 SIL 安全完整性分析。", en: "Designed control loops and safety interlock systems; produced full P&ID diagrams with SIL analysis." },
        pdf: "pdfs/unit-design-2.pdf"
    }
];

/* ====== 不用动下面 ====== */

function renderWorks() {
    const container = document.getElementById('works-list');
    if (!container) return;

    const lang = typeof currentLang !== 'undefined' ? currentLang : 'zh';

    container.innerHTML = works.map(w => `
        <div class="work-item">
            <div class="work-icon">${w.icon}</div>
            <div class="work-body">
                <h3>${w.title[lang] || w.title.zh}</h3>
                <div class="work-meta">${w.meta[lang] || w.meta.zh}</div>
                <div class="work-desc">${w.desc[lang] || w.desc.zh}</div>
            </div>
            <a href="${w.pdf}" target="_blank" class="work-link">${lang === 'zh' ? '查看 PDF →' : 'Open PDF →'}</a>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderWorks);
