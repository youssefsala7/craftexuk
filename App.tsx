import React from 'react';
import { AlertTriangle, Lock, Clock, BookOpen, TrendingUp, Globe, ShieldCheck } from 'lucide-react';
import { MetricCard } from './components/MetricCard';
import { EfficiencyBarChart, InternationalCTRChart } from './components/Charts';

const App: React.FC = () => {
  return (
    <div className="min-h-screen py-8 md:py-16 px-4 md:px-8 font-sans">
      
      {/* Document Container */}
      <div className="max-w-[1000px] mx-auto bg-white shadow-2xl rounded-sm overflow-hidden border border-slate-200">
        
        {/* Header Section with Image */}
        <header className="relative bg-slate-900 text-white">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 opacity-40">
                <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
                    alt="Modern Office Architecture" 
                    className="w-full h-full object-cover grayscale mix-blend-overlay"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/90"></div>

            <div className="relative px-8 md:px-16 pt-20 pb-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-4 md:mb-0 border border-emerald-500/30 px-3 py-1 rounded bg-emerald-900/30 backdrop-blur-sm">
                        Craftex Strategic Plan • Q1 2026
                    </span>
                    <span className="px-3 py-1 bg-white/10 text-white/80 text-[10px] font-bold uppercase tracking-wider rounded-full backdrop-blur-md">
                        Confidential Audit
                    </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6 tracking-tight drop-shadow-lg">
                    The Comprehensive<br/>Growth Roadmap
                </h1>
                <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl leading-relaxed border-l-4 border-blue-500 pl-6">
                    A Deep-Dive into the "Passive Dominance" of Craftex.co.uk and the Consolidated Roadmap to Active Revenue.
                </p>
            </div>
        </header>

        {/* KPI Dashboard */}
        <div className="px-8 md:px-16 py-12 bg-white -mt-8 relative z-10">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 shadow-xl bg-white p-6 rounded-lg border border-slate-100">
                <MetricCard 
                    metric={{ label: 'Total Visibility', value: '108K', status: 'good', trend: 'Market Permission: High' }} 
                />
                <MetricCard 
                    metric={{ label: 'Click Efficiency', value: '0.6%', status: 'critical', trend: 'Target: 2.5%' }} 
                    highlight={true}
                />
                <MetricCard 
                    metric={{ label: 'Indexation Ratio', value: '35%', status: 'warning', trend: '88/251 Pages Indexed' }} 
                />
                <MetricCard 
                    metric={{ label: 'Security Protocol', value: 'HTTP', status: 'critical', trend: 'Active Duplicate Issue' }} 
                />
            </div>

            <div className="mt-12 prose prose-slate max-w-none text-slate-600 leading-relaxed pl-4 border-l-2 border-slate-200">
                <p>
                    <strong>Strategic Context:</strong> The current digital footprint of Craftex suffers from a "Visibility Paradox," 
                    accumulating impressions while technical negligence and generic messaging bottleneck nearly 99% of potential traffic. 
                    This report transforms the audit into a cohesive, prioritized <strong>Execution Roadmap</strong>.
                </p>
            </div>
        </div>

        {/* Section 1: Gap Analysis Matrix */}
        <div className="bg-slate-900 text-white px-8 md:px-16 py-16">
            <div className="text-center mb-12 border-b border-white/10 pb-8">
                <h3 className="text-3xl font-serif font-bold mb-2">Gap Analysis: The Opportunity Cost</h3>
                <p className="text-slate-400 text-sm">Comparing Current Negligence vs. Future Revenue State</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-16 relative">
                {/* Left Column: Failures */}
                <div>
                    <h4 className="text-rose-500 font-bold uppercase tracking-widest text-xs border-b-2 border-rose-500 inline-block pb-2 mb-8 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" /> Currently Not Being Done
                    </h4>
                    <div className="space-y-10">
                        <GapItem 
                            type="bad"
                            title="Psychological 'Hook' Messaging" 
                            desc="Titles fail to address client fears (Cost Overruns, Insolvency, Delays). Current titles target 'what' Craftex does, not 'why' Craftex is the safe choice."
                        />
                        <GapItem 
                            type="bad"
                            title="Informational SEO & Content Velocity" 
                            desc="Zero content exists for 'Research Phase' clients (Cat A vs Cat B, Cost Per Sq Ft). This forfeits 99,000 zero-click impressions."
                        />
                        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                            <GapItem 
                                type="bad"
                                title="International Asset Monetization" 
                                desc="Ignoring high-intent traffic from UAE (12.5% CTR) and India. Treating the site as purely UK-domestic, abandoning high-margin consulting revenue."
                            />
                            {/* Visualizing the missed opportunity */}
                            <div className="mt-6">
                                <InternationalCTRChart />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Opportunities */}
                <div>
                    <h4 className="text-emerald-500 font-bold uppercase tracking-widest text-xs border-b-2 border-emerald-500 inline-block pb-2 mb-8 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> What Will Be Done
                    </h4>
                    <div className="space-y-10">
                        <GapItem 
                            type="good"
                            title="'Risk-Reversal' Meta Rewrite" 
                            desc="Update primary Meta Titles and Descriptions to pitch: 'Fixed Price Guarantee,' 'Debt-Free Company,' 'Live Environment Experts.' This directly fixes the 0.6% CTR crisis."
                        />
                        <GapItem 
                            type="good"
                            title="Automated Knowledge Silo Launch" 
                            desc="Launch a 'Knowledge Hub' with an Automated Blogging System publishing 4-6 articles/month. Content will feature targeted keywords and internal CTAs."
                        />
                         <GapItem 
                            type="good"
                            title="Comprehensive On-Page Fixes" 
                            desc="Implement site-wide fixes for meta data, convert all non-compliant URLs to clean slashed-slugs (301 redirects), and audit/fix ALT descriptions."
                        />
                        <GapItem 
                            type="good"
                            title="'Design-Only' Export Service" 
                            desc="Launch dedicated landing pages (e.g., /dubai/) to sell high-margin Design & Project Management services to international traffic, requiring no physical logistics."
                        />
                    </div>
                </div>
            </div>
        </div>

        {/* Section 2: Trust Deficit */}
        <div className="px-8 md:px-16 py-16 border-b border-slate-100 bg-amber-50/30">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">2. The Trust Deficit (Insolvency Risk)</h2>
            
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        The <strong>Trust Deficit</strong> is the key factor suppressing the current 0.6% CTR. Financial stability has become the primary search signal for high-value construction clients. The website must be converted into a <strong>"Risk Mitigation Tool."</strong>
                    </p>

                    <div className="bg-white border-l-4 border-amber-500 shadow-sm p-6 md:p-8">
                        <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                            <Lock className="w-5 h-5 text-amber-500" /> The Missing "Safety" Layer
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                            Craftex must rank for "Why we are safe" (Financial Stability). The priority is using high-impact, risk-reversal language in search snippets.
                        </p>
                        <ul className="text-sm text-slate-600 space-y-3">
                            <li className="flex gap-2">
                                <span className="font-bold text-amber-600">Action:</span>
                                <span>Immediate inclusion of <strong>"Debt-Free"</strong> and <strong>"Fixed-Price Guarantee"</strong> language.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="font-bold text-amber-600">Goal:</span>
                                <span>Trigger the Psychological Funnel's Stability Silo immediately.</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Visual Graphic for Safety */}
                <div className="w-full md:w-1/3 flex justify-center">
                     <div className="w-48 h-48 rounded-full bg-amber-100 flex items-center justify-center relative">
                        <div className="absolute inset-0 rounded-full border-4 border-amber-200 border-dashed animate-spin-slow"></div>
                        <ShieldCheck className="w-24 h-24 text-amber-500" />
                        <div className="absolute -bottom-4 bg-white px-4 py-1 rounded-full shadow-md text-xs font-bold text-amber-600">
                            TRUST SIGNAL
                        </div>
                     </div>
                </div>
            </div>
        </div>

        {/* Section 3: Visualizing Efficiency */}
        <div className="px-8 md:px-16 py-16 bg-slate-50 border-b border-slate-100">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">3. Visualizing the Efficiency Failure</h2>
            <p className="text-slate-600 mb-8 max-w-3xl leading-relaxed">
                The current average <strong>Click Through Rate (CTR) of 0.6%</strong> wastes the majority of the site's accumulated search authority (34,000+ wasted impressions per month).
            </p>

            <EfficiencyBarChart />
            
            <div className="mt-8 p-6 bg-white border border-slate-200 rounded-lg flex flex-col md:flex-row gap-6 items-center">
                 <div className="p-4 bg-emerald-50 rounded-full text-emerald-600">
                    <TrendingUp className="w-8 h-8" />
                 </div>
                 <div className="flex-1">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">CTR Opportunity Quantification:</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li>
                            <strong>Initial Gap:</strong> An immediate gain of approximately <strong>2,041 qualified clicks per month</strong>.
                        </li>
                        <li>
                            <strong>ROI:</strong> This gain creates a <strong>substantial, demonstrable ROI</strong> solely from the copywriting and technical hygiene changes detailed below.
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Section 4: Psychological Funnel */}
        <div className="px-8 md:px-16 py-16 bg-white border-b border-slate-100">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">4. Proposed Site Structure: "The Psychological Funnel"</h2>
            <p className="text-slate-600 mb-12 max-w-3xl leading-relaxed">
                The new structure organizes content based on the <strong>Client's Risk Profile</strong> and their stage in the buying journey.
            </p>

            {/* Funnel Visual */}
            <div className="mb-12 flex justify-center">
                <svg width="100%" height="120" viewBox="0 0 800 120" className="max-w-3xl">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor:'#eff6ff', stopOpacity:1}} />
                            <stop offset="100%" style={{stopColor:'#dbeafe', stopOpacity:1}} />
                        </linearGradient>
                    </defs>
                    {/* Connecting Lines */}
                    <path d="M 150 60 L 650 60" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5,5" />
                    
                    {/* Nodes */}
                    <circle cx="150" cy="60" r="10" fill="#3b82f6" />
                    <circle cx="400" cy="60" r="10" fill="#3b82f6" />
                    <circle cx="650" cy="60" r="10" fill="#3b82f6" />

                    {/* Labels */}
                    <text x="150" y="30" textAnchor="middle" className="text-xs font-bold fill-slate-500 uppercase">Knowledge</text>
                    <text x="400" y="30" textAnchor="middle" className="text-xs font-bold fill-slate-500 uppercase">Agility</text>
                    <text x="650" y="30" textAnchor="middle" className="text-xs font-bold fill-slate-500 uppercase">Stability</text>

                    <text x="150" y="90" textAnchor="middle" className="text-[10px] fill-slate-400">Top Funnel</text>
                    <text x="400" y="90" textAnchor="middle" className="text-[10px] fill-slate-400">Mid Funnel</text>
                    <text x="650" y="90" textAnchor="middle" className="text-[10px] fill-slate-400">Bottom Funnel</text>
                </svg>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <SiloCard 
                    icon={<BookOpen className="w-6 h-6 text-blue-500" />}
                    title="The 'Knowledge' Silo"
                    target="Persona: The Researcher"
                    desc="Captures the 99,000 informational searches. Content: Cat A vs Cat B Guide, Cost Calculators."
                    items={['Top-Funnel Authority']}
                    color="border-t-4 border-t-blue-500"
                />
                <SiloCard 
                    icon={<Clock className="w-6 h-6 text-indigo-500" />}
                    title="The 'Agility' Silo"
                    target="Persona: Ops Manager"
                    desc="Addresses business disruption. Content: Live Environment Case Studies, Zero Downtime Protocols."
                    items={['Mid-Funnel Validation']}
                    color="border-t-4 border-t-indigo-500"
                />
                <SiloCard 
                    icon={<Lock className="w-6 h-6 text-violet-500" />}
                    title="The 'Stability' Silo"
                    target="Persona: CFO / Owner"
                    desc="Addresses financial risk. Content: Fixed-Price Guarantees, Balance Sheet Transparency."
                    items={['Bottom-Funnel Conversion']}
                    color="border-t-4 border-t-violet-500"
                />
            </div>
        </div>

        {/* Section 5: Technical Roadmap */}
        <div className="px-8 md:px-16 py-16 bg-white">
             <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">5. The Full Technical & Structural Execution Roadmap</h2>
             <p className="text-slate-600 mb-8 max-w-3xl leading-relaxed">
                This phase is mandatory for success, consolidating the site's split authority and implementing the advanced, often-missed SEO initiatives.
             </p>

             <div className="border-t border-slate-100">
                <ActionItem 
                    phase="PHASE 1 - URGENT"
                    type="urgent"
                    title="HTTP / HTTPS Authority Consolidation"
                    desc="Implement a permanent, server-side 301 Redirect forcing all HTTP/WWW traffic to the clean, secure HTTPS version. This is the most critical technical fix to unify domain authority."
                />
                <ActionItem 
                    phase="PHASE 1 - URGENT"
                    type="urgent"
                    title="Sitemap & Indexing Clean-up"
                    desc="Generate and submit a clean, validated XML sitemap to Google Search Console, containing the top 50 revenue pages. Manually request indexing for the 163 currently blocked pages to recover wasted ranking potential."
                />
                <ActionItem 
                    phase="PHASE 3 - ON-PAGE"
                    type="high"
                    title="URL Slug Optimization & Redirection"
                    desc="Audit all service page URLs. Convert all non-optimized slugs (e.g., those with numbers or stop words) to clean, hyphenated, keyword-rich slugs (e.g., /fit-out-london/) using 301 redirects to preserve rank."
                />
                <ActionItem 
                    phase="PHASE 1 - HYGIENE"
                    type="high"
                    title="Image ALT Description Audit"
                    desc="Fix all generic filenames and missing attributes on portfolio images (LCP fix). Replace with descriptive, keyword-rich ALT descriptions to improve accessibility and image search ranking signals."
                />
                <ActionItem 
                    phase="PHASE 5 - ADVANCED"
                    type="advanced"
                    title="Structured Data Markup (Schema) Implementation"
                    desc="Implement Organization Schema and Local Business Schema on commercial pages. Apply FAQPage Schema to Knowledge Hub articles to trigger rich snippets and steal search result space (position zero)."
                />
                <ActionItem 
                    phase="PHASE 5 - ADVANCED"
                    type="advanced"
                    title="Internal Linking Siloing"
                    desc="Establish a rigorous structure where all commercial pages are linked from relevant, high-authority Knowledge Silo articles. This ensures rank authority flows directly to the most valuable conversion pages."
                />
                <ActionItem 
                    phase="PHASE 5 - ADVANCED"
                    type="advanced"
                    title="Review Strategy Integration (Schema)"
                    desc="Integrate a system to solicit and aggregate reviews, using Review Snippet Schema on service pages. This builds immediate trust/safety signals directly in the search results (a key mitigation for the Trust Deficit)."
                />
             </div>
        </div>

        {/* Footer */}
        <footer className="bg-slate-50 border-t border-slate-200 py-12 text-center">
            <p className="text-slate-400 text-sm font-medium">
                &copy; 2026 Craftex Strategic Growth Roadmap. All documentation reconciled.
            </p>
        </footer>

      </div>
    </div>
  );
};

