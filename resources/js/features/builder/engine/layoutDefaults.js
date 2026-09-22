// Layout Defaults Registry
// Maps layout IDs to their default component definitions
// Used to seed sections with initial components when added to the canvas

export const LAYOUT_DEFAULTS = {
  // === NAVBAR LAYOUTS ===
  'navbar-01': [
    { id: 'logo-1', type: 'heading', props: { content: 'LUMIÈRE', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#0f172a', letterSpacing: '0.18em' } },
    { id: 'nav-home', type: 'button', props: { label: 'Home', href: '#hero', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-work', type: 'button', props: { label: 'Work', href: '#work', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-studio', type: 'button', props: { label: 'Studio', href: '#studio', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-journal', type: 'button', props: { label: 'Journal', href: '#journal', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'cta-book', type: 'button', props: { label: 'Book a Call →', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#0f172a', color: '#ffffff' } },
  ],
  'navbar-02': [
    { id: 'logo-2', type: 'heading', props: { content: 'NOIR', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#f8fafc', letterSpacing: '0.3em' } },
    { id: 'nav-maison', type: 'button', props: { label: 'Maison', href: '#maison', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'nav-collection', type: 'button', props: { label: 'Collection', href: '#collection', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'nav-atelier', type: 'button', props: { label: 'Atelier', href: '#atelier', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'nav-contact', type: 'button', props: { label: 'Contact', href: '#contact', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'cta-reserve', type: 'button', props: { label: 'Reserve', href: '#reserve', variant: 'outline', size: 'small', radius: 'full', background: '#c9a227', color: '#c9a227' } },
  ],
  'navbar-03': [
    { id: 'logo-3', type: 'heading', props: { content: 'aurora', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#0f172a' } },
    { id: 'nav-product', type: 'button', props: { label: 'Product', href: '#product', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'nav-pricing', type: 'button', props: { label: 'Pricing', href: '#pricing', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'nav-docs', type: 'button', props: { label: 'Docs', href: '#docs', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'nav-blog', type: 'button', props: { label: 'Blog', href: '#blog', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'cta-trial', type: 'button', props: { label: 'Start Free →', href: '#trial', variant: 'primary', size: 'small', radius: 'full', background: '#6366f1', color: '#ffffff' } },
  ],
  'navbar-04': [
    { id: 'logo-4', type: 'heading', props: { content: '🌿 Emerald', level: 'h2', fontSize: '20px', fontWeight: '800', color: '#064e3b' } },
    { id: 'nav-shop', type: 'button', props: { label: 'Shop', href: '#shop', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-sustain', type: 'button', props: { label: 'Sustainability', href: '#sustain', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-stores', type: 'button', props: { label: 'Stores', href: '#stores', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'cta-cart', type: 'button', props: { label: 'Cart (2)', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#059669', color: '#ffffff' } },
  ],
  'navbar-05': [
    { id: 'logo-5', type: 'heading', props: { content: 'VELOCE', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.12em' } },
    { id: 'nav-models', type: 'button', props: { label: 'Models', href: '#models', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-racing', type: 'button', props: { label: 'Racing', href: '#racing', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-store', type: 'button', props: { label: 'Store', href: '#store', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'cta-test', type: 'button', props: { label: 'Test Drive', href: '#test', variant: 'primary', size: 'small', radius: 'md', background: '#ef4444', color: '#ffffff' } },
  ],
  'navbar-06': [
    { id: 'logo-6', type: 'heading', props: { content: 'Sakura & Co.', level: 'h2', fontSize: '26px', fontWeight: '700', color: '#831843' } },
    { id: 'nav-left-1', type: 'button', props: { label: 'Collections', href: '#collections', variant: 'ghost', size: 'small', background: 'transparent', color: '#6b7280' } },
    { id: 'nav-left-2', type: 'button', props: { label: 'Our Story', href: '#story', variant: 'ghost', size: 'small', background: 'transparent', color: '#6b7280' } },
    { id: 'nav-right-1', type: 'button', props: { label: 'Journal', href: '#journal', variant: 'ghost', size: 'small', background: 'transparent', color: '#6b7280' } },
    { id: 'cta-reserve-6', type: 'button', props: { label: 'Reserve Table', href: '#reserve', variant: 'primary', size: 'small', radius: 'full', background: '#be185d', color: '#ffffff' } },
  ],
  'navbar-07': [
    { id: 'logo-7', type: 'heading', props: { content: 'OBSIDIAN', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.22em' } },
    { id: 'nav-platform', type: 'button', props: { label: 'Platform', href: '#platform', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-solutions', type: 'button', props: { label: 'Solutions', href: '#solutions', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-pricing', type: 'button', props: { label: 'Pricing', href: '#pricing', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'cta-demo', type: 'button', props: { label: 'Get Demo →', href: '#demo', variant: 'primary', size: 'small', radius: 'full', background: '#ffffff', color: '#0f172a' } },
  ],
  'navbar-08': [
    { id: 'logo-8', type: 'heading', props: { content: 'PAPERCUT*', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#000000' } },
    { id: 'nav-work', type: 'button', props: { label: 'Work', href: '#work', variant: 'ghost', size: 'small', background: 'transparent', color: '#000000' } },
    { id: 'nav-about', type: 'button', props: { label: 'About', href: '#about', variant: 'ghost', size: 'small', background: 'transparent', color: '#000000' } },
    { id: 'nav-blog', type: 'button', props: { label: 'Blog', href: '#blog', variant: 'ghost', size: 'small', background: 'transparent', color: '#000000' } },
    { id: 'cta-hire', type: 'button', props: { label: 'Hire Us ★', href: '#hire', variant: 'primary', size: 'small', radius: 'none', background: '#000000', color: '#facc15' } },
  ],
  'navbar-09': [
    { id: 'logo-9', type: 'heading', props: { content: 'serenity', level: 'h2', fontSize: '24px', fontWeight: '400', color: '#1c1917' } },
    { id: 'nav-retreats', type: 'button', props: { label: 'Retreats', href: '#retreats', variant: 'ghost', size: 'small', background: 'transparent', color: '#78716c' } },
    { id: 'nav-philosophy', type: 'button', props: { label: 'Philosophy', href: '#philosophy', variant: 'ghost', size: 'small', background: 'transparent', color: '#78716c' } },
    { id: 'nav-journal', type: 'button', props: { label: 'Journal', href: '#journal', variant: 'ghost', size: 'small', background: 'transparent', color: '#78716c' } },
    { id: 'cta-begin', type: 'button', props: { label: 'Begin →', href: '#begin', variant: 'ghost', size: 'small', background: 'transparent', color: '#1c1917' } },
  ],
  'navbar-10': [
    { id: 'logo-10', type: 'heading', props: { content: 'NEBULA', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.2em' } },
    { id: 'nav-explore', type: 'button', props: { label: 'Explore', href: '#explore', variant: 'ghost', size: 'small', background: 'transparent', color: '#c4b5fd' } },
    { id: 'nav-missions', type: 'button', props: { label: 'Missions', href: '#missions', variant: 'ghost', size: 'small', background: 'transparent', color: '#c4b5fd' } },
    { id: 'nav-community', type: 'button', props: { label: 'Community', href: '#community', variant: 'ghost', size: 'small', background: 'transparent', color: '#c4b5fd' } },
    { id: 'cta-launch', type: 'button', props: { label: 'Launch App', href: '#app', variant: 'primary', size: 'small', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
  ],
  'navbar-11': [
    { id: 'logo-11', type: 'heading', props: { content: 'The Monocle Post', level: 'h2', fontSize: '28px', fontWeight: '700', color: '#1c1917' } },
    { id: 'nav-news', type: 'button', props: { label: 'News', href: '#news', variant: 'ghost', size: 'small', background: 'transparent', color: '#44403c' } },
    { id: 'nav-culture', type: 'button', props: { label: 'Culture', href: '#culture', variant: 'ghost', size: 'small', background: 'transparent', color: '#44403c' } },
    { id: 'nav-opinion', type: 'button', props: { label: 'Opinion', href: '#opinion', variant: 'ghost', size: 'small', background: 'transparent', color: '#44403c' } },
    { id: 'nav-magazine', type: 'button', props: { label: 'Magazine', href: '#magazine', variant: 'ghost', size: 'small', background: 'transparent', color: '#44403c' } },
    { id: 'cta-subscribe', type: 'button', props: { label: 'Subscribe', href: '#subscribe', variant: 'primary', size: 'small', radius: 'none', background: '#1c1917', color: '#fafaf9' } },
  ],
  'navbar-12': [
    { id: 'logo-12', type: 'heading', props: { content: '~/datasoft', level: 'h2', fontSize: '16px', fontWeight: '700', color: '#4ade80' } },
    { id: 'nav-docs', type: 'button', props: { label: 'Docs', href: '#docs', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'nav-api', type: 'button', props: { label: 'API', href: '#api', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'nav-status', type: 'button', props: { label: 'Status', href: '#status', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'cta-deploy', type: 'button', props: { label: '▸ Deploy', href: '#deploy', variant: 'primary', size: 'small', radius: 'md', background: '#22c55e', color: '#052e16' } },
  ],
  'navbar-13': [
    { id: 'logo-13', type: 'heading', props: { content: 'Solstice', level: 'h2', fontSize: '18px', fontWeight: '800', color: '#0f172a' } },
    { id: 'nav-home', type: 'button', props: { label: '⌂', href: '#hero', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
    { id: 'nav-explore', type: 'button', props: { label: '✦', href: '#explore', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
    { id: 'nav-cart', type: 'button', props: { label: '◉', href: '#cart', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
    { id: 'nav-user', type: 'button', props: { label: '☺', href: '#user', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
    { id: 'cta-join', type: 'button', props: { label: 'Join →', href: '#join', variant: 'primary', size: 'small', radius: 'full', background: '#f97316', color: '#ffffff' } },
  ],
  'navbar-14': [
    { id: 'logo-14', type: 'heading', props: { content: 'MAISON DOUBLE', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#1e3a8a', letterSpacing: '0.08em' } },
    { id: 'nav-profile', type: 'button', props: { label: 'Profil', href: '#profil', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-layanan', type: 'button', props: { label: 'Layanan', href: '#layanan', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-berita', type: 'button', props: { label: 'Berita', href: '#berita', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-kontak', type: 'button', props: { label: 'Kontak', href: '#kontak', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'cta-daftar', type: 'button', props: { label: 'Pendaftaran →', href: '#daftar', variant: 'primary', size: 'small', radius: 'md', background: '#1e40af', color: '#ffffff' } },
  ],
  'navbar-15': [
    { id: 'logo-15', type: 'heading', props: { content: 'iris*', level: 'h2', fontSize: '24px', fontWeight: '900', color: '#0f172a' } },
    { id: 'nav-work', type: 'button', props: { label: 'Work', href: '#work', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-services', type: 'button', props: { label: 'Services', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-about', type: 'button', props: { label: 'About', href: '#about', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'nav-contact', type: 'button', props: { label: 'Contact', href: '#contact', variant: 'ghost', size: 'small', background: 'transparent', color: '#334155' } },
    { id: 'cta-start', type: 'button', props: { label: 'Start Project', href: '#start', variant: 'primary', size: 'medium', radius: 'full', background: '#7c3aed', color: '#ffffff' } },
  ],
  'navbar-16': [
    { id: 'logo-16', type: 'heading', props: { content: 'GOLDLEAF', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#78350f', letterSpacing: '0.25em' } },
    { id: 'nav-heritage', type: 'button', props: { label: 'Heritage', href: '#heritage', variant: 'ghost', size: 'small', background: 'transparent', color: '#92400e' } },
    { id: 'nav-collections', type: 'button', props: { label: 'Collections', href: '#collections', variant: 'ghost', size: 'small', background: 'transparent', color: '#92400e' } },
    { id: 'nav-boutiques', type: 'button', props: { label: 'Boutiques', href: '#boutiques', variant: 'ghost', size: 'small', background: 'transparent', color: '#92400e' } },
    { id: 'cta-appoint', type: 'button', props: { label: '✦ Book Appointment', href: '#book', variant: 'primary', size: 'small', radius: 'full', background: '#b45309', color: '#fffbeb' } },
  ],
  'navbar-17': [
    { id: 'logo-17', type: 'heading', props: { content: 'pulse', level: 'h2', fontSize: '22px', fontWeight: '900', color: '#0f172a' } },
    { id: 'nav-shop', type: 'button', props: { label: 'Shop', href: '#shop', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'nav-brands', type: 'button', props: { label: 'Brands', href: '#brands', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'nav-sale', type: 'button', props: { label: 'Sale %', href: '#sale', variant: 'ghost', size: 'small', background: 'transparent', color: '#dc2626' } },
    { id: 'cta-cart', type: 'button', props: { label: '🛒 Cart', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#0f172a', color: '#ffffff' } },
  ],
  'navbar-18': [
    { id: 'logo-18', type: 'heading', props: { content: 'TRANSGO', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.1em' } },
    { id: 'nav-home', type: 'button', props: { label: 'Home', href: '#hero', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'nav-fleet', type: 'button', props: { label: 'Fleet', href: '#fleet', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'nav-coverage', type: 'button', props: { label: 'Coverage', href: '#coverage', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'nav-contact', type: 'button', props: { label: 'Contact', href: '#contact', variant: 'ghost', size: 'small', background: 'transparent', color: '#cbd5e1' } },
    { id: 'cta-track', type: 'button', props: { label: 'Track Shipment →', href: '#tracking', variant: 'primary', size: 'small', radius: 'full', background: '#f97316', color: '#ffffff' } },
  ],
  'navbar-19': [
    { id: 'logo-19', type: 'heading', props: { content: 'kioso!', level: 'h2', fontSize: '26px', fontWeight: '900', color: '#0f172a' } },
    { id: 'nav-menu', type: 'button', props: { label: 'Menu', href: '#menu', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'nav-promo', type: 'button', props: { label: 'Promo', href: '#promo', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'nav-outlets', type: 'button', props: { label: 'Outlets', href: '#outlets', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'cta-order', type: 'button', props: { label: 'Order Yum! 🍔', href: '#order', variant: 'primary', size: 'small', radius: 'full', background: '#ec4899', color: '#ffffff' } },
  ],
  'navbar-20': [
    { id: 'logo-20', type: 'heading', props: { content: 'AETHER', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.25em' } },
    { id: 'nav-platform', type: 'button', props: { label: 'Platform', href: '#platform', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-solutions', type: 'button', props: { label: 'Solutions', href: '#solutions', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'nav-enterprise', type: 'button', props: { label: 'Enterprise', href: '#enterprise', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
    { id: 'cta-trial', type: 'button', props: { label: 'Start Trial ✦', href: '#trial', variant: 'primary', size: 'small', radius: 'full', background: '#6366f1', color: '#ffffff' } },
  ],

  // === HERO LAYOUTS ===
  'hero-01': [
    { id: 'badge-1', type: 'badge', props: { content: '✦ Introducing Aurora 3.0', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'heading-1', type: 'heading', props: { content: 'Build websites that feel like magic', level: 'h1', fontSize: '56px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Drag, drop, publish. Aurora gives your team a premium canvas with zero code.', fontSize: '18px', color: '#64748b', align: 'center', margin: '0 0 28px 0' } },
    { id: 'btn-primary', type: 'button', props: { label: 'Start Building Free →', href: '#start', variant: 'primary', size: 'large', radius: 'full', background: '#4f46e5', color: '#ffffff' } },
    { id: 'btn-ghost', type: 'button', props: { label: '▶ Watch Demo', href: '#demo', variant: 'ghost', size: 'large', background: 'transparent', color: '#334155' } },
  ],
  'hero-02': [
    { id: 'badge-2', type: 'badge', props: { content: 'EST. 2026 — JAKARTA • PARIS', background: '#1c1917', color: '#e7c873' } },
    { id: 'heading-2', type: 'heading', props: { content: 'Timeless elegance, crafted for the few', level: 'h1', fontSize: '60px', fontWeight: '700', color: '#fafaf9', align: 'center', margin: '0 0 18px 0' } },
    { id: 'text-2', type: 'text', props: { content: 'Private collections, bespoke service, beyond the ordinary.', fontSize: '18px', color: '#a8a29e', align: 'center', margin: '0 0 30px 0' } },
    { id: 'btn-gold', type: 'button', props: { label: 'Reserve Private View →', href: '#reserve', variant: 'primary', size: 'large', radius: 'full', background: '#c9a227', color: '#0c0a09' } },
  ],
  'hero-03': [
    { id: 'badge-3', type: 'badge', props: { content: '🚚 500+ Armada Aktif', background: '#fff7ed', color: '#ea580c' } },
    { id: 'heading-3', type: 'heading', props: { content: 'Moving businesses forward, across Indonesia', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-3', type: 'text', props: { content: 'Armada darat, laut, udara dengan tracking real-time. On-time 99.8%.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 26px 0' } },
    { id: 'btn-quote', type: 'button', props: { label: 'Request a Quote →', href: '#contact', variant: 'primary', size: 'large', radius: 'lg', background: '#f97316', color: '#ffffff' } },
    { id: 'btn-track', type: 'button', props: { label: 'Track Shipment', href: '#tracking', variant: 'outline', size: 'large', radius: 'lg', background: '#f97316', color: '#f97316' } },
    { id: 'img-3', type: 'image', props: { src: '', alt: 'Fleet', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '24px' } },
  ],
  'hero-04': [
    { id: 'badge-4', type: 'badge', props: { content: '★ PORTFOLIO 2026', background: '#000000', color: '#facc15' } },
    { id: 'heading-4', type: 'heading', props: { content: 'WE MAKE LOUD WEBSITES', level: 'h1', fontSize: '64px', fontWeight: '900', color: '#000000', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-4', type: 'text', props: { content: 'Studio desain anti-template. Berisik, berani, tak terlupakan.', fontSize: '17px', color: '#000000', align: 'left', margin: '0 0 26px 0' } },
    { id: 'btn-hire', type: 'button', props: { label: 'HIRE US ★', href: '#hire', variant: 'primary', size: 'large', radius: 'none', background: '#000000', color: '#facc15' } },
    { id: 'btn-work', type: 'button', props: { label: 'SEE WORK', href: '#work', variant: 'outline', size: 'large', radius: 'none', background: '#000000', color: '#000000' } },
  ],
  'hero-05': [
    { id: 'heading-5', type: 'heading', props: { content: 'Breathe. You have arrived.', level: 'h1', fontSize: '60px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-5', type: 'text', props: { content: 'A private sanctuary in Ubud — slow mornings, jungle views.', fontSize: '17px', color: '#78716c', align: 'center', margin: '0 0 30px 0' } },
    { id: 'btn-reserve', type: 'button', props: { label: 'Reserve Your Stay —', href: '#reserve', variant: 'ghost', size: 'large', background: 'transparent', color: '#1c1917' } },
  ],
  'hero-06': [
    { id: 'badge-6', type: 'badge', props: { content: '● MAINNET LIVE', background: '#1e1b4b', color: '#a5b4fc' } },
    { id: 'heading-6', type: 'heading', props: { content: 'Enter the Nebula of play', level: 'h1', fontSize: '58px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-6', type: 'text', props: { content: '128,400 explorers already inside. Missions & rewards.', fontSize: '17px', color: '#a5b4fc', align: 'center', margin: '0 0 28px 0' } },
    { id: 'btn-launch', type: 'button', props: { label: 'Launch App ✦', href: '#app', variant: 'primary', size: 'large', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
    { id: 'btn-explore', type: 'button', props: { label: 'Explore Missions', href: '#missions', variant: 'outline', size: 'large', radius: 'full', background: '#8b5cf6', color: '#c4b5fd' } },
  ],
  'hero-07': [
    { id: 'heading-7', type: 'heading', props: { content: 'Ship to production in one command', level: 'h1', fontSize: '48px', fontWeight: '800', color: '#e2e8f0', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-7', type: 'text', props: { content: 'Edge deploys, instant rollbacks, observability built-in.', fontSize: '16px', color: '#94a3b8', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-deploy', type: 'button', props: { label: '▸ Deploy Now', href: '#deploy', variant: 'primary', size: 'large', radius: 'md', background: '#22c55e', color: '#052e16' } },
    { id: 'btn-docs', type: 'button', props: { label: 'Read Docs', href: '#docs', variant: 'ghost', size: 'large', background: 'transparent', color: '#94a3b8' } },
  ],
  'hero-08': [
    { id: 'badge-8', type: 'badge', props: { content: '🌸 Spring Collection 2026', background: '#fce7f3', color: '#be185d' } },
    { id: 'heading-8', type: 'heading', props: { content: 'Where every moment blooms', level: 'h1', fontSize: '58px', fontWeight: '700', color: '#831843', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-8', type: 'text', props: { content: 'Bridal, events, and intimate celebrations styled with love.', fontSize: '17px', color: '#9d7b8c', align: 'center', margin: '0 0 28px 0' } },
    { id: 'btn-book', type: 'button', props: { label: 'Book Consultation ♡', href: '#book', variant: 'primary', size: 'large', radius: 'full', background: '#db2777', color: '#ffffff' } },
    { id: 'img-8', type: 'image', props: { src: '', alt: 'Sakura', width: '100%', height: '380px', objectFit: 'cover', borderRadius: '200px 200px 24px 24px' } },
  ],
  'hero-09': [
    { id: 'badge-9', type: 'badge', props: { content: '✦ SINCE 1987', background: '#fef3c7', color: '#92400e' } },
    { id: 'heading-9', type: 'heading', props: { content: 'A legacy cast in gold', level: 'h1', fontSize: '60px', fontWeight: '700', color: '#451a03', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-9', type: 'text', props: { content: 'Three generations of craftsmanship — heritage boutiques.', fontSize: '17px', color: '#92600e', align: 'center', margin: '0 0 28px 0' } },
    { id: 'btn-visit', type: 'button', props: { label: '✦ Visit Boutique', href: '#visit', variant: 'primary', size: 'large', radius: 'full', background: '#b45309', color: '#fffbeb' } },
    { id: 'btn-story', type: 'button', props: { label: 'Our Heritage', href: '#heritage', variant: 'ghost', size: 'large', background: 'transparent', color: '#92400e' } },
  ],
  'hero-10': [
    { id: 'badge-10', type: 'badge', props: { content: '🔥 12.480 produk terjual hari ini', background: '#fef2f2', color: '#dc2626' } },
    { id: 'heading-10', type: 'heading', props: { content: 'Find anything, fast', level: 'h1', fontSize: '56px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-10', type: 'text', props: { content: 'Search 2M+ products from 40,000 trusted sellers.', fontSize: '17px', color: '#64748b', align: 'center', margin: '0 0 26px 0' } },
    { id: 'btn-sell', type: 'button', props: { label: 'Start Selling', href: '#sell', variant: 'ghost', size: 'medium', background: 'transparent', color: '#4f46e5' } },
  ],
  'hero-11': [
    { id: 'badge-11', type: 'badge', props: { content: '✦ New: Iris AI Canvas', background: '#ffffff', color: '#7c3aed' } },
    { id: 'heading-11', type: 'heading', props: { content: 'Design at the speed of thought', level: 'h1', fontSize: '60px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-11', type: 'text', props: { content: 'Iris turns rough ideas into polished interfaces.', fontSize: '18px', color: '#ddd6fe', align: 'center', margin: '0 0 28px 0' } },
    { id: 'btn-try', type: 'button', props: { label: 'Try Iris Free ✦', href: '#try', variant: 'primary', size: 'large', radius: 'full', background: '#ffffff', color: '#6d28d9' } },
  ],
  'hero-12': [
    { id: 'badge-12', type: 'badge', props: { content: '◆ SOC2 • ISO 27001 • 99.99%', background: '#0f172a', color: '#67e8f9' } },
    { id: 'heading-12', type: 'heading', props: { content: 'Infrastructure that never sleeps', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-12', type: 'text', props: { content: 'Global edge network across 40 regions.', fontSize: '17px', color: '#94a3b8', align: 'left', margin: '0 0 26px 0' } },
    { id: 'btn-trial', type: 'button', props: { label: 'Start Free Trial →', href: '#trial', variant: 'primary', size: 'large', radius: 'lg', background: '#ffffff', color: '#0f172a' } },
    { id: 'img-12', type: 'image', props: { src: '', alt: 'Dashboard', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px' } },
  ],
  'hero-13': [
    { id: 'badge-13', type: 'badge', props: { content: '🎉 Promo: Buy 1 Get 1 Weekend!', background: '#fce7f3', color: '#db2777' } },
    { id: 'heading-13', type: 'heading', props: { content: 'Yummy food, happy tummy!', level: 'h1', fontSize: '56px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-13', type: 'text', props: { content: 'Fresh burgers, shakes & fries — hot in 20 minutes.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-order', type: 'button', props: { label: 'Order Now 🍔', href: '#order', variant: 'primary', size: 'large', radius: 'full', background: '#ec4899', color: '#ffffff' } },
    { id: 'img-13', type: 'image', props: { src: '', alt: 'Food', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '32px' } },
  ],
  'hero-14': [
    { id: 'badge-14', type: 'badge', props: { content: '✓ Terakreditasi A • Sejak 1998', background: '#dbeafe', color: '#1e40af' } },
    { id: 'heading-14', type: 'heading', props: { content: 'Membangun generasi unggul Indonesia', level: 'h1', fontSize: '52px', fontWeight: '900', color: '#1e3a8a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-14', type: 'text', props: { content: '28 prodi, 15.000+ alumni, kampus internasional.', fontSize: '17px', color: '#475569', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-daftar', type: 'button', props: { label: 'Daftar Sekarang →', href: '#daftar', variant: 'primary', size: 'large', radius: 'md', background: '#1e40af', color: '#ffffff' } },
    { id: 'img-14', type: 'image', props: { src: '', alt: 'Campus', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '20px' } },
  ],
  'hero-15': [
    { id: 'badge-15', type: 'badge', props: { content: 'COVER STORY — AUTUMN 2026', background: '#1c1917', color: '#fafaf9' } },
    { id: 'heading-15', type: 'heading', props: { content: 'The quiet rebels reshaping Jakarta', level: 'h1', fontSize: '64px', fontWeight: '700', color: '#1c1917', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-15', type: 'text', props: { content: 'Studios, kitchens & workshops choosing craft over scale.', fontSize: '18px', color: '#57534e', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-read', type: 'button', props: { label: 'Read the Story →', href: '#story', variant: 'primary', size: 'large', radius: 'none', background: '#1c1917', color: '#fafaf9' } },
    { id: 'img-15', type: 'image', props: { src: '', alt: 'Cover', width: '100%', height: '480px', objectFit: 'cover', borderRadius: '0' } },
  ],
  'hero-16': [
    { id: 'badge-16', type: 'badge', props: { content: '🌿 100% Natural & Vegan', background: '#dcfce7', color: '#15803d' } },
    { id: 'heading-16', type: 'heading', props: { content: 'Nature, bottled for your skin', level: 'h1', fontSize: '54px', fontWeight: '900', color: '#052e16', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-16', type: 'text', props: { content: 'Serum, oils & rituals from botanicals.', fontSize: '17px', color: '#4d7c0f', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-shop', type: 'button', props: { label: 'Shop Bestsellers →', href: '#shop', variant: 'primary', size: 'large', radius: 'full', background: '#16a34a', color: '#ffffff' } },
    { id: 'img-16', type: 'image', props: { src: '', alt: 'Product', width: '100%', height: '440px', objectFit: 'cover', borderRadius: '24px' } },
  ],
  'hero-17': [
    { id: 'badge-17', type: 'badge', props: { content: '🏁 NEW GT SERIES 2026', background: '#fef2f2', color: '#dc2626' } },
    { id: 'heading-17', type: 'heading', props: { content: 'Born to outrun', level: 'h1', fontSize: '72px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-17', type: 'text', props: { content: '0–100 in 2.8s. 680HP hybrid. Fastest Veloce ever.', fontSize: '18px', color: '#fecaca', align: 'left', margin: '0 0 26px 0' } },
    { id: 'btn-test', type: 'button', props: { label: 'Book Test Drive →', href: '#test', variant: 'primary', size: 'large', radius: 'md', background: '#ef4444', color: '#ffffff' } },
    { id: 'img-17', type: 'image', props: { src: '', alt: 'Car', width: '100%', height: '440px', objectFit: 'cover', borderRadius: '16px' } },
  ],
  'hero-18': [
    { id: 'badge-18', type: 'badge', props: { content: '★★★★★ 4.9 — 2M+ downloads', background: '#fff7ed', color: '#ea580c' } },
    { id: 'heading-18', type: 'heading', props: { content: 'Banking that fits in your pocket', level: 'h1', fontSize: '54px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-18', type: 'text', props: { content: 'Send money, save smarter, track every rupiah.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-ios', type: 'button', props: { label: ' App Store', href: '#ios', variant: 'primary', size: 'large', radius: 'lg', background: '#0f172a', color: '#ffffff' } },
    { id: 'btn-android', type: 'button', props: { label: '▶ Google Play', href: '#android', variant: 'outline', size: 'large', radius: 'lg', background: '#0f172a', color: '#0f172a' } },
    { id: 'img-18', type: 'image', props: { src: '', alt: 'App', width: '280px', height: '560px', objectFit: 'cover', borderRadius: '36px' } },
  ],
  'hero-19': [
    { id: 'badge-19', type: 'badge', props: { content: '● Available for Q3 2026', background: '#ecfdf5', color: '#059669' } },
    { id: 'heading-19', type: 'heading', props: { content: 'We craft brands people remember', level: 'h1', fontSize: '58px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-19', type: 'text', props: { content: 'Strategy, identity & web. 120+ launches, 14 awards.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-work', type: 'button', props: { label: 'See Our Work →', href: '#work', variant: 'primary', size: 'large', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    { id: 'img-19', type: 'image', props: { src: '', alt: 'Work', width: '100%', height: '300px', objectFit: 'cover', borderRadius: '20px' } },
  ],
  'hero-20': [
    { id: 'badge-20', type: 'badge', props: { content: '✦ AETHER 4.2 — NOW LIVE', background: '#1e1b4b', color: '#c4b5fd' } },
    { id: 'heading-20', type: 'heading', props: { content: 'One platform. Infinite scale.', level: 'h1', fontSize: '64px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-20', type: 'text', props: { content: 'OS for ambitious teams — faster, safer, beautiful.', fontSize: '18px', color: '#a5b4fc', align: 'center', margin: '0 0 28px 0' } },
    { id: 'btn-trial', type: 'button', props: { label: 'Start Trial ✦', href: '#trial', variant: 'primary', size: 'large', radius: 'full', background: '#6366f1', color: '#ffffff' } },
    { id: 'btn-sales', type: 'button', props: { label: 'Talk to Sales', href: '#sales', variant: 'ghost', size: 'large', background: 'transparent', color: '#e2e8f0' } },
  ],

  // === ABOUT LAYOUTS ===
  'about-01': [
    { id: 'badge-1', type: 'badge', props: { content: '✦ Our Story', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'heading-1', type: 'heading', props: { content: 'We design brands the world remembers', level: 'h2', fontSize: '44px', fontWeight: '800', color: '#0f172a', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Since 2018, Lumière has crafted identities for 120+ ambitious teams.', fontSize: '16px', color: '#64748b', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-work', type: 'button', props: { label: 'See Our Work →', href: '#work', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    { id: 'img-1', type: 'image', props: { src: '', alt: 'Studio', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '24px' } },
  ],
  'about-02': [
    { id: 'badge-2', type: 'badge', props: { content: 'MAISON — SINCE 1998', background: '#1c1917', color: '#e7c873' } },
    { id: 'heading-2', type: 'heading', props: { content: 'A legacy of quiet luxury', level: 'h2', fontSize: '46px', fontWeight: '700', color: '#fafaf9', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-2', type: 'text', props: { content: 'Three generations of artisans. Bespoke service beyond the ordinary.', fontSize: '16px', color: '#a8a29e', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-atelier', type: 'button', props: { label: 'Visit Atelier →', href: '#atelier', variant: 'outline', size: 'medium', radius: 'full', background: '#c9a227', color: '#c9a227' } },
    { id: 'img-2', type: 'image', props: { src: '', alt: 'Atelier', width: '100%', height: '440px', objectFit: 'cover', borderRadius: '16px' } },
  ],
  'about-03': [
    { id: 'badge-3', type: 'badge', props: { content: '✦ Who We Are', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'heading-3', type: 'heading', props: { content: 'A team obsessed with craft', level: 'h2', fontSize: '42px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-3', type: 'text', props: { content: '40-person studio shipping premium websites since 2020.', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-team', type: 'button', props: { label: 'Meet the Team →', href: '#team', variant: 'primary', size: 'medium', radius: 'full', background: '#6366f1', color: '#ffffff' } },
  ],
  'about-04': [
    { id: 'badge-4', type: 'badge', props: { content: '🌿 Our Impact', background: '#dcfce7', color: '#15803d' } },
    { id: 'heading-4', type: 'heading', props: { content: 'From farm to door, carbon-neutral', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#052e16', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-4', type: 'text', props: { content: '200+ organic farms. Every order plants a tree.', fontSize: '16px', color: '#4d7c0f', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-impact', type: 'button', props: { label: 'Our Sustainability →', href: '#impact', variant: 'primary', size: 'medium', radius: 'full', background: '#16a34a', color: '#ffffff' } },
    { id: 'img-4', type: 'image', props: { src: '', alt: 'Farm', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '24px' } },
  ],

  'about-05': [
    { id: 'badge-5', type: 'badge', props: { content: '🏁 Racing DNA', background: '#fef2f2', color: '#dc2626' } },
    { id: 'heading-5', type: 'heading', props: { content: 'Built in the garage, proven on track', level: 'h2', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-5', type: 'text', props: { content: '3 mechanics, one obsession: speed.', fontSize: '16px', color: '#fecaca', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-garage', type: 'button', props: { label: 'Tour the Garage →', href: '#garage', variant: 'primary', size: 'medium', radius: 'md', background: '#ef4444', color: '#ffffff' } },
    { id: 'img-5', type: 'image', props: { src: '', alt: 'Garage', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '16px' } },
  ],
  'about-06': [
    { id: 'badge-6', type: 'badge', props: { content: '🌸 Our Philosophy', background: '#fce7f3', color: '#be185d' } },
    { id: 'heading-6', type: 'heading', props: { content: 'Beauty in every detail', level: 'h2', fontSize: '44px', fontWeight: '700', color: '#831843', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-6', type: 'text', props: { content: 'A decade styling weddings where every petal has its place.', fontSize: '16px', color: '#9d7b8c', align: 'center', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-story', type: 'button', props: { label: 'Our Story', href: '#story', variant: 'primary', size: 'medium', radius: 'full', background: '#db2777', color: '#ffffff' } },
    { id: 'img-6', type: 'image', props: { src: '', alt: 'Atelier', width: '100%', height: '380px', objectFit: 'cover', borderRadius: '200px 200px 24px 24px' } },
  ],
  'about-07': [
    { id: 'badge-7', type: 'badge', props: { content: '◆ SOC2 • ISO 27001', background: '#0f172a', color: '#67e8f9' } },
    { id: 'heading-7', type: 'heading', props: { content: 'Trusted by teams that cannot fail', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-7', type: 'text', props: { content: 'Banks, hospitals & governments across 40 regions.', fontSize: '16px', color: '#94a3b8', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-compliance', type: 'button', props: { label: 'Security Overview →', href: '#security', variant: 'primary', size: 'medium', radius: 'lg', background: '#ffffff', color: '#0f172a' } },
    { id: 'img-7', type: 'image', props: { src: '', alt: 'Ops', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px' } },
  ],
  'about-08': [
    { id: 'badge-8', type: 'badge', props: { content: '★ MANIFESTO', background: '#000000', color: '#facc15' } },
    { id: 'heading-8', type: 'heading', props: { content: 'TEMPLATES ARE BORING', level: 'h2', fontSize: '52px', fontWeight: '900', color: '#000000', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-8', type: 'text', props: { content: '12-person studio making loud websites since 2019.', fontSize: '16px', color: '#000000', align: 'left', lineHeight: '1.7', margin: '0 0 24px 0' } },
    { id: 'cta-manifesto', type: 'button', props: { label: 'READ MANIFESTO', href: '#manifesto', variant: 'primary', size: 'medium', radius: 'none', background: '#000000', color: '#facc15' } },
  ],
  'about-09': [
    { id: 'heading-9', type: 'heading', props: { content: 'Stillness, by design', level: 'h2', fontSize: '46px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-9', type: 'text', props: { content: 'A sanctuary for those seeking slowness.', fontSize: '16px', color: '#78716c', align: 'center', lineHeight: '1.9', margin: '0 0 28px 0' } },
    { id: 'cta-visit', type: 'button', props: { label: 'Plan Your Visit', href: '#visit', variant: 'ghost', size: 'medium', background: 'transparent', color: '#1c1917' } },
    { id: 'img-9', type: 'image', props: { src: '', alt: 'Sanctuary', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '24px' } },
  ],
  'about-10': [
    { id: 'badge-10', type: 'badge', props: { content: '● OUR UNIVERSE', background: '#1e1b4b', color: '#a5b4fc' } },
    { id: 'heading-10', type: 'heading', props: { content: 'Built by explorers', level: 'h2', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-10', type: 'text', props: { content: '128,400 explorers. Missions, guilds & rewards.', fontSize: '16px', color: '#a5b4fc', align: 'center', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-join', type: 'button', props: { label: 'Join Universe', href: '#join', variant: 'primary', size: 'medium', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
  ],
  'about-11': [
    { id: 'heading-11', type: 'heading', props: { content: 'Built by developers, for developers', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#e2e8f0', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-11', type: 'text', props: { content: 'Side-project to the cloud 40,000 teams deploy on.', fontSize: '15px', color: '#94a3b8', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-github', type: 'button', props: { label: 'Star on GitHub', href: '#github', variant: 'primary', size: 'medium', radius: 'md', background: '#22c55e', color: '#052e16' } },
  ],
  'about-12': [
    { id: 'badge-12', type: 'badge', props: { content: '✦ The Iris Story', background: '#ffffff', color: '#7c3aed' } },
    { id: 'heading-12', type: 'heading', props: { content: 'Rough ideas, polished in seconds', level: 'h2', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-12', type: 'text', props: { content: '40,000 designers turn sketches into interfaces daily.', fontSize: '16px', color: '#ddd6fe', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-manifesto', type: 'button', props: { label: 'Read Manifesto', href: '#manifesto', variant: 'primary', size: 'medium', radius: 'full', background: '#ffffff', color: '#6d28d9' } },
    { id: 'img-12', type: 'image', props: { src: '', alt: 'Team', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '20px' } },
  ],
  'about-13': [
    { id: 'badge-13', type: 'badge', props: { content: '🎉 Our Kitchen', background: '#fce7f3', color: '#db2777' } },
    { id: 'heading-13', type: 'heading', props: { content: 'Serious about silly-good food', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-13', type: 'text', props: { content: 'Fresh buns hourly, shakes churned to order.', fontSize: '16px', color: '#64748b', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-menu', type: 'button', props: { label: 'See Menu', href: '#menu', variant: 'primary', size: 'medium', radius: 'full', background: '#ec4899', color: '#ffffff' } },
    { id: 'img-13', type: 'image', props: { src: '', alt: 'Kitchen', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '28px' } },
  ],
  'about-14': [
    { id: 'badge-14', type: 'badge', props: { content: '✓ Sejak 1998', background: '#dbeafe', color: '#1e40af' } },
    { id: 'heading-14', type: 'heading', props: { content: '28 tahun mencetak generasi unggul', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#1e3a8a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-14', type: 'text', props: { content: '15.000+ alumni di 20 negara.', fontSize: '16px', color: '#475569', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-history', type: 'button', props: { label: 'Sejarah Kami →', href: '#sejarah', variant: 'primary', size: 'medium', radius: 'md', background: '#1e40af', color: '#ffffff' } },
    { id: 'img-14', type: 'image', props: { src: '', alt: 'Campus', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '20px' } },
  ],
  'about-15': [
    { id: 'badge-15', type: 'badge', props: { content: 'ABOUT THE NEWSROOM', background: '#1c1917', color: '#fafaf9' } },
    { id: 'heading-15', type: 'heading', props: { content: 'Independent since day one', level: 'h2', fontSize: '48px', fontWeight: '700', color: '#1c1917', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-15', type: 'text', props: { content: '24 journalists chasing stories that matter.', fontSize: '17px', color: '#57534e', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-newsroom', type: 'button', props: { label: 'Inside the Newsroom →', href: '#newsroom', variant: 'primary', size: 'medium', radius: 'none', background: '#1c1917', color: '#fafaf9' } },
    { id: 'img-15', type: 'image', props: { src: '', alt: 'Newsroom', width: '100%', height: '440px', objectFit: 'cover', borderRadius: '0' } },
  ],
  'about-16': [
    { id: 'badge-16', type: 'badge', props: { content: '🔥 Our Scale', background: '#fef2f2', color: '#dc2626' } },
    { id: 'heading-16', type: 'heading', props: { content: 'Powering 40,000 sellers', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-16', type: 'text', props: { content: 'Same-day logistics and instant payouts.', fontSize: '16px', color: '#64748b', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-sellers', type: 'button', props: { label: 'Seller Stories →', href: '#sellers', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    { id: 'img-16', type: 'image', props: { src: '', alt: 'Sellers', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '20px' } },
  ],
  'about-17': [
    { id: 'badge-17', type: 'badge', props: { content: '🚚 Since 2010', background: '#fff7ed', color: '#ea580c' } },
    { id: 'heading-17', type: 'heading', props: { content: 'From one truck to national network', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-17', type: 'text', props: { content: 'Land, sea & air across 50+ cities.', fontSize: '16px', color: '#64748b', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-network', type: 'button', props: { label: 'Our Network →', href: '#network', variant: 'primary', size: 'medium', radius: 'lg', background: '#f97316', color: '#ffffff' } },
    { id: 'img-17', type: 'image', props: { src: '', alt: 'Fleet', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '24px' } },
  ],
  'about-18': [
    { id: 'badge-18', type: 'badge', props: { content: '★★★★★ 4.9', background: '#fff7ed', color: '#ea580c' } },
    { id: 'heading-18', type: 'heading', props: { content: '2 million pockets and counting', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-18', type: 'text', props: { content: 'Why is banking so hard? Now it fits in your pocket.', fontSize: '16px', color: '#64748b', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-app', type: 'button', props: { label: 'Get the App', href: '#download', variant: 'primary', size: 'medium', radius: 'lg', background: '#0f172a', color: '#ffffff' } },
    { id: 'img-18', type: 'image', props: { src: '', alt: 'App', width: '280px', height: '520px', objectFit: 'cover', borderRadius: '36px' } },
  ],
  'about-19': [
    { id: 'badge-19', type: 'badge', props: { content: '✦ SINCE 1987', background: '#fef3c7', color: '#92400e' } },
    { id: 'heading-19', type: 'heading', props: { content: 'Three generations, one standard', level: 'h2', fontSize: '46px', fontWeight: '700', color: '#451a03', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-19', type: 'text', props: { content: '12 boutiques worldwide, finished by hand.', fontSize: '16px', color: '#92600e', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-heritage', type: 'button', props: { label: 'Our Heritage', href: '#heritage', variant: 'primary', size: 'medium', radius: 'full', background: '#b45309', color: '#fffbeb' } },
    { id: 'img-19', type: 'image', props: { src: '', alt: 'Boutique', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '20px' } },
  ],
  'about-20': [
    { id: 'badge-20', type: 'badge', props: { content: '✦ THE AETHER STORY', background: '#1e1b4b', color: '#c4b5fd' } },
    { id: 'heading-20', type: 'heading', props: { content: 'The OS for ambitious teams', level: 'h2', fontSize: '46px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-20', type: 'text', props: { content: '8,000 companies run on Aether since 2021.', fontSize: '16px', color: '#a5b4fc', align: 'left', lineHeight: '1.8', margin: '0 0 24px 0' } },
    { id: 'cta-journey', type: 'button', props: { label: 'Our Journey', href: '#journey', variant: 'primary', size: 'medium', radius: 'full', background: '#6366f1', color: '#ffffff' } },
    { id: 'img-20', type: 'image', props: { src: '', alt: 'HQ', width: '100%', height: '420px', objectFit: 'cover', borderRadius: '20px' } },
  ],
  'services-01': [
    { id: 'svc1-heading', type: 'heading', props: { content: 'Layanan Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'svc1-subtext', type: 'text', props: { content: 'Solusi terbaik yang kami sediakan untuk pertumbuhan bisnis Anda', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'svc1-card-1', type: 'card', props: { variant: 'feature', background: '#f8fafc', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'svc1-c1-icon', type: 'icon', props: { icon: 'FaRocket', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'svc1-c1-title', type: 'heading', props: { content: 'Konsultasi Bisnis', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'svc1-c1-desc', type: 'text', props: { content: 'Panduan strategis dari para ahli berpengalaman untuk membantu bisnis Anda berkembang pesat.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'svc1-card-2', type: 'card', props: { variant: 'feature', background: '#f8fafc', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'svc1-c2-icon', type: 'icon', props: { icon: 'FaCogs', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'svc1-c2-title', type: 'heading', props: { content: 'Implementasi Sistem', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'svc1-c2-desc', type: 'text', props: { content: 'Integrasi teknologi mutakhir yang seamless dan terukur sesuai kebutuhan unik Anda.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'svc1-card-3', type: 'card', props: { variant: 'feature', background: '#f8fafc', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'svc1-c3-icon', type: 'icon', props: { icon: 'FaHeadset', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'svc1-c3-title', type: 'heading', props: { content: 'Dukungan 24/7', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'svc1-c3-desc', type: 'text', props: { content: 'Tim dukungan teknis siap membantu Anda kapanpun dan dimanapun Anda membutuhkan.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
  ],
  'services-02': [
    { id: 'svc2-heading', type: 'heading', props: { content: 'Layanan Unggulan', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'svc2-subtext', type: 'text', props: { content: 'Kami menyediakan layanan terbaik untuk kebutuhan bisnis Anda', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'svc2-card-1', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'svc2-c1-icon', type: 'icon', props: { icon: 'FaChartLine', size: '36px', color: '#4f46e5', align: 'center' } },
      { id: 'svc2-c1-title', type: 'heading', props: { content: 'Analitik & Laporan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc2-c1-desc', type: 'text', props: { content: 'Dashboard analitik real-time untuk memantau kinerja bisnis secara komprehensif.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'svc2-card-2', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'svc2-c2-icon', type: 'icon', props: { icon: 'FaCloud', size: '36px', color: '#4f46e5', align: 'center' } },
      { id: 'svc2-c2-title', type: 'heading', props: { content: 'Cloud Solution', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc2-c2-desc', type: 'text', props: { content: 'Infrastruktur cloud yang scalable, aman, dan berperforma tinggi untuk bisnis masa kini.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'svc2-card-3', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'svc2-c3-icon', type: 'icon', props: { icon: 'FaShieldAlt', size: '36px', color: '#4f46e5', align: 'center' } },
      { id: 'svc2-c3-title', type: 'heading', props: { content: 'Keamanan Data', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc2-c3-desc', type: 'text', props: { content: 'Proteksi data berlapis dengan enkripsi dan protokol keamanan standar industri.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
  ],
  'services-03': [
    { id: 'svc3-heading', type: 'heading', props: { content: 'Layanan Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'svc3-subtext', type: 'text', props: { content: 'Solusi profesional untuk setiap kebutuhan bisnis Anda', fontSize: '16px', color: '#e0e7ff', align: 'center', margin: '0 0 48px 0' } },
    { id: 'svc3-card-1', type: 'card', props: { variant: 'feature', background: 'rgba(255,255,255,0.15)', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)', hoverEffect: 'glow', padding: '28px' }, childrenComponents: [
      { id: 'svc3-c1-icon', type: 'icon', props: { icon: 'FaBolt', size: '36px', color: '#ffffff', align: 'center' } },
      { id: 'svc3-c1-title', type: 'heading', props: { content: 'Layanan Cepat', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc3-c1-desc', type: 'text', props: { content: 'Eksekusi layanan dengan kecepatan dan ketepatan tanpa mengorbankan kualitas terbaik.', fontSize: '14px', color: '#e0e7ff', align: 'center', margin: '0' } },
    ]},
    { id: 'svc3-card-2', type: 'card', props: { variant: 'feature', background: 'rgba(255,255,255,0.15)', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)', hoverEffect: 'glow', padding: '28px' }, childrenComponents: [
      { id: 'svc3-c2-icon', type: 'icon', props: { icon: 'FaUserTie', size: '36px', color: '#ffffff', align: 'center' } },
      { id: 'svc3-c2-title', type: 'heading', props: { content: 'Tim Profesional', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc3-c2-desc', type: 'text', props: { content: 'Tenaga ahli berpengalaman yang siap memberikan solusi terbaik bagi bisnis Anda.', fontSize: '14px', color: '#e0e7ff', align: 'center', margin: '0' } },
    ]},
    { id: 'svc3-card-3', type: 'card', props: { variant: 'feature', background: 'rgba(255,255,255,0.15)', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)', hoverEffect: 'glow', padding: '28px' }, childrenComponents: [
      { id: 'svc3-c3-icon', type: 'icon', props: { icon: 'FaStar', size: '36px', color: '#ffffff', align: 'center' } },
      { id: 'svc3-c3-title', type: 'heading', props: { content: 'Kualitas Premium', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc3-c3-desc', type: 'text', props: { content: 'Standar kualitas premium di setiap aspek layanan yang kami hadirkan untuk Anda.', fontSize: '14px', color: '#e0e7ff', align: 'center', margin: '0' } },
    ]},
  ],
  'services-04': [
    { id: 'svc4-heading', type: 'heading', props: { content: 'Layanan Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'left', margin: '0 0 12px 0' } },
    { id: 'svc4-subtext', type: 'text', props: { content: 'Layanan profesional yang telah dipercaya ribuan klien di seluruh Indonesia', fontSize: '16px', color: '#64748b', align: 'left', margin: '0 0 48px 0' } },
    { id: 'svc4-card-1', type: 'card', props: { variant: 'feature', background: '#f8fafc', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'svc4-c1-icon', type: 'icon', props: { icon: 'FaCode', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'svc4-c1-title', type: 'heading', props: { content: 'Pengembangan Software', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'svc4-c1-desc', type: 'text', props: { content: 'Pembangunan aplikasi web dan mobile custom sesuai kebutuhan bisnis Anda.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'svc4-card-2', type: 'card', props: { variant: 'feature', background: '#f8fafc', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'svc4-c2-icon', type: 'icon', props: { icon: 'FaPaintBrush', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'svc4-c2-title', type: 'heading', props: { content: 'Desain UI/UX', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'svc4-c2-desc', type: 'text', props: { content: 'Desain antarmuka yang indah, intuitif, dan berpusat pada pengalaman pengguna.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'svc4-card-3', type: 'card', props: { variant: 'feature', background: '#f8fafc', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'svc4-c3-icon', type: 'icon', props: { icon: 'FaSearchDollar', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'svc4-c3-title', type: 'heading', props: { content: 'Digital Marketing', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'svc4-c3-desc', type: 'text', props: { content: 'Strategi pemasaran digital yang terukur untuk meningkatkan pertumbuhan bisnis Anda.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
  ],
  'services-05': [
    { id: 'svc5-badge', type: 'badge', props: { content: '✓ KEUNGGULAN KAMI', background: '#dcfce7', color: '#16a34a' } },
    { id: 'svc5-heading', type: 'heading', props: { content: 'Layanan Terbaik Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'svc5-subtext', type: 'text', props: { content: 'Solusi handal dengan standar kualitas tertinggi untuk mendukung kemajuan bisnis Anda', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'svc5-card-1', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '16px', shadow: 'lg', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc5-c1-icon', type: 'icon', props: { icon: 'FaCheckCircle', size: '36px', color: '#16a34a', align: 'left' } },
      { id: 'svc5-c1-title', type: 'heading', props: { content: 'Kualitas Terjamin', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'svc5-c1-desc', type: 'text', props: { content: 'Setiap layanan melalui uji kualitas ketat demi kepuasan maksimal.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'svc5-card-2', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '16px', shadow: 'lg', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc5-c2-icon', type: 'icon', props: { icon: 'FaHeadset', size: '36px', color: '#16a34a', align: 'left' } },
      { id: 'svc5-c2-title', type: 'heading', props: { content: 'Support Responsif', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'svc5-c2-desc', type: 'text', props: { content: 'Tim support yang siap mendampingi kebutuhan Anda setiap saat.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'svc5-card-3', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '16px', shadow: 'lg', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc5-c3-icon', type: 'icon', props: { icon: 'FaShieldAlt', size: '36px', color: '#16a34a', align: 'left' } },
      { id: 'svc5-c3-title', type: 'heading', props: { content: 'Keamanan Mutlak', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'svc5-c3-desc', type: 'text', props: { content: 'Perlindungan menyeluruh atas privasi dan data transaksi Anda.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
  ],
  'services-06': [
    { id: 'svc6-badge', type: 'badge', props: { content: '🌸 KELAS KHUSUS', background: '#fce7f3', color: '#be185d' } },
    { id: 'svc6-heading', type: 'heading', props: { content: 'Layanan Eksklusif Sakura', level: 'h2', fontSize: '38px', fontWeight: '700', color: '#831843', align: 'center', margin: '0 0 12px 0' } },
    { id: 'svc6-subtext', type: 'text', props: { content: 'Dirancang dengan kelembutan dan perhatian penuh pada setiap detail estetika', fontSize: '16px', color: '#9d7b8c', align: 'center', margin: '0 0 48px 0' } },
    { id: 'svc6-card-1', type: 'card', props: { variant: 'service', background: '#fff1f2', borderRadius: '32px', shadow: 'sm', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc6-c1-icon', type: 'icon', props: { icon: 'FaHeart', size: '36px', color: '#db2777', align: 'center' } },
      { id: 'svc6-c1-title', type: 'heading', props: { content: 'Styling Pernikahan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#831843', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc6-c1-desc', type: 'text', props: { content: 'Penataan dekorasi impian dengan bunga segar pilihan terbaik.', fontSize: '14px', color: '#9d7b8c', align: 'center', margin: '0' } },
    ]},
    { id: 'svc6-card-2', type: 'card', props: { variant: 'service', background: '#fff1f2', borderRadius: '32px', shadow: 'sm', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc6-c2-icon', type: 'icon', props: { icon: 'FaSpa', size: '36px', color: '#db2777', align: 'center' } },
      { id: 'svc6-c2-title', type: 'heading', props: { content: 'Perawatan Estetika', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#831843', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc6-c2-desc', type: 'text', props: { content: 'Relaksasi menyeluruh untuk memulihkan kesegaran tubuh dan pikiran.', fontSize: '14px', color: '#9d7b8c', align: 'center', margin: '0' } },
    ]},
    { id: 'svc6-card-3', type: 'card', props: { variant: 'service', background: '#fff1f2', borderRadius: '32px', shadow: 'sm', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc6-c3-icon', type: 'icon', props: { icon: 'FaGift', size: '36px', color: '#db2777', align: 'center' } },
      { id: 'svc6-c3-title', type: 'heading', props: { content: 'Hampers & Gift Box', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#831843', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc6-c3-desc', type: 'text', props: { content: 'Paket hantaran artistik untuk momen spesial orang terkasih.', fontSize: '14px', color: '#9d7b8c', align: 'center', margin: '0' } },
    ]},
  ],
  'services-07': [
    { id: 'svc7-badge', type: 'badge', props: { content: '◆ ENTERPRISE SOLUTION', background: '#0f172a', color: '#67e8f9' } },
    { id: 'svc7-heading', type: 'heading', props: { content: 'Infrastruktur Skala Enterprise', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 12px 0' } },
    { id: 'svc7-subtext', type: 'text', props: { content: 'Performa tanpa kompromi, latensi rendah, dan ketersediaan 99.99%', fontSize: '16px', color: '#94a3b8', align: 'left', margin: '0 0 48px 0' } },
    { id: 'svc7-card-1', type: 'card', props: { variant: 'service-dark', background: '#1e293b', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'glow', padding: '32px' }, childrenComponents: [
      { id: 'svc7-c1-icon', type: 'icon', props: { icon: 'FaServer', size: '36px', color: '#67e8f9', align: 'left' } },
      { id: 'svc7-c1-title', type: 'heading', props: { content: 'Global Edge Cloud', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '16px 0 8px 0' } },
      { id: 'svc7-c1-desc', type: 'text', props: { content: 'Deploy aplikasi di 40 wilayah region edge secara instan.', fontSize: '14px', color: '#94a3b8', margin: '0' } },
    ]},
    { id: 'svc7-card-2', type: 'card', props: { variant: 'service-dark', background: '#1e293b', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'glow', padding: '32px' }, childrenComponents: [
      { id: 'svc7-c2-icon', type: 'icon', props: { icon: 'FaLock', size: '36px', color: '#67e8f9', align: 'left' } },
      { id: 'svc7-c2-title', type: 'heading', props: { content: 'Zero-Trust Security', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '16px 0 8px 0' } },
      { id: 'svc7-c2-desc', type: 'text', props: { content: 'Enkrpsi end-to-end dan kepatuhan standar SOC2 serta ISO 27001.', fontSize: '14px', color: '#94a3b8', margin: '0' } },
    ]},
    { id: 'svc7-card-3', type: 'card', props: { variant: 'service-dark', background: '#1e293b', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'glow', padding: '32px' }, childrenComponents: [
      { id: 'svc7-c3-icon', type: 'icon', props: { icon: 'FaChartBar', size: '36px', color: '#67e8f9', align: 'left' } },
      { id: 'svc7-c3-title', type: 'heading', props: { content: 'Real-time Analytics', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '16px 0 8px 0' } },
      { id: 'svc7-c3-desc', type: 'text', props: { content: 'Monitoring log dan metrik performa secara real-time detik ini juga.', fontSize: '14px', color: '#94a3b8', margin: '0' } },
    ]},
  ],
  'services-08': [
    { id: 'svc8-badge', type: 'badge', props: { content: '★ LAYANAN KAMI', background: '#000000', color: '#facc15' } },
    { id: 'svc8-heading', type: 'heading', props: { content: 'BERISIK & BERBEDA', level: 'h2', fontSize: '48px', fontWeight: '900', color: '#000000', align: 'left', margin: '0 0 12px 0' } },
    { id: 'svc8-subtext', type: 'text', props: { content: 'Layanan brutalist anti-mainstream untuk brand yang berani tampil beda', fontSize: '16px', color: '#000000', align: 'left', margin: '0 0 48px 0' } },
    { id: 'svc8-card-1', type: 'card', props: { variant: 'service-brutalist', background: '#ffffff', borderRadius: '0px', shadow: 'none', borderWidth: '3px', borderColor: '#000000', hoverEffect: 'none', padding: '32px' }, childrenComponents: [
      { id: 'svc8-c1-icon', type: 'icon', props: { icon: 'FaBolt', size: '36px', color: '#000000', align: 'left' } },
      { id: 'svc8-c1-title', type: 'heading', props: { content: 'BRUTAL BRANDING', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#000000', margin: '16px 0 8px 0' } },
      { id: 'svc8-c1-desc', type: 'text', props: { content: 'Identitas visual yang mencolok dan sulit dilupakan audiens Anda.', fontSize: '14px', color: '#000000', margin: '0' } },
    ]},
    { id: 'svc8-card-2', type: 'card', props: { variant: 'service-brutalist', background: '#ffffff', borderRadius: '0px', shadow: 'none', borderWidth: '3px', borderColor: '#000000', hoverEffect: 'none', padding: '32px' }, childrenComponents: [
      { id: 'svc8-c2-icon', type: 'icon', props: { icon: 'FaLaptopCode', size: '36px', color: '#000000', align: 'left' } },
      { id: 'svc8-c2-title', type: 'heading', props: { content: 'RAW WEB DEV', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#000000', margin: '16px 0 8px 0' } },
      { id: 'svc8-c2-desc', type: 'text', props: { content: 'Situs web performa tinggi tanpa template membosankan.', fontSize: '14px', color: '#000000', margin: '0' } },
    ]},
    { id: 'svc8-card-3', type: 'card', props: { variant: 'service-brutalist', background: '#ffffff', borderRadius: '0px', shadow: 'none', borderWidth: '3px', borderColor: '#000000', hoverEffect: 'none', padding: '32px' }, childrenComponents: [
      { id: 'svc8-c3-icon', type: 'icon', props: { icon: 'FaBullhorn', size: '36px', color: '#000000', align: 'left' } },
      { id: 'svc8-c3-title', type: 'heading', props: { content: 'LOUD MARKETING', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#000000', margin: '16px 0 8px 0' } },
      { id: 'svc8-c3-desc', type: 'text', props: { content: 'Kampanye pemasaran yang langsung menarik perhatian pasar.', fontSize: '14px', color: '#000000', margin: '0' } },
    ]},
  ],
  'services-09': [
    { id: 'svc9-heading', type: 'heading', props: { content: 'Serenity Services', level: 'h2', fontSize: '38px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 12px 0' } },
    { id: 'svc9-subtext', type: 'text', props: { content: 'Perawatan tenang dan terarah untuk ketenangan batin dan pikiran', fontSize: '16px', color: '#78716c', align: 'center', margin: '0 0 48px 0' } },
    { id: 'svc9-card-1', type: 'card', props: { variant: 'service-zen', background: '#fafaf9', borderRadius: '16px', shadow: 'sm', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc9-c1-icon', type: 'icon', props: { icon: 'FaLeaf', size: '36px', color: '#78716c', align: 'center' } },
      { id: 'svc9-c1-title', type: 'heading', props: { content: 'Retret Meditasi', level: 'h3', fontSize: '20px', fontWeight: '500', color: '#1c1917', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc9-c1-desc', type: 'text', props: { content: 'Sesi hening untuk menemukan kembali keseimbangan jiwa dan raga.', fontSize: '14px', color: '#78716c', align: 'center', margin: '0' } },
    ]},
    { id: 'svc9-card-2', type: 'card', props: { variant: 'service-zen', background: '#fafaf9', borderRadius: '16px', shadow: 'sm', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc9-c2-icon', type: 'icon', props: { icon: 'FaSpa', size: '36px', color: '#78716c', align: 'center' } },
      { id: 'svc9-c2-title', type: 'heading', props: { content: 'Yoga & Pemulihan', level: 'h3', fontSize: '20px', fontWeight: '500', color: '#1c1917', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc9-c2-desc', type: 'text', props: { content: 'Gerakan lembut di alam terbuka dengan instruktur berpengalaman.', fontSize: '14px', color: '#78716c', align: 'center', margin: '0' } },
    ]},
    { id: 'svc9-card-3', type: 'card', props: { variant: 'service-zen', background: '#fafaf9', borderRadius: '16px', shadow: 'sm', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc9-c3-icon', type: 'icon', props: { icon: 'FaWater', size: '36px', color: '#78716c', align: 'center' } },
      { id: 'svc9-c3-title', type: 'heading', props: { content: 'Terapi Alam', level: 'h3', fontSize: '20px', fontWeight: '500', color: '#1c1917', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc9-c3-desc', type: 'text', props: { content: 'Penyembuhan holistik bersentuhan langsung dengan keasrian alam.', fontSize: '14px', color: '#78716c', align: 'center', margin: '0' } },
    ]},
  ],
  'services-10': [
    { id: 'svc10-badge', type: 'badge', props: { content: '● NEBULA SERVICES', background: '#1e1b4b', color: '#a5b4fc' } },
    { id: 'svc10-heading', type: 'heading', props: { content: 'Eksplorasi Layanan Nebula', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'svc10-subtext', type: 'text', props: { content: 'Teknologi masa depan untuk membawa misi digital Anda melesat jauh', fontSize: '16px', color: '#a5b4fc', align: 'center', margin: '0 0 48px 0' } },
    { id: 'svc10-card-1', type: 'card', props: { variant: 'service-glass', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', shadow: 'xl', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)', hoverEffect: 'glow', padding: '32px' }, childrenComponents: [
      { id: 'svc10-c1-icon', type: 'icon', props: { icon: 'FaRocket', size: '36px', color: '#8b5cf6', align: 'left' } },
      { id: 'svc10-c1-title', type: 'heading', props: { content: 'Misi Peluncuran', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '16px 0 8px 0' } },
      { id: 'svc10-c1-desc', type: 'text', props: { content: 'Akselerasi penuh produk digital Anda menuju pasar global.', fontSize: '14px', color: '#c4b5fd', margin: '0' } },
    ]},
    { id: 'svc10-card-2', type: 'card', props: { variant: 'service-glass', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', shadow: 'xl', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)', hoverEffect: 'glow', padding: '32px' }, childrenComponents: [
      { id: 'svc10-c2-icon', type: 'icon', props: { icon: 'FaSatellite', size: '36px', color: '#8b5cf6', align: 'left' } },
      { id: 'svc10-c2-title', type: 'heading', props: { content: 'Telemetry & Radar', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '16px 0 8px 0' } },
      { id: 'svc10-c2-desc', type: 'text', props: { content: 'Pantau metrik performa secara akurat dari pusat kendali.', fontSize: '14px', color: '#c4b5fd', margin: '0' } },
    ]},
    { id: 'svc10-card-3', type: 'card', props: { variant: 'service-glass', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', shadow: 'xl', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)', hoverEffect: 'glow', padding: '32px' }, childrenComponents: [
      { id: 'svc10-c3-icon', type: 'icon', props: { icon: 'FaShieldAlt', size: '36px', color: '#8b5cf6', align: 'left' } },
      { id: 'svc10-c3-title', type: 'heading', props: { content: 'Perisai Pertahanan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '16px 0 8px 0' } },
      { id: 'svc10-c3-desc', type: 'text', props: { content: 'Keamanan tingkat tinggi melindungi seluruh sistem dari ancaman.', fontSize: '14px', color: '#c4b5fd', margin: '0' } },
    ]},
  ],
  'services-11': [
    { id: 'svc11-heading', type: 'heading', props: { content: 'Editorial Services', level: 'h2', fontSize: '38px', fontWeight: '700', color: '#1c1917', align: 'left', margin: '0 0 12px 0' } },
    { id: 'svc11-subtext', type: 'text', props: { content: 'Layanan kurasi berita, opini, dan publikasi media berstandar tinggi', fontSize: '16px', color: '#44403c', align: 'left', margin: '0 0 48px 0' } },
    { id: 'svc11-card-1', type: 'card', props: { variant: 'service', background: '#f5f5f4', borderRadius: '8px', shadow: 'none', borderWidth: '1px', borderColor: '#d6d3d1', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc11-c1-icon', type: 'icon', props: { icon: 'FaNewspaper', size: '36px', color: '#1c1917', align: 'left' } },
      { id: 'svc11-c1-title', type: 'heading', props: { content: 'Kurasi Berita', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#1c1917', margin: '16px 0 8px 0' } },
      { id: 'svc11-c1-desc', type: 'text', props: { content: 'Penyusunan laporan investigasi dan berita aktual pilihan pembaca.', fontSize: '14px', color: '#57534e', margin: '0' } },
    ]},
    { id: 'svc11-card-2', type: 'card', props: { variant: 'service', background: '#f5f5f4', borderRadius: '8px', shadow: 'none', borderWidth: '1px', borderColor: '#d6d3d1', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc11-c2-icon', type: 'icon', props: { icon: 'FaPenNib', size: '36px', color: '#1c1917', align: 'left' } },
      { id: 'svc11-c2-title', type: 'heading', props: { content: 'Kolom Opini', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#1c1917', margin: '16px 0 8px 0' } },
      { id: 'svc11-c2-desc', type: 'text', props: { content: 'Tulisan analitis mendalam dari para kolumnis dan pakar industri.', fontSize: '14px', color: '#57534e', margin: '0' } },
    ]},
    { id: 'svc11-card-3', type: 'card', props: { variant: 'service', background: '#f5f5f4', borderRadius: '8px', shadow: 'none', borderWidth: '1px', borderColor: '#d6d3d1', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc11-c3-icon', type: 'icon', props: { icon: 'FaBookOpen', size: '36px', color: '#1c1917', align: 'left' } },
      { id: 'svc11-c3-title', type: 'heading', props: { content: 'Publikasi Majalah', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#1c1917', margin: '16px 0 8px 0' } },
      { id: 'svc11-c3-desc', type: 'text', props: { content: 'Edisi cetak dan digital bulanan dengan kualitas desain berkelas.', fontSize: '14px', color: '#57534e', margin: '0' } },
    ]},
  ],
  'services-12': [
    { id: 'svc12-badge', type: 'badge', props: { content: '~/services', background: '#052e16', color: '#4ade80' } },
    { id: 'svc12-heading', type: 'heading', props: { content: 'Developer Services & API', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#e2e8f0', align: 'left', margin: '0 0 12px 0' } },
    { id: 'svc12-subtext', type: 'text', props: { content: 'API handal dan alat bantu pengembangan untuk produktivitas tim engineering', fontSize: '16px', color: '#94a3b8', align: 'left', margin: '0 0 48px 0' } },
    { id: 'svc12-card-1', type: 'card', props: { variant: 'service-terminal', background: '#090d16', borderRadius: '12px', shadow: 'lg', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'glow', padding: '32px' }, childrenComponents: [
      { id: 'svc12-c1-icon', type: 'icon', props: { icon: 'FaTerminal', size: '36px', color: '#4ade80', align: 'left' } },
      { id: 'svc12-c1-title', type: 'heading', props: { content: 'CLI Integration', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#f8fafc', margin: '16px 0 8px 0' } },
      { id: 'svc12-c1-desc', type: 'text', props: { content: 'Deploy dan kelola project langsung dari command line terminal.', fontSize: '14px', color: '#94a3b8', margin: '0' } },
    ]},
    { id: 'svc12-card-2', type: 'card', props: { variant: 'service-terminal', background: '#090d16', borderRadius: '12px', shadow: 'lg', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'glow', padding: '32px' }, childrenComponents: [
      { id: 'svc12-c2-icon', type: 'icon', props: { icon: 'FaCode', size: '36px', color: '#4ade80', align: 'left' } },
      { id: 'svc12-c2-title', type: 'heading', props: { content: 'REST & GraphQL API', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#f8fafc', margin: '16px 0 8px 0' } },
      { id: 'svc12-c2-desc', type: 'text', props: { content: 'Endpoint terdokumentasi lengkap dengan response sangat cepat.', fontSize: '14px', color: '#94a3b8', margin: '0' } },
    ]},
    { id: 'svc12-card-3', type: 'card', props: { variant: 'service-terminal', background: '#090d16', borderRadius: '12px', shadow: 'lg', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'glow', padding: '32px' }, childrenComponents: [
      { id: 'svc12-c3-icon', type: 'icon', props: { icon: 'FaServer', size: '36px', color: '#4ade80', align: 'left' } },
      { id: 'svc12-c3-title', type: 'heading', props: { content: 'Auto-Scaling Server', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#f8fafc', margin: '16px 0 8px 0' } },
      { id: 'svc12-c3-desc', type: 'text', props: { content: 'Infrastruktur otomatis menyesuaikan beban trafik aplikasi Anda.', fontSize: '14px', color: '#94a3b8', margin: '0' } },
    ]},
  ],
  'services-13': [
    { id: 'svc13-heading', type: 'heading', props: { content: 'Solstice Features', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'svc13-subtext', type: 'text', props: { content: 'Fitur interaktif modern yang dirancang untuk pengalaman pengguna terbaik', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'svc13-card-1', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '24px', shadow: 'md', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc13-c1-icon', type: 'icon', props: { icon: 'FaCompass', size: '36px', color: '#f97316', align: 'center' } },
      { id: 'svc13-c1-title', type: 'heading', props: { content: 'Navigasi Pintar', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc13-c1-desc', type: 'text', props: { content: 'Eksplorasi fitur aplikasi dengan mudah dan intuitif tanpa hambatan.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'svc13-card-2', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '24px', shadow: 'md', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc13-c2-icon', type: 'icon', props: { icon: 'FaShoppingCart', size: '36px', color: '#f97316', align: 'center' } },
      { id: 'svc13-c2-title', type: 'heading', props: { content: 'Transaksi Cepat', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc13-c2-desc', type: 'text', props: { content: 'Proses checkout aman dan kilat dalam hitungan detik saja.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'svc13-card-3', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '24px', shadow: 'md', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc13-c3-icon', type: 'icon', props: { icon: 'FaUserCheck', size: '36px', color: '#f97316', align: 'center' } },
      { id: 'svc13-c3-title', type: 'heading', props: { content: 'Membership Eksklusif', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc13-c3-desc', type: 'text', props: { content: 'Dapatkan berbagai benefit dan penawaran khusus anggota.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
  ],
  'services-14': [
    { id: 'svc14-badge', type: 'badge', props: { content: '✓ LAYANAN INSTITUSI', background: '#dbeafe', color: '#1e40af' } },
    { id: 'svc14-heading', type: 'heading', props: { content: 'Layanan Akademik & Kampus', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#1e3a8a', align: 'left', margin: '0 0 12px 0' } },
    { id: 'svc14-subtext', type: 'text', props: { content: 'Fasilitas pendidikan unggulan untuk mencetak generasi profesional berprestasi', fontSize: '16px', color: '#475569', align: 'left', margin: '0 0 48px 0' } },
    { id: 'svc14-card-1', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc14-c1-icon', type: 'icon', props: { icon: 'FaGraduationCap', size: '36px', color: '#1e40af', align: 'left' } },
      { id: 'svc14-c1-title', type: 'heading', props: { content: 'Program Studi Unggulan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#1e3a8a', margin: '16px 0 8px 0' } },
      { id: 'svc14-c1-desc', type: 'text', props: { content: '28 program studi terakreditasi A dengan kurikulum berbasis industri.', fontSize: '14px', color: '#475569', margin: '0' } },
    ]},
    { id: 'svc14-card-2', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc14-c2-icon', type: 'icon', props: { icon: 'FaChalkboardTeacher', size: '36px', color: '#1e40af', align: 'left' } },
      { id: 'svc14-c2-title', type: 'heading', props: { content: 'Dosen Praktisi', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#1e3a8a', margin: '16px 0 8px 0' } },
      { id: 'svc14-c2-desc', type: 'text', props: { content: 'Pengajar profesional dan berpengalaman luas di bidangnya.', fontSize: '14px', color: '#475569', margin: '0' } },
    ]},
    { id: 'svc14-card-3', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc14-c3-icon', type: 'icon', props: { icon: 'FaBriefcase', size: '36px', color: '#1e40af', align: 'left' } },
      { id: 'svc14-c3-title', type: 'heading', props: { content: 'Pusat Karir & Alumni', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#1e3a8a', margin: '16px 0 8px 0' } },
      { id: 'svc14-c3-desc', type: 'text', props: { content: 'Jaringan luas dengan perusahaan nasional dan multinasional.', fontSize: '14px', color: '#475569', margin: '0' } },
    ]},
  ],
  'services-15': [
    { id: 'svc15-badge', type: 'badge', props: { content: '✦ IRIS SERVICES', background: '#f3e8ff', color: '#7c3aed' } },
    { id: 'svc15-heading', type: 'heading', props: { content: 'Layanan AI Canvas & Desain', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 12px 0' } },
    { id: 'svc15-subtext', type: 'text', props: { content: 'Ubah sketsa ide menjadi antarmuka siap pakai dengan teknologi cerdas Iris', fontSize: '16px', color: '#64748b', align: 'left', margin: '0 0 48px 0' } },
    { id: 'svc15-card-1', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '24px', shadow: 'lg', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc15-c1-icon', type: 'icon', props: { icon: 'FaMagic', size: '36px', color: '#7c3aed', align: 'left' } },
      { id: 'svc15-c1-title', type: 'heading', props: { content: 'AI Generative UI', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'svc15-c1-desc', type: 'text', props: { content: 'Generate komponen desain web berkualitas tinggi dalam hitungan detik.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'svc15-card-2', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '24px', shadow: 'lg', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc15-c2-icon', type: 'icon', props: { icon: 'FaPalette', size: '36px', color: '#7c3aed', align: 'left' } },
      { id: 'svc15-c2-title', type: 'heading', props: { content: 'Design System Sinkron', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'svc15-c2-desc', type: 'text', props: { content: 'Konsistensi warna, tipografi, dan komponen otomatis terjaga.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'svc15-card-3', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '24px', shadow: 'lg', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc15-c3-icon', type: 'icon', props: { icon: 'FaCode', size: '36px', color: '#7c3aed', align: 'left' } },
      { id: 'svc15-c3-title', type: 'heading', props: { content: 'Export React Code', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'svc15-c3-desc', type: 'text', props: { content: 'Unduh hasil desain langsung menjadi kode React & Tailwind bersih.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
  ],
  'services-16': [
    { id: 'svc16-badge', type: 'badge', props: { content: '✦ GOLDLEAF HERITAGE', background: '#fef3c7', color: '#92400e' } },
    { id: 'svc16-heading', type: 'heading', props: { content: 'Layanan Premium Goldleaf', level: 'h2', fontSize: '38px', fontWeight: '700', color: '#451a03', align: 'center', margin: '0 0 12px 0' } },
    { id: 'svc16-subtext', type: 'text', props: { content: 'Koleksi perhiasan dan layanan warisan budaya dengan sentuhan emas murni', fontSize: '16px', color: '#92600e', align: 'center', margin: '0 0 48px 0' } },
    { id: 'svc16-card-1', type: 'card', props: { variant: 'service', background: '#fffbeb', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fde68a', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc16-c1-icon', type: 'icon', props: { icon: 'FaGem', size: '36px', color: '#b45309', align: 'center' } },
      { id: 'svc16-c1-title', type: 'heading', props: { content: 'Perhiasan Custom', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#451a03', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc16-c1-desc', type: 'text', props: { content: 'Pemesanan perhiasan eksklusif sesuai desain pesanan pribadi Anda.', fontSize: '14px', color: '#92600e', align: 'center', margin: '0' } },
    ]},
    { id: 'svc16-card-2', type: 'card', props: { variant: 'service', background: '#fffbeb', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fde68a', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc16-c2-icon', type: 'icon', props: { icon: 'FaAward', size: '36px', color: '#b45309', align: 'center' } },
      { id: 'svc16-c2-title', type: 'heading', props: { content: 'Sertifikasi Keaslian', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#451a03', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc16-c2-desc', type: 'text', props: { content: 'Setiap produk dilengkapi sertifikat resmi dan jaminan kadar emas.', fontSize: '14px', color: '#92600e', align: 'center', margin: '0' } },
    ]},
    { id: 'svc16-card-3', type: 'card', props: { variant: 'service', background: '#fffbeb', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fde68a', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc16-c3-icon', type: 'icon', props: { icon: 'FaHandshake', size: '36px', color: '#b45309', align: 'center' } },
      { id: 'svc16-c3-title', type: 'heading', props: { content: 'Konsultasi Pribadi', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#451a03', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc16-c3-desc', type: 'text', props: { content: 'Layanan temu janji privat di butik bersama kurator berpengalaman.', fontSize: '14px', color: '#92600e', align: 'center', margin: '0' } },
    ]},
  ],
  'services-17': [
    { id: 'svc17-badge', type: 'badge', props: { content: '🔥 MARKETPLACE PULSE', background: '#fef2f2', color: '#dc2626' } },
    { id: 'svc17-heading', type: 'heading', props: { content: 'Layanan Seller & Pembeli', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 12px 0' } },
    { id: 'svc17-subtext', type: 'text', props: { content: 'Ekosistem perdagangan online terpadu dengan jutaan produk pilihan', fontSize: '16px', color: '#64748b', align: 'left', margin: '0 0 48px 0' } },
    { id: 'svc17-card-1', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc17-c1-icon', type: 'icon', props: { icon: 'FaStore', size: '36px', color: '#dc2626', align: 'left' } },
      { id: 'svc17-c1-title', type: 'heading', props: { content: 'Buka Toko Instan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'svc17-c1-desc', type: 'text', props: { content: 'Mulai jualan online dalam hitungan menit tanpa ribet.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'svc17-card-2', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc17-c2-icon', type: 'icon', props: { icon: 'FaTruckFast', size: '36px', color: '#dc2626', align: 'left' } },
      { id: 'svc17-c2-title', type: 'heading', props: { content: 'Logistik Terintegrasi', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'svc17-c2-desc', type: 'text', props: { content: 'Pilihan kurir lengkap dengan layanan same-day dan instant delivery.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'svc17-card-3', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc17-c3-icon', type: 'icon', props: { icon: 'FaShieldAlt', size: '36px', color: '#dc2626', align: 'left' } },
      { id: 'svc17-c3-title', type: 'heading', props: { content: 'Rekber Aman', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'svc17-c3-desc', type: 'text', props: { content: 'Dana aman 100% sampai barang diterima dengan baik oleh pembeli.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
  ],
  'services-18': [
    { id: 'svc18-badge', type: 'badge', props: { content: '🚚 TRANSGO LOGISTICS', background: '#fff7ed', color: '#f97316' } },
    { id: 'svc18-heading', type: 'heading', props: { content: 'Layanan Pengiriman Kargo Pro', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 12px 0' } },
    { id: 'svc18-subtext', type: 'text', props: { content: 'Solusi logistik darat, laut, dan udara handal lintas kepulauan Indonesia', fontSize: '16px', color: '#64748b', align: 'left', margin: '0 0 48px 0' } },
    { id: 'svc18-card-1', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc18-c1-icon', type: 'icon', props: { icon: 'FaTruck', size: '36px', color: '#f97316', align: 'left' } },
      { id: 'svc18-c1-title', type: 'heading', props: { content: 'Pengiriman Darat', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'svc18-c1-desc', type: 'text', props: { content: 'Armada truk box & container siap melayani antar kota dan provinsi.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'svc18-card-2', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc18-c2-icon', type: 'icon', props: { icon: 'FaShip', size: '36px', color: '#f97316', align: 'left' } },
      { id: 'svc18-c2-title', type: 'heading', props: { content: 'Kargo Laut & Pelabuhan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'svc18-c2-desc', type: 'text', props: { content: 'Pengiriman muatan besar antar pulau dengan tarif kompetitif.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'svc18-card-3', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc18-c3-icon', type: 'icon', props: { icon: 'FaPlane', size: '36px', color: '#f97316', align: 'left' } },
      { id: 'svc18-c3-title', type: 'heading', props: { content: 'Kargo Udara Kilat', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'svc18-c3-desc', type: 'text', props: { content: 'Layanan express untuk dokumen dan barang penting sampai 1 hari.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
  ],
  'services-19': [
    { id: 'svc19-badge', type: 'badge', props: { content: '🍔 KIOSO! EATS', background: '#fce7f3', color: '#ec4899' } },
    { id: 'svc19-heading', type: 'heading', props: { content: 'Menu & Layanan Paling Yummy', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'svc19-subtext', type: 'text', props: { content: 'Burger juicy, kentang renyah, dan minuman segar disajikan hangat setiap hari', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'svc19-card-1', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '28px', shadow: 'lg', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc19-c1-icon', type: 'icon', props: { icon: 'FaHamburger', size: '36px', color: '#ec4899', align: 'center' } },
      { id: 'svc19-c1-title', type: 'heading', props: { content: 'Burger Premium', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc19-c1-desc', type: 'text', props: { content: 'Daging sapi panggang pilihan dengan keju meleleh di setiap gigitan.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'svc19-card-2', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '28px', shadow: 'lg', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc19-c2-icon', type: 'icon', props: { icon: 'FaIceCream', size: '36px', color: '#ec4899', align: 'center' } },
      { id: 'svc19-c2-title', type: 'heading', props: { content: 'Milkshake & Dessert', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc19-c2-desc', type: 'text', props: { content: 'Minuman dingin manis lembut pelepas dahaga yang menyegarkan.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'svc19-card-3', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '28px', shadow: 'lg', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [
      { id: 'svc19-c3-icon', type: 'icon', props: { icon: 'FaUtensils', size: '36px', color: '#ec4899', align: 'center' } },
      { id: 'svc19-c3-title', type: 'heading', props: { content: 'Delivery Cepat', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc19-c3-desc', type: 'text', props: { content: 'Pesanan diantar kilat dalam 20 menit tetap hangat di meja Anda.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
  ],
  'services-20': [
    { id: 'svc20-badge', type: 'badge', props: { content: '✦ AETHER FINALE', background: '#1e1b4b', color: '#c4b5fd' } },
    { id: 'svc20-heading', type: 'heading', props: { content: 'Solusi Unggulan Aether OS', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'svc20-subtext', type: 'text', props: { content: 'Platform terintegrasi penuh untuk mengelola seluruh aspek operasional bisnis modern', fontSize: '16px', color: '#a5b4fc', align: 'center', margin: '0 0 48px 0' } },
    { id: 'svc20-card-1', type: 'card', props: { variant: 'service-dark', background: '#1e1b4b', borderRadius: '24px', shadow: '2xl', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.2)', hoverEffect: 'glow', padding: '32px' }, childrenComponents: [
      { id: 'svc20-c1-icon', type: 'icon', props: { icon: 'FaCogs', size: '36px', color: '#c4b5fd', align: 'center' } },
      { id: 'svc20-c1-title', type: 'heading', props: { content: 'Automasi Menyeluruh', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc20-c1-desc', type: 'text', props: { content: 'Otomatisasi alur kerja repetitif dengan engine cerdas berkecepatan tinggi.', fontSize: '14px', color: '#a5b4fc', align: 'center', margin: '0' } },
    ]},
    { id: 'svc20-card-2', type: 'card', props: { variant: 'service-dark', background: '#1e1b4b', borderRadius: '24px', shadow: '2xl', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.2)', hoverEffect: 'glow', padding: '32px' }, childrenComponents: [
      { id: 'svc20-c2-icon', type: 'icon', props: { icon: 'FaShieldAlt', size: '36px', color: '#c4b5fd', align: 'center' } },
      { id: 'svc20-c2-title', type: 'heading', props: { content: 'Keamanan Tingkat Tinggi', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc20-c2-desc', type: 'text', props: { content: 'Proteksi data enterprise berlapis dengan pemantauan ancaman 24/7.', fontSize: '14px', color: '#a5b4fc', align: 'center', margin: '0' } },
    ]},
    { id: 'svc20-card-3', type: 'card', props: { variant: 'service-dark', background: '#1e1b4b', borderRadius: '24px', shadow: '2xl', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.2)', hoverEffect: 'glow', padding: '32px' }, childrenComponents: [
      { id: 'svc20-c3-icon', type: 'icon', props: { icon: 'FaChartLine', size: '36px', color: '#c4b5fd', align: 'center' } },
      { id: 'svc20-c3-title', type: 'heading', props: { content: 'Analitik Prediktif', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'svc20-c3-desc', type: 'text', props: { content: 'Wawasan bisnis masa depan berbasis kecerdasan buatan data historis.', fontSize: '14px', color: '#a5b4fc', align: 'center', margin: '0' } },
    ]},
  ],

  // === GALLERY LAYOUTS ===
  'gallery-01': [
    { id: 'gal1-badge', type: 'badge', props: { content: '✦ Galeri 01', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'gal1-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal1-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal1-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#4f46e5', color: '#ffffff' } },
    {
      id: 'gal1-card-1',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal1-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 01', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal1-c1-title', type: 'heading', props: { content: 'Momen Studio 01', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal1-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal1-card-2',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal1-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 01', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal1-c2-title', type: 'heading', props: { content: 'Karya Terbaru 01', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal1-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal1-card-3',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal1-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 01', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal1-c3-title', type: 'heading', props: { content: 'Suasana Tim 01', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal1-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal1-card-4',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal1-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 01', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal1-c4-title', type: 'heading', props: { content: 'Detail Event 01', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal1-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ],
  'gallery-02': [
    { id: 'gal2-badge', type: 'badge', props: { content: '✦ Galeri 02', background: '#1c1917', color: '#e7c873' } },
    { id: 'gal2-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal2-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#a8a29e', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal2-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#e7c873', color: '#1c1917' } },
    {
      id: 'gal2-card-1',
      type: 'card',
      props: { variant: 'gallery', background: '#1c1917', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal2-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 02', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal2-c1-title', type: 'heading', props: { content: 'Momen Studio 02', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal2-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#a8a29e', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal2-card-2',
      type: 'card',
      props: { variant: 'gallery', background: '#1c1917', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal2-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 02', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal2-c2-title', type: 'heading', props: { content: 'Karya Terbaru 02', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal2-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#a8a29e', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal2-card-3',
      type: 'card',
      props: { variant: 'gallery', background: '#1c1917', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal2-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 02', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal2-c3-title', type: 'heading', props: { content: 'Suasana Tim 02', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal2-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#a8a29e', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal2-card-4',
      type: 'card',
      props: { variant: 'gallery', background: '#1c1917', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal2-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 02', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal2-c4-title', type: 'heading', props: { content: 'Detail Event 02', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal2-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#a8a29e', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ],
  'gallery-03': [
    { id: 'gal3-badge', type: 'badge', props: { content: '✦ Galeri 03', background: '#fff7ed', color: '#ea580c' } },
    { id: 'gal3-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal3-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal3-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#ea580c', color: '#ffffff' } },
    {
      id: 'gal3-card-1',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal3-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 03', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal3-c1-title', type: 'heading', props: { content: 'Momen Studio 03', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal3-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal3-card-2',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal3-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 03', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal3-c2-title', type: 'heading', props: { content: 'Karya Terbaru 03', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal3-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal3-card-3',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal3-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 03', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal3-c3-title', type: 'heading', props: { content: 'Suasana Tim 03', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal3-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal3-card-4',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal3-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 03', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal3-c4-title', type: 'heading', props: { content: 'Detail Event 03', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal3-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ],
  'gallery-04': [
    { id: 'gal4-badge', type: 'badge', props: { content: '✦ Galeri 04', background: '#000000', color: '#facc15' } },
    { id: 'gal4-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#000000', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal4-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#000000', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal4-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#000000', color: '#facc15' } },
    {
      id: 'gal4-card-1',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#000000', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal4-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 04', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal4-c1-title', type: 'heading', props: { content: 'Momen Studio 04', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#000000', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal4-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#000000', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal4-card-2',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#000000', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal4-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 04', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal4-c2-title', type: 'heading', props: { content: 'Karya Terbaru 04', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#000000', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal4-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#000000', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal4-card-3',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#000000', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal4-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 04', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal4-c3-title', type: 'heading', props: { content: 'Suasana Tim 04', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#000000', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal4-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#000000', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal4-card-4',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#000000', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal4-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 04', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal4-c4-title', type: 'heading', props: { content: 'Detail Event 04', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#000000', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal4-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#000000', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ],
  'gallery-05': [
    { id: 'gal5-badge', type: 'badge', props: { content: '✦ Galeri 05', background: '#ffffff', color: '#78716c' } },
    { id: 'gal5-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#1c1917', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal5-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#78716c', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal5-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#1c1917', color: '#ffffff' } },
    {
      id: 'gal5-card-1',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal5-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 05', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal5-c1-title', type: 'heading', props: { content: 'Momen Studio 05', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#1c1917', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal5-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#78716c', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal5-card-2',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal5-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 05', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal5-c2-title', type: 'heading', props: { content: 'Karya Terbaru 05', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#1c1917', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal5-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#78716c', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal5-card-3',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal5-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 05', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal5-c3-title', type: 'heading', props: { content: 'Suasana Tim 05', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#1c1917', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal5-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#78716c', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal5-card-4',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal5-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 05', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal5-c4-title', type: 'heading', props: { content: 'Detail Event 05', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#1c1917', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal5-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#78716c', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ],
  'gallery-06': [
    { id: 'gal6-badge', type: 'badge', props: { content: '✦ Galeri 06', background: '#1e1b4b', color: '#a5b4fc' } },
    { id: 'gal6-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal6-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#a5b4fc', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal6-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
    {
      id: 'gal6-card-1',
      type: 'card',
      props: { variant: 'gallery', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal6-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 06', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal6-c1-title', type: 'heading', props: { content: 'Momen Studio 06', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal6-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#a5b4fc', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal6-card-2',
      type: 'card',
      props: { variant: 'gallery', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal6-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 06', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal6-c2-title', type: 'heading', props: { content: 'Karya Terbaru 06', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal6-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#a5b4fc', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal6-card-3',
      type: 'card',
      props: { variant: 'gallery', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal6-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 06', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal6-c3-title', type: 'heading', props: { content: 'Suasana Tim 06', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal6-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#a5b4fc', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal6-card-4',
      type: 'card',
      props: { variant: 'gallery', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal6-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 06', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal6-c4-title', type: 'heading', props: { content: 'Detail Event 06', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal6-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#a5b4fc', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ],
  'gallery-07': [
    { id: 'gal7-badge', type: 'badge', props: { content: '✦ Galeri 07', background: '#052e16', color: '#4ade80' } },
    { id: 'gal7-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#e2e8f0', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal7-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#94a3b8', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal7-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#22c55e', color: '#052e16' } },
    {
      id: 'gal7-card-1',
      type: 'card',
      props: { variant: 'gallery', background: '#0f172a', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal7-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 07', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal7-c1-title', type: 'heading', props: { content: 'Momen Studio 07', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#e2e8f0', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal7-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#94a3b8', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal7-card-2',
      type: 'card',
      props: { variant: 'gallery', background: '#0f172a', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal7-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 07', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal7-c2-title', type: 'heading', props: { content: 'Karya Terbaru 07', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#e2e8f0', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal7-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#94a3b8', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal7-card-3',
      type: 'card',
      props: { variant: 'gallery', background: '#0f172a', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal7-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 07', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal7-c3-title', type: 'heading', props: { content: 'Suasana Tim 07', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#e2e8f0', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal7-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#94a3b8', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal7-card-4',
      type: 'card',
      props: { variant: 'gallery', background: '#0f172a', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal7-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 07', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal7-c4-title', type: 'heading', props: { content: 'Detail Event 07', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#e2e8f0', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal7-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#94a3b8', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ],
  'gallery-08': [
    { id: 'gal8-badge', type: 'badge', props: { content: '✦ Galeri 08', background: '#fce7f3', color: '#be185d' } },
    { id: 'gal8-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#831843', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal8-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#9d7b8c', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal8-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#db2777', color: '#ffffff' } },
    {
      id: 'gal8-card-1',
      type: 'card',
      props: { variant: 'gallery', background: '#fff1f2', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal8-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 08', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal8-c1-title', type: 'heading', props: { content: 'Momen Studio 08', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#831843', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal8-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#9d7b8c', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal8-card-2',
      type: 'card',
      props: { variant: 'gallery', background: '#fff1f2', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal8-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 08', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal8-c2-title', type: 'heading', props: { content: 'Karya Terbaru 08', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#831843', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal8-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#9d7b8c', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal8-card-3',
      type: 'card',
      props: { variant: 'gallery', background: '#fff1f2', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal8-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 08', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal8-c3-title', type: 'heading', props: { content: 'Suasana Tim 08', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#831843', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal8-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#9d7b8c', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal8-card-4',
      type: 'card',
      props: { variant: 'gallery', background: '#fff1f2', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal8-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 08', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal8-c4-title', type: 'heading', props: { content: 'Detail Event 08', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#831843', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal8-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#9d7b8c', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ],
  'gallery-09': [
    { id: 'gal9-badge', type: 'badge', props: { content: '✦ Galeri 09', background: '#78350f', color: '#fde68a' } },
    { id: 'gal9-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#78350f', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal9-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#92400e', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal9-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#92400e', color: '#fef3c7' } },
    {
      id: 'gal9-card-1',
      type: 'card',
      props: { variant: 'gallery', background: '#fffbeb', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal9-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 09', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal9-c1-title', type: 'heading', props: { content: 'Momen Studio 09', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#78350f', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal9-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#92400e', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal9-card-2',
      type: 'card',
      props: { variant: 'gallery', background: '#fffbeb', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal9-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 09', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal9-c2-title', type: 'heading', props: { content: 'Karya Terbaru 09', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#78350f', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal9-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#92400e', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal9-card-3',
      type: 'card',
      props: { variant: 'gallery', background: '#fffbeb', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal9-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 09', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal9-c3-title', type: 'heading', props: { content: 'Suasana Tim 09', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#78350f', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal9-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#92400e', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal9-card-4',
      type: 'card',
      props: { variant: 'gallery', background: '#fffbeb', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal9-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 09', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal9-c4-title', type: 'heading', props: { content: 'Detail Event 09', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#78350f', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal9-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#92400e', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ],
  'gallery-10': [
    { id: 'gal10-badge', type: 'badge', props: { content: '✦ Galeri 10', background: '#fef2f2', color: '#dc2626' } },
    { id: 'gal10-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal10-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal10-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#dc2626', color: '#ffffff' } },
    {
      id: 'gal10-card-1',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal10-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 10', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal10-c1-title', type: 'heading', props: { content: 'Momen Studio 10', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal10-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal10-card-2',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal10-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 10', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal10-c2-title', type: 'heading', props: { content: 'Karya Terbaru 10', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal10-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal10-card-3',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal10-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 10', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal10-c3-title', type: 'heading', props: { content: 'Suasana Tim 10', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal10-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal10-card-4',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal10-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 10', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal10-c4-title', type: 'heading', props: { content: 'Detail Event 10', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal10-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ],
  'gallery-11': [
    { id: 'gal11-badge', type: 'badge', props: { content: '✦ Galeri 11', background: '#ffffff', color: '#7c3aed' } },
    { id: 'gal11-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal11-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#ddd6fe', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal11-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#ffffff', color: '#6d28d9' } },
    {
      id: 'gal11-card-1',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal11-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 11', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal11-c1-title', type: 'heading', props: { content: 'Momen Studio 11', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal11-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal11-card-2',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal11-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 11', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal11-c2-title', type: 'heading', props: { content: 'Karya Terbaru 11', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal11-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal11-card-3',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal11-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 11', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal11-c3-title', type: 'heading', props: { content: 'Suasana Tim 11', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal11-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal11-card-4',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal11-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 11', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal11-c4-title', type: 'heading', props: { content: 'Detail Event 11', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal11-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ],
  'gallery-12': [
    { id: 'gal12-badge', type: 'badge', props: { content: '✦ Galeri 12', background: '#0f172a', color: '#38bdf8' } },
    { id: 'gal12-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal12-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#94a3b8', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal12-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#38bdf8', color: '#082f49' } },
    {
      id: 'gal12-card-1',
      type: 'card',
      props: { variant: 'gallery', background: '#1e293b', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal12-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 12', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal12-c1-title', type: 'heading', props: { content: 'Momen Studio 12', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal12-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#94a3b8', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal12-card-2',
      type: 'card',
      props: { variant: 'gallery', background: '#1e293b', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal12-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 12', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal12-c2-title', type: 'heading', props: { content: 'Karya Terbaru 12', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal12-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#94a3b8', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal12-card-3',
      type: 'card',
      props: { variant: 'gallery', background: '#1e293b', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal12-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 12', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal12-c3-title', type: 'heading', props: { content: 'Suasana Tim 12', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal12-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#94a3b8', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal12-card-4',
      type: 'card',
      props: { variant: 'gallery', background: '#1e293b', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal12-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 12', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal12-c4-title', type: 'heading', props: { content: 'Detail Event 12', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal12-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#94a3b8', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ],
  'gallery-13': [
    { id: 'gal13-badge', type: 'badge', props: { content: '✦ Galeri 13', background: '#fce7f3', color: '#ec4899' } },
    { id: 'gal13-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal13-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal13-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#ec4899', color: '#ffffff' } },
    {
      id: 'gal13-card-1',
      type: 'card',
      props: { variant: 'gallery', background: '#fff1f2', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal13-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 13', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal13-c1-title', type: 'heading', props: { content: 'Momen Studio 13', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal13-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal13-card-2',
      type: 'card',
      props: { variant: 'gallery', background: '#fff1f2', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal13-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 13', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal13-c2-title', type: 'heading', props: { content: 'Karya Terbaru 13', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal13-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal13-card-3',
      type: 'card',
      props: { variant: 'gallery', background: '#fff1f2', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal13-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 13', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal13-c3-title', type: 'heading', props: { content: 'Suasana Tim 13', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal13-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal13-card-4',
      type: 'card',
      props: { variant: 'gallery', background: '#fff1f2', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal13-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 13', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal13-c4-title', type: 'heading', props: { content: 'Detail Event 13', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal13-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ],
  'gallery-14': [
    { id: 'gal14-badge', type: 'badge', props: { content: '✦ Galeri 14', background: '#eff6ff', color: '#1d4ed8' } },
    { id: 'gal14-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal14-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal14-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#1e40af', color: '#ffffff' } },
    {
      id: 'gal14-card-1',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal14-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 14', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal14-c1-title', type: 'heading', props: { content: 'Momen Studio 14', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal14-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal14-card-2',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal14-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 14', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal14-c2-title', type: 'heading', props: { content: 'Karya Terbaru 14', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal14-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal14-card-3',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal14-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 14', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal14-c3-title', type: 'heading', props: { content: 'Suasana Tim 14', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal14-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal14-card-4',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal14-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 14', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal14-c4-title', type: 'heading', props: { content: 'Detail Event 14', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal14-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ],
  'gallery-15': [
    { id: 'gal15-badge', type: 'badge', props: { content: '✦ Galeri 15', background: '#0f172a', color: '#ffffff' } },
    { id: 'gal15-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal15-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal15-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    {
      id: 'gal15-card-1',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal15-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 15', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal15-c1-title', type: 'heading', props: { content: 'Momen Studio 15', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal15-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal15-card-2',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal15-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 15', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal15-c2-title', type: 'heading', props: { content: 'Karya Terbaru 15', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal15-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal15-card-3',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal15-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 15', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal15-c3-title', type: 'heading', props: { content: 'Suasana Tim 15', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal15-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal15-card-4',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal15-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 15', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal15-c4-title', type: 'heading', props: { content: 'Detail Event 15', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal15-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ],
  'gallery-16': [
    { id: 'gal16-badge', type: 'badge', props: { content: '✦ Galeri 16', background: '#dcfce7', color: '#166534' } },
    { id: 'gal16-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#064e3b', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal16-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#4d7c0f', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal16-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#16a34a', color: '#ffffff' } },
    {
      id: 'gal16-card-1',
      type: 'card',
      props: { variant: 'gallery', background: '#f0fdf4', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal16-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 16', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal16-c1-title', type: 'heading', props: { content: 'Momen Studio 16', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#064e3b', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal16-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#166534', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal16-card-2',
      type: 'card',
      props: { variant: 'gallery', background: '#f0fdf4', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal16-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 16', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal16-c2-title', type: 'heading', props: { content: 'Karya Terbaru 16', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#064e3b', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal16-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#166534', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal16-card-3',
      type: 'card',
      props: { variant: 'gallery', background: '#f0fdf4', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal16-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 16', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal16-c3-title', type: 'heading', props: { content: 'Suasana Tim 16', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#064e3b', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal16-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#166534', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal16-card-4',
      type: 'card',
      props: { variant: 'gallery', background: '#f0fdf4', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal16-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 16', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal16-c4-title', type: 'heading', props: { content: 'Detail Event 16', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#064e3b', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal16-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#166534', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ],
  'gallery-17': [
    { id: 'gal17-badge', type: 'badge', props: { content: '✦ Galeri 17', background: '#dc2626', color: '#ffffff' } },
    { id: 'gal17-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal17-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#fecaca', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal17-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#dc2626', color: '#ffffff' } },
    {
      id: 'gal17-card-1',
      type: 'card',
      props: { variant: 'gallery', background: '#171717', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal17-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 17', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal17-c1-title', type: 'heading', props: { content: 'Momen Studio 17', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal17-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#fecaca', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal17-card-2',
      type: 'card',
      props: { variant: 'gallery', background: '#171717', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal17-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 17', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal17-c2-title', type: 'heading', props: { content: 'Karya Terbaru 17', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal17-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#fecaca', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal17-card-3',
      type: 'card',
      props: { variant: 'gallery', background: '#171717', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal17-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 17', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal17-c3-title', type: 'heading', props: { content: 'Suasana Tim 17', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal17-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#fecaca', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal17-card-4',
      type: 'card',
      props: { variant: 'gallery', background: '#171717', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal17-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 17', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal17-c4-title', type: 'heading', props: { content: 'Detail Event 17', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal17-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#fecaca', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ],
  'gallery-18': [
    { id: 'gal18-badge', type: 'badge', props: { content: '✦ Galeri 18', background: '#fff7ed', color: '#ea580c' } },
    { id: 'gal18-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal18-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal18-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#f97316', color: '#ffffff' } },
    {
      id: 'gal18-card-1',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal18-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 18', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal18-c1-title', type: 'heading', props: { content: 'Momen Studio 18', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal18-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal18-card-2',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal18-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 18', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal18-c2-title', type: 'heading', props: { content: 'Karya Terbaru 18', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal18-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal18-card-3',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal18-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 18', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal18-c3-title', type: 'heading', props: { content: 'Suasana Tim 18', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal18-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal18-card-4',
      type: 'card',
      props: { variant: 'gallery', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal18-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 18', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal18-c4-title', type: 'heading', props: { content: 'Detail Event 18', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal18-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ],
  'gallery-19': [
    { id: 'gal19-badge', type: 'badge', props: { content: '✦ Galeri 19', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'gal19-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal19-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal19-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    {
      id: 'gal19-card-1',
      type: 'card',
      props: { variant: 'gallery', background: 'rgba(255,255,255,0.85)', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal19-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 19', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal19-c1-title', type: 'heading', props: { content: 'Momen Studio 19', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal19-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal19-card-2',
      type: 'card',
      props: { variant: 'gallery', background: 'rgba(255,255,255,0.85)', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal19-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 19', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal19-c2-title', type: 'heading', props: { content: 'Karya Terbaru 19', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal19-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal19-card-3',
      type: 'card',
      props: { variant: 'gallery', background: 'rgba(255,255,255,0.85)', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal19-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 19', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal19-c3-title', type: 'heading', props: { content: 'Suasana Tim 19', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal19-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal19-card-4',
      type: 'card',
      props: { variant: 'gallery', background: 'rgba(255,255,255,0.85)', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal19-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 19', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal19-c4-title', type: 'heading', props: { content: 'Detail Event 19', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal19-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#64748b', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ],
  'gallery-20': [
    { id: 'gal20-badge', type: 'badge', props: { content: '✦ Galeri 20', background: '#1e1b4b', color: '#c4b5fd' } },
    { id: 'gal20-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal20-text', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami.', fontSize: '15px', color: '#a5b4fc', align: 'center', margin: '0 0 20px 0' } },
    { id: 'gal20-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#galeri', variant: 'primary', size: 'medium', radius: 'full', background: '#6366f1', color: '#ffffff' } },
    {
      id: 'gal20-card-1',
      type: 'card',
      props: { variant: 'gallery', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal20-c1-image', type: 'image', props: { src: '', alt: 'Momen Studio 20', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal20-c1-title', type: 'heading', props: { content: 'Momen Studio 20', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal20-c1-desc', type: 'text', props: { content: 'Dokumentasi pilihan kurasi studio.', fontSize: '13px', color: '#a5b4fc', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal20-card-2',
      type: 'card',
      props: { variant: 'gallery', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal20-c2-image', type: 'image', props: { src: '', alt: 'Karya Terbaru 20', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal20-c2-title', type: 'heading', props: { content: 'Karya Terbaru 20', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal20-c2-desc', type: 'text', props: { content: 'Koleksi terbaru minggu ini.', fontSize: '13px', color: '#a5b4fc', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal20-card-3',
      type: 'card',
      props: { variant: 'gallery', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal20-c3-image', type: 'image', props: { src: '', alt: 'Suasana Tim 20', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal20-c3-title', type: 'heading', props: { content: 'Suasana Tim 20', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal20-c3-desc', type: 'text', props: { content: 'Cerita di balik layar.', fontSize: '13px', color: '#a5b4fc', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
    {
      id: 'gal20-card-4',
      type: 'card',
      props: { variant: 'gallery', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'gal20-c4-image', type: 'image', props: { src: '', alt: 'Detail Event 20', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'gal20-c4-title', type: 'heading', props: { content: 'Detail Event 20', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'gal20-c4-desc', type: 'text', props: { content: 'Arsip momen terbaik.', fontSize: '13px', color: '#a5b4fc', margin: '4px 0 16px 0', padding: '0 16px' } },
      ],
    },
  ],




  // === CONTACT LAYOUTS ===
  'contact-01': [
    { id: 'ct1-badge', type: 'badge', props: { content: 'Kontak', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'ct1-heading', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ct1-text', type: 'text', props: { content: 'Tim kami siap membantu Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'ct1-cta', type: 'button', props: { label: 'Kirim Pesan', href: '#pesan', variant: 'primary', size: 'medium', radius: 'full', background: '#4f46e5', color: '#ffffff' } },
    { id: 'ct1-cta2', type: 'button', props: { label: 'WhatsApp', href: '#wa', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
    { id: 'ct1-card-1', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct1-c1-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '28px', color: '#4f46e5', align: 'left' } }, { id: 'ct1-c1-title', type: 'heading', props: { content: 'Address', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct1-c1-desc', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
    { id: 'ct1-card-2', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct1-c2-icon', type: 'icon', props: { icon: 'FaPhone', size: '28px', color: '#4f46e5', align: 'left' } }, { id: 'ct1-c2-title', type: 'heading', props: { content: 'Phone', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct1-c2-desc', type: 'text', props: { content: '+62 21 555 0123', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
    { id: 'ct1-card-3', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct1-c3-icon', type: 'icon', props: { icon: 'FaEnvelope', size: '28px', color: '#4f46e5', align: 'left' } }, { id: 'ct1-c3-title', type: 'heading', props: { content: 'Email', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct1-c3-desc', type: 'text', props: { content: 'hello@company.com', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
  ],
  'contact-02': [
    { id: 'ct2-badge', type: 'badge', props: { content: 'Kontak', background: '#1c1917', color: '#e7c873' } },
    { id: 'ct2-heading', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ct2-text', type: 'text', props: { content: 'Tim kami siap membantu Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#a8a29e', align: 'center', margin: '0 0 20px 0' } },
    { id: 'ct2-cta', type: 'button', props: { label: 'Kirim Pesan', href: '#pesan', variant: 'primary', size: 'medium', radius: 'full', background: '#e7c873', color: '#1c1917' } },
    { id: 'ct2-cta2', type: 'button', props: { label: 'WhatsApp', href: '#wa', variant: 'ghost', size: 'medium', background: 'transparent', color: '#ffffff' } },
    { id: 'ct2-card-1', type: 'card', props: { variant: 'default', background: '#1c1917', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct2-c1-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '28px', color: '#e7c873', align: 'left' } }, { id: 'ct2-c1-title', type: 'heading', props: { content: 'Address', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '8px 0 2px 0' } }, { id: 'ct2-c1-desc', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta', fontSize: '14px', color: '#a8a29e', margin: '0' } } ] },
    { id: 'ct2-card-2', type: 'card', props: { variant: 'default', background: '#1c1917', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct2-c2-icon', type: 'icon', props: { icon: 'FaPhone', size: '28px', color: '#e7c873', align: 'left' } }, { id: 'ct2-c2-title', type: 'heading', props: { content: 'Phone', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '8px 0 2px 0' } }, { id: 'ct2-c2-desc', type: 'text', props: { content: '+62 21 555 0123', fontSize: '14px', color: '#a8a29e', margin: '0' } } ] },
    { id: 'ct2-card-3', type: 'card', props: { variant: 'default', background: '#1c1917', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct2-c3-icon', type: 'icon', props: { icon: 'FaEnvelope', size: '28px', color: '#e7c873', align: 'left' } }, { id: 'ct2-c3-title', type: 'heading', props: { content: 'Email', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '8px 0 2px 0' } }, { id: 'ct2-c3-desc', type: 'text', props: { content: 'hello@company.com', fontSize: '14px', color: '#a8a29e', margin: '0' } } ] },
  ],
  'contact-03': [
    { id: 'ct3-badge', type: 'badge', props: { content: 'Kontak', background: '#fff7ed', color: '#ea580c' } },
    { id: 'ct3-heading', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ct3-text', type: 'text', props: { content: 'Tim kami siap membantu Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'ct3-cta', type: 'button', props: { label: 'Kirim Pesan', href: '#pesan', variant: 'primary', size: 'medium', radius: 'full', background: '#ea580c', color: '#ffffff' } },
    { id: 'ct3-cta2', type: 'button', props: { label: 'WhatsApp', href: '#wa', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
    { id: 'ct3-card-1', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct3-c1-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '28px', color: '#ea580c', align: 'left' } }, { id: 'ct3-c1-title', type: 'heading', props: { content: 'Address', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct3-c1-desc', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
    { id: 'ct3-card-2', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct3-c2-icon', type: 'icon', props: { icon: 'FaPhone', size: '28px', color: '#ea580c', align: 'left' } }, { id: 'ct3-c2-title', type: 'heading', props: { content: 'Phone', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct3-c2-desc', type: 'text', props: { content: '+62 21 555 0123', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
    { id: 'ct3-card-3', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct3-c3-icon', type: 'icon', props: { icon: 'FaEnvelope', size: '28px', color: '#ea580c', align: 'left' } }, { id: 'ct3-c3-title', type: 'heading', props: { content: 'Email', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct3-c3-desc', type: 'text', props: { content: 'hello@company.com', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
  ],
  'contact-04': [
    { id: 'ct4-badge', type: 'badge', props: { content: 'Kontak', background: '#000000', color: '#facc15' } },
    { id: 'ct4-heading', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#000000', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ct4-text', type: 'text', props: { content: 'Tim kami siap membantu Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#000000', align: 'center', margin: '0 0 20px 0' } },
    { id: 'ct4-cta', type: 'button', props: { label: 'Kirim Pesan', href: '#pesan', variant: 'primary', size: 'medium', radius: 'full', background: '#000000', color: '#facc15' } },
    { id: 'ct4-cta2', type: 'button', props: { label: 'WhatsApp', href: '#wa', variant: 'ghost', size: 'medium', background: 'transparent', color: '#000000' } },
    { id: 'ct4-card-1', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#000000', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct4-c1-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '28px', color: '#000000', align: 'left' } }, { id: 'ct4-c1-title', type: 'heading', props: { content: 'Address', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#000000', margin: '8px 0 2px 0' } }, { id: 'ct4-c1-desc', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta', fontSize: '14px', color: '#000000', margin: '0' } } ] },
    { id: 'ct4-card-2', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#000000', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct4-c2-icon', type: 'icon', props: { icon: 'FaPhone', size: '28px', color: '#000000', align: 'left' } }, { id: 'ct4-c2-title', type: 'heading', props: { content: 'Phone', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#000000', margin: '8px 0 2px 0' } }, { id: 'ct4-c2-desc', type: 'text', props: { content: '+62 21 555 0123', fontSize: '14px', color: '#000000', margin: '0' } } ] },
    { id: 'ct4-card-3', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#000000', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct4-c3-icon', type: 'icon', props: { icon: 'FaEnvelope', size: '28px', color: '#000000', align: 'left' } }, { id: 'ct4-c3-title', type: 'heading', props: { content: 'Email', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#000000', margin: '8px 0 2px 0' } }, { id: 'ct4-c3-desc', type: 'text', props: { content: 'hello@company.com', fontSize: '14px', color: '#000000', margin: '0' } } ] },
  ],
  'contact-05': [
    { id: 'ct5-badge', type: 'badge', props: { content: 'Kontak', background: '#ffffff', color: '#78716c' } },
    { id: 'ct5-heading', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#1c1917', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ct5-text', type: 'text', props: { content: 'Tim kami siap membantu Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#78716c', align: 'center', margin: '0 0 20px 0' } },
    { id: 'ct5-cta', type: 'button', props: { label: 'Kirim Pesan', href: '#pesan', variant: 'primary', size: 'medium', radius: 'full', background: '#1c1917', color: '#ffffff' } },
    { id: 'ct5-cta2', type: 'button', props: { label: 'WhatsApp', href: '#wa', variant: 'ghost', size: 'medium', background: 'transparent', color: '#1c1917' } },
    { id: 'ct5-card-1', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct5-c1-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '28px', color: '#1c1917', align: 'left' } }, { id: 'ct5-c1-title', type: 'heading', props: { content: 'Address', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#1c1917', margin: '8px 0 2px 0' } }, { id: 'ct5-c1-desc', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta', fontSize: '14px', color: '#78716c', margin: '0' } } ] },
    { id: 'ct5-card-2', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct5-c2-icon', type: 'icon', props: { icon: 'FaPhone', size: '28px', color: '#1c1917', align: 'left' } }, { id: 'ct5-c2-title', type: 'heading', props: { content: 'Phone', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#1c1917', margin: '8px 0 2px 0' } }, { id: 'ct5-c2-desc', type: 'text', props: { content: '+62 21 555 0123', fontSize: '14px', color: '#78716c', margin: '0' } } ] },
    { id: 'ct5-card-3', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct5-c3-icon', type: 'icon', props: { icon: 'FaEnvelope', size: '28px', color: '#1c1917', align: 'left' } }, { id: 'ct5-c3-title', type: 'heading', props: { content: 'Email', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#1c1917', margin: '8px 0 2px 0' } }, { id: 'ct5-c3-desc', type: 'text', props: { content: 'hello@company.com', fontSize: '14px', color: '#78716c', margin: '0' } } ] },
  ],
  'contact-06': [
    { id: 'ct6-badge', type: 'badge', props: { content: 'Kontak', background: '#1e1b4b', color: '#a5b4fc' } },
    { id: 'ct6-heading', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ct6-text', type: 'text', props: { content: 'Tim kami siap membantu Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#a5b4fc', align: 'center', margin: '0 0 20px 0' } },
    { id: 'ct6-cta', type: 'button', props: { label: 'Kirim Pesan', href: '#pesan', variant: 'primary', size: 'medium', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
    { id: 'ct6-cta2', type: 'button', props: { label: 'WhatsApp', href: '#wa', variant: 'ghost', size: 'medium', background: 'transparent', color: '#ffffff' } },
    { id: 'ct6-card-1', type: 'card', props: { variant: 'default', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct6-c1-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '28px', color: '#8b5cf6', align: 'left' } }, { id: 'ct6-c1-title', type: 'heading', props: { content: 'Address', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '8px 0 2px 0' } }, { id: 'ct6-c1-desc', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta', fontSize: '14px', color: '#a5b4fc', margin: '0' } } ] },
    { id: 'ct6-card-2', type: 'card', props: { variant: 'default', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct6-c2-icon', type: 'icon', props: { icon: 'FaPhone', size: '28px', color: '#8b5cf6', align: 'left' } }, { id: 'ct6-c2-title', type: 'heading', props: { content: 'Phone', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '8px 0 2px 0' } }, { id: 'ct6-c2-desc', type: 'text', props: { content: '+62 21 555 0123', fontSize: '14px', color: '#a5b4fc', margin: '0' } } ] },
    { id: 'ct6-card-3', type: 'card', props: { variant: 'default', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct6-c3-icon', type: 'icon', props: { icon: 'FaEnvelope', size: '28px', color: '#8b5cf6', align: 'left' } }, { id: 'ct6-c3-title', type: 'heading', props: { content: 'Email', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '8px 0 2px 0' } }, { id: 'ct6-c3-desc', type: 'text', props: { content: 'hello@company.com', fontSize: '14px', color: '#a5b4fc', margin: '0' } } ] },
  ],
  'contact-07': [
    { id: 'ct7-badge', type: 'badge', props: { content: 'Kontak', background: '#052e16', color: '#4ade80' } },
    { id: 'ct7-heading', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#e2e8f0', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ct7-text', type: 'text', props: { content: 'Tim kami siap membantu Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#94a3b8', align: 'center', margin: '0 0 20px 0' } },
    { id: 'ct7-cta', type: 'button', props: { label: 'Kirim Pesan', href: '#pesan', variant: 'primary', size: 'medium', radius: 'full', background: '#22c55e', color: '#052e16' } },
    { id: 'ct7-cta2', type: 'button', props: { label: 'WhatsApp', href: '#wa', variant: 'ghost', size: 'medium', background: 'transparent', color: '#e2e8f0' } },
    { id: 'ct7-card-1', type: 'card', props: { variant: 'default', background: '#0f172a', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct7-c1-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '28px', color: '#22c55e', align: 'left' } }, { id: 'ct7-c1-title', type: 'heading', props: { content: 'Address', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#e2e8f0', margin: '8px 0 2px 0' } }, { id: 'ct7-c1-desc', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta', fontSize: '14px', color: '#94a3b8', margin: '0' } } ] },
    { id: 'ct7-card-2', type: 'card', props: { variant: 'default', background: '#0f172a', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct7-c2-icon', type: 'icon', props: { icon: 'FaPhone', size: '28px', color: '#22c55e', align: 'left' } }, { id: 'ct7-c2-title', type: 'heading', props: { content: 'Phone', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#e2e8f0', margin: '8px 0 2px 0' } }, { id: 'ct7-c2-desc', type: 'text', props: { content: '+62 21 555 0123', fontSize: '14px', color: '#94a3b8', margin: '0' } } ] },
    { id: 'ct7-card-3', type: 'card', props: { variant: 'default', background: '#0f172a', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct7-c3-icon', type: 'icon', props: { icon: 'FaEnvelope', size: '28px', color: '#22c55e', align: 'left' } }, { id: 'ct7-c3-title', type: 'heading', props: { content: 'Email', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#e2e8f0', margin: '8px 0 2px 0' } }, { id: 'ct7-c3-desc', type: 'text', props: { content: 'hello@company.com', fontSize: '14px', color: '#94a3b8', margin: '0' } } ] },
  ],
  'contact-08': [
    { id: 'ct8-badge', type: 'badge', props: { content: 'Kontak', background: '#fce7f3', color: '#be185d' } },
    { id: 'ct8-heading', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#831843', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ct8-text', type: 'text', props: { content: 'Tim kami siap membantu Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#9d7b8c', align: 'center', margin: '0 0 20px 0' } },
    { id: 'ct8-cta', type: 'button', props: { label: 'Kirim Pesan', href: '#pesan', variant: 'primary', size: 'medium', radius: 'full', background: '#db2777', color: '#ffffff' } },
    { id: 'ct8-cta2', type: 'button', props: { label: 'WhatsApp', href: '#wa', variant: 'ghost', size: 'medium', background: 'transparent', color: '#831843' } },
    { id: 'ct8-card-1', type: 'card', props: { variant: 'default', background: '#fff1f2', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct8-c1-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '28px', color: '#db2777', align: 'left' } }, { id: 'ct8-c1-title', type: 'heading', props: { content: 'Address', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#831843', margin: '8px 0 2px 0' } }, { id: 'ct8-c1-desc', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta', fontSize: '14px', color: '#9d7b8c', margin: '0' } } ] },
    { id: 'ct8-card-2', type: 'card', props: { variant: 'default', background: '#fff1f2', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct8-c2-icon', type: 'icon', props: { icon: 'FaPhone', size: '28px', color: '#db2777', align: 'left' } }, { id: 'ct8-c2-title', type: 'heading', props: { content: 'Phone', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#831843', margin: '8px 0 2px 0' } }, { id: 'ct8-c2-desc', type: 'text', props: { content: '+62 21 555 0123', fontSize: '14px', color: '#9d7b8c', margin: '0' } } ] },
    { id: 'ct8-card-3', type: 'card', props: { variant: 'default', background: '#fff1f2', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct8-c3-icon', type: 'icon', props: { icon: 'FaEnvelope', size: '28px', color: '#db2777', align: 'left' } }, { id: 'ct8-c3-title', type: 'heading', props: { content: 'Email', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#831843', margin: '8px 0 2px 0' } }, { id: 'ct8-c3-desc', type: 'text', props: { content: 'hello@company.com', fontSize: '14px', color: '#9d7b8c', margin: '0' } } ] },
  ],
  'contact-09': [
    { id: 'ct9-badge', type: 'badge', props: { content: 'Kontak', background: '#78350f', color: '#fde68a' } },
    { id: 'ct9-heading', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#78350f', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ct9-text', type: 'text', props: { content: 'Tim kami siap membantu Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#92400e', align: 'center', margin: '0 0 20px 0' } },
    { id: 'ct9-cta', type: 'button', props: { label: 'Kirim Pesan', href: '#pesan', variant: 'primary', size: 'medium', radius: 'full', background: '#92400e', color: '#fef3c7' } },
    { id: 'ct9-cta2', type: 'button', props: { label: 'WhatsApp', href: '#wa', variant: 'ghost', size: 'medium', background: 'transparent', color: '#78350f' } },
    { id: 'ct9-card-1', type: 'card', props: { variant: 'default', background: '#fffbeb', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct9-c1-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '28px', color: '#92400e', align: 'left' } }, { id: 'ct9-c1-title', type: 'heading', props: { content: 'Address', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#78350f', margin: '8px 0 2px 0' } }, { id: 'ct9-c1-desc', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta', fontSize: '14px', color: '#92400e', margin: '0' } } ] },
    { id: 'ct9-card-2', type: 'card', props: { variant: 'default', background: '#fffbeb', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct9-c2-icon', type: 'icon', props: { icon: 'FaPhone', size: '28px', color: '#92400e', align: 'left' } }, { id: 'ct9-c2-title', type: 'heading', props: { content: 'Phone', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#78350f', margin: '8px 0 2px 0' } }, { id: 'ct9-c2-desc', type: 'text', props: { content: '+62 21 555 0123', fontSize: '14px', color: '#92400e', margin: '0' } } ] },
    { id: 'ct9-card-3', type: 'card', props: { variant: 'default', background: '#fffbeb', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct9-c3-icon', type: 'icon', props: { icon: 'FaEnvelope', size: '28px', color: '#92400e', align: 'left' } }, { id: 'ct9-c3-title', type: 'heading', props: { content: 'Email', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#78350f', margin: '8px 0 2px 0' } }, { id: 'ct9-c3-desc', type: 'text', props: { content: 'hello@company.com', fontSize: '14px', color: '#92400e', margin: '0' } } ] },
  ],
  'contact-10': [
    { id: 'ct10-badge', type: 'badge', props: { content: 'Kontak', background: '#fef2f2', color: '#dc2626' } },
    { id: 'ct10-heading', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ct10-text', type: 'text', props: { content: 'Tim kami siap membantu Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'ct10-cta', type: 'button', props: { label: 'Kirim Pesan', href: '#pesan', variant: 'primary', size: 'medium', radius: 'full', background: '#dc2626', color: '#ffffff' } },
    { id: 'ct10-cta2', type: 'button', props: { label: 'WhatsApp', href: '#wa', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
    { id: 'ct10-card-1', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct10-c1-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '28px', color: '#dc2626', align: 'left' } }, { id: 'ct10-c1-title', type: 'heading', props: { content: 'Address', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct10-c1-desc', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
    { id: 'ct10-card-2', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct10-c2-icon', type: 'icon', props: { icon: 'FaPhone', size: '28px', color: '#dc2626', align: 'left' } }, { id: 'ct10-c2-title', type: 'heading', props: { content: 'Phone', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct10-c2-desc', type: 'text', props: { content: '+62 21 555 0123', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
    { id: 'ct10-card-3', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct10-c3-icon', type: 'icon', props: { icon: 'FaEnvelope', size: '28px', color: '#dc2626', align: 'left' } }, { id: 'ct10-c3-title', type: 'heading', props: { content: 'Email', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct10-c3-desc', type: 'text', props: { content: 'hello@company.com', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
  ],
  'contact-11': [
    { id: 'ct11-badge', type: 'badge', props: { content: 'Kontak', background: '#ffffff', color: '#7c3aed' } },
    { id: 'ct11-heading', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ct11-text', type: 'text', props: { content: 'Tim kami siap membantu Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#ddd6fe', align: 'center', margin: '0 0 20px 0' } },
    { id: 'ct11-cta', type: 'button', props: { label: 'Kirim Pesan', href: '#pesan', variant: 'primary', size: 'medium', radius: 'full', background: '#ffffff', color: '#6d28d9' } },
    { id: 'ct11-cta2', type: 'button', props: { label: 'WhatsApp', href: '#wa', variant: 'ghost', size: 'medium', background: 'transparent', color: '#ffffff' } },
    { id: 'ct11-card-1', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct11-c1-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '28px', color: '#ffffff', align: 'left' } }, { id: 'ct11-c1-title', type: 'heading', props: { content: 'Address', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct11-c1-desc', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
    { id: 'ct11-card-2', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct11-c2-icon', type: 'icon', props: { icon: 'FaPhone', size: '28px', color: '#ffffff', align: 'left' } }, { id: 'ct11-c2-title', type: 'heading', props: { content: 'Phone', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct11-c2-desc', type: 'text', props: { content: '+62 21 555 0123', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
    { id: 'ct11-card-3', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct11-c3-icon', type: 'icon', props: { icon: 'FaEnvelope', size: '28px', color: '#ffffff', align: 'left' } }, { id: 'ct11-c3-title', type: 'heading', props: { content: 'Email', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct11-c3-desc', type: 'text', props: { content: 'hello@company.com', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
  ],
  'contact-12': [
    { id: 'ct12-badge', type: 'badge', props: { content: 'Kontak', background: '#0f172a', color: '#38bdf8' } },
    { id: 'ct12-heading', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ct12-text', type: 'text', props: { content: 'Tim kami siap membantu Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#94a3b8', align: 'center', margin: '0 0 20px 0' } },
    { id: 'ct12-cta', type: 'button', props: { label: 'Kirim Pesan', href: '#pesan', variant: 'primary', size: 'medium', radius: 'full', background: '#38bdf8', color: '#082f49' } },
    { id: 'ct12-cta2', type: 'button', props: { label: 'WhatsApp', href: '#wa', variant: 'ghost', size: 'medium', background: 'transparent', color: '#ffffff' } },
    { id: 'ct12-card-1', type: 'card', props: { variant: 'default', background: '#1e293b', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct12-c1-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '28px', color: '#38bdf8', align: 'left' } }, { id: 'ct12-c1-title', type: 'heading', props: { content: 'Address', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '8px 0 2px 0' } }, { id: 'ct12-c1-desc', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta', fontSize: '14px', color: '#94a3b8', margin: '0' } } ] },
    { id: 'ct12-card-2', type: 'card', props: { variant: 'default', background: '#1e293b', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct12-c2-icon', type: 'icon', props: { icon: 'FaPhone', size: '28px', color: '#38bdf8', align: 'left' } }, { id: 'ct12-c2-title', type: 'heading', props: { content: 'Phone', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '8px 0 2px 0' } }, { id: 'ct12-c2-desc', type: 'text', props: { content: '+62 21 555 0123', fontSize: '14px', color: '#94a3b8', margin: '0' } } ] },
    { id: 'ct12-card-3', type: 'card', props: { variant: 'default', background: '#1e293b', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct12-c3-icon', type: 'icon', props: { icon: 'FaEnvelope', size: '28px', color: '#38bdf8', align: 'left' } }, { id: 'ct12-c3-title', type: 'heading', props: { content: 'Email', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '8px 0 2px 0' } }, { id: 'ct12-c3-desc', type: 'text', props: { content: 'hello@company.com', fontSize: '14px', color: '#94a3b8', margin: '0' } } ] },
  ],
  'contact-13': [
    { id: 'ct13-badge', type: 'badge', props: { content: 'Kontak', background: '#fce7f3', color: '#ec4899' } },
    { id: 'ct13-heading', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ct13-text', type: 'text', props: { content: 'Tim kami siap membantu Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'ct13-cta', type: 'button', props: { label: 'Kirim Pesan', href: '#pesan', variant: 'primary', size: 'medium', radius: 'full', background: '#ec4899', color: '#ffffff' } },
    { id: 'ct13-cta2', type: 'button', props: { label: 'WhatsApp', href: '#wa', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
    { id: 'ct13-card-1', type: 'card', props: { variant: 'default', background: '#fff1f2', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct13-c1-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '28px', color: '#ec4899', align: 'left' } }, { id: 'ct13-c1-title', type: 'heading', props: { content: 'Address', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct13-c1-desc', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
    { id: 'ct13-card-2', type: 'card', props: { variant: 'default', background: '#fff1f2', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct13-c2-icon', type: 'icon', props: { icon: 'FaPhone', size: '28px', color: '#ec4899', align: 'left' } }, { id: 'ct13-c2-title', type: 'heading', props: { content: 'Phone', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct13-c2-desc', type: 'text', props: { content: '+62 21 555 0123', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
    { id: 'ct13-card-3', type: 'card', props: { variant: 'default', background: '#fff1f2', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct13-c3-icon', type: 'icon', props: { icon: 'FaEnvelope', size: '28px', color: '#ec4899', align: 'left' } }, { id: 'ct13-c3-title', type: 'heading', props: { content: 'Email', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct13-c3-desc', type: 'text', props: { content: 'hello@company.com', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
  ],
  'contact-14': [
    { id: 'ct14-badge', type: 'badge', props: { content: 'Kontak', background: '#eff6ff', color: '#1d4ed8' } },
    { id: 'ct14-heading', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ct14-text', type: 'text', props: { content: 'Tim kami siap membantu Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'ct14-cta', type: 'button', props: { label: 'Kirim Pesan', href: '#pesan', variant: 'primary', size: 'medium', radius: 'full', background: '#1e40af', color: '#ffffff' } },
    { id: 'ct14-cta2', type: 'button', props: { label: 'WhatsApp', href: '#wa', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
    { id: 'ct14-card-1', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct14-c1-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '28px', color: '#1e40af', align: 'left' } }, { id: 'ct14-c1-title', type: 'heading', props: { content: 'Address', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct14-c1-desc', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
    { id: 'ct14-card-2', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct14-c2-icon', type: 'icon', props: { icon: 'FaPhone', size: '28px', color: '#1e40af', align: 'left' } }, { id: 'ct14-c2-title', type: 'heading', props: { content: 'Phone', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct14-c2-desc', type: 'text', props: { content: '+62 21 555 0123', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
    { id: 'ct14-card-3', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct14-c3-icon', type: 'icon', props: { icon: 'FaEnvelope', size: '28px', color: '#1e40af', align: 'left' } }, { id: 'ct14-c3-title', type: 'heading', props: { content: 'Email', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct14-c3-desc', type: 'text', props: { content: 'hello@company.com', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
  ],
  'contact-15': [
    { id: 'ct15-badge', type: 'badge', props: { content: 'Kontak', background: '#0f172a', color: '#ffffff' } },
    { id: 'ct15-heading', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ct15-text', type: 'text', props: { content: 'Tim kami siap membantu Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'ct15-cta', type: 'button', props: { label: 'Kirim Pesan', href: '#pesan', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    { id: 'ct15-cta2', type: 'button', props: { label: 'WhatsApp', href: '#wa', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
    { id: 'ct15-card-1', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct15-c1-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '28px', color: '#0f172a', align: 'left' } }, { id: 'ct15-c1-title', type: 'heading', props: { content: 'Address', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct15-c1-desc', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
    { id: 'ct15-card-2', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct15-c2-icon', type: 'icon', props: { icon: 'FaPhone', size: '28px', color: '#0f172a', align: 'left' } }, { id: 'ct15-c2-title', type: 'heading', props: { content: 'Phone', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct15-c2-desc', type: 'text', props: { content: '+62 21 555 0123', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
    { id: 'ct15-card-3', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct15-c3-icon', type: 'icon', props: { icon: 'FaEnvelope', size: '28px', color: '#0f172a', align: 'left' } }, { id: 'ct15-c3-title', type: 'heading', props: { content: 'Email', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct15-c3-desc', type: 'text', props: { content: 'hello@company.com', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
  ],
  'contact-16': [
    { id: 'ct16-badge', type: 'badge', props: { content: 'Kontak', background: '#dcfce7', color: '#166534' } },
    { id: 'ct16-heading', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#064e3b', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ct16-text', type: 'text', props: { content: 'Tim kami siap membantu Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#4d7c0f', align: 'center', margin: '0 0 20px 0' } },
    { id: 'ct16-cta', type: 'button', props: { label: 'Kirim Pesan', href: '#pesan', variant: 'primary', size: 'medium', radius: 'full', background: '#16a34a', color: '#ffffff' } },
    { id: 'ct16-cta2', type: 'button', props: { label: 'WhatsApp', href: '#wa', variant: 'ghost', size: 'medium', background: 'transparent', color: '#064e3b' } },
    { id: 'ct16-card-1', type: 'card', props: { variant: 'default', background: '#f0fdf4', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct16-c1-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '28px', color: '#16a34a', align: 'left' } }, { id: 'ct16-c1-title', type: 'heading', props: { content: 'Address', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#064e3b', margin: '8px 0 2px 0' } }, { id: 'ct16-c1-desc', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta', fontSize: '14px', color: '#166534', margin: '0' } } ] },
    { id: 'ct16-card-2', type: 'card', props: { variant: 'default', background: '#f0fdf4', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct16-c2-icon', type: 'icon', props: { icon: 'FaPhone', size: '28px', color: '#16a34a', align: 'left' } }, { id: 'ct16-c2-title', type: 'heading', props: { content: 'Phone', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#064e3b', margin: '8px 0 2px 0' } }, { id: 'ct16-c2-desc', type: 'text', props: { content: '+62 21 555 0123', fontSize: '14px', color: '#166534', margin: '0' } } ] },
    { id: 'ct16-card-3', type: 'card', props: { variant: 'default', background: '#f0fdf4', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct16-c3-icon', type: 'icon', props: { icon: 'FaEnvelope', size: '28px', color: '#16a34a', align: 'left' } }, { id: 'ct16-c3-title', type: 'heading', props: { content: 'Email', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#064e3b', margin: '8px 0 2px 0' } }, { id: 'ct16-c3-desc', type: 'text', props: { content: 'hello@company.com', fontSize: '14px', color: '#166534', margin: '0' } } ] },
  ],
  'contact-17': [
    { id: 'ct17-badge', type: 'badge', props: { content: 'Kontak', background: '#dc2626', color: '#ffffff' } },
    { id: 'ct17-heading', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ct17-text', type: 'text', props: { content: 'Tim kami siap membantu Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#fecaca', align: 'center', margin: '0 0 20px 0' } },
    { id: 'ct17-cta', type: 'button', props: { label: 'Kirim Pesan', href: '#pesan', variant: 'primary', size: 'medium', radius: 'full', background: '#dc2626', color: '#ffffff' } },
    { id: 'ct17-cta2', type: 'button', props: { label: 'WhatsApp', href: '#wa', variant: 'ghost', size: 'medium', background: 'transparent', color: '#ffffff' } },
    { id: 'ct17-card-1', type: 'card', props: { variant: 'default', background: '#171717', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct17-c1-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '28px', color: '#dc2626', align: 'left' } }, { id: 'ct17-c1-title', type: 'heading', props: { content: 'Address', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '8px 0 2px 0' } }, { id: 'ct17-c1-desc', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta', fontSize: '14px', color: '#fecaca', margin: '0' } } ] },
    { id: 'ct17-card-2', type: 'card', props: { variant: 'default', background: '#171717', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct17-c2-icon', type: 'icon', props: { icon: 'FaPhone', size: '28px', color: '#dc2626', align: 'left' } }, { id: 'ct17-c2-title', type: 'heading', props: { content: 'Phone', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '8px 0 2px 0' } }, { id: 'ct17-c2-desc', type: 'text', props: { content: '+62 21 555 0123', fontSize: '14px', color: '#fecaca', margin: '0' } } ] },
    { id: 'ct17-card-3', type: 'card', props: { variant: 'default', background: '#171717', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct17-c3-icon', type: 'icon', props: { icon: 'FaEnvelope', size: '28px', color: '#dc2626', align: 'left' } }, { id: 'ct17-c3-title', type: 'heading', props: { content: 'Email', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '8px 0 2px 0' } }, { id: 'ct17-c3-desc', type: 'text', props: { content: 'hello@company.com', fontSize: '14px', color: '#fecaca', margin: '0' } } ] },
  ],
  'contact-18': [
    { id: 'ct18-badge', type: 'badge', props: { content: 'Kontak', background: '#fff7ed', color: '#ea580c' } },
    { id: 'ct18-heading', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ct18-text', type: 'text', props: { content: 'Tim kami siap membantu Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'ct18-cta', type: 'button', props: { label: 'Kirim Pesan', href: '#pesan', variant: 'primary', size: 'medium', radius: 'full', background: '#f97316', color: '#ffffff' } },
    { id: 'ct18-cta2', type: 'button', props: { label: 'WhatsApp', href: '#wa', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
    { id: 'ct18-card-1', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct18-c1-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '28px', color: '#f97316', align: 'left' } }, { id: 'ct18-c1-title', type: 'heading', props: { content: 'Address', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct18-c1-desc', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
    { id: 'ct18-card-2', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct18-c2-icon', type: 'icon', props: { icon: 'FaPhone', size: '28px', color: '#f97316', align: 'left' } }, { id: 'ct18-c2-title', type: 'heading', props: { content: 'Phone', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct18-c2-desc', type: 'text', props: { content: '+62 21 555 0123', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
    { id: 'ct18-card-3', type: 'card', props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct18-c3-icon', type: 'icon', props: { icon: 'FaEnvelope', size: '28px', color: '#f97316', align: 'left' } }, { id: 'ct18-c3-title', type: 'heading', props: { content: 'Email', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct18-c3-desc', type: 'text', props: { content: 'hello@company.com', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
  ],
  'contact-19': [
    { id: 'ct19-badge', type: 'badge', props: { content: 'Kontak', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'ct19-heading', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ct19-text', type: 'text', props: { content: 'Tim kami siap membantu Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'ct19-cta', type: 'button', props: { label: 'Kirim Pesan', href: '#pesan', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    { id: 'ct19-cta2', type: 'button', props: { label: 'WhatsApp', href: '#wa', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
    { id: 'ct19-card-1', type: 'card', props: { variant: 'default', background: 'rgba(255,255,255,0.85)', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct19-c1-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '28px', color: '#0f172a', align: 'left' } }, { id: 'ct19-c1-title', type: 'heading', props: { content: 'Address', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct19-c1-desc', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
    { id: 'ct19-card-2', type: 'card', props: { variant: 'default', background: 'rgba(255,255,255,0.85)', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct19-c2-icon', type: 'icon', props: { icon: 'FaPhone', size: '28px', color: '#0f172a', align: 'left' } }, { id: 'ct19-c2-title', type: 'heading', props: { content: 'Phone', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct19-c2-desc', type: 'text', props: { content: '+62 21 555 0123', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
    { id: 'ct19-card-3', type: 'card', props: { variant: 'default', background: 'rgba(255,255,255,0.85)', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct19-c3-icon', type: 'icon', props: { icon: 'FaEnvelope', size: '28px', color: '#0f172a', align: 'left' } }, { id: 'ct19-c3-title', type: 'heading', props: { content: 'Email', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px 0' } }, { id: 'ct19-c3-desc', type: 'text', props: { content: 'hello@company.com', fontSize: '14px', color: '#64748b', margin: '0' } } ] },
  ],
  'contact-20': [
    { id: 'ct20-badge', type: 'badge', props: { content: 'Kontak', background: '#1e1b4b', color: '#c4b5fd' } },
    { id: 'ct20-heading', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ct20-text', type: 'text', props: { content: 'Tim kami siap membantu Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#a5b4fc', align: 'center', margin: '0 0 20px 0' } },
    { id: 'ct20-cta', type: 'button', props: { label: 'Kirim Pesan', href: '#pesan', variant: 'primary', size: 'medium', radius: 'full', background: '#6366f1', color: '#ffffff' } },
    { id: 'ct20-cta2', type: 'button', props: { label: 'WhatsApp', href: '#wa', variant: 'ghost', size: 'medium', background: 'transparent', color: '#ffffff' } },
    { id: 'ct20-card-1', type: 'card', props: { variant: 'default', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct20-c1-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '28px', color: '#6366f1', align: 'left' } }, { id: 'ct20-c1-title', type: 'heading', props: { content: 'Address', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '8px 0 2px 0' } }, { id: 'ct20-c1-desc', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta', fontSize: '14px', color: '#a5b4fc', margin: '0' } } ] },
    { id: 'ct20-card-2', type: 'card', props: { variant: 'default', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct20-c2-icon', type: 'icon', props: { icon: 'FaPhone', size: '28px', color: '#6366f1', align: 'left' } }, { id: 'ct20-c2-title', type: 'heading', props: { content: 'Phone', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '8px 0 2px 0' } }, { id: 'ct20-c2-desc', type: 'text', props: { content: '+62 21 555 0123', fontSize: '14px', color: '#a5b4fc', margin: '0' } } ] },
    { id: 'ct20-card-3', type: 'card', props: { variant: 'default', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'lift', padding: '20px' }, childrenComponents: [ { id: 'ct20-c3-icon', type: 'icon', props: { icon: 'FaEnvelope', size: '28px', color: '#6366f1', align: 'left' } }, { id: 'ct20-c3-title', type: 'heading', props: { content: 'Email', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', margin: '8px 0 2px 0' } }, { id: 'ct20-c3-desc', type: 'text', props: { content: 'hello@company.com', fontSize: '14px', color: '#a5b4fc', margin: '0' } } ] },
  ],



  // === FOOTER LAYOUTS ===
  'footer-01': [
    { id: 'brand-1', type: 'heading', props: { content: 'LUMIÈRE', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-1', type: 'text', props: { content: 'Studio kreatif premium untuk tim ambisius.', fontSize: '14px', color: '#64748b', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-work', type: 'button', props: { label: 'Work', href: '#work', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'link-studio', type: 'button', props: { label: 'Studio', href: '#studio', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'cta-book', type: 'button', props: { label: 'Book a Call →', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    { id: 'copy-1', type: 'text', props: { content: '© 2026 Lumière Studio.', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '0' } },
  ],
  'footer-02': [
    { id: 'brand-2', type: 'heading', props: { content: 'NOIR', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#f8fafc', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-2', type: 'text', props: { content: 'Private collections & bespoke service.', fontSize: '14px', color: '#78716c', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-maison', type: 'button', props: { label: 'Maison', href: '#maison', variant: 'ghost', size: 'small', background: 'transparent', color: '#a8a29e' } },
    { id: 'cta-reserve', type: 'button', props: { label: 'Reserve', href: '#reserve', variant: 'outline', size: 'small', radius: 'full', background: '#c9a227', color: '#c9a227' } },
    { id: 'copy-2', type: 'text', props: { content: '© 2026 Noir Maison.', fontSize: '12px', color: '#57534e', align: 'center', margin: '0' } },
  ],
  'footer-03': [
    { id: 'brand-3', type: 'heading', props: { content: 'aurora', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-3', type: 'text', props: { content: 'Build websites that feel like magic.', fontSize: '14px', color: '#64748b', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-product', type: 'button', props: { label: 'Product', href: '#product', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'link-pricing', type: 'button', props: { label: 'Pricing', href: '#pricing', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'cta-trial', type: 'button', props: { label: 'Start Free →', href: '#trial', variant: 'primary', size: 'small', radius: 'full', background: '#6366f1', color: '#ffffff' } },
    { id: 'copy-3', type: 'text', props: { content: '© 2026 Aurora Inc.', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '0' } },
  ],
  'footer-04': [
    { id: 'brand-4', type: 'heading', props: { content: 'Emerald', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#f0fdf4', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-4', type: 'text', props: { content: 'Botanical rituals, carbon-neutral.', fontSize: '14px', color: '#86efac', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-shop', type: 'button', props: { label: 'Shop', href: '#shop', variant: 'ghost', size: 'small', background: 'transparent', color: '#bbf7d0' } },
    { id: 'cta-join', type: 'button', props: { label: 'Join Green Club →', href: '#club', variant: 'primary', size: 'small', radius: 'full', background: '#22c55e', color: '#ffffff' } },
    { id: 'copy-4', type: 'text', props: { content: '© 2026 Emerald Botanics.', fontSize: '12px', color: '#4ade80', align: 'center', margin: '0' } },
  ],

  'footer-05': [
    { id: 'brand-5', type: 'heading', props: { content: 'VELOCE', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-5', type: 'text', props: { content: 'Born to outrun. 680HP hybrid.', fontSize: '14px', color: '#fecaca', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-models', type: 'button', props: { label: 'Models', href: '#models', variant: 'ghost', size: 'small', background: 'transparent', color: '#fca5a5' } },
    { id: 'cta-test', type: 'button', props: { label: 'Book Test Drive →', href: '#test', variant: 'primary', size: 'small', radius: 'md', background: '#ef4444', color: '#ffffff' } },
    { id: 'copy-5', type: 'text', props: { content: '© 2026 Veloce Motors.', fontSize: '12px', color: '#f87171', align: 'center', margin: '0' } },
  ],
  'footer-06': [
    { id: 'brand-6', type: 'heading', props: { content: 'Sakura', level: 'h3', fontSize: '24px', fontWeight: '700', color: '#831843', align: 'center', margin: '0 0 12px 0' } },
    { id: 'desc-6', type: 'text', props: { content: 'Celebrations styled with love.', fontSize: '14px', color: '#9d7b8c', align: 'center', margin: '0 0 20px 0' } },
    { id: 'link-bridal', type: 'button', props: { label: 'Bridal', href: '#bridal', variant: 'ghost', size: 'small', background: 'transparent', color: '#be185d' } },
    { id: 'cta-book', type: 'button', props: { label: 'Book Consultation', href: '#book', variant: 'primary', size: 'small', radius: 'full', background: '#db2777', color: '#ffffff' } },
    { id: 'copy-6', type: 'text', props: { content: '© 2026 Sakura Studio.', fontSize: '12px', color: '#d48aa8', align: 'center', margin: '0' } },
  ],
  'footer-07': [
    { id: 'brand-7', type: 'heading', props: { content: 'OBSIDIAN', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-7', type: 'text', props: { content: 'Infrastructure that never sleeps.', fontSize: '14px', color: '#94a3b8', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-cloud', type: 'button', props: { label: 'Cloud', href: '#cloud', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'cta-trial', type: 'button', props: { label: 'Start Free Trial →', href: '#trial', variant: 'primary', size: 'small', radius: 'lg', background: '#ffffff', color: '#0f172a' } },
    { id: 'copy-7', type: 'text', props: { content: '© 2026 Obsidian Cloud.', fontSize: '12px', color: '#475569', align: 'center', margin: '0' } },
  ],
  'footer-08': [
    { id: 'brand-8', type: 'heading', props: { content: 'PAPERCUT', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#000000', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-8', type: 'text', props: { content: 'Studio anti-template.', fontSize: '14px', color: '#000000', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-work', type: 'button', props: { label: 'WORK', href: '#work', variant: 'ghost', size: 'small', background: 'transparent', color: '#000000' } },
    { id: 'cta-hire', type: 'button', props: { label: 'HIRE US', href: '#hire', variant: 'primary', size: 'small', radius: 'none', background: '#000000', color: '#facc15' } },
    { id: 'copy-8', type: 'text', props: { content: '© 2026 Papercut Studio.', fontSize: '12px', color: '#000000', align: 'center', margin: '0' } },
  ],
  'footer-09': [
    { id: 'brand-9', type: 'heading', props: { content: 'Serenity', level: 'h3', fontSize: '22px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 12px 0' } },
    { id: 'desc-9', type: 'text', props: { content: 'A private sanctuary in Ubud.', fontSize: '14px', color: '#78716c', align: 'center', margin: '0 0 20px 0' } },
    { id: 'link-stay', type: 'button', props: { label: 'Stay', href: '#stay', variant: 'ghost', size: 'small', background: 'transparent', color: '#78716c' } },
    { id: 'copy-9', type: 'text', props: { content: '© 2026 Serenity Ubud.', fontSize: '12px', color: '#a8a29e', align: 'center', margin: '0' } },
  ],
  'footer-10': [
    { id: 'brand-10', type: 'heading', props: { content: 'NEBULA', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-10', type: 'text', props: { content: 'A universe that never sleeps.', fontSize: '14px', color: '#a5b4fc', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-missions', type: 'button', props: { label: 'Missions', href: '#missions', variant: 'ghost', size: 'small', background: 'transparent', color: '#c4b5fd' } },
    { id: 'cta-launch', type: 'button', props: { label: 'Launch App', href: '#app', variant: 'primary', size: 'small', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
    { id: 'copy-10', type: 'text', props: { content: '© 2026 Nebula Universe.', fontSize: '12px', color: '#6d6fa8', align: 'center', margin: '0' } },
  ],
  'footer-11': [
    { id: 'brand-11', type: 'heading', props: { content: 'MONOCLE', level: 'h3', fontSize: '26px', fontWeight: '700', color: '#1c1917', align: 'left', margin: '0 0 8px 0' } },
    { id: 'desc-11', type: 'text', props: { content: 'Autumn 2026 — craft over scale.', fontSize: '14px', color: '#57534e', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-stories', type: 'button', props: { label: 'Stories', href: '#stories', variant: 'ghost', size: 'small', background: 'transparent', color: '#44403c' } },
    { id: 'cta-subscribe', type: 'button', props: { label: 'Subscribe →', href: '#subscribe', variant: 'primary', size: 'small', radius: 'none', background: '#1c1917', color: '#fafaf9' } },
    { id: 'copy-11', type: 'text', props: { content: '© 2026 Monocle Press.', fontSize: '12px', color: '#78716c', align: 'center', margin: '0' } },
  ],
  'footer-12': [
    { id: 'brand-12', type: 'heading', props: { content: 'datasoft', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#e2e8f0', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-12', type: 'text', props: { content: 'Edge deploys & observability.', fontSize: '14px', color: '#64748b', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-docs', type: 'button', props: { label: 'Docs', href: '#docs', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'cta-deploy', type: 'button', props: { label: 'Deploy Now', href: '#deploy', variant: 'primary', size: 'small', radius: 'md', background: '#22c55e', color: '#052e16' } },
    { id: 'copy-12', type: 'text', props: { content: '© 2026 Datasoft Cloud.', fontSize: '12px', color: '#475569', align: 'center', margin: '0' } },
  ],
  'footer-13': [
    { id: 'brand-13', type: 'heading', props: { content: 'Solstice Bank', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-13', type: 'text', props: { content: 'Banking in your pocket. 4.9 — 2M+ downloads.', fontSize: '14px', color: '#64748b', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-features', type: 'button', props: { label: 'Features', href: '#features', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'cta-ios', type: 'button', props: { label: 'App Store', href: '#ios', variant: 'primary', size: 'small', radius: 'lg', background: '#0f172a', color: '#ffffff' } },
    { id: 'copy-13', type: 'text', props: { content: '© 2026 Solstice.', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '0' } },
  ],
  'footer-14': [
    { id: 'brand-14', type: 'heading', props: { content: 'MAISON UNIVERSITY', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-14', type: 'text', props: { content: '28 prodi, 15.000+ alumni.', fontSize: '14px', color: '#bfdbfe', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-akademik', type: 'button', props: { label: 'Akademik', href: '#akademik', variant: 'ghost', size: 'small', background: 'transparent', color: '#dbeafe' } },
    { id: 'cta-daftar', type: 'button', props: { label: 'Daftar Sekarang →', href: '#daftar', variant: 'primary', size: 'small', radius: 'md', background: '#ffffff', color: '#1e40af' } },
    { id: 'copy-14', type: 'text', props: { content: '© 2026 Maison University.', fontSize: '12px', color: '#93c5fd', align: 'center', margin: '0' } },
  ],
  'footer-15': [
    { id: 'brand-15', type: 'heading', props: { content: 'Iris', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-15', type: 'text', props: { content: 'Design at the speed of thought.', fontSize: '14px', color: '#ddd6fe', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-canvas', type: 'button', props: { label: 'Canvas', href: '#canvas', variant: 'ghost', size: 'small', background: 'transparent', color: '#e9d5ff' } },
    { id: 'cta-try', type: 'button', props: { label: 'Try Iris Free', href: '#try', variant: 'primary', size: 'small', radius: 'full', background: '#ffffff', color: '#6d28d9' } },
    { id: 'copy-15', type: 'text', props: { content: '© 2026 Iris Labs.', fontSize: '12px', color: '#c4b5fd', align: 'center', margin: '0' } },
  ],
  'footer-16': [
    { id: 'brand-16', type: 'heading', props: { content: 'GOLDLEAF', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#451a03', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-16', type: 'text', props: { content: 'Heritage boutiques worldwide.', fontSize: '14px', color: '#92600e', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-boutique', type: 'button', props: { label: 'Boutique', href: '#boutique', variant: 'ghost', size: 'small', background: 'transparent', color: '#92400e' } },
    { id: 'cta-visit', type: 'button', props: { label: 'Visit Boutique', href: '#visit', variant: 'primary', size: 'small', radius: 'full', background: '#b45309', color: '#fffbeb' } },
    { id: 'copy-16', type: 'text', props: { content: '© 2026 Goldleaf.', fontSize: '12px', color: '#a16207', align: 'center', margin: '0' } },
  ],
  'footer-17': [
    { id: 'brand-17', type: 'heading', props: { content: 'pulse.', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-17', type: 'text', props: { content: '2M+ products, 40.000 sellers.', fontSize: '14px', color: '#64748b', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-fashion', type: 'button', props: { label: 'Fashion', href: '#fashion', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'cta-sell', type: 'button', props: { label: 'Start Selling', href: '#sell', variant: 'primary', size: 'small', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    { id: 'copy-17', type: 'text', props: { content: '© 2026 Pulse Market.', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '0' } },
  ],
  'footer-18': [
    { id: 'brand-18', type: 'heading', props: { content: 'TRANSGO', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-18', type: 'text', props: { content: 'On-time 99.8% ke 50+ kota.', fontSize: '14px', color: '#fed7aa', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-services', type: 'button', props: { label: 'Services', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#fdba74' } },
    { id: 'cta-quote', type: 'button', props: { label: 'Request a Quote →', href: '#contact', variant: 'primary', size: 'small', radius: 'lg', background: '#f97316', color: '#ffffff' } },
    { id: 'copy-18', type: 'text', props: { content: '© 2026 Transgo Logistics.', fontSize: '12px', color: '#fb923c', align: 'center', margin: '0' } },
  ],
  'footer-19': [
    { id: 'brand-19', type: 'heading', props: { content: 'Kioso', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-19', type: 'text', props: { content: 'Hot in 20 minutes.', fontSize: '14px', color: '#64748b', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-menu', type: 'button', props: { label: 'Menu', href: '#menu', variant: 'ghost', size: 'small', background: 'transparent', color: '#475569' } },
    { id: 'cta-order', type: 'button', props: { label: 'Order Now', href: '#order', variant: 'primary', size: 'small', radius: 'full', background: '#ec4899', color: '#ffffff' } },
    { id: 'copy-19', type: 'text', props: { content: '© 2026 Kioso Kitchen.', fontSize: '12px', color: '#94a3b8', align: 'center', margin: '0' } },
  ],
  'footer-20': [
    { id: 'brand-20', type: 'heading', props: { content: 'AETHER', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 12px 0' } },
    { id: 'desc-20', type: 'text', props: { content: 'One platform. Infinite scale.', fontSize: '14px', color: '#a5b4fc', align: 'left', margin: '0 0 20px 0' } },
    { id: 'link-platform', type: 'button', props: { label: 'Platform', href: '#platform', variant: 'ghost', size: 'small', background: 'transparent', color: '#c4b5fd' } },
    { id: 'cta-trial', type: 'button', props: { label: 'Start Trial', href: '#trial', variant: 'primary', size: 'small', radius: 'full', background: '#6366f1', color: '#ffffff' } },
    { id: 'copy-20', type: 'text', props: { content: 'Copyright 2026 Aether OS v4.2.', fontSize: '12px', color: '#6d6fa8', align: 'center', margin: '0' } },
  ],
  // === STATISTICS LAYOUTS (01-20) ===
  'statistics-01': [
    { id: 'stat1-badge', type: 'badge', props: { content: '✦ Aurora 3.0 — Live Metrics', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'stat1-heading', type: 'heading', props: { content: 'Numbers that feel like magic', level: 'h2', fontSize: '48px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'stat1-text', type: 'text', props: { content: 'Setiap angka mewakili tim nyata yang membangun lebih cepat bersama Aurora — tanpa satu baris kode pun.', fontSize: '17px', color: '#64748b', align: 'center', margin: '0 0 28px 0' } },
    { id: 'stat1-cta', type: 'button', props: { label: 'Lihat Laporan Publik →', href: '#laporan', variant: 'primary', size: 'medium', radius: 'full', background: '#4f46e5', color: '#ffffff' } },
    { id: 'stat1-card-1', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'stat1-c1-value', type: 'heading', props: { content: '12.000+', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat1-c1-label', type: 'text', props: { content: 'Makers Aktif', fontSize: '14px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'stat1-card-2', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'stat1-c2-value', type: 'heading', props: { content: '480K', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat1-c2-label', type: 'text', props: { content: 'Situs Dipublikasikan', fontSize: '14px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'stat1-card-3', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'stat1-c3-value', type: 'heading', props: { content: '99,9%', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat1-c3-label', type: 'text', props: { content: 'Uptime Edge', fontSize: '14px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'stat1-card-4', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'stat1-c4-value', type: 'heading', props: { content: '4,9/5', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat1-c4-label', type: 'text', props: { content: 'Rating Pengguna', fontSize: '14px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
    ]},
  ],
  'statistics-02': [
    { id: 'stat2-badge', type: 'badge', props: { content: 'EST. 1987 — JAKARTA • PARIS', background: '#1c1917', color: '#e7c873' } },
    { id: 'stat2-heading', type: 'heading', props: { content: 'A legacy measured in gold', level: 'h2', fontSize: '52px', fontWeight: '700', color: '#fafaf9', align: 'center', margin: '0 0 18px 0' } },
    { id: 'stat2-text', type: 'text', props: { content: 'Empat dekade kepercayaan — angka yang hanya bisa dibangun oleh konsistensi dan ketelitian.', fontSize: '17px', color: '#a8a29e', align: 'center', margin: '0 0 30px 0' } },
    { id: 'stat2-cta', type: 'button', props: { label: 'Reserve Private View →', href: '#reserve', variant: 'primary', size: 'medium', radius: 'full', background: '#c9a227', color: '#0c0a09' } },
    { id: 'stat2-card-1', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(201,162,39,0.35)', hoverEffect: 'border', padding: '36px 24px' }, childrenComponents: [
      { id: 'stat2-c1-value', type: 'heading', props: { content: '38', level: 'h3', fontSize: '52px', fontWeight: '700', color: '#e7c873', align: 'center', margin: '0 0 10px 0' } },
      { id: 'stat2-c1-label', type: 'text', props: { content: 'Years of Heritage', fontSize: '12px', color: '#a8a29e', align: 'center', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat2-card-2', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(201,162,39,0.35)', hoverEffect: 'border', padding: '36px 24px' }, childrenComponents: [
      { id: 'stat2-c2-value', type: 'heading', props: { content: '12', level: 'h3', fontSize: '52px', fontWeight: '700', color: '#e7c873', align: 'center', margin: '0 0 10px 0' } },
      { id: 'stat2-c2-label', type: 'text', props: { content: 'Private Boutiques', fontSize: '12px', color: '#a8a29e', align: 'center', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat2-card-3', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(201,162,39,0.35)', hoverEffect: 'border', padding: '36px 24px' }, childrenComponents: [
      { id: 'stat2-c3-value', type: 'heading', props: { content: '40K', level: 'h3', fontSize: '52px', fontWeight: '700', color: '#e7c873', align: 'center', margin: '0 0 10px 0' } },
      { id: 'stat2-c3-label', type: 'text', props: { content: 'Patrons Worldwide', fontSize: '12px', color: '#a8a29e', align: 'center', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat2-card-4', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.03)', borderRadius: '4px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(201,162,39,0.35)', hoverEffect: 'border', padding: '36px 24px' }, childrenComponents: [
      { id: 'stat2-c4-value', type: 'heading', props: { content: '3', level: 'h3', fontSize: '52px', fontWeight: '700', color: '#e7c873', align: 'center', margin: '0 0 10px 0' } },
      { id: 'stat2-c4-label', type: 'text', props: { content: 'Generations of Craft', fontSize: '12px', color: '#a8a29e', align: 'center', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0' } },
    ]},
  ],
  'statistics-03': [
    { id: 'stat3-badge', type: 'badge', props: { content: '🚚 500+ Armada Aktif', background: '#fff7ed', color: '#ea580c' } },
    { id: 'stat3-heading', type: 'heading', props: { content: 'Metrik yang menggerakkan bisnis Anda', level: 'h2', fontSize: '46px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 16px 0' } },
    { id: 'stat3-text', type: 'text', props: { content: 'Tracking real-time di darat, laut, dan udara. Setiap paket terukur, setiap rute teroptimasi.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 26px 0' } },
    { id: 'stat3-cta', type: 'button', props: { label: 'Request a Quote →', href: '#contact', variant: 'primary', size: 'medium', radius: 'lg', background: '#f97316', color: '#ffffff' } },
    { id: 'stat3-card-1', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '28px 24px' }, childrenComponents: [
      { id: 'stat3-c1-value', type: 'heading', props: { content: '99,8%', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ea580c', align: 'left', margin: '0 0 6px 0' } },
      { id: 'stat3-c1-label', type: 'text', props: { content: 'On-time Delivery', fontSize: '14px', fontWeight: '600', color: '#64748b', align: 'left', margin: '0' } },
    ]},
    { id: 'stat3-card-2', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '28px 24px' }, childrenComponents: [
      { id: 'stat3-c2-value', type: 'heading', props: { content: '50+', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ea580c', align: 'left', margin: '0 0 6px 0' } },
      { id: 'stat3-c2-label', type: 'text', props: { content: 'Kota Terjangkau', fontSize: '14px', fontWeight: '600', color: '#64748b', align: 'left', margin: '0' } },
    ]},
    { id: 'stat3-card-3', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '28px 24px' }, childrenComponents: [
      { id: 'stat3-c3-value', type: 'heading', props: { content: '12.480', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ea580c', align: 'left', margin: '0 0 6px 0' } },
      { id: 'stat3-c3-label', type: 'text', props: { content: 'Paket / Hari', fontSize: '14px', fontWeight: '600', color: '#64748b', align: 'left', margin: '0' } },
    ]},
    { id: 'stat3-card-4', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '28px 24px' }, childrenComponents: [
      { id: 'stat3-c4-value', type: 'heading', props: { content: '24/7', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ea580c', align: 'left', margin: '0 0 6px 0' } },
      { id: 'stat3-c4-label', type: 'text', props: { content: 'Support Operasional', fontSize: '14px', fontWeight: '600', color: '#64748b', align: 'left', margin: '0' } },
    ]},
  ],
  'statistics-04': [
    { id: 'stat4-badge', type: 'badge', props: { content: '★ SCORECARD 2026', background: '#000000', color: '#facc15' } },
    { id: 'stat4-heading', type: 'heading', props: { content: 'THE NUMBERS ARE LOUD', level: 'h2', fontSize: '56px', fontWeight: '900', color: '#000000', align: 'left', margin: '0 0 14px 0' } },
    { id: 'stat4-text', type: 'text', props: { content: 'Studio desain anti-template. Angka kami tempel di dinding supaya tidak bisa dibohongi.', fontSize: '17px', color: '#000000', align: 'left', margin: '0 0 26px 0' } },
    { id: 'stat4-cta', type: 'button', props: { label: 'HIRE US ★', href: '#hire', variant: 'primary', size: 'medium', radius: 'none', background: '#000000', color: '#facc15' } },
    { id: 'stat4-card-1', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '3px', borderColor: '#000000', hoverEffect: 'scale', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat4-c1-value', type: 'heading', props: { content: '120+', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#000000', align: 'center', margin: '0 0 6px 0' } },
      { id: 'stat4-c1-label', type: 'text', props: { content: 'Projects', fontSize: '12px', fontWeight: '700', color: '#000000', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat4-card-2', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '3px', borderColor: '#000000', hoverEffect: 'scale', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat4-c2-value', type: 'heading', props: { content: '14', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#000000', align: 'center', margin: '0 0 6px 0' } },
      { id: 'stat4-c2-label', type: 'text', props: { content: 'Awards', fontSize: '12px', fontWeight: '700', color: '#000000', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat4-card-3', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '3px', borderColor: '#000000', hoverEffect: 'scale', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat4-c3-value', type: 'heading', props: { content: '8yr', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#000000', align: 'center', margin: '0 0 6px 0' } },
      { id: 'stat4-c3-label', type: 'text', props: { content: 'Studio', fontSize: '12px', fontWeight: '700', color: '#000000', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat4-card-4', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '3px', borderColor: '#000000', hoverEffect: 'scale', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat4-c4-value', type: 'heading', props: { content: '∞', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#000000', align: 'center', margin: '0 0 6px 0' } },
      { id: 'stat4-c4-label', type: 'text', props: { content: 'Ideas', fontSize: '12px', fontWeight: '700', color: '#000000', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
    ]},
  ],
  'statistics-05': [
    { id: 'stat5-badge', type: 'badge', props: { content: 'U B U D — B A L I', background: '#faf9f7', color: '#a8a29e' } },
    { id: 'stat5-heading', type: 'heading', props: { content: 'Quietly, the numbers grew', level: 'h2', fontSize: '52px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 16px 0' } },
    { id: 'stat5-text', type: 'text', props: { content: 'Pertumbuhan yang tidak diburu-buru — dibangun perlahan lewat ritual dan kepercayaan.', fontSize: '17px', color: '#78716c', align: 'center', margin: '0 0 30px 0' } },
    { id: 'stat5-cta', type: 'button', props: { label: 'Reserve Your Stay —', href: '#reserve', variant: 'ghost', size: 'medium', background: 'transparent', color: '#1c1917' } },
    { id: 'stat5-card-1', type: 'card', props: { variant: 'stat', background: 'transparent', borderRadius: '0px', shadow: 'none', borderWidth: '0px', hoverEffect: 'none', padding: '28px 16px' }, childrenComponents: [
      { id: 'stat5-c1-value', type: 'heading', props: { content: '24', level: 'h3', fontSize: '48px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 10px 0' } },
      { id: 'stat5-c1-label', type: 'text', props: { content: 'Private Suites', fontSize: '12px', color: '#a8a29e', align: 'center', letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat5-card-2', type: 'card', props: { variant: 'stat', background: 'transparent', borderRadius: '0px', shadow: 'none', borderWidth: '0px', hoverEffect: 'none', padding: '28px 16px' }, childrenComponents: [
      { id: 'stat5-c2-value', type: 'heading', props: { content: '8.000+', level: 'h3', fontSize: '48px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 10px 0' } },
      { id: 'stat5-c2-label', type: 'text', props: { content: 'Tamu Menginap', fontSize: '12px', color: '#a8a29e', align: 'center', letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat5-card-3', type: 'card', props: { variant: 'stat', background: 'transparent', borderRadius: '0px', shadow: 'none', borderWidth: '0px', hoverEffect: 'none', padding: '28px 16px' }, childrenComponents: [
      { id: 'stat5-c3-value', type: 'heading', props: { content: '4,9', level: 'h3', fontSize: '48px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 10px 0' } },
      { id: 'stat5-c3-label', type: 'text', props: { content: 'Guest Rating', fontSize: '12px', color: '#a8a29e', align: 'center', letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat5-card-4', type: 'card', props: { variant: 'stat', background: 'transparent', borderRadius: '0px', shadow: 'none', borderWidth: '0px', hoverEffect: 'none', padding: '28px 16px' }, childrenComponents: [
      { id: 'stat5-c4-value', type: 'heading', props: { content: '12', level: 'h3', fontSize: '48px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 10px 0' } },
      { id: 'stat5-c4-label', type: 'text', props: { content: 'Tahun Mengabdi', fontSize: '12px', color: '#a8a29e', align: 'center', letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0' } },
    ]},
  ],
  'statistics-06': [
    { id: 'stat6-badge', type: 'badge', props: { content: '● MAINNET LIVE', background: '#1e1b4b', color: '#a5b4fc' } },
    { id: 'stat6-heading', type: 'heading', props: { content: 'The universe by the numbers', level: 'h2', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'stat6-text', type: 'text', props: { content: '128.400 explorer sudah di dalam. Misi, reward, dan semesta yang tidak pernah tidur.', fontSize: '17px', color: '#a5b4fc', align: 'center', margin: '0 0 28px 0' } },
    { id: 'stat6-cta', type: 'button', props: { label: 'Launch App ✦', href: '#app', variant: 'primary', size: 'medium', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
    { id: 'stat6-card-1', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.25)', hoverEffect: 'glow', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat6-c1-value', type: 'heading', props: { content: '128.400', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat6-c1-label', type: 'text', props: { content: 'Explorers', fontSize: '12px', color: '#a5b4fc', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat6-card-2', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.25)', hoverEffect: 'glow', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat6-c2-value', type: 'heading', props: { content: '3.200+', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat6-c2-label', type: 'text', props: { content: 'Missions', fontSize: '12px', color: '#a5b4fc', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat6-card-3', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.25)', hoverEffect: 'glow', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat6-c3-value', type: 'heading', props: { content: '$4.2M', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat6-c3-label', type: 'text', props: { content: 'Rewards Paid', fontSize: '12px', color: '#a5b4fc', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat6-card-4', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.25)', hoverEffect: 'glow', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat6-c4-value', type: 'heading', props: { content: '40', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat6-c4-label', type: 'text', props: { content: 'Regions Online', fontSize: '12px', color: '#a5b4fc', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
    ]},
  ],
  'statistics-07': [
    { id: 'stat7-badge', type: 'badge', props: { content: '$ datasoft metrics --live', background: '#052e16', color: '#4ade80' } },
    { id: 'stat7-heading', type: 'heading', props: { content: 'Observability you can trust', level: 'h2', fontSize: '46px', fontWeight: '800', color: '#e2e8f0', align: 'left', margin: '0 0 14px 0' } },
    { id: 'stat7-text', type: 'text', props: { content: 'Edge deploys, instant rollbacks, dan metrik real-time. Developer ship 10x lebih cepat di Datasoft Cloud.', fontSize: '16px', color: '#94a3b8', align: 'left', margin: '0 0 24px 0' } },
    { id: 'stat7-cta', type: 'button', props: { label: '▸ Read Docs', href: '#docs', variant: 'primary', size: 'medium', radius: 'md', background: '#22c55e', color: '#052e16' } },
    { id: 'stat7-card-1', type: 'card', props: { variant: 'stat-dark', background: '#0f172a', borderRadius: '12px', shadow: 'none', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'border', padding: '24px 20px' }, childrenComponents: [
      { id: 'stat7-c1-value', type: 'heading', props: { content: '99,99%', level: 'h3', fontSize: '36px', fontWeight: '900', color: '#22c55e', align: 'left', margin: '0 0 6px 0' } },
      { id: 'stat7-c1-label', type: 'text', props: { content: 'uptime // SLA', fontSize: '13px', color: '#94a3b8', align: 'left', margin: '0' } },
    ]},
    { id: 'stat7-card-2', type: 'card', props: { variant: 'stat-dark', background: '#0f172a', borderRadius: '12px', shadow: 'none', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'border', padding: '24px 20px' }, childrenComponents: [
      { id: 'stat7-c2-value', type: 'heading', props: { content: '8s', level: 'h3', fontSize: '36px', fontWeight: '900', color: '#22c55e', align: 'left', margin: '0 0 6px 0' } },
      { id: 'stat7-c2-label', type: 'text', props: { content: 'deploy // build time', fontSize: '13px', color: '#94a3b8', align: 'left', margin: '0' } },
    ]},
    { id: 'stat7-card-3', type: 'card', props: { variant: 'stat-dark', background: '#0f172a', borderRadius: '12px', shadow: 'none', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'border', padding: '24px 20px' }, childrenComponents: [
      { id: 'stat7-c3-value', type: 'heading', props: { content: '40', level: 'h3', fontSize: '36px', fontWeight: '900', color: '#22c55e', align: 'left', margin: '0 0 6px 0' } },
      { id: 'stat7-c3-label', type: 'text', props: { content: 'regions // edge nodes', fontSize: '13px', color: '#94a3b8', align: 'left', margin: '0' } },
    ]},
    { id: 'stat7-card-4', type: 'card', props: { variant: 'stat-dark', background: '#0f172a', borderRadius: '12px', shadow: 'none', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'border', padding: '24px 20px' }, childrenComponents: [
      { id: 'stat7-c4-value', type: 'heading', props: { content: '10x', level: 'h3', fontSize: '36px', fontWeight: '900', color: '#22c55e', align: 'left', margin: '0 0 6px 0' } },
      { id: 'stat7-c4-label', type: 'text', props: { content: 'faster // ship velocity', fontSize: '13px', color: '#94a3b8', align: 'left', margin: '0' } },
    ]},
  ],
  'statistics-08': [
    { id: 'stat8-badge', type: 'badge', props: { content: '🌸 Spring Season 2026', background: '#fce7f3', color: '#be185d' } },
    { id: 'stat8-heading', type: 'heading', props: { content: 'Every number tells a love story', level: 'h2', fontSize: '52px', fontWeight: '700', color: '#831843', align: 'center', margin: '0 0 16px 0' } },
    { id: 'stat8-text', type: 'text', props: { content: 'Ribuan momen bahagia yang kami rangkai bersama keluarga dan pasangan di jantung kota.', fontSize: '17px', color: '#9d7b8c', align: 'center', margin: '0 0 28px 0' } },
    { id: 'stat8-cta', type: 'button', props: { label: 'Book Consultation ♡', href: '#book', variant: 'primary', size: 'medium', radius: 'full', background: '#db2777', color: '#ffffff' } },
    { id: 'stat8-card-1', type: 'card', props: { variant: 'stat', background: '#fff1f5', borderRadius: '200px 200px 24px 24px', shadow: 'sm', borderWidth: '1px', borderColor: '#fbcfe8', hoverEffect: 'lift', padding: '36px 20px 28px' }, childrenComponents: [
      { id: 'stat8-c1-value', type: 'heading', props: { content: '1.200+', level: 'h3', fontSize: '40px', fontWeight: '700', color: '#be185d', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat8-c1-label', type: 'text', props: { content: 'Wedding Terselenggara', fontSize: '13px', color: '#9d7b8c', align: 'center', margin: '0' } },
    ]},
    { id: 'stat8-card-2', type: 'card', props: { variant: 'stat', background: '#fff1f5', borderRadius: '200px 200px 24px 24px', shadow: 'sm', borderWidth: '1px', borderColor: '#fbcfe8', hoverEffect: 'lift', padding: '36px 20px 28px' }, childrenComponents: [
      { id: 'stat8-c2-value', type: 'heading', props: { content: '320', level: 'h3', fontSize: '40px', fontWeight: '700', color: '#be185d', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat8-c2-label', type: 'text', props: { content: 'Event Privat', fontSize: '13px', color: '#9d7b8c', align: 'center', margin: '0' } },
    ]},
    { id: 'stat8-card-3', type: 'card', props: { variant: 'stat', background: '#fff1f5', borderRadius: '200px 200px 24px 24px', shadow: 'sm', borderWidth: '1px', borderColor: '#fbcfe8', hoverEffect: 'lift', padding: '36px 20px 28px' }, childrenComponents: [
      { id: 'stat8-c3-value', type: 'heading', props: { content: '4,9', level: 'h3', fontSize: '40px', fontWeight: '700', color: '#be185d', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat8-c3-label', type: 'text', props: { content: 'Rating Pasangan', fontSize: '13px', color: '#9d7b8c', align: 'center', margin: '0' } },
    ]},
    { id: 'stat8-card-4', type: 'card', props: { variant: 'stat', background: '#fff1f5', borderRadius: '200px 200px 24px 24px', shadow: 'sm', borderWidth: '1px', borderColor: '#fbcfe8', hoverEffect: 'lift', padding: '36px 20px 28px' }, childrenComponents: [
      { id: 'stat8-c4-value', type: 'heading', props: { content: '12', level: 'h3', fontSize: '40px', fontWeight: '700', color: '#be185d', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat8-c4-label', type: 'text', props: { content: 'Tahun Berkarya', fontSize: '13px', color: '#9d7b8c', align: 'center', margin: '0' } },
    ]},
  ],
  'statistics-09': [
    { id: 'stat9-badge', type: 'badge', props: { content: '✦ SINCE 1987', background: '#fef3c7', color: '#92400e' } },
    { id: 'stat9-heading', type: 'heading', props: { content: 'A legacy cast in gold', level: 'h2', fontSize: '56px', fontWeight: '700', color: '#451a03', align: 'center', margin: '0 0 16px 0' } },
    { id: 'stat9-text', type: 'text', props: { content: 'Tiga generasi craftsmanship — angka yang tercatat rapi dari butik heritage hingga koleksi privat dunia.', fontSize: '17px', color: '#92600e', align: 'center', margin: '0 0 28px 0' } },
    { id: 'stat9-cta', type: 'button', props: { label: '✦ Visit Boutique', href: '#visit', variant: 'primary', size: 'medium', radius: 'full', background: '#b45309', color: '#fffbeb' } },
    { id: 'stat9-card-1', type: 'card', props: { variant: 'stat', background: '#fffbeb', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '32px 20px' }, childrenComponents: [
      { id: 'stat9-c1-value', type: 'heading', props: { content: '38', level: 'h3', fontSize: '44px', fontWeight: '700', color: '#92400e', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat9-c1-label', type: 'text', props: { content: 'Years', fontSize: '12px', color: '#92600e', align: 'center', letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat9-card-2', type: 'card', props: { variant: 'stat', background: '#fffbeb', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '32px 20px' }, childrenComponents: [
      { id: 'stat9-c2-value', type: 'heading', props: { content: '12', level: 'h3', fontSize: '44px', fontWeight: '700', color: '#92400e', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat9-c2-label', type: 'text', props: { content: 'Boutiques', fontSize: '12px', color: '#92600e', align: 'center', letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat9-card-3', type: 'card', props: { variant: 'stat', background: '#fffbeb', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '32px 20px' }, childrenComponents: [
      { id: 'stat9-c3-value', type: 'heading', props: { content: '40K', level: 'h3', fontSize: '44px', fontWeight: '700', color: '#92400e', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat9-c3-label', type: 'text', props: { content: 'Patrons', fontSize: '12px', color: '#92600e', align: 'center', letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat9-card-4', type: 'card', props: { variant: 'stat', background: '#fffbeb', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '32px 20px' }, childrenComponents: [
      { id: 'stat9-c4-value', type: 'heading', props: { content: '3', level: 'h3', fontSize: '44px', fontWeight: '700', color: '#92400e', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat9-c4-label', type: 'text', props: { content: 'Generations', fontSize: '12px', color: '#92600e', align: 'center', letterSpacing: '0.3em', textTransform: 'uppercase', margin: '0' } },
    ]},
  ],
  'statistics-10': [
    { id: 'stat10-badge', type: 'badge', props: { content: '🔥 12.480 produk terjual hari ini', background: '#fef2f2', color: '#dc2626' } },
    { id: 'stat10-heading', type: 'heading', props: { content: 'Marketplace by the numbers', level: 'h2', fontSize: '48px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'stat10-text', type: 'text', props: { content: '2 juta produk, 40.000 seller terverifikasi, dan pertumbuhan yang bisa Anda lacak sendiri.', fontSize: '17px', color: '#64748b', align: 'center', margin: '0 0 26px 0' } },
    { id: 'stat10-cta', type: 'button', props: { label: 'Start Selling', href: '#sell', variant: 'ghost', size: 'medium', background: 'transparent', color: '#4f46e5' } },
    { id: 'stat10-card-1', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat10-c1-value', type: 'heading', props: { content: '2M+', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#dc2626', align: 'center', margin: '0 0 6px 0' } },
      { id: 'stat10-c1-label', type: 'text', props: { content: 'Produk Aktif', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'stat10-card-2', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat10-c2-value', type: 'heading', props: { content: '40.000', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#dc2626', align: 'center', margin: '0 0 6px 0' } },
      { id: 'stat10-c2-label', type: 'text', props: { content: 'Seller Terverifikasi', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'stat10-card-3', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat10-c3-value', type: 'heading', props: { content: '12.480', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#dc2626', align: 'center', margin: '0 0 6px 0' } },
      { id: 'stat10-c3-label', type: 'text', props: { content: 'Terjual Hari Ini', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'stat10-card-4', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat10-c4-value', type: 'heading', props: { content: '4,8', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#dc2626', align: 'center', margin: '0 0 6px 0' } },
      { id: 'stat10-c4-label', type: 'text', props: { content: 'Rating Pembeli', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
    ]},
  ],
  'statistics-11': [
    { id: 'stat11-badge', type: 'badge', props: { content: '✦ Iris AI Canvas', background: '#ffffff', color: '#7c3aed' } },
    { id: 'stat11-heading', type: 'heading', props: { content: 'Momentum at the speed of thought', level: 'h2', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'stat11-text', type: 'text', props: { content: 'Iris mengubah ide kasar menjadi antarmuka rapi — dan angkanya tumbuh secepat desainnya.', fontSize: '18px', color: '#ddd6fe', align: 'center', margin: '0 0 28px 0' } },
    { id: 'stat11-cta', type: 'button', props: { label: 'Try Iris Free ✦', href: '#try', variant: 'primary', size: 'medium', radius: 'full', background: '#ffffff', color: '#6d28d9' } },
    { id: 'stat11-card-1', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.08)', borderRadius: '24px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)', hoverEffect: 'glow', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat11-c1-value', type: 'heading', props: { content: '40.000', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat11-c1-label', type: 'text', props: { content: 'Designers', fontSize: '12px', color: '#ddd6fe', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat11-card-2', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.08)', borderRadius: '24px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)', hoverEffect: 'glow', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat11-c2-value', type: 'heading', props: { content: '1,2M', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat11-c2-label', type: 'text', props: { content: 'Canvas Dibuat', fontSize: '12px', color: '#ddd6fe', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat11-card-3', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.08)', borderRadius: '24px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)', hoverEffect: 'glow', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat11-c3-value', type: 'heading', props: { content: '320K', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat11-c3-label', type: 'text', props: { content: 'Template', fontSize: '12px', color: '#ddd6fe', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat11-card-4', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.08)', borderRadius: '24px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)', hoverEffect: 'glow', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat11-c4-value', type: 'heading', props: { content: '4,9', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat11-c4-label', type: 'text', props: { content: 'Rating Komunitas', fontSize: '12px', color: '#ddd6fe', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
    ]},
  ],
  'statistics-12': [
    { id: 'stat12-badge', type: 'badge', props: { content: '◆ SOC2 • ISO 27001 • 99,99%', background: '#0f172a', color: '#67e8f9' } },
    { id: 'stat12-heading', type: 'heading', props: { content: 'Infrastructure that never sleeps', level: 'h2', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'stat12-text', type: 'text', props: { content: 'Global edge network di 40 region. Deploy dalam detik, scale ke jutaan pengguna — tidur tetap tenang.', fontSize: '17px', color: '#94a3b8', align: 'left', margin: '0 0 26px 0' } },
    { id: 'stat12-cta', type: 'button', props: { label: 'Start Free Trial →', href: '#trial', variant: 'primary', size: 'medium', radius: 'lg', background: '#ffffff', color: '#0f172a' } },
    { id: 'stat12-card-1', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)', hoverEffect: 'glow', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat12-c1-value', type: 'heading', props: { content: '99,99%', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#67e8f9', align: 'left', margin: '0 0 6px 0' } },
      { id: 'stat12-c1-label', type: 'text', props: { content: 'Uptime SLA', fontSize: '13px', fontWeight: '600', color: '#94a3b8', align: 'left', margin: '0' } },
    ]},
    { id: 'stat12-card-2', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)', hoverEffect: 'glow', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat12-c2-value', type: 'heading', props: { content: '40', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#67e8f9', align: 'left', margin: '0 0 6px 0' } },
      { id: 'stat12-c2-label', type: 'text', props: { content: 'Edge Regions', fontSize: '13px', fontWeight: '600', color: '#94a3b8', align: 'left', margin: '0' } },
    ]},
    { id: 'stat12-card-3', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)', hoverEffect: 'glow', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat12-c3-value', type: 'heading', props: { content: '12ms', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#67e8f9', align: 'left', margin: '0 0 6px 0' } },
      { id: 'stat12-c3-label', type: 'text', props: { content: 'P95 Latency', fontSize: '13px', fontWeight: '600', color: '#94a3b8', align: 'left', margin: '0' } },
    ]},
    { id: 'stat12-card-4', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.1)', hoverEffect: 'glow', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat12-c4-value', type: 'heading', props: { content: '2.400+', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#67e8f9', align: 'left', margin: '0 0 6px 0' } },
      { id: 'stat12-c4-label', type: 'text', props: { content: 'Enterprise Teams', fontSize: '13px', fontWeight: '600', color: '#94a3b8', align: 'left', margin: '0' } },
    ]},
  ],
  'statistics-13': [
    { id: 'stat13-badge', type: 'badge', props: { content: '🎉 Promo: Buy 1 Get 1 Weekend!', background: '#fce7f3', color: '#db2777' } },
    { id: 'stat13-heading', type: 'heading', props: { content: 'Angka yang bikin lapar!', level: 'h2', fontSize: '52px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'stat13-text', type: 'text', props: { content: 'Fresh burger, creamy shake & crispy fries — dikirim panas dalam 20 menit ke depan pintu.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    { id: 'stat13-cta', type: 'button', props: { label: 'Order Now 🍔', href: '#order', variant: 'primary', size: 'medium', radius: 'full', background: '#ec4899', color: '#ffffff' } },
    { id: 'stat13-card-1', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '28px', shadow: 'none', borderWidth: '3px', borderColor: '#0f172a', hoverEffect: 'scale', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat13-c1-value', type: 'heading', props: { content: '12.000+', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#ec4899', align: 'center', margin: '0 0 6px 0' } },
      { id: 'stat13-c1-label', type: 'text', props: { content: 'Happy Kids', fontSize: '13px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
    ]},
    { id: 'stat13-card-2', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '28px', shadow: 'none', borderWidth: '3px', borderColor: '#0f172a', hoverEffect: 'scale', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat13-c2-value', type: 'heading', props: { content: '1,5M', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#ec4899', align: 'center', margin: '0 0 6px 0' } },
      { id: 'stat13-c2-label', type: 'text', props: { content: 'Burger Terjual', fontSize: '13px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
    ]},
    { id: 'stat13-card-3', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '28px', shadow: 'none', borderWidth: '3px', borderColor: '#0f172a', hoverEffect: 'scale', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat13-c3-value', type: 'heading', props: { content: '20', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#ec4899', align: 'center', margin: '0 0 6px 0' } },
      { id: 'stat13-c3-label', type: 'text', props: { content: 'Menit Delivery', fontSize: '13px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
    ]},
    { id: 'stat13-card-4', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '28px', shadow: 'none', borderWidth: '3px', borderColor: '#0f172a', hoverEffect: 'scale', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat13-c4-value', type: 'heading', props: { content: '4,9', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#ec4899', align: 'center', margin: '0 0 6px 0' } },
      { id: 'stat13-c4-label', type: 'text', props: { content: 'Rating ★★★★★', fontSize: '13px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
    ]},
  ],
  'statistics-14': [
    { id: 'stat14-badge', type: 'badge', props: { content: '✓ Terakreditasi A • Sejak 1998', background: '#dbeafe', color: '#1e40af' } },
    { id: 'stat14-heading', type: 'heading', props: { content: 'Angka yang membangun generasi unggul', level: 'h2', fontSize: '48px', fontWeight: '900', color: '#1e3a8a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'stat14-text', type: 'text', props: { content: '28 program studi, 15.000+ alumni sukses, dan kampus berstandar internasional di jantung kota.', fontSize: '17px', color: '#475569', align: 'left', margin: '0 0 24px 0' } },
    { id: 'stat14-cta', type: 'button', props: { label: 'Lihat Laporan Tahunan →', href: '#laporan', variant: 'primary', size: 'medium', radius: 'md', background: '#1e40af', color: '#ffffff' } },
    { id: 'stat14-card-1', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#dbeafe', hoverEffect: 'lift', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat14-c1-value', type: 'heading', props: { content: '28', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#1e40af', align: 'center', margin: '0 0 6px 0' } },
      { id: 'stat14-c1-label', type: 'text', props: { content: 'Program Studi', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'stat14-card-2', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#dbeafe', hoverEffect: 'lift', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat14-c2-value', type: 'heading', props: { content: '15K+', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#1e40af', align: 'center', margin: '0 0 6px 0' } },
      { id: 'stat14-c2-label', type: 'text', props: { content: 'Alumni Sukses', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'stat14-card-3', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#dbeafe', hoverEffect: 'lift', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat14-c3-value', type: 'heading', props: { content: 'A', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#1e40af', align: 'center', margin: '0 0 6px 0' } },
      { id: 'stat14-c3-label', type: 'text', props: { content: 'Akreditasi', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'stat14-card-4', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#dbeafe', hoverEffect: 'lift', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat14-c4-value', type: 'heading', props: { content: '1998', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#1e40af', align: 'center', margin: '0 0 6px 0' } },
      { id: 'stat14-c4-label', type: 'text', props: { content: 'Tahun Berdiri', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
    ]},
  ],
  'statistics-15': [
    { id: 'stat15-badge', type: 'badge', props: { content: 'DATA DESK — AUTUMN 2026', background: '#1c1917', color: '#fafaf9' } },
    { id: 'stat15-heading', type: 'heading', props: { content: 'The year in numbers', level: 'h2', fontSize: '56px', fontWeight: '700', color: '#1c1917', align: 'left', margin: '0 0 16px 0' } },
    { id: 'stat15-text', type: 'text', props: { content: 'Redaksi kami menelusuri satu tahun liputan — inilah angka yang paling banyak dibaca pembaca setia.', fontSize: '18px', color: '#57534e', align: 'left', margin: '0 0 24px 0' } },
    { id: 'stat15-cta', type: 'button', props: { label: 'Read the Data Story →', href: '#story', variant: 'primary', size: 'medium', radius: 'none', background: '#1c1917', color: '#fafaf9' } },
    { id: 'stat15-card-1', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '0px', shadow: 'none', borderWidth: '2px', borderColor: '#1c1917', hoverEffect: 'none', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat15-c1-value', type: 'heading', props: { content: '120', level: 'h3', fontSize: '44px', fontWeight: '700', color: '#1c1917', align: 'left', margin: '0 0 6px 0' } },
      { id: 'stat15-c1-label', type: 'text', props: { content: 'Edisi Terbit', fontSize: '11px', color: '#57534e', align: 'left', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat15-card-2', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '0px', shadow: 'none', borderWidth: '2px', borderColor: '#1c1917', hoverEffect: 'none', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat15-c2-value', type: 'heading', props: { content: '2,4M', level: 'h3', fontSize: '44px', fontWeight: '700', color: '#1c1917', align: 'left', margin: '0 0 6px 0' } },
      { id: 'stat15-c2-label', type: 'text', props: { content: 'Pembaca Bulanan', fontSize: '11px', color: '#57534e', align: 'left', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat15-card-3', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '0px', shadow: 'none', borderWidth: '2px', borderColor: '#1c1917', hoverEffect: 'none', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat15-c3-value', type: 'heading', props: { content: '18', level: 'h3', fontSize: '44px', fontWeight: '700', color: '#1c1917', align: 'left', margin: '0 0 6px 0' } },
      { id: 'stat15-c3-label', type: 'text', props: { content: 'Penghargaan', fontSize: '11px', color: '#57534e', align: 'left', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat15-card-4', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '0px', shadow: 'none', borderWidth: '2px', borderColor: '#1c1917', hoverEffect: 'none', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat15-c4-value', type: 'heading', props: { content: '12', level: 'h3', fontSize: '44px', fontWeight: '700', color: '#1c1917', align: 'left', margin: '0 0 6px 0' } },
      { id: 'stat15-c4-label', type: 'text', props: { content: 'Menit Baca Rata-rata', fontSize: '11px', color: '#57534e', align: 'left', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0' } },
    ]},
  ],
  'statistics-16': [
    { id: 'stat16-badge', type: 'badge', props: { content: '🌿 100% Natural & Vegan', background: '#dcfce7', color: '#15803d' } },
    { id: 'stat16-heading', type: 'heading', props: { content: 'Impact you can measure', level: 'h2', fontSize: '50px', fontWeight: '900', color: '#052e16', align: 'left', margin: '0 0 14px 0' } },
    { id: 'stat16-text', type: 'text', props: { content: 'Setiap botol yang terjual tercatat dampaknya — dari kebun petani hingga ke depan pintu Anda.', fontSize: '17px', color: '#4d7c0f', align: 'left', margin: '0 0 24px 0' } },
    { id: 'stat16-cta', type: 'button', props: { label: 'Shop Bestsellers →', href: '#shop', variant: 'primary', size: 'medium', radius: 'full', background: '#16a34a', color: '#ffffff' } },
    { id: 'stat16-card-1', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '24px', shadow: 'sm', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat16-c1-value', type: 'heading', props: { content: '32.000+', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#15803d', align: 'center', margin: '0 0 6px 0' } },
      { id: 'stat16-c1-label', type: 'text', props: { content: 'Pohon Ditanam', fontSize: '13px', fontWeight: '600', color: '#4d7c0f', align: 'center', margin: '0' } },
    ]},
    { id: 'stat16-card-2', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '24px', shadow: 'sm', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat16-c2-value', type: 'heading', props: { content: '100%', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#15803d', align: 'center', margin: '0 0 6px 0' } },
      { id: 'stat16-c2-label', type: 'text', props: { content: 'Bahan Natural', fontSize: '13px', fontWeight: '600', color: '#4d7c0f', align: 'center', margin: '0' } },
    ]},
    { id: 'stat16-card-3', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '24px', shadow: 'sm', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat16-c3-value', type: 'heading', props: { content: '92%', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#15803d', align: 'center', margin: '0 0 6px 0' } },
      { id: 'stat16-c3-label', type: 'text', props: { content: 'Repeat Order', fontSize: '13px', fontWeight: '600', color: '#4d7c0f', align: 'center', margin: '0' } },
    ]},
    { id: 'stat16-card-4', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '24px', shadow: 'sm', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat16-c4-value', type: 'heading', props: { content: '0kg', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#15803d', align: 'center', margin: '0 0 6px 0' } },
      { id: 'stat16-c4-label', type: 'text', props: { content: 'Emisi Plastik', fontSize: '13px', fontWeight: '600', color: '#4d7c0f', align: 'center', margin: '0' } },
    ]},
  ],
  'statistics-17': [
    { id: 'stat17-badge', type: 'badge', props: { content: '🏁 GT SERIES 2026', background: '#fef2f2', color: '#dc2626' } },
    { id: 'stat17-heading', type: 'heading', props: { content: 'Built to outrun the numbers', level: 'h2', fontSize: '60px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 14px 0' } },
    { id: 'stat17-text', type: 'text', props: { content: '0–100 dalam 2,8 detik. 680HP hybrid powertrain. Angka dari Veloce tercepat yang pernah dibangun.', fontSize: '18px', color: '#fecaca', align: 'left', margin: '0 0 26px 0' } },
    { id: 'stat17-cta', type: 'button', props: { label: 'Book Test Drive →', href: '#test', variant: 'primary', size: 'medium', radius: 'md', background: '#ef4444', color: '#ffffff' } },
    { id: 'stat17-card-1', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.04)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(239,68,68,0.35)', hoverEffect: 'glow', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat17-c1-value', type: 'heading', props: { content: '2,8s', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 6px 0' } },
      { id: 'stat17-c1-label', type: 'text', props: { content: '0–100 KM/H', fontSize: '11px', color: '#f87171', align: 'left', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat17-card-2', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.04)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(239,68,68,0.35)', hoverEffect: 'glow', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat17-c2-value', type: 'heading', props: { content: '680', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 6px 0' } },
      { id: 'stat17-c2-label', type: 'text', props: { content: 'Horsepower', fontSize: '11px', color: '#f87171', align: 'left', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat17-card-3', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.04)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(239,68,68,0.35)', hoverEffect: 'glow', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat17-c3-value', type: 'heading', props: { content: '340', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 6px 0' } },
      { id: 'stat17-c3-label', type: 'text', props: { content: 'KM/H Top Speed', fontSize: '11px', color: '#f87171', align: 'left', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat17-card-4', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.04)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(239,68,68,0.35)', hoverEffect: 'glow', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat17-c4-value', type: 'heading', props: { content: '99,8%', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 6px 0' } },
      { id: 'stat17-c4-label', type: 'text', props: { content: 'Finish Rate', fontSize: '11px', color: '#f87171', align: 'left', letterSpacing: '0.25em', textTransform: 'uppercase', margin: '0' } },
    ]},
  ],
  'statistics-18': [
    { id: 'stat18-badge', type: 'badge', props: { content: '★★★★★ 4,9 — 2M+ downloads', background: '#fff7ed', color: '#ea580c' } },
    { id: 'stat18-heading', type: 'heading', props: { content: 'Traction that fits in your pocket', level: 'h2', fontSize: '50px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'stat18-text', type: 'text', props: { content: 'Kirim uang, menabung lebih pintar, dan pantau setiap rupiah — semuanya dari satu aplikasi.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    { id: 'stat18-cta', type: 'button', props: { label: 'Unduh Sekarang →', href: '#download', variant: 'primary', size: 'medium', radius: 'lg', background: '#f97316', color: '#ffffff' } },
    { id: 'stat18-card-1', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat18-c1-value', type: 'heading', props: { content: '2M+', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#ea580c', align: 'center', margin: '0 0 6px 0' } },
      { id: 'stat18-c1-label', type: 'text', props: { content: 'Total Downloads', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'stat18-card-2', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat18-c2-value', type: 'heading', props: { content: '4,9', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#ea580c', align: 'center', margin: '0 0 6px 0' } },
      { id: 'stat18-c2-label', type: 'text', props: { content: 'Rating Store', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'stat18-card-3', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat18-c3-value', type: 'heading', props: { content: '1,2M', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#ea580c', align: 'center', margin: '0 0 6px 0' } },
      { id: 'stat18-c3-label', type: 'text', props: { content: 'Pengguna Aktif', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'stat18-card-4', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat18-c4-value', type: 'heading', props: { content: '99,9%', level: 'h3', fontSize: '38px', fontWeight: '900', color: '#ea580c', align: 'center', margin: '0 0 6px 0' } },
      { id: 'stat18-c4-label', type: 'text', props: { content: 'Uptime Transaksi', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
    ]},
  ],
  'statistics-19': [
    { id: 'stat19-badge', type: 'badge', props: { content: '● Available for Q3 2026', background: '#ecfdf5', color: '#059669' } },
    { id: 'stat19-heading', type: 'heading', props: { content: 'Results we can point at', level: 'h2', fontSize: '54px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'stat19-text', type: 'text', props: { content: 'Strategy, identity & web untuk tim ambisius. 120+ peluncuran, 14 penghargaan internasional.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    { id: 'stat19-cta', type: 'button', props: { label: 'See Our Work →', href: '#work', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    { id: 'stat19-card-1', type: 'card', props: { variant: 'stat', background: '#f8fafc', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat19-c1-value', type: 'heading', props: { content: '120+', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 6px 0' } },
      { id: 'stat19-c1-label', type: 'text', props: { content: 'Peluncuran Brand', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'left', margin: '0' } },
    ]},
    { id: 'stat19-card-2', type: 'card', props: { variant: 'stat', background: '#f8fafc', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat19-c2-value', type: 'heading', props: { content: '14', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 6px 0' } },
      { id: 'stat19-c2-label', type: 'text', props: { content: 'Penghargaan', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'left', margin: '0' } },
    ]},
    { id: 'stat19-card-3', type: 'card', props: { variant: 'stat', background: '#f8fafc', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat19-c3-value', type: 'heading', props: { content: '40', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 6px 0' } },
      { id: 'stat19-c3-label', type: 'text', props: { content: 'Klien Global', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'left', margin: '0' } },
    ]},
    { id: 'stat19-card-4', type: 'card', props: { variant: 'stat', background: '#f8fafc', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px 20px' }, childrenComponents: [
      { id: 'stat19-c4-value', type: 'heading', props: { content: '8', level: 'h3', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 6px 0' } },
      { id: 'stat19-c4-label', type: 'text', props: { content: 'Tahun Berkarya', fontSize: '13px', fontWeight: '600', color: '#64748b', align: 'left', margin: '0' } },
    ]},
  ],
  'statistics-20': [
    { id: 'stat20-badge', type: 'badge', props: { content: '✦ AETHER 4.2 — NOW LIVE', background: '#1e1b4b', color: '#c4b5fd' } },
    { id: 'stat20-heading', type: 'heading', props: { content: 'One platform. Infinite scale.', level: 'h2', fontSize: '60px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'stat20-text', type: 'text', props: { content: 'The operating system for ambitious teams — angka yang tumbuh bersama skala bisnis Anda.', fontSize: '18px', color: '#a5b4fc', align: 'center', margin: '0 0 28px 0' } },
    { id: 'stat20-cta', type: 'button', props: { label: 'Start Trial ✦', href: '#trial', variant: 'primary', size: 'medium', radius: 'full', background: '#6366f1', color: '#ffffff' } },
    { id: 'stat20-card-1', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'glow', padding: '32px 24px' }, childrenComponents: [
      { id: 'stat20-c1-value', type: 'heading', props: { content: '40', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat20-c1-label', type: 'text', props: { content: 'Edge Regions', fontSize: '12px', color: '#a5b4fc', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat20-card-2', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'glow', padding: '32px 24px' }, childrenComponents: [
      { id: 'stat20-c2-value', type: 'heading', props: { content: '200+', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat20-c2-label', type: 'text', props: { content: 'Integrations', fontSize: '12px', color: '#a5b4fc', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat20-card-3', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'glow', padding: '32px 24px' }, childrenComponents: [
      { id: 'stat20-c3-value', type: 'heading', props: { content: '99,99%', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat20-c3-label', type: 'text', props: { content: 'Uptime Platform', fontSize: '12px', color: '#a5b4fc', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
    ]},
    { id: 'stat20-card-4', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'glow', padding: '32px 24px' }, childrenComponents: [
      { id: 'stat20-c4-value', type: 'heading', props: { content: '12.000', level: 'h3', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat20-c4-label', type: 'text', props: { content: 'Tim Aktif', fontSize: '12px', color: '#a5b4fc', align: 'center', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0' } },
    ]},
  ],
  'fleet-01': [
    { id: 'flt1-heading', type: 'heading', props: { content: 'Armada & Fasilitas Transportasi', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'flt1-subtext', type: 'text', props: { content: 'Armada angkutan darat, laut, dan udara siap melayani kebutuhan pengiriman barang', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'flt1-card-1', type: 'card', props: { variant: 'service', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'flt1-c1-icon', type: 'icon', props: { icon: 'FaTruck', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'flt1-c1-title', type: 'heading', props: { content: 'Truk Tronton & Container', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '16px 0 6px 0' } },
      { id: 'flt1-c1-desc', type: 'text', props: { content: 'Armada angkutan berat antar kota dan pulau berfasilitas GPS tracking realtime.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'flt1-card-2', type: 'card', props: { variant: 'service', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'flt1-c2-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#4f46e5', align: 'left' } },
      { id: 'flt1-c2-title', type: 'heading', props: { content: 'Kapal Kargo', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '16px 0 6px 0' } },
      { id: 'flt1-c2-desc', type: 'text', props: { content: 'Layanan kontainer laut efisien untuk muatan besar ke pelabuhan Nusantara.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'flt1-card-3', type: 'card', props: { variant: 'service', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'flt1-c3-icon', type: 'icon', props: { icon: 'FaPlane', size: '32px', color: '#4f46e5', align: 'left' } },
      { id: 'flt1-c3-title', type: 'heading', props: { content: 'Air Cargo Express', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '16px 0 6px 0' } },
      { id: 'flt1-c3-desc', type: 'text', props: { content: 'Pengiriman kilat udara sampai di hari yang sama ke kota-kota besar.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
  ],
  'coverage-01': [
    { id: 'cov1-heading', type: 'heading', props: { content: 'Jangkauan Layanan Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cov1-subtext', type: 'text', props: { content: 'Melayani pengiriman ke seluruh wilayah Indonesia dan berbagai kota di Asia Tenggara', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'cov1-card-1', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'cov1-c1-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '32px', color: '#4f46e5', align: 'center' } },
      { id: 'cov1-c1-title', type: 'heading', props: { content: 'Jawa & Bali', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '12px 0 6px 0' } },
      { id: 'cov1-c1-desc', type: 'text', props: { content: 'Layanan ekspres ke 200+ kota dan kabupaten se-pulau Jawa dan Bali.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'cov1-card-2', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'cov1-c2-icon', type: 'icon', props: { icon: 'FaGlobe', size: '32px', color: '#4f46e5', align: 'center' } },
      { id: 'cov1-c2-title', type: 'heading', props: { content: 'Sumatera & Kalimantan', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '12px 0 6px 0' } },
      { id: 'cov1-c2-desc', type: 'text', props: { content: 'Jaringan logistik menyeluruh ke seluruh penjuru Sumatera dan Kalimantan.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'cov1-card-3', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'cov1-c3-icon', type: 'icon', props: { icon: 'FaGlobeAsia', size: '32px', color: '#4f46e5', align: 'center' } },
      { id: 'cov1-c3-title', type: 'heading', props: { content: 'Indonesia Timur', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '12px 0 6px 0' } },
      { id: 'cov1-c3-desc', type: 'text', props: { content: 'Pengiriman ke Sulawesi, Maluku, NTT, NTB, Papua dan sekitarnya.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
  ],
  'clients-01': [
    { id: 'cli1-badge', type: 'badge', props: { content: '✦ Klien 01', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'cli1-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli1-text', type: 'text', props: { content: 'Mitra strategis dari berbagai industri berskala nasional dan internasional.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'cli1-cta', type: 'button', props: { label: 'Jadi Mitra →', href: '#mitra', variant: 'primary', size: 'medium', radius: 'full', background: '#4f46e5', color: '#ffffff' } },
    {
      id: 'cli1-card-1',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli1-c1-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#4f46e5', align: 'center' } },
        { id: 'cli1-c1-title', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli1-c1-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli1-card-2',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli1-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#4f46e5', align: 'center' } },
        { id: 'cli1-c2-title', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli1-c2-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli1-card-3',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli1-c3-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#4f46e5', align: 'center' } },
        { id: 'cli1-c3-title', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli1-c3-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli1-card-4',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli1-c4-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#4f46e5', align: 'center' } },
        { id: 'cli1-c4-title', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli1-c4-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
  ],
  'clients-02': [
    { id: 'cli2-badge', type: 'badge', props: { content: '✦ Klien 02', background: '#1c1917', color: '#e7c873' } },
    { id: 'cli2-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli2-text', type: 'text', props: { content: 'Mitra strategis dari berbagai industri berskala nasional dan internasional.', fontSize: '15px', color: '#a8a29e', align: 'center', margin: '0 0 20px 0' } },
    { id: 'cli2-cta', type: 'button', props: { label: 'Jadi Mitra →', href: '#mitra', variant: 'primary', size: 'medium', radius: 'full', background: '#e7c873', color: '#1c1917' } },
    {
      id: 'cli2-card-1',
      type: 'card',
      props: { variant: 'default', background: '#1c1917', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli2-c1-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#e7c873', align: 'center' } },
        { id: 'cli2-c1-title', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli2-c1-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#a8a29e' } },
      ],
    },
    {
      id: 'cli2-card-2',
      type: 'card',
      props: { variant: 'default', background: '#1c1917', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli2-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#e7c873', align: 'center' } },
        { id: 'cli2-c2-title', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli2-c2-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#a8a29e' } },
      ],
    },
    {
      id: 'cli2-card-3',
      type: 'card',
      props: { variant: 'default', background: '#1c1917', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli2-c3-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#e7c873', align: 'center' } },
        { id: 'cli2-c3-title', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli2-c3-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#a8a29e' } },
      ],
    },
    {
      id: 'cli2-card-4',
      type: 'card',
      props: { variant: 'default', background: '#1c1917', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli2-c4-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#e7c873', align: 'center' } },
        { id: 'cli2-c4-title', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli2-c4-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#a8a29e' } },
      ],
    },
  ],
  'clients-03': [
    { id: 'cli3-badge', type: 'badge', props: { content: '✦ Klien 03', background: '#fff7ed', color: '#ea580c' } },
    { id: 'cli3-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli3-text', type: 'text', props: { content: 'Mitra strategis dari berbagai industri berskala nasional dan internasional.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'cli3-cta', type: 'button', props: { label: 'Jadi Mitra →', href: '#mitra', variant: 'primary', size: 'medium', radius: 'full', background: '#ea580c', color: '#ffffff' } },
    {
      id: 'cli3-card-1',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli3-c1-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#ea580c', align: 'center' } },
        { id: 'cli3-c1-title', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli3-c1-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli3-card-2',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli3-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#ea580c', align: 'center' } },
        { id: 'cli3-c2-title', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli3-c2-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli3-card-3',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli3-c3-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#ea580c', align: 'center' } },
        { id: 'cli3-c3-title', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli3-c3-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli3-card-4',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli3-c4-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#ea580c', align: 'center' } },
        { id: 'cli3-c4-title', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli3-c4-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
  ],
  'clients-04': [
    { id: 'cli4-badge', type: 'badge', props: { content: '✦ Klien 04', background: '#000000', color: '#facc15' } },
    { id: 'cli4-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#000000', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli4-text', type: 'text', props: { content: 'Mitra strategis dari berbagai industri berskala nasional dan internasional.', fontSize: '15px', color: '#000000', align: 'center', margin: '0 0 20px 0' } },
    { id: 'cli4-cta', type: 'button', props: { label: 'Jadi Mitra →', href: '#mitra', variant: 'primary', size: 'medium', radius: 'full', background: '#000000', color: '#facc15' } },
    {
      id: 'cli4-card-1',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#000000', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli4-c1-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#000000', align: 'center' } },
        { id: 'cli4-c1-title', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#000000', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli4-c1-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#000000' } },
      ],
    },
    {
      id: 'cli4-card-2',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#000000', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli4-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#000000', align: 'center' } },
        { id: 'cli4-c2-title', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#000000', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli4-c2-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#000000' } },
      ],
    },
    {
      id: 'cli4-card-3',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#000000', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli4-c3-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#000000', align: 'center' } },
        { id: 'cli4-c3-title', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#000000', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli4-c3-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#000000' } },
      ],
    },
    {
      id: 'cli4-card-4',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#000000', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli4-c4-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#000000', align: 'center' } },
        { id: 'cli4-c4-title', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#000000', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli4-c4-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#000000' } },
      ],
    },
  ],
  'clients-05': [
    { id: 'cli5-badge', type: 'badge', props: { content: '✦ Klien 05', background: '#ffffff', color: '#78716c' } },
    { id: 'cli5-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#1c1917', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli5-text', type: 'text', props: { content: 'Mitra strategis dari berbagai industri berskala nasional dan internasional.', fontSize: '15px', color: '#78716c', align: 'center', margin: '0 0 20px 0' } },
    { id: 'cli5-cta', type: 'button', props: { label: 'Jadi Mitra →', href: '#mitra', variant: 'primary', size: 'medium', radius: 'full', background: '#1c1917', color: '#ffffff' } },
    {
      id: 'cli5-card-1',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli5-c1-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#1c1917', align: 'center' } },
        { id: 'cli5-c1-title', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#1c1917', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli5-c1-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#78716c' } },
      ],
    },
    {
      id: 'cli5-card-2',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli5-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#1c1917', align: 'center' } },
        { id: 'cli5-c2-title', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#1c1917', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli5-c2-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#78716c' } },
      ],
    },
    {
      id: 'cli5-card-3',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli5-c3-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#1c1917', align: 'center' } },
        { id: 'cli5-c3-title', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#1c1917', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli5-c3-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#78716c' } },
      ],
    },
    {
      id: 'cli5-card-4',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli5-c4-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#1c1917', align: 'center' } },
        { id: 'cli5-c4-title', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#1c1917', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli5-c4-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#78716c' } },
      ],
    },
  ],
  'clients-06': [
    { id: 'cli6-badge', type: 'badge', props: { content: '✦ Klien 06', background: '#1e1b4b', color: '#a5b4fc' } },
    { id: 'cli6-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli6-text', type: 'text', props: { content: 'Mitra strategis dari berbagai industri berskala nasional dan internasional.', fontSize: '15px', color: '#a5b4fc', align: 'center', margin: '0 0 20px 0' } },
    { id: 'cli6-cta', type: 'button', props: { label: 'Jadi Mitra →', href: '#mitra', variant: 'primary', size: 'medium', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
    {
      id: 'cli6-card-1',
      type: 'card',
      props: { variant: 'default', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli6-c1-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#8b5cf6', align: 'center' } },
        { id: 'cli6-c1-title', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli6-c1-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#a5b4fc' } },
      ],
    },
    {
      id: 'cli6-card-2',
      type: 'card',
      props: { variant: 'default', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli6-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#8b5cf6', align: 'center' } },
        { id: 'cli6-c2-title', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli6-c2-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#a5b4fc' } },
      ],
    },
    {
      id: 'cli6-card-3',
      type: 'card',
      props: { variant: 'default', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli6-c3-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#8b5cf6', align: 'center' } },
        { id: 'cli6-c3-title', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli6-c3-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#a5b4fc' } },
      ],
    },
    {
      id: 'cli6-card-4',
      type: 'card',
      props: { variant: 'default', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli6-c4-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#8b5cf6', align: 'center' } },
        { id: 'cli6-c4-title', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli6-c4-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#a5b4fc' } },
      ],
    },
  ],
  'clients-07': [
    { id: 'cli7-badge', type: 'badge', props: { content: '✦ Klien 07', background: '#052e16', color: '#4ade80' } },
    { id: 'cli7-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#e2e8f0', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli7-text', type: 'text', props: { content: 'Mitra strategis dari berbagai industri berskala nasional dan internasional.', fontSize: '15px', color: '#94a3b8', align: 'center', margin: '0 0 20px 0' } },
    { id: 'cli7-cta', type: 'button', props: { label: 'Jadi Mitra →', href: '#mitra', variant: 'primary', size: 'medium', radius: 'full', background: '#22c55e', color: '#052e16' } },
    {
      id: 'cli7-card-1',
      type: 'card',
      props: { variant: 'default', background: '#0f172a', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli7-c1-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#22c55e', align: 'center' } },
        { id: 'cli7-c1-title', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#e2e8f0', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli7-c1-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
      ],
    },
    {
      id: 'cli7-card-2',
      type: 'card',
      props: { variant: 'default', background: '#0f172a', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli7-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#22c55e', align: 'center' } },
        { id: 'cli7-c2-title', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#e2e8f0', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli7-c2-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
      ],
    },
    {
      id: 'cli7-card-3',
      type: 'card',
      props: { variant: 'default', background: '#0f172a', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli7-c3-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#22c55e', align: 'center' } },
        { id: 'cli7-c3-title', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#e2e8f0', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli7-c3-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
      ],
    },
    {
      id: 'cli7-card-4',
      type: 'card',
      props: { variant: 'default', background: '#0f172a', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli7-c4-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#22c55e', align: 'center' } },
        { id: 'cli7-c4-title', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#e2e8f0', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli7-c4-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
      ],
    },
  ],
  'clients-08': [
    { id: 'cli8-badge', type: 'badge', props: { content: '✦ Klien 08', background: '#fce7f3', color: '#be185d' } },
    { id: 'cli8-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#831843', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli8-text', type: 'text', props: { content: 'Mitra strategis dari berbagai industri berskala nasional dan internasional.', fontSize: '15px', color: '#9d7b8c', align: 'center', margin: '0 0 20px 0' } },
    { id: 'cli8-cta', type: 'button', props: { label: 'Jadi Mitra →', href: '#mitra', variant: 'primary', size: 'medium', radius: 'full', background: '#db2777', color: '#ffffff' } },
    {
      id: 'cli8-card-1',
      type: 'card',
      props: { variant: 'default', background: '#fff1f2', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli8-c1-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#db2777', align: 'center' } },
        { id: 'cli8-c1-title', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#831843', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli8-c1-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#9d7b8c' } },
      ],
    },
    {
      id: 'cli8-card-2',
      type: 'card',
      props: { variant: 'default', background: '#fff1f2', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli8-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#db2777', align: 'center' } },
        { id: 'cli8-c2-title', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#831843', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli8-c2-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#9d7b8c' } },
      ],
    },
    {
      id: 'cli8-card-3',
      type: 'card',
      props: { variant: 'default', background: '#fff1f2', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli8-c3-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#db2777', align: 'center' } },
        { id: 'cli8-c3-title', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#831843', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli8-c3-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#9d7b8c' } },
      ],
    },
    {
      id: 'cli8-card-4',
      type: 'card',
      props: { variant: 'default', background: '#fff1f2', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli8-c4-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#db2777', align: 'center' } },
        { id: 'cli8-c4-title', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#831843', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli8-c4-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#9d7b8c' } },
      ],
    },
  ],
  'clients-09': [
    { id: 'cli9-badge', type: 'badge', props: { content: '✦ Klien 09', background: '#78350f', color: '#fde68a' } },
    { id: 'cli9-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#78350f', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli9-text', type: 'text', props: { content: 'Mitra strategis dari berbagai industri berskala nasional dan internasional.', fontSize: '15px', color: '#92400e', align: 'center', margin: '0 0 20px 0' } },
    { id: 'cli9-cta', type: 'button', props: { label: 'Jadi Mitra →', href: '#mitra', variant: 'primary', size: 'medium', radius: 'full', background: '#92400e', color: '#fef3c7' } },
    {
      id: 'cli9-card-1',
      type: 'card',
      props: { variant: 'default', background: '#fffbeb', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli9-c1-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#92400e', align: 'center' } },
        { id: 'cli9-c1-title', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#78350f', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli9-c1-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#92400e' } },
      ],
    },
    {
      id: 'cli9-card-2',
      type: 'card',
      props: { variant: 'default', background: '#fffbeb', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli9-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#92400e', align: 'center' } },
        { id: 'cli9-c2-title', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#78350f', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli9-c2-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#92400e' } },
      ],
    },
    {
      id: 'cli9-card-3',
      type: 'card',
      props: { variant: 'default', background: '#fffbeb', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli9-c3-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#92400e', align: 'center' } },
        { id: 'cli9-c3-title', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#78350f', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli9-c3-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#92400e' } },
      ],
    },
    {
      id: 'cli9-card-4',
      type: 'card',
      props: { variant: 'default', background: '#fffbeb', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli9-c4-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#92400e', align: 'center' } },
        { id: 'cli9-c4-title', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#78350f', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli9-c4-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#92400e' } },
      ],
    },
  ],
  'clients-10': [
    { id: 'cli10-badge', type: 'badge', props: { content: '✦ Klien 10', background: '#fef2f2', color: '#dc2626' } },
    { id: 'cli10-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli10-text', type: 'text', props: { content: 'Mitra strategis dari berbagai industri berskala nasional dan internasional.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'cli10-cta', type: 'button', props: { label: 'Jadi Mitra →', href: '#mitra', variant: 'primary', size: 'medium', radius: 'full', background: '#dc2626', color: '#ffffff' } },
    {
      id: 'cli10-card-1',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli10-c1-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#dc2626', align: 'center' } },
        { id: 'cli10-c1-title', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli10-c1-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli10-card-2',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli10-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#dc2626', align: 'center' } },
        { id: 'cli10-c2-title', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli10-c2-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli10-card-3',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli10-c3-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#dc2626', align: 'center' } },
        { id: 'cli10-c3-title', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli10-c3-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli10-card-4',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli10-c4-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#dc2626', align: 'center' } },
        { id: 'cli10-c4-title', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli10-c4-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
  ],
  'clients-11': [
    { id: 'cli11-badge', type: 'badge', props: { content: '✦ Klien 11', background: '#ffffff', color: '#7c3aed' } },
    { id: 'cli11-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli11-text', type: 'text', props: { content: 'Mitra strategis dari berbagai industri berskala nasional dan internasional.', fontSize: '15px', color: '#ddd6fe', align: 'center', margin: '0 0 20px 0' } },
    { id: 'cli11-cta', type: 'button', props: { label: 'Jadi Mitra →', href: '#mitra', variant: 'primary', size: 'medium', radius: 'full', background: '#ffffff', color: '#6d28d9' } },
    {
      id: 'cli11-card-1',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli11-c1-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#ffffff', align: 'center' } },
        { id: 'cli11-c1-title', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli11-c1-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli11-card-2',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli11-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#ffffff', align: 'center' } },
        { id: 'cli11-c2-title', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli11-c2-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli11-card-3',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli11-c3-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#ffffff', align: 'center' } },
        { id: 'cli11-c3-title', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli11-c3-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli11-card-4',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli11-c4-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#ffffff', align: 'center' } },
        { id: 'cli11-c4-title', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli11-c4-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
  ],
  'clients-12': [
    { id: 'cli12-badge', type: 'badge', props: { content: '✦ Klien 12', background: '#0f172a', color: '#38bdf8' } },
    { id: 'cli12-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli12-text', type: 'text', props: { content: 'Mitra strategis dari berbagai industri berskala nasional dan internasional.', fontSize: '15px', color: '#94a3b8', align: 'center', margin: '0 0 20px 0' } },
    { id: 'cli12-cta', type: 'button', props: { label: 'Jadi Mitra →', href: '#mitra', variant: 'primary', size: 'medium', radius: 'full', background: '#38bdf8', color: '#082f49' } },
    {
      id: 'cli12-card-1',
      type: 'card',
      props: { variant: 'default', background: '#1e293b', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli12-c1-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#38bdf8', align: 'center' } },
        { id: 'cli12-c1-title', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli12-c1-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
      ],
    },
    {
      id: 'cli12-card-2',
      type: 'card',
      props: { variant: 'default', background: '#1e293b', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli12-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#38bdf8', align: 'center' } },
        { id: 'cli12-c2-title', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli12-c2-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
      ],
    },
    {
      id: 'cli12-card-3',
      type: 'card',
      props: { variant: 'default', background: '#1e293b', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli12-c3-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#38bdf8', align: 'center' } },
        { id: 'cli12-c3-title', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli12-c3-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
      ],
    },
    {
      id: 'cli12-card-4',
      type: 'card',
      props: { variant: 'default', background: '#1e293b', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli12-c4-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#38bdf8', align: 'center' } },
        { id: 'cli12-c4-title', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli12-c4-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
      ],
    },
  ],
  'clients-13': [
    { id: 'cli13-badge', type: 'badge', props: { content: '✦ Klien 13', background: '#fce7f3', color: '#ec4899' } },
    { id: 'cli13-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli13-text', type: 'text', props: { content: 'Mitra strategis dari berbagai industri berskala nasional dan internasional.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'cli13-cta', type: 'button', props: { label: 'Jadi Mitra →', href: '#mitra', variant: 'primary', size: 'medium', radius: 'full', background: '#ec4899', color: '#ffffff' } },
    {
      id: 'cli13-card-1',
      type: 'card',
      props: { variant: 'default', background: '#fff1f2', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli13-c1-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#ec4899', align: 'center' } },
        { id: 'cli13-c1-title', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli13-c1-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli13-card-2',
      type: 'card',
      props: { variant: 'default', background: '#fff1f2', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli13-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#ec4899', align: 'center' } },
        { id: 'cli13-c2-title', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli13-c2-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli13-card-3',
      type: 'card',
      props: { variant: 'default', background: '#fff1f2', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli13-c3-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#ec4899', align: 'center' } },
        { id: 'cli13-c3-title', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli13-c3-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli13-card-4',
      type: 'card',
      props: { variant: 'default', background: '#fff1f2', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli13-c4-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#ec4899', align: 'center' } },
        { id: 'cli13-c4-title', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli13-c4-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
  ],
  'clients-14': [
    { id: 'cli14-badge', type: 'badge', props: { content: '✦ Klien 14', background: '#eff6ff', color: '#1d4ed8' } },
    { id: 'cli14-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli14-text', type: 'text', props: { content: 'Mitra strategis dari berbagai industri berskala nasional dan internasional.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'cli14-cta', type: 'button', props: { label: 'Jadi Mitra →', href: '#mitra', variant: 'primary', size: 'medium', radius: 'full', background: '#1e40af', color: '#ffffff' } },
    {
      id: 'cli14-card-1',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli14-c1-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#1e40af', align: 'center' } },
        { id: 'cli14-c1-title', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli14-c1-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli14-card-2',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli14-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#1e40af', align: 'center' } },
        { id: 'cli14-c2-title', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli14-c2-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli14-card-3',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli14-c3-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#1e40af', align: 'center' } },
        { id: 'cli14-c3-title', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli14-c3-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli14-card-4',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli14-c4-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#1e40af', align: 'center' } },
        { id: 'cli14-c4-title', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli14-c4-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
  ],
  'clients-15': [
    { id: 'cli15-badge', type: 'badge', props: { content: '✦ Klien 15', background: '#0f172a', color: '#ffffff' } },
    { id: 'cli15-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli15-text', type: 'text', props: { content: 'Mitra strategis dari berbagai industri berskala nasional dan internasional.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'cli15-cta', type: 'button', props: { label: 'Jadi Mitra →', href: '#mitra', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    {
      id: 'cli15-card-1',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli15-c1-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#0f172a', align: 'center' } },
        { id: 'cli15-c1-title', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli15-c1-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli15-card-2',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli15-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#0f172a', align: 'center' } },
        { id: 'cli15-c2-title', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli15-c2-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli15-card-3',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli15-c3-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#0f172a', align: 'center' } },
        { id: 'cli15-c3-title', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli15-c3-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli15-card-4',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli15-c4-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#0f172a', align: 'center' } },
        { id: 'cli15-c4-title', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli15-c4-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
  ],
  'clients-16': [
    { id: 'cli16-badge', type: 'badge', props: { content: '✦ Klien 16', background: '#dcfce7', color: '#166534' } },
    { id: 'cli16-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#064e3b', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli16-text', type: 'text', props: { content: 'Mitra strategis dari berbagai industri berskala nasional dan internasional.', fontSize: '15px', color: '#4d7c0f', align: 'center', margin: '0 0 20px 0' } },
    { id: 'cli16-cta', type: 'button', props: { label: 'Jadi Mitra →', href: '#mitra', variant: 'primary', size: 'medium', radius: 'full', background: '#16a34a', color: '#ffffff' } },
    {
      id: 'cli16-card-1',
      type: 'card',
      props: { variant: 'default', background: '#f0fdf4', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli16-c1-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#16a34a', align: 'center' } },
        { id: 'cli16-c1-title', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#064e3b', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli16-c1-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#166534' } },
      ],
    },
    {
      id: 'cli16-card-2',
      type: 'card',
      props: { variant: 'default', background: '#f0fdf4', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli16-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#16a34a', align: 'center' } },
        { id: 'cli16-c2-title', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#064e3b', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli16-c2-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#166534' } },
      ],
    },
    {
      id: 'cli16-card-3',
      type: 'card',
      props: { variant: 'default', background: '#f0fdf4', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli16-c3-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#16a34a', align: 'center' } },
        { id: 'cli16-c3-title', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#064e3b', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli16-c3-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#166534' } },
      ],
    },
    {
      id: 'cli16-card-4',
      type: 'card',
      props: { variant: 'default', background: '#f0fdf4', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli16-c4-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#16a34a', align: 'center' } },
        { id: 'cli16-c4-title', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#064e3b', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli16-c4-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#166534' } },
      ],
    },
  ],
  'clients-17': [
    { id: 'cli17-badge', type: 'badge', props: { content: '✦ Klien 17', background: '#dc2626', color: '#ffffff' } },
    { id: 'cli17-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli17-text', type: 'text', props: { content: 'Mitra strategis dari berbagai industri berskala nasional dan internasional.', fontSize: '15px', color: '#fecaca', align: 'center', margin: '0 0 20px 0' } },
    { id: 'cli17-cta', type: 'button', props: { label: 'Jadi Mitra →', href: '#mitra', variant: 'primary', size: 'medium', radius: 'full', background: '#dc2626', color: '#ffffff' } },
    {
      id: 'cli17-card-1',
      type: 'card',
      props: { variant: 'default', background: '#171717', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli17-c1-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#dc2626', align: 'center' } },
        { id: 'cli17-c1-title', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli17-c1-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#fecaca' } },
      ],
    },
    {
      id: 'cli17-card-2',
      type: 'card',
      props: { variant: 'default', background: '#171717', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli17-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#dc2626', align: 'center' } },
        { id: 'cli17-c2-title', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli17-c2-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#fecaca' } },
      ],
    },
    {
      id: 'cli17-card-3',
      type: 'card',
      props: { variant: 'default', background: '#171717', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli17-c3-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#dc2626', align: 'center' } },
        { id: 'cli17-c3-title', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli17-c3-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#fecaca' } },
      ],
    },
    {
      id: 'cli17-card-4',
      type: 'card',
      props: { variant: 'default', background: '#171717', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli17-c4-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#dc2626', align: 'center' } },
        { id: 'cli17-c4-title', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli17-c4-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#fecaca' } },
      ],
    },
  ],
  'clients-18': [
    { id: 'cli18-badge', type: 'badge', props: { content: '✦ Klien 18', background: '#fff7ed', color: '#ea580c' } },
    { id: 'cli18-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli18-text', type: 'text', props: { content: 'Mitra strategis dari berbagai industri berskala nasional dan internasional.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'cli18-cta', type: 'button', props: { label: 'Jadi Mitra →', href: '#mitra', variant: 'primary', size: 'medium', radius: 'full', background: '#f97316', color: '#ffffff' } },
    {
      id: 'cli18-card-1',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli18-c1-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#f97316', align: 'center' } },
        { id: 'cli18-c1-title', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli18-c1-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli18-card-2',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli18-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#f97316', align: 'center' } },
        { id: 'cli18-c2-title', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli18-c2-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli18-card-3',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli18-c3-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#f97316', align: 'center' } },
        { id: 'cli18-c3-title', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli18-c3-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli18-card-4',
      type: 'card',
      props: { variant: 'default', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli18-c4-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#f97316', align: 'center' } },
        { id: 'cli18-c4-title', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli18-c4-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
  ],
  'clients-19': [
    { id: 'cli19-badge', type: 'badge', props: { content: '✦ Klien 19', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'cli19-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli19-text', type: 'text', props: { content: 'Mitra strategis dari berbagai industri berskala nasional dan internasional.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'cli19-cta', type: 'button', props: { label: 'Jadi Mitra →', href: '#mitra', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    {
      id: 'cli19-card-1',
      type: 'card',
      props: { variant: 'default', background: 'rgba(255,255,255,0.85)', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli19-c1-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#0f172a', align: 'center' } },
        { id: 'cli19-c1-title', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli19-c1-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli19-card-2',
      type: 'card',
      props: { variant: 'default', background: 'rgba(255,255,255,0.85)', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli19-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#0f172a', align: 'center' } },
        { id: 'cli19-c2-title', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli19-c2-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli19-card-3',
      type: 'card',
      props: { variant: 'default', background: 'rgba(255,255,255,0.85)', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli19-c3-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#0f172a', align: 'center' } },
        { id: 'cli19-c3-title', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli19-c3-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
    {
      id: 'cli19-card-4',
      type: 'card',
      props: { variant: 'default', background: 'rgba(255,255,255,0.85)', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli19-c4-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#0f172a', align: 'center' } },
        { id: 'cli19-c4-title', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli19-c4-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } },
      ],
    },
  ],
  'clients-20': [
    { id: 'cli20-badge', type: 'badge', props: { content: '✦ Klien 20', background: '#1e1b4b', color: '#c4b5fd' } },
    { id: 'cli20-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli20-text', type: 'text', props: { content: 'Mitra strategis dari berbagai industri berskala nasional dan internasional.', fontSize: '15px', color: '#a5b4fc', align: 'center', margin: '0 0 20px 0' } },
    { id: 'cli20-cta', type: 'button', props: { label: 'Jadi Mitra →', href: '#mitra', variant: 'primary', size: 'medium', radius: 'full', background: '#6366f1', color: '#ffffff' } },
    {
      id: 'cli20-card-1',
      type: 'card',
      props: { variant: 'default', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli20-c1-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#6366f1', align: 'center' } },
        { id: 'cli20-c1-title', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli20-c1-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#a5b4fc' } },
      ],
    },
    {
      id: 'cli20-card-2',
      type: 'card',
      props: { variant: 'default', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli20-c2-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#6366f1', align: 'center' } },
        { id: 'cli20-c2-title', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli20-c2-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#a5b4fc' } },
      ],
    },
    {
      id: 'cli20-card-3',
      type: 'card',
      props: { variant: 'default', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli20-c3-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#6366f1', align: 'center' } },
        { id: 'cli20-c3-title', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli20-c3-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#a5b4fc' } },
      ],
    },
    {
      id: 'cli20-card-4',
      type: 'card',
      props: { variant: 'default', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'cli20-c4-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#6366f1', align: 'center' } },
        { id: 'cli20-c4-title', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '8px 0 0 0' } },
        { id: 'cli20-c4-btn', type: 'button', props: { label: 'Studi Kasus →', href: '#klien', variant: 'ghost', size: 'small', background: 'transparent', color: '#a5b4fc' } },
      ],
    },
  ],
  'programs-01': [
    { id: 'prg1-badge', type: 'badge', props: { content: 'Program Studi', background: '#ede9fe', color: '#4f46e5', borderRadius: '999px', padding: '6px 16px', fontSize: '13px', fontWeight: '600', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prg1-heading', type: 'heading', props: { content: 'Program Akademik Unggulan', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prg1-subtext', type: 'text', props: { content: 'Pilih jalur pendidikan terbaik yang sesuai dengan cita-cita dan karir Anda', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'prg1-card-1', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'prg1-c1-icon', type: 'icon', props: { icon: 'FaGraduationCap', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'prg1-c1-title', type: 'heading', props: { content: 'Sarjana (S1)', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'prg1-c1-desc', type: 'text', props: { content: 'Program sarjana 4 tahun dengan kurikulum berbasis kompetensi dan sertifikasi profesional.', fontSize: '14px', color: '#64748b', margin: '0 0 16px 0' } },
      { id: 'prg1-c1-btn', type: 'button', props: { content: 'Pelajari Lebih Lanjut', variant: 'outline', background: 'transparent', color: '#4f46e5', borderColor: '#4f46e5', borderWidth: '1.5px', borderRadius: '10px', padding: '8px 18px', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'prg1-card-2', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'prg1-c2-icon', type: 'icon', props: { icon: 'FaUniversity', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'prg1-c2-title', type: 'heading', props: { content: 'Magister (S2)', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'prg1-c2-desc', type: 'text', props: { content: 'Program magister 2 tahun dengan fokus penelitian terapan dan kemitraan industri global.', fontSize: '14px', color: '#64748b', margin: '0 0 16px 0' } },
      { id: 'prg1-c2-btn', type: 'button', props: { content: 'Pelajari Lebih Lanjut', variant: 'outline', background: 'transparent', color: '#4f46e5', borderColor: '#4f46e5', borderWidth: '1.5px', borderRadius: '10px', padding: '8px 18px', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'prg1-card-3', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'prg1-c3-icon', type: 'icon', props: { icon: 'FaMicroscope', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'prg1-c3-title', type: 'heading', props: { content: 'Doktor (S3)', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'prg1-c3-desc', type: 'text', props: { content: 'Program doktor riset mendalam dengan laboratorium riset berstandar internasional.', fontSize: '14px', color: '#64748b', margin: '0 0 16px 0' } },
      { id: 'prg1-c3-btn', type: 'button', props: { content: 'Pelajari Lebih Lanjut', variant: 'outline', background: 'transparent', color: '#4f46e5', borderColor: '#4f46e5', borderWidth: '1.5px', borderRadius: '10px', padding: '8px 18px', fontSize: '13px', fontWeight: '600' } },
    ]},
  ],
  'teachers-01': [
    { id: 'tch1-badge', type: 'badge', props: { content: 'Tenaga Pengajar', background: '#ede9fe', color: '#4f46e5', borderRadius: '999px', padding: '6px 16px', fontSize: '13px', fontWeight: '600', align: 'center', margin: '0 0 12px 0' } },
    { id: 'tch1-heading', type: 'heading', props: { content: 'Dosen & Instruktur Berpengalaman', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'tch1-subtext', type: 'text', props: { content: 'Didukung oleh akademisi dan praktisi terbaik dari dalam dan luar negeri', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'tch1-card-1', type: 'card', props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'tch1-c1-avatar', type: 'image', props: { src: '', alt: 'Dr. Ahmad Fauzi', width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', align: 'center', margin: '0 auto 16px auto' } },
      { id: 'tch1-c1-name', type: 'heading', props: { content: 'Dr. Ahmad Fauzi', level: 'h3', fontSize: '17px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 4px 0' } },
      { id: 'tch1-c1-role', type: 'text', props: { content: 'Kepala Program Teknik Informatika', fontSize: '13px', color: '#4f46e5', fontWeight: '600', align: 'center', margin: '0 0 8px 0' } },
      { id: 'tch1-c1-desc', type: 'text', props: { content: 'Ph.D dari MIT, 15 tahun pengalaman riset AI dan Machine Learning.', fontSize: '13px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'tch1-card-2', type: 'card', props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'tch1-c2-avatar', type: 'image', props: { src: '', alt: 'Prof. Siti Rahayu', width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', align: 'center', margin: '0 auto 16px auto' } },
      { id: 'tch1-c2-name', type: 'heading', props: { content: 'Prof. Siti Rahayu', level: 'h3', fontSize: '17px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 4px 0' } },
      { id: 'tch1-c2-role', type: 'text', props: { content: 'Guru Besar Ekonomi Manajemen', fontSize: '13px', color: '#4f46e5', fontWeight: '600', align: 'center', margin: '0 0 8px 0' } },
      { id: 'tch1-c2-desc', type: 'text', props: { content: 'Konsultan senior Bank Indonesia, penulis 3 buku manajemen keuangan.', fontSize: '13px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'tch1-card-3', type: 'card', props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'tch1-c3-avatar', type: 'image', props: { src: '', alt: 'Dr. Reza Mahendra', width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', align: 'center', margin: '0 auto 16px auto' } },
      { id: 'tch1-c3-name', type: 'heading', props: { content: 'Dr. Reza Mahendra', level: 'h3', fontSize: '17px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 4px 0' } },
      { id: 'tch1-c3-role', type: 'text', props: { content: 'Dosen Hukum Bisnis Internasional', fontSize: '13px', color: '#4f46e5', fontWeight: '600', align: 'center', margin: '0 0 8px 0' } },
      { id: 'tch1-c3-desc', type: 'text', props: { content: 'Advokat senior, 12 tahun pengalaman hukum bisnis internasional di Asia.', fontSize: '13px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'tch1-card-4', type: 'card', props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'tch1-c4-avatar', type: 'image', props: { src: '', alt: 'Prof. Linda Kartika', width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', align: 'center', margin: '0 auto 16px auto' } },
      { id: 'tch1-c4-name', type: 'heading', props: { content: 'Prof. Linda Kartika', level: 'h3', fontSize: '17px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 4px 0' } },
      { id: 'tch1-c4-role', type: 'text', props: { content: 'Koordinator Jurusan Desain Komunikasi', fontSize: '13px', color: '#4f46e5', fontWeight: '600', align: 'center', margin: '0 0 8px 0' } },
      { id: 'tch1-c4-desc', type: 'text', props: { content: 'Creative Director berpengalaman 18 tahun di industri periklanan global.', fontSize: '13px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
  ],
  'facilities-01': [
    { id: 'fac1-heading', type: 'heading', props: { content: 'Fasilitas Kampus Kelas Dunia', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'fac1-subtext', type: 'text', props: { content: 'Lingkungan belajar modern yang mendukung inovasi dan kreativitas mahasiswa', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'fac1-card-1', type: 'card', props: { variant: 'feature', background: '#f8fafc', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'glow', padding: '28px' }, childrenComponents: [
      { id: 'fac1-c1-icon', type: 'icon', props: { icon: 'FaBook', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'fac1-c1-title', type: 'heading', props: { content: 'Perpustakaan Digital', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'fac1-c1-desc', type: 'text', props: { content: 'Koleksi lebih dari 50.000 jurnal dan buku digital terakreditasi internasional.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'fac1-card-2', type: 'card', props: { variant: 'feature', background: '#f8fafc', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'glow', padding: '28px' }, childrenComponents: [
      { id: 'fac1-c2-icon', type: 'icon', props: { icon: 'FaFlask', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'fac1-c2-title', type: 'heading', props: { content: 'Laboratorium Riset', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'fac1-c2-desc', type: 'text', props: { content: 'Fasilitas laboratorium canggih untuk riset sains, teknologi, dan rekayasa.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'fac1-card-3', type: 'card', props: { variant: 'feature', background: '#f8fafc', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'glow', padding: '28px' }, childrenComponents: [
      { id: 'fac1-c3-icon', type: 'icon', props: { icon: 'FaRunning', size: '36px', color: '#4f46e5', align: 'left' } },
      { id: 'fac1-c3-title', type: 'heading', props: { content: 'Pusat Olahraga', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 8px 0' } },
      { id: 'fac1-c3-desc', type: 'text', props: { content: 'Kompleks olahraga indoor & outdoor lengkap untuk aktivitas fisik mahasiswa.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
  ],
  'achievements-01': [
    { id: 'ach1-heading', type: 'heading', props: { content: 'Pencapaian Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ach1-subtext', type: 'text', props: { content: 'Angka yang berbicara tentang komitmen dan dedikasi kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'ach1-card-1', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'ach1-c1-value', type: 'heading', props: { content: '100+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
      { id: 'ach1-c1-label', type: 'text', props: { content: 'Penghargaan Nasional', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
    ]},
    { id: 'ach1-card-2', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'ach1-c2-value', type: 'heading', props: { content: '5.000+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
      { id: 'ach1-c2-label', type: 'text', props: { content: 'Alumni Sukses', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
    ]},
    { id: 'ach1-card-3', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'ach1-c3-value', type: 'heading', props: { content: '50+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
      { id: 'ach1-c3-label', type: 'text', props: { content: 'Tahun Berpengalaman', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
    ]},
    { id: 'ach1-card-4', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'ach1-c4-value', type: 'heading', props: { content: '98%', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
      { id: 'ach1-c4-label', type: 'text', props: { content: 'Tingkat Keberhasilan', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
    ]},
  ],
  'registration-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Pendaftaran Mahasiswa', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Daftarkan diri Anda sekarang untuk tahun akademik mendatang', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 32px 0' } },
  ],
    'products-01': [
    {
      id: 'prod1-badge',
      type: 'badge',
      props: { content: '✦ Koleksi Unggulan', background: '#eef2ff', color: '#4f46e5' },
    },
    {
      id: 'prod1-heading',
      type: 'heading',
      props: { content: 'Produk & Layanan Kami', level: 'h2', fontSize: '44px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'prod1-subtext',
      type: 'text',
      props: { content: 'Solusi inovatif yang dirancang khusus untuk kebutuhan bisnis modern Anda', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 28px 0' },
    },
    { id: 'prod1-cta', type: 'button', props: { label: 'Lihat Semua →', href: '#produk', variant: 'primary', size: 'medium', radius: 'full', background: '#4f46e5', color: '#ffffff' } },
    {
      id: 'prod1-card-1',
      type: 'card',
      props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod1-c1-image', type: 'image', props: { src: '', alt: 'Produk Enterprise', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod1-c1-body', type: 'text', props: { content: '★ 4.9 · Terlaris', fontSize: '12px', color: '#4f46e5', padding: '14px 20px 0 20px', margin: '0' } },
        { id: 'prod1-c1-title', type: 'heading', props: { content: 'Microdata Enterprise', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '0', padding: '0 20px' } },
        { id: 'prod1-c1-desc', type: 'text', props: { content: 'Sistem manajemen bisnis terintegrasi untuk perusahaan skala besar.', fontSize: '14px', color: '#64748b', margin: '8px 0 20px 0', padding: '0 20px' } },
        { id: 'prod1-c1-btn', type: 'button', props: { label: 'Lihat Detail', href: '#detail', variant: 'primary', size: 'small', background: '#4f46e5', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod1-card-2',
      type: 'card',
      props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod1-c2-image', type: 'image', props: { src: '', alt: 'Produk UMKM', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod1-c2-body', type: 'text', props: { content: '★ 4.8 · Favorit UMKM', fontSize: '12px', color: '#4f46e5', padding: '14px 20px 0 20px', margin: '0' } },
        { id: 'prod1-c2-title', type: 'heading', props: { content: 'Microdata UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '0', padding: '0 20px' } },
        { id: 'prod1-c2-desc', type: 'text', props: { content: 'Platform kasir dan stok digital yang mudah digunakan untuk UMKM.', fontSize: '14px', color: '#64748b', margin: '8px 0 20px 0', padding: '0 20px' } },
        { id: 'prod1-c2-btn', type: 'button', props: { label: 'Lihat Detail', href: '#detail', variant: 'primary', size: 'small', background: '#4f46e5', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod1-card-3',
      type: 'card',
      props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod1-c3-image', type: 'image', props: { src: '', alt: 'Produk Akademik', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod1-c3-body', type: 'text', props: { content: '★ 5.0 · Rekomendasi', fontSize: '12px', color: '#4f46e5', padding: '14px 20px 0 20px', margin: '0' } },
        { id: 'prod1-c3-title', type: 'heading', props: { content: 'Microdata Akademik', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '0', padding: '0 20px' } },
        { id: 'prod1-c3-desc', type: 'text', props: { content: 'Sistem informasi manajemen akademik lengkap untuk kampus dan sekolah.', fontSize: '14px', color: '#64748b', margin: '8px 0 20px 0', padding: '0 20px' } },
        { id: 'prod1-c3-btn', type: 'button', props: { label: 'Lihat Detail', href: '#detail', variant: 'primary', size: 'small', background: '#4f46e5', color: '#ffffff' } },
      ],
    },
  ],
  'products-02': [
    { id: 'prod2-badge', type: 'badge', props: { content: '✦ Koleksi Noir', background: '#1c1917', color: '#e7c873' } },
    { id: 'prod2-heading', type: 'heading', props: { content: 'Kemewahan dalam Setiap Detail', level: 'h2', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod2-text', type: 'text', props: { content: 'Kurasi premium untuk mereka yang mengerti kualitas sejati.', fontSize: '16px', color: '#a8a29e', align: 'center', margin: '0 0 28px 0' } },
    { id: 'prod2-cta', type: 'button', props: { label: 'Lihat Koleksi →', href: '#koleksi', variant: 'outline', size: 'medium', radius: 'full', background: '#e7c873', color: '#e7c873' } },
    {
      id: 'prod2-card-1', type: 'card',
      props: { variant: 'product', background: '#1c1917', borderRadius: '20px', shadow: 'lg', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod2-c1-image', type: 'image', props: { src: '', alt: 'Noir Signature', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod2-c1-title', type: 'heading', props: { content: 'Noir Signature', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '16px 0 0 0', padding: '0 20px' } },
        { id: 'prod2-c1-price', type: 'heading', props: { content: 'Rp 9.900.000', level: 'h4', fontSize: '20px', fontWeight: '800', color: '#e7c873', margin: '6px 0 0 0', padding: '0 20px' } },
        { id: 'prod2-c1-desc', type: 'text', props: { content: 'Edisi terbatas dengan material terbaik dunia.', fontSize: '14px', color: '#a8a29e', margin: '8px 0 16px 0', padding: '0 20px' } },
        { id: 'prod2-c1-btn', type: 'button', props: { label: 'Reserve →', href: '#reserve', variant: 'primary', size: 'small', radius: 'full', background: '#e7c873', color: '#1c1917' } },
      ],
    },
    {
      id: 'prod2-card-2', type: 'card',
      props: { variant: 'product', background: '#1c1917', borderRadius: '20px', shadow: 'lg', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod2-c2-image', type: 'image', props: { src: '', alt: 'Noir Heritage', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod2-c2-title', type: 'heading', props: { content: 'Noir Heritage', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '16px 0 0 0', padding: '0 20px' } },
        { id: 'prod2-c2-price', type: 'heading', props: { content: 'Rp 7.500.000', level: 'h4', fontSize: '20px', fontWeight: '800', color: '#e7c873', margin: '6px 0 0 0', padding: '0 20px' } },
        { id: 'prod2-c2-desc', type: 'text', props: { content: 'Warisan craftsmanship turun-temurun.', fontSize: '14px', color: '#a8a29e', margin: '8px 0 16px 0', padding: '0 20px' } },
        { id: 'prod2-c2-btn', type: 'button', props: { label: 'Reserve →', href: '#reserve', variant: 'primary', size: 'small', radius: 'full', background: '#e7c873', color: '#1c1917' } },
      ],
    },
    {
      id: 'prod2-card-3', type: 'card',
      props: { variant: 'product', background: '#1c1917', borderRadius: '20px', shadow: 'lg', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod2-c3-image', type: 'image', props: { src: '', alt: 'Noir Atelier', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod2-c3-title', type: 'heading', props: { content: 'Noir Atelier', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '16px 0 0 0', padding: '0 20px' } },
        { id: 'prod2-c3-price', type: 'heading', props: { content: 'Rp 12.000.000', level: 'h4', fontSize: '20px', fontWeight: '800', color: '#e7c873', margin: '6px 0 0 0', padding: '0 20px' } },
        { id: 'prod2-c3-desc', type: 'text', props: { content: 'Custom eksklusif sesuai pesanan Anda.', fontSize: '14px', color: '#a8a29e', margin: '8px 0 16px 0', padding: '0 20px' } },
        { id: 'prod2-c3-btn', type: 'button', props: { label: 'Reserve →', href: '#reserve', variant: 'primary', size: 'small', radius: 'full', background: '#e7c873', color: '#1c1917' } },
      ],
    },
  ],
  'products-03': [
    { id: 'prod3-badge', type: 'badge', props: { content: '● Armada Live', background: '#fff7ed', color: '#ea580c' } },
    { id: 'prod3-heading', type: 'heading', props: { content: 'Layanan Logistik Unggulan', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 12px 0' } },
    { id: 'prod3-text', type: 'text', props: { content: 'Darat, laut, udara — satu pintu, tracking real-time.', fontSize: '16px', color: '#64748b', align: 'left', margin: '0 0 20px 0' } },
    { id: 'prod3-cta', type: 'button', props: { label: 'Lacak Kiriman →', href: '#tracking', variant: 'primary', size: 'medium', radius: 'md', background: '#ea580c', color: '#ffffff' } },
    {
      id: 'prod3-card-1', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod3-c1-image', type: 'image', props: { src: '', alt: 'Express Darat', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'prod3-c1-title', type: 'heading', props: { content: 'Express Darat', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod3-c1-price', type: 'heading', props: { content: 'Mulai Rp 15rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#ea580c', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod3-c1-desc', type: 'text', props: { content: 'Same-day antar kota dengan armada 2.400 unit.', fontSize: '13px', color: '#64748b', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod3-c1-btn', type: 'button', props: { label: 'Pesan →', href: '#pesan', variant: 'primary', size: 'small', radius: 'md', background: '#ea580c', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod3-card-2', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod3-c2-image', type: 'image', props: { src: '', alt: 'Cargo Laut', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'prod3-c2-title', type: 'heading', props: { content: 'Cargo Laut', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod3-c2-price', type: 'heading', props: { content: 'Mulai Rp 45rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#ea580c', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod3-c2-desc', type: 'text', props: { content: 'Kontainer FCL/LCL ke 120 pelabuhan.', fontSize: '13px', color: '#64748b', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod3-c2-btn', type: 'button', props: { label: 'Pesan →', href: '#pesan', variant: 'primary', size: 'small', radius: 'md', background: '#ea580c', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod3-card-3', type: 'card',
      props: { variant: 'product', background: '#0f172a', borderRadius: '16px', shadow: 'lg', borderWidth: '0', borderColor: '#0f172a', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod3-c3-image', type: 'image', props: { src: '', alt: 'Air Priority', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'prod3-c3-title', type: 'heading', props: { content: 'Air Priority', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod3-c3-price', type: 'heading', props: { content: 'Mulai Rp 95rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#fdba74', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod3-c3-desc', type: 'text', props: { content: 'Next-flight-out, garansi 24 jam tiba.', fontSize: '13px', color: '#94a3b8', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod3-c3-btn', type: 'button', props: { label: 'Pesan →', href: '#pesan', variant: 'primary', size: 'small', radius: 'md', background: '#ffffff', color: '#0f172a' } },
      ],
    },
  ],
  'products-04': [
    { id: 'prod4-badge', type: 'badge', props: { content: '★ BRUTAL DROP', background: '#000000', color: '#facc15' } },
    { id: 'prod4-heading', type: 'heading', props: { content: 'PRODUK ANTI-MAINSTREAM', level: 'h2', fontSize: '44px', fontWeight: '900', color: '#000000', align: 'left', margin: '0 0 12px 0' } },
    { id: 'prod4-text', type: 'text', props: { content: 'No template. No boring. Hanya karya berani.', fontSize: '16px', color: '#000000', align: 'left', margin: '0 0 20px 0' } },
    { id: 'prod4-cta', type: 'button', props: { label: 'SHOP DROP →', href: '#shop', variant: 'primary', size: 'medium', radius: 'none', background: '#000000', color: '#facc15' } },
    {
      id: 'prod4-card-1', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '0px', shadow: 'none', borderWidth: '3px', borderColor: '#000000', hoverEffect: 'none', padding: '0' },
      childrenComponents: [
        { id: 'prod4-c1-image', type: 'image', props: { src: '', alt: 'Poster Riot', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '0' } },
        { id: 'prod4-c1-title', type: 'heading', props: { content: 'POSTER RIOT', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#000000', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod4-c1-price', type: 'heading', props: { content: 'Rp 199rb', level: 'h4', fontSize: '20px', fontWeight: '900', color: '#000000', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod4-c1-desc', type: 'text', props: { content: 'Sablon manual, edisi 100 pcs.', fontSize: '13px', color: '#000000', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod4-c1-btn', type: 'button', props: { label: 'ADD +', href: '#cart', variant: 'primary', size: 'small', radius: 'none', background: '#000000', color: '#facc15' } },
      ],
    },
    {
      id: 'prod4-card-2', type: 'card',
      props: { variant: 'product', background: '#facc15', borderRadius: '0px', shadow: 'none', borderWidth: '3px', borderColor: '#000000', hoverEffect: 'none', padding: '0' },
      childrenComponents: [
        { id: 'prod4-c2-image', type: 'image', props: { src: '', alt: 'Tee Loud', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '0' } },
        { id: 'prod4-c2-title', type: 'heading', props: { content: 'TEE LOUD', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#000000', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod4-c2-price', type: 'heading', props: { content: 'Rp 249rb', level: 'h4', fontSize: '20px', fontWeight: '900', color: '#000000', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod4-c2-desc', type: 'text', props: { content: 'Cotton 24s, print plastisol.', fontSize: '13px', color: '#000000', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod4-c2-btn', type: 'button', props: { label: 'ADD +', href: '#cart', variant: 'primary', size: 'small', radius: 'none', background: '#000000', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod4-card-3', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '0px', shadow: 'none', borderWidth: '3px', borderColor: '#000000', hoverEffect: 'none', padding: '0' },
      childrenComponents: [
        { id: 'prod4-c3-image', type: 'image', props: { src: '', alt: 'Sticker Pack', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '0' } },
        { id: 'prod4-c3-title', type: 'heading', props: { content: 'STICKER PACK', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#000000', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod4-c3-price', type: 'heading', props: { content: 'Rp 49rb', level: 'h4', fontSize: '20px', fontWeight: '900', color: '#000000', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod4-c3-desc', type: 'text', props: { content: 'Vinyl anti air, 20 pcs.', fontSize: '13px', color: '#000000', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod4-c3-btn', type: 'button', props: { label: 'ADD +', href: '#cart', variant: 'primary', size: 'small', radius: 'none', background: '#000000', color: '#facc15' } },
      ],
    },
  ],
  'products-05': [
    { id: 'prod5-heading', type: 'heading', props: { content: 'Breathe. Choose less.', level: 'h2', fontSize: '46px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod5-text', type: 'text', props: { content: 'Tiga ritual esensial — diramu perlahan di Ubud.', fontSize: '16px', color: '#78716c', align: 'center', margin: '0 0 24px 0' } },
    { id: 'prod5-cta', type: 'button', props: { label: 'View Rituals —', href: '#rituals', variant: 'ghost', size: 'medium', background: 'transparent', color: '#1c1917' } },
    {
      id: 'prod5-card-1', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '24px', shadow: 'none', borderWidth: '0', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod5-c1-image', type: 'image', props: { src: '', alt: 'Morning Oil', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '24px 24px 0 0' } },
        { id: 'prod5-c1-title', type: 'heading', props: { content: 'Morning Oil', level: 'h3', fontSize: '20px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '16px 0 0 0', padding: '0 20px' } },
        { id: 'prod5-c1-price', type: 'heading', props: { content: 'Rp 320rb', level: 'h4', fontSize: '16px', fontWeight: '400', color: '#78716c', align: 'center', margin: '4px 0 0 0', padding: '0 20px' } },
        { id: 'prod5-c1-desc', type: 'text', props: { content: 'Cold-pressed frangipani & coconut.', fontSize: '13px', color: '#a8a29e', align: 'center', margin: '6px 0 16px 0', padding: '0 20px' } },
        { id: 'prod5-c1-btn', type: 'button', props: { label: 'Add to Ritual', href: '#cart', variant: 'ghost', size: 'small', background: 'transparent', color: '#1c1917' } },
      ],
    },
    {
      id: 'prod5-card-2', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '24px', shadow: 'none', borderWidth: '0', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod5-c2-image', type: 'image', props: { src: '', alt: 'Still Tea', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '24px 24px 0 0' } },
        { id: 'prod5-c2-title', type: 'heading', props: { content: 'Still Tea', level: 'h3', fontSize: '20px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '16px 0 0 0', padding: '0 20px' } },
        { id: 'prod5-c2-price', type: 'heading', props: { content: 'Rp 180rb', level: 'h4', fontSize: '16px', fontWeight: '400', color: '#78716c', align: 'center', margin: '4px 0 0 0', padding: '0 20px' } },
        { id: 'prod5-c2-desc', type: 'text', props: { content: 'Single-origin chamomile highland.', fontSize: '13px', color: '#a8a29e', align: 'center', margin: '6px 0 16px 0', padding: '0 20px' } },
        { id: 'prod5-c2-btn', type: 'button', props: { label: 'Add to Ritual', href: '#cart', variant: 'ghost', size: 'small', background: 'transparent', color: '#1c1917' } },
      ],
    },
    {
      id: 'prod5-card-3', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '24px', shadow: 'none', borderWidth: '0', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod5-c3-image', type: 'image', props: { src: '', alt: 'Slow Candle', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '24px 24px 0 0' } },
        { id: 'prod5-c3-title', type: 'heading', props: { content: 'Slow Candle', level: 'h3', fontSize: '20px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '16px 0 0 0', padding: '0 20px' } },
        { id: 'prod5-c3-price', type: 'heading', props: { content: 'Rp 240rb', level: 'h4', fontSize: '16px', fontWeight: '400', color: '#78716c', align: 'center', margin: '4px 0 0 0', padding: '0 20px' } },
        { id: 'prod5-c3-desc', type: 'text', props: { content: 'Beeswax & sandalwood, 60h burn.', fontSize: '13px', color: '#a8a29e', align: 'center', margin: '6px 0 16px 0', padding: '0 20px' } },
        { id: 'prod5-c3-btn', type: 'button', props: { label: 'Add to Ritual', href: '#cart', variant: 'ghost', size: 'small', background: 'transparent', color: '#1c1917' } },
      ],
    },
  ],
  'products-06': [
    { id: 'prod6-badge', type: 'badge', props: { content: '● Nebula Drop Live', background: '#1e1b4b', color: '#a5b4fc' } },
    { id: 'prod6-heading', type: 'heading', props: { content: 'Gear dari Galaksi Lain', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod6-text', type: 'text', props: { content: '128.400 explorer sudah upgrade loadout mereka.', fontSize: '15px', color: '#a5b4fc', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prod6-cta', type: 'button', props: { label: 'Explore Universe →', href: '#universe', variant: 'primary', size: 'medium', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
    {
      id: 'prod6-card-1', type: 'card',
      props: { variant: 'product', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', shadow: 'lg', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'glow', padding: '0' },
      childrenComponents: [
        { id: 'prod6-c1-image', type: 'image', props: { src: '', alt: 'Nebula Headset', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod6-c1-title', type: 'heading', props: { content: 'Nebula Headset', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod6-c1-price', type: 'heading', props: { content: 'Rp 1.899rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#c4b5fd', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod6-c1-desc', type: 'text', props: { content: 'Spatial audio + noise void.', fontSize: '13px', color: '#a5b4fc', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod6-c1-btn', type: 'button', props: { label: 'Add to Loadout', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod6-card-2', type: 'card',
      props: { variant: 'product', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', shadow: 'lg', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'glow', padding: '0' },
      childrenComponents: [
        { id: 'prod6-c2-image', type: 'image', props: { src: '', alt: 'Orbit Keyboard', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod6-c2-title', type: 'heading', props: { content: 'Orbit Keyboard', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod6-c2-price', type: 'heading', props: { content: 'Rp 2.499rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#c4b5fd', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod6-c2-desc', type: 'text', props: { content: 'Hall-effect, RGB nebula.', fontSize: '13px', color: '#a5b4fc', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod6-c2-btn', type: 'button', props: { label: 'Add to Loadout', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod6-card-3', type: 'card',
      props: { variant: 'product', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', shadow: 'lg', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'glow', padding: '0' },
      childrenComponents: [
        { id: 'prod6-c3-image', type: 'image', props: { src: '', alt: 'Void Mouse', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod6-c3-title', type: 'heading', props: { content: 'Void Mouse', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod6-c3-price', type: 'heading', props: { content: 'Rp 999rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#c4b5fd', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod6-c3-desc', type: 'text', props: { content: '8K polling, 49g ringan.', fontSize: '13px', color: '#a5b4fc', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod6-c3-btn', type: 'button', props: { label: 'Add to Loadout', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
      ],
    },
  ],
  'products-07': [
    { id: 'prod7-badge', type: 'badge', props: { content: '$ npm i @datasoft/sdk', background: '#052e16', color: '#4ade80' } },
    { id: 'prod7-heading', type: 'heading', props: { content: 'API & Paket Developer', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#e2e8f0', align: 'left', margin: '0 0 12px 0' } },
    { id: 'prod7-text', type: 'text', props: { content: '40.000 tim deploy di atas infrastruktur kami.', fontSize: '15px', color: '#94a3b8', align: 'left', margin: '0 0 20px 0' } },
    { id: 'prod7-cta', type: 'button', props: { label: '▸ Deploy Now', href: '#deploy', variant: 'primary', size: 'medium', radius: 'md', background: '#22c55e', color: '#052e16' } },
    {
      id: 'prod7-card-1', type: 'card',
      props: { variant: 'product', background: '#0f172a', borderRadius: '12px', shadow: 'lg', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod7-c1-title', type: 'heading', props: { content: '~/hobby', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#4ade80', margin: '16px 0 0 0', padding: '0 18px' } },
        { id: 'prod7-c1-price', type: 'heading', props: { content: '$0 /mo', level: 'h4', fontSize: '22px', fontWeight: '800', color: '#e2e8f0', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod7-c1-desc', type: 'text', props: { content: '100k requests, community support.', fontSize: '13px', color: '#94a3b8', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod7-c1-btn', type: 'button', props: { label: '$ init hobby', href: '#hobby', variant: 'ghost', size: 'small', background: 'transparent', color: '#4ade80' } },
      ],
    },
    {
      id: 'prod7-card-2', type: 'card',
      props: { variant: 'product', background: '#052e16', borderRadius: '12px', shadow: 'lg', borderWidth: '1px', borderColor: '#22c55e', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod7-c2-title', type: 'heading', props: { content: '~/pro ★', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#4ade80', margin: '16px 0 0 0', padding: '0 18px' } },
        { id: 'prod7-c2-price', type: 'heading', props: { content: '$29 /mo', level: 'h4', fontSize: '22px', fontWeight: '800', color: '#ffffff', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod7-c2-desc', type: 'text', props: { content: '10M requests, edge global, SLA 99.9%.', fontSize: '13px', color: '#bbf7d0', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod7-c2-btn', type: 'button', props: { label: '$ init pro', href: '#pro', variant: 'primary', size: 'small', radius: 'md', background: '#22c55e', color: '#052e16' } },
      ],
    },
    {
      id: 'prod7-card-3', type: 'card',
      props: { variant: 'product', background: '#0f172a', borderRadius: '12px', shadow: 'lg', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod7-c3-title', type: 'heading', props: { content: '~/enterprise', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#4ade80', margin: '16px 0 0 0', padding: '0 18px' } },
        { id: 'prod7-c3-price', type: 'heading', props: { content: 'Custom', level: 'h4', fontSize: '22px', fontWeight: '800', color: '#e2e8f0', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod7-c3-desc', type: 'text', props: { content: 'VPC, SOC2, dedicated support.', fontSize: '13px', color: '#94a3b8', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod7-c3-btn', type: 'button', props: { label: '$ contact sales', href: '#sales', variant: 'ghost', size: 'small', background: 'transparent', color: '#4ade80' } },
      ],
    },
  ],
  'products-08': [
    { id: 'prod8-badge', type: 'badge', props: { content: '🌸 Koleksi Musim Semi', background: '#fce7f3', color: '#be185d' } },
    { id: 'prod8-heading', type: 'heading', props: { content: 'Cantik di Setiap Momen', level: 'h2', fontSize: '42px', fontWeight: '800', color: '#831843', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod8-text', type: 'text', props: { content: 'Skincare & buket pilihan dengan sentuhan penuh cinta.', fontSize: '15px', color: '#9d7b8c', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prod8-cta', type: 'button', props: { label: 'Belanja Koleksi →', href: '#koleksi', variant: 'primary', size: 'medium', radius: 'full', background: '#db2777', color: '#ffffff' } },
    {
      id: 'prod8-card-1', type: 'card',
      props: { variant: 'product', background: '#fff1f2', borderRadius: '32px 8px 32px 8px', shadow: 'sm', borderWidth: '0', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod8-c1-image', type: 'image', props: { src: '', alt: 'Sakura Serum', width: '100%', height: '190px', objectFit: 'cover', borderRadius: '32px 8px 0 0' } },
        { id: 'prod8-c1-title', type: 'heading', props: { content: 'Sakura Serum', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#831843', align: 'center', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod8-c1-price', type: 'heading', props: { content: 'Rp 285rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#db2777', align: 'center', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod8-c1-desc', type: 'text', props: { content: 'Niacinamide + ekstrak sakura.', fontSize: '13px', color: '#9d7b8c', align: 'center', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod8-c1-btn', type: 'button', props: { label: 'Add to Bag', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#db2777', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod8-card-2', type: 'card',
      props: { variant: 'product', background: '#fff1f2', borderRadius: '8px 32px 8px 32px', shadow: 'sm', borderWidth: '0', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod8-c2-image', type: 'image', props: { src: '', alt: 'Petal Mist', width: '100%', height: '190px', objectFit: 'cover', borderRadius: '0 32px 0 0' } },
        { id: 'prod8-c2-title', type: 'heading', props: { content: 'Petal Mist', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#831843', align: 'center', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod8-c2-price', type: 'heading', props: { content: 'Rp 145rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#db2777', align: 'center', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod8-c2-desc', type: 'text', props: { content: 'Face mist rose water.', fontSize: '13px', color: '#9d7b8c', align: 'center', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod8-c2-btn', type: 'button', props: { label: 'Add to Bag', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#db2777', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod8-card-3', type: 'card',
      props: { variant: 'product', background: '#fff1f2', borderRadius: '32px 8px 32px 8px', shadow: 'sm', borderWidth: '0', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod8-c3-image', type: 'image', props: { src: '', alt: 'Blossom Set', width: '100%', height: '190px', objectFit: 'cover', borderRadius: '32px 8px 0 0' } },
        { id: 'prod8-c3-title', type: 'heading', props: { content: 'Blossom Set', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#831843', align: 'center', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod8-c3-price', type: 'heading', props: { content: 'Rp 499rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#db2777', align: 'center', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod8-c3-desc', type: 'text', props: { content: 'Paket lengkap 5 langkah.', fontSize: '13px', color: '#9d7b8c', align: 'center', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod8-c3-btn', type: 'button', props: { label: 'Add to Bag', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#db2777', color: '#ffffff' } },
      ],
    },
  ],
  'products-09': [
    { id: 'prod9-badge', type: 'badge', props: { content: '✦ Heritage Collection', background: '#78350f', color: '#fde68a' } },
    { id: 'prod9-heading', type: 'heading', props: { content: 'Warisan Rasa & Kemewahan', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#78350f', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod9-text', type: 'text', props: { content: 'Resep turun-temurun sejak 1968, dikemas premium.', fontSize: '15px', color: '#92400e', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prod9-cta', type: 'button', props: { label: 'Pesan Heritage →', href: '#pesan', variant: 'primary', size: 'medium', radius: 'full', background: '#92400e', color: '#fef3c7' } },
    {
      id: 'prod9-card-1', type: 'card',
      props: { variant: 'product', background: '#fffbeb', borderRadius: '16px', shadow: 'md', borderWidth: '2px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod9-c1-image', type: 'image', props: { src: '', alt: 'Gold Lapis', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '14px 14px 0 0' } },
        { id: 'prod9-c1-title', type: 'heading', props: { content: 'Gold Lapis Legit', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#78350f', align: 'center', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod9-c1-price', type: 'heading', props: { content: 'Rp 385rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#b45309', align: 'center', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod9-c1-desc', type: 'text', props: { content: '22 lapis, butter Wijsman.', fontSize: '13px', color: '#92400e', align: 'center', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod9-c1-btn', type: 'button', props: { label: 'Pesan →', href: '#pesan', variant: 'primary', size: 'small', radius: 'full', background: '#92400e', color: '#fef3c7' } },
      ],
    },
    {
      id: 'prod9-card-2', type: 'card',
      props: { variant: 'product', background: '#78350f', borderRadius: '16px', shadow: 'lg', borderWidth: '2px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod9-c2-image', type: 'image', props: { src: '', alt: 'Royal Hampers', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '14px 14px 0 0' } },
        { id: 'prod9-c2-title', type: 'heading', props: { content: 'Royal Hampers', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fef3c7', align: 'center', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod9-c2-price', type: 'heading', props: { content: 'Rp 899rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#fde68a', align: 'center', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod9-c2-desc', type: 'text', props: { content: 'Box emas + 6 varian premium.', fontSize: '13px', color: '#fde68a', align: 'center', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod9-c2-btn', type: 'button', props: { label: 'Pesan →', href: '#pesan', variant: 'primary', size: 'small', radius: 'full', background: '#fde68a', color: '#78350f' } },
      ],
    },
    {
      id: 'prod9-card-3', type: 'card',
      props: { variant: 'product', background: '#fffbeb', borderRadius: '16px', shadow: 'md', borderWidth: '2px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod9-c3-image', type: 'image', props: { src: '', alt: 'Heritage Tea', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '14px 14px 0 0' } },
        { id: 'prod9-c3-title', type: 'heading', props: { content: 'Heritage Tea', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#78350f', align: 'center', margin: '14px 0 0 0', padding: '0 18px' } },
        { id: 'prod9-c3-price', type: 'heading', props: { content: 'Rp 165rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#b45309', align: 'center', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod9-c3-desc', type: 'text', props: { content: 'Teh melati grade kaisar.', fontSize: '13px', color: '#92400e', align: 'center', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod9-c3-btn', type: 'button', props: { label: 'Pesan →', href: '#pesan', variant: 'primary', size: 'small', radius: 'full', background: '#92400e', color: '#fef3c7' } },
      ],
    },
  ],
  'products-10': [
    { id: 'prod10-badge', type: 'badge', props: { content: '🔥 12.480 terjual hari ini', background: '#fef2f2', color: '#dc2626' } },
    { id: 'prod10-heading', type: 'heading', props: { content: 'Find anything, fast', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod10-text', type: 'text', props: { content: '2M+ produk dari 40.000 seller terpercaya.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prod10-cta', type: 'button', props: { label: 'Start Selling →', href: '#sell', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    {
      id: 'prod10-card-1', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod10-c1-image', type: 'image', props: { src: '', alt: 'Sneakers', width: '100%', height: '170px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'prod10-c1-title', type: 'heading', props: { content: 'Flash Sneakers', level: 'h3', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod10-c1-price', type: 'heading', props: { content: 'Rp 799rb', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#dc2626', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod10-c1-btn', type: 'button', props: { label: '+ Keranjang', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#dc2626', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod10-card-2', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod10-c2-image', type: 'image', props: { src: '', alt: 'Audio', width: '100%', height: '170px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'prod10-c2-title', type: 'heading', props: { content: 'Audio Pro Max', level: 'h3', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod10-c2-price', type: 'heading', props: { content: 'Rp 1.299rb', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#dc2626', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod10-c2-btn', type: 'button', props: { label: '+ Keranjang', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#dc2626', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod10-card-3', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod10-c3-image', type: 'image', props: { src: '', alt: 'Watch', width: '100%', height: '170px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'prod10-c3-title', type: 'heading', props: { content: 'Watch S2', level: 'h3', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod10-c3-price', type: 'heading', props: { content: 'Rp 1.999rb', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#dc2626', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod10-c3-btn', type: 'button', props: { label: '+ Keranjang', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#dc2626', color: '#ffffff' } },
      ],
    },
  ],
  'products-11': [
    { id: 'prod11-badge', type: 'badge', props: { content: '✦ Iris Playground', background: '#ffffff', color: '#7c3aed' } },
    { id: 'prod11-heading', type: 'heading', props: { content: 'Templates yang hidup', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod11-text', type: 'text', props: { content: '40.000 desainer pakai setiap hari.', fontSize: '15px', color: '#ddd6fe', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prod11-cta', type: 'button', props: { label: 'Browse Templates →', href: '#templates', variant: 'primary', size: 'medium', radius: 'full', background: '#ffffff', color: '#6d28d9' } },
    {
      id: 'prod11-card-1', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '24px', shadow: 'lg', borderWidth: '0', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod11-c1-image', type: 'image', props: { src: '', alt: 'UI Kit', width: '100%', height: '170px', objectFit: 'cover', borderRadius: '24px 24px 0 0' } },
        { id: 'prod11-c1-title', type: 'heading', props: { content: 'Iris UI Kit', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod11-c1-price', type: 'heading', props: { content: 'Rp 349rb', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#7c3aed', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod11-c1-btn', type: 'button', props: { label: 'Preview →', href: '#preview', variant: 'primary', size: 'small', radius: 'full', background: '#7c3aed', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod11-card-2', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '24px', shadow: 'lg', borderWidth: '0', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod11-c2-image', type: 'image', props: { src: '', alt: 'Icons', width: '100%', height: '170px', objectFit: 'cover', borderRadius: '24px 24px 0 0' } },
        { id: 'prod11-c2-title', type: 'heading', props: { content: 'Iris Icons 2.0', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod11-c2-price', type: 'heading', props: { content: 'Rp 149rb', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#7c3aed', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod11-c2-btn', type: 'button', props: { label: 'Preview →', href: '#preview', variant: 'primary', size: 'small', radius: 'full', background: '#7c3aed', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod11-card-3', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '24px', shadow: 'lg', borderWidth: '0', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod11-c3-image', type: 'image', props: { src: '', alt: 'Mockups', width: '100%', height: '170px', objectFit: 'cover', borderRadius: '24px 24px 0 0' } },
        { id: 'prod11-c3-title', type: 'heading', props: { content: 'Mockup Flow', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod11-c3-price', type: 'heading', props: { content: 'Rp 249rb', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#7c3aed', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod11-c3-btn', type: 'button', props: { label: 'Preview →', href: '#preview', variant: 'primary', size: 'small', radius: 'full', background: '#7c3aed', color: '#ffffff' } },
      ],
    },
  ],
  'products-12': [
    { id: 'prod12-badge', type: 'badge', props: { content: '● Enterprise Ready', background: '#0f172a', color: '#38bdf8' } },
    { id: 'prod12-heading', type: 'heading', props: { content: 'Infrastruktur Skala Enterprise', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 12px 0' } },
    { id: 'prod12-text', type: 'text', props: { content: 'Uptime 99.99% untuk finansial & pemerintahan.', fontSize: '15px', color: '#94a3b8', align: 'left', margin: '0 0 20px 0' } },
    { id: 'prod12-cta', type: 'button', props: { label: 'Talk to Sales →', href: '#sales', variant: 'primary', size: 'medium', radius: 'md', background: '#38bdf8', color: '#082f49' } },
    {
      id: 'prod12-card-1', type: 'card',
      props: { variant: 'product', background: '#1e293b', borderRadius: '16px', shadow: 'lg', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod12-c1-title', type: 'heading', props: { content: 'Cloud Core', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '16px 0 0 0', padding: '0 18px' } },
        { id: 'prod12-c1-price', type: 'heading', props: { content: 'Rp 45jt/thn', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#38bdf8', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod12-c1-desc', type: 'text', props: { content: 'Multi-region, auto-failover.', fontSize: '13px', color: '#94a3b8', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod12-c1-btn', type: 'button', props: { label: 'Request Demo', href: '#demo', variant: 'ghost', size: 'small', background: 'transparent', color: '#38bdf8' } },
      ],
    },
    {
      id: 'prod12-card-2', type: 'card',
      props: { variant: 'product', background: '#1e293b', borderRadius: '16px', shadow: 'lg', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod12-c2-title', type: 'heading', props: { content: 'Secure Vault', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '16px 0 0 0', padding: '0 18px' } },
        { id: 'prod12-c2-price', type: 'heading', props: { content: 'Rp 28jt/thn', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#38bdf8', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod12-c2-desc', type: 'text', props: { content: 'Enkripsi HSM, SOC2 ready.', fontSize: '13px', color: '#94a3b8', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod12-c2-btn', type: 'button', props: { label: 'Request Demo', href: '#demo', variant: 'ghost', size: 'small', background: 'transparent', color: '#38bdf8' } },
      ],
    },
  ],
  'products-13': [
    { id: 'prod13-badge', type: 'badge', props: { content: '🍔 Best Seller', background: '#fce7f3', color: '#ec4899' } },
    { id: 'prod13-heading', type: 'heading', props: { content: 'Favorit Semua Keluarga', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod13-text', type: 'text', props: { content: 'Roti panggang tiap jam, daging premium.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prod13-cta', type: 'button', props: { label: 'Order Sekarang →', href: '#order', variant: 'primary', size: 'medium', radius: 'full', background: '#ec4899', color: '#ffffff' } },
    {
      id: 'prod13-card-1', type: 'card',
      props: { variant: 'product', background: '#fff1f2', borderRadius: '28px', shadow: 'sm', borderWidth: '0', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod13-c1-image', type: 'image', props: { src: '', alt: 'Burger', width: '100%', height: '170px', objectFit: 'cover', borderRadius: '28px 28px 0 0' } },
        { id: 'prod13-c1-title', type: 'heading', props: { content: 'Burger Kioso', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod13-c1-price', type: 'heading', props: { content: 'Rp 45rb', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#ec4899', align: 'center', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod13-c1-btn', type: 'button', props: { label: '＋ Tambah', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#ec4899', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod13-card-2', type: 'card',
      props: { variant: 'product', background: '#fef9c3', borderRadius: '28px', shadow: 'sm', borderWidth: '0', borderColor: '#fef9c3', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod13-c2-image', type: 'image', props: { src: '', alt: 'Fries', width: '100%', height: '170px', objectFit: 'cover', borderRadius: '28px 28px 0 0' } },
        { id: 'prod13-c2-title', type: 'heading', props: { content: 'Cheese Fries', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod13-c2-price', type: 'heading', props: { content: 'Rp 28rb', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#ec4899', align: 'center', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod13-c2-btn', type: 'button', props: { label: '＋ Tambah', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#ec4899', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod13-card-3', type: 'card',
      props: { variant: 'product', background: '#dcfce7', borderRadius: '28px', shadow: 'sm', borderWidth: '0', borderColor: '#dcfce7', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod13-c3-image', type: 'image', props: { src: '', alt: 'Milkshake', width: '100%', height: '170px', objectFit: 'cover', borderRadius: '28px 28px 0 0' } },
        { id: 'prod13-c3-title', type: 'heading', props: { content: 'Berry Shake', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod13-c3-price', type: 'heading', props: { content: 'Rp 32rb', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#ec4899', align: 'center', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod13-c3-btn', type: 'button', props: { label: '＋ Tambah', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#ec4899', color: '#ffffff' } },
      ],
    },
  ],
  'products-14': [
    { id: 'prod14-badge', type: 'badge', props: { content: '◈ ISO 9001 Certified', background: '#eff6ff', color: '#1d4ed8' } },
    { id: 'prod14-heading', type: 'heading', props: { content: 'Solusi Korporat Terpercaya', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'left', margin: '0 0 12px 0' } },
    { id: 'prod14-text', type: 'text', props: { content: 'Dipercaya 500+ perusahaan & instansi.', fontSize: '15px', color: '#64748b', align: 'left', margin: '0 0 20px 0' } },
    { id: 'prod14-cta', type: 'button', props: { label: 'Minta Penawaran →', href: '#quote', variant: 'primary', size: 'medium', radius: 'md', background: '#1e40af', color: '#ffffff' } },
    {
      id: 'prod14-card-1', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '12px', shadow: 'sm', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod14-c1-image', type: 'image', props: { src: '', alt: 'ERP Suite', width: '100%', height: '160px', objectFit: 'cover', borderRadius: '12px 12px 0 0' } },
        { id: 'prod14-c1-title', type: 'heading', props: { content: 'ERP Suite', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod14-c1-price', type: 'heading', props: { content: 'Hubungi Sales', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#1d4ed8', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod14-c1-btn', type: 'button', props: { label: 'Detail →', href: '#detail', variant: 'ghost', size: 'small', background: 'transparent', color: '#1e40af' } },
      ],
    },
    {
      id: 'prod14-card-2', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '12px', shadow: 'sm', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod14-c2-image', type: 'image', props: { src: '', alt: 'HRIS Pro', width: '100%', height: '160px', objectFit: 'cover', borderRadius: '12px 12px 0 0' } },
        { id: 'prod14-c2-title', type: 'heading', props: { content: 'HRIS Pro', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod14-c2-price', type: 'heading', props: { content: 'Hubungi Sales', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#1d4ed8', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod14-c2-btn', type: 'button', props: { label: 'Detail →', href: '#detail', variant: 'ghost', size: 'small', background: 'transparent', color: '#1e40af' } },
      ],
    },
    {
      id: 'prod14-card-3', type: 'card',
      props: { variant: 'product', background: '#1e3a8a', borderRadius: '12px', shadow: 'md', borderWidth: '0', borderColor: '#1e3a8a', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod14-c3-title', type: 'heading', props: { content: 'Konsultasi Gratis', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#ffffff', margin: '16px 0 0 0', padding: '0 18px' } },
        { id: 'prod14-c3-desc', type: 'text', props: { content: 'Audit kebutuhan digital perusahaan Anda.', fontSize: '13px', color: '#bfdbfe', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod14-c3-btn', type: 'button', props: { label: 'Jadwalkan →', href: '#jadwal', variant: 'primary', size: 'small', radius: 'md', background: '#ffffff', color: '#1e3a8a' } },
      ],
    },
  ],
  'products-15': [
    { id: 'prod15-badge', type: 'badge', props: { content: 'EDISI No. 128 — KURASI', background: '#0f172a', color: '#ffffff' } },
    { id: 'prod15-heading', type: 'heading', props: { content: 'Pilihan Editor Minggu Ini', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 12px 0' } },
    { id: 'prod15-text', type: 'text', props: { content: 'Dikurasi redaksi dari 200+ produk yang kami uji.', fontSize: '15px', color: '#64748b', align: 'left', margin: '0 0 20px 0' } },
    { id: 'prod15-cta', type: 'button', props: { label: 'Baca Ulasan →', href: '#ulasan', variant: 'outline', size: 'medium', radius: 'none', background: '#0f172a', color: '#0f172a' } },
    {
      id: 'prod15-card-1', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '0px', shadow: 'none', borderWidth: '0', borderColor: '#ffffff', hoverEffect: 'none', padding: '0' },
      childrenComponents: [
        { id: 'prod15-c1-image', type: 'image', props: { src: '', alt: 'Kopi', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0' } },
        { id: 'prod15-c1-title', type: 'heading', props: { content: '01 — Kopi Gayo Wine', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: '12px 0 0 0', padding: '0' } },
        { id: 'prod15-c1-price', type: 'heading', props: { content: 'Rp 185rb — Skor 9.6', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#b45309', margin: '4px 0 0 0', padding: '0' } },
        { id: 'prod15-c1-btn', type: 'button', props: { label: 'Beli →', href: '#beli', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'prod15-card-2', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '0px', shadow: 'none', borderWidth: '0', borderColor: '#ffffff', hoverEffect: 'none', padding: '0' },
      childrenComponents: [
        { id: 'prod15-c2-image', type: 'image', props: { src: '', alt: 'Parfum', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0' } },
        { id: 'prod15-c2-title', type: 'heading', props: { content: '02 — Parfum Hujan', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: '12px 0 0 0', padding: '0' } },
        { id: 'prod15-c2-price', type: 'heading', props: { content: 'Rp 450rb — Skor 9.4', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#b45309', margin: '4px 0 0 0', padding: '0' } },
        { id: 'prod15-c2-btn', type: 'button', props: { label: 'Beli →', href: '#beli', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'prod15-card-3', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '0px', shadow: 'none', borderWidth: '0', borderColor: '#ffffff', hoverEffect: 'none', padding: '0' },
      childrenComponents: [
        { id: 'prod15-c3-image', type: 'image', props: { src: '', alt: 'Batuk', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0' } },
        { id: 'prod15-c3-title', type: 'heading', props: { content: '03 — Batik Tulis Solo', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', margin: '12px 0 0 0', padding: '0' } },
        { id: 'prod15-c3-price', type: 'heading', props: { content: 'Rp 1.2jt — Skor 9.8', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#b45309', margin: '4px 0 0 0', padding: '0' } },
        { id: 'prod15-c3-btn', type: 'button', props: { label: 'Beli →', href: '#beli', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
  ],
  'products-16': [
    { id: 'prod16-badge', type: 'badge', props: { content: '🌿 100% Natural', background: '#dcfce7', color: '#166534' } },
    { id: 'prod16-heading', type: 'heading', props: { content: 'Belanja Baik untuk Bumi', level: 'h2', fontSize: '42px', fontWeight: '800', color: '#064e3b', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod16-text', type: 'text', props: { content: 'Kemasan kompos, bahan organik tersertifikasi.', fontSize: '15px', color: '#4d7c0f', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prod16-cta', type: 'button', props: { label: 'Shop Sustainable →', href: '#shop', variant: 'primary', size: 'medium', radius: 'full', background: '#16a34a', color: '#ffffff' } },
    {
      id: 'prod16-card-1', type: 'card',
      props: { variant: 'product', background: '#f0fdf4', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod16-c1-image', type: 'image', props: { src: '', alt: 'Sabun', width: '100%', height: '170px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod16-c1-title', type: 'heading', props: { content: 'Sabun Lerak Bar', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#064e3b', align: 'center', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod16-c1-price', type: 'heading', props: { content: 'Rp 39rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#16a34a', align: 'center', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod16-c1-btn', type: 'button', props: { label: '＋ Keranjang', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#16a34a', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod16-card-2', type: 'card',
      props: { variant: 'product', background: '#f0fdf4', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod16-c2-image', type: 'image', props: { src: '', alt: 'Tote', width: '100%', height: '170px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod16-c2-title', type: 'heading', props: { content: 'Tote Rami', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#064e3b', align: 'center', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod16-c2-price', type: 'heading', props: { content: 'Rp 129rb', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#16a34a', align: 'center', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod16-c2-btn', type: 'button', props: { label: '＋ Keranjang', href: '#cart', variant: 'primary', size: 'small', radius: 'full', background: '#16a34a', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod16-card-3', type: 'card',
      props: { variant: 'product', background: '#064e3b', borderRadius: '20px', shadow: 'md', borderWidth: '0', borderColor: '#064e3b', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod16-c3-title', type: 'heading', props: { content: 'Refill Station', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '16px 0 0 0', padding: '0 16px' } },
        { id: 'prod16-c3-desc', type: 'text', props: { content: 'Isi ulang hemat 40% + poin hijau.', fontSize: '13px', color: '#bbf7d0', align: 'center', margin: '6px 0 14px 0', padding: '0 16px' } },
        { id: 'prod16-c3-btn', type: 'button', props: { label: 'Cari Stasiun →', href: '#stasiun', variant: 'primary', size: 'small', radius: 'full', background: '#ffffff', color: '#064e3b' } },
      ],
    },
  ],
  'products-17': [
    { id: 'prod17-badge', type: 'badge', props: { content: '⚡ Veloce Racing', background: '#dc2626', color: '#ffffff' } },
    { id: 'prod17-heading', type: 'heading', props: { content: 'Engineered for Speed', level: 'h2', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 12px 0' } },
    { id: 'prod17-text', type: 'text', props: { content: 'Aero-tested, track-proven. 0–100 dalam 3.1 detik.', fontSize: '15px', color: '#fecaca', align: 'left', margin: '0 0 20px 0' } },
    { id: 'prod17-cta', type: 'button', props: { label: 'Book Test Ride →', href: '#test', variant: 'primary', size: 'medium', radius: 'md', background: '#dc2626', color: '#ffffff' } },
    {
      id: 'prod17-card-1', type: 'card',
      props: { variant: 'product', background: '#171717', borderRadius: '16px', shadow: 'lg', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod17-c1-image', type: 'image', props: { src: '', alt: 'Helm', width: '100%', height: '160px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'prod17-c1-title', type: 'heading', props: { content: 'Veloce Helmet GP', level: 'h3', fontSize: '17px', fontWeight: '900', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod17-c1-price', type: 'heading', props: { content: 'Rp 4.5jt', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#ef4444', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod17-c1-btn', type: 'button', props: { label: 'Add →', href: '#cart', variant: 'primary', size: 'small', radius: 'md', background: '#dc2626', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod17-card-2', type: 'card',
      props: { variant: 'product', background: '#171717', borderRadius: '16px', shadow: 'lg', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod17-c2-image', type: 'image', props: { src: '', alt: 'Jacket', width: '100%', height: '160px', objectFit: 'cover', borderRadius: '16px 16px 0 0' } },
        { id: 'prod17-c2-title', type: 'heading', props: { content: 'Aero Jacket', level: 'h3', fontSize: '17px', fontWeight: '900', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod17-c2-price', type: 'heading', props: { content: 'Rp 2.8jt', level: 'h4', fontSize: '18px', fontWeight: '900', color: '#ef4444', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod17-c2-btn', type: 'button', props: { label: 'Add →', href: '#cart', variant: 'primary', size: 'small', radius: 'md', background: '#dc2626', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod17-card-3', type: 'card',
      props: { variant: 'product', background: '#dc2626', borderRadius: '16px', shadow: 'lg', borderWidth: '0', borderColor: '#dc2626', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod17-c3-title', type: 'heading', props: { content: 'Veloce S — Full Bike', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff', margin: '16px 0 0 0', padding: '0 18px' } },
        { id: 'prod17-c3-price', type: 'heading', props: { content: 'Rp 385jt', level: 'h4', fontSize: '22px', fontWeight: '900', color: '#ffffff', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod17-c3-desc', type: 'text', props: { content: '210HP · Carbon full · Ohlins.', fontSize: '13px', color: '#fecaca', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod17-c3-btn', type: 'button', props: { label: 'Configure →', href: '#config', variant: 'primary', size: 'small', radius: 'md', background: '#ffffff', color: '#dc2626' } },
      ],
    },
  ],
  'products-18': [
    { id: 'prod18-badge', type: 'badge', props: { content: '◉ 4.9 — 2M downloads', background: '#fff7ed', color: '#ea580c' } },
    { id: 'prod18-heading', type: 'heading', props: { content: 'Pilih Paket Solstice', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod18-text', type: 'text', props: { content: 'Gratis 14 hari, batal kapan saja.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prod18-cta', type: 'button', props: { label: 'Download App →', href: '#download', variant: 'primary', size: 'medium', radius: 'full', background: '#f97316', color: '#ffffff' } },
    {
      id: 'prod18-card-1', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod18-c1-title', type: 'heading', props: { content: 'Starter', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '16px 0 0 0', padding: '0 16px' } },
        { id: 'prod18-c1-price', type: 'heading', props: { content: 'Gratis', level: 'h4', fontSize: '22px', fontWeight: '900', color: '#f97316', align: 'center', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod18-c1-desc', type: 'text', props: { content: '3 proyek, 1GB storage.', fontSize: '13px', color: '#64748b', align: 'center', margin: '6px 0 14px 0', padding: '0 16px' } },
        { id: 'prod18-c1-btn', type: 'button', props: { label: 'Mulai Gratis', href: '#free', variant: 'ghost', size: 'small', background: 'transparent', color: '#f97316' } },
      ],
    },
    {
      id: 'prod18-card-2', type: 'card',
      props: { variant: 'product', background: '#0f172a', borderRadius: '20px', shadow: 'lg', borderWidth: '0', borderColor: '#0f172a', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod18-c2-title', type: 'heading', props: { content: 'Pro ★ Populer', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#fdba74', align: 'center', margin: '16px 0 0 0', padding: '0 16px' } },
        { id: 'prod18-c2-price', type: 'heading', props: { content: 'Rp 99rb/bln', level: 'h4', fontSize: '22px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod18-c2-desc', type: 'text', props: { content: 'Unlimited proyek + AI.', fontSize: '13px', color: '#fdba74', align: 'center', margin: '6px 0 14px 0', padding: '0 16px' } },
        { id: 'prod18-c2-btn', type: 'button', props: { label: 'Upgrade Pro →', href: '#pro', variant: 'primary', size: 'small', radius: 'full', background: '#f97316', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod18-card-3', type: 'card',
      props: { variant: 'product', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod18-c3-title', type: 'heading', props: { content: 'Team', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '16px 0 0 0', padding: '0 16px' } },
        { id: 'prod18-c3-price', type: 'heading', props: { content: 'Rp 249rb/bln', level: 'h4', fontSize: '22px', fontWeight: '900', color: '#f97316', align: 'center', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod18-c3-desc', type: 'text', props: { content: '10 kursi, admin panel.', fontSize: '13px', color: '#64748b', align: 'center', margin: '6px 0 14px 0', padding: '0 16px' } },
        { id: 'prod18-c3-btn', type: 'button', props: { label: 'Hubungi Tim', href: '#team', variant: 'ghost', size: 'small', background: 'transparent', color: '#f97316' } },
      ],
    },
  ],
  'products-19': [
    { id: 'prod19-badge', type: 'badge', props: { content: '✦ Portfolio 120+', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'prod19-heading', type: 'heading', props: { content: 'Layanan Studio Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod19-text', type: 'text', props: { content: 'Branding, web & kampanye — strategi dulu, piksel kemudian.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prod19-cta', type: 'button', props: { label: 'Book a Call →', href: '#contact', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    {
      id: 'prod19-card-1', type: 'card',
      props: { variant: 'product', background: 'rgba(255,255,255,0.85)', borderRadius: '24px', shadow: 'lg', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod19-c1-image', type: 'image', props: { src: '', alt: 'Branding', width: '100%', height: '160px', objectFit: 'cover', borderRadius: '24px 24px 0 0' } },
        { id: 'prod19-c1-title', type: 'heading', props: { content: 'Brand Identity', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod19-c1-price', type: 'heading', props: { content: 'Mulai Rp 25jt', level: 'h4', fontSize: '16px', fontWeight: '800', color: '#4f46e5', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod19-c1-btn', type: 'button', props: { label: 'Lihat Paket →', href: '#paket', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'prod19-card-2', type: 'card',
      props: { variant: 'product', background: 'rgba(255,255,255,0.85)', borderRadius: '24px', shadow: 'lg', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod19-c2-image', type: 'image', props: { src: '', alt: 'Website', width: '100%', height: '160px', objectFit: 'cover', borderRadius: '24px 24px 0 0' } },
        { id: 'prod19-c2-title', type: 'heading', props: { content: 'Website Premium', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#0f172a', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod19-c2-price', type: 'heading', props: { content: 'Mulai Rp 45jt', level: 'h4', fontSize: '16px', fontWeight: '800', color: '#4f46e5', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod19-c2-btn', type: 'button', props: { label: 'Lihat Paket →', href: '#paket', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'prod19-card-3', type: 'card',
      props: { variant: 'product', background: '#0f172a', borderRadius: '24px', shadow: 'lg', borderWidth: '0', borderColor: '#0f172a', hoverEffect: 'lift', padding: '0' },
      childrenComponents: [
        { id: 'prod19-c3-title', type: 'heading', props: { content: 'Retainer Studio', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#ffffff', margin: '16px 0 0 0', padding: '0 18px' } },
        { id: 'prod19-c3-price', type: 'heading', props: { content: 'Rp 18jt/bln', level: 'h4', fontSize: '18px', fontWeight: '800', color: '#a5b4fc', margin: '4px 0 0 0', padding: '0 18px' } },
        { id: 'prod19-c3-desc', type: 'text', props: { content: 'Desain unlimited, prioritas 24 jam.', fontSize: '13px', color: '#94a3b8', margin: '6px 0 14px 0', padding: '0 18px' } },
        { id: 'prod19-c3-btn', type: 'button', props: { label: 'Book a Call →', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#ffffff', color: '#0f172a' } },
      ],
    },
  ],
  'products-20': [
    { id: 'prod20-badge', type: 'badge', props: { content: '✦ AETHER 4.2 — NOW LIVE', background: '#1e1b4b', color: '#c4b5fd' } },
    { id: 'prod20-heading', type: 'heading', props: { content: 'One platform. Infinite scale.', level: 'h2', fontSize: '44px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod20-text', type: 'text', props: { content: 'OS untuk tim ambisius — ship lebih cepat & indah.', fontSize: '15px', color: '#a5b4fc', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prod20-cta', type: 'button', props: { label: 'Start Trial ✦', href: '#trial', variant: 'primary', size: 'medium', radius: 'full', background: '#6366f1', color: '#ffffff' } },
    {
      id: 'prod20-card-1', type: 'card',
      props: { variant: 'product', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', shadow: 'lg', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'glow', padding: '0' },
      childrenComponents: [
        { id: 'prod20-c1-image', type: 'image', props: { src: '', alt: 'Edge', width: '100%', height: '150px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod20-c1-title', type: 'heading', props: { content: '⚡ Edge Global', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod20-c1-price', type: 'heading', props: { content: '40 regions', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#c4b5fd', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod20-c1-btn', type: 'button', props: { label: 'Deploy →', href: '#deploy', variant: 'primary', size: 'small', radius: 'full', background: '#6366f1', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod20-card-2', type: 'card',
      props: { variant: 'product', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', shadow: 'lg', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'glow', padding: '0' },
      childrenComponents: [
        { id: 'prod20-c2-image', type: 'image', props: { src: '', alt: 'Enterprise', width: '100%', height: '150px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod20-c2-title', type: 'heading', props: { content: '🛡 Enterprise', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod20-c2-price', type: 'heading', props: { content: 'SOC2 ready', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#c4b5fd', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod20-c2-btn', type: 'button', props: { label: 'Contact →', href: '#sales', variant: 'primary', size: 'small', radius: 'full', background: '#6366f1', color: '#ffffff' } },
      ],
    },
    {
      id: 'prod20-card-3', type: 'card',
      props: { variant: 'product', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', shadow: 'lg', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'glow', padding: '0' },
      childrenComponents: [
        { id: 'prod20-c3-image', type: 'image', props: { src: '', alt: 'Apps', width: '100%', height: '150px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
        { id: 'prod20-c3-title', type: 'heading', props: { content: '◈ Integrations', level: 'h3', fontSize: '17px', fontWeight: '800', color: '#ffffff', margin: '12px 0 0 0', padding: '0 16px' } },
        { id: 'prod20-c3-price', type: 'heading', props: { content: '200+ apps', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#c4b5fd', margin: '4px 0 0 0', padding: '0 16px' } },
        { id: 'prod20-c3-btn', type: 'button', props: { label: 'Browse →', href: '#apps', variant: 'primary', size: 'small', radius: 'full', background: '#6366f1', color: '#ffffff' } },
      ],
    },
  ],
  'certifications-01': [
    { id: 'cert1-heading', type: 'heading', props: { content: 'Sertifikasi & Akreditasi', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cert1-subtext', type: 'text', props: { content: 'Diakui dan tersertifikasi oleh lembaga standar mutu nasional dan internasional', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'cert1-card-1', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'cert1-c1-icon', type: 'icon', props: { icon: 'FaMedal', size: '40px', color: '#f59e0b', align: 'center' } },
      { id: 'cert1-c1-title', type: 'heading', props: { content: 'ISO 9001:2015', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'cert1-c1-desc', type: 'text', props: { content: 'Sistem Manajemen Mutu berstandar internasional untuk layanan pendidikan terbaik.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'cert1-card-2', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'cert1-c2-icon', type: 'icon', props: { icon: 'FaLeaf', size: '40px', color: '#10b981', align: 'center' } },
      { id: 'cert1-c2-title', type: 'heading', props: { content: 'ISO 14001:2015', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'cert1-c2-desc', type: 'text', props: { content: 'Sistem Manajemen Lingkungan untuk kampus ramah lingkungan dan berkelanjutan.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'cert1-card-3', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'cert1-c3-icon', type: 'icon', props: { icon: 'FaShieldAlt', size: '40px', color: '#3b82f6', align: 'center' } },
      { id: 'cert1-c3-title', type: 'heading', props: { content: 'OHSAS 18001', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 8px 0' } },
      { id: 'cert1-c3-desc', type: 'text', props: { content: 'Standar Kesehatan dan Keselamatan Kerja untuk lingkungan kampus yang aman.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
  ],
  'vision-01': [
    { id: 'badge-1', type: 'badge', props: { content: 'Our Vision', variant: 'primary', size: 'medium' } },
    { id: 'heading-1', type: 'heading', props: { content: 'Our Vision', level: 'h2', fontSize: '36px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 24px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'To be the leading company in our industry, delivering innovative solutions that transform the way people live and work.', fontSize: '18px', color: '#64748b', align: 'center', lineHeight: '1.8' } },
  ],
  'mission-01': [
    { id: 'badge-1', type: 'badge', props: { content: '✦ Our Mission', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'heading-1', type: 'heading', props: { content: 'Empowering makers to build the future', level: 'h2', fontSize: '44px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Our mission is to democratize software creation through intuitive tools, unmatched speed, and uncompromising design quality.', fontSize: '18px', color: '#64748b', align: 'center', margin: '0 0 28px 0' } },
    { id: 'btn-primary', type: 'button', props: { label: 'Explore Our Vision →', href: '#vision', variant: 'primary', size: 'large', radius: 'full', background: '#4f46e5', color: '#ffffff' } },
  ],
  'mission-02': [
    { id: 'badge-2', type: 'badge', props: { content: 'MISSION STATEMENT — 2026', background: '#1c1917', color: '#e7c873' } },
    { id: 'heading-2', type: 'heading', props: { content: 'To curate perfection without compromise', level: 'h2', fontSize: '48px', fontWeight: '700', color: '#fafaf9', align: 'center', margin: '0 0 18px 0' } },
    { id: 'text-2', type: 'text', props: { content: 'We exist to elevate everyday experiences through meticulous craftsmanship and timeless design.', fontSize: '18px', color: '#a8a29e', align: 'center', margin: '0 0 30px 0' } },
    { id: 'btn-gold', type: 'button', props: { label: 'Discover Our Values →', href: '#values', variant: 'primary', size: 'large', radius: 'full', background: '#c9a227', color: '#0c0a09' } },
  ],
  'mission-03': [
    { id: 'badge-3', type: 'badge', props: { content: '🎯 Misi Utama Kami', background: '#fff7ed', color: '#ea580c' } },
    { id: 'heading-3', type: 'heading', props: { content: 'Menghubungkan setiap sudut nusantara dengan cepat', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-3', type: 'text', props: { content: 'Memastikan efisiensi rantai pasok nasional melalui teknologi canggih, armada handal, dan pelayanan sepenuh hati.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 26px 0' } },
    { id: 'btn-quote', type: 'button', props: { label: 'Pelajari Layanan →', href: '#services', variant: 'primary', size: 'large', radius: 'lg', background: '#f97316', color: '#ffffff' } },
    { id: 'img-3', type: 'image', props: { src: '', alt: 'Mission', width: '100%', height: '380px', objectFit: 'cover', borderRadius: '24px' } },
  ],
  'mission-04': [
    { id: 'badge-4', type: 'badge', props: { content: '★ OUR MISSION 2026', background: '#000000', color: '#facc15' } },
    { id: 'heading-4', type: 'heading', props: { content: 'DESTROYING BORING SOFTWARE', level: 'h2', fontSize: '56px', fontWeight: '900', color: '#000000', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-4', type: 'text', props: { content: 'We build brutal, uncompromising digital tools that stand out in a sea of sameness.', fontSize: '18px', color: '#000000', align: 'left', margin: '0 0 26px 0' } },
    { id: 'btn-hire', type: 'button', props: { label: 'JOIN THE REVOLT ★', href: '#join', variant: 'primary', size: 'large', radius: 'none', background: '#000000', color: '#facc15' } },
  ],
  'mission-05': [
    { id: 'heading-5', type: 'heading', props: { content: 'To restore balance and inner peace', level: 'h2', fontSize: '48px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-5', type: 'text', props: { content: 'Creating intentional sanctuaries where modern minds can pause, breathe, and realign.', fontSize: '17px', color: '#78716c', align: 'center', margin: '0 0 30px 0' } },
    { id: 'btn-reserve', type: 'button', props: { label: 'Our Philosophy —', href: '#philosophy', variant: 'ghost', size: 'large', background: 'transparent', color: '#1c1917' } },
  ],
  'mission-06': [
    { id: 'badge-6', type: 'badge', props: { content: '✦ INTERSTELLAR MISSION', background: '#1e1b4b', color: '#a5b4fc' } },
    { id: 'heading-6', type: 'heading', props: { content: 'Mapping the infinite cosmos of play', level: 'h2', fontSize: '50px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-6', type: 'text', props: { content: 'Our mission is to build decentralized universes where every explorer can stake claim to their destiny.', fontSize: '17px', color: '#a5b4fc', align: 'center', margin: '0 0 28px 0' } },
    { id: 'btn-launch', type: 'button', props: { label: 'Join Mission ✦', href: '#join', variant: 'primary', size: 'large', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
  ],
  'mission-07': [
    { id: 'heading-7', type: 'heading', props: { content: '$ datasoft --mission', level: 'h2', fontSize: '42px', fontWeight: '800', color: '#e2e8f0', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-7', type: 'text', props: { content: 'Empowering developers worldwide with lightning-fast CI/CD pipelines and instant cloud primitives.', fontSize: '16px', color: '#94a3b8', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-deploy', type: 'button', props: { label: '▸ Read Manifest', href: '#manifest', variant: 'primary', size: 'large', radius: 'md', background: '#22c55e', color: '#052e16' } },
  ],
  'mission-08': [
    { id: 'badge-8', type: 'badge', props: { content: '🌸 Our Mission & Promise', background: '#fce7f3', color: '#be185d' } },
    { id: 'heading-8', type: 'heading', props: { content: 'Crafting moments that blossom for a lifetime', level: 'h2', fontSize: '50px', fontWeight: '700', color: '#831843', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-8', type: 'text', props: { content: 'We are dedicated to turning your most cherished milestones into breathtaking floral artistry.', fontSize: '17px', color: '#9d7b8c', align: 'center', margin: '0 0 28px 0' } },
    { id: 'btn-book', type: 'button', props: { label: 'Our Floral Values ♡', href: '#values', variant: 'primary', size: 'large', radius: 'full', background: '#db2777', color: '#ffffff' } },
  ],
  'mission-09': [
    { id: 'badge-9', type: 'badge', props: { content: '✦ OUR HERITAGE MISSION', background: '#fef3c7', color: '#92400e' } },
    { id: 'heading-9', type: 'heading', props: { content: 'Preserving the gold standard of craftsmanship', level: 'h2', fontSize: '52px', fontWeight: '700', color: '#451a03', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-9', type: 'text', props: { content: 'For nearly four decades, our mission has remained unchanged: uncompromised jewelry passed down through generations.', fontSize: '17px', color: '#92600e', align: 'center', margin: '0 0 28px 0' } },
    { id: 'btn-visit', type: 'button', props: { label: '✦ Learn Our Story', href: '#story', variant: 'primary', size: 'large', radius: 'full', background: '#b45309', color: '#fffbeb' } },
  ],
  'mission-10': [
    { id: 'badge-10', type: 'badge', props: { content: '🔥 MARKETPLACE MISSION', background: '#fef2f2', color: '#dc2626' } },
    { id: 'heading-10', type: 'heading', props: { content: 'Empowering millions of local merchants', level: 'h2', fontSize: '48px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-10', type: 'text', props: { content: 'Our mission is to connect buyers and trusted sellers with instant search, secure escrow, and rapid delivery.', fontSize: '17px', color: '#64748b', align: 'center', margin: '0 0 26px 0' } },
    { id: 'btn-sell', type: 'button', props: { label: 'Join as Merchant →', href: '#merchant', variant: 'primary', size: 'large', radius: 'full', background: '#0f172a', color: '#ffffff' } },
  ],
  'mission-11': [
    { id: 'badge-11', type: 'badge', props: { content: '✦ IRIS MISSION', background: '#ffffff', color: '#7c3aed' } },
    { id: 'heading-11', type: 'heading', props: { content: 'Accelerating human creativity with AI', level: 'h2', fontSize: '52px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-11', type: 'text', props: { content: 'We build intelligent design systems that bridge the gap between imagination and production.', fontSize: '18px', color: '#ddd6fe', align: 'center', margin: '0 0 28px 0' } },
    { id: 'btn-try', type: 'button', props: { label: 'Try Iris Free ✦', href: '#try', variant: 'primary', size: 'large', radius: 'full', background: '#ffffff', color: '#6d28d9' } },
  ],
  'mission-12': [
    { id: 'badge-12', type: 'badge', props: { content: '◆ ENTERPRISE MISSION', background: '#0f172a', color: '#67e8f9' } },
    { id: 'heading-12', type: 'heading', props: { content: 'Unbreakable cloud security for global enterprises', level: 'h2', fontSize: '46px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-12', type: 'text', props: { content: 'Our mission is to safeguard mission-critical infrastructure with zero-trust architecture and 99.99% reliability.', fontSize: '17px', color: '#94a3b8', align: 'left', margin: '0 0 26px 0' } },
    { id: 'btn-trial', type: 'button', props: { label: 'Enterprise Security →', href: '#security', variant: 'primary', size: 'large', radius: 'lg', background: '#ffffff', color: '#0f172a' } },
    { id: 'img-12', type: 'image', props: { src: '', alt: 'Enterprise', width: '100%', height: '380px', objectFit: 'cover', borderRadius: '16px' } },
  ],
  'mission-13': [
    { id: 'badge-13', type: 'badge', props: { content: '🍔 OUR YUMMY MISSION', background: '#fce7f3', color: '#db2777' } },
    { id: 'heading-13', type: 'heading', props: { content: 'Bringing smiles through mouthwatering food', level: 'h2', fontSize: '48px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-13', type: 'text', props: { content: 'We promise fresh ingredients, fast delivery, and burgers that make your day instantly better.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-order', type: 'button', props: { label: 'Order Yum! 🍔', href: '#order', variant: 'primary', size: 'large', radius: 'full', background: '#ec4899', color: '#ffffff' } },
    { id: 'img-13', type: 'image', props: { src: '', alt: 'Food', width: '100%', height: '380px', objectFit: 'cover', borderRadius: '32px' } },
  ],
  'mission-14': [
    { id: 'badge-14', type: 'badge', props: { content: '✓ Misi Pendidikan Indonesia', background: '#dbeafe', color: '#1e40af' } },
    { id: 'heading-14', type: 'heading', props: { content: 'Mencerdaskan kehidupan bangsa melalui keunggulan akademik', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#1e3a8a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-14', type: 'text', props: { content: 'Komitmen kami dalam menghasilkan lulusan profesional yang berakhlak mulia dan siap bersaing di kancah global.', fontSize: '17px', color: '#475569', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-daftar', type: 'button', props: { label: 'Pelajari Program →', href: '#programs', variant: 'primary', size: 'large', radius: 'md', background: '#1e40af', color: '#ffffff' } },
    { id: 'img-14', type: 'image', props: { src: '', alt: 'Campus', width: '100%', height: '380px', objectFit: 'cover', borderRadius: '20px' } },
  ],
  'mission-15': [
    { id: 'badge-15', type: 'badge', props: { content: 'EDITORIAL MISSION — 2026', background: '#1c1917', color: '#fafaf9' } },
    { id: 'heading-15', type: 'heading', props: { content: 'Chasing the stories that others overlook', level: 'h2', fontSize: '48px', fontWeight: '700', color: '#1c1917', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-15', type: 'text', props: { content: 'Our editorial mission is rooted in fearless investigative journalism and profound cultural critique.', fontSize: '17px', color: '#57534e', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-read', type: 'button', props: { label: 'Read Our Manifesto →', href: '#manifesto', variant: 'primary', size: 'large', radius: 'none', background: '#1c1917', color: '#fafaf9' } },
    { id: 'img-15', type: 'image', props: { src: '', alt: 'Editorial', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '0' } },
  ],
  'mission-16': [
    { id: 'badge-16', type: 'badge', props: { content: '🌿 SUSTAINABILITY MISSION', background: '#dcfce7', color: '#15803d' } },
    { id: 'heading-16', type: 'heading', props: { content: 'Pure botanicals for a regenerative future', level: 'h2', fontSize: '46px', fontWeight: '900', color: '#052e16', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-16', type: 'text', props: { content: 'We formulate 100% natural skin rituals that respect both your skin and the planetary ecosystem.', fontSize: '17px', color: '#4d7c0f', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-shop', type: 'button', props: { label: 'Explore Our Standards →', href: '#standards', variant: 'primary', size: 'large', radius: 'full', background: '#16a34a', color: '#ffffff' } },
    { id: 'img-16', type: 'image', props: { src: '', alt: 'Eco', width: '100%', height: '380px', objectFit: 'cover', borderRadius: '24px' } },
  ],
  'mission-17': [
    { id: 'badge-17', type: 'badge', props: { content: '🏁 VELOCE MISSION', background: '#fef2f2', color: '#dc2626' } },
    { id: 'heading-17', type: 'heading', props: { content: 'Redefining the limits of automotive engineering', level: 'h2', fontSize: '54px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-17', type: 'text', props: { content: 'Every vehicle we build is engineered to push performance boundaries while keeping drivers connected to the road.', fontSize: '18px', color: '#fecaca', align: 'left', margin: '0 0 26px 0' } },
    { id: 'btn-test', type: 'button', props: { label: 'Explore GT Series →', href: '#gt', variant: 'primary', size: 'large', radius: 'md', background: '#ef4444', color: '#ffffff' } },
    { id: 'img-17', type: 'image', props: { src: '', alt: 'Sport', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px' } },
  ],
  'mission-18': [
    { id: 'badge-18', type: 'badge', props: { content: '✦ FINTECH MISSION', background: '#fff7ed', color: '#ea580c' } },
    { id: 'heading-18', type: 'heading', props: { content: 'Democratizing financial freedom for everyone', level: 'h2', fontSize: '48px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-18', type: 'text', props: { content: 'Our mission is to simplify money management so you can spend less time worrying and more time living.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-ios', type: 'button', props: { label: 'Download App →', href: '#download', variant: 'primary', size: 'large', radius: 'lg', background: '#0f172a', color: '#ffffff' } },
    { id: 'img-18', type: 'image', props: { src: '', alt: 'App', width: '260px', height: '480px', objectFit: 'cover', borderRadius: '32px' } },
  ],
  'mission-19': [
    { id: 'badge-19', type: 'badge', props: { content: '✦ AGENCY MISSION', background: '#ecfdf5', color: '#059669' } },
    { id: 'heading-19', type: 'heading', props: { content: 'Crafting unforgettable brand narratives', level: 'h2', fontSize: '50px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-19', type: 'text', props: { content: 'We believe every brand has a unique soul. Our mission is to translate that soul into world-class digital experiences.', fontSize: '17px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-work', type: 'button', props: { label: 'Explore Our Process →', href: '#process', variant: 'primary', size: 'large', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    { id: 'img-19', type: 'image', props: { src: '', alt: 'Agency', width: '100%', height: '360px', objectFit: 'cover', borderRadius: '20px' } },
  ],
  'mission-20': [
    { id: 'badge-20', type: 'badge', props: { content: '✦ AETHER MISSION 2026', background: '#1e1b4b', color: '#c4b5fd' } },
    { id: 'heading-20', type: 'heading', props: { content: 'Empowering ambitious teams to scale infinitely', level: 'h2', fontSize: '60px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-20', type: 'text', props: { content: 'Our ultimate mission is to build the unified operating system for high-velocity organizations worldwide.', fontSize: '18px', color: '#a5b4fc', align: 'center', margin: '0 0 28px 0' } },
    { id: 'btn-trial', type: 'button', props: { label: 'Join Our Journey ✦', href: '#join', variant: 'primary', size: 'large', radius: 'full', background: '#6366f1', color: '#ffffff' } },
  ],
  'timeline-01': [
      {
          "id": "tml1-badge",
          "type": "badge",
          "props": {
              "content": "✦ HISTORI & PERJALANAN KAMI",
              "background": "#ede9fe",
              "color": "#4f46e5"
          }
      },
      {
          "id": "tml1-heading",
          "type": "heading",
          "props": {
              "content": "Jejak Langkah Menuju Keunggulan",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#0f172a",
              "align": "center",
              "margin": "0 0 12px 0"
          }
      },
      {
          "id": "tml1-subtext",
          "type": "text",
          "props": {
              "content": "Perjalanan panjang kami dalam membangun standar industri terbaik melalui inovasi konsisten dan dedikasi tanpa henti.",
              "fontSize": "16px",
              "color": "#64748b",
              "align": "center",
              "margin": "0 0 48px 0"
          }
      },
      {
          "id": "tml1-card-1",
          "type": "card",
          "props": {
              "variant": "timeline",
              "background": "#ffffff",
              "borderRadius": "20px",
              "shadow": "md",
              "borderWidth": "1px",
              "borderColor": "#e2e8f0",
              "hoverEffect": "lift",
              "padding": "28px"
          },
          "childrenComponents": [
              {
                  "id": "tml1-c1-year",
                  "type": "badge",
                  "props": {
                      "content": "2015 — Awal Mula",
                      "background": "#e0e7ff",
                      "color": "#4f46e5",
                      "borderRadius": "8px",
                      "padding": "4px 12px",
                      "fontSize": "12px",
                      "fontWeight": "700",
                      "margin": "0 0 10px 0"
                  }
              },
              {
                  "id": "tml1-c1-title",
                  "type": "heading",
                  "props": {
                      "content": "Pendirian & Fondasi Pertama",
                      "level": "h3",
                      "fontSize": "20px",
                      "fontWeight": "700",
                      "color": "#0f172a",
                      "margin": "0 0 8px 0"
                  }
              },
              {
                  "id": "tml1-c1-desc",
                  "type": "text",
                  "props": {
                      "content": "Dimulai oleh para founder dengan visi mentransformasi ekosistem layanan melalui teknologi modern.",
                      "fontSize": "14px",
                      "color": "#64748b",
                      "margin": "0"
                  }
              }
          ]
      },
      {
          "id": "tml1-card-2",
          "type": "card",
          "props": {
              "variant": "timeline",
              "background": "#ffffff",
              "borderRadius": "20px",
              "shadow": "md",
              "borderWidth": "1px",
              "borderColor": "#e2e8f0",
              "hoverEffect": "lift",
              "padding": "28px"
          },
          "childrenComponents": [
              {
                  "id": "tml1-c2-year",
                  "type": "badge",
                  "props": {
                      "content": "2018 — Ekspansi",
                      "background": "#e0e7ff",
                      "color": "#4f46e5",
                      "borderRadius": "8px",
                      "padding": "4px 12px",
                      "fontSize": "12px",
                      "fontWeight": "700",
                      "margin": "0 0 10px 0"
                  }
              },
              {
                  "id": "tml1-c2-title",
                  "type": "heading",
                  "props": {
                      "content": "Ekspansi Jaringan Nasional",
                      "level": "h3",
                      "fontSize": "20px",
                      "fontWeight": "700",
                      "color": "#0f172a",
                      "margin": "0 0 8px 0"
                  }
              },
              {
                  "id": "tml1-c2-desc",
                  "type": "text",
                  "props": {
                      "content": "Membuka cabang operasional di 15 kota strategis dan menjalin kemitraan dengan 200+ klien korporasi.",
                      "fontSize": "14px",
                      "color": "#64748b",
                      "margin": "0"
                  }
              }
          ]
      },
      {
          "id": "tml1-card-3",
          "type": "card",
          "props": {
              "variant": "timeline",
              "background": "#ffffff",
              "borderRadius": "20px",
              "shadow": "md",
              "borderWidth": "1px",
              "borderColor": "#e2e8f0",
              "hoverEffect": "lift",
              "padding": "28px"
          },
          "childrenComponents": [
              {
                  "id": "tml1-c3-year",
                  "type": "badge",
                  "props": {
                      "content": "2022 — Inovasi AI",
                      "background": "#e0e7ff",
                      "color": "#4f46e5",
                      "borderRadius": "8px",
                      "padding": "4px 12px",
                      "fontSize": "12px",
                      "fontWeight": "700",
                      "margin": "0 0 10px 0"
                  }
              },
              {
                  "id": "tml1-c3-title",
                  "type": "heading",
                  "props": {
                      "content": "Transformasi Digital Cerdas",
                      "level": "h3",
                      "fontSize": "20px",
                      "fontWeight": "700",
                      "color": "#0f172a",
                      "margin": "0 0 8px 0"
                  }
              },
              {
                  "id": "tml1-c3-desc",
                  "type": "text",
                  "props": {
                      "content": "Integrasi platform otomasi berbasis cloud dan AI untuk mempercepat efisiensi operasional harian.",
                      "fontSize": "14px",
                      "color": "#64748b",
                      "margin": "0"
                  }
              }
          ]
      },
      {
          "id": "tml1-card-4",
          "type": "card",
          "props": {
              "variant": "timeline",
              "background": "#ffffff",
              "borderRadius": "20px",
              "shadow": "md",
              "borderWidth": "1px",
              "borderColor": "#e2e8f0",
              "hoverEffect": "lift",
              "padding": "28px"
          },
          "childrenComponents": [
              {
                  "id": "tml1-c4-year",
                  "type": "badge",
                  "props": {
                      "content": "2026 — Masa Depan",
                      "background": "#e0e7ff",
                      "color": "#4f46e5",
                      "borderRadius": "8px",
                      "padding": "4px 12px",
                      "fontSize": "12px",
                      "fontWeight": "700",
                      "margin": "0 0 10px 0"
                  }
              },
              {
                  "id": "tml1-c4-title",
                  "type": "heading",
                  "props": {
                      "content": "Pemimpin Pasar Terdepan",
                      "level": "h3",
                      "fontSize": "20px",
                      "fontWeight": "700",
                      "color": "#0f172a",
                      "margin": "0 0 8px 0"
                  }
              },
              {
                  "id": "tml1-c4-desc",
                  "type": "text",
                  "props": {
                      "content": "Menjadi standar keunggulan industri dengan kepuasan pelanggan 99.8% di seluruh Indonesia.",
                      "fontSize": "14px",
                      "color": "#64748b",
                      "margin": "0"
                  }
              }
          ]
      }
  ],
  'timeline-02': [
      {
          "id": "tm02-badge",
          "type": "badge",
          "props": {
              "content": "✦ THE NOIR PROCESS ROADMAP",
              "background": "#1c1917",
              "color": "#e7c873"
          }
      },
      {
          "id": "tm02-heading",
          "type": "heading",
          "props": {
              "content": "Alur Eksekusi & Tahapan Presisi Tinggi",
              "level": "h2",
              "fontSize": "42px",
              "fontWeight": "800",
              "color": "#fafaf9",
              "align": "center",
              "margin": "0 0 14px 0"
          }
      },
      {
          "id": "tm02-desc",
          "type": "text",
          "props": {
              "content": "Setiap langkah dirancang dengan ketelitian maksimal untuk memastikan hasil akhir melampaui ekspektasi Anda.",
              "fontSize": "16px",
              "color": "#a8a29e",
              "align": "center",
              "margin": "0 0 48px 0"
          }
      }
  ],
  'timeline-03': [
      {
          "id": "tml3-badge",
          "type": "badge",
          "props": {
              "content": "⚡ RAPID EXECUTION SPRINT",
              "background": "#1c1917",
              "color": "#f97316"
          }
      },
      {
          "id": "tml3-heading",
          "type": "heading",
          "props": {
              "content": "Tahapan Akselerasi Dari Konsep Ke Pasar",
              "level": "h2",
              "fontSize": "42px",
              "fontWeight": "900",
              "color": "#fafaf9",
              "margin": "0 0 16px 0"
          }
      },
      {
          "id": "tml3-text",
          "type": "text",
          "props": {
              "content": "Kerangka kerja berkecepatan tinggi yang memangkas waktu peluncuran dari hitungan bulan menjadi minggu.",
              "fontSize": "16px",
              "color": "#a8a29e",
              "margin": "0 0 32px 0"
          }
      }
  ],
  'timeline-04': [
      {
          "id": "tml4-badge",
          "type": "badge",
          "props": {
              "content": "★ ROADMAP TAHAPAN KERJA",
              "background": "#fef08a",
              "color": "#000000"
          }
      },
      {
          "id": "tml4-heading",
          "type": "heading",
          "props": {
              "content": "PROSES EKSEKUSI TANPA KOMPROMI",
              "level": "h2",
              "fontSize": "44px",
              "fontWeight": "900",
              "color": "#000000",
              "align": "center",
              "margin": "0 0 12px 0"
          }
      },
      {
          "id": "tml4-text",
          "type": "text",
          "props": {
              "content": "Transparansi total di setiap fase proyek dari konsep awal hingga hasil akhir yang siap digunakan.",
              "fontSize": "16px",
              "color": "#1e293b",
              "align": "center",
              "margin": "0 0 40px 0"
          }
      }
  ],
  'timeline-05': [
      {
          "id": "tml5-badge",
          "type": "badge",
          "props": {
              "content": "Tahapan Kerja",
              "background": "#f1f5f9",
              "color": "#475569"
          }
      },
      {
          "id": "tml5-heading",
          "type": "heading",
          "props": {
              "content": "Kesederhanaan Dalam Setiap Langkah",
              "level": "h2",
              "fontSize": "38px",
              "fontWeight": "700",
              "color": "#0f172a",
              "align": "center",
              "margin": "0 0 12px 0"
          }
      },
      {
          "id": "tml5-text",
          "type": "text",
          "props": {
              "content": "Pendekatan terstruktur yang mengutamakan kejelasan, ketelitian, dan kenyamanan kolaborasi.",
              "fontSize": "16px",
              "color": "#64748b",
              "align": "center",
              "margin": "0 0 48px 0"
          }
      }
  ],
  'timeline-06': [
      {
          "id": "tml6-badge",
          "type": "badge",
          "props": {
              "content": "✦ CELESTIAL TECH ROADMAP",
              "background": "#0e1726",
              "color": "#38bdf8"
          }
      },
      {
          "id": "tml6-heading",
          "type": "heading",
          "props": {
              "content": "Evolusi Teknologi & Roadmap Inovasi",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#f8fafc",
              "align": "center",
              "margin": "0 0 14px 0"
          }
      },
      {
          "id": "tml6-text",
          "type": "text",
          "props": {
              "content": "Rencana strategis pengembangan kapabilitas komputasi dan arsitektur platform dari masa ke masa.",
              "fontSize": "16px",
              "color": "#94a3b8",
              "align": "center",
              "margin": "0 0 40px 0"
          }
      }
  ],
  'timeline-07': [
      {
          "id": "tml7-badge",
          "type": "badge",
          "props": {
              "content": "GIT_LOG --ONELINE --GRAPH",
              "background": "#022c22",
              "color": "#4ade80"
          }
      },
      {
          "id": "tml7-heading",
          "type": "heading",
          "props": {
              "content": "Histori Rilis & Catatan Perubahan Sistem",
              "level": "h2",
              "fontSize": "38px",
              "fontWeight": "800",
              "color": "#f0fdf4",
              "align": "center",
              "margin": "0 0 12px 0"
          }
      },
      {
          "id": "tml7-text",
          "type": "text",
          "props": {
              "content": "Rekam jejak pembaruan fitur, optimasi performa, dan patch stabilitas dari setiap iterasi versi.",
              "fontSize": "15px",
              "color": "#86efac",
              "align": "center",
              "margin": "0 0 40px 0"
          }
      }
  ],
  'timeline-08': [
      {
          "id": "tml8-badge",
          "type": "badge",
          "props": {
              "content": "🌸 KISAH & PERTUMBUHAN KAMI",
              "background": "#fdf2f8",
              "color": "#db2777"
          }
      },
      {
          "id": "tml8-heading",
          "type": "heading",
          "props": {
              "content": "Tumbuh Bersama Komunitas Dari Waktu Ke Waktu",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#1e293b",
              "align": "center",
              "margin": "0 0 14px 0"
          }
      },
      {
          "id": "tml8-text",
          "type": "text",
          "props": {
              "content": "Setiap fase perjalanan kami dipenuhi dedikasi untuk memberikan dampak positif yang nyata dan berkelanjutan.",
              "fontSize": "16px",
              "color": "#64748b",
              "align": "center",
              "margin": "0 0 40px 0"
          }
      }
  ],
  'timeline-09': [
      {
          "id": "tml9-badge",
          "type": "badge",
          "props": {
              "content": "STRATEGIC CORPORATE ROADMAP",
              "background": "#1e293b",
              "color": "#38bdf8"
          }
      },
      {
          "id": "tml9-heading",
          "type": "heading",
          "props": {
              "content": "Tahapan Transformasi Strategis Korporasi",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#ffffff",
              "align": "center",
              "margin": "0 0 14px 0"
          }
      },
      {
          "id": "tml9-text",
          "type": "text",
          "props": {
              "content": "Peta jalan pertumbuhan multi-tahun untuk memperkuat posisi pasar dan menciptakan nilai tambah berkelanjutan.",
              "fontSize": "16px",
              "color": "#94a3b8",
              "align": "center",
              "margin": "0 0 40px 0"
          }
      }
  ],
  'timeline-10': [
      {
          "id": "tml10-badge",
          "type": "badge",
          "props": {
              "content": "TAB TIMELINE INTERAKTIF",
              "background": "#eff6ff",
              "color": "#2563eb"
          }
      },
      {
          "id": "tml10-heading",
          "type": "heading",
          "props": {
              "content": "Eksplorasi Jejak Langkah Sesuai Periode",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#0f172a",
              "align": "center",
              "margin": "0 0 12px 0"
          }
      },
      {
          "id": "tml10-text",
          "type": "text",
          "props": {
              "content": "Pilih periode waktu di bawah untuk melihat rincian inisiatif dan pencapaian strategis pada tahun tersebut.",
              "fontSize": "16px",
              "color": "#64748b",
              "align": "center",
              "margin": "0 0 36px 0"
          }
      }
  ],
  'timeline-11': [
      {
          "id": "tml11-badge",
          "type": "badge",
          "props": {
              "content": "🌱 ESG & SUSTAINABILITY ROADMAP",
              "background": "#ecfdf5",
              "color": "#059669"
          }
      },
      {
          "id": "tml11-heading",
          "type": "heading",
          "props": {
              "content": "Perjalanan Menuju Emisi Nol Bersih",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#064e3b",
              "align": "center",
              "margin": "0 0 14px 0"
          }
      },
      {
          "id": "tml11-text",
          "type": "text",
          "props": {
              "content": "Langkah nyata kami dalam mengintegrasikan praktik ramah lingkungan di setiap lini operasional bisnis.",
              "fontSize": "16px",
              "color": "#047857",
              "align": "center",
              "margin": "0 0 40px 0"
          }
      }
  ],
  'timeline-12': [
      {
          "id": "tml12-badge",
          "type": "badge",
          "props": {
              "content": "⚡ GROWTH HORIZON TRACK",
              "background": "#ffedd5",
              "color": "#ea580c"
          }
      },
      {
          "id": "tml12-heading",
          "type": "heading",
          "props": {
              "content": "Lintasan Akselerasi & Lompatan Nilai",
              "level": "h2",
              "fontSize": "42px",
              "fontWeight": "900",
              "color": "#0f172a",
              "align": "center",
              "margin": "0 0 14px 0"
          }
      },
      {
          "id": "tml12-text",
          "type": "text",
          "props": {
              "content": "Kilas balik fase percepatan bisnis dari tahap inkubasi hingga ekspansi pasar yang agresif.",
              "fontSize": "16px",
              "color": "#64748b",
              "align": "center",
              "margin": "0 0 40px 0"
          }
      }
  ],
  'timeline-13': [
      {
          "id": "tml13-badge",
          "type": "badge",
          "props": {
              "content": "JURNAL KRONOLOGI RESMI",
              "background": "#f1f5f9",
              "color": "#334155"
          }
      },
      {
          "id": "tml13-heading",
          "type": "heading",
          "props": {
              "content": "Kronologi Sejarah & Dokumentasi Peristiwa",
              "level": "h2",
              "fontSize": "38px",
              "fontWeight": "800",
              "color": "#0f172a",
              "align": "center",
              "margin": "0 0 12px 0"
          }
      },
      {
          "id": "tml13-text",
          "type": "text",
          "props": {
              "content": "Arsip resmi momen-momen penting yang membentuk identitas dan reputasi lembaga kami.",
              "fontSize": "16px",
              "color": "#64748b",
              "align": "center",
              "margin": "0 0 40px 0"
          }
      }
  ],
  'timeline-14': [
      {
          "id": "tml14-badge",
          "type": "badge",
          "props": {
              "content": "✦ AI EVOLUTIONARY MILESTONES",
              "background": "#e0f2fe",
              "color": "#0284c7"
          }
      },
      {
          "id": "tml14-heading",
          "type": "heading",
          "props": {
              "content": "Evolusi Model AI & Kecerdasan Mesin",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#0f172a",
              "align": "center",
              "margin": "0 0 14px 0"
          }
      },
      {
          "id": "tml14-text",
          "type": "text",
          "props": {
              "content": "Tonggak sejarah pengembangan model kecerdasan buatan terapan kami dalam memecahkan masalah kompleks.",
              "fontSize": "16px",
              "color": "#64748b",
              "align": "center",
              "margin": "0 0 40px 0"
          }
      }
  ],
  'timeline-15': [
      {
          "id": "tml15-badge",
          "type": "badge",
          "props": {
              "content": "EST. 2012 — PERJALANAN HISTORIS",
              "background": "#f8fafc",
              "color": "#475569"
          }
      },
      {
          "id": "tml15-heading",
          "type": "heading",
          "props": {
              "content": "Kilas Balik Dedikasi Dari Masa Ke Masa",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#0f172a",
              "align": "center",
              "margin": "0 0 14px 0"
          }
      },
      {
          "id": "tml15-text",
          "type": "text",
          "props": {
              "content": "Menelusuri setiap babak penting dalam perjalanan membangun reputasi yang kokoh dan tepercaya.",
              "fontSize": "16px",
              "color": "#64748b",
              "align": "center",
              "margin": "0 0 48px 0"
          }
      }
  ],
  'timeline-16': [
      {
          "id": "tml16-badge",
          "type": "badge",
          "props": {
              "content": "AGENCY CREATIVE CHAPTERS",
              "background": "#faf5ff",
              "color": "#9333ea"
          }
      },
      {
          "id": "tml16-heading",
          "type": "heading",
          "props": {
              "content": "Babak Kreatif & Mahakarya Desain",
              "level": "h2",
              "fontSize": "42px",
              "fontWeight": "800",
              "color": "#0f172a",
              "align": "center",
              "margin": "0 0 14px 0"
          }
      },
      {
          "id": "tml16-text",
          "type": "text",
          "props": {
              "content": "Eksplorasi perjalanan estetika dan penciptaan identitas visual untuk brand-brand paling berpengaruh.",
              "fontSize": "16px",
              "color": "#64748b",
              "align": "center",
              "margin": "0 0 40px 0"
          }
      }
  ],
  'timeline-17': [
      {
          "id": "tml17-badge",
          "type": "badge",
          "props": {
              "content": "TRANSGO OPERATIONAL MILESTONES",
              "background": "#fef3c7",
              "color": "#d97706"
          }
      },
      {
          "id": "tml17-heading",
          "type": "heading",
          "props": {
              "content": "Tahapan Ekspansi Fasilitas & Kapasitas Industri",
              "level": "h2",
              "fontSize": "42px",
              "fontWeight": "900",
              "color": "#0f172a",
              "align": "center",
              "margin": "0 0 14px 0"
          }
      },
      {
          "id": "tml17-text",
          "type": "text",
          "props": {
              "content": "Pertumbuhan kapasitas pabrik dan peremajaan mesin untuk menjawab permintaan pasar skala raksasa.",
              "fontSize": "16px",
              "color": "#64748b",
              "align": "center",
              "margin": "0 0 40px 0"
          }
      }
  ],
  'timeline-18': [
      {
          "id": "tml18-badge",
          "type": "badge",
          "props": {
              "content": "📱 APP RELEASE SCHEDULE",
              "background": "#fff1f2",
              "color": "#e11d48"
          }
      },
      {
          "id": "tml18-heading",
          "type": "heading",
          "props": {
              "content": "Jadwal Rilis Fitur & Pembaruan Aplikasi",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#0f172a",
              "align": "center",
              "margin": "0 0 14px 0"
          }
      },
      {
          "id": "tml18-text",
          "type": "text",
          "props": {
              "content": "Ikuti roadmap peluncuran fitur baru yang dirancang untuk meningkatkan produktivitas harian Anda.",
              "fontSize": "16px",
              "color": "#64748b",
              "align": "center",
              "margin": "0 0 40px 0"
          }
      }
  ],
  'timeline-19': [
      {
          "id": "tml19-badge",
          "type": "badge",
          "props": {
              "content": "STRATEGIC EXECUTION TRACK",
              "background": "#f0fdf4",
              "color": "#16a34a"
          }
      },
      {
          "id": "tml19-heading",
          "type": "heading",
          "props": {
              "content": "Kerangka Kerja Eksekusi & Capaian Proyek",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#0f172a",
              "margin": "0 0 16px 0"
          }
      },
      {
          "id": "tml19-text",
          "type": "text",
          "props": {
              "content": "Pemantauan berkala setiap inisiatif strategis untuk menjamin kepatuhan anggaran dan ketepatan waktu.",
              "fontSize": "16px",
              "color": "#64748b",
              "margin": "0 0 32px 0"
          }
      }
  ],
  'timeline-20': [
      {
          "id": "tml20-badge",
          "type": "badge",
          "props": {
              "content": "✦ AETHER VISIONARY CENTURY ROADMAP",
              "background": "#1e1b4b",
              "color": "#818cf8"
          }
      },
      {
          "id": "tml20-heading",
          "type": "heading",
          "props": {
              "content": "Jejak Masa Lalu Menuju Warisan Masa Depan",
              "level": "h2",
              "fontSize": "44px",
              "fontWeight": "900",
              "color": "#fafaf9",
              "align": "center",
              "margin": "0 0 16px 0"
          }
      },
      {
          "id": "tml20-text",
          "type": "text",
          "props": {
              "content": "Merangkai fondasi sejarah yang kokoh dengan visi transformatif melintasi berbagai dekade ke depan.",
              "fontSize": "17px",
              "color": "#cbd5e1",
              "align": "center",
              "margin": "0 0 48px 0"
          }
      }
  ],
  'team-01': [
    { id: 'team1-badge', type: 'badge', props: { content: '✦ Tim 01', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'team1-heading', type: 'heading', props: { content: 'Tim Kepemimpinan Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'team1-text', type: 'text', props: { content: 'Profesional berpengalaman yang memimpin inovasi dan keunggulan eksekusi.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'team1-cta', type: 'button', props: { label: 'Gabung Tim →', href: '#karier', variant: 'primary', size: 'medium', radius: 'full', background: '#4f46e5', color: '#ffffff' } },
    {
      id: 'team1-card-1',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team1-c1-img', type: 'image', props: { src: '', alt: 'Budi Santoso', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team1-c1-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team1-c1-role', type: 'text', props: { content: 'Chief Executive Officer', fontSize: '14px', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team1-c1-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team1-card-2',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team1-c2-img', type: 'image', props: { src: '', alt: 'Siti Rahmawati', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team1-c2-name', type: 'heading', props: { content: 'Siti Rahmawati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team1-c2-role', type: 'text', props: { content: 'Chief Technology Officer', fontSize: '14px', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team1-c2-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team1-card-3',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team1-c3-img', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team1-c3-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team1-c3-role', type: 'text', props: { content: 'Chief Operating Officer', fontSize: '14px', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team1-c3-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team1-card-4',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team1-c4-img', type: 'image', props: { src: '', alt: 'Dewi Lestari', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team1-c4-name', type: 'heading', props: { content: 'Dewi Lestari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team1-c4-role', type: 'text', props: { content: 'VP Marketing', fontSize: '14px', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team1-c4-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
  ],
  'team-02': [
    { id: 'team2-badge', type: 'badge', props: { content: '✦ Tim 02', background: '#1c1917', color: '#e7c873' } },
    { id: 'team2-heading', type: 'heading', props: { content: 'Tim Kepemimpinan Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'team2-text', type: 'text', props: { content: 'Profesional berpengalaman yang memimpin inovasi dan keunggulan eksekusi.', fontSize: '15px', color: '#a8a29e', align: 'center', margin: '0 0 20px 0' } },
    { id: 'team2-cta', type: 'button', props: { label: 'Gabung Tim →', href: '#karier', variant: 'primary', size: 'medium', radius: 'full', background: '#e7c873', color: '#1c1917' } },
    {
      id: 'team2-card-1',
      type: 'card',
      props: { variant: 'team', background: '#1c1917', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team2-c1-img', type: 'image', props: { src: '', alt: 'Budi Santoso', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team2-c1-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team2-c1-role', type: 'text', props: { content: 'Chief Executive Officer', fontSize: '14px', color: '#e7c873', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team2-c1-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#ffffff' } },
      ],
    },
    {
      id: 'team2-card-2',
      type: 'card',
      props: { variant: 'team', background: '#1c1917', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team2-c2-img', type: 'image', props: { src: '', alt: 'Siti Rahmawati', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team2-c2-name', type: 'heading', props: { content: 'Siti Rahmawati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team2-c2-role', type: 'text', props: { content: 'Chief Technology Officer', fontSize: '14px', color: '#e7c873', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team2-c2-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#ffffff' } },
      ],
    },
    {
      id: 'team2-card-3',
      type: 'card',
      props: { variant: 'team', background: '#1c1917', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team2-c3-img', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team2-c3-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team2-c3-role', type: 'text', props: { content: 'Chief Operating Officer', fontSize: '14px', color: '#e7c873', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team2-c3-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#ffffff' } },
      ],
    },
    {
      id: 'team2-card-4',
      type: 'card',
      props: { variant: 'team', background: '#1c1917', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team2-c4-img', type: 'image', props: { src: '', alt: 'Dewi Lestari', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team2-c4-name', type: 'heading', props: { content: 'Dewi Lestari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team2-c4-role', type: 'text', props: { content: 'VP Marketing', fontSize: '14px', color: '#e7c873', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team2-c4-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#ffffff' } },
      ],
    },
  ],
  'team-03': [
    { id: 'team3-badge', type: 'badge', props: { content: '✦ Tim 03', background: '#fff7ed', color: '#ea580c' } },
    { id: 'team3-heading', type: 'heading', props: { content: 'Tim Kepemimpinan Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'team3-text', type: 'text', props: { content: 'Profesional berpengalaman yang memimpin inovasi dan keunggulan eksekusi.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'team3-cta', type: 'button', props: { label: 'Gabung Tim →', href: '#karier', variant: 'primary', size: 'medium', radius: 'full', background: '#ea580c', color: '#ffffff' } },
    {
      id: 'team3-card-1',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team3-c1-img', type: 'image', props: { src: '', alt: 'Budi Santoso', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team3-c1-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team3-c1-role', type: 'text', props: { content: 'Chief Executive Officer', fontSize: '14px', color: '#ea580c', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team3-c1-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team3-card-2',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team3-c2-img', type: 'image', props: { src: '', alt: 'Siti Rahmawati', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team3-c2-name', type: 'heading', props: { content: 'Siti Rahmawati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team3-c2-role', type: 'text', props: { content: 'Chief Technology Officer', fontSize: '14px', color: '#ea580c', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team3-c2-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team3-card-3',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team3-c3-img', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team3-c3-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team3-c3-role', type: 'text', props: { content: 'Chief Operating Officer', fontSize: '14px', color: '#ea580c', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team3-c3-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team3-card-4',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team3-c4-img', type: 'image', props: { src: '', alt: 'Dewi Lestari', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team3-c4-name', type: 'heading', props: { content: 'Dewi Lestari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team3-c4-role', type: 'text', props: { content: 'VP Marketing', fontSize: '14px', color: '#ea580c', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team3-c4-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
  ],
  'team-04': [
    { id: 'team4-badge', type: 'badge', props: { content: '✦ Tim 04', background: '#000000', color: '#facc15' } },
    { id: 'team4-heading', type: 'heading', props: { content: 'Tim Kepemimpinan Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#000000', align: 'center', margin: '0 0 12px 0' } },
    { id: 'team4-text', type: 'text', props: { content: 'Profesional berpengalaman yang memimpin inovasi dan keunggulan eksekusi.', fontSize: '15px', color: '#000000', align: 'center', margin: '0 0 20px 0' } },
    { id: 'team4-cta', type: 'button', props: { label: 'Gabung Tim →', href: '#karier', variant: 'primary', size: 'medium', radius: 'full', background: '#000000', color: '#facc15' } },
    {
      id: 'team4-card-1',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#000000', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team4-c1-img', type: 'image', props: { src: '', alt: 'Budi Santoso', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team4-c1-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#000000', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team4-c1-role', type: 'text', props: { content: 'Chief Executive Officer', fontSize: '14px', color: '#000000', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team4-c1-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#000000' } },
      ],
    },
    {
      id: 'team4-card-2',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#000000', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team4-c2-img', type: 'image', props: { src: '', alt: 'Siti Rahmawati', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team4-c2-name', type: 'heading', props: { content: 'Siti Rahmawati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#000000', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team4-c2-role', type: 'text', props: { content: 'Chief Technology Officer', fontSize: '14px', color: '#000000', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team4-c2-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#000000' } },
      ],
    },
    {
      id: 'team4-card-3',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#000000', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team4-c3-img', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team4-c3-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#000000', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team4-c3-role', type: 'text', props: { content: 'Chief Operating Officer', fontSize: '14px', color: '#000000', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team4-c3-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#000000' } },
      ],
    },
    {
      id: 'team4-card-4',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#000000', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team4-c4-img', type: 'image', props: { src: '', alt: 'Dewi Lestari', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team4-c4-name', type: 'heading', props: { content: 'Dewi Lestari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#000000', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team4-c4-role', type: 'text', props: { content: 'VP Marketing', fontSize: '14px', color: '#000000', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team4-c4-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#000000' } },
      ],
    },
  ],
  'team-05': [
    { id: 'team5-badge', type: 'badge', props: { content: '✦ Tim 05', background: '#ffffff', color: '#78716c' } },
    { id: 'team5-heading', type: 'heading', props: { content: 'Tim Kepemimpinan Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#1c1917', align: 'center', margin: '0 0 12px 0' } },
    { id: 'team5-text', type: 'text', props: { content: 'Profesional berpengalaman yang memimpin inovasi dan keunggulan eksekusi.', fontSize: '15px', color: '#78716c', align: 'center', margin: '0 0 20px 0' } },
    { id: 'team5-cta', type: 'button', props: { label: 'Gabung Tim →', href: '#karier', variant: 'primary', size: 'medium', radius: 'full', background: '#1c1917', color: '#ffffff' } },
    {
      id: 'team5-card-1',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team5-c1-img', type: 'image', props: { src: '', alt: 'Budi Santoso', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team5-c1-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#1c1917', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team5-c1-role', type: 'text', props: { content: 'Chief Executive Officer', fontSize: '14px', color: '#1c1917', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team5-c1-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#1c1917' } },
      ],
    },
    {
      id: 'team5-card-2',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team5-c2-img', type: 'image', props: { src: '', alt: 'Siti Rahmawati', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team5-c2-name', type: 'heading', props: { content: 'Siti Rahmawati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#1c1917', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team5-c2-role', type: 'text', props: { content: 'Chief Technology Officer', fontSize: '14px', color: '#1c1917', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team5-c2-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#1c1917' } },
      ],
    },
    {
      id: 'team5-card-3',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team5-c3-img', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team5-c3-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#1c1917', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team5-c3-role', type: 'text', props: { content: 'Chief Operating Officer', fontSize: '14px', color: '#1c1917', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team5-c3-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#1c1917' } },
      ],
    },
    {
      id: 'team5-card-4',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team5-c4-img', type: 'image', props: { src: '', alt: 'Dewi Lestari', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team5-c4-name', type: 'heading', props: { content: 'Dewi Lestari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#1c1917', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team5-c4-role', type: 'text', props: { content: 'VP Marketing', fontSize: '14px', color: '#1c1917', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team5-c4-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#1c1917' } },
      ],
    },
  ],
  'team-06': [
    { id: 'team6-badge', type: 'badge', props: { content: '✦ Tim 06', background: '#1e1b4b', color: '#a5b4fc' } },
    { id: 'team6-heading', type: 'heading', props: { content: 'Tim Kepemimpinan Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'team6-text', type: 'text', props: { content: 'Profesional berpengalaman yang memimpin inovasi dan keunggulan eksekusi.', fontSize: '15px', color: '#a5b4fc', align: 'center', margin: '0 0 20px 0' } },
    { id: 'team6-cta', type: 'button', props: { label: 'Gabung Tim →', href: '#karier', variant: 'primary', size: 'medium', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
    {
      id: 'team6-card-1',
      type: 'card',
      props: { variant: 'team', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team6-c1-img', type: 'image', props: { src: '', alt: 'Budi Santoso', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team6-c1-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team6-c1-role', type: 'text', props: { content: 'Chief Executive Officer', fontSize: '14px', color: '#8b5cf6', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team6-c1-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#ffffff' } },
      ],
    },
    {
      id: 'team6-card-2',
      type: 'card',
      props: { variant: 'team', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team6-c2-img', type: 'image', props: { src: '', alt: 'Siti Rahmawati', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team6-c2-name', type: 'heading', props: { content: 'Siti Rahmawati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team6-c2-role', type: 'text', props: { content: 'Chief Technology Officer', fontSize: '14px', color: '#8b5cf6', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team6-c2-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#ffffff' } },
      ],
    },
    {
      id: 'team6-card-3',
      type: 'card',
      props: { variant: 'team', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team6-c3-img', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team6-c3-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team6-c3-role', type: 'text', props: { content: 'Chief Operating Officer', fontSize: '14px', color: '#8b5cf6', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team6-c3-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#ffffff' } },
      ],
    },
    {
      id: 'team6-card-4',
      type: 'card',
      props: { variant: 'team', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team6-c4-img', type: 'image', props: { src: '', alt: 'Dewi Lestari', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team6-c4-name', type: 'heading', props: { content: 'Dewi Lestari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team6-c4-role', type: 'text', props: { content: 'VP Marketing', fontSize: '14px', color: '#8b5cf6', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team6-c4-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#ffffff' } },
      ],
    },
  ],
  'team-07': [
    { id: 'team7-badge', type: 'badge', props: { content: '✦ Tim 07', background: '#052e16', color: '#4ade80' } },
    { id: 'team7-heading', type: 'heading', props: { content: 'Tim Kepemimpinan Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#e2e8f0', align: 'center', margin: '0 0 12px 0' } },
    { id: 'team7-text', type: 'text', props: { content: 'Profesional berpengalaman yang memimpin inovasi dan keunggulan eksekusi.', fontSize: '15px', color: '#94a3b8', align: 'center', margin: '0 0 20px 0' } },
    { id: 'team7-cta', type: 'button', props: { label: 'Gabung Tim →', href: '#karier', variant: 'primary', size: 'medium', radius: 'full', background: '#22c55e', color: '#052e16' } },
    {
      id: 'team7-card-1',
      type: 'card',
      props: { variant: 'team', background: '#0f172a', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team7-c1-img', type: 'image', props: { src: '', alt: 'Budi Santoso', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team7-c1-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#e2e8f0', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team7-c1-role', type: 'text', props: { content: 'Chief Executive Officer', fontSize: '14px', color: '#22c55e', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team7-c1-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
      ],
    },
    {
      id: 'team7-card-2',
      type: 'card',
      props: { variant: 'team', background: '#0f172a', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team7-c2-img', type: 'image', props: { src: '', alt: 'Siti Rahmawati', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team7-c2-name', type: 'heading', props: { content: 'Siti Rahmawati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#e2e8f0', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team7-c2-role', type: 'text', props: { content: 'Chief Technology Officer', fontSize: '14px', color: '#22c55e', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team7-c2-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
      ],
    },
    {
      id: 'team7-card-3',
      type: 'card',
      props: { variant: 'team', background: '#0f172a', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team7-c3-img', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team7-c3-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#e2e8f0', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team7-c3-role', type: 'text', props: { content: 'Chief Operating Officer', fontSize: '14px', color: '#22c55e', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team7-c3-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
      ],
    },
    {
      id: 'team7-card-4',
      type: 'card',
      props: { variant: 'team', background: '#0f172a', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team7-c4-img', type: 'image', props: { src: '', alt: 'Dewi Lestari', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team7-c4-name', type: 'heading', props: { content: 'Dewi Lestari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#e2e8f0', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team7-c4-role', type: 'text', props: { content: 'VP Marketing', fontSize: '14px', color: '#22c55e', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team7-c4-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#e2e8f0' } },
      ],
    },
  ],
  'team-08': [
    { id: 'team8-badge', type: 'badge', props: { content: '✦ Tim 08', background: '#fce7f3', color: '#be185d' } },
    { id: 'team8-heading', type: 'heading', props: { content: 'Tim Kepemimpinan Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#831843', align: 'center', margin: '0 0 12px 0' } },
    { id: 'team8-text', type: 'text', props: { content: 'Profesional berpengalaman yang memimpin inovasi dan keunggulan eksekusi.', fontSize: '15px', color: '#9d7b8c', align: 'center', margin: '0 0 20px 0' } },
    { id: 'team8-cta', type: 'button', props: { label: 'Gabung Tim →', href: '#karier', variant: 'primary', size: 'medium', radius: 'full', background: '#db2777', color: '#ffffff' } },
    {
      id: 'team8-card-1',
      type: 'card',
      props: { variant: 'team', background: '#fff1f2', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team8-c1-img', type: 'image', props: { src: '', alt: 'Budi Santoso', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team8-c1-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#831843', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team8-c1-role', type: 'text', props: { content: 'Chief Executive Officer', fontSize: '14px', color: '#db2777', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team8-c1-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#831843' } },
      ],
    },
    {
      id: 'team8-card-2',
      type: 'card',
      props: { variant: 'team', background: '#fff1f2', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team8-c2-img', type: 'image', props: { src: '', alt: 'Siti Rahmawati', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team8-c2-name', type: 'heading', props: { content: 'Siti Rahmawati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#831843', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team8-c2-role', type: 'text', props: { content: 'Chief Technology Officer', fontSize: '14px', color: '#db2777', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team8-c2-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#831843' } },
      ],
    },
    {
      id: 'team8-card-3',
      type: 'card',
      props: { variant: 'team', background: '#fff1f2', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team8-c3-img', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team8-c3-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#831843', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team8-c3-role', type: 'text', props: { content: 'Chief Operating Officer', fontSize: '14px', color: '#db2777', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team8-c3-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#831843' } },
      ],
    },
    {
      id: 'team8-card-4',
      type: 'card',
      props: { variant: 'team', background: '#fff1f2', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team8-c4-img', type: 'image', props: { src: '', alt: 'Dewi Lestari', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team8-c4-name', type: 'heading', props: { content: 'Dewi Lestari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#831843', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team8-c4-role', type: 'text', props: { content: 'VP Marketing', fontSize: '14px', color: '#db2777', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team8-c4-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#831843' } },
      ],
    },
  ],
  'team-09': [
    { id: 'team9-badge', type: 'badge', props: { content: '✦ Tim 09', background: '#78350f', color: '#fde68a' } },
    { id: 'team9-heading', type: 'heading', props: { content: 'Tim Kepemimpinan Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#78350f', align: 'center', margin: '0 0 12px 0' } },
    { id: 'team9-text', type: 'text', props: { content: 'Profesional berpengalaman yang memimpin inovasi dan keunggulan eksekusi.', fontSize: '15px', color: '#92400e', align: 'center', margin: '0 0 20px 0' } },
    { id: 'team9-cta', type: 'button', props: { label: 'Gabung Tim →', href: '#karier', variant: 'primary', size: 'medium', radius: 'full', background: '#92400e', color: '#fef3c7' } },
    {
      id: 'team9-card-1',
      type: 'card',
      props: { variant: 'team', background: '#fffbeb', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team9-c1-img', type: 'image', props: { src: '', alt: 'Budi Santoso', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team9-c1-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#78350f', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team9-c1-role', type: 'text', props: { content: 'Chief Executive Officer', fontSize: '14px', color: '#92400e', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team9-c1-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#78350f' } },
      ],
    },
    {
      id: 'team9-card-2',
      type: 'card',
      props: { variant: 'team', background: '#fffbeb', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team9-c2-img', type: 'image', props: { src: '', alt: 'Siti Rahmawati', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team9-c2-name', type: 'heading', props: { content: 'Siti Rahmawati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#78350f', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team9-c2-role', type: 'text', props: { content: 'Chief Technology Officer', fontSize: '14px', color: '#92400e', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team9-c2-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#78350f' } },
      ],
    },
    {
      id: 'team9-card-3',
      type: 'card',
      props: { variant: 'team', background: '#fffbeb', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team9-c3-img', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team9-c3-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#78350f', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team9-c3-role', type: 'text', props: { content: 'Chief Operating Officer', fontSize: '14px', color: '#92400e', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team9-c3-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#78350f' } },
      ],
    },
    {
      id: 'team9-card-4',
      type: 'card',
      props: { variant: 'team', background: '#fffbeb', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team9-c4-img', type: 'image', props: { src: '', alt: 'Dewi Lestari', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team9-c4-name', type: 'heading', props: { content: 'Dewi Lestari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#78350f', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team9-c4-role', type: 'text', props: { content: 'VP Marketing', fontSize: '14px', color: '#92400e', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team9-c4-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#78350f' } },
      ],
    },
  ],
  'team-10': [
    { id: 'team10-badge', type: 'badge', props: { content: '✦ Tim 10', background: '#fef2f2', color: '#dc2626' } },
    { id: 'team10-heading', type: 'heading', props: { content: 'Tim Kepemimpinan Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'team10-text', type: 'text', props: { content: 'Profesional berpengalaman yang memimpin inovasi dan keunggulan eksekusi.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'team10-cta', type: 'button', props: { label: 'Gabung Tim →', href: '#karier', variant: 'primary', size: 'medium', radius: 'full', background: '#dc2626', color: '#ffffff' } },
    {
      id: 'team10-card-1',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team10-c1-img', type: 'image', props: { src: '', alt: 'Budi Santoso', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team10-c1-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team10-c1-role', type: 'text', props: { content: 'Chief Executive Officer', fontSize: '14px', color: '#dc2626', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team10-c1-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team10-card-2',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team10-c2-img', type: 'image', props: { src: '', alt: 'Siti Rahmawati', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team10-c2-name', type: 'heading', props: { content: 'Siti Rahmawati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team10-c2-role', type: 'text', props: { content: 'Chief Technology Officer', fontSize: '14px', color: '#dc2626', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team10-c2-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team10-card-3',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team10-c3-img', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team10-c3-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team10-c3-role', type: 'text', props: { content: 'Chief Operating Officer', fontSize: '14px', color: '#dc2626', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team10-c3-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team10-card-4',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team10-c4-img', type: 'image', props: { src: '', alt: 'Dewi Lestari', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team10-c4-name', type: 'heading', props: { content: 'Dewi Lestari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team10-c4-role', type: 'text', props: { content: 'VP Marketing', fontSize: '14px', color: '#dc2626', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team10-c4-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
  ],
  'team-11': [
    { id: 'team11-badge', type: 'badge', props: { content: '✦ Tim 11', background: '#ffffff', color: '#7c3aed' } },
    { id: 'team11-heading', type: 'heading', props: { content: 'Tim Kepemimpinan Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'team11-text', type: 'text', props: { content: 'Profesional berpengalaman yang memimpin inovasi dan keunggulan eksekusi.', fontSize: '15px', color: '#ddd6fe', align: 'center', margin: '0 0 20px 0' } },
    { id: 'team11-cta', type: 'button', props: { label: 'Gabung Tim →', href: '#karier', variant: 'primary', size: 'medium', radius: 'full', background: '#ffffff', color: '#6d28d9' } },
    {
      id: 'team11-card-1',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team11-c1-img', type: 'image', props: { src: '', alt: 'Budi Santoso', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team11-c1-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team11-c1-role', type: 'text', props: { content: 'Chief Executive Officer', fontSize: '14px', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team11-c1-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team11-card-2',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team11-c2-img', type: 'image', props: { src: '', alt: 'Siti Rahmawati', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team11-c2-name', type: 'heading', props: { content: 'Siti Rahmawati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team11-c2-role', type: 'text', props: { content: 'Chief Technology Officer', fontSize: '14px', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team11-c2-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team11-card-3',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team11-c3-img', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team11-c3-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team11-c3-role', type: 'text', props: { content: 'Chief Operating Officer', fontSize: '14px', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team11-c3-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team11-card-4',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team11-c4-img', type: 'image', props: { src: '', alt: 'Dewi Lestari', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team11-c4-name', type: 'heading', props: { content: 'Dewi Lestari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team11-c4-role', type: 'text', props: { content: 'VP Marketing', fontSize: '14px', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team11-c4-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
  ],
  'team-12': [
    { id: 'team12-badge', type: 'badge', props: { content: '✦ Tim 12', background: '#0f172a', color: '#38bdf8' } },
    { id: 'team12-heading', type: 'heading', props: { content: 'Tim Kepemimpinan Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'team12-text', type: 'text', props: { content: 'Profesional berpengalaman yang memimpin inovasi dan keunggulan eksekusi.', fontSize: '15px', color: '#94a3b8', align: 'center', margin: '0 0 20px 0' } },
    { id: 'team12-cta', type: 'button', props: { label: 'Gabung Tim →', href: '#karier', variant: 'primary', size: 'medium', radius: 'full', background: '#38bdf8', color: '#082f49' } },
    {
      id: 'team12-card-1',
      type: 'card',
      props: { variant: 'team', background: '#1e293b', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team12-c1-img', type: 'image', props: { src: '', alt: 'Budi Santoso', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team12-c1-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team12-c1-role', type: 'text', props: { content: 'Chief Executive Officer', fontSize: '14px', color: '#38bdf8', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team12-c1-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#ffffff' } },
      ],
    },
    {
      id: 'team12-card-2',
      type: 'card',
      props: { variant: 'team', background: '#1e293b', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team12-c2-img', type: 'image', props: { src: '', alt: 'Siti Rahmawati', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team12-c2-name', type: 'heading', props: { content: 'Siti Rahmawati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team12-c2-role', type: 'text', props: { content: 'Chief Technology Officer', fontSize: '14px', color: '#38bdf8', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team12-c2-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#ffffff' } },
      ],
    },
    {
      id: 'team12-card-3',
      type: 'card',
      props: { variant: 'team', background: '#1e293b', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team12-c3-img', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team12-c3-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team12-c3-role', type: 'text', props: { content: 'Chief Operating Officer', fontSize: '14px', color: '#38bdf8', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team12-c3-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#ffffff' } },
      ],
    },
    {
      id: 'team12-card-4',
      type: 'card',
      props: { variant: 'team', background: '#1e293b', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team12-c4-img', type: 'image', props: { src: '', alt: 'Dewi Lestari', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team12-c4-name', type: 'heading', props: { content: 'Dewi Lestari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team12-c4-role', type: 'text', props: { content: 'VP Marketing', fontSize: '14px', color: '#38bdf8', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team12-c4-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#ffffff' } },
      ],
    },
  ],
  'team-13': [
    { id: 'team13-badge', type: 'badge', props: { content: '✦ Tim 13', background: '#fce7f3', color: '#ec4899' } },
    { id: 'team13-heading', type: 'heading', props: { content: 'Tim Kepemimpinan Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'team13-text', type: 'text', props: { content: 'Profesional berpengalaman yang memimpin inovasi dan keunggulan eksekusi.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'team13-cta', type: 'button', props: { label: 'Gabung Tim →', href: '#karier', variant: 'primary', size: 'medium', radius: 'full', background: '#ec4899', color: '#ffffff' } },
    {
      id: 'team13-card-1',
      type: 'card',
      props: { variant: 'team', background: '#fff1f2', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team13-c1-img', type: 'image', props: { src: '', alt: 'Budi Santoso', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team13-c1-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team13-c1-role', type: 'text', props: { content: 'Chief Executive Officer', fontSize: '14px', color: '#ec4899', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team13-c1-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team13-card-2',
      type: 'card',
      props: { variant: 'team', background: '#fff1f2', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team13-c2-img', type: 'image', props: { src: '', alt: 'Siti Rahmawati', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team13-c2-name', type: 'heading', props: { content: 'Siti Rahmawati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team13-c2-role', type: 'text', props: { content: 'Chief Technology Officer', fontSize: '14px', color: '#ec4899', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team13-c2-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team13-card-3',
      type: 'card',
      props: { variant: 'team', background: '#fff1f2', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team13-c3-img', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team13-c3-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team13-c3-role', type: 'text', props: { content: 'Chief Operating Officer', fontSize: '14px', color: '#ec4899', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team13-c3-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team13-card-4',
      type: 'card',
      props: { variant: 'team', background: '#fff1f2', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team13-c4-img', type: 'image', props: { src: '', alt: 'Dewi Lestari', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team13-c4-name', type: 'heading', props: { content: 'Dewi Lestari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team13-c4-role', type: 'text', props: { content: 'VP Marketing', fontSize: '14px', color: '#ec4899', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team13-c4-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
  ],
  'team-14': [
    { id: 'team14-badge', type: 'badge', props: { content: '✦ Tim 14', background: '#eff6ff', color: '#1d4ed8' } },
    { id: 'team14-heading', type: 'heading', props: { content: 'Tim Kepemimpinan Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'team14-text', type: 'text', props: { content: 'Profesional berpengalaman yang memimpin inovasi dan keunggulan eksekusi.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'team14-cta', type: 'button', props: { label: 'Gabung Tim →', href: '#karier', variant: 'primary', size: 'medium', radius: 'full', background: '#1e40af', color: '#ffffff' } },
    {
      id: 'team14-card-1',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team14-c1-img', type: 'image', props: { src: '', alt: 'Budi Santoso', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team14-c1-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team14-c1-role', type: 'text', props: { content: 'Chief Executive Officer', fontSize: '14px', color: '#1e40af', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team14-c1-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team14-card-2',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team14-c2-img', type: 'image', props: { src: '', alt: 'Siti Rahmawati', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team14-c2-name', type: 'heading', props: { content: 'Siti Rahmawati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team14-c2-role', type: 'text', props: { content: 'Chief Technology Officer', fontSize: '14px', color: '#1e40af', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team14-c2-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team14-card-3',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team14-c3-img', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team14-c3-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team14-c3-role', type: 'text', props: { content: 'Chief Operating Officer', fontSize: '14px', color: '#1e40af', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team14-c3-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team14-card-4',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team14-c4-img', type: 'image', props: { src: '', alt: 'Dewi Lestari', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team14-c4-name', type: 'heading', props: { content: 'Dewi Lestari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team14-c4-role', type: 'text', props: { content: 'VP Marketing', fontSize: '14px', color: '#1e40af', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team14-c4-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
  ],
  'team-15': [
    { id: 'team15-badge', type: 'badge', props: { content: '✦ Tim 15', background: '#0f172a', color: '#ffffff' } },
    { id: 'team15-heading', type: 'heading', props: { content: 'Tim Kepemimpinan Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'team15-text', type: 'text', props: { content: 'Profesional berpengalaman yang memimpin inovasi dan keunggulan eksekusi.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'team15-cta', type: 'button', props: { label: 'Gabung Tim →', href: '#karier', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    {
      id: 'team15-card-1',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team15-c1-img', type: 'image', props: { src: '', alt: 'Budi Santoso', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team15-c1-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team15-c1-role', type: 'text', props: { content: 'Chief Executive Officer', fontSize: '14px', color: '#0f172a', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team15-c1-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team15-card-2',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team15-c2-img', type: 'image', props: { src: '', alt: 'Siti Rahmawati', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team15-c2-name', type: 'heading', props: { content: 'Siti Rahmawati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team15-c2-role', type: 'text', props: { content: 'Chief Technology Officer', fontSize: '14px', color: '#0f172a', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team15-c2-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team15-card-3',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team15-c3-img', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team15-c3-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team15-c3-role', type: 'text', props: { content: 'Chief Operating Officer', fontSize: '14px', color: '#0f172a', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team15-c3-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team15-card-4',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team15-c4-img', type: 'image', props: { src: '', alt: 'Dewi Lestari', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team15-c4-name', type: 'heading', props: { content: 'Dewi Lestari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team15-c4-role', type: 'text', props: { content: 'VP Marketing', fontSize: '14px', color: '#0f172a', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team15-c4-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
  ],
  'team-16': [
    { id: 'team16-badge', type: 'badge', props: { content: '✦ Tim 16', background: '#dcfce7', color: '#166534' } },
    { id: 'team16-heading', type: 'heading', props: { content: 'Tim Kepemimpinan Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#064e3b', align: 'center', margin: '0 0 12px 0' } },
    { id: 'team16-text', type: 'text', props: { content: 'Profesional berpengalaman yang memimpin inovasi dan keunggulan eksekusi.', fontSize: '15px', color: '#4d7c0f', align: 'center', margin: '0 0 20px 0' } },
    { id: 'team16-cta', type: 'button', props: { label: 'Gabung Tim →', href: '#karier', variant: 'primary', size: 'medium', radius: 'full', background: '#16a34a', color: '#ffffff' } },
    {
      id: 'team16-card-1',
      type: 'card',
      props: { variant: 'team', background: '#f0fdf4', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team16-c1-img', type: 'image', props: { src: '', alt: 'Budi Santoso', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team16-c1-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#064e3b', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team16-c1-role', type: 'text', props: { content: 'Chief Executive Officer', fontSize: '14px', color: '#16a34a', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team16-c1-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#064e3b' } },
      ],
    },
    {
      id: 'team16-card-2',
      type: 'card',
      props: { variant: 'team', background: '#f0fdf4', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team16-c2-img', type: 'image', props: { src: '', alt: 'Siti Rahmawati', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team16-c2-name', type: 'heading', props: { content: 'Siti Rahmawati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#064e3b', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team16-c2-role', type: 'text', props: { content: 'Chief Technology Officer', fontSize: '14px', color: '#16a34a', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team16-c2-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#064e3b' } },
      ],
    },
    {
      id: 'team16-card-3',
      type: 'card',
      props: { variant: 'team', background: '#f0fdf4', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team16-c3-img', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team16-c3-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#064e3b', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team16-c3-role', type: 'text', props: { content: 'Chief Operating Officer', fontSize: '14px', color: '#16a34a', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team16-c3-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#064e3b' } },
      ],
    },
    {
      id: 'team16-card-4',
      type: 'card',
      props: { variant: 'team', background: '#f0fdf4', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team16-c4-img', type: 'image', props: { src: '', alt: 'Dewi Lestari', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team16-c4-name', type: 'heading', props: { content: 'Dewi Lestari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#064e3b', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team16-c4-role', type: 'text', props: { content: 'VP Marketing', fontSize: '14px', color: '#16a34a', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team16-c4-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#064e3b' } },
      ],
    },
  ],
  'team-17': [
    { id: 'team17-badge', type: 'badge', props: { content: '✦ Tim 17', background: '#dc2626', color: '#ffffff' } },
    { id: 'team17-heading', type: 'heading', props: { content: 'Tim Kepemimpinan Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'team17-text', type: 'text', props: { content: 'Profesional berpengalaman yang memimpin inovasi dan keunggulan eksekusi.', fontSize: '15px', color: '#fecaca', align: 'center', margin: '0 0 20px 0' } },
    { id: 'team17-cta', type: 'button', props: { label: 'Gabung Tim →', href: '#karier', variant: 'primary', size: 'medium', radius: 'full', background: '#dc2626', color: '#ffffff' } },
    {
      id: 'team17-card-1',
      type: 'card',
      props: { variant: 'team', background: '#171717', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team17-c1-img', type: 'image', props: { src: '', alt: 'Budi Santoso', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team17-c1-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team17-c1-role', type: 'text', props: { content: 'Chief Executive Officer', fontSize: '14px', color: '#dc2626', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team17-c1-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#ffffff' } },
      ],
    },
    {
      id: 'team17-card-2',
      type: 'card',
      props: { variant: 'team', background: '#171717', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team17-c2-img', type: 'image', props: { src: '', alt: 'Siti Rahmawati', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team17-c2-name', type: 'heading', props: { content: 'Siti Rahmawati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team17-c2-role', type: 'text', props: { content: 'Chief Technology Officer', fontSize: '14px', color: '#dc2626', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team17-c2-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#ffffff' } },
      ],
    },
    {
      id: 'team17-card-3',
      type: 'card',
      props: { variant: 'team', background: '#171717', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team17-c3-img', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team17-c3-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team17-c3-role', type: 'text', props: { content: 'Chief Operating Officer', fontSize: '14px', color: '#dc2626', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team17-c3-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#ffffff' } },
      ],
    },
    {
      id: 'team17-card-4',
      type: 'card',
      props: { variant: 'team', background: '#171717', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team17-c4-img', type: 'image', props: { src: '', alt: 'Dewi Lestari', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team17-c4-name', type: 'heading', props: { content: 'Dewi Lestari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team17-c4-role', type: 'text', props: { content: 'VP Marketing', fontSize: '14px', color: '#dc2626', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team17-c4-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#ffffff' } },
      ],
    },
  ],
  'team-18': [
    { id: 'team18-badge', type: 'badge', props: { content: '✦ Tim 18', background: '#fff7ed', color: '#ea580c' } },
    { id: 'team18-heading', type: 'heading', props: { content: 'Tim Kepemimpinan Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'team18-text', type: 'text', props: { content: 'Profesional berpengalaman yang memimpin inovasi dan keunggulan eksekusi.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'team18-cta', type: 'button', props: { label: 'Gabung Tim →', href: '#karier', variant: 'primary', size: 'medium', radius: 'full', background: '#f97316', color: '#ffffff' } },
    {
      id: 'team18-card-1',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team18-c1-img', type: 'image', props: { src: '', alt: 'Budi Santoso', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team18-c1-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team18-c1-role', type: 'text', props: { content: 'Chief Executive Officer', fontSize: '14px', color: '#f97316', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team18-c1-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team18-card-2',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team18-c2-img', type: 'image', props: { src: '', alt: 'Siti Rahmawati', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team18-c2-name', type: 'heading', props: { content: 'Siti Rahmawati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team18-c2-role', type: 'text', props: { content: 'Chief Technology Officer', fontSize: '14px', color: '#f97316', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team18-c2-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team18-card-3',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team18-c3-img', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team18-c3-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team18-c3-role', type: 'text', props: { content: 'Chief Operating Officer', fontSize: '14px', color: '#f97316', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team18-c3-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team18-card-4',
      type: 'card',
      props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team18-c4-img', type: 'image', props: { src: '', alt: 'Dewi Lestari', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team18-c4-name', type: 'heading', props: { content: 'Dewi Lestari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team18-c4-role', type: 'text', props: { content: 'VP Marketing', fontSize: '14px', color: '#f97316', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team18-c4-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
  ],
  'team-19': [
    { id: 'team19-badge', type: 'badge', props: { content: '✦ Tim 19', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'team19-heading', type: 'heading', props: { content: 'Tim Kepemimpinan Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'team19-text', type: 'text', props: { content: 'Profesional berpengalaman yang memimpin inovasi dan keunggulan eksekusi.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'team19-cta', type: 'button', props: { label: 'Gabung Tim →', href: '#karier', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    {
      id: 'team19-card-1',
      type: 'card',
      props: { variant: 'team', background: 'rgba(255,255,255,0.85)', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team19-c1-img', type: 'image', props: { src: '', alt: 'Budi Santoso', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team19-c1-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team19-c1-role', type: 'text', props: { content: 'Chief Executive Officer', fontSize: '14px', color: '#0f172a', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team19-c1-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team19-card-2',
      type: 'card',
      props: { variant: 'team', background: 'rgba(255,255,255,0.85)', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team19-c2-img', type: 'image', props: { src: '', alt: 'Siti Rahmawati', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team19-c2-name', type: 'heading', props: { content: 'Siti Rahmawati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team19-c2-role', type: 'text', props: { content: 'Chief Technology Officer', fontSize: '14px', color: '#0f172a', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team19-c2-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team19-card-3',
      type: 'card',
      props: { variant: 'team', background: 'rgba(255,255,255,0.85)', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team19-c3-img', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team19-c3-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team19-c3-role', type: 'text', props: { content: 'Chief Operating Officer', fontSize: '14px', color: '#0f172a', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team19-c3-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
    {
      id: 'team19-card-4',
      type: 'card',
      props: { variant: 'team', background: 'rgba(255,255,255,0.85)', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team19-c4-img', type: 'image', props: { src: '', alt: 'Dewi Lestari', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team19-c4-name', type: 'heading', props: { content: 'Dewi Lestari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team19-c4-role', type: 'text', props: { content: 'VP Marketing', fontSize: '14px', color: '#0f172a', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team19-c4-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#0f172a' } },
      ],
    },
  ],
  'team-20': [
    { id: 'team20-badge', type: 'badge', props: { content: '✦ Tim 20', background: '#1e1b4b', color: '#c4b5fd' } },
    { id: 'team20-heading', type: 'heading', props: { content: 'Tim Kepemimpinan Kami', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'team20-text', type: 'text', props: { content: 'Profesional berpengalaman yang memimpin inovasi dan keunggulan eksekusi.', fontSize: '15px', color: '#a5b4fc', align: 'center', margin: '0 0 20px 0' } },
    { id: 'team20-cta', type: 'button', props: { label: 'Gabung Tim →', href: '#karier', variant: 'primary', size: 'medium', radius: 'full', background: '#6366f1', color: '#ffffff' } },
    {
      id: 'team20-card-1',
      type: 'card',
      props: { variant: 'team', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team20-c1-img', type: 'image', props: { src: '', alt: 'Budi Santoso', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team20-c1-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team20-c1-role', type: 'text', props: { content: 'Chief Executive Officer', fontSize: '14px', color: '#6366f1', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team20-c1-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#ffffff' } },
      ],
    },
    {
      id: 'team20-card-2',
      type: 'card',
      props: { variant: 'team', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team20-c2-img', type: 'image', props: { src: '', alt: 'Siti Rahmawati', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team20-c2-name', type: 'heading', props: { content: 'Siti Rahmawati', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team20-c2-role', type: 'text', props: { content: 'Chief Technology Officer', fontSize: '14px', color: '#6366f1', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team20-c2-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#ffffff' } },
      ],
    },
    {
      id: 'team20-card-3',
      type: 'card',
      props: { variant: 'team', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team20-c3-img', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team20-c3-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team20-c3-role', type: 'text', props: { content: 'Chief Operating Officer', fontSize: '14px', color: '#6366f1', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team20-c3-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#ffffff' } },
      ],
    },
    {
      id: 'team20-card-4',
      type: 'card',
      props: { variant: 'team', background: 'rgba(255,255,255,0.06)', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'lift', padding: '24px' },
      childrenComponents: [
        { id: 'team20-c4-img', type: 'image', props: { src: '', alt: 'Dewi Lestari', width: '96px', height: '96px', borderRadius: '50%', objectFit: 'cover' } },
        { id: 'team20-c4-name', type: 'heading', props: { content: 'Dewi Lestari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '16px 0 4px 0' } },
        { id: 'team20-c4-role', type: 'text', props: { content: 'VP Marketing', fontSize: '14px', color: '#6366f1', align: 'center', margin: '0 0 8px 0' } },
        { id: 'team20-c4-btn', type: 'button', props: { label: 'Profil →', href: '#tim', variant: 'ghost', size: 'small', background: 'transparent', color: '#ffffff' } },
      ],
    },
  ],

  // === TESTIMONIALS ===
  'testimonials-01': [
    { id: 'test1-heading', type: 'heading', props: { content: 'Apa Kata Klien Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'test1-subtext', type: 'text', props: { content: 'Testimoni nyata dari pelanggan yang telah mempercayakan bisnis mereka kepada kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'test1-card-1', type: 'card', props: { variant: 'testimonial', background: '#f8fafc', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'test1-c1-icon', type: 'icon', props: { icon: 'FaQuoteLeft', size: '24px', color: '#4f46e5', align: 'left' } },
      { id: 'test1-c1-text', type: 'text', props: { content: '"Layanan yang sangat profesional dan responsif. Tim mereka benar-benar memahami kebutuhan bisnis kami dan memberikan solusi tepat sasaran."', fontSize: '14px', color: '#475569', lineHeight: '1.8', margin: '12px 0 16px 0' } },
      { id: 'test1-c1-avatar', type: 'image', props: { src: '', alt: 'Rini Susanti', width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' } },
      { id: 'test1-c1-name', type: 'heading', props: { content: 'Rini Susanti', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '0 0 2px 0' } },
      { id: 'test1-c1-role', type: 'text', props: { content: 'Direktur Operasional, PT Maju Bersama', fontSize: '12px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'test1-card-2', type: 'card', props: { variant: 'testimonial', background: '#f8fafc', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'test1-c2-icon', type: 'icon', props: { icon: 'FaQuoteLeft', size: '24px', color: '#4f46e5', align: 'left' } },
      { id: 'test1-c2-text', type: 'text', props: { content: '"Implementasi sistem berlangsung sangat cepat dan hasilnya luar biasa. Produktivitas tim kami meningkat 40% dalam waktu 3 bulan pertama."', fontSize: '14px', color: '#475569', lineHeight: '1.8', margin: '12px 0 16px 0' } },
      { id: 'test1-c2-avatar', type: 'image', props: { src: '', alt: 'Hendra Wijaya', width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' } },
      { id: 'test1-c2-name', type: 'heading', props: { content: 'Hendra Wijaya', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '0 0 2px 0' } },
      { id: 'test1-c2-role', type: 'text', props: { content: 'CEO, CV Karya Mandiri', fontSize: '12px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'test1-card-3', type: 'card', props: { variant: 'testimonial', background: '#f8fafc', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'test1-c3-icon', type: 'icon', props: { icon: 'FaQuoteLeft', size: '24px', color: '#4f46e5', align: 'left' } },
      { id: 'test1-c3-text', type: 'text', props: { content: '"Dukungan teknis 24/7 yang mereka berikan benar-benar membuat kami tenang. Isu diselesaikan dalam hitungan menit, bukan jam."', fontSize: '14px', color: '#475569', lineHeight: '1.8', margin: '12px 0 16px 0' } },
      { id: 'test1-c3-avatar', type: 'image', props: { src: '', alt: 'Maya Putri', width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' } },
      { id: 'test1-c3-name', type: 'heading', props: { content: 'Maya Putri', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '0 0 2px 0' } },
      { id: 'test1-c3-role', type: 'text', props: { content: 'IT Manager, Koperasi Mandiri Sejahtera', fontSize: '12px', color: '#64748b', margin: '0' } },
    ]},
  ],

  // === STATISTICS EXTENDED (dipindah ke blok utama di atas) ===

  // === CLIENTS EXTENDED ===


  // === ADDITIONAL LAYOUTS ===
  'about-05': [
    { id: 'ab5-heading', type: 'heading', props: { content: 'Tentang Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ab5-subtext', type: 'text', props: { content: 'Mengenal lebih dekat visi, misi, dan perjalanan kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'ab5-image', type: 'image', props: { src: '', alt: 'About Image', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '20px' } },
    { id: 'ab5-text', type: 'text', props: { content: 'Kami adalah perusahaan yang berdedikasi untuk memberikan solusi terbaik kepada pelanggan kami. Dengan tim yang berpengalaman dan teknologi terkini, kami siap membantu bisnis Anda tumbuh dan berkembang.', fontSize: '16px', color: '#475569', lineHeight: '1.8', margin: '24px 0 0 0' } },
    { id: 'ab5-btn', type: 'button', props: { label: 'Pelajari Lebih Lanjut', href: '#', variant: 'primary', background: '#4f46e5', color: '#ffffff' } },
  ],



  'faq-01': [
    { id: 'faq1-badge', type: 'badge', props: { content: 'FAQ', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'faq1-heading', type: 'heading', props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq1-text', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum dari pelanggan kami.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'faq1-cta', type: 'button', props: { label: 'Hubungi Kami', href: '#kontak', variant: 'primary', size: 'medium', radius: 'full', background: '#4f46e5', color: '#ffffff' } },
    { id: 'faq1-item-1', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq1-i1-q', type: 'heading', props: { content: 'Layanan apa yang tersedia untuk bisnis kami?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq1-i1-a', type: 'text', props: { content: 'Konsultasi, implementasi, pelatihan, dan dukungan purna jual.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq1-i1-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq1-item-2', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq1-i2-q', type: 'heading', props: { content: 'Berapa lama proses implementasi?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq1-i2-a', type: 'text', props: { content: 'Implementasi 2-8 minggu tergantung skala kebutuhan.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq1-i2-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq1-item-3', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq1-i3-q', type: 'heading', props: { content: 'Apakah ada paket harga fleksibel?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq1-i3-a', type: 'text', props: { content: 'Ya, tersedia paket UMKM, menengah, hingga enterprise.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq1-i3-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq1-item-4', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq1-i4-q', type: 'heading', props: { content: 'Bagaimana dukungan teknis bekerja?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq1-i4-a', type: 'text', props: { content: 'Dukungan 24/7 via live chat, email, dan telepon.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq1-i4-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
  ],
  'faq-02': [
    { id: 'faq2-badge', type: 'badge', props: { content: 'FAQ', background: '#1c1917', color: '#e7c873' } },
    { id: 'faq2-heading', type: 'heading', props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq2-text', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum dari pelanggan kami.', fontSize: '15px', color: '#a8a29e', align: 'center', margin: '0 0 20px 0' } },
    { id: 'faq2-cta', type: 'button', props: { label: 'Hubungi Kami', href: '#kontak', variant: 'primary', size: 'medium', radius: 'full', background: '#e7c873', color: '#1c1917' } },
    { id: 'faq2-item-1', type: 'card', props: { variant: 'faq', background: '#1c1917', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq2-i1-q', type: 'heading', props: { content: 'Layanan apa yang tersedia untuk bisnis kami?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px 0' } }, { id: 'faq2-i1-a', type: 'text', props: { content: 'Konsultasi, implementasi, pelatihan, dan dukungan purna jual.', fontSize: '14px', color: '#a8a29e', margin: '0' } }, { id: 'faq2-i1-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#a8a29e' } } ] },
    { id: 'faq2-item-2', type: 'card', props: { variant: 'faq', background: '#1c1917', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq2-i2-q', type: 'heading', props: { content: 'Berapa lama proses implementasi?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px 0' } }, { id: 'faq2-i2-a', type: 'text', props: { content: 'Implementasi 2-8 minggu tergantung skala kebutuhan.', fontSize: '14px', color: '#a8a29e', margin: '0' } }, { id: 'faq2-i2-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#a8a29e' } } ] },
    { id: 'faq2-item-3', type: 'card', props: { variant: 'faq', background: '#1c1917', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq2-i3-q', type: 'heading', props: { content: 'Apakah ada paket harga fleksibel?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px 0' } }, { id: 'faq2-i3-a', type: 'text', props: { content: 'Ya, tersedia paket UMKM, menengah, hingga enterprise.', fontSize: '14px', color: '#a8a29e', margin: '0' } }, { id: 'faq2-i3-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#a8a29e' } } ] },
    { id: 'faq2-item-4', type: 'card', props: { variant: 'faq', background: '#1c1917', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq2-i4-q', type: 'heading', props: { content: 'Bagaimana dukungan teknis bekerja?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px 0' } }, { id: 'faq2-i4-a', type: 'text', props: { content: 'Dukungan 24/7 via live chat, email, dan telepon.', fontSize: '14px', color: '#a8a29e', margin: '0' } }, { id: 'faq2-i4-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#a8a29e' } } ] },
  ],
  'faq-03': [
    { id: 'faq3-badge', type: 'badge', props: { content: 'FAQ', background: '#fff7ed', color: '#ea580c' } },
    { id: 'faq3-heading', type: 'heading', props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq3-text', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum dari pelanggan kami.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'faq3-cta', type: 'button', props: { label: 'Hubungi Kami', href: '#kontak', variant: 'primary', size: 'medium', radius: 'full', background: '#ea580c', color: '#ffffff' } },
    { id: 'faq3-item-1', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq3-i1-q', type: 'heading', props: { content: 'Layanan apa yang tersedia untuk bisnis kami?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq3-i1-a', type: 'text', props: { content: 'Konsultasi, implementasi, pelatihan, dan dukungan purna jual.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq3-i1-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq3-item-2', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq3-i2-q', type: 'heading', props: { content: 'Berapa lama proses implementasi?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq3-i2-a', type: 'text', props: { content: 'Implementasi 2-8 minggu tergantung skala kebutuhan.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq3-i2-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq3-item-3', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq3-i3-q', type: 'heading', props: { content: 'Apakah ada paket harga fleksibel?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq3-i3-a', type: 'text', props: { content: 'Ya, tersedia paket UMKM, menengah, hingga enterprise.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq3-i3-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq3-item-4', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq3-i4-q', type: 'heading', props: { content: 'Bagaimana dukungan teknis bekerja?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq3-i4-a', type: 'text', props: { content: 'Dukungan 24/7 via live chat, email, dan telepon.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq3-i4-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
  ],
  'faq-04': [
    { id: 'faq4-badge', type: 'badge', props: { content: 'FAQ', background: '#000000', color: '#facc15' } },
    { id: 'faq4-heading', type: 'heading', props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#000000', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq4-text', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum dari pelanggan kami.', fontSize: '15px', color: '#000000', align: 'center', margin: '0 0 20px 0' } },
    { id: 'faq4-cta', type: 'button', props: { label: 'Hubungi Kami', href: '#kontak', variant: 'primary', size: 'medium', radius: 'full', background: '#000000', color: '#facc15' } },
    { id: 'faq4-item-1', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#000000', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq4-i1-q', type: 'heading', props: { content: 'Layanan apa yang tersedia untuk bisnis kami?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#000000', margin: '0 0 10px 0' } }, { id: 'faq4-i1-a', type: 'text', props: { content: 'Konsultasi, implementasi, pelatihan, dan dukungan purna jual.', fontSize: '14px', color: '#000000', margin: '0' } }, { id: 'faq4-i1-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#000000' } } ] },
    { id: 'faq4-item-2', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#000000', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq4-i2-q', type: 'heading', props: { content: 'Berapa lama proses implementasi?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#000000', margin: '0 0 10px 0' } }, { id: 'faq4-i2-a', type: 'text', props: { content: 'Implementasi 2-8 minggu tergantung skala kebutuhan.', fontSize: '14px', color: '#000000', margin: '0' } }, { id: 'faq4-i2-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#000000' } } ] },
    { id: 'faq4-item-3', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#000000', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq4-i3-q', type: 'heading', props: { content: 'Apakah ada paket harga fleksibel?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#000000', margin: '0 0 10px 0' } }, { id: 'faq4-i3-a', type: 'text', props: { content: 'Ya, tersedia paket UMKM, menengah, hingga enterprise.', fontSize: '14px', color: '#000000', margin: '0' } }, { id: 'faq4-i3-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#000000' } } ] },
    { id: 'faq4-item-4', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#000000', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq4-i4-q', type: 'heading', props: { content: 'Bagaimana dukungan teknis bekerja?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#000000', margin: '0 0 10px 0' } }, { id: 'faq4-i4-a', type: 'text', props: { content: 'Dukungan 24/7 via live chat, email, dan telepon.', fontSize: '14px', color: '#000000', margin: '0' } }, { id: 'faq4-i4-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#000000' } } ] },
  ],
  'faq-05': [
    { id: 'faq5-badge', type: 'badge', props: { content: 'FAQ', background: '#ffffff', color: '#78716c' } },
    { id: 'faq5-heading', type: 'heading', props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#1c1917', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq5-text', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum dari pelanggan kami.', fontSize: '15px', color: '#78716c', align: 'center', margin: '0 0 20px 0' } },
    { id: 'faq5-cta', type: 'button', props: { label: 'Hubungi Kami', href: '#kontak', variant: 'primary', size: 'medium', radius: 'full', background: '#1c1917', color: '#ffffff' } },
    { id: 'faq5-item-1', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq5-i1-q', type: 'heading', props: { content: 'Layanan apa yang tersedia untuk bisnis kami?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#1c1917', margin: '0 0 10px 0' } }, { id: 'faq5-i1-a', type: 'text', props: { content: 'Konsultasi, implementasi, pelatihan, dan dukungan purna jual.', fontSize: '14px', color: '#78716c', margin: '0' } }, { id: 'faq5-i1-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#78716c' } } ] },
    { id: 'faq5-item-2', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq5-i2-q', type: 'heading', props: { content: 'Berapa lama proses implementasi?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#1c1917', margin: '0 0 10px 0' } }, { id: 'faq5-i2-a', type: 'text', props: { content: 'Implementasi 2-8 minggu tergantung skala kebutuhan.', fontSize: '14px', color: '#78716c', margin: '0' } }, { id: 'faq5-i2-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#78716c' } } ] },
    { id: 'faq5-item-3', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq5-i3-q', type: 'heading', props: { content: 'Apakah ada paket harga fleksibel?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#1c1917', margin: '0 0 10px 0' } }, { id: 'faq5-i3-a', type: 'text', props: { content: 'Ya, tersedia paket UMKM, menengah, hingga enterprise.', fontSize: '14px', color: '#78716c', margin: '0' } }, { id: 'faq5-i3-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#78716c' } } ] },
    { id: 'faq5-item-4', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq5-i4-q', type: 'heading', props: { content: 'Bagaimana dukungan teknis bekerja?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#1c1917', margin: '0 0 10px 0' } }, { id: 'faq5-i4-a', type: 'text', props: { content: 'Dukungan 24/7 via live chat, email, dan telepon.', fontSize: '14px', color: '#78716c', margin: '0' } }, { id: 'faq5-i4-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#78716c' } } ] },
  ],
  'faq-06': [
    { id: 'faq6-badge', type: 'badge', props: { content: 'FAQ', background: '#1e1b4b', color: '#a5b4fc' } },
    { id: 'faq6-heading', type: 'heading', props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq6-text', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum dari pelanggan kami.', fontSize: '15px', color: '#a5b4fc', align: 'center', margin: '0 0 20px 0' } },
    { id: 'faq6-cta', type: 'button', props: { label: 'Hubungi Kami', href: '#kontak', variant: 'primary', size: 'medium', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
    { id: 'faq6-item-1', type: 'card', props: { variant: 'faq', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq6-i1-q', type: 'heading', props: { content: 'Layanan apa yang tersedia untuk bisnis kami?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px 0' } }, { id: 'faq6-i1-a', type: 'text', props: { content: 'Konsultasi, implementasi, pelatihan, dan dukungan purna jual.', fontSize: '14px', color: '#a5b4fc', margin: '0' } }, { id: 'faq6-i1-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#a5b4fc' } } ] },
    { id: 'faq6-item-2', type: 'card', props: { variant: 'faq', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq6-i2-q', type: 'heading', props: { content: 'Berapa lama proses implementasi?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px 0' } }, { id: 'faq6-i2-a', type: 'text', props: { content: 'Implementasi 2-8 minggu tergantung skala kebutuhan.', fontSize: '14px', color: '#a5b4fc', margin: '0' } }, { id: 'faq6-i2-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#a5b4fc' } } ] },
    { id: 'faq6-item-3', type: 'card', props: { variant: 'faq', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq6-i3-q', type: 'heading', props: { content: 'Apakah ada paket harga fleksibel?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px 0' } }, { id: 'faq6-i3-a', type: 'text', props: { content: 'Ya, tersedia paket UMKM, menengah, hingga enterprise.', fontSize: '14px', color: '#a5b4fc', margin: '0' } }, { id: 'faq6-i3-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#a5b4fc' } } ] },
    { id: 'faq6-item-4', type: 'card', props: { variant: 'faq', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq6-i4-q', type: 'heading', props: { content: 'Bagaimana dukungan teknis bekerja?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px 0' } }, { id: 'faq6-i4-a', type: 'text', props: { content: 'Dukungan 24/7 via live chat, email, dan telepon.', fontSize: '14px', color: '#a5b4fc', margin: '0' } }, { id: 'faq6-i4-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#a5b4fc' } } ] },
  ],
  'faq-07': [
    { id: 'faq7-badge', type: 'badge', props: { content: 'FAQ', background: '#052e16', color: '#4ade80' } },
    { id: 'faq7-heading', type: 'heading', props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#e2e8f0', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq7-text', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum dari pelanggan kami.', fontSize: '15px', color: '#94a3b8', align: 'center', margin: '0 0 20px 0' } },
    { id: 'faq7-cta', type: 'button', props: { label: 'Hubungi Kami', href: '#kontak', variant: 'primary', size: 'medium', radius: 'full', background: '#22c55e', color: '#052e16' } },
    { id: 'faq7-item-1', type: 'card', props: { variant: 'faq', background: '#0f172a', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq7-i1-q', type: 'heading', props: { content: 'Layanan apa yang tersedia untuk bisnis kami?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#e2e8f0', margin: '0 0 10px 0' } }, { id: 'faq7-i1-a', type: 'text', props: { content: 'Konsultasi, implementasi, pelatihan, dan dukungan purna jual.', fontSize: '14px', color: '#94a3b8', margin: '0' } }, { id: 'faq7-i1-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } } ] },
    { id: 'faq7-item-2', type: 'card', props: { variant: 'faq', background: '#0f172a', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq7-i2-q', type: 'heading', props: { content: 'Berapa lama proses implementasi?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#e2e8f0', margin: '0 0 10px 0' } }, { id: 'faq7-i2-a', type: 'text', props: { content: 'Implementasi 2-8 minggu tergantung skala kebutuhan.', fontSize: '14px', color: '#94a3b8', margin: '0' } }, { id: 'faq7-i2-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } } ] },
    { id: 'faq7-item-3', type: 'card', props: { variant: 'faq', background: '#0f172a', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq7-i3-q', type: 'heading', props: { content: 'Apakah ada paket harga fleksibel?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#e2e8f0', margin: '0 0 10px 0' } }, { id: 'faq7-i3-a', type: 'text', props: { content: 'Ya, tersedia paket UMKM, menengah, hingga enterprise.', fontSize: '14px', color: '#94a3b8', margin: '0' } }, { id: 'faq7-i3-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } } ] },
    { id: 'faq7-item-4', type: 'card', props: { variant: 'faq', background: '#0f172a', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq7-i4-q', type: 'heading', props: { content: 'Bagaimana dukungan teknis bekerja?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#e2e8f0', margin: '0 0 10px 0' } }, { id: 'faq7-i4-a', type: 'text', props: { content: 'Dukungan 24/7 via live chat, email, dan telepon.', fontSize: '14px', color: '#94a3b8', margin: '0' } }, { id: 'faq7-i4-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } } ] },
  ],
  'faq-08': [
    { id: 'faq8-badge', type: 'badge', props: { content: 'FAQ', background: '#fce7f3', color: '#be185d' } },
    { id: 'faq8-heading', type: 'heading', props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#831843', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq8-text', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum dari pelanggan kami.', fontSize: '15px', color: '#9d7b8c', align: 'center', margin: '0 0 20px 0' } },
    { id: 'faq8-cta', type: 'button', props: { label: 'Hubungi Kami', href: '#kontak', variant: 'primary', size: 'medium', radius: 'full', background: '#db2777', color: '#ffffff' } },
    { id: 'faq8-item-1', type: 'card', props: { variant: 'faq', background: '#fff1f2', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq8-i1-q', type: 'heading', props: { content: 'Layanan apa yang tersedia untuk bisnis kami?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#831843', margin: '0 0 10px 0' } }, { id: 'faq8-i1-a', type: 'text', props: { content: 'Konsultasi, implementasi, pelatihan, dan dukungan purna jual.', fontSize: '14px', color: '#9d7b8c', margin: '0' } }, { id: 'faq8-i1-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#9d7b8c' } } ] },
    { id: 'faq8-item-2', type: 'card', props: { variant: 'faq', background: '#fff1f2', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq8-i2-q', type: 'heading', props: { content: 'Berapa lama proses implementasi?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#831843', margin: '0 0 10px 0' } }, { id: 'faq8-i2-a', type: 'text', props: { content: 'Implementasi 2-8 minggu tergantung skala kebutuhan.', fontSize: '14px', color: '#9d7b8c', margin: '0' } }, { id: 'faq8-i2-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#9d7b8c' } } ] },
    { id: 'faq8-item-3', type: 'card', props: { variant: 'faq', background: '#fff1f2', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq8-i3-q', type: 'heading', props: { content: 'Apakah ada paket harga fleksibel?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#831843', margin: '0 0 10px 0' } }, { id: 'faq8-i3-a', type: 'text', props: { content: 'Ya, tersedia paket UMKM, menengah, hingga enterprise.', fontSize: '14px', color: '#9d7b8c', margin: '0' } }, { id: 'faq8-i3-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#9d7b8c' } } ] },
    { id: 'faq8-item-4', type: 'card', props: { variant: 'faq', background: '#fff1f2', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq8-i4-q', type: 'heading', props: { content: 'Bagaimana dukungan teknis bekerja?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#831843', margin: '0 0 10px 0' } }, { id: 'faq8-i4-a', type: 'text', props: { content: 'Dukungan 24/7 via live chat, email, dan telepon.', fontSize: '14px', color: '#9d7b8c', margin: '0' } }, { id: 'faq8-i4-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#9d7b8c' } } ] },
  ],
  'faq-09': [
    { id: 'faq9-badge', type: 'badge', props: { content: 'FAQ', background: '#78350f', color: '#fde68a' } },
    { id: 'faq9-heading', type: 'heading', props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#78350f', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq9-text', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum dari pelanggan kami.', fontSize: '15px', color: '#92400e', align: 'center', margin: '0 0 20px 0' } },
    { id: 'faq9-cta', type: 'button', props: { label: 'Hubungi Kami', href: '#kontak', variant: 'primary', size: 'medium', radius: 'full', background: '#92400e', color: '#fef3c7' } },
    { id: 'faq9-item-1', type: 'card', props: { variant: 'faq', background: '#fffbeb', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq9-i1-q', type: 'heading', props: { content: 'Layanan apa yang tersedia untuk bisnis kami?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#78350f', margin: '0 0 10px 0' } }, { id: 'faq9-i1-a', type: 'text', props: { content: 'Konsultasi, implementasi, pelatihan, dan dukungan purna jual.', fontSize: '14px', color: '#92400e', margin: '0' } }, { id: 'faq9-i1-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#92400e' } } ] },
    { id: 'faq9-item-2', type: 'card', props: { variant: 'faq', background: '#fffbeb', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq9-i2-q', type: 'heading', props: { content: 'Berapa lama proses implementasi?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#78350f', margin: '0 0 10px 0' } }, { id: 'faq9-i2-a', type: 'text', props: { content: 'Implementasi 2-8 minggu tergantung skala kebutuhan.', fontSize: '14px', color: '#92400e', margin: '0' } }, { id: 'faq9-i2-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#92400e' } } ] },
    { id: 'faq9-item-3', type: 'card', props: { variant: 'faq', background: '#fffbeb', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq9-i3-q', type: 'heading', props: { content: 'Apakah ada paket harga fleksibel?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#78350f', margin: '0 0 10px 0' } }, { id: 'faq9-i3-a', type: 'text', props: { content: 'Ya, tersedia paket UMKM, menengah, hingga enterprise.', fontSize: '14px', color: '#92400e', margin: '0' } }, { id: 'faq9-i3-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#92400e' } } ] },
    { id: 'faq9-item-4', type: 'card', props: { variant: 'faq', background: '#fffbeb', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq9-i4-q', type: 'heading', props: { content: 'Bagaimana dukungan teknis bekerja?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#78350f', margin: '0 0 10px 0' } }, { id: 'faq9-i4-a', type: 'text', props: { content: 'Dukungan 24/7 via live chat, email, dan telepon.', fontSize: '14px', color: '#92400e', margin: '0' } }, { id: 'faq9-i4-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#92400e' } } ] },
  ],
  'faq-10': [
    { id: 'faq10-badge', type: 'badge', props: { content: 'FAQ', background: '#fef2f2', color: '#dc2626' } },
    { id: 'faq10-heading', type: 'heading', props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq10-text', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum dari pelanggan kami.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'faq10-cta', type: 'button', props: { label: 'Hubungi Kami', href: '#kontak', variant: 'primary', size: 'medium', radius: 'full', background: '#dc2626', color: '#ffffff' } },
    { id: 'faq10-item-1', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq10-i1-q', type: 'heading', props: { content: 'Layanan apa yang tersedia untuk bisnis kami?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq10-i1-a', type: 'text', props: { content: 'Konsultasi, implementasi, pelatihan, dan dukungan purna jual.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq10-i1-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq10-item-2', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq10-i2-q', type: 'heading', props: { content: 'Berapa lama proses implementasi?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq10-i2-a', type: 'text', props: { content: 'Implementasi 2-8 minggu tergantung skala kebutuhan.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq10-i2-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq10-item-3', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq10-i3-q', type: 'heading', props: { content: 'Apakah ada paket harga fleksibel?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq10-i3-a', type: 'text', props: { content: 'Ya, tersedia paket UMKM, menengah, hingga enterprise.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq10-i3-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq10-item-4', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq10-i4-q', type: 'heading', props: { content: 'Bagaimana dukungan teknis bekerja?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq10-i4-a', type: 'text', props: { content: 'Dukungan 24/7 via live chat, email, dan telepon.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq10-i4-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
  ],
  'faq-11': [
    { id: 'faq11-badge', type: 'badge', props: { content: 'FAQ', background: '#ffffff', color: '#7c3aed' } },
    { id: 'faq11-heading', type: 'heading', props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq11-text', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum dari pelanggan kami.', fontSize: '15px', color: '#ddd6fe', align: 'center', margin: '0 0 20px 0' } },
    { id: 'faq11-cta', type: 'button', props: { label: 'Hubungi Kami', href: '#kontak', variant: 'primary', size: 'medium', radius: 'full', background: '#ffffff', color: '#6d28d9' } },
    { id: 'faq11-item-1', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq11-i1-q', type: 'heading', props: { content: 'Layanan apa yang tersedia untuk bisnis kami?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq11-i1-a', type: 'text', props: { content: 'Konsultasi, implementasi, pelatihan, dan dukungan purna jual.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq11-i1-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq11-item-2', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq11-i2-q', type: 'heading', props: { content: 'Berapa lama proses implementasi?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq11-i2-a', type: 'text', props: { content: 'Implementasi 2-8 minggu tergantung skala kebutuhan.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq11-i2-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq11-item-3', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq11-i3-q', type: 'heading', props: { content: 'Apakah ada paket harga fleksibel?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq11-i3-a', type: 'text', props: { content: 'Ya, tersedia paket UMKM, menengah, hingga enterprise.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq11-i3-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq11-item-4', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq11-i4-q', type: 'heading', props: { content: 'Bagaimana dukungan teknis bekerja?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq11-i4-a', type: 'text', props: { content: 'Dukungan 24/7 via live chat, email, dan telepon.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq11-i4-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
  ],
  'faq-12': [
    { id: 'faq12-badge', type: 'badge', props: { content: 'FAQ', background: '#0f172a', color: '#38bdf8' } },
    { id: 'faq12-heading', type: 'heading', props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq12-text', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum dari pelanggan kami.', fontSize: '15px', color: '#94a3b8', align: 'center', margin: '0 0 20px 0' } },
    { id: 'faq12-cta', type: 'button', props: { label: 'Hubungi Kami', href: '#kontak', variant: 'primary', size: 'medium', radius: 'full', background: '#38bdf8', color: '#082f49' } },
    { id: 'faq12-item-1', type: 'card', props: { variant: 'faq', background: '#1e293b', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq12-i1-q', type: 'heading', props: { content: 'Layanan apa yang tersedia untuk bisnis kami?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px 0' } }, { id: 'faq12-i1-a', type: 'text', props: { content: 'Konsultasi, implementasi, pelatihan, dan dukungan purna jual.', fontSize: '14px', color: '#94a3b8', margin: '0' } }, { id: 'faq12-i1-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } } ] },
    { id: 'faq12-item-2', type: 'card', props: { variant: 'faq', background: '#1e293b', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq12-i2-q', type: 'heading', props: { content: 'Berapa lama proses implementasi?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px 0' } }, { id: 'faq12-i2-a', type: 'text', props: { content: 'Implementasi 2-8 minggu tergantung skala kebutuhan.', fontSize: '14px', color: '#94a3b8', margin: '0' } }, { id: 'faq12-i2-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } } ] },
    { id: 'faq12-item-3', type: 'card', props: { variant: 'faq', background: '#1e293b', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq12-i3-q', type: 'heading', props: { content: 'Apakah ada paket harga fleksibel?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px 0' } }, { id: 'faq12-i3-a', type: 'text', props: { content: 'Ya, tersedia paket UMKM, menengah, hingga enterprise.', fontSize: '14px', color: '#94a3b8', margin: '0' } }, { id: 'faq12-i3-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } } ] },
    { id: 'faq12-item-4', type: 'card', props: { variant: 'faq', background: '#1e293b', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq12-i4-q', type: 'heading', props: { content: 'Bagaimana dukungan teknis bekerja?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px 0' } }, { id: 'faq12-i4-a', type: 'text', props: { content: 'Dukungan 24/7 via live chat, email, dan telepon.', fontSize: '14px', color: '#94a3b8', margin: '0' } }, { id: 'faq12-i4-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } } ] },
  ],
  'faq-13': [
    { id: 'faq13-badge', type: 'badge', props: { content: 'FAQ', background: '#fce7f3', color: '#ec4899' } },
    { id: 'faq13-heading', type: 'heading', props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq13-text', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum dari pelanggan kami.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'faq13-cta', type: 'button', props: { label: 'Hubungi Kami', href: '#kontak', variant: 'primary', size: 'medium', radius: 'full', background: '#ec4899', color: '#ffffff' } },
    { id: 'faq13-item-1', type: 'card', props: { variant: 'faq', background: '#fff1f2', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq13-i1-q', type: 'heading', props: { content: 'Layanan apa yang tersedia untuk bisnis kami?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq13-i1-a', type: 'text', props: { content: 'Konsultasi, implementasi, pelatihan, dan dukungan purna jual.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq13-i1-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq13-item-2', type: 'card', props: { variant: 'faq', background: '#fff1f2', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq13-i2-q', type: 'heading', props: { content: 'Berapa lama proses implementasi?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq13-i2-a', type: 'text', props: { content: 'Implementasi 2-8 minggu tergantung skala kebutuhan.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq13-i2-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq13-item-3', type: 'card', props: { variant: 'faq', background: '#fff1f2', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq13-i3-q', type: 'heading', props: { content: 'Apakah ada paket harga fleksibel?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq13-i3-a', type: 'text', props: { content: 'Ya, tersedia paket UMKM, menengah, hingga enterprise.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq13-i3-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq13-item-4', type: 'card', props: { variant: 'faq', background: '#fff1f2', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq13-i4-q', type: 'heading', props: { content: 'Bagaimana dukungan teknis bekerja?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq13-i4-a', type: 'text', props: { content: 'Dukungan 24/7 via live chat, email, dan telepon.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq13-i4-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
  ],
  'faq-14': [
    { id: 'faq14-badge', type: 'badge', props: { content: 'FAQ', background: '#eff6ff', color: '#1d4ed8' } },
    { id: 'faq14-heading', type: 'heading', props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq14-text', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum dari pelanggan kami.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'faq14-cta', type: 'button', props: { label: 'Hubungi Kami', href: '#kontak', variant: 'primary', size: 'medium', radius: 'full', background: '#1e40af', color: '#ffffff' } },
    { id: 'faq14-item-1', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq14-i1-q', type: 'heading', props: { content: 'Layanan apa yang tersedia untuk bisnis kami?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq14-i1-a', type: 'text', props: { content: 'Konsultasi, implementasi, pelatihan, dan dukungan purna jual.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq14-i1-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq14-item-2', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq14-i2-q', type: 'heading', props: { content: 'Berapa lama proses implementasi?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq14-i2-a', type: 'text', props: { content: 'Implementasi 2-8 minggu tergantung skala kebutuhan.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq14-i2-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq14-item-3', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq14-i3-q', type: 'heading', props: { content: 'Apakah ada paket harga fleksibel?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq14-i3-a', type: 'text', props: { content: 'Ya, tersedia paket UMKM, menengah, hingga enterprise.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq14-i3-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq14-item-4', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq14-i4-q', type: 'heading', props: { content: 'Bagaimana dukungan teknis bekerja?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq14-i4-a', type: 'text', props: { content: 'Dukungan 24/7 via live chat, email, dan telepon.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq14-i4-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
  ],
  'faq-15': [
    { id: 'faq15-badge', type: 'badge', props: { content: 'FAQ', background: '#0f172a', color: '#ffffff' } },
    { id: 'faq15-heading', type: 'heading', props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq15-text', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum dari pelanggan kami.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'faq15-cta', type: 'button', props: { label: 'Hubungi Kami', href: '#kontak', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    { id: 'faq15-item-1', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq15-i1-q', type: 'heading', props: { content: 'Layanan apa yang tersedia untuk bisnis kami?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq15-i1-a', type: 'text', props: { content: 'Konsultasi, implementasi, pelatihan, dan dukungan purna jual.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq15-i1-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq15-item-2', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq15-i2-q', type: 'heading', props: { content: 'Berapa lama proses implementasi?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq15-i2-a', type: 'text', props: { content: 'Implementasi 2-8 minggu tergantung skala kebutuhan.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq15-i2-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq15-item-3', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq15-i3-q', type: 'heading', props: { content: 'Apakah ada paket harga fleksibel?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq15-i3-a', type: 'text', props: { content: 'Ya, tersedia paket UMKM, menengah, hingga enterprise.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq15-i3-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq15-item-4', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq15-i4-q', type: 'heading', props: { content: 'Bagaimana dukungan teknis bekerja?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq15-i4-a', type: 'text', props: { content: 'Dukungan 24/7 via live chat, email, dan telepon.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq15-i4-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
  ],
  'faq-16': [
    { id: 'faq16-badge', type: 'badge', props: { content: 'FAQ', background: '#dcfce7', color: '#166534' } },
    { id: 'faq16-heading', type: 'heading', props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#064e3b', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq16-text', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum dari pelanggan kami.', fontSize: '15px', color: '#4d7c0f', align: 'center', margin: '0 0 20px 0' } },
    { id: 'faq16-cta', type: 'button', props: { label: 'Hubungi Kami', href: '#kontak', variant: 'primary', size: 'medium', radius: 'full', background: '#16a34a', color: '#ffffff' } },
    { id: 'faq16-item-1', type: 'card', props: { variant: 'faq', background: '#f0fdf4', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq16-i1-q', type: 'heading', props: { content: 'Layanan apa yang tersedia untuk bisnis kami?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#064e3b', margin: '0 0 10px 0' } }, { id: 'faq16-i1-a', type: 'text', props: { content: 'Konsultasi, implementasi, pelatihan, dan dukungan purna jual.', fontSize: '14px', color: '#166534', margin: '0' } }, { id: 'faq16-i1-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#166534' } } ] },
    { id: 'faq16-item-2', type: 'card', props: { variant: 'faq', background: '#f0fdf4', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq16-i2-q', type: 'heading', props: { content: 'Berapa lama proses implementasi?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#064e3b', margin: '0 0 10px 0' } }, { id: 'faq16-i2-a', type: 'text', props: { content: 'Implementasi 2-8 minggu tergantung skala kebutuhan.', fontSize: '14px', color: '#166534', margin: '0' } }, { id: 'faq16-i2-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#166534' } } ] },
    { id: 'faq16-item-3', type: 'card', props: { variant: 'faq', background: '#f0fdf4', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq16-i3-q', type: 'heading', props: { content: 'Apakah ada paket harga fleksibel?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#064e3b', margin: '0 0 10px 0' } }, { id: 'faq16-i3-a', type: 'text', props: { content: 'Ya, tersedia paket UMKM, menengah, hingga enterprise.', fontSize: '14px', color: '#166534', margin: '0' } }, { id: 'faq16-i3-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#166534' } } ] },
    { id: 'faq16-item-4', type: 'card', props: { variant: 'faq', background: '#f0fdf4', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq16-i4-q', type: 'heading', props: { content: 'Bagaimana dukungan teknis bekerja?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#064e3b', margin: '0 0 10px 0' } }, { id: 'faq16-i4-a', type: 'text', props: { content: 'Dukungan 24/7 via live chat, email, dan telepon.', fontSize: '14px', color: '#166534', margin: '0' } }, { id: 'faq16-i4-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#166534' } } ] },
  ],
  'faq-17': [
    { id: 'faq17-badge', type: 'badge', props: { content: 'FAQ', background: '#dc2626', color: '#ffffff' } },
    { id: 'faq17-heading', type: 'heading', props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq17-text', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum dari pelanggan kami.', fontSize: '15px', color: '#fecaca', align: 'center', margin: '0 0 20px 0' } },
    { id: 'faq17-cta', type: 'button', props: { label: 'Hubungi Kami', href: '#kontak', variant: 'primary', size: 'medium', radius: 'full', background: '#dc2626', color: '#ffffff' } },
    { id: 'faq17-item-1', type: 'card', props: { variant: 'faq', background: '#171717', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq17-i1-q', type: 'heading', props: { content: 'Layanan apa yang tersedia untuk bisnis kami?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px 0' } }, { id: 'faq17-i1-a', type: 'text', props: { content: 'Konsultasi, implementasi, pelatihan, dan dukungan purna jual.', fontSize: '14px', color: '#fecaca', margin: '0' } }, { id: 'faq17-i1-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#fecaca' } } ] },
    { id: 'faq17-item-2', type: 'card', props: { variant: 'faq', background: '#171717', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq17-i2-q', type: 'heading', props: { content: 'Berapa lama proses implementasi?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px 0' } }, { id: 'faq17-i2-a', type: 'text', props: { content: 'Implementasi 2-8 minggu tergantung skala kebutuhan.', fontSize: '14px', color: '#fecaca', margin: '0' } }, { id: 'faq17-i2-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#fecaca' } } ] },
    { id: 'faq17-item-3', type: 'card', props: { variant: 'faq', background: '#171717', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq17-i3-q', type: 'heading', props: { content: 'Apakah ada paket harga fleksibel?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px 0' } }, { id: 'faq17-i3-a', type: 'text', props: { content: 'Ya, tersedia paket UMKM, menengah, hingga enterprise.', fontSize: '14px', color: '#fecaca', margin: '0' } }, { id: 'faq17-i3-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#fecaca' } } ] },
    { id: 'faq17-item-4', type: 'card', props: { variant: 'faq', background: '#171717', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq17-i4-q', type: 'heading', props: { content: 'Bagaimana dukungan teknis bekerja?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px 0' } }, { id: 'faq17-i4-a', type: 'text', props: { content: 'Dukungan 24/7 via live chat, email, dan telepon.', fontSize: '14px', color: '#fecaca', margin: '0' } }, { id: 'faq17-i4-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#fecaca' } } ] },
  ],
  'faq-18': [
    { id: 'faq18-badge', type: 'badge', props: { content: 'FAQ', background: '#fff7ed', color: '#ea580c' } },
    { id: 'faq18-heading', type: 'heading', props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq18-text', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum dari pelanggan kami.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'faq18-cta', type: 'button', props: { label: 'Hubungi Kami', href: '#kontak', variant: 'primary', size: 'medium', radius: 'full', background: '#f97316', color: '#ffffff' } },
    { id: 'faq18-item-1', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq18-i1-q', type: 'heading', props: { content: 'Layanan apa yang tersedia untuk bisnis kami?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq18-i1-a', type: 'text', props: { content: 'Konsultasi, implementasi, pelatihan, dan dukungan purna jual.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq18-i1-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq18-item-2', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq18-i2-q', type: 'heading', props: { content: 'Berapa lama proses implementasi?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq18-i2-a', type: 'text', props: { content: 'Implementasi 2-8 minggu tergantung skala kebutuhan.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq18-i2-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq18-item-3', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq18-i3-q', type: 'heading', props: { content: 'Apakah ada paket harga fleksibel?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq18-i3-a', type: 'text', props: { content: 'Ya, tersedia paket UMKM, menengah, hingga enterprise.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq18-i3-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq18-item-4', type: 'card', props: { variant: 'faq', background: '#ffffff', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq18-i4-q', type: 'heading', props: { content: 'Bagaimana dukungan teknis bekerja?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq18-i4-a', type: 'text', props: { content: 'Dukungan 24/7 via live chat, email, dan telepon.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq18-i4-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
  ],
  'faq-19': [
    { id: 'faq19-badge', type: 'badge', props: { content: 'FAQ', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'faq19-heading', type: 'heading', props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq19-text', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum dari pelanggan kami.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'faq19-cta', type: 'button', props: { label: 'Hubungi Kami', href: '#kontak', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    { id: 'faq19-item-1', type: 'card', props: { variant: 'faq', background: 'rgba(255,255,255,0.85)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq19-i1-q', type: 'heading', props: { content: 'Layanan apa yang tersedia untuk bisnis kami?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq19-i1-a', type: 'text', props: { content: 'Konsultasi, implementasi, pelatihan, dan dukungan purna jual.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq19-i1-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq19-item-2', type: 'card', props: { variant: 'faq', background: 'rgba(255,255,255,0.85)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq19-i2-q', type: 'heading', props: { content: 'Berapa lama proses implementasi?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq19-i2-a', type: 'text', props: { content: 'Implementasi 2-8 minggu tergantung skala kebutuhan.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq19-i2-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq19-item-3', type: 'card', props: { variant: 'faq', background: 'rgba(255,255,255,0.85)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq19-i3-q', type: 'heading', props: { content: 'Apakah ada paket harga fleksibel?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq19-i3-a', type: 'text', props: { content: 'Ya, tersedia paket UMKM, menengah, hingga enterprise.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq19-i3-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
    { id: 'faq19-item-4', type: 'card', props: { variant: 'faq', background: 'rgba(255,255,255,0.85)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq19-i4-q', type: 'heading', props: { content: 'Bagaimana dukungan teknis bekerja?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } }, { id: 'faq19-i4-a', type: 'text', props: { content: 'Dukungan 24/7 via live chat, email, dan telepon.', fontSize: '14px', color: '#64748b', margin: '0' } }, { id: 'faq19-i4-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#64748b' } } ] },
  ],
  'faq-20': [
    { id: 'faq20-badge', type: 'badge', props: { content: 'FAQ', background: '#1e1b4b', color: '#c4b5fd' } },
    { id: 'faq20-heading', type: 'heading', props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq20-text', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum dari pelanggan kami.', fontSize: '15px', color: '#a5b4fc', align: 'center', margin: '0 0 20px 0' } },
    { id: 'faq20-cta', type: 'button', props: { label: 'Hubungi Kami', href: '#kontak', variant: 'primary', size: 'medium', radius: 'full', background: '#6366f1', color: '#ffffff' } },
    { id: 'faq20-item-1', type: 'card', props: { variant: 'faq', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq20-i1-q', type: 'heading', props: { content: 'Layanan apa yang tersedia untuk bisnis kami?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px 0' } }, { id: 'faq20-i1-a', type: 'text', props: { content: 'Konsultasi, implementasi, pelatihan, dan dukungan purna jual.', fontSize: '14px', color: '#a5b4fc', margin: '0' } }, { id: 'faq20-i1-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#a5b4fc' } } ] },
    { id: 'faq20-item-2', type: 'card', props: { variant: 'faq', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq20-i2-q', type: 'heading', props: { content: 'Berapa lama proses implementasi?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px 0' } }, { id: 'faq20-i2-a', type: 'text', props: { content: 'Implementasi 2-8 minggu tergantung skala kebutuhan.', fontSize: '14px', color: '#a5b4fc', margin: '0' } }, { id: 'faq20-i2-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#a5b4fc' } } ] },
    { id: 'faq20-item-3', type: 'card', props: { variant: 'faq', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq20-i3-q', type: 'heading', props: { content: 'Apakah ada paket harga fleksibel?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px 0' } }, { id: 'faq20-i3-a', type: 'text', props: { content: 'Ya, tersedia paket UMKM, menengah, hingga enterprise.', fontSize: '14px', color: '#a5b4fc', margin: '0' } }, { id: 'faq20-i3-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#a5b4fc' } } ] },
    { id: 'faq20-item-4', type: 'card', props: { variant: 'faq', background: 'rgba(255,255,255,0.06)', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'none', padding: '24px' }, childrenComponents: [ { id: 'faq20-i4-q', type: 'heading', props: { content: 'Bagaimana dukungan teknis bekerja?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#ffffff', margin: '0 0 10px 0' } }, { id: 'faq20-i4-a', type: 'text', props: { content: 'Dukungan 24/7 via live chat, email, dan telepon.', fontSize: '14px', color: '#a5b4fc', margin: '0' } }, { id: 'faq20-i4-btn', type: 'button', props: { label: 'Pelajari', href: '#bantuan', variant: 'ghost', size: 'small', background: 'transparent', color: '#a5b4fc' } } ] },
  ],
  'pricing-01': [
    { id: 'prc1-badge', type: 'badge', props: { content: 'Harga', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'prc1-heading', type: 'heading', props: { content: 'Paket Harga Transparan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prc1-text', type: 'text', props: { content: 'Pilih paket sesuai skala dan kebutuhan bisnis Anda.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prc1-cta', type: 'button', props: { label: 'Konsultasi Gratis', href: '#konsultasi', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
    { id: 'prc1-card-1', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc1-c1-badge', type: 'badge', props: { content: 'STARTER', background: '#eef2ff', color: '#4f46e5' } }, { id: 'prc1-c1-title', type: 'heading', props: { content: 'Paket UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc1-c1-price', type: 'heading', props: { content: 'Rp 2.500.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc1-c1-desc', type: 'text', props: { content: 'Website Profil Standar, Domain .ID, Hosting 1 Tahun, Support WhatsApp', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc1-c1-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#4f46e5', color: '#ffffff' } } ] },
    { id: 'prc1-card-2', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc1-c2-badge', type: 'badge', props: { content: 'POPULER', background: '#eef2ff', color: '#4f46e5' } }, { id: 'prc1-c2-title', type: 'heading', props: { content: 'Paket Profesional', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc1-c2-price', type: 'heading', props: { content: 'Rp 5.000.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc1-c2-desc', type: 'text', props: { content: 'Custom Multi-Template, SEO Optimization, Payment Gateway, Priority 24/7', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc1-c2-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#4f46e5', color: '#ffffff' } } ] },
    { id: 'prc1-card-3', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc1-c3-badge', type: 'badge', props: { content: 'ENTERPRISE', background: '#eef2ff', color: '#4f46e5' } }, { id: 'prc1-c3-title', type: 'heading', props: { content: 'Paket Perusahaan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc1-c3-price', type: 'heading', props: { content: 'Custom', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc1-c3-desc', type: 'text', props: { content: 'Sistem Enterprise, Dedicated Server, SLA 99.9%, Account Manager', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc1-c3-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#4f46e5', color: '#ffffff' } } ] },
  ],
  'pricing-02': [
    { id: 'prc2-badge', type: 'badge', props: { content: 'Harga', background: '#1c1917', color: '#e7c873' } },
    { id: 'prc2-heading', type: 'heading', props: { content: 'Paket Harga Transparan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prc2-text', type: 'text', props: { content: 'Pilih paket sesuai skala dan kebutuhan bisnis Anda.', fontSize: '15px', color: '#a8a29e', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prc2-cta', type: 'button', props: { label: 'Konsultasi Gratis', href: '#konsultasi', variant: 'ghost', size: 'medium', background: 'transparent', color: '#ffffff' } },
    { id: 'prc2-card-1', type: 'card', props: { variant: 'pricing', background: '#1c1917', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc2-c1-badge', type: 'badge', props: { content: 'STARTER', background: '#1c1917', color: '#e7c873' } }, { id: 'prc2-c1-title', type: 'heading', props: { content: 'Paket UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '12px 0 4px 0' } }, { id: 'prc2-c1-price', type: 'heading', props: { content: 'Rp 2.500.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#ffffff', margin: '8px 0 16px 0' } }, { id: 'prc2-c1-desc', type: 'text', props: { content: 'Website Profil Standar, Domain .ID, Hosting 1 Tahun, Support WhatsApp', fontSize: '14px', color: '#a8a29e', margin: '0 0 24px 0' } }, { id: 'prc2-c1-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#e7c873', color: '#1c1917' } } ] },
    { id: 'prc2-card-2', type: 'card', props: { variant: 'pricing', background: '#1c1917', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc2-c2-badge', type: 'badge', props: { content: 'POPULER', background: '#1c1917', color: '#e7c873' } }, { id: 'prc2-c2-title', type: 'heading', props: { content: 'Paket Profesional', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '12px 0 4px 0' } }, { id: 'prc2-c2-price', type: 'heading', props: { content: 'Rp 5.000.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#ffffff', margin: '8px 0 16px 0' } }, { id: 'prc2-c2-desc', type: 'text', props: { content: 'Custom Multi-Template, SEO Optimization, Payment Gateway, Priority 24/7', fontSize: '14px', color: '#a8a29e', margin: '0 0 24px 0' } }, { id: 'prc2-c2-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#e7c873', color: '#1c1917' } } ] },
    { id: 'prc2-card-3', type: 'card', props: { variant: 'pricing', background: '#1c1917', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#44403c', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc2-c3-badge', type: 'badge', props: { content: 'ENTERPRISE', background: '#1c1917', color: '#e7c873' } }, { id: 'prc2-c3-title', type: 'heading', props: { content: 'Paket Perusahaan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '12px 0 4px 0' } }, { id: 'prc2-c3-price', type: 'heading', props: { content: 'Custom', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#ffffff', margin: '8px 0 16px 0' } }, { id: 'prc2-c3-desc', type: 'text', props: { content: 'Sistem Enterprise, Dedicated Server, SLA 99.9%, Account Manager', fontSize: '14px', color: '#a8a29e', margin: '0 0 24px 0' } }, { id: 'prc2-c3-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#e7c873', color: '#1c1917' } } ] },
  ],
  'pricing-03': [
    { id: 'prc3-badge', type: 'badge', props: { content: 'Harga', background: '#fff7ed', color: '#ea580c' } },
    { id: 'prc3-heading', type: 'heading', props: { content: 'Paket Harga Transparan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prc3-text', type: 'text', props: { content: 'Pilih paket sesuai skala dan kebutuhan bisnis Anda.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prc3-cta', type: 'button', props: { label: 'Konsultasi Gratis', href: '#konsultasi', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
    { id: 'prc3-card-1', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc3-c1-badge', type: 'badge', props: { content: 'STARTER', background: '#fff7ed', color: '#ea580c' } }, { id: 'prc3-c1-title', type: 'heading', props: { content: 'Paket UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc3-c1-price', type: 'heading', props: { content: 'Rp 2.500.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc3-c1-desc', type: 'text', props: { content: 'Website Profil Standar, Domain .ID, Hosting 1 Tahun, Support WhatsApp', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc3-c1-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#ea580c', color: '#ffffff' } } ] },
    { id: 'prc3-card-2', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc3-c2-badge', type: 'badge', props: { content: 'POPULER', background: '#fff7ed', color: '#ea580c' } }, { id: 'prc3-c2-title', type: 'heading', props: { content: 'Paket Profesional', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc3-c2-price', type: 'heading', props: { content: 'Rp 5.000.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc3-c2-desc', type: 'text', props: { content: 'Custom Multi-Template, SEO Optimization, Payment Gateway, Priority 24/7', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc3-c2-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#ea580c', color: '#ffffff' } } ] },
    { id: 'prc3-card-3', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc3-c3-badge', type: 'badge', props: { content: 'ENTERPRISE', background: '#fff7ed', color: '#ea580c' } }, { id: 'prc3-c3-title', type: 'heading', props: { content: 'Paket Perusahaan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc3-c3-price', type: 'heading', props: { content: 'Custom', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc3-c3-desc', type: 'text', props: { content: 'Sistem Enterprise, Dedicated Server, SLA 99.9%, Account Manager', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc3-c3-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#ea580c', color: '#ffffff' } } ] },
  ],
  'pricing-04': [
    { id: 'prc4-badge', type: 'badge', props: { content: 'Harga', background: '#000000', color: '#facc15' } },
    { id: 'prc4-heading', type: 'heading', props: { content: 'Paket Harga Transparan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#000000', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prc4-text', type: 'text', props: { content: 'Pilih paket sesuai skala dan kebutuhan bisnis Anda.', fontSize: '15px', color: '#000000', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prc4-cta', type: 'button', props: { label: 'Konsultasi Gratis', href: '#konsultasi', variant: 'ghost', size: 'medium', background: 'transparent', color: '#000000' } },
    { id: 'prc4-card-1', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#000000', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc4-c1-badge', type: 'badge', props: { content: 'STARTER', background: '#000000', color: '#facc15' } }, { id: 'prc4-c1-title', type: 'heading', props: { content: 'Paket UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#000000', margin: '12px 0 4px 0' } }, { id: 'prc4-c1-price', type: 'heading', props: { content: 'Rp 2.500.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', margin: '8px 0 16px 0' } }, { id: 'prc4-c1-desc', type: 'text', props: { content: 'Website Profil Standar, Domain .ID, Hosting 1 Tahun, Support WhatsApp', fontSize: '14px', color: '#000000', margin: '0 0 24px 0' } }, { id: 'prc4-c1-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#000000', color: '#facc15' } } ] },
    { id: 'prc4-card-2', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#000000', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc4-c2-badge', type: 'badge', props: { content: 'POPULER', background: '#000000', color: '#facc15' } }, { id: 'prc4-c2-title', type: 'heading', props: { content: 'Paket Profesional', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#000000', margin: '12px 0 4px 0' } }, { id: 'prc4-c2-price', type: 'heading', props: { content: 'Rp 5.000.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', margin: '8px 0 16px 0' } }, { id: 'prc4-c2-desc', type: 'text', props: { content: 'Custom Multi-Template, SEO Optimization, Payment Gateway, Priority 24/7', fontSize: '14px', color: '#000000', margin: '0 0 24px 0' } }, { id: 'prc4-c2-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#000000', color: '#facc15' } } ] },
    { id: 'prc4-card-3', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#000000', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc4-c3-badge', type: 'badge', props: { content: 'ENTERPRISE', background: '#000000', color: '#facc15' } }, { id: 'prc4-c3-title', type: 'heading', props: { content: 'Paket Perusahaan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#000000', margin: '12px 0 4px 0' } }, { id: 'prc4-c3-price', type: 'heading', props: { content: 'Custom', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#000000', margin: '8px 0 16px 0' } }, { id: 'prc4-c3-desc', type: 'text', props: { content: 'Sistem Enterprise, Dedicated Server, SLA 99.9%, Account Manager', fontSize: '14px', color: '#000000', margin: '0 0 24px 0' } }, { id: 'prc4-c3-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#000000', color: '#facc15' } } ] },
  ],
  'pricing-05': [
    { id: 'prc5-badge', type: 'badge', props: { content: 'Harga', background: '#ffffff', color: '#78716c' } },
    { id: 'prc5-heading', type: 'heading', props: { content: 'Paket Harga Transparan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#1c1917', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prc5-text', type: 'text', props: { content: 'Pilih paket sesuai skala dan kebutuhan bisnis Anda.', fontSize: '15px', color: '#78716c', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prc5-cta', type: 'button', props: { label: 'Konsultasi Gratis', href: '#konsultasi', variant: 'ghost', size: 'medium', background: 'transparent', color: '#1c1917' } },
    { id: 'prc5-card-1', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc5-c1-badge', type: 'badge', props: { content: 'STARTER', background: '#ffffff', color: '#78716c' } }, { id: 'prc5-c1-title', type: 'heading', props: { content: 'Paket UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#1c1917', margin: '12px 0 4px 0' } }, { id: 'prc5-c1-price', type: 'heading', props: { content: 'Rp 2.500.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#1c1917', margin: '8px 0 16px 0' } }, { id: 'prc5-c1-desc', type: 'text', props: { content: 'Website Profil Standar, Domain .ID, Hosting 1 Tahun, Support WhatsApp', fontSize: '14px', color: '#78716c', margin: '0 0 24px 0' } }, { id: 'prc5-c1-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#1c1917', color: '#ffffff' } } ] },
    { id: 'prc5-card-2', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc5-c2-badge', type: 'badge', props: { content: 'POPULER', background: '#ffffff', color: '#78716c' } }, { id: 'prc5-c2-title', type: 'heading', props: { content: 'Paket Profesional', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#1c1917', margin: '12px 0 4px 0' } }, { id: 'prc5-c2-price', type: 'heading', props: { content: 'Rp 5.000.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#1c1917', margin: '8px 0 16px 0' } }, { id: 'prc5-c2-desc', type: 'text', props: { content: 'Custom Multi-Template, SEO Optimization, Payment Gateway, Priority 24/7', fontSize: '14px', color: '#78716c', margin: '0 0 24px 0' } }, { id: 'prc5-c2-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#1c1917', color: '#ffffff' } } ] },
    { id: 'prc5-card-3', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc5-c3-badge', type: 'badge', props: { content: 'ENTERPRISE', background: '#ffffff', color: '#78716c' } }, { id: 'prc5-c3-title', type: 'heading', props: { content: 'Paket Perusahaan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#1c1917', margin: '12px 0 4px 0' } }, { id: 'prc5-c3-price', type: 'heading', props: { content: 'Custom', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#1c1917', margin: '8px 0 16px 0' } }, { id: 'prc5-c3-desc', type: 'text', props: { content: 'Sistem Enterprise, Dedicated Server, SLA 99.9%, Account Manager', fontSize: '14px', color: '#78716c', margin: '0 0 24px 0' } }, { id: 'prc5-c3-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#1c1917', color: '#ffffff' } } ] },
  ],
  'pricing-06': [
    { id: 'prc6-badge', type: 'badge', props: { content: 'Harga', background: '#1e1b4b', color: '#a5b4fc' } },
    { id: 'prc6-heading', type: 'heading', props: { content: 'Paket Harga Transparan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prc6-text', type: 'text', props: { content: 'Pilih paket sesuai skala dan kebutuhan bisnis Anda.', fontSize: '15px', color: '#a5b4fc', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prc6-cta', type: 'button', props: { label: 'Konsultasi Gratis', href: '#konsultasi', variant: 'ghost', size: 'medium', background: 'transparent', color: '#ffffff' } },
    { id: 'prc6-card-1', type: 'card', props: { variant: 'pricing', background: 'rgba(255,255,255,0.06)', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc6-c1-badge', type: 'badge', props: { content: 'STARTER', background: '#1e1b4b', color: '#a5b4fc' } }, { id: 'prc6-c1-title', type: 'heading', props: { content: 'Paket UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '12px 0 4px 0' } }, { id: 'prc6-c1-price', type: 'heading', props: { content: 'Rp 2.500.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#ffffff', margin: '8px 0 16px 0' } }, { id: 'prc6-c1-desc', type: 'text', props: { content: 'Website Profil Standar, Domain .ID, Hosting 1 Tahun, Support WhatsApp', fontSize: '14px', color: '#a5b4fc', margin: '0 0 24px 0' } }, { id: 'prc6-c1-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#8b5cf6', color: '#ffffff' } } ] },
    { id: 'prc6-card-2', type: 'card', props: { variant: 'pricing', background: 'rgba(255,255,255,0.06)', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc6-c2-badge', type: 'badge', props: { content: 'POPULER', background: '#1e1b4b', color: '#a5b4fc' } }, { id: 'prc6-c2-title', type: 'heading', props: { content: 'Paket Profesional', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '12px 0 4px 0' } }, { id: 'prc6-c2-price', type: 'heading', props: { content: 'Rp 5.000.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#ffffff', margin: '8px 0 16px 0' } }, { id: 'prc6-c2-desc', type: 'text', props: { content: 'Custom Multi-Template, SEO Optimization, Payment Gateway, Priority 24/7', fontSize: '14px', color: '#a5b4fc', margin: '0 0 24px 0' } }, { id: 'prc6-c2-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#8b5cf6', color: '#ffffff' } } ] },
    { id: 'prc6-card-3', type: 'card', props: { variant: 'pricing', background: 'rgba(255,255,255,0.06)', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: 'rgba(165,180,252,0.25)', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc6-c3-badge', type: 'badge', props: { content: 'ENTERPRISE', background: '#1e1b4b', color: '#a5b4fc' } }, { id: 'prc6-c3-title', type: 'heading', props: { content: 'Paket Perusahaan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '12px 0 4px 0' } }, { id: 'prc6-c3-price', type: 'heading', props: { content: 'Custom', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#ffffff', margin: '8px 0 16px 0' } }, { id: 'prc6-c3-desc', type: 'text', props: { content: 'Sistem Enterprise, Dedicated Server, SLA 99.9%, Account Manager', fontSize: '14px', color: '#a5b4fc', margin: '0 0 24px 0' } }, { id: 'prc6-c3-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#8b5cf6', color: '#ffffff' } } ] },
  ],
  'pricing-07': [
    { id: 'prc7-badge', type: 'badge', props: { content: 'Harga', background: '#052e16', color: '#4ade80' } },
    { id: 'prc7-heading', type: 'heading', props: { content: 'Paket Harga Transparan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#e2e8f0', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prc7-text', type: 'text', props: { content: 'Pilih paket sesuai skala dan kebutuhan bisnis Anda.', fontSize: '15px', color: '#94a3b8', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prc7-cta', type: 'button', props: { label: 'Konsultasi Gratis', href: '#konsultasi', variant: 'ghost', size: 'medium', background: 'transparent', color: '#e2e8f0' } },
    { id: 'prc7-card-1', type: 'card', props: { variant: 'pricing', background: '#0f172a', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc7-c1-badge', type: 'badge', props: { content: 'STARTER', background: '#052e16', color: '#4ade80' } }, { id: 'prc7-c1-title', type: 'heading', props: { content: 'Paket UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#e2e8f0', margin: '12px 0 4px 0' } }, { id: 'prc7-c1-price', type: 'heading', props: { content: 'Rp 2.500.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#e2e8f0', margin: '8px 0 16px 0' } }, { id: 'prc7-c1-desc', type: 'text', props: { content: 'Website Profil Standar, Domain .ID, Hosting 1 Tahun, Support WhatsApp', fontSize: '14px', color: '#94a3b8', margin: '0 0 24px 0' } }, { id: 'prc7-c1-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#22c55e', color: '#052e16' } } ] },
    { id: 'prc7-card-2', type: 'card', props: { variant: 'pricing', background: '#0f172a', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc7-c2-badge', type: 'badge', props: { content: 'POPULER', background: '#052e16', color: '#4ade80' } }, { id: 'prc7-c2-title', type: 'heading', props: { content: 'Paket Profesional', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#e2e8f0', margin: '12px 0 4px 0' } }, { id: 'prc7-c2-price', type: 'heading', props: { content: 'Rp 5.000.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#e2e8f0', margin: '8px 0 16px 0' } }, { id: 'prc7-c2-desc', type: 'text', props: { content: 'Custom Multi-Template, SEO Optimization, Payment Gateway, Priority 24/7', fontSize: '14px', color: '#94a3b8', margin: '0 0 24px 0' } }, { id: 'prc7-c2-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#22c55e', color: '#052e16' } } ] },
    { id: 'prc7-card-3', type: 'card', props: { variant: 'pricing', background: '#0f172a', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#1e293b', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc7-c3-badge', type: 'badge', props: { content: 'ENTERPRISE', background: '#052e16', color: '#4ade80' } }, { id: 'prc7-c3-title', type: 'heading', props: { content: 'Paket Perusahaan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#e2e8f0', margin: '12px 0 4px 0' } }, { id: 'prc7-c3-price', type: 'heading', props: { content: 'Custom', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#e2e8f0', margin: '8px 0 16px 0' } }, { id: 'prc7-c3-desc', type: 'text', props: { content: 'Sistem Enterprise, Dedicated Server, SLA 99.9%, Account Manager', fontSize: '14px', color: '#94a3b8', margin: '0 0 24px 0' } }, { id: 'prc7-c3-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#22c55e', color: '#052e16' } } ] },
  ],
  'pricing-08': [
    { id: 'prc8-badge', type: 'badge', props: { content: 'Harga', background: '#fce7f3', color: '#be185d' } },
    { id: 'prc8-heading', type: 'heading', props: { content: 'Paket Harga Transparan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#831843', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prc8-text', type: 'text', props: { content: 'Pilih paket sesuai skala dan kebutuhan bisnis Anda.', fontSize: '15px', color: '#9d7b8c', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prc8-cta', type: 'button', props: { label: 'Konsultasi Gratis', href: '#konsultasi', variant: 'ghost', size: 'medium', background: 'transparent', color: '#831843' } },
    { id: 'prc8-card-1', type: 'card', props: { variant: 'pricing', background: '#fff1f2', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc8-c1-badge', type: 'badge', props: { content: 'STARTER', background: '#fce7f3', color: '#be185d' } }, { id: 'prc8-c1-title', type: 'heading', props: { content: 'Paket UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#831843', margin: '12px 0 4px 0' } }, { id: 'prc8-c1-price', type: 'heading', props: { content: 'Rp 2.500.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#831843', margin: '8px 0 16px 0' } }, { id: 'prc8-c1-desc', type: 'text', props: { content: 'Website Profil Standar, Domain .ID, Hosting 1 Tahun, Support WhatsApp', fontSize: '14px', color: '#9d7b8c', margin: '0 0 24px 0' } }, { id: 'prc8-c1-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#db2777', color: '#ffffff' } } ] },
    { id: 'prc8-card-2', type: 'card', props: { variant: 'pricing', background: '#fff1f2', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc8-c2-badge', type: 'badge', props: { content: 'POPULER', background: '#fce7f3', color: '#be185d' } }, { id: 'prc8-c2-title', type: 'heading', props: { content: 'Paket Profesional', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#831843', margin: '12px 0 4px 0' } }, { id: 'prc8-c2-price', type: 'heading', props: { content: 'Rp 5.000.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#831843', margin: '8px 0 16px 0' } }, { id: 'prc8-c2-desc', type: 'text', props: { content: 'Custom Multi-Template, SEO Optimization, Payment Gateway, Priority 24/7', fontSize: '14px', color: '#9d7b8c', margin: '0 0 24px 0' } }, { id: 'prc8-c2-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#db2777', color: '#ffffff' } } ] },
    { id: 'prc8-card-3', type: 'card', props: { variant: 'pricing', background: '#fff1f2', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc8-c3-badge', type: 'badge', props: { content: 'ENTERPRISE', background: '#fce7f3', color: '#be185d' } }, { id: 'prc8-c3-title', type: 'heading', props: { content: 'Paket Perusahaan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#831843', margin: '12px 0 4px 0' } }, { id: 'prc8-c3-price', type: 'heading', props: { content: 'Custom', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#831843', margin: '8px 0 16px 0' } }, { id: 'prc8-c3-desc', type: 'text', props: { content: 'Sistem Enterprise, Dedicated Server, SLA 99.9%, Account Manager', fontSize: '14px', color: '#9d7b8c', margin: '0 0 24px 0' } }, { id: 'prc8-c3-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#db2777', color: '#ffffff' } } ] },
  ],
  'pricing-09': [
    { id: 'prc9-badge', type: 'badge', props: { content: 'Harga', background: '#78350f', color: '#fde68a' } },
    { id: 'prc9-heading', type: 'heading', props: { content: 'Paket Harga Transparan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#78350f', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prc9-text', type: 'text', props: { content: 'Pilih paket sesuai skala dan kebutuhan bisnis Anda.', fontSize: '15px', color: '#92400e', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prc9-cta', type: 'button', props: { label: 'Konsultasi Gratis', href: '#konsultasi', variant: 'ghost', size: 'medium', background: 'transparent', color: '#78350f' } },
    { id: 'prc9-card-1', type: 'card', props: { variant: 'pricing', background: '#fffbeb', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc9-c1-badge', type: 'badge', props: { content: 'STARTER', background: '#78350f', color: '#fde68a' } }, { id: 'prc9-c1-title', type: 'heading', props: { content: 'Paket UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#78350f', margin: '12px 0 4px 0' } }, { id: 'prc9-c1-price', type: 'heading', props: { content: 'Rp 2.500.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#78350f', margin: '8px 0 16px 0' } }, { id: 'prc9-c1-desc', type: 'text', props: { content: 'Website Profil Standar, Domain .ID, Hosting 1 Tahun, Support WhatsApp', fontSize: '14px', color: '#92400e', margin: '0 0 24px 0' } }, { id: 'prc9-c1-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#92400e', color: '#fef3c7' } } ] },
    { id: 'prc9-card-2', type: 'card', props: { variant: 'pricing', background: '#fffbeb', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc9-c2-badge', type: 'badge', props: { content: 'POPULER', background: '#78350f', color: '#fde68a' } }, { id: 'prc9-c2-title', type: 'heading', props: { content: 'Paket Profesional', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#78350f', margin: '12px 0 4px 0' } }, { id: 'prc9-c2-price', type: 'heading', props: { content: 'Rp 5.000.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#78350f', margin: '8px 0 16px 0' } }, { id: 'prc9-c2-desc', type: 'text', props: { content: 'Custom Multi-Template, SEO Optimization, Payment Gateway, Priority 24/7', fontSize: '14px', color: '#92400e', margin: '0 0 24px 0' } }, { id: 'prc9-c2-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#92400e', color: '#fef3c7' } } ] },
    { id: 'prc9-card-3', type: 'card', props: { variant: 'pricing', background: '#fffbeb', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#e7c873', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc9-c3-badge', type: 'badge', props: { content: 'ENTERPRISE', background: '#78350f', color: '#fde68a' } }, { id: 'prc9-c3-title', type: 'heading', props: { content: 'Paket Perusahaan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#78350f', margin: '12px 0 4px 0' } }, { id: 'prc9-c3-price', type: 'heading', props: { content: 'Custom', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#78350f', margin: '8px 0 16px 0' } }, { id: 'prc9-c3-desc', type: 'text', props: { content: 'Sistem Enterprise, Dedicated Server, SLA 99.9%, Account Manager', fontSize: '14px', color: '#92400e', margin: '0 0 24px 0' } }, { id: 'prc9-c3-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#92400e', color: '#fef3c7' } } ] },
  ],
  'pricing-10': [
    { id: 'prc10-badge', type: 'badge', props: { content: 'Harga', background: '#fef2f2', color: '#dc2626' } },
    { id: 'prc10-heading', type: 'heading', props: { content: 'Paket Harga Transparan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prc10-text', type: 'text', props: { content: 'Pilih paket sesuai skala dan kebutuhan bisnis Anda.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prc10-cta', type: 'button', props: { label: 'Konsultasi Gratis', href: '#konsultasi', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
    { id: 'prc10-card-1', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc10-c1-badge', type: 'badge', props: { content: 'STARTER', background: '#fef2f2', color: '#dc2626' } }, { id: 'prc10-c1-title', type: 'heading', props: { content: 'Paket UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc10-c1-price', type: 'heading', props: { content: 'Rp 2.500.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc10-c1-desc', type: 'text', props: { content: 'Website Profil Standar, Domain .ID, Hosting 1 Tahun, Support WhatsApp', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc10-c1-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#dc2626', color: '#ffffff' } } ] },
    { id: 'prc10-card-2', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc10-c2-badge', type: 'badge', props: { content: 'POPULER', background: '#fef2f2', color: '#dc2626' } }, { id: 'prc10-c2-title', type: 'heading', props: { content: 'Paket Profesional', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc10-c2-price', type: 'heading', props: { content: 'Rp 5.000.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc10-c2-desc', type: 'text', props: { content: 'Custom Multi-Template, SEO Optimization, Payment Gateway, Priority 24/7', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc10-c2-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#dc2626', color: '#ffffff' } } ] },
    { id: 'prc10-card-3', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc10-c3-badge', type: 'badge', props: { content: 'ENTERPRISE', background: '#fef2f2', color: '#dc2626' } }, { id: 'prc10-c3-title', type: 'heading', props: { content: 'Paket Perusahaan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc10-c3-price', type: 'heading', props: { content: 'Custom', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc10-c3-desc', type: 'text', props: { content: 'Sistem Enterprise, Dedicated Server, SLA 99.9%, Account Manager', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc10-c3-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#dc2626', color: '#ffffff' } } ] },
  ],
  'pricing-11': [
    { id: 'prc11-badge', type: 'badge', props: { content: 'Harga', background: '#ffffff', color: '#7c3aed' } },
    { id: 'prc11-heading', type: 'heading', props: { content: 'Paket Harga Transparan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prc11-text', type: 'text', props: { content: 'Pilih paket sesuai skala dan kebutuhan bisnis Anda.', fontSize: '15px', color: '#ddd6fe', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prc11-cta', type: 'button', props: { label: 'Konsultasi Gratis', href: '#konsultasi', variant: 'ghost', size: 'medium', background: 'transparent', color: '#ffffff' } },
    { id: 'prc11-card-1', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc11-c1-badge', type: 'badge', props: { content: 'STARTER', background: '#ffffff', color: '#7c3aed' } }, { id: 'prc11-c1-title', type: 'heading', props: { content: 'Paket UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc11-c1-price', type: 'heading', props: { content: 'Rp 2.500.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc11-c1-desc', type: 'text', props: { content: 'Website Profil Standar, Domain .ID, Hosting 1 Tahun, Support WhatsApp', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc11-c1-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#ffffff', color: '#6d28d9' } } ] },
    { id: 'prc11-card-2', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc11-c2-badge', type: 'badge', props: { content: 'POPULER', background: '#ffffff', color: '#7c3aed' } }, { id: 'prc11-c2-title', type: 'heading', props: { content: 'Paket Profesional', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc11-c2-price', type: 'heading', props: { content: 'Rp 5.000.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc11-c2-desc', type: 'text', props: { content: 'Custom Multi-Template, SEO Optimization, Payment Gateway, Priority 24/7', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc11-c2-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#ffffff', color: '#6d28d9' } } ] },
    { id: 'prc11-card-3', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc11-c3-badge', type: 'badge', props: { content: 'ENTERPRISE', background: '#ffffff', color: '#7c3aed' } }, { id: 'prc11-c3-title', type: 'heading', props: { content: 'Paket Perusahaan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc11-c3-price', type: 'heading', props: { content: 'Custom', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc11-c3-desc', type: 'text', props: { content: 'Sistem Enterprise, Dedicated Server, SLA 99.9%, Account Manager', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc11-c3-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#ffffff', color: '#6d28d9' } } ] },
  ],
  'pricing-12': [
    { id: 'prc12-badge', type: 'badge', props: { content: 'Harga', background: '#0f172a', color: '#38bdf8' } },
    { id: 'prc12-heading', type: 'heading', props: { content: 'Paket Harga Transparan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prc12-text', type: 'text', props: { content: 'Pilih paket sesuai skala dan kebutuhan bisnis Anda.', fontSize: '15px', color: '#94a3b8', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prc12-cta', type: 'button', props: { label: 'Konsultasi Gratis', href: '#konsultasi', variant: 'ghost', size: 'medium', background: 'transparent', color: '#ffffff' } },
    { id: 'prc12-card-1', type: 'card', props: { variant: 'pricing', background: '#1e293b', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc12-c1-badge', type: 'badge', props: { content: 'STARTER', background: '#0f172a', color: '#38bdf8' } }, { id: 'prc12-c1-title', type: 'heading', props: { content: 'Paket UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '12px 0 4px 0' } }, { id: 'prc12-c1-price', type: 'heading', props: { content: 'Rp 2.500.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#ffffff', margin: '8px 0 16px 0' } }, { id: 'prc12-c1-desc', type: 'text', props: { content: 'Website Profil Standar, Domain .ID, Hosting 1 Tahun, Support WhatsApp', fontSize: '14px', color: '#94a3b8', margin: '0 0 24px 0' } }, { id: 'prc12-c1-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#38bdf8', color: '#082f49' } } ] },
    { id: 'prc12-card-2', type: 'card', props: { variant: 'pricing', background: '#1e293b', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc12-c2-badge', type: 'badge', props: { content: 'POPULER', background: '#0f172a', color: '#38bdf8' } }, { id: 'prc12-c2-title', type: 'heading', props: { content: 'Paket Profesional', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '12px 0 4px 0' } }, { id: 'prc12-c2-price', type: 'heading', props: { content: 'Rp 5.000.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#ffffff', margin: '8px 0 16px 0' } }, { id: 'prc12-c2-desc', type: 'text', props: { content: 'Custom Multi-Template, SEO Optimization, Payment Gateway, Priority 24/7', fontSize: '14px', color: '#94a3b8', margin: '0 0 24px 0' } }, { id: 'prc12-c2-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#38bdf8', color: '#082f49' } } ] },
    { id: 'prc12-card-3', type: 'card', props: { variant: 'pricing', background: '#1e293b', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#334155', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc12-c3-badge', type: 'badge', props: { content: 'ENTERPRISE', background: '#0f172a', color: '#38bdf8' } }, { id: 'prc12-c3-title', type: 'heading', props: { content: 'Paket Perusahaan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '12px 0 4px 0' } }, { id: 'prc12-c3-price', type: 'heading', props: { content: 'Custom', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#ffffff', margin: '8px 0 16px 0' } }, { id: 'prc12-c3-desc', type: 'text', props: { content: 'Sistem Enterprise, Dedicated Server, SLA 99.9%, Account Manager', fontSize: '14px', color: '#94a3b8', margin: '0 0 24px 0' } }, { id: 'prc12-c3-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#38bdf8', color: '#082f49' } } ] },
  ],
  'pricing-13': [
    { id: 'prc13-badge', type: 'badge', props: { content: 'Harga', background: '#fce7f3', color: '#ec4899' } },
    { id: 'prc13-heading', type: 'heading', props: { content: 'Paket Harga Transparan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prc13-text', type: 'text', props: { content: 'Pilih paket sesuai skala dan kebutuhan bisnis Anda.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prc13-cta', type: 'button', props: { label: 'Konsultasi Gratis', href: '#konsultasi', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
    { id: 'prc13-card-1', type: 'card', props: { variant: 'pricing', background: '#fff1f2', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc13-c1-badge', type: 'badge', props: { content: 'STARTER', background: '#fce7f3', color: '#ec4899' } }, { id: 'prc13-c1-title', type: 'heading', props: { content: 'Paket UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc13-c1-price', type: 'heading', props: { content: 'Rp 2.500.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc13-c1-desc', type: 'text', props: { content: 'Website Profil Standar, Domain .ID, Hosting 1 Tahun, Support WhatsApp', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc13-c1-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#ec4899', color: '#ffffff' } } ] },
    { id: 'prc13-card-2', type: 'card', props: { variant: 'pricing', background: '#fff1f2', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc13-c2-badge', type: 'badge', props: { content: 'POPULER', background: '#fce7f3', color: '#ec4899' } }, { id: 'prc13-c2-title', type: 'heading', props: { content: 'Paket Profesional', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc13-c2-price', type: 'heading', props: { content: 'Rp 5.000.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc13-c2-desc', type: 'text', props: { content: 'Custom Multi-Template, SEO Optimization, Payment Gateway, Priority 24/7', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc13-c2-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#ec4899', color: '#ffffff' } } ] },
    { id: 'prc13-card-3', type: 'card', props: { variant: 'pricing', background: '#fff1f2', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#fff1f2', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc13-c3-badge', type: 'badge', props: { content: 'ENTERPRISE', background: '#fce7f3', color: '#ec4899' } }, { id: 'prc13-c3-title', type: 'heading', props: { content: 'Paket Perusahaan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc13-c3-price', type: 'heading', props: { content: 'Custom', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc13-c3-desc', type: 'text', props: { content: 'Sistem Enterprise, Dedicated Server, SLA 99.9%, Account Manager', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc13-c3-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#ec4899', color: '#ffffff' } } ] },
  ],
  'pricing-14': [
    { id: 'prc14-badge', type: 'badge', props: { content: 'Harga', background: '#eff6ff', color: '#1d4ed8' } },
    { id: 'prc14-heading', type: 'heading', props: { content: 'Paket Harga Transparan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prc14-text', type: 'text', props: { content: 'Pilih paket sesuai skala dan kebutuhan bisnis Anda.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prc14-cta', type: 'button', props: { label: 'Konsultasi Gratis', href: '#konsultasi', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
    { id: 'prc14-card-1', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc14-c1-badge', type: 'badge', props: { content: 'STARTER', background: '#eff6ff', color: '#1d4ed8' } }, { id: 'prc14-c1-title', type: 'heading', props: { content: 'Paket UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc14-c1-price', type: 'heading', props: { content: 'Rp 2.500.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc14-c1-desc', type: 'text', props: { content: 'Website Profil Standar, Domain .ID, Hosting 1 Tahun, Support WhatsApp', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc14-c1-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#1e40af', color: '#ffffff' } } ] },
    { id: 'prc14-card-2', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc14-c2-badge', type: 'badge', props: { content: 'POPULER', background: '#eff6ff', color: '#1d4ed8' } }, { id: 'prc14-c2-title', type: 'heading', props: { content: 'Paket Profesional', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc14-c2-price', type: 'heading', props: { content: 'Rp 5.000.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc14-c2-desc', type: 'text', props: { content: 'Custom Multi-Template, SEO Optimization, Payment Gateway, Priority 24/7', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc14-c2-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#1e40af', color: '#ffffff' } } ] },
    { id: 'prc14-card-3', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#bfdbfe', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc14-c3-badge', type: 'badge', props: { content: 'ENTERPRISE', background: '#eff6ff', color: '#1d4ed8' } }, { id: 'prc14-c3-title', type: 'heading', props: { content: 'Paket Perusahaan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc14-c3-price', type: 'heading', props: { content: 'Custom', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc14-c3-desc', type: 'text', props: { content: 'Sistem Enterprise, Dedicated Server, SLA 99.9%, Account Manager', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc14-c3-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#1e40af', color: '#ffffff' } } ] },
  ],
  'pricing-15': [
    { id: 'prc15-badge', type: 'badge', props: { content: 'Harga', background: '#0f172a', color: '#ffffff' } },
    { id: 'prc15-heading', type: 'heading', props: { content: 'Paket Harga Transparan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prc15-text', type: 'text', props: { content: 'Pilih paket sesuai skala dan kebutuhan bisnis Anda.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prc15-cta', type: 'button', props: { label: 'Konsultasi Gratis', href: '#konsultasi', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
    { id: 'prc15-card-1', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc15-c1-badge', type: 'badge', props: { content: 'STARTER', background: '#0f172a', color: '#ffffff' } }, { id: 'prc15-c1-title', type: 'heading', props: { content: 'Paket UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc15-c1-price', type: 'heading', props: { content: 'Rp 2.500.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc15-c1-desc', type: 'text', props: { content: 'Website Profil Standar, Domain .ID, Hosting 1 Tahun, Support WhatsApp', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc15-c1-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } } ] },
    { id: 'prc15-card-2', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc15-c2-badge', type: 'badge', props: { content: 'POPULER', background: '#0f172a', color: '#ffffff' } }, { id: 'prc15-c2-title', type: 'heading', props: { content: 'Paket Profesional', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc15-c2-price', type: 'heading', props: { content: 'Rp 5.000.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc15-c2-desc', type: 'text', props: { content: 'Custom Multi-Template, SEO Optimization, Payment Gateway, Priority 24/7', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc15-c2-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } } ] },
    { id: 'prc15-card-3', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc15-c3-badge', type: 'badge', props: { content: 'ENTERPRISE', background: '#0f172a', color: '#ffffff' } }, { id: 'prc15-c3-title', type: 'heading', props: { content: 'Paket Perusahaan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc15-c3-price', type: 'heading', props: { content: 'Custom', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc15-c3-desc', type: 'text', props: { content: 'Sistem Enterprise, Dedicated Server, SLA 99.9%, Account Manager', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc15-c3-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } } ] },
  ],
  'pricing-16': [
    { id: 'prc16-badge', type: 'badge', props: { content: 'Harga', background: '#dcfce7', color: '#166534' } },
    { id: 'prc16-heading', type: 'heading', props: { content: 'Paket Harga Transparan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#064e3b', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prc16-text', type: 'text', props: { content: 'Pilih paket sesuai skala dan kebutuhan bisnis Anda.', fontSize: '15px', color: '#4d7c0f', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prc16-cta', type: 'button', props: { label: 'Konsultasi Gratis', href: '#konsultasi', variant: 'ghost', size: 'medium', background: 'transparent', color: '#064e3b' } },
    { id: 'prc16-card-1', type: 'card', props: { variant: 'pricing', background: '#f0fdf4', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc16-c1-badge', type: 'badge', props: { content: 'STARTER', background: '#dcfce7', color: '#166534' } }, { id: 'prc16-c1-title', type: 'heading', props: { content: 'Paket UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#064e3b', margin: '12px 0 4px 0' } }, { id: 'prc16-c1-price', type: 'heading', props: { content: 'Rp 2.500.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#064e3b', margin: '8px 0 16px 0' } }, { id: 'prc16-c1-desc', type: 'text', props: { content: 'Website Profil Standar, Domain .ID, Hosting 1 Tahun, Support WhatsApp', fontSize: '14px', color: '#166534', margin: '0 0 24px 0' } }, { id: 'prc16-c1-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#16a34a', color: '#ffffff' } } ] },
    { id: 'prc16-card-2', type: 'card', props: { variant: 'pricing', background: '#f0fdf4', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc16-c2-badge', type: 'badge', props: { content: 'POPULER', background: '#dcfce7', color: '#166534' } }, { id: 'prc16-c2-title', type: 'heading', props: { content: 'Paket Profesional', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#064e3b', margin: '12px 0 4px 0' } }, { id: 'prc16-c2-price', type: 'heading', props: { content: 'Rp 5.000.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#064e3b', margin: '8px 0 16px 0' } }, { id: 'prc16-c2-desc', type: 'text', props: { content: 'Custom Multi-Template, SEO Optimization, Payment Gateway, Priority 24/7', fontSize: '14px', color: '#166534', margin: '0 0 24px 0' } }, { id: 'prc16-c2-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#16a34a', color: '#ffffff' } } ] },
    { id: 'prc16-card-3', type: 'card', props: { variant: 'pricing', background: '#f0fdf4', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#bbf7d0', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc16-c3-badge', type: 'badge', props: { content: 'ENTERPRISE', background: '#dcfce7', color: '#166534' } }, { id: 'prc16-c3-title', type: 'heading', props: { content: 'Paket Perusahaan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#064e3b', margin: '12px 0 4px 0' } }, { id: 'prc16-c3-price', type: 'heading', props: { content: 'Custom', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#064e3b', margin: '8px 0 16px 0' } }, { id: 'prc16-c3-desc', type: 'text', props: { content: 'Sistem Enterprise, Dedicated Server, SLA 99.9%, Account Manager', fontSize: '14px', color: '#166534', margin: '0 0 24px 0' } }, { id: 'prc16-c3-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#16a34a', color: '#ffffff' } } ] },
  ],
  'pricing-17': [
    { id: 'prc17-badge', type: 'badge', props: { content: 'Harga', background: '#dc2626', color: '#ffffff' } },
    { id: 'prc17-heading', type: 'heading', props: { content: 'Paket Harga Transparan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prc17-text', type: 'text', props: { content: 'Pilih paket sesuai skala dan kebutuhan bisnis Anda.', fontSize: '15px', color: '#fecaca', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prc17-cta', type: 'button', props: { label: 'Konsultasi Gratis', href: '#konsultasi', variant: 'ghost', size: 'medium', background: 'transparent', color: '#ffffff' } },
    { id: 'prc17-card-1', type: 'card', props: { variant: 'pricing', background: '#171717', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc17-c1-badge', type: 'badge', props: { content: 'STARTER', background: '#dc2626', color: '#ffffff' } }, { id: 'prc17-c1-title', type: 'heading', props: { content: 'Paket UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '12px 0 4px 0' } }, { id: 'prc17-c1-price', type: 'heading', props: { content: 'Rp 2.500.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#ffffff', margin: '8px 0 16px 0' } }, { id: 'prc17-c1-desc', type: 'text', props: { content: 'Website Profil Standar, Domain .ID, Hosting 1 Tahun, Support WhatsApp', fontSize: '14px', color: '#fecaca', margin: '0 0 24px 0' } }, { id: 'prc17-c1-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#dc2626', color: '#ffffff' } } ] },
    { id: 'prc17-card-2', type: 'card', props: { variant: 'pricing', background: '#171717', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc17-c2-badge', type: 'badge', props: { content: 'POPULER', background: '#dc2626', color: '#ffffff' } }, { id: 'prc17-c2-title', type: 'heading', props: { content: 'Paket Profesional', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '12px 0 4px 0' } }, { id: 'prc17-c2-price', type: 'heading', props: { content: 'Rp 5.000.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#ffffff', margin: '8px 0 16px 0' } }, { id: 'prc17-c2-desc', type: 'text', props: { content: 'Custom Multi-Template, SEO Optimization, Payment Gateway, Priority 24/7', fontSize: '14px', color: '#fecaca', margin: '0 0 24px 0' } }, { id: 'prc17-c2-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#dc2626', color: '#ffffff' } } ] },
    { id: 'prc17-card-3', type: 'card', props: { variant: 'pricing', background: '#171717', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#404040', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc17-c3-badge', type: 'badge', props: { content: 'ENTERPRISE', background: '#dc2626', color: '#ffffff' } }, { id: 'prc17-c3-title', type: 'heading', props: { content: 'Paket Perusahaan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '12px 0 4px 0' } }, { id: 'prc17-c3-price', type: 'heading', props: { content: 'Custom', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#ffffff', margin: '8px 0 16px 0' } }, { id: 'prc17-c3-desc', type: 'text', props: { content: 'Sistem Enterprise, Dedicated Server, SLA 99.9%, Account Manager', fontSize: '14px', color: '#fecaca', margin: '0 0 24px 0' } }, { id: 'prc17-c3-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#dc2626', color: '#ffffff' } } ] },
  ],
  'pricing-18': [
    { id: 'prc18-badge', type: 'badge', props: { content: 'Harga', background: '#fff7ed', color: '#ea580c' } },
    { id: 'prc18-heading', type: 'heading', props: { content: 'Paket Harga Transparan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prc18-text', type: 'text', props: { content: 'Pilih paket sesuai skala dan kebutuhan bisnis Anda.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prc18-cta', type: 'button', props: { label: 'Konsultasi Gratis', href: '#konsultasi', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
    { id: 'prc18-card-1', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc18-c1-badge', type: 'badge', props: { content: 'STARTER', background: '#fff7ed', color: '#ea580c' } }, { id: 'prc18-c1-title', type: 'heading', props: { content: 'Paket UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc18-c1-price', type: 'heading', props: { content: 'Rp 2.500.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc18-c1-desc', type: 'text', props: { content: 'Website Profil Standar, Domain .ID, Hosting 1 Tahun, Support WhatsApp', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc18-c1-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#f97316', color: '#ffffff' } } ] },
    { id: 'prc18-card-2', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc18-c2-badge', type: 'badge', props: { content: 'POPULER', background: '#fff7ed', color: '#ea580c' } }, { id: 'prc18-c2-title', type: 'heading', props: { content: 'Paket Profesional', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc18-c2-price', type: 'heading', props: { content: 'Rp 5.000.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc18-c2-desc', type: 'text', props: { content: 'Custom Multi-Template, SEO Optimization, Payment Gateway, Priority 24/7', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc18-c2-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#f97316', color: '#ffffff' } } ] },
    { id: 'prc18-card-3', type: 'card', props: { variant: 'pricing', background: '#ffffff', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#fed7aa', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc18-c3-badge', type: 'badge', props: { content: 'ENTERPRISE', background: '#fff7ed', color: '#ea580c' } }, { id: 'prc18-c3-title', type: 'heading', props: { content: 'Paket Perusahaan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc18-c3-price', type: 'heading', props: { content: 'Custom', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc18-c3-desc', type: 'text', props: { content: 'Sistem Enterprise, Dedicated Server, SLA 99.9%, Account Manager', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc18-c3-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#f97316', color: '#ffffff' } } ] },
  ],
  'pricing-19': [
    { id: 'prc19-badge', type: 'badge', props: { content: 'Harga', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'prc19-heading', type: 'heading', props: { content: 'Paket Harga Transparan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prc19-text', type: 'text', props: { content: 'Pilih paket sesuai skala dan kebutuhan bisnis Anda.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prc19-cta', type: 'button', props: { label: 'Konsultasi Gratis', href: '#konsultasi', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
    { id: 'prc19-card-1', type: 'card', props: { variant: 'pricing', background: 'rgba(255,255,255,0.85)', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc19-c1-badge', type: 'badge', props: { content: 'STARTER', background: '#eef2ff', color: '#4f46e5' } }, { id: 'prc19-c1-title', type: 'heading', props: { content: 'Paket UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc19-c1-price', type: 'heading', props: { content: 'Rp 2.500.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc19-c1-desc', type: 'text', props: { content: 'Website Profil Standar, Domain .ID, Hosting 1 Tahun, Support WhatsApp', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc19-c1-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } } ] },
    { id: 'prc19-card-2', type: 'card', props: { variant: 'pricing', background: 'rgba(255,255,255,0.85)', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc19-c2-badge', type: 'badge', props: { content: 'POPULER', background: '#eef2ff', color: '#4f46e5' } }, { id: 'prc19-c2-title', type: 'heading', props: { content: 'Paket Profesional', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc19-c2-price', type: 'heading', props: { content: 'Rp 5.000.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc19-c2-desc', type: 'text', props: { content: 'Custom Multi-Template, SEO Optimization, Payment Gateway, Priority 24/7', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc19-c2-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } } ] },
    { id: 'prc19-card-3', type: 'card', props: { variant: 'pricing', background: 'rgba(255,255,255,0.85)', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: '#ffffff', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc19-c3-badge', type: 'badge', props: { content: 'ENTERPRISE', background: '#eef2ff', color: '#4f46e5' } }, { id: 'prc19-c3-title', type: 'heading', props: { content: 'Paket Perusahaan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '12px 0 4px 0' } }, { id: 'prc19-c3-price', type: 'heading', props: { content: 'Custom', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: '8px 0 16px 0' } }, { id: 'prc19-c3-desc', type: 'text', props: { content: 'Sistem Enterprise, Dedicated Server, SLA 99.9%, Account Manager', fontSize: '14px', color: '#64748b', margin: '0 0 24px 0' } }, { id: 'prc19-c3-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } } ] },
  ],
  'pricing-20': [
    { id: 'prc20-badge', type: 'badge', props: { content: 'Harga', background: '#1e1b4b', color: '#c4b5fd' } },
    { id: 'prc20-heading', type: 'heading', props: { content: 'Paket Harga Transparan', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prc20-text', type: 'text', props: { content: 'Pilih paket sesuai skala dan kebutuhan bisnis Anda.', fontSize: '15px', color: '#a5b4fc', align: 'center', margin: '0 0 20px 0' } },
    { id: 'prc20-cta', type: 'button', props: { label: 'Konsultasi Gratis', href: '#konsultasi', variant: 'ghost', size: 'medium', background: 'transparent', color: '#ffffff' } },
    { id: 'prc20-card-1', type: 'card', props: { variant: 'pricing', background: 'rgba(255,255,255,0.06)', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc20-c1-badge', type: 'badge', props: { content: 'STARTER', background: '#1e1b4b', color: '#c4b5fd' } }, { id: 'prc20-c1-title', type: 'heading', props: { content: 'Paket UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '12px 0 4px 0' } }, { id: 'prc20-c1-price', type: 'heading', props: { content: 'Rp 2.500.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#ffffff', margin: '8px 0 16px 0' } }, { id: 'prc20-c1-desc', type: 'text', props: { content: 'Website Profil Standar, Domain .ID, Hosting 1 Tahun, Support WhatsApp', fontSize: '14px', color: '#a5b4fc', margin: '0 0 24px 0' } }, { id: 'prc20-c1-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#6366f1', color: '#ffffff' } } ] },
    { id: 'prc20-card-2', type: 'card', props: { variant: 'pricing', background: 'rgba(255,255,255,0.06)', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc20-c2-badge', type: 'badge', props: { content: 'POPULER', background: '#1e1b4b', color: '#c4b5fd' } }, { id: 'prc20-c2-title', type: 'heading', props: { content: 'Paket Profesional', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '12px 0 4px 0' } }, { id: 'prc20-c2-price', type: 'heading', props: { content: 'Rp 5.000.000', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#ffffff', margin: '8px 0 16px 0' } }, { id: 'prc20-c2-desc', type: 'text', props: { content: 'Custom Multi-Template, SEO Optimization, Payment Gateway, Priority 24/7', fontSize: '14px', color: '#a5b4fc', margin: '0 0 24px 0' } }, { id: 'prc20-c2-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#6366f1', color: '#ffffff' } } ] },
    { id: 'prc20-card-3', type: 'card', props: { variant: 'pricing', background: 'rgba(255,255,255,0.06)', borderRadius: '24px', shadow: 'md', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', hoverEffect: 'lift', padding: '32px' }, childrenComponents: [ { id: 'prc20-c3-badge', type: 'badge', props: { content: 'ENTERPRISE', background: '#1e1b4b', color: '#c4b5fd' } }, { id: 'prc20-c3-title', type: 'heading', props: { content: 'Paket Perusahaan', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#ffffff', margin: '12px 0 4px 0' } }, { id: 'prc20-c3-price', type: 'heading', props: { content: 'Custom', level: 'h2', fontSize: '32px', fontWeight: '800', color: '#ffffff', margin: '8px 0 16px 0' } }, { id: 'prc20-c3-desc', type: 'text', props: { content: 'Sistem Enterprise, Dedicated Server, SLA 99.9%, Account Manager', fontSize: '14px', color: '#a5b4fc', margin: '0 0 24px 0' } }, { id: 'prc20-c3-btn', type: 'button', props: { label: 'Pilih Paket', href: '#harga', variant: 'primary', size: 'medium', radius: 'full', background: '#6366f1', color: '#ffffff' } } ] },
  ],
  'map-01': [
    { id: 'map1-badge', type: 'badge', props: { content: 'Lokasi', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'map1-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map1-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map1-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#64748b', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map1-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#4f46e5', color: '#ffffff' } },
    { id: 'map1-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
  ],
  'map-02': [
    { id: 'map2-badge', type: 'badge', props: { content: 'Lokasi', background: '#1c1917', color: '#e7c873' } },
    { id: 'map2-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map2-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#a8a29e', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map2-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#a8a29e', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map2-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#e7c873', color: '#1c1917' } },
    { id: 'map2-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#ffffff' } },
  ],
  'map-03': [
    { id: 'map3-badge', type: 'badge', props: { content: 'Lokasi', background: '#fff7ed', color: '#ea580c' } },
    { id: 'map3-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map3-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map3-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#64748b', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map3-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#ea580c', color: '#ffffff' } },
    { id: 'map3-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
  ],
  'map-04': [
    { id: 'map4-badge', type: 'badge', props: { content: 'Lokasi', background: '#000000', color: '#facc15' } },
    { id: 'map4-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#000000', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map4-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#000000', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map4-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#000000', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map4-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#000000', color: '#facc15' } },
    { id: 'map4-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#000000' } },
  ],
  'map-05': [
    { id: 'map5-badge', type: 'badge', props: { content: 'Lokasi', background: '#ffffff', color: '#78716c' } },
    { id: 'map5-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#1c1917', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map5-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#78716c', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map5-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#78716c', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map5-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#1c1917', color: '#ffffff' } },
    { id: 'map5-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#1c1917' } },
  ],
  'map-06': [
    { id: 'map6-badge', type: 'badge', props: { content: 'Lokasi', background: '#1e1b4b', color: '#a5b4fc' } },
    { id: 'map6-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map6-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#a5b4fc', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map6-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#a5b4fc', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map6-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#8b5cf6', color: '#ffffff' } },
    { id: 'map6-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#ffffff' } },
  ],
  'map-07': [
    { id: 'map7-badge', type: 'badge', props: { content: 'Lokasi', background: '#052e16', color: '#4ade80' } },
    { id: 'map7-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#e2e8f0', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map7-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#94a3b8', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map7-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#94a3b8', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map7-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#22c55e', color: '#052e16' } },
    { id: 'map7-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#e2e8f0' } },
  ],
  'map-08': [
    { id: 'map8-badge', type: 'badge', props: { content: 'Lokasi', background: '#fce7f3', color: '#be185d' } },
    { id: 'map8-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#831843', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map8-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#9d7b8c', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map8-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#9d7b8c', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map8-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#db2777', color: '#ffffff' } },
    { id: 'map8-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#831843' } },
  ],
  'map-09': [
    { id: 'map9-badge', type: 'badge', props: { content: 'Lokasi', background: '#78350f', color: '#fde68a' } },
    { id: 'map9-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#78350f', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map9-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#92400e', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map9-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#92400e', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map9-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#92400e', color: '#fef3c7' } },
    { id: 'map9-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#78350f' } },
  ],
  'map-10': [
    { id: 'map10-badge', type: 'badge', props: { content: 'Lokasi', background: '#fef2f2', color: '#dc2626' } },
    { id: 'map10-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map10-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map10-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#64748b', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map10-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#dc2626', color: '#ffffff' } },
    { id: 'map10-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
  ],
  'map-11': [
    { id: 'map11-badge', type: 'badge', props: { content: 'Lokasi', background: '#ffffff', color: '#7c3aed' } },
    { id: 'map11-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map11-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#ddd6fe', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map11-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#ddd6fe', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map11-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#ffffff', color: '#6d28d9' } },
    { id: 'map11-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#ffffff' } },
  ],
  'map-12': [
    { id: 'map12-badge', type: 'badge', props: { content: 'Lokasi', background: '#0f172a', color: '#38bdf8' } },
    { id: 'map12-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map12-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#94a3b8', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map12-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#94a3b8', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map12-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#38bdf8', color: '#082f49' } },
    { id: 'map12-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#ffffff' } },
  ],
  'map-13': [
    { id: 'map13-badge', type: 'badge', props: { content: 'Lokasi', background: '#fce7f3', color: '#ec4899' } },
    { id: 'map13-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map13-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map13-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#64748b', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map13-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#ec4899', color: '#ffffff' } },
    { id: 'map13-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
  ],
  'map-14': [
    { id: 'map14-badge', type: 'badge', props: { content: 'Lokasi', background: '#eff6ff', color: '#1d4ed8' } },
    { id: 'map14-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map14-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map14-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#64748b', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map14-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#1e40af', color: '#ffffff' } },
    { id: 'map14-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
  ],
  'map-15': [
    { id: 'map15-badge', type: 'badge', props: { content: 'Lokasi', background: '#0f172a', color: '#ffffff' } },
    { id: 'map15-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map15-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map15-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#64748b', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map15-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    { id: 'map15-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
  ],
  'map-16': [
    { id: 'map16-badge', type: 'badge', props: { content: 'Lokasi', background: '#dcfce7', color: '#166534' } },
    { id: 'map16-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#064e3b', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map16-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#4d7c0f', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map16-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#4d7c0f', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map16-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#16a34a', color: '#ffffff' } },
    { id: 'map16-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#064e3b' } },
  ],
  'map-17': [
    { id: 'map17-badge', type: 'badge', props: { content: 'Lokasi', background: '#dc2626', color: '#ffffff' } },
    { id: 'map17-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map17-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#fecaca', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map17-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#fecaca', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map17-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#dc2626', color: '#ffffff' } },
    { id: 'map17-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#ffffff' } },
  ],
  'map-18': [
    { id: 'map18-badge', type: 'badge', props: { content: 'Lokasi', background: '#fff7ed', color: '#ea580c' } },
    { id: 'map18-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map18-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map18-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#64748b', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map18-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#f97316', color: '#ffffff' } },
    { id: 'map18-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
  ],
  'map-19': [
    { id: 'map19-badge', type: 'badge', props: { content: 'Lokasi', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'map19-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map19-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#64748b', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map19-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#64748b', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map19-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#0f172a', color: '#ffffff' } },
    { id: 'map19-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#0f172a' } },
  ],
  'map-20': [
    { id: 'map20-badge', type: 'badge', props: { content: 'Lokasi', background: '#1e1b4b', color: '#c4b5fd' } },
    { id: 'map20-heading', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'map20-text', type: 'text', props: { content: 'Jl. Merdeka No. 123, Jakarta Pusat. Buka Senin-Sabtu 08.00-17.00.', fontSize: '15px', color: '#a5b4fc', align: 'center', margin: '0 0 20px 0' } },
    { id: 'map20-addr', type: 'text', props: { content: '123 Main Street, City', fontSize: '13px', color: '#a5b4fc', align: 'center', margin: '0 0 8px 0' } },
    { id: 'map20-cta', type: 'button', props: { label: 'Buka Maps', href: '#maps', variant: 'primary', size: 'medium', radius: 'full', background: '#6366f1', color: '#ffffff' } },
    { id: 'map20-cta2', type: 'button', props: { label: 'Hubungi', href: '#kontak', variant: 'ghost', size: 'medium', background: 'transparent', color: '#ffffff' } },
  ],
  'navbar-06': [
    { id: 'logo-nav06', type: 'heading', props: { content: 'TRANSGO', level: 'h2', fontSize: '20px', fontWeight: '900', color: '#ffffff' } },
    { id: 'nav-home-06', type: 'button', props: { label: 'Home', href: '#hero', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'nav-solutions-06', type: 'button', props: { label: 'Solutions', href: '#services', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'nav-fleet-06', type: 'button', props: { label: 'Fleet', href: '#fleet', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'nav-coverage-06', type: 'button', props: { label: 'Coverage', href: '#coverage', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'nav-about-06', type: 'button', props: { label: 'About', href: '#stats', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'nav-contact-06', type: 'button', props: { label: 'Contact', href: '#contact', variant: 'ghost', size: 'small', background: 'transparent', color: '#94a3b8' } },
    { id: 'cta-nav06', type: 'button', props: { label: 'Track Shipment →', href: '#tracking', variant: 'primary', size: 'small', background: '#2563eb', color: '#ffffff' } },
  ],
  'hero-09': [
    { id: 'hero09-badge', type: 'badge', props: { content: 'NATIONAL LOGISTICS NETWORK', variant: 'primary', size: 'medium' } },
    { id: 'hero09-title', type: 'heading', props: { content: 'Moving Businesses Forward, Across Indonesia.', level: 'h1', fontSize: '48px', fontWeight: '800', color: '#ffffff' } },
    { id: 'hero09-desc', type: 'text', props: { content: 'Providing reliable, data-driven, and multimodal supply chain solutions.', fontSize: '18px', color: '#94a3b8' } },
    { id: 'hero09-btn1', type: 'button', props: { label: 'Request a Quote →', href: '#services', variant: 'primary', size: 'large', background: '#2563eb', color: '#ffffff' } },
    { id: 'hero09-btn2', type: 'button', props: { label: 'Track Shipment', href: '#tracking', variant: 'outline', size: 'large', background: 'transparent', color: '#ffffff' } },
    { id: 'hero09-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=80', alt: 'Cargo Ship', width: '100%', height: '480px', objectFit: 'cover' } }
  ],
  'fleet-02': [
    { id: 'fleet02-heading', type: 'heading', props: { content: 'Armada & Fasilitas', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#ffffff' } },
    { id: 'fleet02-desc', type: 'text', props: { content: 'Kami mengoperasikan armada modern untuk memastikan pengiriman tepat waktu.', fontSize: '16px', color: '#94a3b8' } },
    { id: 'fleet02-img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&auto=format&fit=crop&q=80', alt: 'Logistics Fleet', width: '100%', height: '400px', objectFit: 'cover' } }
  ],
  'fleet-03': [
      {
          "id": "flt3-badge",
          "type": "badge",
          "props": {
              "content": "🚛 500+ Armada Aktif",
              "background": "#1c1917",
              "color": "#f97316"
          }
      },
      {
          "id": "flt3-heading",
          "type": "heading",
          "props": {
              "content": "Armada Berat Kelas Dunia",
              "level": "h2",
              "fontSize": "44px",
              "fontWeight": "900",
              "color": "#fafaf9"
          }
      },
      {
          "id": "flt3-text",
          "type": "text",
          "props": {
              "content": "Truk tronton 40ft, kapal kargo samudra, dan air cargo beroperasi 24 jam nonstop untuk kelancaran logistik bisnis Anda.",
              "fontSize": "16px",
              "color": "#a8a29e"
          }
      },
      {
          "id": "flt3-img",
          "type": "image",
          "props": {
              "src": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&auto=format&fit=crop&q=80",
              "alt": "Veloce Fleet",
              "width": "100%",
              "height": "100%",
              "objectFit": "cover"
          }
      }
  ],
  'fleet-04': [
      {
          "id": "flt4-badge",
          "type": "badge",
          "props": {
              "content": "★ FLEET STATS 2026",
              "background": "#fef08a",
              "color": "#000000"
          }
      },
      {
          "id": "flt4-heading",
          "type": "heading",
          "props": {
              "content": "KAPASITAS ARMADA KAMI",
              "level": "h2",
              "fontSize": "44px",
              "fontWeight": "900",
              "color": "#000000"
          }
      },
      {
          "id": "flt4-text",
          "type": "text",
          "props": {
              "content": "Angkutan darat, laut, dan udara berstandar industri siap melayani distribusi produk Anda ke seluruh Nusantara.",
              "fontSize": "16px",
              "color": "#334155"
          }
      }
  ],
  'fleet-05': [
      {
          "id": "flt5-badge",
          "type": "badge",
          "props": {
              "content": "Armada & Distribusi",
              "background": "#f1f5f9",
              "color": "#475569"
          }
      },
      {
          "id": "flt5-heading",
          "type": "heading",
          "props": {
              "content": "Efisiensi Tinggi di Setiap Rute",
              "level": "h2",
              "fontSize": "38px",
              "fontWeight": "700",
              "color": "#0f172a"
          }
      },
      {
          "id": "flt5-text",
          "type": "text",
          "props": {
              "content": "Koleksi armada modern yang dirawat berkala untuk memastikan ketepatan jadwal dan keamanan kargo Anda.",
              "fontSize": "16px",
              "color": "#64748b"
          }
      }
  ],
  'fleet-06': [
      {
          "id": "flt6-badge",
          "type": "badge",
          "props": {
              "content": "✦ REAL-TIME IOT TELEMETRY",
              "background": "#0e1726",
              "color": "#38bdf8"
          }
      },
      {
          "id": "flt6-heading",
          "type": "heading",
          "props": {
              "content": "Kendali Armada Berbasis Sensor Pintar",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#f8fafc"
          }
      },
      {
          "id": "flt6-text",
          "type": "text",
          "props": {
              "content": "Setiap armada dilengkapi sensor telemetri pintar, GPS multi-frekuensi, dan kamera dual-dashcam terhubung langsung ke command center.",
              "fontSize": "16px",
              "color": "#94a3b8"
          }
      }
  ],
  'fleet-07': [
      {
          "id": "flt7-badge",
          "type": "badge",
          "props": {
              "content": "SYS.FLEET_MONITOR_v4",
              "background": "#022c22",
              "color": "#4ade80"
          }
      },
      {
          "id": "flt7-heading",
          "type": "heading",
          "props": {
              "content": "Logistik Terintegrasi API Real-time",
              "level": "h2",
              "fontSize": "36px",
              "fontWeight": "800",
              "color": "#f0fdf4"
          }
      },
      {
          "id": "flt7-text",
          "type": "text",
          "props": {
              "content": "Pantau posisi armada, konsumsi bahan bakar, suhu kargo, dan estimasi waktu tiba langsung melalui API endpoint pengiriman.",
              "fontSize": "15px",
              "color": "#86efac"
          }
      }
  ],
  'fleet-08': [
      {
          "id": "flt8-badge",
          "type": "badge",
          "props": {
              "content": "✦ Pilihan Armada Lengkap",
              "background": "#fdf2f8",
              "color": "#db2777"
          }
      },
      {
          "id": "flt8-heading",
          "type": "heading",
          "props": {
              "content": "Solusi Distribusi Sesuai Skala Bisnis",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#1e293b"
          }
      },
      {
          "id": "flt8-text",
          "type": "text",
          "props": {
              "content": "Dari blind van pengiriman kilat perkotaan hingga truk tronton 40ft untuk distribusi pabrik antar provinsi.",
              "fontSize": "16px",
              "color": "#64748b"
          }
      }
  ],
  'fleet-09': [
      {
          "id": "flt9-badge",
          "type": "badge",
          "props": {
              "content": "CORPORATE FLEET SOLUTION",
              "background": "#1e293b",
              "color": "#38bdf8"
          }
      },
      {
          "id": "flt9-heading",
          "type": "heading",
          "props": {
              "content": "Keandalan Distribusi Skala Enterprise",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#ffffff"
          }
      },
      {
          "id": "flt9-text",
          "type": "text",
          "props": {
              "content": "Dukungan armada khusus berkapasitas besar dengan SLA ketat untuk memenuhi kebutuhan rantai pasok industri skala nasional.",
              "fontSize": "16px",
              "color": "#94a3b8"
          }
      },
      {
          "id": "flt9-img",
          "type": "image",
          "props": {
              "src": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&auto=format&fit=crop&q=80",
              "alt": "Corporate Fleet",
              "width": "100%",
              "height": "100%",
              "objectFit": "cover"
          }
      }
  ],
  'fleet-10': [
      {
          "id": "flt10-badge",
          "type": "badge",
          "props": {
              "content": "KATEGORI MODAL TRANSPORTASI",
              "background": "#eff6ff",
              "color": "#2563eb"
          }
      },
      {
          "id": "flt10-heading",
          "type": "heading",
          "props": {
              "content": "Armada Darat, Laut, dan Udara Terpadu",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#0f172a"
          }
      },
      {
          "id": "flt10-text",
          "type": "text",
          "props": {
              "content": "Eksplorasi spesifikasi teknis, kapasitas payload, dan jangkauan rute dari masing-masing tipe armada kami.",
              "fontSize": "16px",
              "color": "#64748b"
          }
      }
  ],
  'fleet-11': [
      {
          "id": "flt11-badge",
          "type": "badge",
          "props": {
              "content": "🌱 ECO-FRIENDLY FLEET",
              "background": "#ecfdf5",
              "color": "#059669"
          }
      },
      {
          "id": "flt11-heading",
          "type": "heading",
          "props": {
              "content": "Transportasi Berkelanjutan & Rendah Emisi",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#064e3b"
          }
      },
      {
          "id": "flt11-text",
          "type": "text",
          "props": {
              "content": "Komitmen kami terhadap lingkungan melalui armada kendaraan listrik (EV) dan truk standar emisi Euro 5 yang ramah lingkungan.",
              "fontSize": "16px",
              "color": "#047857"
          }
      }
  ],
  'fleet-12': [
      {
          "id": "flt12-badge",
          "type": "badge",
          "props": {
              "content": "⚡ FAST LOGISTICS CORRIDOR",
              "background": "#ffedd5",
              "color": "#ea580c"
          }
      },
      {
          "id": "flt12-heading",
          "type": "heading",
          "props": {
              "content": "Kecepatan & Presisi Pengiriman Maksimal",
              "level": "h2",
              "fontSize": "42px",
              "fontWeight": "900",
              "color": "#0f172a"
          }
      },
      {
          "id": "flt12-text",
          "type": "text",
          "props": {
              "content": "Armada ekspres beroperasi di sepanjang jalur koridor utama pulau Jawa, Sumatera, dan Bali dengan transit point terdedikasi.",
              "fontSize": "16px",
              "color": "#64748b"
          }
      }
  ],
  'fleet-13': [
      {
          "id": "flt13-badge",
          "type": "badge",
          "props": {
              "content": "FLEET SPECIFICATIONS & PAYLOAD",
              "background": "#f1f5f9",
              "color": "#334155"
          }
      },
      {
          "id": "flt13-heading",
          "type": "heading",
          "props": {
              "content": "Spesifikasi & Kapasitas Teknis Armada",
              "level": "h2",
              "fontSize": "38px",
              "fontWeight": "800",
              "color": "#0f172a"
          }
      },
      {
          "id": "flt13-text",
          "type": "text",
          "props": {
              "content": "Panduan lengkap spesifikasi dimensi, tonase muatan, dan peruntukan kargo untuk setiap unit operasional kami.",
              "fontSize": "16px",
              "color": "#64748b"
          }
      }
  ],
  'fleet-14': [
      {
          "id": "flt14-badge",
          "type": "badge",
          "props": {
              "content": "✦ AI-POWERED DISPATCH",
              "background": "#e0f2fe",
              "color": "#0284c7"
          }
      },
      {
          "id": "flt14-heading",
          "type": "heading",
          "props": {
              "content": "Manajemen Armada Berbasis Kecerdasan Buatan",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#0f172a"
          }
      },
      {
          "id": "flt14-text",
          "type": "text",
          "props": {
              "content": "Algoritma AI cerdas yang mengoptimalkan rute perjalanan secara dinamis guna memangkas waktu tempuh hingga 35%.",
              "fontSize": "16px",
              "color": "#64748b"
          }
      }
  ],
  'fleet-15': [
      {
          "id": "flt15-badge",
          "type": "badge",
          "props": {
              "content": "EST. 2010 — MILESTONES",
              "background": "#f8fafc",
              "color": "#475569"
          }
      },
      {
          "id": "flt15-heading",
          "type": "heading",
          "props": {
              "content": "Evolusi Armada & Transformasi Layanan",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#0f172a"
          }
      },
      {
          "id": "flt15-text",
          "type": "text",
          "props": {
              "content": "Perjalanan 15 tahun dalam memperluas jangkauan armada dan mengadopsi standar teknologi transportasi mutakhir.",
              "fontSize": "16px",
              "color": "#64748b"
          }
      }
  ],
  'fleet-16': [
      {
          "id": "flt16-badge",
          "type": "badge",
          "props": {
              "content": "PORTFOLIO SHOWCASE",
              "background": "#faf5ff",
              "color": "#9333ea"
          }
      },
      {
          "id": "flt16-heading",
          "type": "heading",
          "props": {
              "content": "Armada Modern Berstandar Internasional",
              "level": "h2",
              "fontSize": "42px",
              "fontWeight": "800",
              "color": "#0f172a"
          }
      },
      {
          "id": "flt16-text",
          "type": "text",
          "props": {
              "content": "Koleksi dokumentasi visual armada kami yang beroperasi di berbagai proyek distribusi nasional dan industri manufaktur.",
              "fontSize": "16px",
              "color": "#64748b"
          }
      }
  ],
  'fleet-17': [
      {
          "id": "flt17-badge",
          "type": "badge",
          "props": {
              "content": "TRANSGO HEAVY HAULAGE",
              "background": "#fef3c7",
              "color": "#d97706"
          }
      },
      {
          "id": "flt17-heading",
          "type": "heading",
          "props": {
              "content": "Siap Mengangkut Muatan Berat Hingga 50 Ton",
              "level": "h2",
              "fontSize": "42px",
              "fontWeight": "900",
              "color": "#0f172a"
          }
      },
      {
          "id": "flt17-text",
          "type": "text",
          "props": {
              "content": "Armada multi-axle lowbed dan prime mover bertenaga tinggi untuk proyek infrastruktur, pertambangan, dan konstruksi skala besar.",
              "fontSize": "16px",
              "color": "#64748b"
          }
      },
      {
          "id": "flt17-img",
          "type": "image",
          "props": {
              "src": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&auto=format&fit=crop&q=80",
              "alt": "Transgo Heavy Fleet",
              "width": "100%",
              "height": "100%",
              "objectFit": "cover"
          }
      }
  ],
  'fleet-18': [
      {
          "id": "flt18-badge",
          "type": "badge",
          "props": {
              "content": "📱 MOBILE DISPATCH APP",
              "background": "#fff1f2",
              "color": "#e11d48"
          }
      },
      {
          "id": "flt18-heading",
          "type": "heading",
          "props": {
              "content": "Pesan & Pantau Armada Langsung dari Gadget Anda",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#0f172a"
          }
      },
      {
          "id": "flt18-text",
          "type": "text",
          "props": {
              "content": "Kemudahan reservasi armada truk, tracking lokasi muatan langsung secara live, dan digital proof-of-delivery dalam satu aplikasi.",
              "fontSize": "16px",
              "color": "#64748b"
          }
      }
  ],
  'fleet-19': [
      {
          "id": "flt19-badge",
          "type": "badge",
          "props": {
              "content": "ORION SAFETY STANDARDS",
              "background": "#f0fdf4",
              "color": "#16a34a"
          }
      },
      {
          "id": "flt19-heading",
          "type": "heading",
          "props": {
              "content": "Inspeksi & Standar Keselamatan Terketat",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#0f172a"
          }
      },
      {
          "id": "flt19-text",
          "type": "text",
          "props": {
              "content": "Setiap unit kendaraan menjalani 40 titik pengecekan mekanis dan sanitasi sebelum diberangkatkan menuju lokasi pengiriman.",
              "fontSize": "16px",
              "color": "#64748b"
          }
      }
  ],
  'fleet-20': [
      {
          "id": "flt20-badge",
          "type": "badge",
          "props": {
              "content": "✦ AETHER ULTIMATE FLEET ECOSYSTEM",
              "background": "#1e1b4b",
              "color": "#818cf8"
          }
      },
      {
          "id": "flt20-heading",
          "type": "heading",
          "props": {
              "content": "Infrastruktur Logistik Modern Era Baru",
              "level": "h2",
              "fontSize": "44px",
              "fontWeight": "900",
              "color": "#fafaf9"
          }
      },
      {
          "id": "flt20-text",
          "type": "text",
          "props": {
              "content": "Sinergi tanpa batas antara armada transportasi darat, laut, dan udara dengan dukungan teknologi terdepan dan reliabilitas tanpa kompromi.",
              "fontSize": "17px",
              "color": "#cbd5e1"
          }
      }
  ],
  'coverage-01': [
      {
          "id": "cov1-badge",
          "type": "badge",
          "props": {
              "content": "✦ Jaringan Distribusi Nasional 2026",
              "background": "#eef2ff",
              "color": "#4f46e5"
          }
      },
      {
          "id": "cov1-heading",
          "type": "heading",
          "props": {
              "content": "Jangkauan Pengiriman Seluruh Nusantara",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#0f172a",
              "align": "center",
              "margin": "0 0 12px 0"
          }
      },
      {
          "id": "cov1-subtext",
          "type": "text",
          "props": {
              "content": "Melayani rute pengiriman ke 38 provinsi, 514 kota/kabupaten, dan pelabuhan utama di seluruh kepulauan Indonesia dengan jaminan kepastian waktu.",
              "fontSize": "16px",
              "color": "#64748b",
              "align": "center",
              "margin": "0 0 48px 0"
          }
      }
  ],
  'coverage-02': [
      {
          "id": "cov02-badge",
          "type": "badge",
          "props": {
              "content": "✦ PREMIER DISTRIBUTION NETWORK",
              "background": "#1c1917",
              "color": "#e7c873"
          }
      },
      {
          "id": "cov02-heading",
          "type": "heading",
          "props": {
              "content": "Jangkauan Distribusi Nasional Berstandar Tinggi",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#fafaf9",
              "align": "left",
              "margin": "0 0 14px 0"
          }
      },
      {
          "id": "cov02-desc",
          "type": "text",
          "props": {
              "content": "Infrastruktur rute logistik multi-modal yang menghubungkan hub metropolitan ke seluruh penjuru kepulauan dengan kepastian jadwal tanpa jeda.",
              "fontSize": "16px",
              "color": "#a8a29e",
              "align": "left",
              "margin": "0 0 32px 0"
          }
      }
  ],
  'coverage-03': [
      {
          "id": "cov3-badge",
          "type": "badge",
          "props": {
              "content": "⚡ 24H EXPRESS CORRIDOR",
              "background": "#1c1917",
              "color": "#f97316"
          }
      },
      {
          "id": "cov3-heading",
          "type": "heading",
          "props": {
              "content": "Jalur Ekspres Logistik Antar Kota & Pulau",
              "level": "h2",
              "fontSize": "42px",
              "fontWeight": "900",
              "color": "#fafaf9",
              "margin": "0 0 16px 0"
          }
      },
      {
          "id": "cov3-text",
          "type": "text",
          "props": {
              "content": "Koneksi rute ekspres non-stop menghubungkan pusat manufaktur ke gerbang distribusi utama tanpa hambatan.",
              "fontSize": "16px",
              "color": "#a8a29e",
              "margin": "0 0 32px 0"
          }
      },
      {
          "id": "cov3-btn",
          "type": "button",
          "props": {
              "label": "Lihat Seluruh Rute Transit →",
              "href": "#routes",
              "variant": "primary",
              "background": "#f97316",
              "color": "#ffffff"
          }
      }
  ],
  'coverage-04': [
      {
          "id": "cov4-badge",
          "type": "badge",
          "props": {
              "content": "★ 38 PROVINSI TERKONEKSI",
              "background": "#fef08a",
              "color": "#000000"
          }
      },
      {
          "id": "cov4-heading",
          "type": "heading",
          "props": {
              "content": "KAPASITAS JANGKAUAN LOGISTIK",
              "level": "h2",
              "fontSize": "44px",
              "fontWeight": "900",
              "color": "#000000",
              "align": "center",
              "margin": "0 0 12px 0"
          }
      },
      {
          "id": "cov4-text",
          "type": "text",
          "props": {
              "content": "Distribusi barang tanpa kompromi. Rute darat, laut, dan udara aktif setiap hari di seluruh pelosok Indonesia.",
              "fontSize": "16px",
              "color": "#1e293b",
              "align": "center",
              "margin": "0 0 40px 0"
          }
      }
  ],
  'coverage-05': [
      {
          "id": "cov5-badge",
          "type": "badge",
          "props": {
              "content": "Jangkauan Layanan",
              "background": "#f1f5f9",
              "color": "#475569"
          }
      },
      {
          "id": "cov5-heading",
          "type": "heading",
          "props": {
              "content": "Menghubungkan Titik Distribusi Tanpa Hambatan",
              "level": "h2",
              "fontSize": "38px",
              "fontWeight": "700",
              "color": "#0f172a",
              "align": "center",
              "margin": "0 0 12px 0"
          }
      },
      {
          "id": "cov5-text",
          "type": "text",
          "props": {
              "content": "Kami membangun jaringan distribusi yang konsisten, transparan, dan terukur di setiap provinsi.",
              "fontSize": "16px",
              "color": "#64748b",
              "align": "center",
              "margin": "0 0 48px 0"
          }
      }
  ],
  'coverage-06': [
      {
          "id": "cov6-badge",
          "type": "badge",
          "props": {
              "content": "✦ SATELLITE TELEMETRY MAPPING",
              "background": "#0e1726",
              "color": "#38bdf8"
          }
      },
      {
          "id": "cov6-heading",
          "type": "heading",
          "props": {
              "content": "Jaringan Logistik Cerdas Terhubung Satelit",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#f8fafc",
              "align": "center",
              "margin": "0 0 14px 0"
          }
      },
      {
          "id": "cov6-text",
          "type": "text",
          "props": {
              "content": "Monitoring titik singgah armada dan gudang transit dengan latensi sub-detik di seluruh koordinat Indonesia.",
              "fontSize": "16px",
              "color": "#94a3b8",
              "align": "center",
              "margin": "0 0 40px 0"
          }
      }
  ],
  'coverage-07': [
      {
          "id": "cov7-badge",
          "type": "badge",
          "props": {
              "content": "SYS.GEO_DISTRIBUTION_v4",
              "background": "#022c22",
              "color": "#4ade80"
          }
      },
      {
          "id": "cov7-heading",
          "type": "heading",
          "props": {
              "content": "Logistik Terbuka Berbasis Jaringan API",
              "level": "h2",
              "fontSize": "38px",
              "fontWeight": "800",
              "color": "#f0fdf4",
              "align": "center",
              "margin": "0 0 12px 0"
          }
      },
      {
          "id": "cov7-text",
          "type": "text",
          "props": {
              "content": "Akses langsung ratusan titik distribusi regional melalui RESTful endpoint dengan SLA ketersediaan 99.99%.",
              "fontSize": "15px",
              "color": "#86efac",
              "align": "center",
              "margin": "0 0 40px 0"
          }
      }
  ],
  'coverage-08': [
      {
          "id": "cov8-badge",
          "type": "badge",
          "props": {
              "content": "🌸 JANGKAUAN DISTRIBUSI LENGKAP",
              "background": "#fdf2f8",
              "color": "#db2777"
          }
      },
      {
          "id": "cov8-heading",
          "type": "heading",
          "props": {
              "content": "Zona Pengiriman Seluruh Wilayah Indonesia",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#1e293b",
              "align": "center",
              "margin": "0 0 14px 0"
          }
      },
      {
          "id": "cov8-text",
          "type": "text",
          "props": {
              "content": "Temukan kemudahan pengiriman paket dengan jangkauan merata dan tarif terstandardisasi di setiap pulau.",
              "fontSize": "16px",
              "color": "#64748b",
              "align": "center",
              "margin": "0 0 40px 0"
          }
      }
  ],
  'coverage-09': [
      {
          "id": "cov9-badge",
          "type": "badge",
          "props": {
              "content": "ENTERPRISE DISTRIBUTION SLA",
              "background": "#1e293b",
              "color": "#38bdf8"
          }
      },
      {
          "id": "cov9-heading",
          "type": "heading",
          "props": {
              "content": "Cakupan Distribusi Skala Korporasi Nasional",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#ffffff",
              "align": "center",
              "margin": "0 0 14px 0"
          }
      },
      {
          "id": "cov9-text",
          "type": "text",
          "props": {
              "content": "Standar SLA tier 1 dengan jaminan fulfillment 99.8% untuk mendukung rantai pasok industri manufaktur dan FMCG.",
              "fontSize": "16px",
              "color": "#94a3b8",
              "align": "center",
              "margin": "0 0 40px 0"
          }
      }
  ],
  'coverage-10': [
      {
          "id": "cov10-badge",
          "type": "badge",
          "props": {
              "content": "TAB PETA WILAYAH",
              "background": "#eff6ff",
              "color": "#2563eb"
          }
      },
      {
          "id": "cov10-heading",
          "type": "heading",
          "props": {
              "content": "Eksplorasi Jangkauan Berdasarkan Wilayah",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#0f172a",
              "align": "center",
              "margin": "0 0 12px 0"
          }
      },
      {
          "id": "cov10-text",
          "type": "text",
          "props": {
              "content": "Pilih pulau atau zona di bawah ini untuk memeriksa daftar kota jangkauan dan waktu tempuh pengiriman.",
              "fontSize": "16px",
              "color": "#64748b",
              "align": "center",
              "margin": "0 0 36px 0"
          }
      }
  ],
  'coverage-11': [
      {
          "id": "cov11-badge",
          "type": "badge",
          "props": {
              "content": "🌱 ECO-FRIENDLY DISTRIBUTION",
              "background": "#ecfdf5",
              "color": "#059669"
          }
      },
      {
          "id": "cov11-heading",
          "type": "heading",
          "props": {
              "content": "Distribusi Berkelanjutan Ramah Lingkungan",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#064e3b",
              "align": "center",
              "margin": "0 0 14px 0"
          }
      },
      {
          "id": "cov11-text",
          "type": "text",
          "props": {
              "content": "Mengurangi jejak karbon logistik lewat rute optimal, armada listrik untuk last-mile delivery, dan green warehouse di 30 kota utama.",
              "fontSize": "16px",
              "color": "#047857",
              "align": "center",
              "margin": "0 0 40px 0"
          }
      }
  ],
  'coverage-12': [
      {
          "id": "cov12-badge",
          "type": "badge",
          "props": {
              "content": "⚡ 24-HOUR SUNSET CORRIDOR",
              "background": "#ffedd5",
              "color": "#ea580c"
          }
      },
      {
          "id": "cov12-heading",
          "type": "heading",
          "props": {
              "content": "Kecepatan Pengiriman Lintas Koridor Senja",
              "level": "h2",
              "fontSize": "42px",
              "fontWeight": "900",
              "color": "#0f172a",
              "align": "center",
              "margin": "0 0 14px 0"
          }
      },
      {
          "id": "cov12-text",
          "type": "text",
          "props": {
              "content": "Jadwal keberangkatan malam hari memastikan paket Anda tiba di kota tujuan keesokan paginya tanpa penundaan.",
              "fontSize": "16px",
              "color": "#64748b",
              "align": "center",
              "margin": "0 0 40px 0"
          }
      }
  ],
  'coverage-13': [
      {
          "id": "cov13-badge",
          "type": "badge",
          "props": {
              "content": "TABEL MATRIKS JANGKAUAN 2026",
              "background": "#f1f5f9",
              "color": "#334155"
          }
      },
      {
          "id": "cov13-heading",
          "type": "heading",
          "props": {
              "content": "Matriks Jangkauan & Estimasi Waktu Transit",
              "level": "h2",
              "fontSize": "38px",
              "fontWeight": "800",
              "color": "#0f172a",
              "align": "center",
              "margin": "0 0 12px 0"
          }
      },
      {
          "id": "cov13-text",
          "type": "text",
          "props": {
              "content": "Daftar resmi spesifikasi rute reguler dan ekspres yang berlaku di seluruh jaringan operasional.",
              "fontSize": "16px",
              "color": "#64748b",
              "align": "center",
              "margin": "0 0 40px 0"
          }
      }
  ],
  'coverage-14': [
      {
          "id": "cov14-badge",
          "type": "badge",
          "props": {
              "content": "✦ AI DYNAMIC REROUTING",
              "background": "#e0f2fe",
              "color": "#0284c7"
          }
      },
      {
          "id": "cov14-heading",
          "type": "heading",
          "props": {
              "content": "Optimasi Rute Jangkauan Berbasis Kecerdasan Buatan",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#0f172a",
              "align": "center",
              "margin": "0 0 14px 0"
          }
      },
      {
          "id": "cov14-text",
          "type": "text",
          "props": {
              "content": "Algoritma cerdas yang memilih jalur tercepat secara otomatis berdasarkan data cuaca, lalu lintas, dan kapasitas hub.",
              "fontSize": "16px",
              "color": "#64748b",
              "align": "center",
              "margin": "0 0 40px 0"
          }
      }
  ],
  'coverage-15': [
      {
          "id": "cov15-badge",
          "type": "badge",
          "props": {
              "content": "EST. 2010 — EKSPANSI JARINGAN",
              "background": "#f8fafc",
              "color": "#475569"
          }
      },
      {
          "id": "cov15-heading",
          "type": "heading",
          "props": {
              "content": "15 Tahun Membangun Jaringan Logistik Nasional",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#0f172a",
              "align": "center",
              "margin": "0 0 14px 0"
          }
      },
      {
          "id": "cov15-text",
          "type": "text",
          "props": {
              "content": "Perjalanan konsisten dalam memperluas jangkauan rute darat, laut, dan udara ke setiap sudut tanah air.",
              "fontSize": "16px",
              "color": "#64748b",
              "align": "center",
              "margin": "0 0 48px 0"
          }
      }
  ],
  'coverage-16': [
      {
          "id": "cov16-badge",
          "type": "badge",
          "props": {
              "content": "INTERNATIONAL GATEWAY PORTS",
              "background": "#faf5ff",
              "color": "#9333ea"
          }
      },
      {
          "id": "cov16-heading",
          "type": "heading",
          "props": {
              "content": "Gerbang Pelabuhan & Hub Internasional Terpadu",
              "level": "h2",
              "fontSize": "42px",
              "fontWeight": "800",
              "color": "#0f172a",
              "align": "center",
              "margin": "0 0 14px 0"
          }
      },
      {
          "id": "cov16-text",
          "type": "text",
          "props": {
              "content": "Konektivitas langsung dari pelabuhan samudra Indonesia ke hub perdagangan internasional di Asia Tenggara dan dunia.",
              "fontSize": "16px",
              "color": "#64748b",
              "align": "center",
              "margin": "0 0 40px 0"
          }
      }
  ],
  'coverage-17': [
      {
          "id": "cov17-badge",
          "type": "badge",
          "props": {
              "content": "TRANSGO HIGHWAY NETWORK",
              "background": "#fef3c7",
              "color": "#d97706"
          }
      },
      {
          "id": "cov17-heading",
          "type": "heading",
          "props": {
              "content": "Rute Angkutan Beban Berat Trans-Tol Nusantara",
              "level": "h2",
              "fontSize": "42px",
              "fontWeight": "900",
              "color": "#0f172a",
              "align": "center",
              "margin": "0 0 14px 0"
          }
      },
      {
          "id": "cov17-text",
          "type": "text",
          "props": {
              "content": "Jaringan jalur jalan tol dan jalan nasional terdedikasi untuk armada truk wingbox, container 40ft, dan muatan proyek s/d 50 ton.",
              "fontSize": "16px",
              "color": "#64748b",
              "align": "center",
              "margin": "0 0 40px 0"
          }
      }
  ],
  'coverage-18': [
      {
          "id": "cov18-badge",
          "type": "badge",
          "props": {
              "content": "📍 INSTANT COVERAGE CHECKER",
              "background": "#fff1f2",
              "color": "#e11d48"
          }
      },
      {
          "id": "cov18-heading",
          "type": "heading",
          "props": {
              "content": "Periksa Jangkauan & Estimasi Waktu Kirim",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#0f172a",
              "align": "center",
              "margin": "0 0 14px 0"
          }
      },
      {
          "id": "cov18-text",
          "type": "text",
          "props": {
              "content": "Ketik nama kota atau kode pos tujuan Anda untuk memastikan ketersediaan layanan prioritas hari ini.",
              "fontSize": "16px",
              "color": "#64748b",
              "align": "center",
              "margin": "0 0 40px 0"
          }
      }
  ],
  'coverage-19': [
      {
          "id": "cov19-badge",
          "type": "badge",
          "props": {
              "content": "FULFILLMENT & WAREHOUSE NETWORK",
              "background": "#f0fdf4",
              "color": "#16a34a"
          }
      },
      {
          "id": "cov19-heading",
          "type": "heading",
          "props": {
              "content": "Jaringan Gudang & Pusat Sortir Otomatis",
              "level": "h2",
              "fontSize": "40px",
              "fontWeight": "800",
              "color": "#0f172a",
              "margin": "0 0 16px 0"
          }
      },
      {
          "id": "cov19-text",
          "type": "text",
          "props": {
              "content": "Fasilitas fulfillment center modern dengan kontrol suhu, sistem racking otomatis, dan integrasi API inventori.",
              "fontSize": "16px",
              "color": "#64748b",
              "margin": "0 0 32px 0"
          }
      }
  ],
  'coverage-20': [
      {
          "id": "cov20-badge",
          "type": "badge",
          "props": {
              "content": "✦ AETHER GLOBAL LOGISTICS ECOSYSTEM",
              "background": "#1e1b4b",
              "color": "#818cf8"
          }
      },
      {
          "id": "cov20-heading",
          "type": "heading",
          "props": {
              "content": "Konektivitas Logistik Tanpa Batas Seluruh Wilayah",
              "level": "h2",
              "fontSize": "44px",
              "fontWeight": "900",
              "color": "#fafaf9",
              "align": "center",
              "margin": "0 0 16px 0"
          }
      },
      {
          "id": "cov20-text",
          "type": "text",
          "props": {
              "content": "Menyatukan rute angkutan darat, laut, udara, dan pergudangan cerdas dalam satu platform terpadu dengan standar reliabilitas tertinggi.",
              "fontSize": "17px",
              "color": "#cbd5e1",
              "align": "center",
              "margin": "0 0 48px 0"
          }
      }
  ],
  // === VISION LAYOUTS ===
  'vision-01': [
    { id: 'v1-badge', type: 'badge', props: { content: '01 LUMIÈRE — VISSION', background: '#eef2ff', color: '#4f46e5' } },
    { id: 'v1-heading', type: 'heading', props: { content: 'Membentuk Masa Depan Digital Berkelanjutan', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'v1-text', type: 'text', props: { content: 'Menjadi pionir terdepan dalam ekosistem teknologi digital yang mengintegrasikan inovasi tanpa batas dengan standar integritas tertinggi.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 32px 0' } },
    { id: 'v1-card-1', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', padding: '24px' }, childrenComponents: [
      { id: 'v1-c1-icon', type: 'icon', props: { icon: 'FaLightbulb', size: '32px', color: '#4f46e5', align: 'left' } },
      { id: 'v1-c1-title', type: 'heading', props: { content: 'Inovasi Tanpa Henti', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
      { id: 'v1-c1-desc', type: 'text', props: { content: 'Selalu menghadirkan solusi terdepan yang mendahului kebutuhan zaman.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'v1-card-2', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', padding: '24px' }, childrenComponents: [
      { id: 'v1-c2-icon', type: 'icon', props: { icon: 'FaGlobe', size: '32px', color: '#4f46e5', align: 'left' } },
      { id: 'v1-c2-title', type: 'heading', props: { content: 'Jangkauan Global', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
      { id: 'v1-c2-desc', type: 'text', props: { content: 'Menghubungkan bisnis lokal ke kancah internasional dengan mulus.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
  ],
  'vision-02': [
    { id: 'v2-badge', type: 'badge', props: { content: '02 NOIR — LUXURY VISION', background: '#1c1917', color: '#c9a227' } },
    { id: 'v2-heading', type: 'heading', props: { content: 'Visi Eksklusif Menuju Kesempurnaan', level: 'h2', fontSize: '40px', fontWeight: '700', color: '#fafaf9', align: 'center', margin: '0 0 16px 0' } },
    { id: 'v2-text', type: 'text', props: { content: 'Mendefinisikan ulang standar kemewahan dan keanggunan dalam setiap layanan premium yang kami persembahkan.', fontSize: '16px', color: '#a8a29e', align: 'center', margin: '0 0 36px 0' } },
    { id: 'v2-card-1', type: 'card', props: { variant: 'service-dark', background: '#1c1917', borderRadius: '16px', borderWidth: '1px', borderColor: 'rgba(201,162,39,0.3)', padding: '28px' }, childrenComponents: [
      { id: 'v2-c1-icon', type: 'icon', props: { icon: 'FaGem', size: '32px', color: '#c9a227', align: 'center' } },
      { id: 'v2-c1-title', type: 'heading', props: { content: 'Kualitas Tanpa Kompromi', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#fafaf9', align: 'center', margin: '14px 0 6px 0' } },
      { id: 'v2-c1-desc', type: 'text', props: { content: 'Setiap detail dirancang dengan presisi dan cita rasa seni tinggi.', fontSize: '14px', color: '#a8a29e', align: 'center', margin: '0' } },
    ]},
    { id: 'v2-card-2', type: 'card', props: { variant: 'service-dark', background: '#1c1917', borderRadius: '16px', borderWidth: '1px', borderColor: 'rgba(201,162,39,0.3)', padding: '28px' }, childrenComponents: [
      { id: 'v2-c2-icon', type: 'icon', props: { icon: 'FaCrown', size: '32px', color: '#c9a227', align: 'center' } },
      { id: 'v2-c2-title', type: 'heading', props: { content: 'Warisan Keunggulan', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#fafaf9', align: 'center', margin: '14px 0 6px 0' } },
      { id: 'v2-c2-desc', type: 'text', props: { content: 'Menjaga tradisi prestisius lintas generasi dengan sentuhan modern.', fontSize: '14px', color: '#a8a29e', align: 'center', margin: '0' } },
    ]},
  ],
  'vision-03': [
    { id: 'v3-badge', type: 'badge', props: { content: '03 AURORA — GRADIENT BENTO', background: '#eef2ff', color: '#6366f1' } },
    { id: 'v3-heading', type: 'heading', props: { content: 'Misi & Visi Aurora Cloud', level: 'h2', fontSize: '42px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 14px 0' } },
    { id: 'v3-text', type: 'text', props: { content: 'Membangun infrastruktur awan masa depan yang cepat, aman, dan mudah diakses oleh seluruh developer dunia.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 36px 0' } },
    { id: 'v3-card-1', type: 'card', props: { variant: 'service', background: 'linear-gradient(135deg, #eef2ff 0%, #fae8ff 100%)', borderRadius: '24px', padding: '32px' }, childrenComponents: [
      { id: 'v3-c1-icon', type: 'icon', props: { icon: 'FaRocket', size: '36px', color: '#6366f1', align: 'left' } },
      { id: 'v3-c1-title', type: 'heading', props: { content: 'Kecepatan Ekstrem', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '14px 0 8px 0' } },
      { id: 'v3-c1-desc', type: 'text', props: { content: 'Performa tinggi tanpa kompromi untuk aplikasi skala enterprise.', fontSize: '14px', color: '#475569', margin: '0' } },
    ]},
    { id: 'v3-card-2', type: 'card', props: { variant: 'service', background: 'linear-gradient(135deg, #ecfdf5 0%, #eef2ff 100%)', borderRadius: '24px', padding: '32px' }, childrenComponents: [
      { id: 'v3-c2-icon', type: 'icon', props: { icon: 'FaShieldAlt', size: '36px', color: '#059669', align: 'left' } },
      { id: 'v3-c2-title', type: 'heading', props: { content: 'Keamanan Mutlak', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '14px 0 8px 0' } },
      { id: 'v3-c2-desc', type: 'text', props: { content: 'Enkripsi end-to-end dan kepatuhan standar global.', fontSize: '14px', color: '#475569', margin: '0' } },
    ]},
  ],
  'vision-04': [
    { id: 'v4-badge', type: 'badge', props: { content: '04 EMERALD — ECO VISION', background: '#dcfce7', color: '#15803d' } },
    { id: 'v4-heading', type: 'heading', props: { content: 'Visi Lingkungan & Keberlanjutan Hijau', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#052e16', align: 'center', margin: '0 0 16px 0' } },
    { id: 'v4-text', type: 'text', props: { content: 'Mewujudkan industri yang selaras dengan kelestarian alam melalui energi terbarukan dan rantai pasok ramah lingkungan.', fontSize: '16px', color: '#166534', align: 'center', margin: '0 0 36px 0' } },
    { id: 'v4-card-1', type: 'card', props: { variant: 'service', background: '#f0fdf4', borderRadius: '20px', borderWidth: '1px', borderColor: '#bbf7d0', padding: '28px' }, childrenComponents: [
      { id: 'v4-c1-icon', type: 'icon', props: { icon: 'FaLeaf', size: '32px', color: '#16a34a', align: 'left' } },
      { id: 'v4-c1-title', type: 'heading', props: { content: '100% Zero Emission', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#052e16', margin: '12px 0 6px 0' } },
      { id: 'v4-c1-desc', type: 'text', props: { content: 'Komitmen penuh menekan jejak karbon di seluruh lini operasional.', fontSize: '14px', color: '#166534', margin: '0' } },
    ]},
    { id: 'v4-card-2', type: 'card', props: { variant: 'service', background: '#f0fdf4', borderRadius: '20px', borderWidth: '1px', borderColor: '#bbf7d0', padding: '28px' }, childrenComponents: [
      { id: 'v4-c2-icon', type: 'icon', props: { icon: 'FaTree', size: '32px', color: '#16a34a', align: 'left' } },
      { id: 'v4-c2-title', type: 'heading', props: { content: 'Reboisasi Berkelanjutan', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#052e16', margin: '12px 0 6px 0' } },
      { id: 'v4-c2-desc', type: 'text', props: { content: 'Setiap produk yang terjual berkontribusi langsung pada penanaman pohon.', fontSize: '14px', color: '#166534', margin: '0' } },
    ]},
  ],
  'vision-05': [
    { id: 'v5-badge', type: 'badge', props: { content: '05 VELOCE — SPEED & PERFORMANCE', background: '#fef2f2', color: '#ef4444' } },
    { id: 'v5-heading', type: 'heading', props: { content: 'Visi Akselerasi & Performa Maksimal', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'v5-text', type: 'text', props: { content: 'Mendorong batas kecepatan dan inovasi teknik otomotif untuk menghadirkan pengalaman berkendara paling mendebarkan.', fontSize: '16px', color: '#fca5a5', align: 'center', margin: '0 0 36px 0' } },
    { id: 'v5-card-1', type: 'card', props: { variant: 'service-dark', background: '#111827', borderRadius: '16px', borderWidth: '1px', borderColor: '#374151', padding: '28px' }, childrenComponents: [
      { id: 'v5-c1-icon', type: 'icon', props: { icon: 'FaBolt', size: '32px', color: '#ef4444', align: 'left' } },
      { id: 'v5-c1-title', type: 'heading', props: { content: 'Responsif & Kilat', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '12px 0 6px 0' } },
      { id: 'v5-c1-desc', type: 'text', props: { content: 'Akselerasi instan tanpa jeda merespons setiap detik.', fontSize: '14px', color: '#9ca3af', margin: '0' } },
    ]},
    { id: 'v5-card-2', type: 'card', props: { variant: 'service-dark', background: '#111827', borderRadius: '16px', borderWidth: '1px', borderColor: '#374151', padding: '28px' }, childrenComponents: [
      { id: 'v5-c2-icon', type: 'icon', props: { icon: 'FaTachometerAlt', size: '32px', color: '#ef4444', align: 'left' } },
      { id: 'v5-c2-title', type: 'heading', props: { content: 'Aerodinamika Sempurna', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '12px 0 6px 0' } },
      { id: 'v5-c2-desc', type: 'text', props: { content: 'Desain bodi teruji angin untuk stabilitas maksimal di kecepatan tinggi.', fontSize: '14px', color: '#9ca3af', margin: '0' } },
    ]},
  ],
  'vision-06': [
    { id: 'v6-badge', type: 'badge', props: { content: '🌸 06 SAKURA — FLORAL VISION', background: '#fce7f3', color: '#be185d' } },
    { id: 'v6-heading', type: 'heading', props: { content: 'Visi Keindahan & Kehangatan Personal', level: 'h2', fontSize: '40px', fontWeight: '700', color: '#831843', align: 'center', margin: '0 0 16px 0' } },
    { id: 'v6-text', type: 'text', props: { content: 'Menyebarkan keindahan dan kebahagiaan melalui setiap detail acara spesial yang dirancang penuh cinta.', fontSize: '16px', color: '#9d7b8c', align: 'center', margin: '0 0 36px 0' } },
    { id: 'v6-card-1', type: 'card', props: { variant: 'service', background: '#fff1f2', borderRadius: '32px 8px 32px 8px', padding: '28px' }, childrenComponents: [
      { id: 'v6-c1-icon', type: 'icon', props: { icon: 'FaHeart', size: '32px', color: '#db2777', align: 'center' } },
      { id: 'v6-c1-title', type: 'heading', props: { content: 'Sentuhan Penuh Cinta', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#831843', align: 'center', margin: '14px 0 6px 0' } },
      { id: 'v6-c1-desc', type: 'text', props: { content: 'Perhatian istimewa pada setiap tangkai bunga dan dekorasi.', fontSize: '14px', color: '#9d7b8c', align: 'center', margin: '0' } },
    ]},
    { id: 'v6-card-2', type: 'card', props: { variant: 'service', background: '#fff1f2', borderRadius: '8px 32px 8px 32px', padding: '28px' }, childrenComponents: [
      { id: 'v6-c2-icon', type: 'icon', props: { icon: 'FaSmile', size: '32px', color: '#db2777', align: 'center' } },
      { id: 'v6-c2-title', type: 'heading', props: { content: 'Kebahagiaan Abadi', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#831843', align: 'center', margin: '14px 0 6px 0' } },
      { id: 'v6-c2-desc', type: 'text', props: { content: 'Menciptakan momen tak terlupakan yang dikenang sepanjang masa.', fontSize: '14px', color: '#9d7b8c', align: 'center', margin: '0' } },
    ]},
  ],
  'vision-07': [
    { id: 'v7-badge', type: 'badge', props: { content: '07 OBSIDIAN — ENTERPRISE VISION', background: '#0f172a', color: '#38bdf8' } },
    { id: 'v7-heading', type: 'heading', props: { content: 'Visi Infrastruktur Skala Enterprise', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'v7-text', type: 'text', props: { content: 'Menjadi tulang punggung digital bagi institusi finansial dan pemerintahan dengan keandalan 99.99%.', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 36px 0' } },
    { id: 'v7-card-1', type: 'card', props: { variant: 'service-dark', background: '#1e293b', borderRadius: '16px', borderWidth: '1px', borderColor: '#334155', padding: '28px' }, childrenComponents: [
      { id: 'v7-c1-icon', type: 'icon', props: { icon: 'FaServer', size: '32px', color: '#38bdf8', align: 'left' } },
      { id: 'v7-c1-title', type: 'heading', props: { content: 'Skalabilitas Tak Terbatas', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '12px 0 6px 0' } },
      { id: 'v7-c1-desc', type: 'text', props: { content: 'Arsitektur terdistribusi global yang menangani miliaran transaksi.', fontSize: '14px', color: '#94a3b8', margin: '0' } },
    ]},
    { id: 'v7-card-2', type: 'card', props: { variant: 'service-dark', background: '#1e293b', borderRadius: '16px', borderWidth: '1px', borderColor: '#334155', padding: '28px' }, childrenComponents: [
      { id: 'v7-c2-icon', type: 'icon', props: { icon: 'FaLock', size: '32px', color: '#38bdf8', align: 'left' } },
      { id: 'v7-c2-title', type: 'heading', props: { content: 'Kepatuhan & Sertifikasi', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '12px 0 6px 0' } },
      { id: 'v7-c2-desc', type: 'text', props: { content: 'Standar keamanan SOC2 dan ISO tertinggi di industri.', fontSize: '14px', color: '#94a3b8', margin: '0' } },
    ]},
  ],
  'vision-08': [
    { id: 'v8-badge', type: 'badge', props: { content: '★ 08 PAPERCUT — BRUTALIST VISION', background: '#000000', color: '#facc15' } },
    { id: 'v8-heading', type: 'heading', props: { content: 'VISI Kami: Lawan Kebosanan', level: 'h2', fontSize: '44px', fontWeight: '900', color: '#000000', align: 'left', margin: '0 0 16px 0' } },
    { id: 'v8-text', type: 'text', props: { content: 'Menghancurkan batasan desain web generik dengan karya digital yang berani, lantang, dan autentik.', fontSize: '16px', color: '#000000', align: 'left', margin: '0 0 36px 0' } },
    { id: 'v8-card-1', type: 'card', props: { variant: 'service', background: '#facc15', borderRadius: '0px', borderWidth: '3px', borderColor: '#000000', shadow: 'none', padding: '28px' }, childrenComponents: [
      { id: 'v8-c1-icon', type: 'icon', props: { icon: 'FaBolt', size: '32px', color: '#000000', align: 'left' } },
      { id: 'v8-c1-title', type: 'heading', props: { content: 'TIDAK ADA ATURAN', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#000000', margin: '12px 0 6px 0' } },
      { id: 'v8-c1-desc', type: 'text', props: { content: 'Eksperimen radikal yang menembus batas estetika digital.', fontSize: '14px', color: '#000000', margin: '0' } },
    ]},
    { id: 'v8-card-2', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '0px', borderWidth: '3px', borderColor: '#000000', shadow: 'none', padding: '28px' }, childrenComponents: [
      { id: 'v8-c2-icon', type: 'icon', props: { icon: 'FaBullhorn', size: '32px', color: '#000000', align: 'left' } },
      { id: 'v8-c2-title', type: 'heading', props: { content: 'SUARA NYARING', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#000000', margin: '12px 0 6px 0' } },
      { id: 'v8-c2-desc', type: 'text', props: { content: 'Pesan brand Anda disampaikan tanpa filter dan basa-basi.', fontSize: '14px', color: '#000000', margin: '0' } },
    ]},
  ],
  'vision-09': [
    { id: 'v9-badge', type: 'badge', props: { content: '09 SERENITY — ZEN VISION', background: '#f5f5f4', color: '#78716c' } },
    { id: 'v9-heading', type: 'heading', props: { content: 'Visi Ketenangan & Keseimbangan', level: 'h2', fontSize: '42px', fontWeight: '400', color: '#1c1917', align: 'center', margin: '0 0 16px 0' } },
    { id: 'v9-text', type: 'text', props: { content: 'Menciptakan ruang retret dan pengalaman digital yang menghadirkan ketenangan jiwa serta kesadaran penuh.', fontSize: '16px', color: '#78716c', align: 'center', margin: '0 0 36px 0' } },
    { id: 'v9-card-1', type: 'card', props: { variant: 'service', background: '#fafaf9', borderRadius: '24px', padding: '32px' }, childrenComponents: [
      { id: 'v9-c1-icon', type: 'icon', props: { icon: 'FaSpa', size: '32px', color: '#78716c', align: 'center' } },
      { id: 'v9-c1-title', type: 'heading', props: { content: 'Ruang Refleksi', level: 'h3', fontSize: '18px', fontWeight: '500', color: '#1c1917', align: 'center', margin: '14px 0 6px 0' } },
      { id: 'v9-c1-desc', type: 'text', props: { content: 'Menemukan kembali kedamaian batin di tengah kesibukan dunia.', fontSize: '14px', color: '#78716c', align: 'center', margin: '0' } },
    ]},
    { id: 'v9-card-2', type: 'card', props: { variant: 'service', background: '#fafaf9', borderRadius: '24px', padding: '32px' }, childrenComponents: [
      { id: 'v9-c2-icon', type: 'icon', props: { icon: 'FaLeaf', size: '32px', color: '#78716c', align: 'center' } },
      { id: 'v9-c2-title', type: 'heading', props: { content: 'Keselarasan Alam', level: 'h3', fontSize: '18px', fontWeight: '500', color: '#1c1917', align: 'center', margin: '14px 0 6px 0' } },
      { id: 'v9-c2-desc', type: 'text', props: { content: 'Hidup berdampingan secara harmonis dengan alam sekitar.', fontSize: '14px', color: '#78716c', align: 'center', margin: '0' } },
    ]},
  ],
  'vision-10': [
    { id: 'v10-badge', type: 'badge', props: { content: '● 10 NEBULA — COSMIC VISION', background: '#1e1b4b', color: '#c4b5fd' } },
    { id: 'v10-heading', type: 'heading', props: { content: 'Visi Eksplorasi Antariksa Digital', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'v10-text', type: 'text', props: { content: 'Membawa komunitas penjelajah lintas galaksi digital menuju peradaban web3 yang terdesentralisasi dan imersif.', fontSize: '16px', color: '#a5b4fc', align: 'center', margin: '0 0 36px 0' } },
    { id: 'v10-card-1', type: 'card', props: { variant: 'service-dark', background: '#312e81', borderRadius: '24px', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', padding: '28px' }, childrenComponents: [
      { id: 'v10-c1-icon', type: 'icon', props: { icon: 'FaGlobeAmericas', size: '32px', color: '#c4b5fd', align: 'left' } },
      { id: 'v10-c1-title', type: 'heading', props: { content: 'Galaksi Komunitas', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '12px 0 6px 0' } },
      { id: 'v10-c1-desc', type: 'text', props: { content: 'Menghubungkan ratusan ribu kreator dalam satu ekosistem kosmik.', fontSize: '14px', color: '#c4b5fd', margin: '0' } },
    ]},
    { id: 'v10-card-2', type: 'card', props: { variant: 'service-dark', background: '#312e81', borderRadius: '24px', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', padding: '28px' }, childrenComponents: [
      { id: 'v10-c2-icon', type: 'icon', props: { icon: 'FaStar', size: '32px', color: '#c4b5fd', align: 'left' } },
      { id: 'v10-c2-title', type: 'heading', props: { content: 'Misi & Imbalan', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', margin: '12px 0 6px 0' } },
      { id: 'v10-c2-desc', type: 'text', props: { content: 'Sistem penghargaan berbasis pencapaian untuk setiap kontributor aktif.', fontSize: '14px', color: '#c4b5fd', margin: '0' } },
    ]},
  ],
  'vision-11': [
    { id: 'v11-badge', type: 'badge', props: { content: '11 MONOCLE — EDITORIAL VISION', background: '#1c1917', color: '#fafaf9' } },
    { id: 'v11-heading', type: 'heading', props: { content: 'Visi Jurnalisme & Wawasan Global', level: 'h2', fontSize: '44px', fontWeight: '700', color: '#1c1917', align: 'left', margin: '0 0 16px 0' } },
    { id: 'v11-text', type: 'text', props: { content: 'Menyajikan liputan mendalam dan sudut pandang independen mengenai budaya, bisnis, dan desain di seluruh dunia.', fontSize: '17px', color: '#57534e', align: 'left', margin: '0 0 36px 0' } },
    { id: 'v11-card-1', type: 'card', props: { variant: 'service', background: '#f5f5f4', borderRadius: '0px', padding: '32px' }, childrenComponents: [
      { id: 'v11-c1-icon', type: 'icon', props: { icon: 'FaNewspaper', size: '32px', color: '#1c1917', align: 'left' } },
      { id: 'v11-c1-title', type: 'heading', props: { content: 'Laporan Independen', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#1c1917', margin: '14px 0 6px 0' } },
      { id: 'v11-c1-desc', type: 'text', props: { content: 'Investigasi mendalam tanpa bias kepentingan komersial.', fontSize: '14px', color: '#57534e', margin: '0' } },
    ]},
    { id: 'v11-card-2', type: 'card', props: { variant: 'service', background: '#f5f5f4', borderRadius: '0px', padding: '32px' }, childrenComponents: [
      { id: 'v11-c2-icon', type: 'icon', props: { icon: 'FaGlobe', size: '32px', color: '#1c1917', align: 'left' } },
      { id: 'v11-c2-title', type: 'heading', props: { content: 'Perspektif Global', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#1c1917', margin: '14px 0 6px 0' } },
      { id: 'v11-c2-desc', type: 'text', props: { content: 'Membawa pembaca menelusuri inovasi kota-kota besar dunia.', fontSize: '14px', color: '#57534e', margin: '0' } },
    ]},
  ],
  'vision-12': [
    { id: 'v12-badge', type: 'badge', props: { content: '12 TERMINAL — DEV VISION', background: '#052e16', color: '#4ade80' } },
    { id: 'v12-heading', type: 'heading', props: { content: 'Visi Pengembang & Otomasi CLI', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#e2e8f0', align: 'left', margin: '0 0 16px 0' } },
    { id: 'v12-text', type: 'text', props: { content: 'Memberdayakan insinyur perangkat lunak dengan perkakas baris perintah tercepat dan alur kerja deployment mulus.', fontSize: '16px', color: '#94a3b8', align: 'left', margin: '0 0 36px 0' } },
    { id: 'v12-card-1', type: 'card', props: { variant: 'service-dark', background: '#0f172a', borderRadius: '12px', borderWidth: '1px', borderColor: '#1e293b', padding: '28px' }, childrenComponents: [
      { id: 'v12-c1-icon', type: 'icon', props: { icon: 'FaTerminal', size: '32px', color: '#4ade80', align: 'left' } },
      { id: 'v12-c1-title', type: 'heading', props: { content: '$ datasoft deploy', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#e2e8f0', margin: '12px 0 6px 0' } },
      { id: 'v12-c1-desc', type: 'text', props: { content: 'Deployment instan ke edge network hanya dengan satu perintah.', fontSize: '14px', color: '#94a3b8', margin: '0' } },
    ]},
    { id: 'v12-card-2', type: 'card', props: { variant: 'service-dark', background: '#0f172a', borderRadius: '12px', borderWidth: '1px', borderColor: '#1e293b', padding: '28px' }, childrenComponents: [
      { id: 'v12-c2-icon', type: 'icon', props: { icon: 'FaCode', size: '32px', color: '#4ade80', align: 'left' } },
      { id: 'v12-c2-title', type: 'heading', props: { content: 'Open Source First', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#e2e8f0', margin: '12px 0 6px 0' } },
      { id: 'v12-c2-desc', type: 'text', props: { content: 'Didukung penuh oleh komunitas dan transparansi kode sumber.', fontSize: '14px', color: '#94a3b8', margin: '0' } },
    ]},
  ],
  'vision-13': [
    { id: 'v13-badge', type: 'badge', props: { content: '13 SOLSTICE — APP VISION', background: '#ffedd5', color: '#f97316' } },
    { id: 'v13-heading', type: 'heading', props: { content: 'Visi Kemudahan Akses Aplikasi Mobile', level: 'h2', fontSize: '40px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'v13-text', type: 'text', props: { content: 'Menghubungkan pengguna dengan layanan digital dalam genggaman tangan melalui antarmuka super intuitif.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 36px 0' } },
    { id: 'v13-card-1', type: 'card', props: { variant: 'service', background: '#fff7ed', borderRadius: '24px', padding: '28px' }, childrenComponents: [
      { id: 'v13-c1-icon', type: 'icon', props: { icon: 'FaMobileAlt', size: '32px', color: '#f97316', align: 'center' } },
      { id: 'v13-c1-title', type: 'heading', props: { content: 'Mobile First Experience', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '14px 0 6px 0' } },
      { id: 'v13-c1-desc', type: 'text', props: { content: 'Dioptimalkan khusus untuk kenyamanan navigasi perangkat seluler.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'v13-card-2', type: 'card', props: { variant: 'service', background: '#fff7ed', borderRadius: '24px', padding: '28px' }, childrenComponents: [
      { id: 'v13-c2-icon', type: 'icon', props: { icon: 'FaBolt', size: '32px', color: '#f97316', align: 'center' } },
      { id: 'v13-c2-title', type: 'heading', props: { content: 'Aksi Instan', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '14px 0 6px 0' } },
      { id: 'v13-c2-desc', type: 'text', props: { content: 'Pesan, lacak, dan selesaikan transaksi hanya dalam tiga ketukan.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
  ],
  'vision-14': [
    { id: 'v14-badge', type: 'badge', props: { content: '14 MAISON DOUBLE — INSTITUTIONAL VISION', background: '#dbeafe', color: '#1e40af' } },
    { id: 'v14-heading', type: 'heading', props: { content: 'Visi Pendidikan & Pengabdian Masyarakat', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#1e3a8a', align: 'left', margin: '0 0 16px 0' } },
    { id: 'v14-text', type: 'text', props: { content: 'Menjadi institusi terkemuka yang menghasilkan lulusan berkarakter mulia, cerdas, dan siap bersaing di tingkat global.', fontSize: '16px', color: '#475569', align: 'left', margin: '0 0 36px 0' } },
    { id: 'v14-card-1', type: 'card', props: { variant: 'service', background: '#eff6ff', borderRadius: '16px', borderWidth: '1px', borderColor: '#bfdbfe', padding: '28px' }, childrenComponents: [
      { id: 'v14-c1-icon', type: 'icon', props: { icon: 'FaGraduationCap', size: '32px', color: '#1d4ed8', align: 'left' } },
      { id: 'v14-c1-title', type: 'heading', props: { content: 'Akademik Unggul', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#1e3a8a', margin: '12px 0 6px 0' } },
      { id: 'v14-c1-desc', type: 'text', props: { content: 'Kurikulum berbasis industri modern dan riset mendalam.', fontSize: '14px', color: '#475569', margin: '0' } },
    ]},
    { id: 'v14-card-2', type: 'card', props: { variant: 'service', background: '#eff6ff', borderRadius: '16px', borderWidth: '1px', borderColor: '#bfdbfe', padding: '28px' }, childrenComponents: [
      { id: 'v14-c2-icon', type: 'icon', props: { icon: 'FaUsers', size: '32px', color: '#1d4ed8', align: 'left' } },
      { id: 'v14-c2-title', type: 'heading', props: { content: 'Karakter & Integritas', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#1e3a8a', margin: '12px 0 6px 0' } },
      { id: 'v14-c2-desc', type: 'text', props: { content: 'Membina moral dan etika kepemimpinan yang kuat pada setiap mahasiswa.', fontSize: '14px', color: '#475569', margin: '0' } },
    ]},
  ],
  'vision-15': [
    { id: 'v15-badge', type: 'badge', props: { content: '15 IRIS — MESH VISION', background: '#f3e8ff', color: '#7c3aed' } },
    { id: 'v15-heading', type: 'heading', props: { content: 'Visi Kolaborasi & Desain AI Cerdas', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'v15-text', type: 'text', props: { content: 'Menghubungkan imajinasi kreator dengan kecerdasan buatan untuk mewujudkan desain antarmuka dalam hitungan detik.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 36px 0' } },
    { id: 'v15-card-1', type: 'card', props: { variant: 'service', background: '#faf5ff', borderRadius: '24px', borderWidth: '1px', borderColor: '#e9d5ff', padding: '28px' }, childrenComponents: [
      { id: 'v15-c1-icon', type: 'icon', props: { icon: 'FaMagic', size: '32px', color: '#7c3aed', align: 'left' } },
      { id: 'v15-c1-title', type: 'heading', props: { content: 'Generasi Otomatis', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
      { id: 'v15-c1-desc', type: 'text', props: { content: 'Ubah teks sketsa menjadi komponen layout siap pakai secara instan.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'v15-card-2', type: 'card', props: { variant: 'service', background: '#faf5ff', borderRadius: '24px', borderWidth: '1px', borderColor: '#e9d5ff', padding: '28px' }, childrenComponents: [
      { id: 'v15-c2-icon', type: 'icon', props: { icon: 'FaUsers', size: '32px', color: '#7c3aed', align: 'left' } },
      { id: 'v15-c2-title', type: 'heading', props: { content: 'Kolaborasi Real-Time', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
      { id: 'v15-c2-desc', type: 'text', props: { content: 'Bekerja bersama tim dalam satu kanvas tanpa batasan jarak.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
  ],
  'vision-16': [
    { id: 'v16-badge', type: 'badge', props: { content: '16 GOLDLEAF — FOIL VISION', background: '#fef3c7', color: '#b45309' } },
    { id: 'v16-heading', type: 'heading', props: { content: 'Visi Kerajinan Emas & Warisan Seni', level: 'h2', fontSize: '42px', fontWeight: '700', color: '#451a03', align: 'center', margin: '0 0 16px 0' } },
    { id: 'v16-text', type: 'text', props: { content: 'Melestarikan seni kerajinan emas tradisional dengan standar kualitas butik mewah lintas generasi.', fontSize: '16px', color: '#92400e', align: 'center', margin: '0 0 36px 0' } },
    { id: 'v16-card-1', type: 'card', props: { variant: 'service', background: '#fffbeb', borderRadius: '16px', borderWidth: '1px', borderColor: '#fde68a', padding: '28px' }, childrenComponents: [
      { id: 'v16-c1-icon', type: 'icon', props: { icon: 'FaGem', size: '32px', color: '#b45309', align: 'center' } },
      { id: 'v16-c1-title', type: 'heading', props: { content: 'Sentuhan Seni Murni', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#451a03', align: 'center', margin: '14px 0 6px 0' } },
      { id: 'v16-c1-desc', type: 'text', props: { content: 'Setiap perhiasan ditempa tangan oleh pengrajin berpengalaman.', fontSize: '14px', color: '#92400e', align: 'center', margin: '0' } },
    ]},
    { id: 'v16-card-2', type: 'card', props: { variant: 'service', background: '#fffbeb', borderRadius: '16px', borderWidth: '1px', borderColor: '#fde68a', padding: '28px' }, childrenComponents: [
      { id: 'v16-c2-icon', type: 'icon', props: { icon: 'FaCrown', size: '32px', color: '#b45309', align: 'center' } },
      { id: 'v16-c2-title', type: 'heading', props: { content: 'Eksklusivitas Koleksi', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#451a03', align: 'center', margin: '14px 0 6px 0' } },
      { id: 'v16-c2-desc', type: 'text', props: { content: 'Koleksi terbatas yang dirancang khusus untuk momen berharga Anda.', fontSize: '14px', color: '#92400e', align: 'center', margin: '0' } },
    ]},
  ],
  'vision-17': [
    { id: 'v17-badge', type: 'badge', props: { content: '17 PULSE — MARKETPLACE VISION', background: '#fef2f2', color: '#dc2626' } },
    { id: 'v17-heading', type: 'heading', props: { content: 'Visi Ekonomi Digital & UMKM Nusantara', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 16px 0' } },
    { id: 'v17-text', type: 'text', props: { content: 'Menjadi penggerak utama pertumbuhan ekonomi digital dengan memberdayakan jutaan penjual lokal di seluruh Indonesia.', fontSize: '16px', color: '#64748b', align: 'left', margin: '0 0 36px 0' } },
    { id: 'v17-card-1', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', padding: '28px' }, childrenComponents: [
      { id: 'v17-c1-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#dc2626', align: 'left' } },
      { id: 'v17-c1-title', type: 'heading', props: { content: 'Pemberdayaan UMKM', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
      { id: 'v17-c1-desc', type: 'text', props: { content: 'Membuka akses pasar digital seluas-luasnya bagi pelaku usaha lokal.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'v17-card-2', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'md', padding: '28px' }, childrenComponents: [
      { id: 'v17-c2-icon', type: 'icon', props: { icon: 'FaChartLine', size: '32px', color: '#dc2626', align: 'left' } },
      { id: 'v17-c2-title', type: 'heading', props: { content: 'Pertumbuhan Cepat', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
      { id: 'v17-c2-desc', type: 'text', props: { content: 'Sistem transaksi aman dan analitik penjualan real-time untuk mitra.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
  ],
  'vision-18': [
    { id: 'v18-badge', type: 'badge', props: { content: '18 TRANSGO — LOGISTICS VISION', background: '#fff7ed', color: '#f97316' } },
    { id: 'v18-heading', type: 'heading', props: { content: 'Visi Konektivitas Logistik Nasional', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'v18-text', type: 'text', props: { content: 'Menghubungkan setiap pulau dan kota di Indonesia melalui jaringan pengiriman kargo darat, laut, dan udara yang andal.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 36px 0' } },
    { id: 'v18-card-1', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'lg', padding: '28px' }, childrenComponents: [
      { id: 'v18-c1-icon', type: 'icon', props: { icon: 'FaShippingFast', size: '32px', color: '#f97316', align: 'left' } },
      { id: 'v18-c1-title', type: 'heading', props: { content: 'Ketepatan Waktu 99.8%', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
      { id: 'v18-c1-desc', type: 'text', props: { content: 'Pengiriman aman dan tepat waktu sampai ke alamat tujuan.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'v18-card-2', type: 'card', props: { variant: 'service', background: '#ffffff', borderRadius: '20px', shadow: 'lg', padding: '28px' }, childrenComponents: [
      { id: 'v18-c2-icon', type: 'icon', props: { icon: 'FaWarehouse', size: '32px', color: '#f97316', align: 'left' } },
      { id: 'v18-c2-title', type: 'heading', props: { content: 'Hub Modern Terpadu', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
      { id: 'v18-c2-desc', type: 'text', props: { content: 'Fasilitas gudang otomatis dengan sistem inventori cerdas.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
  ],
  'vision-19': [
    { id: 'v19-badge', type: 'badge', props: { content: '19 KIOSO — PLAYFUL VISION', background: '#fce7f3', color: '#ec4899' } },
    { id: 'v19-heading', type: 'heading', props: { content: 'Visi Kuliner Seru & Ceria', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'v19-text', type: 'text', props: { content: 'Menghadirkan kelezatan burger dan makanan cepat saji berkualitas tinggi yang menyatukan kebahagiaan setiap keluarga.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 36px 0' } },
    { id: 'v19-card-1', type: 'card', props: { variant: 'service', background: '#fff1f2', borderRadius: '28px', padding: '28px' }, childrenComponents: [
      { id: 'v19-c1-icon', type: 'icon', props: { icon: 'FaHamburger', size: '32px', color: '#ec4899', align: 'center' } },
      { id: 'v19-c1-title', type: 'heading', props: { content: 'Bahan Segar Setiap Hari', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '14px 0 6px 0' } },
      { id: 'v19-c1-desc', type: 'text', props: { content: 'Roti dipanggang setiap jam dan daging pilihan berkualitas premium.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'v19-card-2', type: 'card', props: { variant: 'service', background: '#fff1f2', borderRadius: '28px', padding: '28px' }, childrenComponents: [
      { id: 'v19-c2-icon', type: 'icon', props: { icon: 'FaSmileBeam', size: '32px', color: '#ec4899', align: 'center' } },
      { id: 'v19-c2-title', type: 'heading', props: { content: 'Suasana Ceria', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '14px 0 6px 0' } },
      { id: 'v19-c2-desc', type: 'text', props: { content: 'Tempat bersantai yang menyenangkan untuk kumpul bersama sahabat.', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
  ],
  'vision-20': [
    { id: 'v20-badge', type: 'badge', props: { content: '✦ 20 AETHER FINALE — ULTIMATE VISION', background: '#1e1b4b', color: '#c4b5fd' } },
    { id: 'v20-heading', type: 'heading', props: { content: 'Visi Utama Aether OS: Skala Tanpa Batas', level: 'h2', fontSize: '42px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'v20-text', type: 'text', props: { content: 'Menyatukan seluruh sistem operasi bisnis modern ke dalam satu platform terintegrasi dengan kecerdasan buatan tingkat lanjut.', fontSize: '16px', color: '#a5b4fc', align: 'center', margin: '0 0 36px 0' } },
    { id: 'v20-card-1', type: 'card', props: { variant: 'service-dark', background: '#1e1b4b', borderRadius: '24px', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', padding: '28px' }, childrenComponents: [
      { id: 'v20-c1-icon', type: 'icon', props: { icon: 'FaCogs', size: '32px', color: '#c4b5fd', align: 'center' } },
      { id: 'v20-c1-title', type: 'heading', props: { content: 'Automasi Menyeluruh', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '14px 0 6px 0' } },
      { id: 'v20-c1-desc', type: 'text', props: { content: 'Sistem otonom yang mengelola operasional harian tanpa kendala.', fontSize: '14px', color: '#a5b4fc', align: 'center', margin: '0' } },
    ]},
    { id: 'v20-card-2', type: 'card', props: { variant: 'service-dark', background: '#1e1b4b', borderRadius: '24px', borderWidth: '1px', borderColor: 'rgba(196,181,253,0.3)', padding: '28px' }, childrenComponents: [
      { id: 'v20-c2-icon', type: 'icon', props: { icon: 'FaChartLine', size: '32px', color: '#c4b5fd', align: 'center' } },
      { id: 'v20-c2-title', type: 'heading', props: { content: 'Prediksi Cerdas', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '14px 0 6px 0' } },
      { id: 'v20-c2-desc', type: 'text', props: { content: 'Analitik masa depan berbasis AI untuk keputusan bisnis yang akurat.', fontSize: '14px', color: '#a5b4fc', align: 'center', margin: '0' } },
    ]},
  ],
};

export const getLayoutDefaults = (layoutId) => {
  return LAYOUT_DEFAULTS[layoutId] || [];
};
