import { useState, useEffect } from 'react';

/**
 * KopDompetkitaFull — Full-page monolithic component for KOPERASI DOMPETKITA BERSAMA
 * Renders 1:1 identical to the user's HTML design with full responsive & mobile support
 * across both real devices and builder / preview canvas simulators.
 */

const STYLES = `
/* CSS Tokens & Base Variables */
[data-dk] {
  --bg: #F4F8FA;
  --surface: #FFFFFF;
  --ink: #0F172A;
  --muted: #475569;
  --red: #0D9488;
  --red-d: #0F2942;
  --gold: #F4F544;
  --gold: #F59E0B;
  --leaf: #10B981;
  --line: #E2E8F0;
  --radius: 20px;
  --shadow: 0 12px 36px rgba(18,59,82,.065);

  container-type: inline-size;
  box-sizing: border-box;
  font: 400 16.5px/1.72 "Source Sans 3", system-ui, sans-serif;
  color: var(--ink);
  background: var(--bg);
  -webkit-font-smoothing: antialiased;
}

[data-dk] *, [data-dk] *:before, [data-dk] *:after {
  box-sizing: border-box;
}

[data-dk] h1, [data-dk] h2, [data-dk] h3 {
  font-family: "Bricolage Grotesque", system-ui, sans-serif;
  line-height: 1.1;
  margin: 0;
}

[data-dk] a {
  color: inherit;
  text-decoration: none;
}

[data-dk] :focus-visible {
  outline: 3px solid var(--gold);
  outline-offset: 3px;
}

[data-dk] .wrap {
  max-width: 1180px;
  margin: 0 auto;
  padding-inline: clamp(18px, 4vw, 42px);
}

/* Helper SVG classes */
[data-dk] .f-red { fill: var(--red); }
[data-dk] .f-gold { fill: var(--gold); }
[data-dk] .f-leaf { fill: var(--leaf); }
[data-dk] .f-surf { fill: var(--surface); }
[data-dk] .f-line { fill: var(--line); }
[data-dk] .f-dk { fill: var(--red-d); }
[data-dk] .s-red { stroke: var(--red); }
[data-dk] .s-gold { stroke: var(--gold); }
[data-dk] .s-line { stroke: var(--line); }
[data-dk] .s-surf { stroke: var(--surface); }
[data-dk] .t-ink { fill: var(--ink); }
[data-dk] .t-mut { fill: var(--muted); }

/* Navigation */
[data-dk] nav.hero-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px 0 21px;
  border-bottom: 1px solid rgba(255,255,255,.14);
  flex-wrap: nowrap;
}

[data-dk] .brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  min-width: 0;
}

[data-dk] .brand b {
  font-family: "Bricolage Grotesque", system-ui, sans-serif;
  font-weight: 800;
  font-size: 15px;
  color: #FFFFFF;
  letter-spacing: .03em;
  line-height: 1.3;
  max-width: 220px;
}

[data-dk] .logo {
  width: 42px;
  height: 42px;
  flex: none;
  display: block;
}

[data-dk] .links {
  display: flex;
  flex-wrap: wrap;
  gap: 7px 17px;
  font-weight: 600;
  font-size: 13.5px;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
}

[data-dk] .links a {
  text-decoration: none;
  color: #D7F1F3;
  padding: 7px 0;
  white-space: nowrap;
  transition: color .18s ease;
}

[data-dk] .links a:hover {
  color: #FFFFFF;
}

[data-dk] .menu-btn {
  display: none;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 1px solid rgba(255,255,255,.45);
  color: #FFFFFF;
  border-radius: 999px;
  padding: 8px 16px;
  font: 600 14px "Source Sans 3", system-ui, sans-serif;
  cursor: pointer;
  white-space: nowrap;
  min-height: 44px;
  transition: background .18s ease;
}

[data-dk] .menu-btn:hover {
  background: rgba(255,255,255,.12);
}

/* Hero Section */
[data-dk] .hero {
  background: radial-gradient(circle at 83% 37%, #20788b 0%, transparent 34%), linear-gradient(130deg, #0c2b40 3%, #0F2942 54%, #0c5362 100%);
  color: #FFFFFF;
  position: relative;
  overflow: hidden;
}

[data-dk] .hero .wrap {
  position: relative;
  z-index: 2;
  padding-top: 18px;
  padding-bottom: 65px;
}

[data-dk] .hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(0, .88fr);
  gap: clamp(25px, 4vw, 65px);
  align-items: center;
  margin-top: 56px;
}

[data-dk] .hero h1 {
  font-size: clamp(42px, 5.5vw, 72px);
  font-weight: 800;
  letter-spacing: -.048em;
  line-height: 1.06;
  max-width: 13ch;
  margin-top: 0;
  color: #FFFFFF;
  text-wrap: balance;
}

[data-dk] .hero p {
  max-width: 58ch;
  font-size: 17px;
  line-height: 1.8;
  color: #E2E8F0;
  margin: 23px 0 28px;
}

[data-dk] .hero .eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 20px;
  font-size: 12px;
  line-height: 1.3;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: #D1F0ED;
}

[data-dk] .eyebrow-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #F59E0B;
  box-shadow: 0 0 0 5px rgba(244,181,68,.16);
  flex: none;
  display: inline-block;
}

[data-dk] .btns {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

[data-dk] .btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 23px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  background: #FFFFFF;
  color: var(--red-d);
  border: 1px solid transparent;
  min-height: 48px;
  box-shadow: 0 2px 5px rgba(0,0,0,.08);
  transition: transform .18s ease, box-shadow .18s ease;
  cursor: pointer;
}

[data-dk] .btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,.18);
}

[data-dk] .btn.alt {
  background: transparent;
  color: #FFFFFF;
  border: 1px solid rgba(255,255,255,.52);
  box-shadow: none;
}

[data-dk] .stripe {
  position: absolute;
  right: -60px;
  top: 0;
  bottom: 0;
  width: 26%;
  background: repeating-linear-gradient(115deg, rgba(255,255,255,.08) 0 22px, transparent 22px 44px);
  border-left: 3px solid var(--gold);
  transform: skewX(-8deg);
  opacity: .3;
  pointer-events: none;
  z-index: 0;
}

[data-dk] .hero-art {
  margin: 0;
  position: relative;
  filter: drop-shadow(0 18px 35px rgba(6,30,42,.25));
}

[data-dk] .hero-art svg {
  display: block;
  width: 100%;
  height: auto;
}

[data-dk] .hero-art figcaption {
  font-family: "Bricolage Grotesque", system-ui, sans-serif;
  font-weight: 600;
  font-size: 12.5px;
  color: #D7F1F3;
  text-align: center;
  margin-top: 15px;
  letter-spacing: .01em;
}

[data-dk] .nums {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin-top: 56px;
}

[data-dk] .nums div {
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.14);
  border-top: 3px solid var(--gold);
  border-radius: 13px;
  padding: 19px 17px 18px;
  color: #E2E8F0;
  font-size: 15px;
  line-height: 1.35;
}

[data-dk] .nums b {
  display: block;
  font-family: "Bricolage Grotesque", system-ui, sans-serif;
  font-weight: 800;
  font-size: clamp(20px, 2.6vw, 28px);
  line-height: 1.2;
  margin-bottom: 6px;
  color: #FFFFFF;
}

/* Sticky Section Navigation */
[data-dk] .section-nav {
  display: block;
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 99;
  background: var(--surface);
  border-bottom: 1px solid var(--line);
  box-shadow: 0 8px 22px rgba(18,59,82,.06);
}

[data-dk] .section-nav-inner {
  display: flex;
  gap: 24px;
  align-items: center;
  min-height: 66px;
}

[data-dk] .section-nav-label {
  font-size: 13px;
  font-weight: 800;
  white-space: nowrap;
  color: var(--red);
}

[data-dk] .section-nav-links {
  display: flex;
  min-width: 0;
  flex: 1;
  gap: 4px;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--line) transparent;
  align-items: center;
  overscroll-behavior-x: contain;
}

[data-dk] .section-nav-links a {
  padding: 9px 14px;
  flex: none;
  text-decoration: none;
  font-size: 14px;
  font-weight: 650;
  border-radius: 999px;
  color: var(--muted);
  line-height: 1.4;
  white-space: nowrap;
  transition: background .2s, color .2s;
}

[data-dk] .section-nav-links a:hover {
  background: var(--bg);
  color: var(--ink);
}

[data-dk] .section-nav-links a.active {
  background: var(--red);
  color: #FFFFFF;
}

/* General Sections */
[data-dk] section {
  padding: clamp(58px, 7.5vw, 94px) 0;
  scroll-margin-top: 75px;
}

[data-dk] section:nth-of-type(even):not(.cta) {
  background: color-mix(in srgb, var(--surface) 55%, var(--bg));
}

[data-dk] section h2 {
  font-size: clamp(29px, 3.7vw, 43px);
  font-weight: 700;
  letter-spacing: -.035em;
  line-height: 1.15;
  margin-bottom: 14px;
  text-wrap: balance;
  color: var(--ink);
}

[data-dk] section:not(.cta) h2:before {
  content: "";
  display: block;
  width: 40px;
  height: 4px;
  border-radius: 4px;
  background: var(--gold);
  margin-bottom: 21px;
}

[data-dk] .lead {
  max-width: 64ch;
  line-height: 1.8;
  font-size: 17px;
  color: var(--muted);
  margin: 0 0 36px;
}

[data-dk] .two {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(24px, 5vw, 66px);
}

[data-dk] .misi {
  list-style: none;
  padding: 0;
  margin: 0;
}

[data-dk] .misi li {
  padding: 16px 0 16px 28px;
  border-bottom: 1px solid var(--line);
  position: relative;
  font-size: 16.5px;
  line-height: 1.72;
}

[data-dk] .misi li:before {
  content: "";
  position: absolute;
  left: 0;
  top: 26px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--red);
}

[data-dk] .chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

[data-dk] .chips li {
  padding: 9px 16px;
  border: 1.5px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  font-weight: 600;
  font-size: 15px;
  line-height: 1.35;
}

[data-dk] .chips li.main {
  background: var(--red);
  color: #FFFFFF;
  border-color: var(--red);
}

/* Units Grid */
[data-dk] .units {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  border-radius: var(--radius);
  background: transparent;
  border: 0;
  overflow: visible;
}

[data-dk] .units > div {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 17px;
  padding: 26px;
  box-shadow: var(--shadow);
  transition: transform .2s ease, border-color .2s ease;
}

[data-dk] .units > div:hover {
  border-color: color-mix(in srgb, var(--red) 30%, var(--line));
  background: var(--surface);
  transform: translateY(-2px);
}

[data-dk] .units h3 {
  font-size: 19px;
  line-height: 1.35;
  margin-bottom: 6px;
  color: var(--red);
}

[data-dk] .units p {
  margin: 0;
  font-size: 15px;
  line-height: 1.75;
  color: var(--muted);
}

/* Icon Badges */
[data-dk] .ico {
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 15px;
  background: color-mix(in srgb, var(--red) 12%, var(--surface));
  margin-bottom: 14px;
}

[data-dk] .ico svg {
  width: 30px;
  height: 30px;
  stroke: var(--red);
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

[data-dk] .ico.sm {
  width: 44px;
  height: 44px;
  border-radius: 13px;
  margin-bottom: 10px;
}

[data-dk] .ico.sm svg {
  width: 24px;
  height: 24px;
}

/* Cards & G3 Grid */
[data-dk] .g3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
}

[data-dk] .card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 23px 24px;
  box-shadow: var(--shadow);
  transition: transform .2s ease, box-shadow .2s ease;
}

[data-dk] .card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px rgba(18,59,82,.1);
}

[data-dk] .card h3 {
  font-size: 18px;
  line-height: 1.35;
  margin: 3px 0 7px;
  color: var(--red);
}

[data-dk] .card p {
  margin: 0;
  font-size: 15px;
  line-height: 1.75;
  color: var(--muted);
}

/* Logo Show Banner */
[data-dk] .logo-show {
  display: flex;
  align-items: center;
  gap: 28px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 26px;
  margin: 0 0 36px;
  box-shadow: var(--shadow);
}

[data-dk] .logo.big {
  width: 132px;
  height: 132px;
}

[data-dk] .logo-show h3 {
  font-size: 22px;
  margin-bottom: 8px;
  color: var(--red);
}

[data-dk] .logo-show p {
  margin: 0;
  color: var(--muted);
  font-size: 16px;
  max-width: 60ch;
  line-height: 1.72;
}

/* Alur Keanggotaan (Flow) */
[data-dk] .flow {
  counter-reset: f;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 13px;
  list-style: none;
  padding: 0;
  margin: 0 0 44px;
}

[data-dk] .flow li {
  counter-increment: f;
  position: relative;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 23px 20px;
  box-shadow: var(--shadow);
  min-width: 0;
}

[data-dk] .flow li:before {
  content: counter(f);
  position: absolute;
  right: 17px;
  top: 15px;
  font-family: "Bricolage Grotesque", system-ui, sans-serif;
  font-weight: 800;
  font-size: 28px;
  color: var(--gold);
  opacity: .9;
  line-height: 1;
}

[data-dk] .flow b {
  display: block;
  font-family: "Bricolage Grotesque", system-ui, sans-serif;
  font-weight: 700;
  font-size: 17px;
  margin-bottom: 4px;
}

[data-dk] .flow p {
  margin: 0;
  font-size: 15px;
  color: var(--muted);
}

/* Head Row */
[data-dk] .head-row {
  display: grid;
  grid-template-columns: 1fr 230px;
  gap: 36px;
  align-items: center;
  margin-bottom: 8px;
}

[data-dk] .head-row .lead {
  margin-bottom: 28px;
}

[data-dk] .head-row svg {
  width: 100%;
  height: auto;
  display: block;
}

/* Accordions (Details & Summary) */
[data-dk] details {
  padding: 0;
  margin-bottom: 10px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--surface);
  overflow: hidden;
}

[data-dk] summary {
  position: relative;
  list-style: none;
  font-family: "Bricolage Grotesque", system-ui, sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  padding: 17px 48px 17px 18px;
  min-height: 56px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--ink);
  background: var(--surface);
}

[data-dk] summary::-webkit-details-marker {
  display: none;
}

[data-dk] summary::after {
  content: '+';
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  font: 400 25px/1 system-ui;
  color: var(--red);
}

[data-dk] details[open] summary::after {
  content: '−';
}

[data-dk] details[open] summary {
  color: var(--red);
  border-bottom: 1px solid var(--line);
  background: color-mix(in srgb, var(--red) 5%, var(--surface));
}

[data-dk] details ul {
  margin: 0;
  padding: 18px 26px 20px 42px;
  line-height: 1.85;
}

[data-dk] details li {
  color: var(--muted);
  font-size: 15px;
}

[data-dk] details li + li {
  margin-top: 7px;
}

[data-dk] .note {
  font-size: 14px;
  color: var(--muted);
  margin-top: 14px;
  line-height: 1.7;
}

/* Table */
[data-dk] .tw {
  border: 1px solid var(--line);
  border-radius: 16px;
  box-shadow: var(--shadow);
  overflow-x: auto;
  margin-bottom: 14px;
}

[data-dk] table {
  border-collapse: collapse;
  width: 100%;
  min-width: 520px;
  font-size: 15px;
  background: var(--surface);
  margin: 0;
}

[data-dk] th, [data-dk] td {
  padding: 16px 18px;
  border-bottom: 1px solid var(--line);
  text-align: left;
  vertical-align: top;
}

[data-dk] th {
  background: var(--red-d);
  color: #FFFFFF;
  font-family: "Bricolage Grotesque", system-ui, sans-serif;
  font-weight: 700;
}

[data-dk] tbody tr:nth-child(even) {
  background: color-mix(in srgb, var(--bg) 64%, transparent);
}

[data-dk] tbody tr:hover {
  background: color-mix(in srgb, var(--red) 8%, var(--surface));
}

/* SHU */
[data-dk] .shu-grid {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 40px;
  align-items: center;
}

[data-dk] .donut {
  width: 100%;
  max-width: 260px;
  height: auto;
  display: block;
  margin: 0 auto;
}

[data-dk] .shu {
  display: flex;
  height: 64px;
  border-radius: 12px;
  overflow: hidden;
  margin: 8px 0 18px;
}

[data-dk] .shu span {
  display: flex;
  align-items: flex-end;
  padding: 8px 10px;
  color: #FFFFFF;
  font-family: "Bricolage Grotesque", system-ui, sans-serif;
  font-weight: 700;
  font-size: 15px;
  min-width: 0;
}

[data-dk] .legend {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px 24px;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 15px;
}

[data-dk] .legend li {
  display: flex;
  align-items: center;
  color: var(--ink);
  line-height: 1.4;
}

[data-dk] .legend i {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 3px;
  margin-right: 8px;
  flex: none;
}

/* Struktur Organisasi Tree */
[data-dk] .org {
  border: 1px solid var(--line);
  border-radius: 18px;
  background: var(--surface);
  padding: 24px 10px 28px;
  box-shadow: var(--shadow);
  margin: 30px auto 0;
  max-width: 100%;
  overflow-x: auto;
  text-align: center;
}

[data-dk] .org-tree, [data-dk] .org-tree ul {
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
}

[data-dk] .org-tree {
  display: inline-block;
  min-width: 100%;
  width: max-content;
}

[data-dk] .org-tree ul {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}

[data-dk] .org-tree li {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 10px 0;
}

[data-dk] .org-tree > li {
  padding-top: 0;
}

[data-dk] .org-tree li::before, [data-dk] .org-tree li::after {
  content: "";
  position: absolute;
  top: 0;
  right: 50%;
  width: 50%;
  height: 30px;
  border-top: 2px solid var(--line);
}

[data-dk] .org-tree li::after {
  right: auto;
  left: 50%;
  border-left: 2px solid var(--line);
}

[data-dk] .org-tree li:only-child::before, [data-dk] .org-tree li:only-child::after {
  display: none;
}

[data-dk] .org-tree li:only-child {
  padding-top: 0;
}

[data-dk] .org-tree li:first-child::before, [data-dk] .org-tree li:last-child::after {
  border: 0 none;
}

[data-dk] .org-tree li:last-child::before {
  border-right: 2px solid var(--line);
  border-radius: 0 10px 0 0;
}

[data-dk] .org-tree li:first-child::after {
  border-radius: 10px 0 0 0;
}

[data-dk] .org-tree ul ul::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  height: 30px;
  border-left: 2px solid var(--line);
}

[data-dk] .org-tree > li::before, [data-dk] .org-tree > li::after {
  display: none;
}

[data-dk] .org-tree > li > ul {
  padding-top: 30px;
}

[data-dk] .org-tree > li > ul::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  height: 30px;
  border-left: 2px solid var(--line);
}

[data-dk] .org-tree .node {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  min-width: 170px;
  max-width: 220px;
  min-height: 58px;
  padding: 13px 18px;
  border-radius: 12px;
  font-family: "Bricolage Grotesque", system-ui, sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.3;
  background: var(--surface);
  border: 1px solid var(--line);
  box-shadow: 0 5px 16px rgba(18,59,82,.08);
  text-align: center;
  color: var(--ink);
}

[data-dk] .org-tree .node small {
  font-size: 12px;
  font-weight: 500;
  line-height: 1.35;
  opacity: .9;
}

[data-dk] .org-tree .node.top {
  background: var(--gold);
  color: #0F172A;
  border-color: var(--gold);
  box-shadow: 0 7px 18px rgba(244,181,68,.3);
}

[data-dk] .org-tree .node.k {
  background: var(--red);
  color: #FFFFFF;
  border-color: var(--red);
}

[data-dk] .org-tree .node.w {
  background: var(--leaf);
  color: #FFFFFF;
  border-color: var(--leaf);
}

[data-dk] .org-tree .node.subtle {
  border-color: #D1E0E6;
  background: var(--surface);
}

/* CTA */
[data-dk] .cta {
  background: linear-gradient(125deg, #0f5066, #0D9488);
  padding: 77px 0;
  text-align: center;
  color: #FFFFFF;
  border-top: 0 !important;
}

[data-dk] .cta h2 {
  font-size: clamp(30px, 4.4vw, 48px);
  line-height: 1.15;
  margin-inline: auto;
  max-width: 18ch;
  margin-bottom: 18px;
  color: #FFFFFF;
}

[data-dk] .cta h2:before {
  display: none !important;
}

[data-dk] .cta p {
  max-width: 52ch;
  margin: 0 auto 28px;
  color: #E2E8F0;
  font-size: 17px;
  line-height: 1.75;
}

/* Footer */
[data-dk] footer {
  background: var(--surface);
  border-top: 1px solid var(--line);
  padding: 29px 0;
  font-size: 14px;
  color: var(--muted);
}

[data-dk] footer .wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}

[data-dk] footer .logo {
  width: 34px;
  height: 34px;
}

/* Scroll Controls */
[data-dk] .scroll-controls {
  position: fixed;
  right: max(16px, env(safe-area-inset-right, 0px));
  bottom: max(18px, env(safe-area-inset-bottom, 0px));
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

[data-dk] .scroll-control {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255,255,255,.36);
  border-radius: 50%;
  background: var(--red-d);
  color: #FFFFFF;
  box-shadow: 0 6px 18px rgba(0,0,0,.2);
  cursor: pointer;
  font: 700 21px/1 system-ui, sans-serif;
  transition: transform .18s ease, background .18s ease;
  touch-action: manipulation;
}

[data-dk] .scroll-control:hover {
  background: var(--red);
  transform: translateY(-2px);
}

/* Reading Progress Bar */
[data-dk] .reading-progress {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 120;
  width: 0;
  height: 3px;
  background: var(--gold);
  pointer-events: none;
}

/* ─────────────────────────────────────────────────────────────
   RESPONSIVE DESIGN (Real Screen Viewports: max-width 1100, 900, 640)
───────────────────────────────────────────────────────────── */
@media (max-width: 1100px) {
  [data-dk] nav.hero-nav { flex-wrap: wrap; }
  [data-dk] nav.hero-nav .links { gap: 5px 14px; }
  [data-dk] .units { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 900px) {
  [data-dk] .menu-btn { display: inline-flex; }
  [data-dk] nav.hero-nav { position: relative; flex-wrap: wrap; }
  [data-dk] nav.hero-nav .links {
    display: none;
    width: 100%;
    flex-basis: 100%;
    order: 3;
    padding: 12px;
    border: 1px solid rgba(255,255,255,.15);
    border-radius: 16px;
    background: #0c2b40;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 4px 10px;
  }
  [data-dk] nav.hero-nav .links.open { display: grid; }
  [data-dk] nav.hero-nav .links a {
    border: 0;
    border-radius: 8px;
    padding: 12px;
    font-size: 14px;
    color: #FFFFFF;
  }
  [data-dk] nav.hero-nav .links a:hover { background: rgba(255,255,255,.12); }
  [data-dk] .hero-grid { grid-template-columns: 1fr; gap: 32px; margin-top: 42px; }
  [data-dk] .hero h1 { max-width: 17ch; }
  [data-dk] .hero-art { width: 100%; max-width: 420px; }
  [data-dk] .nums { grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 35px; }
  [data-dk] .section-nav-inner { gap: 10px; }
  [data-dk] .section-nav-label { display: none; }
  [data-dk] .section-nav-links { width: 100%; }
}

@media (max-width: 640px) {
  [data-dk] { font-size: 16px; }
  [data-dk] .hero .wrap { padding-bottom: 44px; }
  [data-dk] .hero .brand b { font-size: 13px; max-width: 190px; }
  [data-dk] .hero h1 { font-size: clamp(38px, 10.5vw, 55px); letter-spacing: -.04em; }
  [data-dk] .hero p { font-size: 16px; line-height: 1.7; }
  [data-dk] .hero .eyebrow { font-size: 11px; }
  [data-dk] .hero-grid { margin-top: 33px; }
  [data-dk] .btns { display: grid; grid-template-columns: 1fr; }
  [data-dk] .btn { width: 100%; justify-content: center; }
  [data-dk] .hero-art { max-width: 320px; }
  [data-dk] .nums { gap: 9px; }
  [data-dk] .nums div { padding: 14px 13px; font-size: 12.5px; }
  [data-dk] .nums b { font-size: 20px; }
  [data-dk] .section-nav-inner { min-height: 57px; }
  [data-dk] .section-nav-links a { font-size: 13px; padding: 8px 12px; }
  [data-dk] section { padding: 54px 0; }
  [data-dk] .units { grid-template-columns: 1fr; }
  [data-dk] .units > div { padding: 22px; }
  [data-dk] .card { padding: 20px; }
  [data-dk] .head-row svg { max-width: 150px; }
  [data-dk] .logo-show { padding: 23px; flex-direction: column; text-align: center; }
  [data-dk] .logo.big { width: 104px; height: 104px; }
  [data-dk] .flow { grid-template-columns: 1fr; }
  [data-dk] .flow li { padding: 20px; }
  [data-dk] .shu { height: 56px; }
  [data-dk] .legend { grid-template-columns: 1fr; }
  [data-dk] .scroll-controls { right: 12px; bottom: 12px; }
  [data-dk] .scroll-control { width: 41px; height: 41px; }
  [data-dk] footer .wrap { align-items: flex-start; }
  [data-dk] .two { grid-template-columns: 1fr; gap: 28px; }
  [data-dk] .stripe { display: none; }
  [data-dk] .head-row { grid-template-columns: 1fr; }
  [data-dk] .shu-grid { grid-template-columns: 1fr; gap: 24px; }
}

/* ─────────────────────────────────────────────────────────────
   CONTAINER QUERIES & BUILDER/PREVIEW SIMULATOR MOBILE SUPPORT
   Ensures identical mobile rendering inside .builder-canvas-mobile (375px)
───────────────────────────────────────────────────────────── */
@container (max-width: 900px) {
  [data-dk] .menu-btn { display: inline-flex !important; }
  [data-dk] nav.hero-nav { position: relative !important; flex-wrap: wrap !important; }
  [data-dk] nav.hero-nav .links:not(.open) { display: none !important; }
  [data-dk] nav.hero-nav .links.open {
    display: grid !important;
    width: 100% !important;
    flex-basis: 100% !important;
    order: 3 !important;
    padding: 12px !important;
    border: 1px solid rgba(255,255,255,.15) !important;
    border-radius: 16px !important;
    background: #0c2b40 !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 4px 10px !important;
  }
  [data-dk] nav.hero-nav .links a {
    border: 0 !important;
    border-radius: 8px !important;
    padding: 12px !important;
    font-size: 14px !important;
    color: #FFFFFF !important;
  }
  [data-dk] .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; margin-top: 36px !important; }
  [data-dk] .nums { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; margin-top: 32px !important; }
  [data-dk] .section-nav-inner { gap: 10px !important; }
  [data-dk] .section-nav-label { display: none !important; }
  [data-dk] .section-nav-links { width: 100% !important; }
  [data-dk] .two { grid-template-columns: 1fr !important; gap: 28px !important; }
  [data-dk] .stripe { display: none !important; }
  [data-dk] .head-row { grid-template-columns: 1fr !important; }
  [data-dk] .shu-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
}

@container (max-width: 640px) {
  [data-dk] .hero .brand b {
    font-size: 13px !important;
    max-width: 190px !important;
    white-space: normal !important;
    word-break: normal !important;
    overflow-wrap: normal !important;
  }
  [data-dk] .hero h1 { font-size: clamp(32px, 9vw, 44px) !important; letter-spacing: -.04em !important; }
  [data-dk] .hero p { font-size: 15px !important; line-height: 1.65 !important; }
  [data-dk] .btns { display: grid !important; grid-template-columns: 1fr !important; gap: 10px !important; }
  [data-dk] .btn { width: 100% !important; justify-content: center !important; }
  [data-dk] .units { grid-template-columns: 1fr !important; }
  [data-dk] .flow { grid-template-columns: 1fr !important; }
  [data-dk] .legend { grid-template-columns: 1fr !important; }
}

/* Explicit Simulator Class Selectors */
:is(.builder-canvas-mobile, .preview-viewport-mobile) [data-dk] .menu-btn {
  display: inline-flex !important;
}
:is(.builder-canvas-mobile, .preview-viewport-mobile) [data-dk] nav.hero-nav {
  position: relative !important;
  flex-wrap: wrap !important;
  gap: 12px !important;
}
:is(.builder-canvas-mobile, .preview-viewport-mobile) [data-dk] .hero .brand b {
  font-size: 13px !important;
  max-width: 190px !important;
  white-space: normal !important;
  word-break: normal !important;
}
:is(.builder-canvas-mobile, .preview-viewport-mobile) [data-dk] nav.hero-nav .links:not(.open) {
  display: none !important;
}
:is(.builder-canvas-mobile, .preview-viewport-mobile) [data-dk] nav.hero-nav .links.open {
  display: grid !important;
  width: 100% !important;
  flex-basis: 100% !important;
  order: 3 !important;
  padding: 12px !important;
  border: 1px solid rgba(255,255,255,.15) !important;
  border-radius: 16px !important;
  background: #0c2b40 !important;
  grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  gap: 4px 10px !important;
}
:is(.builder-canvas-mobile, .preview-viewport-mobile) [data-dk] .hero-grid {
  grid-template-columns: 1fr !important;
  gap: 28px !important;
  margin-top: 32px !important;
}
:is(.builder-canvas-mobile, .preview-viewport-mobile) [data-dk] .hero h1 {
  font-size: 32px !important;
  line-height: 1.15 !important;
  max-width: none !important;
}
:is(.builder-canvas-mobile, .preview-viewport-mobile) [data-dk] .hero p {
  font-size: 15px !important;
  line-height: 1.65 !important;
  margin: 16px 0 22px !important;
}
:is(.builder-canvas-mobile, .preview-viewport-mobile) [data-dk] .btns {
  display: grid !important;
  grid-template-columns: 1fr !important;
  gap: 10px !important;
}
:is(.builder-canvas-mobile, .preview-viewport-mobile) [data-dk] .btn {
  width: 100% !important;
  justify-content: center !important;
}
:is(.builder-canvas-mobile, .preview-viewport-mobile) [data-dk] .nums {
  grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  gap: 9px !important;
  margin-top: 32px !important;
}
:is(.builder-canvas-mobile, .preview-viewport-mobile) [data-dk] .nums div {
  padding: 14px 12px !important;
  font-size: 12.5px !important;
}
:is(.builder-canvas-mobile, .preview-viewport-mobile) [data-dk] .nums b {
  font-size: 20px !important;
}
:is(.builder-canvas-mobile, .preview-viewport-mobile) [data-dk] .stripe {
  display: none !important;
}
:is(.builder-canvas-mobile, .preview-viewport-mobile) [data-dk] .two {
  grid-template-columns: 1fr !important;
  gap: 24px !important;
}
:is(.builder-canvas-mobile, .preview-viewport-mobile) [data-dk] .units {
  grid-template-columns: 1fr !important;
  gap: 12px !important;
}
:is(.builder-canvas-mobile, .preview-viewport-mobile) [data-dk] .flow {
  grid-template-columns: 1fr !important;
}
:is(.builder-canvas-mobile, .preview-viewport-mobile) [data-dk] .shu-grid {
  grid-template-columns: 1fr !important;
  gap: 20px !important;
}
:is(.builder-canvas-mobile, .preview-viewport-mobile) [data-dk] .head-row {
  grid-template-columns: 1fr !important;
  gap: 20px !important;
}
:is(.builder-canvas-mobile, .preview-viewport-mobile) [data-dk] .logo-show {
  flex-direction: column !important;
  align-items: center !important;
  text-align: center !important;
  gap: 16px !important;
}
:is(.builder-canvas-mobile, .preview-viewport-mobile) [data-dk] .g3 {
  grid-template-columns: 1fr !important;
}
:is(.builder-canvas-mobile, .preview-viewport-mobile) [data-dk] .legend {
  grid-template-columns: 1fr !important;
}
:is(.builder-canvas-mobile, .preview-viewport-mobile) [data-dk] .section-nav-label {
  display: none !important;
}
:is(.builder-canvas-mobile, .preview-viewport-mobile) [data-dk] .section-nav-links {
  width: 100% !important;
}
`;

