import { useState, useEffect } from 'react';

/**
 * KopDompetkitaFull — Full-page monolithic component
 * Render identik 1:1 dengan KOPERASI_DOMPETKITA_BERSAMA_UIUX.html
 * CSS di-inject via useEffect agar tidak konflik dengan builder styles
 */

const STYLES = `
[data-dk] *, [data-dk] *:before, [data-dk] *:after { box-sizing: border-box; }
[data-dk] {
  --dk-bg: #F0F9FF; --dk-surf: #FFFFFF; --dk-ink: #0F172A; --dk-mut: #64748B;
  --dk-red: #0EA5E9; --dk-dk: #0C4A6E; --dk-gold: #F59E0B; --dk-leaf: #059669;
  --dk-line: #E0F2FE; --dk-radius: 20px; --dk-shadow: 0 12px 36px rgba(12,74,110,.07);
  font: 400 16.5px/1.72 "Source Sans 3", system-ui, sans-serif;
  color: var(--dk-ink); background: var(--dk-bg); -webkit-font-smoothing: antialiased;
}
[data-dk] a { color: inherit; text-decoration: none; }
[data-dk] h1,[data-dk] h2,[data-dk] h3 { font-family:"Bricolage Grotesque",system-ui,sans-serif; line-height:1.1; margin:0; }
[data-dk] .dk-wrap { max-width:1180px; margin:0 auto; padding:0 clamp(18px,4vw,42px); }

/* HERO */
[data-dk] .dk-hero { background:radial-gradient(circle at 83% 37%,#0369A1 0%,transparent 34%),linear-gradient(130deg,#082F49 3%,#0C4A6E 54%,#075985 100%); color:#fff; position:relative; overflow:hidden; }
[data-dk] .dk-stripe { position:absolute; right:-60px; top:0; bottom:0; width:26%; background:repeating-linear-gradient(115deg,rgba(255,255,255,.08) 0 22px,transparent 22px 44px); border-left:3px solid #F59E0B; transform:skewX(-8deg); opacity:.3; pointer-events:none; z-index:0; }
[data-dk] .dk-hero-wrap { position:relative; z-index:2; padding-top:0; padding-bottom:65px; }
[data-dk] .dk-nav { display:flex; justify-content:space-between; align-items:center; gap:16px; padding:16px 0 21px; border-bottom:1px solid rgba(255,255,255,.14); flex-wrap:nowrap; }
[data-dk] .dk-brand { display:flex; align-items:center; gap:10px; min-width:0; }
[data-dk] .dk-brand-name { font-family:"Bricolage Grotesque",system-ui,sans-serif; font-weight:800; font-size:15px; color:#fff; letter-spacing:.03em; line-height:1.3; max-width:220px; }
[data-dk] .dk-nav-links { display:flex; flex-wrap:wrap; gap:7px 17px; font-weight:600; font-size:13.5px; justify-content:flex-end; list-style:none; margin:0; padding:0; }
[data-dk] .dk-nav-links li { display:inline; }
[data-dk] .dk-nav-links a { color:#BAE6FD; padding:7px 0; white-space:nowrap; }
[data-dk] .dk-nav-links a:hover { color:#fff; }
[data-dk] .dk-menu-btn { display:none; align-items:center; gap:8px; background:transparent; border:1px solid rgba(255,255,255,.4); color:#fff; border-radius:999px; padding:8px 16px; font:600 14px "Source Sans 3",system-ui,sans-serif; cursor:pointer; white-space:nowrap; min-height:44px; }
[data-dk] .dk-hero-grid { display:grid; grid-template-columns:minmax(0,1.12fr) minmax(0,.88fr); gap:clamp(25px,4vw,65px); align-items:center; margin-top:56px; }
[data-dk] .dk-eyebrow { display:inline-flex; align-items:center; gap:9px; margin:0 0 20px; font-size:12px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:#BAE6FD; line-height:1.3; }
[data-dk] .dk-eyebrow-dot { width:9px; height:9px; border-radius:50%; background:#F59E0B; box-shadow:0 0 0 5px rgba(245,158,11,.18); flex:none; display:inline-block; }
[data-dk] .dk-h1 { font-size:clamp(42px,5.5vw,72px); font-weight:800; letter-spacing:-.048em; line-height:1.06; max-width:13ch; margin:0; color:#fff; font-family:"Bricolage Grotesque",system-ui,sans-serif; }
[data-dk] .dk-hero-p { font-size:17px; line-height:1.8; max-width:58ch; margin:23px 0 28px; color:#BAE6FD; }
[data-dk] .dk-btns { display:flex; gap:12px; flex-wrap:wrap; }
[data-dk] .dk-btn { display:inline-flex; align-items:center; justify-content:center; gap:10px; padding:12px 23px; border-radius:999px; font-weight:600; font-size:15px; background:#fff; color:#0C4A6E; border:1px solid transparent; box-shadow:0 2px 5px rgba(0,0,0,.07); cursor:pointer; min-height:48px; transition:transform .18s ease,box-shadow .18s ease; text-decoration:none; }
[data-dk] .dk-btn:hover { transform:translateY(-2px); box-shadow:0 8px 20px rgba(0,0,0,.12); }
[data-dk] .dk-btn-alt { background:transparent; color:#fff; border:1px solid rgba(255,255,255,.51); box-shadow:none; }
[data-dk] .dk-hero-art { margin:0; filter:drop-shadow(0 18px 35px rgba(8,47,73,.28)); }
[data-dk] .dk-hero-art svg { display:block; width:100%; height:auto; }
[data-dk] .dk-figcap { font-family:"Bricolage Grotesque",system-ui,sans-serif; font-weight:700; font-size:12.5px; color:#BAE6FD; text-align:center; margin-top:15px; letter-spacing:.01em; }
[data-dk] .dk-nums { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:12px; margin-top:56px; }
[data-dk] .dk-num { background:rgba(255,255,255,.07); border:1px solid rgba(255,255,255,.14); border-top:3px solid #F59E0B; border-radius:13px; padding:19px 17px 18px; color:#E0F2FE; font-size:15px; line-height:1.35; }
[data-dk] .dk-num b { display:block; font-family:"Bricolage Grotesque",system-ui,sans-serif; font-weight:800; font-size:clamp(20px,2.6vw,28px); line-height:1.2; margin-bottom:6px; color:#fff; }

/* SECTION NAV */
[data-dk] .dk-sec-nav { position:sticky; top:0; z-index:99; background:#fff; border-bottom:1px solid #E0F2FE; box-shadow:0 8px 22px rgba(12,74,110,.06); }
[data-dk] .dk-sec-nav-inner { display:flex; gap:24px; align-items:center; min-height:66px; }
[data-dk] .dk-sec-nav-label { font-size:13px; font-weight:800; white-space:nowrap; color:#0EA5E9; }
[data-dk] .dk-sec-nav-links { display:flex; min-width:0; flex:1; gap:4px; overflow-x:auto; align-items:center; scrollbar-width:thin; }
[data-dk] .dk-sec-nav-links a { padding:9px 14px; flex:none; font-size:14px; font-weight:600; border-radius:999px; color:#64748B; white-space:nowrap; transition:background .2s,color .2s; }
[data-dk] .dk-sec-nav-links a:hover { background:#F0F9FF; color:#0F172A; }

/* SECTIONS */
[data-dk] .dk-section { padding:clamp(58px,7.5vw,94px) 0; scroll-margin-top:75px; font-family:"Source Sans 3",system-ui,sans-serif; }
[data-dk] .dk-section:nth-of-type(even) { background:#F0F9FF; }
[data-dk] .dk-gold-bar { display:block; width:40px; height:4px; border-radius:4px; background:#F59E0B; margin-bottom:21px; }
[data-dk] .dk-h2 { font-family:"Bricolage Grotesque",system-ui,sans-serif; font-size:clamp(29px,3.7vw,43px); font-weight:700; letter-spacing:-.035em; line-height:1.15; margin:0 0 14px; color:#0F172A; }
[data-dk] .dk-h3 { font-family:"Bricolage Grotesque",system-ui,sans-serif; font-size:18px; font-weight:700; color:#0F172A; margin:0 0 10px; line-height:1.35; }
[data-dk] .dk-lead { font-size:17px; line-height:1.8; max-width:64ch; color:#64748B; margin:0 0 36px; }
[data-dk] .dk-two { display:grid; grid-template-columns:1fr 1fr; gap:clamp(24px,5vw,66px); }
[data-dk] .dk-misi { list-style:none; padding:0; margin:0; }
[data-dk] .dk-misi li { padding:16px 0 16px 28px; border-bottom:1px solid #E0F2FE; position:relative; font-size:16.5px; line-height:1.72; color:#0F172A; }
[data-dk] .dk-misi li::before { content:""; position:absolute; left:0; top:26px; width:12px; height:12px; border-radius:50%; background:#0EA5E9; }

/* LOGO SHOW */
[data-dk] .dk-logo-show { display:flex; align-items:center; gap:28px; background:#fff; border:1px solid #E0F2FE; border-radius:20px; padding:26px; margin:0 0 36px; box-shadow:var(--dk-shadow); }
[data-dk] .dk-logo-show h3 { font-size:22px; margin-bottom:8px; color:#0EA5E9; font-family:"Bricolage Grotesque",system-ui,sans-serif; font-weight:700; }
[data-dk] .dk-logo-show p { margin:0; color:#64748B; font-size:16px; max-width:60ch; line-height:1.72; }

/* CARDS */
[data-dk] .dk-g3 { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:14px; }
[data-dk] .dk-card { background:#fff; border:1px solid #E0F2FE; border-radius:20px; padding:23px 24px; box-shadow:var(--dk-shadow); transition:transform .2s ease,box-shadow .2s ease; }
[data-dk] .dk-card:hover { transform:translateY(-3px); box-shadow:0 10px 24px rgba(12,74,110,.1); border-color:#BAE6FD; }
[data-dk] .dk-card h3 { font-family:"Bricolage Grotesque",system-ui,sans-serif; font-size:18px; font-weight:700; line-height:1.35; margin:3px 0 7px; color:#0EA5E9; }
[data-dk] .dk-card p { margin:0; font-size:15px; color:#64748B; line-height:1.75; }

/* ICONS */
[data-dk] .dk-ico { display:grid; place-items:center; width:56px; height:56px; border-radius:15px; background:rgba(14,165,233,.1); margin-bottom:14px; }
[data-dk] .dk-ico svg { width:30px; height:30px; stroke:#0EA5E9; fill:none; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; }
[data-dk] .dk-ico-sm { display:grid; place-items:center; width:44px; height:44px; border-radius:13px; background:rgba(14,165,233,.1); margin-bottom:10px; }
[data-dk] .dk-ico-sm svg { width:24px; height:24px; stroke:#0EA5E9; fill:none; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; }

/* CHIPS */
[data-dk] .dk-chips { display:flex; flex-wrap:wrap; gap:10px; margin:0 0 28px; padding:0; list-style:none; }
[data-dk] .dk-chip { padding:9px 16px; border:1.5px solid #E0F2FE; border-radius:999px; background:#fff; font-weight:600; font-size:15px; line-height:1.35; color:#0F172A; }
[data-dk] .dk-chip-main { background:#0EA5E9; color:#fff; border-color:#0EA5E9; }

/* UNITS */
[data-dk] .dk-units { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:12px; }
[data-dk] .dk-unit { background:#fff; border:1px solid #E0F2FE; border-radius:17px; padding:26px; box-shadow:var(--dk-shadow); transition:transform .2s ease,border-color .2s; }
[data-dk] .dk-unit:hover { transform:translateY(-2px); border-color:#BAE6FD; }
[data-dk] .dk-unit h3 { font-family:"Bricolage Grotesque",system-ui,sans-serif; font-size:19px; font-weight:700; line-height:1.35; margin-bottom:6px; color:#0EA5E9; }
[data-dk] .dk-unit p { margin:0; font-size:15px; color:#64748B; line-height:1.75; }

/* FLOW */
[data-dk] .dk-flow { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:13px; list-style:none; padding:0; margin:0 0 44px; counter-reset:dk-flow; }
[data-dk] .dk-flow-item { counter-increment:dk-flow; position:relative; background:#fff; border:1px solid #E0F2FE; border-radius:20px; padding:23px 20px; box-shadow:var(--dk-shadow); min-width:0; }
[data-dk] .dk-flow-item::before { content:counter(dk-flow); position:absolute; right:17px; top:15px; font-family:"Bricolage Grotesque",system-ui,sans-serif; font-weight:800; font-size:28px; color:#F59E0B; opacity:.9; line-height:1; }
[data-dk] .dk-flow-item b { display:block; font-family:"Bricolage Grotesque",system-ui,sans-serif; font-weight:700; font-size:17px; margin-bottom:4px; color:#0F172A; }
[data-dk] .dk-flow-item p { margin:0; font-size:15px; color:#64748B; }

/* ACCORDION */
[data-dk] .dk-details { margin-bottom:10px; border:1px solid #E0F2FE; border-radius:14px; background:#fff; overflow:hidden; }
[data-dk] .dk-summary { display:flex; align-items:center; width:100%; padding:17px 48px 17px 18px; min-height:56px; font-family:"Bricolage Grotesque",system-ui,sans-serif; font-size:16px; font-weight:700; line-height:1.5; cursor:pointer; border:none; text-align:left; position:relative; background:#fff; color:#0F172A; }
[data-dk] .dk-summary.open { color:#0EA5E9; border-bottom:1px solid #E0F2FE; background:rgba(14,165,233,.05); }
[data-dk] .dk-summary-icon { position:absolute; right:18px; top:50%; transform:translateY(-50%); font-weight:400; font-size:25px; color:#0EA5E9; line-height:1; }
[data-dk] .dk-acc-body { margin:0; padding:18px 26px 20px 42px; line-height:1.85; }
[data-dk] .dk-acc-body ul { padding-left:18px; margin:0; }
[data-dk] .dk-acc-body li { color:#64748B; font-size:15px; margin-bottom:7px; }
[data-dk] .dk-note { font-size:14px; color:#64748B; margin:0 0 14px; line-height:1.7; }

/* HEAD ROW */
[data-dk] .dk-head-row { display:grid; grid-template-columns:1fr 230px; gap:36px; align-items:center; margin-bottom:8px; }
[data-dk] .dk-head-row svg { width:100%; height:auto; display:block; }

/* TABLE */
[data-dk] .dk-tw { border:1px solid #E0F2FE; border-radius:16px; box-shadow:var(--dk-shadow); overflow-x:auto; margin-bottom:14px; }
[data-dk] .dk-table { border-collapse:collapse; width:100%; min-width:520px; font-size:15px; background:#fff; margin:0; }
[data-dk] .dk-th { padding:16px 18px; background:#0C4A6E; color:#fff; font-family:"Bricolage Grotesque",system-ui,sans-serif; text-align:left; vertical-align:top; font-weight:700; }
[data-dk] .dk-td { padding:16px 18px; border-bottom:1px solid #E0F2FE; vertical-align:top; color:#0F172A; }
[data-dk] .dk-tr-even .dk-td { background:#F0F9FF; }

/* SHU */
[data-dk] .dk-shu-grid { display:grid; grid-template-columns:260px 1fr; gap:40px; align-items:center; }
[data-dk] .dk-shu-bar { display:flex; height:64px; border-radius:12px; overflow:hidden; margin:8px 0 18px; }
[data-dk] .dk-shu-span { display:flex; align-items:flex-end; padding:8px 10px; color:#fff; font-family:"Bricolage Grotesque",system-ui,sans-serif; font-weight:700; font-size:15px; min-width:0; }
[data-dk] .dk-legend { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:12px 24px; list-style:none; padding:0; margin:0; font-size:15px; }
[data-dk] .dk-legend li { display:flex; align-items:center; gap:8px; line-height:1.4; color:#0F172A; }
[data-dk] .dk-legend-dot { display:inline-block; width:12px; height:12px; border-radius:3px; flex:none; }

/* ORG */
[data-dk] .dk-org { border:1px solid #E0F2FE; border-radius:18px; background:#fff; padding:24px 10px 28px; box-shadow:var(--dk-shadow); overflow-x:auto; }
[data-dk] .dk-org-inner { text-align:center; min-width:760px; }
[data-dk] .dk-org-col { display:flex; flex-direction:column; align-items:center; }
[data-dk] .dk-org-row { display:flex; gap:16px; justify-content:center; position:relative; }
[data-dk] .dk-node { display:inline-flex; flex-direction:column; justify-content:center; gap:4px; min-width:170px; max-width:220px; min-height:58px; padding:13px 18px; border-radius:12px; font-family:"Bricolage Grotesque",system-ui,sans-serif; font-weight:700; font-size:14px; line-height:1.3; background:#fff; border:1px solid #E0F2FE; box-shadow:0 5px 16px rgba(12,74,110,.08); text-align:center; color:#0F172A; }
[data-dk] .dk-node small { font-size:12px; font-weight:500; line-height:1.35; opacity:.9; display:block; }
[data-dk] .dk-node-top { background:#F59E0B; color:#0F172A; border-color:#F59E0B; box-shadow:0 7px 18px rgba(245,158,11,.22); }
[data-dk] .dk-node-k { background:#0EA5E9; color:#fff; border-color:#0EA5E9; }
[data-dk] .dk-node-w { background:#059669; color:#fff; border-color:#059669; }
[data-dk] .dk-node-subtle { border-color:#BAE6FD; background:#F0F9FF; }
[data-dk] .dk-vline { width:2px; height:30px; background:#E0F2FE; }
[data-dk] .dk-hline { position:absolute; top:0; height:2px; background:#E0F2FE; }

/* CTA */
[data-dk] .dk-cta { background:linear-gradient(125deg,#0C4A6E,#0EA5E9); padding:77px 0; text-align:center; color:#fff; }
[data-dk] .dk-cta h2 { font-family:"Bricolage Grotesque",system-ui,sans-serif; font-size:clamp(30px,4.4vw,48px); font-weight:700; line-height:1.15; margin-inline:auto; max-width:18ch; margin-bottom:18px; color:#fff; }
[data-dk] .dk-cta p { max-width:52ch; margin:0 auto 28px; color:#E0F2FE; font-size:17px; line-height:1.75; }

/* FOOTER */
[data-dk] .dk-footer { background:#fff; border-top:1px solid #E0F2FE; padding:29px 0; font-size:14px; color:#64748B; }
[data-dk] .dk-footer-inner { display:flex; align-items:center; gap:14px; }
[data-dk] {
  container-type: inline-size;
}

/* RESPONSIVE */
@media (max-width:1100px) { [data-dk] .dk-units { grid-template-columns:repeat(2,minmax(0,1fr)); } }
@media (max-width:900px) {
  [data-dk] .dk-menu-btn { display:inline-flex; }
  [data-dk] .dk-nav-links { display:none; }
  [data-dk] .dk-nav-links.open { display:flex; flex-direction:column; width:100%; padding:12px; border:1px solid rgba(255,255,255,.15); border-radius:16px; background:#082F49; }
  [data-dk] .dk-hero-grid { grid-template-columns:1fr; gap:32px; margin-top:42px; }
  [data-dk] .dk-nums { grid-template-columns:repeat(2,minmax(0,1fr)); }
  [data-dk] .dk-head-row { grid-template-columns:1fr; }
  [data-dk] .dk-shu-grid { grid-template-columns:1fr; gap:24px; }
}
@media (max-width:768px) {
  [data-dk] .dk-two { grid-template-columns:1fr; gap:28px; }
  [data-dk] .dk-units { grid-template-columns:1fr; }
  [data-dk] .dk-stripe { display:none; }
  [data-dk] .dk-flow { grid-template-columns:1fr; }
  [data-dk] .dk-legend { grid-template-columns:1fr; }
  [data-dk] .dk-sec-nav-label { display:none; }
}

/* SIMULATOR MOBILE & CONTAINER QUERY OVERRIDES (For .builder-canvas-mobile / .preview-viewport-mobile) */
.builder-canvas-mobile [data-dk] .dk-nav,
.preview-viewport-mobile [data-dk] .dk-nav {
  flex-wrap: wrap !important;
  gap: 12px !important;
  padding: 12px 0 16px !important;
}
.builder-canvas-mobile [data-dk] .dk-brand,
.preview-viewport-mobile [data-dk] .dk-brand {
  flex: 1 1 auto !important;
  min-width: 0 !important;
}
.builder-canvas-mobile [data-dk] .dk-brand-name,
.preview-viewport-mobile [data-dk] .dk-brand-name {
  max-width: none !important;
  font-size: 13px !important;
  white-space: normal !important;
  word-break: normal !important;
  overflow-wrap: normal !important;
  line-height: 1.25 !important;
}
.builder-canvas-mobile [data-dk] .dk-menu-btn,
.preview-viewport-mobile [data-dk] .dk-menu-btn {
  display: inline-flex !important;
  padding: 6px 14px !important;
  font-size: 13px !important;
  min-height: 38px !important;
}
.builder-canvas-mobile [data-dk] .dk-nav-links:not(.open),
.preview-viewport-mobile [data-dk] .dk-nav-links:not(.open) {
  display: none !important;
}
.builder-canvas-mobile [data-dk] .dk-nav-links.open,
.preview-viewport-mobile [data-dk] .dk-nav-links.open {
  display: flex !important;
  flex-direction: column !important;
  width: 100% !important;
  padding: 12px !important;
  border: 1px solid rgba(255,255,255,.15) !important;
  border-radius: 16px !important;
  background: #082F49 !important;
}
.builder-canvas-mobile [data-dk] .dk-hero-grid,
.preview-viewport-mobile [data-dk] .dk-hero-grid {
  grid-template-columns: 1fr !important;
  gap: 28px !important;
  margin-top: 28px !important;
}
.builder-canvas-mobile [data-dk] .dk-h1,
.preview-viewport-mobile [data-dk] .dk-h1 {
  font-size: 28px !important;
  line-height: 1.15 !important;
  max-width: none !important;
}
.builder-canvas-mobile [data-dk] .dk-hero-p,
.preview-viewport-mobile [data-dk] .dk-hero-p {
  font-size: 15px !important;
  line-height: 1.65 !important;
  margin: 16px 0 22px !important;
}
.builder-canvas-mobile [data-dk] .dk-btns,
.preview-viewport-mobile [data-dk] .dk-btns {
  flex-direction: column !important;
  gap: 10px !important;
}
.builder-canvas-mobile [data-dk] .dk-btn,
.preview-viewport-mobile [data-dk] .dk-btn {
  width: 100% !important;
  justify-content: center !important;
}
.builder-canvas-mobile [data-dk] .dk-nums,
.preview-viewport-mobile [data-dk] .dk-nums {
  grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  margin-top: 32px !important;
  gap: 10px !important;
}
.builder-canvas-mobile [data-dk] .dk-num,
.preview-viewport-mobile [data-dk] .dk-num {
  padding: 14px 12px !important;
  font-size: 13px !important;
}
.builder-canvas-mobile [data-dk] .dk-num b,
.preview-viewport-mobile [data-dk] .dk-num b {
  font-size: 20px !important;
}
.builder-canvas-mobile [data-dk] .dk-stripe,
.preview-viewport-mobile [data-dk] .dk-stripe {
  display: none !important;
}
.builder-canvas-mobile [data-dk] .dk-two,
.preview-viewport-mobile [data-dk] .dk-two {
  grid-template-columns: 1fr !important;
  gap: 24px !important;
}
.builder-canvas-mobile [data-dk] .dk-units,
.preview-viewport-mobile [data-dk] .dk-units {
  grid-template-columns: 1fr !important;
  gap: 12px !important;
}
.builder-canvas-mobile [data-dk] .dk-flow,
.preview-viewport-mobile [data-dk] .dk-flow {
  grid-template-columns: 1fr !important;
}
.builder-canvas-mobile [data-dk] .dk-shu-grid,
.preview-viewport-mobile [data-dk] .dk-shu-grid {
  grid-template-columns: 1fr !important;
  gap: 20px !important;
}
.builder-canvas-mobile [data-dk] .dk-head-row,
.preview-viewport-mobile [data-dk] .dk-head-row {
  grid-template-columns: 1fr !important;
  gap: 20px !important;
}
.builder-canvas-mobile [data-dk] .dk-logo-show,
.preview-viewport-mobile [data-dk] .dk-logo-show {
  flex-direction: column !important;
  align-items: flex-start !important;
  gap: 16px !important;
}
.builder-canvas-mobile [data-dk] .dk-g3,
.preview-viewport-mobile [data-dk] .dk-g3 {
  grid-template-columns: 1fr !important;
}
.builder-canvas-mobile [data-dk] .dk-legend,
.preview-viewport-mobile [data-dk] .dk-legend {
  grid-template-columns: 1fr !important;
}
`;

