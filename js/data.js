/*
 * ============================
 *  成果渲染（自动适配当前模式）
 *  ============================
 *  不用改这个文件，去 config.js 里改各模式的 works 列表
 */

function renderWorks() {
    const container = document.getElementById('works-list');
    if (!container) return;

    const lang = typeof currentLang !== 'undefined' ? currentLang : 'zh';
    const mode = typeof CURRENT_MODE !== 'undefined' ? CURRENT_MODE : 'trading';
    const works = SITE_CONFIG.modes[mode]?.works || [];

    if (works.length === 0) {
        container.innerHTML = `<p style="color:#999;text-align:center;">暂无展示内容</p>`;
        return;
    }

    container.innerHTML = works.map(w => `
        <div class="work-item">
            <div class="work-icon">${w.icon}</div>
            <div class="work-body">
                <h3>${w.title[lang] || w.title.zh}</h3>
                <div class="work-meta">${w.meta[lang] || w.meta.zh}</div>
                <div class="work-desc">${w.desc[lang] || w.desc.zh}</div>
            </div>
            ${w.pdf !== '#' ? `<a href="${w.pdf}" target="_blank" class="work-link">${lang === 'zh' ? '查看 PDF →' : 'Open PDF →'}</a>` : ''}
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderWorks);