// --- Sub-components ---

const GapItem: React.FC<{type: 'good'|'bad', title: string, desc: string}> = ({ type, title, desc }) => (
    <div className="relative pl-8">
        <div className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 ${type === 'bad' ? 'bg-rose-500 border-rose-900 shadow-[0_0_10px_rgba(225,29,72,0.5)]' : 'bg-emerald-500 border-emerald-900 shadow-[0_0_10px_rgba(16,185,129,0.5)]'}`}></div>
        <h5 className="text-white font-bold text-lg mb-2">{title}</h5>
        <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
);

const SiloCard: React.FC<{icon: any, title: string, target: string, desc: string, items: string[], color?: string}> = ({ icon, title, target, desc, items, color = "" }) => (
    <div className={`bg-white border border-slate-200 p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${color}`}>
        <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
            <div className="p-2 bg-slate-50 rounded-lg">
                {icon}
            </div>
            <h4 className="font-bold text-slate-900 text-lg">{title}</h4>
        </div>
        <div className="mb-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Target Persona</span>
            <p className="text-sm font-bold text-slate-800 leading-relaxed">{target}</p>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed mb-6 h-20">{desc}</p>
        <ul className="space-y-3">
            {items.map((item, i) => (
                <li key={i} className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

const ActionItem: React.FC<{phase: string, type: 'urgent'|'high'|'advanced', title: string, desc: string}> = ({ phase, type, title, desc }) => {
    const badgeColors = {
        urgent: 'bg-rose-100 text-rose-700 border border-rose-200',
        high: 'bg-amber-100 text-amber-700 border border-amber-200',
        advanced: 'bg-blue-100 text-blue-700 border border-blue-200',
    };

    return (
        <div className="py-8 border-b border-slate-100 last:border-0 group hover:bg-slate-50 transition-colors px-4 -mx-4 rounded-lg">
            <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide ${badgeColors[type]}`}>
                    {phase}
                </span>
                <h5 className="font-bold text-slate-900 text-lg group-hover:text-blue-700 transition-colors">{title}</h5>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed max-w-4xl pl-1">{desc}</p>
        </div>
    );
};

export default App;