// Shared Logo SVG
function LogoSvg({ size = 42 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Logo koperasi" style={{ flex: 'none', display: 'block' }}>
      <circle cx="32" cy="32" r="30" fill="#0C4A6E" />
      <circle cx="32" cy="32" r="28.5" fill="none" stroke="#F59E0B" strokeWidth="3" strokeDasharray="3.2 2.2" />
      <circle cx="32" cy="32" r="23" fill="#0EA5E9" />
      <path d="M32 49C25 45 24 37 32 31 40 37 39 45 32 49z" fill="#FFFFFF" />
      <path d="M31 49C22 49 17 42 18 35 25 36 30 42 31 49z" fill="#BAE6FD" />
      <path d="M33 49C42 49 47 42 46 35 39 36 34 42 33 49z" fill="#BAE6FD" />
      <path d="M20 50.5h24" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 19l1.5 3.6 3.9.3-3 2.5.9 3.8L32 27l-3.3 2.2.9-3.8-3-2.5 3.9-.3z" fill="#F59E0B" />
    </svg>
  );
}

export default function KopDompetkitaFull() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [acc, setAcc] = useState({
    syarat: true, kewajiban: false, hak: true, luarBiasa: false,
    pokok: true, wajib: false, cadangan: false, pinjaman: true, bantuan: false, kegunaan: false,
    rat: true, ralb: false, daring: false,
    f1: false, f2: false, f3: false, f4: false, f5: false, f6: false,
    // Tugas & tanggung jawab
    tugasKetua: true, tugasWakilAnggota: false, tugasWakilUsaha: false,
    tugasSekretaris: false, tugasBendahara: false,
    tugasPengawas: true, tugasManajer: false, tugasPegawai: false, tugasMasaJabatan: false,
    // Kerja sama, pembubaran & sanksi
    ksKerjasama: true, ksPersetujuan: false, ksPembubaran: false,
    ksSanksiRAT: true, ksSanksiAnggota: false, ksDefisit: false,
  });
  const tog = k => setAcc(p => ({ ...p, [k]: !p[k] }));

  useEffect(() => {
    if (!document.getElementById('dk-fonts')) {
      const lnk = document.createElement('link');
      lnk.id = 'dk-fonts';
      lnk.rel = 'stylesheet';
      lnk.href = 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&family=Source+Sans+3:wght@400;600&display=swap';
      document.head.appendChild(lnk);
    }
    // Always force-update styles so color changes take effect on HMR
    const existing = document.getElementById('dk-styles');
    if (existing) existing.remove();
    const st = document.createElement('style');
    st.id = 'dk-styles';
    st.textContent = STYLES;
    document.head.appendChild(st);
  }, []);

  const Acc = ({ label, k, children }) => (
    <div className="dk-details">
      <button onClick={() => tog(k)} className={`dk-summary ${acc[k] ? 'open' : ''}`}>
        {label}
        <span className="dk-summary-icon">{acc[k] ? '−' : '+'}</span>
      </button>
      {acc[k] && <div className="dk-acc-body">{children}</div>}
    </div>
  );

  // Scroll helper — cari elemen dalam container [data-dk] agar tidak mengganggu parent window
  const scrollNav = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const root = e.currentTarget.closest('[data-dk]') || document;
    const target = root.querySelector ? root.querySelector(`#${id}`) : document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div data-dk="1">
      {/* ── HERO ── */}
      <header className="dk-hero">
        <div className="dk-stripe" aria-hidden="true" />
        <div className="dk-wrap dk-hero-wrap">
          <nav className="dk-nav">
            <a href="#top" className="dk-brand" aria-label="KOPERASI DOMPETKITA BERSAMA – beranda" onClick={e => scrollNav(e, 'top')}>
              <LogoSvg size={42} />
              <span className="dk-brand-name">KOPERASI DOMPETKITA BERSAMA</span>
            </a>
            <button type="button" onClick={() => setMobileOpen(v => !v)} className="dk-menu-btn" aria-expanded={mobileOpen}>
              <span aria-hidden="true">{mobileOpen ? '×' : '☰'}</span>
              <span>{mobileOpen ? 'Tutup' : 'Menu'}</span>
            </button>
            <ul className={`dk-nav-links${mobileOpen ? ' open' : ''}`}>
              {[['Visi','misi'],['Lambang','lambang'],['Usaha','usaha'],['Modal','modal'],['Anggota','anggota'],['Rapat','rapat'],['SHU','shu'],['Struktur','struktur'],['Tugas','tugas'],['Kerja sama','kerjasama'],['FAQ','faq']].map(([l,h]) => (
                <li key={h}><a href={`#${h}`} onClick={e => scrollNav(e, h)}>{l}</a></li>
              ))}
            </ul>
          </nav>

          <div className="dk-hero-grid" id="top">
            <div>
              <p className="dk-eyebrow"><span className="dk-eyebrow-dot" /> Koperasi untuk tumbuh bersama</p>
              <h1 className="dk-h1">Koperasi DOMPETKITA BERSAMA.</h1>
              <p className="dk-hero-p">KOPERASI DOMPETKITA BERSAMA adalah koperasi umum yang menghimpun anggota dari kalangan karyawan perusahaan yang telah memiliki akun Dompetkita.id. Koperasi mengembangkan usaha dan layanan berdasarkan kebutuhan anggota, dengan tata kelola yang transparan, bertanggung jawab, dan berorientasi pada kesejahteraan bersama.</p>
              <div className="dk-btns">
                <a href="#anggota" className="dk-btn" onClick={e => scrollNav(e,'anggota')}>Pelajari keanggotaan <span aria-hidden="true">↗</span></a>
                <a href="#usaha" className="dk-btn dk-btn-alt" onClick={e => scrollNav(e,'usaha')}>Jelajahi unit usaha <span aria-hidden="true">→</span></a>
              </div>
            </div>
            <figure className="dk-hero-art">
              <svg viewBox="0 0 480 400" role="img" aria-label="Ilustrasi tiga karyawan terhubung dengan dompet digital di ponsel">
                <circle cx="240" cy="190" r="172" fill="#FFFFFF" fillOpacity=".07"/>
                <circle cx="240" cy="190" r="196" fill="none" stroke="#F59E0B" strokeOpacity=".55" strokeWidth="2" strokeDasharray="3 9" strokeLinecap="round"/>
                <ellipse cx="240" cy="382" rx="200" ry="8" fill="#FFFFFF" fillOpacity=".1"/>
                <rect x="180" y="24" width="120" height="232" rx="24" fill="#082F49" stroke="#FFFFFF" strokeOpacity=".35" strokeWidth="2"/>
                <rect x="190" y="46" width="100" height="198" rx="14" fill="#FFFFFF"/>
                <rect x="225" y="32" width="30" height="5" rx="2.5" fill="#FFFFFF" fillOpacity=".35"/>
                <circle cx="240" cy="67" r="13" fill="#0C4A6E"/><circle cx="240" cy="67" r="12" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="2 1.5"/><circle cx="240" cy="67" r="9" fill="#0EA5E9"/>
                <path d="M240 74c-3-2-3.5-5.5 0-8 3.5 2.5 3 6 0 8z" fill="#fff"/><path d="M239 74c-4 0-6.5-3-6-6.5 3 .5 5 3 6 6.5z" fill="#BAE6FD"/><path d="M241 74c4 0 6.5-3 6-6.5-3 .5-5 3-6 6.5z" fill="#BAE6FD"/>
                <path d="M240 59l.9 2.1 2.3.2-1.7 1.5.5 2.2L240 64l-2 1.3.5-2.2-1.7-1.5 2.3-.2z" fill="#F59E0B"/>
                <rect x="205" y="92" width="70" height="46" rx="10" fill="#0EA5E9"/>
                <rect x="252" y="107" width="30" height="16" rx="8" fill="#F59E0B"/>
                <circle cx="266" cy="115" r="3" fill="#0C4A6E"/>
                <rect x="205" y="154" width="70" height="8" rx="4" fill="#E0F2FE"/>
                <rect x="205" y="170" width="46" height="8" rx="4" fill="#E0F2FE"/>
                <rect x="205" y="200" width="70" height="22" rx="11" fill="#F59E0B"/>
                <path d="M150 276C150 200 178 170 194 150" fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 9" opacity=".9"/>
                <path d="M330 276C330 200 302 170 286 150" fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 9" opacity=".9"/>
                <g transform="translate(345 92)"><circle r="22" fill="#F59E0B"/><circle r="14" fill="none" stroke="#0C4A6E" strokeOpacity=".35" strokeWidth="2"/></g>
                <g transform="translate(130 120)"><circle r="16" fill="#F59E0B"/><circle r="10" fill="none" stroke="#0C4A6E" strokeOpacity=".35" strokeWidth="2"/></g>
                <g transform="translate(372 196)"><circle r="12" fill="#F59E0B"/><circle r="7" fill="none" stroke="#0C4A6E" strokeOpacity=".35" strokeWidth="2"/></g>
                <path d="M120 380v-28a30 30 0 0 1 60 0v28z" fill="#0EA5E9"/><circle cx="150" cy="300" r="20" fill="#F1C7A0"/><path d="M130 298a20 20 0 0 1 40 0c-8-8-32-8-40 0z" fill="#1E293B"/>
                <path d="M208 380v-38a32 32 0 0 1 64 0v38z" fill="#F59E0B"/><circle cx="240" cy="288" r="22" fill="#C98F62"/><path d="M218 286a22 22 0 0 1 44 0c-10-9-34-9-44 0z" fill="#1E293B"/><path d="M232 322l8 10 8-10" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M300 380v-28a30 30 0 0 1 60 0v28z" fill="#059669"/><circle cx="330" cy="300" r="20" fill="#8D5A3B"/><path d="M310 298a20 20 0 0 1 40 0c-8-8-32-8-40 0z" fill="#1E293B"/>
              </svg>
              <p className="dk-figcap">KOPERASI DOMPETKITA BERSAMA, Bertumbuh dan Sejahtera Bersama</p>
            </figure>
          </div>

          <div className="dk-nums">
            {[['1 orang = 1 suara','di Rapat Anggota'],['5 tahun','masa jabatan pengurus'],['Min. 1×/tahun','Rapat Anggota Tahunan'],['5 bagian','pembagian SHU']].map(([v,l],i) => (
              <div key={i} className="dk-num"><b>{v}</b>{l}</div>
            ))}
          </div>
        </div>
      </header>


      <main id="main-content">
        {/* ── VISI MISI ── */}
        <section id="misi" className="dk-section">
          <div className="dk-wrap dk-two">
            <div>
              <span className="dk-gold-bar" aria-hidden="true" />
              <h2 className="dk-h2">Membangun kesejahteraan anggota melalui koperasi yang adil, transparan, dan bertanggung jawab.</h2>
              <p className="dk-lead">Itulah visi kami: anggota bekerja sama mengembangkan usaha dan memperoleh manfaat ekonomi secara bersama.</p>
            </div>
            <ul className="dk-misi">
              {['Pengembangan layanan keuangan yang sesuai prinsip dan ketentuan yang dipilih serta disahkan koperasi.','Edukasi keuangan, pendampingan, dan pengembangan kesejahteraan karyawan.','Penyediaan kebutuhan sehari-hari dan layanan distribusi yang relevan bagi anggota.','Rasa memiliki, transparansi, dan semangat gotong royong dalam kegiatan koperasi.'].map((m,i) => <li key={i}>{m}</li>)}
            </ul>
          </div>
        </section>

        {/* ── LAMBANG ── */}
        <section id="lambang" className="dk-section">
          <div className="dk-wrap">
            <span className="dk-gold-bar" aria-hidden="true" />
            <h2 className="dk-h2">Tujuan dan makna lambang</h2>
            <p className="dk-lead">Koperasi berdiri untuk memperkuat kesejahteraan anggota melalui partisipasi, tata kelola yang transparan, dan kegiatan usaha yang sesuai kebutuhan bersama.</p>
            <div className="dk-logo-show">
              <LogoSvg size={132} />
              <div>
                <h3>Logo KOPERASI DOMPETKITA BERSAMA</h3>
                <p>Logo memadukan teratai sebagai lambang perkembangan dan kerja sama, bintang sebagai landasan Pancasila, serta lingkaran bergigi emas sebagai usaha yang terus berjalan. Bentuknya ringkas agar tetap jelas di layar, kartu anggota, dan dokumen.</p>
              </div>
            </div>
            <div className="dk-g3" style={{marginBottom:'36px'}}>
              <div className="dk-card"><h3>Kebutuhan anggota</h3><p>Mengembangkan layanan dan kegiatan usaha berdasarkan kebutuhan anggota serta keputusan Rapat Anggota.</p></div>
              <div className="dk-card"><h3>Kesejahteraan bersama</h3><p>Mendorong manfaat ekonomi yang bertanggung jawab, terukur, dan sesuai kemampuan koperasi.</p></div>
            </div>
            <h3 className="dk-h3" style={{marginBottom:'14px'}}>Arti lambang</h3>
            <div className="dk-g3">
              {[
                {n:'Lingkaran bergigi emas',d:'Usaha karya yang terus menerus; gigi roda melambangkan kegiatan usaha yang bergerak bersama.',i:<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="5"/><circle cx="20" cy="20" r="12" strokeWidth="5" strokeDasharray="4.2 4.2"/></svg>},
                {n:'Bunga teratai',d:'Perkembangan, kemajuan, dan semangat kerja sama.',i:<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 31c-5-3-6-10 0-15 6 5 5 12 0 15z"/><path d="M19 32c-7 0-11-5-11-10 6 0 10 4 11 10z"/><path d="M21 32c7 0 11-5 11-10-6 0-10 4-11 10z"/></svg>},
                {n:'Kelopak yang bertaut',d:'Persahabatan kokoh dan ikatan kekeluargaan antaranggota.',i:<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="14" cy="23" r="8"/><circle cx="26" cy="23" r="8"/><circle cx="20" cy="14" r="8"/></svg>},
                {n:'Bintang emas',d:'Pancasila sebagai landasan idiil dan ideologi koperasi.',i:<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 5l4.2 8.6 9.4 1.4-6.8 6.6 1.6 9.4L20 26.4l-8.4 4.6 1.6-9.4-6.8-6.6 9.4-1.4z"/></svg>},
                {n:'Garis emas di dasar',d:'Dasar yang kokoh dan berakar: kepribadian Indonesia, simpanan anggota, dan tata kelola yang sehat.',i:<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 32h28M13 25v7M20 18v14M27 25v7"/></svg>},
                {n:'Bentuk lingkaran',d:'Persatuan tanpa ujung dan keadilan sosial: setiap anggota memiliki satu suara.',i:<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="14"/><circle cx="20" cy="20" r="7"/></svg>},
                {n:'Biru tua dan teal',d:'Kepercayaan, ketenangan, dan pengelolaan yang transparan.',i:<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="15" cy="20" r="9" style={{fill:'#0C4A6E',stroke:'#0C4A6E'}}/><circle cx="25" cy="20" r="9" style={{fill:'#0EA5E9',stroke:'#0EA5E9'}}/></svg>},
                {n:'Emas dan putih',d:'Emas melambangkan kemakmuran anggota dan masyarakat; putih melambangkan kejujuran dan niat yang bersih.',i:<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="15" cy="20" r="9" style={{fill:'#F59E0B',stroke:'#F59E0B'}}/><circle cx="25" cy="20" r="9" style={{fill:'#fff',stroke:'#E0F2FE'}}/></svg>},
                {n:'Tulisan KOPERASI DOMPETKITA BERSAMA',d:'Identitas dan jati diri koperasi.',i:<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 11h28v18H6z"/><path d="M12 18h16M12 23h10"/></svg>},
              ].map((m,i) => (
                <div key={i} className="dk-card"><span className="dk-ico-sm">{m.i}</span><h3>{m.n}</h3><p>{m.d}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SIAPA ANGGOTA ── */}
        <section className="dk-section">
          <div className="dk-wrap">
            <span className="dk-gold-bar" aria-hidden="true" />
            <h2 className="dk-h2">Siapa yang dapat menjadi anggota?</h2>
            <p className="dk-lead">Keanggotaan ditujukan bagi karyawan perusahaan yang sudah terdaftar dan memiliki akun Dompetkita.id serta memenuhi proses penerimaan anggota sesuai AD/ART koperasi.</p>
            <ul className="dk-chips">
              {['Karyawan perusahaan','Akun Dompetkita.id aktif/terdaftar','Karyawan perusahaan yang memenuhi ketentuan program','Calon anggota yang memenuhi AD/ART'].map((c,i) => <li key={i} className="dk-chip">{c}</li>)}
            </ul>
          </div>
        </section>

        {/* ── UNIT USAHA ── */}
        <section id="usaha" className="dk-section">
          <div className="dk-wrap">
            <span className="dk-gold-bar" aria-hidden="true" />
            <h2 className="dk-h2">Unit usaha</h2>
            <p className="dk-lead">Unit usaha koperasi umum dikembangkan berdasarkan kebutuhan anggota, peluang pasar, kelayakan usaha, dan keputusan Rapat Anggota. Koperasi merupakan badan usaha tersendiri; kegiatan dan manfaatnya mengikuti AD/ART, perizinan, serta perjanjian yang relevan. Dompetkita.id menjadi salah satu persyaratan akun bagi calon anggota sesuai ketentuan keanggotaan koperasi.</p>
            <ul className="dk-chips">
              <li className="dk-chip dk-chip-main">Usaha utama: dikembangkan sesuai kebutuhan anggota dan hasil keputusan Rapat Anggota</li>
              <li className="dk-chip">Pilihan usaha tambahan: sesuai kelayakan, ketentuan, dan perizinan</li>
            </ul>
            <div className="dk-units">
              {[
                {n:'Perdagangan & pangan',d:'Penyediaan dan perdagangan bahan pangan, produk pertanian, kebutuhan pokok, serta perlengkapan usaha sesuai peluang pasar.',i:<svg viewBox="0 0 48 48"><path d="M8 20h32l-4 18H12z"/><path d="M16 20l6-10M32 20l-6-10"/><path d="M19 27v5M24 27v5M29 27v5"/></svg>},
                {n:'Peternakan',d:'Budi daya ayam ras petelur.',i:<svg viewBox="0 0 48 48"><path d="M20 8c7 0 12 11 12 19a12 12 0 0 1-24 0c0-8 5-19 12-19z"/><path d="M33 22c5 0 8 7 8 12a8 8 0 0 1-14 5"/></svg>},
                {n:'Kesehatan',d:'Layanan kesehatan dan perdagangan eceran produk kesehatan sesuai perizinan yang berlaku.',i:<svg viewBox="0 0 48 48"><rect x="9" y="9" width="30" height="30" rx="9"/><path d="M24 16v16M16 24h16"/></svg>},
                {n:'Logistik & gudang',d:'Pergudangan, penyimpanan barang, dan layanan distribusi.',i:<svg viewBox="0 0 48 48"><path d="M6 21L24 8l18 13v19H6z"/><path d="M16 40V28h16v12M16 34h16"/></svg>},
                {n:'Jasa',d:'Pembayaran, reparasi alat elektronik, dan penyelenggaraan acara khusus.',i:<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="6"/><circle cx="24" cy="24" r="14" strokeWidth="5" strokeDasharray="4.4 4.4"/></svg>},
                {n:'Simpan pinjam',d:'Layanan simpan pinjam bagi anggota sesuai ketentuan, perizinan, dan kemampuan koperasi.',i:<svg viewBox="0 0 48 48"><path d="M10 15c0-3 6-5 14-5s14 2 14 5-6 5-14 5-14-2-14-5z"/><path d="M10 15v8c0 3 6 5 14 5s14-2 14-5v-8M10 23v8c0 3 6 5 14 5s14-2 14-5v-8"/></svg>},
              ].map((u,i) => <div key={i} className="dk-unit"><span className="dk-ico">{u.i}</span><h3>{u.n}</h3><p>{u.d}</p></div>)}
            </div>
          </div>
        </section>

        {/* ── KEANGGOTAAN ── */}
        <section id="anggota" className="dk-section">
          <div className="dk-wrap">
            <span className="dk-gold-bar" aria-hidden="true" />
            <h2 className="dk-h2">Keanggotaan</h2>
            <p className="dk-lead">Syarat utama: calon anggota sudah terdaftar dan memiliki akun Dompetkita.id serta merupakan karyawan perusahaan. Status akun tidak otomatis memberikan keanggotaan; calon anggota tetap harus diterima sesuai AD/ART koperasi.</p>
            <ol className="dk-flow">
              {[
                {b:'Punya akun Dompetkita.id',p:'Daftar dan miliki akun di Dompetkita.id.',i:<svg viewBox="0 0 32 32"><rect x="9" y="3" width="14" height="26" rx="4"/><path d="M14 7h4M16 24h.01"/></svg>},
                {b:'Verifikasi karyawan',p:'Status akun dan karyawan diverifikasi.',i:<svg viewBox="0 0 32 32"><rect x="4" y="8" width="24" height="18" rx="4"/><path d="M12 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M11 17l4 4 7-8"/></svg>},
                {b:'Setujui AD/ART',p:'Setujui AD/ART serta ketentuan keanggotaan.',i:<svg viewBox="0 0 32 32"><path d="M8 3h12l5 5v21H8z"/><path d="M20 3v5h5M12 15h9M12 20h9M12 25h5"/></svg>},
                {b:'Bayar simpanan pokok',p:'Lunasi simpanan pokok sesuai ketentuan.',i:<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12"/><path d="M16 9v14M12 12.5c0-1.5 1.8-2.5 4-2.5s4 1 4 2.5-1.8 2.5-4 2.5-4 1-4 2.5 1.8 2.5 4 2.5 4-1 4-2.5"/></svg>},
              ].map((s,i) => <li key={i} className="dk-flow-item"><span className="dk-ico">{s.i}</span><b>{s.b}</b><p>{s.p}</p></li>)}
            </ol>
            <div className="dk-two">
              <div>
                <p className="dk-note">Ketentuan inti: calon anggota wajib memiliki akun Dompetkita.id dan berstatus sebagai karyawan perusahaan. Jika program koperasi mensyaratkan perusahaan mitra Dompetkita, status tersebut juga harus dipenuhi. Akun saja tidak otomatis menjadikan seseorang anggota koperasi.</p>
                <Acc label="Syarat menjadi anggota" k="syarat"><ul>{['Sudah terdaftar dan memiliki akun di Dompetkita.id','Merupakan karyawan dari perusahaan; status perusahaan harus memenuhi ketentuan program/keanggotaan yang berlaku','Memenuhi ketentuan kecakapan hukum dan persyaratan keanggotaan dalam AD/ART','Mengajukan pendaftaran serta melengkapi data yang diperlukan untuk verifikasi status akun dan karyawan','Menyetujui AD/ART serta ketentuan keanggotaan koperasi','Melunasi simpanan pokok sesuai ketentuan yang ditetapkan'].map((t,i) => <li key={i}>{t}</li>)}</ul></Acc>
                <Acc label="Kewajiban anggota" k="kewajiban"><ul>{['Mematuhi AD/ART dan keputusan Rapat Anggota','Menghadiri Rapat Anggota','Ikut mengawasi organisasi dan usaha koperasi','Membayar simpanan pokok dan simpanan wajib'].map((t,i) => <li key={i}>{t}</li>)}</ul></Acc>
              </div>
              <div>
                <Acc label="Hak anggota" k="hak"><ul>{['Memberi suara dan pendapat di Rapat Anggota','Memilih dan dipilih menjadi Pengurus atau Pengawas','Mendapat pelayanan usaha koperasi','Mendapat keterangan tentang perkembangan koperasi','Menerima bagian Sisa Hasil Usaha (SHU)','Menerima pengembalian simpanan jika keluar'].map((t,i) => <li key={i}>{t}</li>)}</ul></Acc>
                <Acc label="Anggota luar biasa" k="luarBiasa"><ul>{['Status anggota luar biasa hanya berlaku jika diatur dalam AD/ART koperasi','Kepemilikan akun Dompetkita.id saja tidak otomatis menjadikan seseorang anggota koperasi apabila yang bersangkutan bukan karyawan perusahaan atau belum diterima sebagai anggota'].map((t,i) => <li key={i}>{t}</li>)}</ul></Acc>
              </div>
            </div>
          </div>
        </section>

        {/* ── PERMODALAN ── */}
        <section id="modal" className="dk-section">
          <div className="dk-wrap">
            <div className="dk-head-row">
              <div>
                <span className="dk-gold-bar" aria-hidden="true" />
                <h2 className="dk-h2">Permodalan</h2>
                <p className="dk-lead" style={{marginBottom:'28px'}}>Modal koperasi terdiri dari modal sendiri dan modal pinjaman. Koperasi juga dapat menghimpun modal penyertaan.</p>
              </div>
              <svg viewBox="0 0 220 180" role="img" aria-label="Ilustrasi batang modal yang bertumbuh dengan koin">
                <rect x="20" y="150" width="180" height="4" rx="2" fill="#E0F2FE"/>
                <rect x="40" y="110" width="30" height="40" rx="7" fill="#0EA5E9" opacity=".3"/>
                <rect x="95" y="80" width="30" height="70" rx="7" fill="#0EA5E9" opacity=".6"/>
                <rect x="150" y="45" width="30" height="105" rx="7" fill="#0EA5E9"/>
                <path d="M55 98L110 68L165 33" fill="none" stroke="#F59E0B" strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round"/>
                <circle cx="55" cy="98" r="12" fill="#F59E0B"/><circle cx="110" cy="68" r="12" fill="#F59E0B"/><circle cx="165" cy="33" r="12" fill="#F59E0B"/>
                <circle cx="55" cy="98" r="7.5" fill="none" stroke="#fff" strokeWidth="2" opacity=".7"/><circle cx="110" cy="68" r="7.5" fill="none" stroke="#fff" strokeWidth="2" opacity=".7"/><circle cx="165" cy="33" r="7.5" fill="none" stroke="#fff" strokeWidth="2" opacity=".7"/>
              </svg>
            </div>
            <div className="dk-two">
              <div>
                <h3 className="dk-h3">Modal sendiri</h3>
                <Acc label="Simpanan pokok" k="pokok"><ul><li>Dibayar sekali saat menjadi anggota</li><li>Jumlahnya sama untuk setiap anggota</li><li>Tidak bisa diambil selama masih menjadi anggota</li></ul></Acc>
                <Acc label="Simpanan wajib" k="wajib"><ul><li>Dibayar anggota secara berkala</li><li>Menjadi dasar jasa simpanan dalam pembagian SHU</li></ul></Acc>
                <Acc label="Dana cadangan dan hibah tidak terikat" k="cadangan"><ul><li>Dana cadangan berasal dari penyisihan SHU, untuk memupuk modal dan menutup kerugian</li><li>Hibah tidak terikat adalah sumbangan pihak ketiga tanpa kewajiban pengembalian</li></ul></Acc>
              </div>
              <div>
                <h3 className="dk-h3">Modal pinjaman dan bantuan</h3>
                <Acc label="Sumber modal pinjaman" k="pinjaman"><ul><li>Pinjaman anggota yang memenuhi syarat</li><li>Pinjaman dari koperasi lain</li><li>Pinjaman bank dan lembaga keuangan lain</li><li>Penerbitan surat utang sesuai ketentuan</li></ul></Acc>
                <Acc label="Bantuan pemerintah" k="bantuan"><ul><li>Pemerintah pusat, provinsi, dan kabupaten/kota dapat memberi bantuan modal</li><li>Dukungan atau bantuan dari pemerintah dan pihak lain dapat diterima sesuai ketentuan yang berlaku serta keputusan koperasi</li></ul></Acc>
                <Acc label="Kegunaan modal" k="kegunaan"><ul><li>Biaya pra-organisasi (akta pendirian, administrasi)</li><li>Membeli barang modal seperti aset tetap</li><li>Membiayai operasional koperasi</li></ul></Acc>
              </div>
            </div>
          </div>
        </section>

        {/* ── RAPAT ANGGOTA ── */}
        <section id="rapat" className="dk-section">
          <div className="dk-wrap">
            <span className="dk-gold-bar" aria-hidden="true" />
            <h2 className="dk-h2">Rapat Anggota: kuorum dan keputusan</h2>
            <p className="dk-lead">Rapat Anggota adalah kekuasaan tertinggi. Keputusan diambil dengan musyawarah mufakat. Jika tidak tercapai, diputuskan dengan suara terbanyak: disetujui lebih dari setengah anggota yang hadir. Suara tidak bisa diwakilkan.</p>
            <div className="dk-tw" tabIndex={0} role="region" aria-label="Tabel kuorum dan keputusan Rapat Anggota">
              <table className="dk-table">
                <thead><tr><th className="dk-th">Jenis keputusan</th><th className="dk-th">Kehadiran minimal</th><th className="dk-th">Persetujuan minimal</th></tr></thead>
                <tbody>
                  {[['Rapat Anggota biasa (kuorum pertama)','Lebih dari 1/2 anggota terdaftar','Lebih dari 1/2 yang hadir'],['Rapat Anggota kedua (jika kuorum gagal)','Sedikitnya 1/3 anggota terdaftar','Lebih dari 1/2 yang hadir'],['Ubah Anggaran Dasar, penggabungan, peleburan (RALB)','Sedikitnya 3/4 anggota','Sedikitnya 3/4 yang hadir'],['Pembubaran koperasi','Sedikitnya 3/4 anggota','Sedikitnya 2/3 yang hadir']].map((r,i) => (
                    <tr key={i} className={i%2!==0?'dk-tr-even':''}>{r.map((c,j) => <td key={j} className="dk-td">{c}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="dk-note">Usul pembubaran atau penyelenggaraan rapat oleh anggota memerlukan dukungan sedikitnya 1/5 jumlah anggota. Rapat kedua diadakan paling lambat 30 hari setelah rapat pertama, dengan undangan paling lambat 14 hari sebelumnya.</p>
            <div className="dk-two" style={{marginTop:'36px'}}>
              <div>
                <h3 className="dk-h3">Wewenang Rapat Anggota</h3>
                <ul className="dk-misi">{['Menetapkan dan mengubah AD, ART, dan peraturan khusus','Memilih, mengangkat, dan memberhentikan Pengurus dan Pengawas','Menetapkan rencana kerja, anggaran, dan mengesahkan laporan keuangan','Mengesahkan pertanggungjawaban Pengurus dan Pengawas','Menetapkan pembagian SHU','Memutuskan penggabungan, peleburan, kepailitan, dan pembubaran'].map((w,i) => <li key={i}>{w}</li>)}</ul>
              </div>
              <div>
                <h3 className="dk-h3">Bentuk rapat</h3>
                <Acc label="Rapat Anggota Tahunan (RAT)" k="rat"><ul><li>Paling lambat 6 bulan setelah tahun buku berakhir</li><li>Membahas laporan jalannya koperasi, neraca, perhitungan hasil usaha, dan SHU</li><li>Pimpinan rapat dipilih dari anggota, bukan Pengurus</li></ul></Acc>
                <Acc label="Rapat Anggota Luar Biasa (RALB)" k="ralb"><ul><li>Untuk keputusan mendesak</li><li>Contoh: menjual atau menjaminkan aset lebih dari 25% total aset, atau menerima hibah lebih dari 25% aset</li></ul></Acc>
                <Acc label="Rapat kelompok, tertulis, dan daring" k="daring"><ul><li>Sistem kelompok dapat dipakai bila anggota lebih dari 500 orang</li><li>Rapat tertulis: anggota diberi waktu 14 hari untuk menjawab</li><li>Rapat daring wajib memungkinkan semua peserta saling melihat dan mendengar</li></ul></Acc>
              </div>
            </div>
          </div>
        </section>

        {/* ── SHU ── */}
        <section id="shu" className="dk-section">
          <div className="dk-wrap">
            <span className="dk-gold-bar" aria-hidden="true" />
            <h2 className="dk-h2">Pembagian Sisa Hasil Usaha</h2>
            <p className="dk-lead">Keuntungan tahunan dibagi menurut proporsi berikut. Besaran akhirnya ditetapkan Rapat Anggota.</p>
            <div className="dk-shu-grid">
              <svg viewBox="0 0 42 42" role="img" aria-label="Diagram donat pembagian SHU" style={{width:'100%',maxWidth:'260px',height:'auto',display:'block',margin:'0 auto'}}>
                <circle cx="21" cy="21" r="15.9155" fill="none" stroke="#E0F2FE" strokeWidth="6"/>
                <g fill="none" strokeWidth="6">
                  <circle cx="21" cy="21" r="15.9155" stroke="#0EA5E9" strokeDasharray="29.4 70.6" strokeDashoffset="25"/>
                  <circle cx="21" cy="21" r="15.9155" stroke="#059669" strokeDasharray="29.4 70.6" strokeDashoffset="-5"/>
                  <circle cx="21" cy="21" r="15.9155" stroke="#F59E0B" strokeDasharray="19.4 80.6" strokeDashoffset="-35"/>
                  <circle cx="21" cy="21" r="15.9155" stroke="#0C4A6E" strokeDasharray="14.4 85.6" strokeDashoffset="-55"/>
                  <circle cx="21" cy="21" r="15.9155" stroke="#64748B" strokeDasharray="4.4 95.6" strokeDashoffset="-70"/>
                </g>
                <text x="21" y="20.6" textAnchor="middle" fontSize="5.2" fontWeight="800" fontFamily="Bricolage Grotesque,system-ui,sans-serif" fill="#0F172A">SHU</text>
                <text x="21" y="25.6" textAnchor="middle" fontSize="2.7" fontFamily="Source Sans 3,system-ui,sans-serif" fill="#64748B">5 bagian</text>
              </svg>
              <div>
                <div className="dk-shu-bar">
                  {[{f:30,bg:'#0EA5E9',t:'30%',c:'#fff'},{f:30,bg:'#059669',t:'30%',c:'#fff'},{f:20,bg:'#F59E0B',t:'20%',c:'#0F172A'},{f:15,bg:'#0C4A6E',t:'15%',c:'#fff'},{f:5,bg:'#64748B',t:'',c:'#fff'}].map((s,i) => (
                    <span key={i} className="dk-shu-span" style={{flex:s.f,background:s.bg,color:s.c}}>{s.t}</span>
                  ))}
                </div>
                <ul className="dk-legend">
                  {[['#0EA5E9','Dana cadangan, 30%'],['#059669','Jasa anggota (sesuai transaksi), 30%'],['#F59E0B','Jasa simpanan (sesuai simpanan wajib), 20%'],['#0C4A6E','Insentif Pengawas, Pengurus, Pengelola, 15%'],['#64748B','Dana sosial dan pendidikan, 5%']].map(([c,l],i) => (
                    <li key={i}><span className="dk-legend-dot" style={{background:c}}/>{l}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── STRUKTUR ORGANISASI ── */}
        <section id="struktur" className="dk-section">
          <div className="dk-wrap">
            <span className="dk-gold-bar" aria-hidden="true" />
            <h2 className="dk-h2">Struktur organisasi</h2>
            <p className="dk-lead">Pengurus dipilih oleh anggota melalui Rapat Anggota. Pengurus dan Pengawas menjalankan amanah sesuai AD/ART, dengan masa jabatan dan persyaratan yang ditetapkan koperasi.</p>
            <div className="dk-org" tabIndex={0} role="region" aria-label="Bagan struktur organisasi">
              <div className="dk-org-inner">
                <div className="dk-org-col">
                  <span className="dk-node dk-node-top">Rapat Anggota<small>Kekuasaan tertinggi koperasi</small></span>
                  <div className="dk-vline"/>
                  <div style={{position:'relative',display:'flex',gap:'60px',justifyContent:'center'}}>
                    <div style={{position:'absolute',top:0,left:'20%',right:'20%',height:'2px',background:'#DCE7EC'}}/>
                    <div className="dk-org-col">
                      <div className="dk-vline"/><span className="dk-node dk-node-w">Badan Pengawas<small>Pengawasan dan nasihat</small></span>
                    </div>
                    <div className="dk-org-col">
                      <div className="dk-vline"/>
                      <span className="dk-node dk-node-k">Ketua<small>Memimpin pengurus koperasi</small></span>
                      <div className="dk-vline"/>
                      <div style={{position:'relative',display:'flex',gap:'10px',justifyContent:'center'}}>
                        <div style={{position:'absolute',top:0,left:'8%',right:'8%',height:'2px',background:'#DCE7EC'}}/>
                        <div className="dk-org-col">
                          <div className="dk-vline"/>
                          <span className="dk-node dk-node-k">Wakil Ketua</span>
                          <div className="dk-vline"/>
                          <div style={{display:'flex',gap:'6px'}}>
                            {['Bidang Usaha','Bidang Anggota'].map(u => <div key={u} className="dk-org-col"><div className="dk-vline"/><span className="dk-node dk-node-subtle" style={{minWidth:'100px',fontSize:'12px'}}>{u}</span></div>)}
                          </div>
                        </div>
                        <div className="dk-org-col"><div className="dk-vline"/><span className="dk-node dk-node-subtle">Sekretaris</span></div>
                        <div className="dk-org-col"><div className="dk-vline"/><span className="dk-node dk-node-subtle">Bendahara</span></div>
                        <div className="dk-org-col">
                          <div className="dk-vline"/>
                          <span className="dk-node dk-node-subtle">Pengelola Unit Usaha</span>
                          <div className="dk-vline"/>
                          <div style={{display:'flex',gap:'6px'}}>
                            {['Unit Usaha 1','Unit Usaha 2','Unit Usaha 3'].map(u => <div key={u} className="dk-org-col"><div className="dk-vline"/><span className="dk-node dk-node-subtle" style={{minWidth:'90px',fontSize:'12px'}}>{u}</span></div>)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TUGAS DAN TANGGUNG JAWAB ── */}
        <section id="tugas" className="dk-section">
          <div className="dk-wrap">
            <span className="dk-gold-bar" aria-hidden="true" />
            <h2 className="dk-h2">Tugas dan tanggung jawab</h2>
            <p className="dk-lead">Setiap peran punya uraian tugas tertulis agar tidak tumpang tindih.</p>
            <div className="dk-two">
              <div>
                <Acc label="Ketua" k="tugasKetua">
                  <ul>
                    <li>Memimpin organisasi, rapat pengurus, dan RAT</li>
                    <li>Menjaga koperasi berjalan sesuai visi dan AD/ART</li>
                    <li>Menetapkan kelayakan pinjaman bersama pengurus</li>
                    <li>Mewakili koperasi ke pihak luar dan menandatangani perjanjian kerja sama</li>
                    <li>Melaporkan keuangan tiap bulan kepada Pengawas dan setahun sekali di Rapat Anggota</li>
                  </ul>
                </Acc>
                <Acc label="Wakil Ketua Bidang Anggota" k="tugasWakilAnggota">
                  <ul>
                    <li>Mengelola data, kartu anggota, dan simpanan anggota</li>
                    <li>Memastikan hanya anggota aktif yang memenuhi AD/ART memiliki hak suara di RAT</li>
                    <li>Menampung saran dan keluhan anggota, mendorong penyelesaian lewat musyawarah</li>
                    <li>Menyusun kaderisasi dan edukasi perkoperasian, termasuk melibatkan pemuda</li>
                  </ul>
                </Acc>
                <Acc label="Wakil Ketua Bidang Usaha" k="tugasWakilUsaha">
                  <ul>
                    <li>Menyusun rencana bisnis berdasarkan kebutuhan anggota, peluang pasar, dan studi kelayakan</li>
                    <li>Mengawasi operasional unit usaha dan pelaksanaan SOP</li>
                    <li>Mengevaluasi untung-rugi, memberi masukan penutupan usaha yang tidak sehat</li>
                    <li>Menjalin kemitraan dengan perusahaan, UMKM, koperasi lain, lembaga keuangan, dan platform digital</li>
                  </ul>
                </Acc>
                <Acc label="Sekretaris" k="tugasSekretaris">
                  <ul>
                    <li>Menyimpan dokumen resmi: AD/ART, SK pendirian, legalitas, perizinan</li>
                    <li>Membuat notulen rapat dan mengelola surat menyurat</li>
                    <li>Menyusun laporan tahunan non-keuangan bersama Ketua</li>
                  </ul>
                </Acc>
                <Acc label="Bendahara" k="tugasBendahara">
                  <ul>
                    <li>Mencatat semua uang masuk dan keluar dengan bukti sah</li>
                    <li>Menyusun laporan keuangan harian, bulanan, dan tahunan, serta neraca dan laba/rugi</li>
                    <li>Menyusun anggaran dan memastikan pengeluaran tidak melebihi anggaran</li>
                    <li>Tidak mencampur uang koperasi dengan uang pribadi, bersedia diaudit</li>
                  </ul>
                </Acc>
              </div>
              <div>
                <Acc label="Badan Pengawas" k="tugasPengawas">
                  <ul>
                    <li>Mengawasi kebijakan dan jalannya pengurusan koperasi</li>
                    <li>Memberi nasihat, saran, atau teguran bila ada penyimpangan</li>
                    <li>Memeriksa pembukuan, dokumen, dan pelaksanaan usaha</li>
                    <li>Melakukan audit investigatif atas perintah Rapat Anggota</li>
                    <li>Memberi persetujuan atas pinjaman modal dan kerja sama tertentu</li>
                    <li>Menyampaikan laporan pengawasan tahunan kepada Rapat Anggota</li>
                  </ul>
                </Acc>
                <Acc label="Pengelola / manajer unit usaha" k="tugasManajer">
                  <ul>
                    <li>Menyusun program kerja dan laporan kinerja unit usaha</li>
                    <li>Mengelola dan mengendalikan unit usaha di bawah wewenangnya</li>
                    <li>Memberi informasi usaha kepada pihak berkepentingan</li>
                    <li>Diangkat dengan perjanjian kerja, disetujui Rapat Anggota</li>
                  </ul>
                </Acc>
                <Acc label="Pegawai / karyawan" k="tugasPegawai">
                  <ul>
                    <li>Menjalankan tugas sesuai SOP dan keputusan pengurus</li>
                    <li>Melayani konsumen dan membantu pengecekan barang dagangan</li>
                    <li>Menjaga kerahasiaan data dan nama baik koperasi</li>
                    <li>Bertanggung jawab kepada manajer unit usaha</li>
                  </ul>
                </Acc>
                <Acc label="Syarat dan masa jabatan" k="tugasMasaJabatan">
                  <ul>
                    <li>Pengurus dan Pengawas dipilih dari anggota, masa jabatan 5 tahun, boleh dipilih kembali</li>
                    <li>Pengurus dan Pengawas harus memenuhi persyaratan yang ditetapkan dalam peraturan perundang-undangan serta AD/ART koperasi</li>
                    <li>Minimal 5 Pengurus (jumlah ganjil); Pengawas minimal 1 ketua dan 2 anggota</li>
                    <li>Pengganti antarwaktu dipilih Rapat Anggota paling lambat 1 bulan sejak kekosongan</li>
                  </ul>
                </Acc>
              </div>
            </div>
          </div>
        </section>

        {/* ── KERJA SAMA, PEMBUBARAN & SANKSI ── */}
        <section id="kerjasama" className="dk-section">
          <div className="dk-wrap">
            <span className="dk-gold-bar" aria-hidden="true" />
            <h2 className="dk-h2">Kerja sama, pembubaran, dan sanksi</h2>
            <div className="dk-two">
              <div>
                <Acc label="Kerja sama dengan pihak ketiga" k="ksKerjasama">
                  <ul>
                    <li>Dibahas dulu di Rapat Anggota dan dikonsultasikan dengan Pengawas</li>
                    <li>Jangka waktu maksimum 10 tahun, dapat diperpanjang</li>
                    <li>Naskah perjanjian memuat: subjek, kerja sama, jangka waktu, hak dan kewajiban, pendanaan, keadaan memaksa, pengalihan aset, dan penyelesaian perselisihan</li>
                  </ul>
                </Acc>
                <Acc label="Tindakan yang perlu persetujuan Rapat Anggota" k="ksPersetujuan">
                  <ul>
                    <li>Membeli, menjual, atau mengagunkan barang tidak bergerak</li>
                    <li>Meminjam atau meminjamkan uang atas nama koperasi</li>
                    <li>Menanam kekayaan di usaha lain</li>
                    <li>Menjadi penjamin utang pihak lain</li>
                  </ul>
                </Acc>
                <Acc label="Pembubaran" k="ksPembubaran">
                  <ul>
                    <li>Atas keputusan Rapat Anggota atau karena jangka waktu berakhir</li>
                    <li>Pemerintah dapat membubarkan koperasi yang tidak beraktivitas 2 tahun berturut-turut atau tidak menggelar rapat anggota 3 tahun berturut-turut</li>
                    <li>Jika koperasi tak mampu membayar pihak ketiga, anggota hanya menanggung sebatas simpanan yang dimiliki</li>
                  </ul>
                </Acc>
              </div>
              <div>
                <Acc label="Sanksi bila RAT tidak dilaksanakan" k="ksSanksiRAT">
                  <ul>
                    <li>Terlambat 1 kali: surat teguran tertulis</li>
                    <li>Terlambat 2 kali berturut-turut: teguran tertulis, ditembuskan ke pihak pengawasan terkait</li>
                    <li>Tidak melaksanakan 2 kali atau lebih berturut-turut: surat peringatan dan rencana pembubaran</li>
                  </ul>
                </Acc>
                <Acc label="Sanksi bagi pengurus, pengawas, pengelola, anggota" k="ksSanksiAnggota">
                  <ul>
                    <li>Sanksi administratif, pemberhentian, atau proses hukum</li>
                    <li>Anggota dapat dikenai teguran, pembatasan hak suara, atau pembatalan status anggota</li>
                    <li>Anggota yang diberhentikan berhak membela diri di Rapat Anggota</li>
                  </ul>
                </Acc>
                <Acc label="Defisit usaha" k="ksDefisit">
                  <ul>
                    <li>Kerugian ditutup dengan dana cadangan atas keputusan Rapat Anggota</li>
                    <li>Jika tidak cukup, defisit dibebankan ke hasil usaha tahun buku berikutnya</li>
                  </ul>
                </Acc>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="dk-section">
          <div className="dk-wrap">
            <span className="dk-gold-bar" aria-hidden="true" />
            <h2 className="dk-h2">Pertanyaan yang sering diajukan</h2>
            {[
              {k:'f1',q:'Siapa yang dapat menjadi anggota KOPERASI DOMPETKITA BERSAMA?',a:'Karyawan perusahaan yang sudah terdaftar dan memiliki akun di Dompetkita.id, memenuhi persyaratan AD/ART, dan telah diterima melalui proses pendaftaran koperasi. Ketentuan perusahaan/program yang relevan juga harus dipenuhi.'},
              {k:'f2',q:'Apakah suara anggota berbeda menurut besar simpanan?',a:'Tidak. Setiap anggota hanya punya satu suara dan tidak bisa diwakilkan.'},
              {k:'f3',q:'Kapan saya menerima SHU?',a:'SHU dibagikan setelah disahkan di Rapat Anggota Tahunan. Bagian anggota dihitung dari transaksi usaha dan simpanan wajib.'},
              {k:'f4',q:'Bisakah simpanan diambil kembali?',a:'Simpanan pokok tidak bisa diambil selama masih anggota. Anggota yang keluar berhak atas pengembalian simpanannya.'},
              {k:'f5',q:'Bagaimana jika saya tidak setuju dengan keputusan pengurus?',a:'Anda berhak menyampaikan pendapat kepada Pengurus dan Pengawas kapan saja, serta meminta diadakan Rapat Anggota.'},
              {k:'f6',q:'Apakah semua pemilik akun Dompetkita otomatis menjadi anggota koperasi?',a:'Tidak. Calon anggota harus merupakan karyawan perusahaan, memiliki akun Dompetkita.id, memenuhi ketentuan keanggotaan, dan menyelesaikan proses penerimaan anggota koperasi.'},
            ].map(faq => (
              <Acc key={faq.k} label={faq.q} k={faq.k}><ul><li>{faq.a}</li></ul></Acc>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="dk-cta">
          <div className="dk-wrap">
            <h2>Mari bangun kesejahteraan karyawan bersama.</h2>
            <p>Pastikan Anda sudah memiliki akun Dompetkita.id dan merupakan karyawan perusahaan yang memenuhi ketentuan keanggotaan. Selanjutnya, ajukan pendaftaran koperasi dan lengkapi persyaratan sesuai AD/ART.</p>
            <a href="#anggota" className="dk-btn" onClick={e => scrollNav(e,'anggota')}>Lihat syarat keanggotaan</a>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="dk-footer">
        <div className="dk-wrap dk-footer-inner">
          <LogoSvg size={34} />
          <span>
            <strong style={{fontFamily:'"Bricolage Grotesque",system-ui,sans-serif',fontWeight:700,color:'#173042'}}>KOPERASI DOMPETKITA BERSAMA.</strong>
            {' '}Informasi ini merupakan gambaran umum; ketentuan resmi mengikuti AD/ART koperasi.
          </span>
        </div>
      </footer>
    </div>
  );
}