// Shared Logo SVG Component
function LogoSvg({ size = 42, className = 'logo' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Logo koperasi" className={className} style={{ flex: 'none', display: 'block' }}>
      <circle cx="32" cy="32" r="30" fill="#0F2942" />
      <circle cx="32" cy="32" r="28.5" fill="none" stroke="#F59E0B" strokeWidth="3" strokeDasharray="3.2 2.2" />
      <circle cx="32" cy="32" r="23" fill="#0D9488" />
      <path d="M32 49C25 45 24 37 32 31 40 37 39 45 32 49z" fill="#FFFFFF" />
      <path d="M31 49C22 49 17 42 18 35 25 36 30 42 31 49z" fill="#E2E8F0" />
      <path d="M33 49C42 49 47 42 46 35 39 36 34 42 33 49z" fill="#E2E8F0" />
      <path d="M20 50.5h24" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 19l1.5 3.6 3.9.3-3 2.5.9 3.8L32 27l-3.3 2.2.9-3.8-3-2.5 3.9-.3z" fill="#F59E0B" />
    </svg>
  );
}

export default function KopDompetkitaFull() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('misi');

  useEffect(() => {
    // Inject Google Fonts if missing
    if (!document.getElementById('dk-fonts')) {
      const lnk = document.createElement('link');
      lnk.id = 'dk-fonts';
      lnk.rel = 'stylesheet';
      lnk.href = 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&family=Source+Sans+3:wght@400;600&display=swap';
      document.head.appendChild(lnk);
    }

    // Inject exact scoped styling
    const existing = document.getElementById('dk-styles');
    if (existing) existing.remove();
    const st = document.createElement('style');
    st.id = 'dk-styles';
    st.textContent = STYLES;
    document.head.appendChild(st);

    // Reading progress & active section spy
    const handleScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      const bar = document.getElementById('readingProgress');
      if (bar) bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;

      // Update active section
      const sections = ['misi', 'lambang', 'usaha', 'modal', 'anggota', 'rapat', 'shu', 'struktur', 'tugas', 'kerjasama', 'faq'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAnchor = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    const canvas = document.querySelector('.builder-canvas-mobile, .builder-canvas-desktop, .builder-canvas-tablet');
    if (canvas) {
      canvas.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToBottom = () => {
    const canvas = document.querySelector('.builder-canvas-mobile, .builder-canvas-desktop, .builder-canvas-tablet');
    if (canvas) {
      canvas.scrollTo({ top: canvas.scrollHeight, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <div data-dk="1">
      <div className="reading-progress" id="readingProgress" aria-hidden="true" />

      {/* ── HEADER / HERO ── */}
      <header className="hero">
        <div className="stripe" aria-hidden="true" />
        <div className="wrap">
          <nav className="hero-nav">
            <a className="brand" href="#top" aria-label="KOPERASI DOMPETKITA BERSAMA – beranda" onClick={(e) => scrollToAnchor(e, 'top')}>
              <LogoSvg size={42} />
              <b>KOPERASI DOMPETKITA BERSAMA</b>
            </a>

            <button
              className="menu-btn"
              type="button"
              id="menuBtn"
              aria-expanded={menuOpen}
              aria-controls="navLinks"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
              <span className="menu-label">{menuOpen ? 'Tutup' : 'Menu'}</span>
            </button>

            <div className={`links${menuOpen ? ' open' : ''}`} id="navLinks">
              {[
                ['Visi', 'misi'],
                ['Lambang', 'lambang'],
                ['Usaha', 'usaha'],
                ['Modal', 'modal'],
                ['Anggota', 'anggota'],
                ['Rapat', 'rapat'],
                ['SHU', 'shu'],
                ['Struktur', 'struktur'],
                ['Tugas', 'tugas'],
                ['Kerja sama', 'kerjasama'],
                ['FAQ', 'faq'],
              ].map(([lbl, id]) => (
                <a key={id} href={`#${id}`} onClick={(e) => scrollToAnchor(e, id)}>
                  {lbl}
                </a>
              ))}
            </div>
          </nav>

          <div className="hero-grid" id="top">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-dot" /> Koperasi untuk tumbuh bersama</p>
              <h1>Koperasi DOMPETKITA BERSAMA.</h1>
              <p>
                KOPERASI DOMPETKITA BERSAMA adalah koperasi umum yang menghimpun anggota dari kalangan karyawan perusahaan yang telah memiliki akun Dompetkita.id. Koperasi mengembangkan usaha dan layanan berdasarkan kebutuhan anggota, dengan tata kelola yang transparan, bertanggung jawab, dan berorientasi pada kesejahteraan bersama.
              </p>
              <div className="btns">
                <a className="btn" href="#anggota" onClick={(e) => scrollToAnchor(e, 'anggota')}>
                  Pelajari keanggotaan <span aria-hidden="true">↗</span>
                </a>
                <a className="btn alt" href="#usaha" onClick={(e) => scrollToAnchor(e, 'usaha')}>
                  Jelajahi unit usaha <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <figure className="hero-art">
              <svg viewBox="0 0 480 400" role="img" aria-label="Ilustrasi tiga karyawan terhubung dengan dompet digital di ponsel">
                <circle cx="240" cy="190" r="172" fill="#FFFFFF" fillOpacity=".07" />
                <circle cx="240" cy="190" r="196" fill="none" stroke="#F59E0B" strokeOpacity=".55" strokeWidth="2" strokeDasharray="3 9" strokeLinecap="round" />
                <ellipse cx="240" cy="382" rx="200" ry="8" fill="#FFFFFF" fillOpacity=".1" />
                {/* Ponsel */}
                <rect x="180" y="24" width="120" height="232" rx="24" fill="#0E2C3E" stroke="#FFFFFF" strokeOpacity=".35" strokeWidth="2" />
                <rect x="190" y="46" width="100" height="198" rx="14" fill="#FFFFFF" />
                <rect x="225" y="32" width="30" height="5" rx="2.5" fill="#FFFFFF" fillOpacity=".35" />
                <g transform="translate(226, 52) scale(0.4375)">
                  <circle cx="32" cy="32" r="30" fill="#0F2942" />
                  <circle cx="32" cy="32" r="28.5" fill="none" stroke="#F59E0B" strokeWidth="3" strokeDasharray="3.2 2.2" />
                  <circle cx="32" cy="32" r="23" fill="#0D9488" />
                  <path d="M32 49C25 45 24 37 32 31 40 37 39 45 32 49z" fill="#FFFFFF" />
                  <path d="M31 49C22 49 17 42 18 35 25 36 30 42 31 49z" fill="#E2E8F0" />
                  <path d="M33 49C42 49 47 42 46 35 39 36 34 42 33 49z" fill="#E2E8F0" />
                  <path d="M20 50.5h24" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
                  <path d="M32 19l1.5 3.6 3.9.3-3 2.5.9 3.8L32 27l-3.3 2.2.9-3.8-3-2.5 3.9-.3z" fill="#F59E0B" />
                </g>
                <rect x="205" y="92" width="70" height="46" rx="10" fill="#0D9488" />
                <rect x="252" y="107" width="30" height="16" rx="8" fill="#F59E0B" />
                <circle cx="266" cy="115" r="3" fill="#0F2942" />
                <rect x="205" y="154" width="70" height="8" rx="4" fill="#E2E8F0" />
                <rect x="205" y="170" width="46" height="8" rx="4" fill="#E2E8F0" />
                <rect x="205" y="200" width="70" height="22" rx="11" fill="#F59E0B" />
                {/* Garis penghubung */}
                <path d="M150 276C150 200 178 170 194 150" fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 9" opacity=".9" />
                <path d="M330 276C330 200 302 170 286 150" fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 9" opacity=".9" />
                {/* Koin */}
                <g transform="translate(345 92)"><circle r="22" fill="#F59E0B" /><circle r="14" fill="none" stroke="#0F2942" strokeOpacity=".35" strokeWidth="2" /></g>
                <g transform="translate(130 120)"><circle r="16" fill="#F59E0B" /><circle r="10" fill="none" stroke="#0F2942" strokeOpacity=".35" strokeWidth="2" /></g>
                <g transform="translate(372 196)"><circle r="12" fill="#F59E0B" /><circle r="7" fill="none" stroke="#0F2942" strokeOpacity=".35" strokeWidth="2" /></g>
                {/* Orang kiri */}
                <path d="M120 380v-28a30 30 0 0 1 60 0v28z" fill="#36B6C4" />
                <circle cx="150" cy="300" r="20" fill="#F1C7A0" />
                <path d="M130 298a20 20 0 0 1 40 0c-8-8-32-8-40 0z" fill="#2A2A33" />
                {/* Orang tengah */}
                <path d="M208 380v-38a32 32 0 0 1 64 0v38z" fill="#F59E0B" />
                <circle cx="240" cy="288" r="22" fill="#C98F62" />
                <path d="M218 286a22 22 0 0 1 44 0c-10-9-34-9-44 0z" fill="#2A2A33" />
                <path d="M232 322l8 10 8-10" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                {/* Orang kanan */}
                <path d="M300 380v-28a30 30 0 0 1 60 0v28z" fill="#10B981" />
                <circle cx="330" cy="300" r="20" fill="#8D5A3B" />
                <path d="M310 298a20 20 0 0 1 40 0c-8-8-32-8-40 0z" fill="#2A2A33" />
              </svg>
              <figcaption>KOPERASI DOMPETKITA BERSAMA, Bertumbuh dan Sejahtera Bersama</figcaption>
            </figure>
          </div>

          <div className="nums">
            <div><b>1 orang = 1 suara</b>di Rapat Anggota</div>
            <div><b>5 tahun</b>masa jabatan pengurus</div>
            <div><b>Min. 1×/tahun</b>Rapat Anggota Tahunan</div>
            <div><b>5 bagian</b>pembagian SHU</div>
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT ── */}
      <main id="main-content">
        {/* VISI & MISI */}
        <section id="misi">
          <div className="wrap two">
            <div>
              <h2>Membangun kesejahteraan anggota melalui koperasi yang adil, transparan, dan bertanggung jawab.</h2>
              <p className="lead">Itulah visi kami: anggota bekerja sama mengembangkan usaha dan memperoleh manfaat ekonomi secara bersama.</p>
            </div>
            <ul className="misi">
              <li>Pengembangan layanan keuangan yang sesuai prinsip dan ketentuan yang dipilih serta disahkan koperasi.</li>
              <li>Edukasi keuangan, pendampingan, dan pengembangan kesejahteraan karyawan.</li>
              <li>Penyediaan kebutuhan sehari-hari dan layanan distribusi yang relevan bagi anggota.</li>
              <li>Rasa memiliki, transparansi, dan semangat gotong royong dalam kegiatan koperasi.</li>
            </ul>
          </div>
        </section>

        {/* TUJUAN & MAKNA LAMBANG */}
        <section id="lambang">
          <div className="wrap">
            <h2>Tujuan dan makna lambang</h2>
            <p className="lead">Koperasi berdiri untuk memperkuat kesejahteraan anggota melalui partisipasi, tata kelola yang transparan, dan kegiatan usaha yang sesuai kebutuhan bersama.</p>
            <div className="logo-show">
              <LogoSvg size={132} className="logo big" />
              <div>
                <h3>Logo KOPERASI DOMPETKITA BERSAMA</h3>
                <p>Logo memadukan teratai sebagai lambang perkembangan dan kerja sama, bintang sebagai landasan Pancasila, serta lingkaran bergigi emas sebagai usaha yang terus berjalan. Bentuknya ringkas agar tetap jelas di layar, kartu anggota, dan dokumen.</p>
              </div>
            </div>
            <div className="g3" style={{ marginBottom: '36px' }}>
              <div className="card"><h3>Kebutuhan anggota</h3><p>Mengembangkan layanan dan kegiatan usaha berdasarkan kebutuhan anggota serta keputusan Rapat Anggota.</p></div>
              <div className="card"><h3>Kesejahteraan bersama</h3><p>Mendorong manfaat ekonomi yang bertanggung jawab, terukur, dan sesuai kemampuan koperasi.</p></div>
            </div>
            <h3 style={{ marginBottom: '14px' }}>Arti lambang</h3>
            <div className="g3">
              <div className="card"><span className="ico sm"><svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="5"/><circle cx="20" cy="20" r="12" strokeWidth="5" strokeDasharray="4.2 4.2"/></svg></span><h3>Lingkaran bergigi emas</h3><p>Usaha karya yang terus menerus; gigi roda melambangkan kegiatan usaha yang bergerak bersama.</p></div>
              <div className="card"><span className="ico sm"><svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 31c-5-3-6-10 0-15 6 5 5 12 0 15z"/><path d="M19 32c-7 0-11-5-11-10 6 0 10 4 11 10z"/><path d="M21 32c7 0 11-5 11-10-6 0-10 4-11 10z"/></svg></span><h3>Bunga teratai</h3><p>Perkembangan, kemajuan, dan semangat kerja sama.</p></div>
              <div className="card"><span className="ico sm"><svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="14" cy="23" r="8"/><circle cx="26" cy="23" r="8"/><circle cx="20" cy="14" r="8"/></svg></span><h3>Kelopak yang bertaut</h3><p>Persahabatan kokoh dan ikatan kekeluargaan antaranggota.</p></div>
              <div className="card"><span className="ico sm"><svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 5l4.2 8.6 9.4 1.4-6.8 6.6 1.6 9.4L20 26.4l-8.4 4.6 1.6-9.4-6.8-6.6 9.4-1.4z"/></svg></span><h3>Bintang emas</h3><p>Pancasila sebagai landasan idiil dan ideologi koperasi.</p></div>
              <div className="card"><span className="ico sm"><svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 32h28M13 25v7M20 18v14M27 25v7"/></svg></span><h3>Garis emas di dasar</h3><p>Dasar yang kokoh dan berakar: kepribadian Indonesia, simpanan anggota, dan tata kelola yang sehat.</p></div>
              <div className="card"><span className="ico sm"><svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="14"/><circle cx="20" cy="20" r="7"/></svg></span><h3>Bentuk lingkaran</h3><p>Persatuan tanpa ujung dan keadilan sosial: setiap anggota memiliki satu suara.</p></div>
              <div className="card"><span className="ico sm"><svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="15" cy="20" r="9" style={{ fill: '#0F2942', stroke: '#0F2942' }}/><circle cx="25" cy="20" r="9" style={{ fill: '#0D9488', stroke: '#0D9488' }}/></svg></span><h3>Biru tua dan teal</h3><p>Kepercayaan, ketenangan, dan pengelolaan yang transparan.</p></div>
              <div className="card"><span className="ico sm"><svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="15" cy="20" r="9" style={{ fill: '#F59E0B', stroke: '#F59E0B' }}/><circle cx="25" cy="20" r="9" style={{ fill: '#FFFFFF' }}/></svg></span><h3>Emas dan putih</h3><p>Emas melambangkan kemakmuran anggota dan masyarakat; putih melambangkan kejujuran dan niat yang bersih.</p></div>
              <div className="card"><span className="ico sm"><svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 11h28v18H6z"/><path d="M12 18h16M12 23h10"/></svg></span><h3>Tulisan KOPERASI DOMPETKITA BERSAMA</h3><p>Identitas dan jati diri koperasi.</p></div>
            </div>
          </div>
        </section>

        {/* SIAPA ANGGOTA */}
        <section>
          <div className="wrap">
            <h2>Siapa yang dapat menjadi anggota?</h2>
            <p className="lead">Keanggotaan ditujukan bagi karyawan perusahaan yang sudah terdaftar dan memiliki akun Dompetkita.id serta memenuhi proses penerimaan anggota sesuai AD/ART koperasi.</p>
            <ul className="chips">
              <li>Karyawan perusahaan</li>
              <li>Akun Dompetkita.id aktif/terdaftar</li>
              <li>Karyawan perusahaan yang memenuhi ketentuan program</li>
              <li>Calon anggota yang memenuhi AD/ART</li>
            </ul>
          </div>
        </section>

        {/* UNIT USAHA */}
        <section id="usaha">
          <div className="wrap">
            <h2>Unit usaha</h2>
            <p className="lead">Unit usaha koperasi umum dikembangkan berdasarkan kebutuhan anggota, peluang pasar, kelayakan usaha, dan keputusan Rapat Anggota. Koperasi merupakan badan usaha tersendiri; kegiatan dan manfaatnya mengikuti AD/ART, perizinan, serta perjanjian yang relevan. Dompetkita.id menjadi salah satu persyaratan akun bagi calon anggota sesuai ketentuan keanggotaan koperasi.</p>
            <ul className="chips" style={{ marginBottom: '28px' }}>
              <li className="main">Usaha utama: dikembangkan sesuai kebutuhan anggota dan hasil keputusan Rapat Anggota</li>
              <li>Pilihan usaha tambahan: sesuai kelayakan, ketentuan, dan perizinan</li>
            </ul>
            <div className="units">
              <div><span className="ico"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 20h32l-4 18H12z"/><path d="M16 20l6-10M32 20l-6-10"/><path d="M19 27v5M24 27v5M29 27v5"/></svg></span><h3>Perdagangan &amp; pangan</h3><p>Penyediaan dan perdagangan bahan pangan, produk pertanian, kebutuhan pokok, serta perlengkapan usaha sesuai peluang pasar.</p></div>
              <div><span className="ico"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M20 8c7 0 12 11 12 19a12 12 0 0 1-24 0c0-8 5-19 12-19z"/><path d="M33 22c5 0 8 7 8 12a8 8 0 0 1-14 5"/></svg></span><h3>Peternakan</h3><p>Budi daya ayam ras petelur.</p></div>
              <div><span className="ico"><svg viewBox="0 0 48 48" aria-hidden="true"><rect x="9" y="9" width="30" height="30" rx="9"/><path d="M24 16v16M16 24h16"/></svg></span><h3>Kesehatan</h3><p>Layanan kesehatan dan perdagangan eceran produk kesehatan sesuai perizinan yang berlaku.</p></div>
              <div><span className="ico"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M6 21L24 8l18 13v19H6z"/><path d="M16 40V28h16v12M16 34h16"/></svg></span><h3>Logistik &amp; gudang</h3><p>Pergudangan, penyimpanan barang, dan layanan distribusi.</p></div>
              <div><span className="ico"><svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="6"/><circle cx="24" cy="24" r="14" strokeWidth="5" strokeDasharray="4.4 4.4"/></svg></span><h3>Jasa</h3><p>Pembayaran, reparasi alat elektronik, dan penyelenggaraan acara khusus.</p></div>
              <div><span className="ico"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 15c0-3 6-5 14-5s14 2 14 5-6 5-14 5-14-2-14-5z"/><path d="M10 15v8c0 3 6 5 14 5s14-2 14-5v-8M10 23v8c0 3 6 5 14 5s14-2 14-5v-8"/></svg></span><h3>Simpan pinjam</h3><p>Layanan simpan pinjam bagi anggota sesuai ketentuan, perizinan, dan kemampuan koperasi.</p></div>
            </div>
          </div>
        </section>

        {/* KEANGGOTAAN */}
        <section id="anggota">
          <div className="wrap">
            <h2>Keanggotaan</h2>
            <p className="lead">Syarat utama: calon anggota sudah terdaftar dan memiliki akun Dompetkita.id serta merupakan karyawan perusahaan. Status akun tidak otomatis memberikan keanggotaan; calon anggota tetap harus diterima sesuai AD/ART koperasi.</p>
            <ol className="flow">
              <li><span className="ico"><svg viewBox="0 0 32 32" aria-hidden="true"><rect x="9" y="3" width="14" height="26" rx="4"/><path d="M14 7h4M16 24h.01"/></svg></span><b>Punya akun Dompetkita.id</b><p>Daftar dan miliki akun di Dompetkita.id.</p></li>
              <li><span className="ico"><svg viewBox="0 0 32 32" aria-hidden="true"><rect x="4" y="8" width="24" height="18" rx="4"/><path d="M12 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M11 17l4 4 7-8"/></svg></span><b>Verifikasi karyawan</b><p>Status akun dan karyawan diverifikasi.</p></li>
              <li><span className="ico"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 3h12l5 5v21H8z"/><path d="M20 3v5h5M12 15h9M12 20h9M12 25h5"/></svg></span><b>Setujui AD/ART</b><p>Setujui AD/ART serta ketentuan keanggotaan.</p></li>
              <li><span className="ico"><svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="12"/><path d="M16 9v14M12 12.5c0-1.5 1.8-2.5 4-2.5s4 1 4 2.5-1.8 2.5-4 2.5-4 1-4 2.5 1.8 2.5 4 2.5 4-1 4-2.5"/></svg></span><b>Bayar simpanan pokok</b><p>Lunasi simpanan pokok sesuai ketentuan.</p></li>
            </ol>
            <div className="two">
              <div>
                <p className="note">Ketentuan inti: calon anggota wajib memiliki akun Dompetkita.id dan berstatus sebagai karyawan perusahaan. Jika program koperasi mensyaratkan perusahaan mitra Dompetkita, status tersebut juga harus dipenuhi. Akun saja tidak otomatis menjadikan seseorang anggota koperasi.</p>
                <details open>
                  <summary>Syarat menjadi anggota</summary>
                  <ul>
                    <li>Sudah terdaftar dan memiliki akun di <a href="https://dompetkita.id/" target="_blank" rel="noopener noreferrer">Dompetkita.id</a></li>
                    <li>Merupakan karyawan dari perusahaan; status perusahaan harus memenuhi ketentuan program/keanggotaan yang berlaku</li>
                    <li>Memenuhi ketentuan kecakapan hukum dan persyaratan keanggotaan dalam AD/ART</li>
                    <li>Mengajukan pendaftaran serta melengkapi data yang diperlukan untuk verifikasi status akun dan karyawan</li>
                    <li>Menyetujui AD/ART serta ketentuan keanggotaan koperasi</li>
                    <li>Melunasi simpanan pokok sesuai ketentuan yang ditetapkan</li>
                  </ul>
                </details>
                <details>
                  <summary>Kewajiban anggota</summary>
                  <ul>
                    <li>Mematuhi AD/ART dan keputusan Rapat Anggota</li>
                    <li>Menghadiri Rapat Anggota</li>
                    <li>Ikut mengawasi organisasi dan usaha koperasi</li>
                    <li>Membayar simpanan pokok dan simpanan wajib</li>
                  </ul>
                </details>
              </div>
              <div>
                <details open>
                  <summary>Hak anggota</summary>
                  <ul>
                    <li>Memberi suara dan pendapat di Rapat Anggota</li>
                    <li>Memilih dan dipilih menjadi Pengurus atau Pengawas</li>
                    <li>Mendapat pelayanan usaha koperasi</li>
                    <li>Mendapat keterangan tentang perkembangan koperasi</li>
                    <li>Menerima bagian Sisa Hasil Usaha (SHU)</li>
                    <li>Menerima pengembalian simpanan jika keluar</li>
                  </ul>
                </details>
                <details>
                  <summary>Anggota luar biasa</summary>
                  <ul>
                    <li>Status anggota luar biasa hanya berlaku jika diatur dalam AD/ART koperasi</li>
                    <li>Kepemilikan akun Dompetkita.id saja tidak otomatis menjadikan seseorang anggota koperasi apabila yang bersangkutan bukan karyawan perusahaan atau belum diterima sebagai anggota</li>
                  </ul>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* PERMODALAN */}
        <section id="modal">
          <div className="wrap">
            <div className="head-row">
              <div>
                <h2>Permodalan</h2>
                <p className="lead">Modal koperasi terdiri dari modal sendiri dan modal pinjaman. Koperasi juga dapat menghimpun modal penyertaan.</p>
              </div>
              <svg viewBox="0 0 220 180" role="img" aria-label="Ilustrasi batang modal yang bertumbuh dengan koin">
                <rect x="20" y="150" width="180" height="4" rx="2" className="f-line"/>
                <rect x="40" y="110" width="30" height="40" rx="7" className="f-red" opacity=".35"/>
                <rect x="95" y="80" width="30" height="70" rx="7" className="f-red" opacity=".6"/>
                <rect x="150" y="45" width="30" height="105" rx="7" className="f-red"/>
                <path d="M55 98L110 68L165 33" fill="none" className="s-gold" strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round"/>
                <g className="f-gold"><circle cx="55" cy="98" r="12"/><circle cx="110" cy="68" r="12"/><circle cx="165" cy="33" r="12"/></g>
                <g fill="none" className="s-surf" strokeWidth="2" opacity=".7"><circle cx="55" cy="98" r="7.5"/><circle cx="110" cy="68" r="7.5"/><circle cx="165" cy="33" r="7.5"/></g>
              </svg>
            </div>
            <div className="two">
              <div>
                <h3 style={{ marginBottom: '10px' }}>Modal sendiri</h3>
                <details open>
                  <summary>Simpanan pokok</summary>
                  <ul>
                    <li>Dibayar sekali saat menjadi anggota</li>
                    <li>Jumlahnya sama untuk setiap anggota</li>
                    <li>Tidak bisa diambil selama masih menjadi anggota</li>
                  </ul>
                </details>
                <details>
                  <summary>Simpanan wajib</summary>
                  <ul>
                    <li>Dibayar anggota secara berkala</li>
                    <li>Menjadi dasar jasa simpanan dalam pembagian SHU</li>
                  </ul>
                </details>
                <details>
                  <summary>Dana cadangan dan hibah tidak terikat</summary>
                  <ul>
                    <li>Dana cadangan berasal dari penyisihan SHU, untuk memupuk modal dan menutup kerugian</li>
                    <li>Hibah tidak terikat adalah sumbangan pihak ketiga tanpa kewajiban pengembalian</li>
                  </ul>
                </details>
              </div>
              <div>
                <h3 style={{ marginBottom: '10px' }}>Modal pinjaman dan bantuan</h3>
                <details open>
                  <summary>Sumber modal pinjaman</summary>
                  <ul>
                    <li>Pinjaman anggota yang memenuhi syarat</li>
                    <li>Pinjaman dari koperasi lain</li>
                    <li>Pinjaman bank dan lembaga keuangan lain</li>
                    <li>Penerbitan surat utang sesuai ketentuan</li>
                  </ul>
                </details>
                <details>
                  <summary>Bantuan pemerintah</summary>
                  <ul>
                    <li>Pemerintah pusat, provinsi, dan kabupaten/kota dapat memberi bantuan modal</li>
                    <li>Dukungan atau bantuan dari pemerintah dan pihak lain dapat diterima sesuai ketentuan yang berlaku serta keputusan koperasi</li>
                  </ul>
                </details>
                <details>
                  <summary>Kegunaan modal</summary>
                  <ul>
                    <li>Biaya pra-organisasi (akta pendirian, administrasi)</li>
                    <li>Membeli barang modal seperti aset tetap</li>
                    <li>Membiayai operasional koperasi</li>
                  </ul>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* RAPAT ANGGOTA */}
        <section id="rapat">
          <div className="wrap">
            <h2>Rapat Anggota: kuorum dan keputusan</h2>
            <p className="lead">Rapat Anggota adalah kekuasaan tertinggi. Keputusan diambil dengan musyawarah mufakat. Jika tidak tercapai, diputuskan dengan suara terbanyak: disetujui lebih dari setengah anggota yang hadir. Suara tidak bisa diwakilkan.</p>
            <div className="tw" role="region" tabIndex={0} aria-label="Tabel kuorum dan keputusan Rapat Anggota, geser horizontal bila diperlukan">
              <table>
                <thead>
                  <tr>
                    <th>Jenis keputusan</th>
                    <th>Kehadiran minimal</th>
                    <th>Persetujuan minimal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Rapat Anggota biasa (kuorum pertama)</td><td>Lebih dari 1/2 anggota terdaftar</td><td>Lebih dari 1/2 yang hadir</td></tr>
                  <tr><td>Rapat Anggota kedua (jika kuorum gagal)</td><td>Sedikitnya 1/3 anggota terdaftar</td><td>Lebih dari 1/2 yang hadir</td></tr>
                  <tr><td>Ubah Anggaran Dasar, penggabungan, peleburan (RALB)</td><td>Sedikitnya 3/4 anggota</td><td>Sedikitnya 3/4 yang hadir</td></tr>
                  <tr><td>Pembubaran koperasi</td><td>Sedikitnya 3/4 anggota</td><td>Sedikitnya 2/3 yang hadir</td></tr>
                </tbody>
              </table>
            </div>
            <p className="note">Usul pembubaran atau penyelenggaraan rapat oleh anggota memerlukan dukungan sedikitnya 1/5 jumlah anggota. Rapat kedua diadakan paling lambat 30 hari setelah rapat pertama, dengan undangan paling lambat 14 hari sebelumnya.</p>
            <div className="two" style={{ marginTop: '36px' }}>
              <div>
                <h3 style={{ marginBottom: '10px' }}>Wewenang Rapat Anggota</h3>
                <ul className="misi">
                  <li>Menetapkan dan mengubah AD, ART, dan peraturan khusus</li>
                  <li>Memilih, mengangkat, dan memberhentikan Pengurus dan Pengawas</li>
                  <li>Menetapkan rencana kerja, anggaran, dan mengesahkan laporan keuangan</li>
                  <li>Mengesahkan pertanggungjawaban Pengurus dan Pengawas</li>
                  <li>Menetapkan pembagian SHU</li>
                  <li>Memutuskan penggabungan, peleburan, kepailitan, dan pembubaran</li>
                </ul>
              </div>
              <div>
                <h3 style={{ marginBottom: '10px' }}>Bentuk rapat</h3>
                <details open>
                  <summary>Rapat Anggota Tahunan (RAT)</summary>
                  <ul>
                    <li>Paling lambat 6 bulan setelah tahun buku berakhir</li>
                    <li>Membahas laporan jalannya koperasi, neraca, perhitungan hasil usaha, dan SHU</li>
                    <li>Pimpinan rapat dipilih dari anggota, bukan Pengurus</li>
                  </ul>
                </details>
                <details>
                  <summary>Rapat Anggota Luar Biasa (RALB)</summary>
                  <ul>
                    <li>Untuk keputusan mendesak</li>
                    <li>Contoh: menjual atau menjaminkan aset lebih dari 25% total aset, atau menerima hibah lebih dari 25% aset</li>
                  </ul>
                </details>
                <details>
                  <summary>Rapat kelompok, tertulis, dan daring</summary>
                  <ul>
                    <li>Sistem kelompok dapat dipakai bila anggota lebih dari 500 orang</li>
                    <li>Rapat tertulis: anggota diberi waktu 14 hari untuk menjawab</li>
                    <li>Rapat daring wajib memungkinkan semua peserta saling melihat dan mendengar</li>
                  </ul>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* SHU */}
        <section id="shu">
          <div className="wrap">
            <h2>Pembagian Sisa Hasil Usaha</h2>
            <p className="lead">Keuntungan tahunan dibagi menurut proporsi berikut. Besaran akhirnya ditetapkan Rapat Anggota.</p>
            <div className="shu-grid">
              <svg className="donut" viewBox="0 0 42 42" role="img" aria-label="Diagram donat pembagian SHU: dana cadangan 30 persen, jasa anggota 30 persen, jasa simpanan 20 persen, insentif 15 persen, dana sosial dan pendidikan 5 persen">
                <circle cx="21" cy="21" r="15.9155" fill="none" className="s-line" strokeWidth="6"/>
                <g fill="none" strokeWidth="6" transform="rotate(0 21 21)">
                  <circle cx="21" cy="21" r="15.9155" stroke="#0D9488" strokeDasharray="29.4 70.6" strokeDashoffset="25"/>
                  <circle cx="21" cy="21" r="15.9155" stroke="#10B981" strokeDasharray="29.4 70.6" strokeDashoffset="-5"/>
                  <circle cx="21" cy="21" r="15.9155" stroke="#F59E0B" strokeDasharray="19.4 80.6" strokeDashoffset="-35"/>
                  <circle cx="21" cy="21" r="15.9155" stroke="#0F2942" strokeDasharray="14.4 85.6" strokeDashoffset="-55"/>
                  <circle cx="21" cy="21" r="15.9155" stroke="#475569" strokeDasharray="4.4 95.6" strokeDashoffset="-70"/>
                </g>
                <text x="21" y="20.6" textAnchor="middle" fontSize="5.2" fontWeight="800" fontFamily="Bricolage Grotesque,system-ui,sans-serif" className="t-ink">SHU</text>
                <text x="21" y="25.6" textAnchor="middle" fontSize="2.7" fontFamily="Source Sans 3,system-ui,sans-serif" className="t-mut">5 bagian</text>
              </svg>
              <div>
                <div className="shu" role="img" aria-label="Dana cadangan 30 persen, jasa anggota 30 persen, jasa simpanan 20 persen, insentif 15 persen, dana sosial dan pendidikan 5 persen">
                  <span style={{ flex: 30, background: '#0D9488' }}>30%</span>
                  <span style={{ flex: 30, background: '#10B981' }}>30%</span>
                  <span style={{ flex: 20, background: '#F59E0B', color: '#0F172A' }}>20%</span>
                  <span style={{ flex: 15, background: '#0F2942' }}>15%</span>
                  <span style={{ flex: 5, background: '#475569' }}></span>
                </div>
                <ul className="legend">
                  <li><i style={{ background: '#0D9488' }} />Dana cadangan, 30%</li>
                  <li><i style={{ background: '#10B981' }} />Jasa anggota (sesuai transaksi), 30%</li>
                  <li><i style={{ background: '#F59E0B' }} />Jasa simpanan (sesuai simpanan wajib), 20%</li>
                  <li><i style={{ background: '#0F2942' }} />Insentif Pengawas, Pengurus, Pengelola, 15%</li>
                  <li><i style={{ background: '#475569' }} />Dana sosial dan pendidikan, 5%</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* STRUKTUR ORGANISASI */}
        <section id="struktur">
          <div className="wrap">
            <h2>Struktur organisasi</h2>
            <p className="lead">Pengurus dipilih oleh anggota melalui Rapat Anggota. Pengurus dan Pengawas menjalankan amanah sesuai AD/ART, dengan masa jabatan dan persyaratan yang ditetapkan koperasi.</p>
            <div className="org" tabIndex={0} role="region" aria-label="Bagan struktur organisasi KOPERASI DOMPETKITA BERSAMA, dapat digeser horizontal">
              <ul className="org-tree">
                <li>
                  <div className="node top">Rapat Anggota<small>Kekuasaan tertinggi koperasi</small></div>
                  <ul>
                    <li><div className="node w">Badan Pengawas<small>Pengawasan dan nasihat</small></div></li>
                    <li>
                      <div className="node k">Ketua<small>Memimpin pengurus koperasi</small></div>
                      <ul>
                        <li>
                          <div className="node k">Wakil Ketua</div>
                          <ul>
                            <li><div className="node subtle">Bidang Usaha</div></li>
                            <li><div className="node subtle">Bidang Anggota</div></li>
                          </ul>
                        </li>
                        <li>
                          <div className="node subtle">Sekretaris</div>
                        </li>
                        <li>
                          <div className="node subtle">Bendahara</div>
                        </li>
                        <li>
                          <div className="node subtle">Pengelola Unit Usaha</div>
                          <ul>
                            <li><div className="node subtle">Unit Usaha 1</div></li>
                            <li><div className="node subtle">Unit Usaha 2</div></li>
                            <li><div className="node subtle">Unit Usaha 3</div></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* MENJAGA KEPERCAYAAN */}
        <section>
          <div className="wrap">
            <div className="head-row">
              <div>
                <h2>Cara kami menjaga kepercayaan</h2>
                <p className="lead">Koperasi bersifat terbuka. Anggota dapat mengetahui, memantau, dan mengevaluasi pengelolaan usaha koperasi.</p>
              </div>
              <svg viewBox="0 0 220 180" role="img" aria-label="Ilustrasi perisai dengan tanda centang dan kaca pembesar">
                <rect x="14" y="96" width="42" height="54" rx="8" className="f-surf s-line" strokeWidth="2"/>
                <g className="s-line" strokeWidth="3" strokeLinecap="round"><path d="M23 112h24M23 122h24M23 132h14"/></g>
                <path d="M110 16L172 38V90C172 128 146 150 110 164 74 150 48 128 48 90V38z" className="f-red"/>
                <path d="M82 90l20 20 38-40" fill="none" className="s-surf" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="168" cy="128" r="20" className="f-surf s-gold" strokeWidth="8"/>
                <path d="M183 143l18 18" className="s-gold" strokeWidth="9" strokeLinecap="round"/>
              </svg>
            </div>
            <details open>
              <summary>Rapat Anggota Tahunan</summary>
              <ul>
                <li>Diadakan paling sedikit setahun sekali, paling lambat 6 bulan setelah tahun buku berakhir</li>
                <li>Pengurus dan Pengawas mempertanggungjawabkan kinerja, laporan keuangan, dan pembagian SHU</li>
                <li>Undangan beserta bahan rapat dikirim sebelum rapat dilaksanakan</li>
              </ul>
            </details>
            <details>
              <summary>Pengawasan dan laporan</summary>
              <ul>
                <li>Pengawas memeriksa pembukuan, dokumen, dan pelaksanaan usaha</li>
                <li>Pengurus membuat laporan keuangan dan perkembangan unit usaha setiap bulan</li>
                <li>Kerja sama dengan pihak ketiga dibahas di Rapat Anggota</li>
              </ul>
            </details>
            <details>
              <summary>Larangan dan sanksi</summary>
              <ul>
                <li>Pengurus dilarang mengambil keuntungan pribadi di luar penghasilan yang sah</li>
                <li>Pelanggaran dikenai sanksi administratif, pemberhentian, atau proses hukum</li>
              </ul>
            </details>
          </div>
        </section>

        {/* TUGAS DAN TANGGUNG JAWAB */}
        <section id="tugas">
          <div className="wrap">
            <h2>Tugas dan tanggung jawab</h2>
            <p className="lead">Setiap peran punya uraian tugas tertulis agar tidak tumpang tindih.</p>
            <div className="two">
              <div>
                <details open>
                  <summary>Ketua</summary>
                  <ul>
                    <li>Memimpin organisasi, rapat pengurus, dan RAT</li>
                    <li>Menjaga koperasi berjalan sesuai visi dan AD/ART</li>
                    <li>Menetapkan kelayakan pinjaman bersama pengurus</li>
                    <li>Mewakili koperasi ke pihak luar dan menandatangani perjanjian kerja sama</li>
                    <li>Melaporkan keuangan tiap bulan kepada Pengawas dan setahun sekali di Rapat Anggota</li>
                  </ul>
                </details>
                <details>
                  <summary>Wakil Ketua Bidang Anggota</summary>
                  <ul>
                    <li>Mengelola data, kartu anggota, dan simpanan anggota</li>
                    <li>Memastikan hanya anggota aktif yang memenuhi AD/ART memiliki hak suara di RAT</li>
                    <li>Menampung saran dan keluhan anggota, mendorong penyelesaian lewat musyawarah</li>
                    <li>Menyusun kaderisasi dan edukasi perkoperasian, termasuk melibatkan pemuda</li>
                  </ul>
                </details>
                <details>
                  <summary>Wakil Ketua Bidang Usaha</summary>
                  <ul>
                    <li>Menyusun rencana bisnis berdasarkan kebutuhan anggota, peluang pasar, dan studi kelayakan</li>
                    <li>Mengawasi operasional unit usaha dan pelaksanaan SOP</li>
                    <li>Mengevaluasi untung-rugi, memberi masukan penutupan usaha yang tidak sehat</li>
                    <li>Menjalin kemitraan dengan perusahaan, UMKM, koperasi lain, lembaga keuangan, dan platform digital</li>
                  </ul>
                </details>
                <details>
                  <summary>Sekretaris</summary>
                  <ul>
                    <li>Menyimpan dokumen resmi: AD/ART, SK pendirian, legalitas, perizinan</li>
                    <li>Membuat notulen rapat dan mengelola surat menyurat</li>
                    <li>Menyusun laporan tahunan non-keuangan bersama Ketua</li>
                  </ul>
                </details>
                <details>
                  <summary>Bendahara</summary>
                  <ul>
                    <li>Mencatat semua uang masuk dan keluar dengan bukti sah</li>
                    <li>Menyusun laporan keuangan harian, bulanan, dan tahunan, serta neraca dan laba/rugi</li>
                    <li>Menyusun anggaran dan memastikan pengeluaran tidak melebihi anggaran</li>
                    <li>Tidak mencampur uang koperasi dengan uang pribadi, bersedia diaudit</li>
                  </ul>
                </details>
              </div>
              <div>
                <details open>
                  <summary>Badan Pengawas</summary>
                  <ul>
                    <li>Mengawasi kebijakan dan jalannya pengurusan koperasi</li>
                    <li>Memberi nasihat, saran, atau teguran bila ada penyimpangan</li>
                    <li>Memeriksa pembukuan, dokumen, dan pelaksanaan usaha</li>
                    <li>Melakukan audit investigatif atas perintah Rapat Anggota</li>
                    <li>Memberi persetujuan atas pinjaman modal dan kerja sama tertentu</li>
                    <li>Menyampaikan laporan pengawasan tahunan kepada Rapat Anggota</li>
                  </ul>
                </details>
                <details>
                  <summary>Pengelola / manajer unit usaha</summary>
                  <ul>
                    <li>Menyusun program kerja dan laporan kinerja unit usaha</li>
                    <li>Mengelola dan mengendalikan unit usaha di bawah wewenangnya</li>
                    <li>Memberi informasi usaha kepada pihak berkepentingan</li>
                    <li>Diangkat dengan perjanjian kerja, disetujui Rapat Anggota</li>
                  </ul>
                </details>
                <details>
                  <summary>Pegawai / karyawan</summary>
                  <ul>
                    <li>Menjalankan tugas sesuai SOP dan keputusan pengurus</li>
                    <li>Melayani konsumen dan membantu pengecekan barang dagangan</li>
                    <li>Menjaga kerahasiaan data dan nama baik koperasi</li>
                    <li>Bertanggung jawab kepada manajer unit usaha</li>
                  </ul>
                </details>
                <details>
                  <summary>Syarat dan masa jabatan</summary>
                  <ul>
                    <li>Pengurus dan Pengawas dipilih dari anggota, masa jabatan 5 tahun, boleh dipilih kembali</li>
                    <li>Pengurus dan Pengawas harus memenuhi persyaratan yang ditetapkan dalam peraturan perundang-undangan serta AD/ART koperasi</li>
                    <li>Minimal 5 Pengurus (jumlah ganjil); Pengawas minimal 1 ketua dan 2 anggota</li>
                    <li>Pengganti antarwaktu dipilih Rapat Anggota paling lambat 1 bulan sejak kekosongan</li>
                  </ul>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* KERJA SAMA, PEMBUBARAN & SANKSI */}
        <section id="kerjasama">
          <div className="wrap">
            <h2>Kerja sama, pembubaran, dan sanksi</h2>
            <div className="two">
              <div>
                <details open>
                  <summary>Kerja sama dengan pihak ketiga</summary>
                  <ul>
                    <li>Dibahas dulu di Rapat Anggota dan dikonsultasikan dengan Pengawas</li>
                    <li>Jangka waktu maksimum 10 tahun, dapat diperpanjang</li>
                    <li>Naskah perjanjian memuat: subjek, kerja sama, jangka waktu, hak dan kewajiban, pendanaan, keadaan memaksa, pengalihan aset, dan penyelesaian perselisihan</li>
                  </ul>
                </details>
                <details>
                  <summary>Tindakan yang perlu persetujuan Rapat Anggota</summary>
                  <ul>
                    <li>Membeli, menjual, atau mengagunkan barang tidak bergerak</li>
                    <li>Meminjam atau meminjamkan uang atas nama koperasi</li>
                    <li>Menanam kekayaan di usaha lain</li>
                    <li>Menjadi penjamin utang pihak lain</li>
                  </ul>
                </details>
                <details>
                  <summary>Pembubaran</summary>
                  <ul>
                    <li>Atas keputusan Rapat Anggota atau karena jangka waktu berakhir</li>
                    <li>Pemerintah dapat membubarkan koperasi yang tidak beraktivitas 2 tahun berturut-turut atau tidak menggelar rapat anggota 3 tahun berturut-turut</li>
                    <li>Jika koperasi tak mampu membayar pihak ketiga, anggota hanya menanggung sebatas simpanan yang dimiliki</li>
                  </ul>
                </details>
              </div>
              <div>
                <details open>
                  <summary>Sanksi bila RAT tidak dilaksanakan</summary>
                  <ul>
                    <li>Terlambat 1 kali: surat teguran tertulis</li>
                    <li>Terlambat 2 kali berturut-turut: teguran tertulis, ditembuskan ke pihak pengawasan terkait</li>
                    <li>Tidak melaksanakan 2 kali atau lebih berturut-turut: surat peringatan dan rencana pembubaran</li>
                  </ul>
                </details>
                <details>
                  <summary>Sanksi bagi pengurus, pengawas, pengelola, anggota</summary>
                  <ul>
                    <li>Sanksi administratif, pemberhentian, atau proses hukum</li>
                    <li>Anggota dapat dikenai teguran, pembatasan hak suara, atau pembatalan status anggota</li>
                    <li>Anggota yang diberhentikan berhak membela diri di Rapat Anggota</li>
                  </ul>
                </details>
                <details>
                  <summary>Defisit usaha</summary>
                  <ul>
                    <li>Kerugian ditutup dengan dana cadangan atas keputusan Rapat Anggota</li>
                    <li>Jika tidak cukup, defisit dibebankan ke hasil usaha tahun buku berikutnya</li>
                  </ul>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <div className="wrap">
            <h2>Pertanyaan yang sering diajukan</h2>
            <details>
              <summary>Siapa yang dapat menjadi anggota KOPERASI DOMPETKITA BERSAMA?</summary>
              <ul>
                <li>Karyawan perusahaan yang sudah terdaftar dan memiliki akun di <a href="https://dompetkita.id/" target="_blank" rel="noopener noreferrer">Dompetkita.id</a>, memenuhi persyaratan AD/ART, dan telah diterima melalui proses pendaftaran koperasi. Ketentuan perusahaan/program yang relevan juga harus dipenuhi.</li>
              </ul>
            </details>
            <details>
              <summary>Apakah suara anggota berbeda menurut besar simpanan?</summary>
              <ul>
                <li>Tidak. Setiap anggota hanya punya satu suara dan tidak bisa diwakilkan.</li>
              </ul>
            </details>
            <details>
              <summary>Kapan saya menerima SHU?</summary>
              <ul>
                <li>SHU dibagikan setelah disahkan di Rapat Anggota Tahunan. Bagian anggota dihitung dari transaksi usaha dan simpanan wajib.</li>
              </ul>
            </details>
            <details>
              <summary>Bisakah simpanan diambil kembali?</summary>
              <ul>
                <li>Simpanan pokok tidak bisa diambil selama masih anggota. Anggota yang keluar berhak atas pengembalian simpanannya.</li>
              </ul>
            </details>
            <details>
              <summary>Bagaimana jika saya tidak setuju dengan keputusan pengurus?</summary>
              <ul>
                <li>Anda berhak menyampaikan pendapat kepada Pengurus dan Pengawas kapan saja, serta meminta diadakan Rapat Anggota.</li>
              </ul>
            </details>
            <details>
              <summary>Apakah semua pemilik akun Dompetkita otomatis menjadi anggota koperasi?</summary>
              <ul>
                <li>Tidak. Calon anggota harus merupakan karyawan perusahaan, memiliki akun Dompetkita.id, memenuhi ketentuan keanggotaan, dan menyelesaikan proses penerimaan anggota koperasi.</li>
              </ul>
            </details>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="wrap">
            <h2>Mari bangun kesejahteraan karyawan bersama.</h2>
            <p>Pastikan Anda sudah memiliki akun Dompetkita.id dan merupakan karyawan perusahaan yang memenuhi ketentuan keanggotaan. Selanjutnya, ajukan pendaftaran koperasi dan lengkapi persyaratan sesuai AD/ART.</p>
            <a className="btn" href="#anggota" onClick={(e) => scrollToAnchor(e, 'anggota')}>
              Lihat syarat keanggotaan
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <LogoSvg size={34} />
          <span>
            <strong style={{ fontFamily: '"Bricolage Grotesque", system-ui, sans-serif', fontWeight: 700, color: 'var(--ink)' }}>
              KOPERASI DOMPETKITA BERSAMA.
            </strong>{' '}
            Informasi ini merupakan gambaran umum; ketentuan resmi mengikuti AD/ART koperasi.
          </span>
        </div>
      </footer>

      {/* SCROLL CONTROLS */}
      <div className="scroll-controls" role="group" aria-label="Navigasi halaman">
        <button className="scroll-control" type="button" id="scrollToTop" aria-label="Scroll ke atas" title="Ke atas" onClick={scrollToTop}>
          <span aria-hidden="true">↑</span>
        </button>
        <button className="scroll-control" type="button" id="scrollToBottom" aria-label="Scroll ke bawah" title="Ke bawah" onClick={scrollToBottom}>
          <span aria-hidden="true">↓</span>
        </button>
      </div>
    </div>
  );
}
