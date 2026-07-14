/*
 * =========================================
 *  🎯 岗位模式配置 —— 你只需要改这个文件
 *  =========================================
 *
 *  用法：
 *    sensenzhuworking.github.io              → 显示默认模式（trading）
 *    sensenzhuworking.github.io/?mode=trading → trading 版
 *    sensenzhuworking.github.io/?mode=engineering → 工程版
 *    sensenzhuworking.github.io/?mode=finance → 金融版
 *
 *  想新增模式：复制一段 {}，改 key 和内容即可。
 *  人事永远看不到其他模式存在。
 */

const SITE_CONFIG = {

    /* ====== 模式列表 ====== */
    modes: {

        /* ---------- Trading 方向（默认） ---------- */
        trading: {
            subtitle: {
                zh: "大宗商品交易 · Imperial MSc / UCL BEng",
                en: "Commodity Trading · Imperial MSc / UCL BEng"
            },
            heroDesc: {
                zh: "化学工程背景，具备华泰证券交易台支持经验。擅长数据驱动的研究分析、Python 建模与行业研究，致力于在 commodity trading 领域发展。",
                en: "Chemical engineer with hands-on trading desk experience at Huatai Securities. Skilled in data-driven research, Python modelling, and market analysis — pursuing a career in commodity trading."
            },
            skills: {
                zh: "Python (pandas, matplotlib) · Excel · Bloomberg · SQL",
                en: "Python (pandas, matplotlib) · Excel · Bloomberg · SQL"
            },
            field: {
                zh: "数据分析 · 量化建模 · 行业研究 · 交易台支持",
                en: "Data Analysis · Quantitative Modelling · Research · Trading Desk Support"
            },
            interest1: {
                zh: "大宗商品交易 · 能源/化工品种 · 结构化产品",
                en: "Commodity Trading · Energy/Chemicals · Structured Products"
            },
            interest2: {
                zh: "CFA Level I Candidate · 市场分析 · 风险管理",
                en: "CFA Level I Candidate · Market Analysis · Risk Management"
            },
            works: [
                {
                    icon: "🔬",
                    title: { zh: "近等温压缩空气储能：板式换热器作为压缩机的数值与实验研究", en: "Near-Isothermal CAES: Numerical & Experimental Investigation of a Plate Heat Exchanger as Compressor" },
                    meta: { zh: "帝国理工大学 · 硕士研究项目 (2025)", en: "Imperial College London · MSc Research Project (2025)" },
                    desc: { zh: "开发 Python 数值模型模拟压缩空气储能系统，设计与搭建实验装置验证板式换热器作为压缩机的可行性。", en: "Developed a Python numerical model for CAES systems; designed and built an experimental rig to validate a plate heat exchanger as a compressor." },
                    pdf: "pdfs/msc-research-project.pdf"
                },
                {
                    icon: "📖",
                    title: { zh: "跨季储能技术文献综述", en: "Literature Review: Inter-seasonal Energy Storage Technologies" },
                    meta: { zh: "帝国理工大学 · 文献综述 (2025)", en: "Imperial College London · Literature Review (2025)" },
                    desc: { zh: "系统综述跨季储能技术，聚焦近等温压缩空气储能的技术路线与 CFD 方法。", en: "A systematic review of inter-seasonal storage technologies, focusing on near-isothermal CAES and CFD approaches." },
                    pdf: "pdfs/literature-review.pdf"
                },
                {
                    icon: "📊",
                    title: { zh: "华泰证券：能源化工行业 KPI 数据库与可视化", en: "Huatai Securities: Energy & Chemical KPI Database & Dashboard" },
                    meta: { zh: "华泰证券 · 实习项目 (2023)", en: "Huatai Securities · Internship Project (2023)" },
                    desc: { zh: "构建 50+ 项运营与财务指标数据库，开发 Python 可视化仪表盘，将周度数据汇编时间从 4+ 小时缩短至 30 分钟。", en: "Built a 50+ metric KPI database; developed Python dashboards, cutting weekly data compilation from 4+ hrs to 30 min." },
                    pdf: "#"
                }
            ]
        },

        /* ---------- 工程方向（化工/过程工程） ---------- */
        engineering: {
            subtitle: {
                zh: "化学工程 · Imperial MSc / UCL BEng",
                en: "Chemical Engineering · Imperial MSc / UCL BEng"
            },
            heroDesc: {
                zh: "化学工程背景，擅长流程建模、工艺设计与安全分析。具备 ASPEN、gPROMS 仿真经验与全流程工厂设计能力。",
                en: "Chemical engineer with expertise in process modelling, plant design, and safety analysis. Experienced in ASPEN, gPROMS simulation and end-to-end plant design."
            },
            skills: {
                zh: "Python · ASPEN · gPROMS · CFD · AutoCAD · MATLAB",
                en: "Python · ASPEN · gPROMS · CFD · AutoCAD · MATLAB"
            },
            field: {
                zh: "化工流程建模 · 工艺设计 · 设备选型 · 安全完整性分析",
                en: "Process Modelling · Plant Design · Equipment Specification · SIL Analysis"
            },
            interest1: {
                zh: "过程工程 · 能源系统 · 工艺优化 · 可持续技术",
                en: "Process Engineering · Energy Systems · Optimisation · Sustainable Technology"
            },
            interest2: {
                zh: "技术经济分析 · CAPEX/OPEX 估算 · 项目评估",
                en: "Techno-economic Analysis · CAPEX/OPEX · Project Evaluation"
            },
            works: [
                {
                    icon: "🔬",
                    title: { zh: "近等温压缩空气储能：板式换热器作为压缩机的数值与实验研究", en: "Near-Isothermal CAES: Numerical & Experimental Investigation of a Plate Heat Exchanger as Compressor" },
                    meta: { zh: "帝国理工大学 · 硕士研究项目 (2025)", en: "Imperial College London · MSc Research Project (2025)" },
                    desc: { zh: "开发 Python 数值模型，设计实验装置验证板式换热器压缩机可行性，实验与仿真偏差 <3%。", en: "Developed Python models and built experimental rig; validated plate heat exchanger compressor with <3% deviation." },
                    pdf: "pdfs/msc-research-project.pdf"
                },
                {
                    icon: "⚗️",
                    title: { zh: "苯硝化反应器设计报告", en: "Unit Design I: Nitration Reactor Design Report" },
                    meta: { zh: "伦敦大学学院 · 本科课程设计 (2024)", en: "UCL · Undergraduate Design Project (2024)" },
                    desc: { zh: "完成苯硝化 CSTR 反应器工艺设计、动力学建模与敏感性分析，70% 转化率最优工况。", en: "Completed CSTR reactor design, kinetic modelling and sensitivity analysis with 70% optimal conversion." },
                    pdf: "pdfs/unit-design-1.pdf"
                },
                {
                    icon: "📐",
                    title: { zh: "硝化反应器 P&ID 与控制设计", en: "Unit Design II: P&ID and Control System Design" },
                    meta: { zh: "伦敦大学学院 · 本科课程设计 (2024)", en: "UCL · Undergraduate Design Project (2024)" },
                    desc: { zh: "设计反应器控制回路与安全联锁系统，绘制完整 P&ID，完成 SIL 安全完整性分析。", en: "Designed control loops and safety interlock systems; produced full P&ID with SIL analysis." },
                    pdf: "pdfs/unit-design-2.pdf"
                },
                {
                    icon: "🏭",
                    title: { zh: "乙苯生产工厂设计（200 ktpa）", en: "Ethylbenzene Production Plant Design (200 ktpa)" },
                    meta: { zh: "伦敦大学学院 · 毕业设计 (2024)", en: "UCL · Capstone Design Project (2024)" },
                    desc: { zh: "全流程工厂设计，gPROMS 模拟反应与分离工段，HAZOP 分析，CAPEX £85M 经济评估。", en: "Full plant design with gPROMS simulation, HAZOP analysis, and CAPEX £85M economic evaluation." },
                    pdf: "#"
                }
            ]
        },

        /* ---------- 金融方向（行业研究/IBD） ---------- */
        finance: {
            subtitle: {
                zh: "行业研究 · Imperial MSc / UCL BEng",
                en: "Equity Research · Imperial MSc / UCL BEng"
            },
            heroDesc: {
                zh: "化学工程 + 金融复合背景，具备华泰证券权益研究支持经验。擅长行业研究、财务建模与数据驱动分析，CFA Level I Candidate。",
                en: "Chemical engineering background with equity research support experience at Huatai Securities. Skilled in research, financial modelling, and data-driven analysis. CFA Level I Candidate."
            },
            skills: {
                zh: "Python · Excel · 财务建模 · 行业研究 · 数据可视化",
                en: "Python · Excel · Financial Modelling · Equity Research · Data Visualisation"
            },
            field: {
                zh: "行业研究 · 财务分析 · KPI 建模 · 估值分析",
                en: "Sector Research · Financial Analysis · KPI Modelling · Valuation"
            },
            interest1: {
                zh: "能源/化工行业 · 权益研究 · 投资分析",
                en: "Energy/Chemicals · Equity Research · Investment Analysis"
            },
            interest2: {
                zh: "CFA Level I Candidate · DCF 估值 · 财务建模",
                en: "CFA Level I Candidate · DCF Valuation · Financial Modelling"
            },
            works: [
                {
                    icon: "📊",
                    title: { zh: "华泰证券：能源化工行业 KPI 数据库与可视化", en: "Huatai Securities: Energy & Chemical KPI Database & Dashboard" },
                    meta: { zh: "华泰证券 · 实习项目 (2023)", en: "Huatai Securities · Internship Project (2023)" },
                    desc: { zh: "覆盖 10+ 家能源化工企业，构建 50+ 项运营与财务指标数据库，开发 Python 可视化仪表盘。", en: "Covered 10+ energy/chemical companies; built a 50+ metric KPI database with Python dashboards." },
                    pdf: "#"
                },
                {
                    icon: "📝",
                    title: { zh: "行业深度研究报告（20+ 份日度简报，4 份月报）", en: "Industry Research Reports (20+ daily briefs, 4 monthly reports)" },
                    meta: { zh: "华泰证券 · 研究产出 (2023)", en: "Huatai Securities · Research Output (2023)" },
                    desc: { zh: "覆盖炼油利润、化工价差、碳交易政策影响、产能扩张主题。", en: "Covered refining margins, chemical spreads, carbon policy impact, and capacity expansion themes." },
                    pdf: "#"
                },
                {
                    icon: "🔬",
                    title: { zh: "压缩空气储能：技术经济分析视角", en: "CAES: A Techno-economic Perspective" },
                    meta: { zh: "帝国理工大学 · 硕士研究项目 (2025)", en: "Imperial College London · MSc Research Project (2025)" },
                    desc: { zh: "从 LCOE 建模、碳捕集经济性到氢价值链的系统性技术经济评估。", en: "Systematic techno-economic assessment from LCOE modelling to hydrogen value chain analysis." },
                    pdf: "pdfs/msc-research-project.pdf"
                }
            ]
        },

        /* ---------- 咨询方向（战略咨询/管理咨询） ---------- */
        consulting: {
            subtitle: {
                zh: "战略咨询 · Imperial MSc / UCL BEng",
                en: "Strategic Consulting · Imperial MSc / UCL BEng"
            },
            heroDesc: {
                zh: "分析型化学工程背景，具备结构化研究、市场分析与跨团队交付经验。擅长将复杂数据提炼为可执行的战略建议，服务能源与工业领域客户。",
                en: "Analytical chemical engineer with experience delivering structured research, market analysis, and cross-functional project delivery. Skilled at synthesising complex data into actionable strategic recommendations."
            },
            skills: {
                zh: "PowerPoint (Deck Structuring) · Python · Excel · 行业研究 · 财务分析",
                en: "PowerPoint (Deck Structuring) · Python · Excel · Industry Research · Financial Analysis"
            },
            field: {
                zh: "战略分析 · 市场评估 · 行业研究 · 跨团队协作",
                en: "Strategic Analysis · Market Assessment · Industry Research · Cross-functional Collaboration"
            },
            interest1: {
                zh: "战略咨询 · 能源/工业 · 可持续发展 · 技术商业化",
                en: "Strategic Consulting · Energy/Industrial · Sustainability · Tech Commercialisation"
            },
            interest2: {
                zh: "CFA Level I Candidate · 商业分析 · 利益相关方沟通",
                en: "CFA Level I Candidate · Business Analysis · Stakeholder Communication"
            },
            works: [
                {
                    icon: "🌍",
                    title: { zh: "巴斯夫防蚊虫供应链项目 — 非洲市场商业计划", en: "BASF Mosquito Net Programme — African Market Strategy" },
                    meta: { zh: "巴斯夫 (D-BASF) · 项目组长 (2021)", en: "BASF (D-BASF) · Project Lead (2021)" },
                    desc: { zh: "撰写 23 页综合商业计划书，涵盖多级供应链建模、本地生产可行性、WHO 采购框架分析与 5 国市场进入策略。", en: "Co-authored 23-page proposal: multi-echelon supply chain modelling, local production feasibility, WHO procurement analysis, 5-country market entry." },
                    pdf: "#"
                },
                {
                    icon: "📊",
                    title: { zh: "中国工业浓缩设备市场战略评估", en: "China Industrial Concentration Equipment Market Assessment" },
                    meta: { zh: "工程咨询 · 市场分析项目 (2024)", en: "Engineering Consulting · Market Analysis (2024)" },
                    desc: { zh: "分析中国 ¥300 亿+ 工业设备市场，识别热法向膜法/MVR 技术转型趋势，输出战略建议影响 R&D 投资决策。", en: "Analysed China's ¥30B+ equipment market, identified thermal-to-membrane/MVR transition trends, shaped R&D investment strategy." },
                    pdf: "#"
                },
                {
                    icon: "📈",
                    title: { zh: "能源化工行业 KPI 数据库与自动化仪表盘", en: "Energy & Chemical KPI Database & Automated Dashboards" },
                    meta: { zh: "华泰证券 · 实习项目 (2023)", en: "Huatai Securities · Internship Project (2023)" },
                    desc: { zh: "构建 50+ 指标数据库，开发 Python 可视化仪表盘实现自动化行业追踪，周度汇编时间从 4 小时缩短至 30 分钟。", en: "Built 50+ metric KPI database and Python dashboards; cut weekly compilation from 4+ hours to 30 minutes." },
                    pdf: "#"
                },
                {
                    icon: "📝",
                    title: { zh: "月度行业深度研究报告", en: "Monthly In-depth Industry Reports" },
                    meta: { zh: "华泰证券 · 研究成果 (2023)", en: "Huatai Securities · Research Output (2023)" },
                    desc: { zh: "完成 4 份 15–20 页深度报告，涵盖炼油利润、化工价差、碳交易政策等主题，向 20 人跨部门团队汇报。", en: "Produced 4 monthly reports (15-20 pages) on refining margins, chemical spreads, carbon policy; presented to 20-person cross-functional team." },
                    pdf: "#"
                }
            ]
        }
    }
};
