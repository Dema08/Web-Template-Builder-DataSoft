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
    { id: 'heading-1', type: 'heading', props: { content: 'About Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#000000', align: 'center', margin: '0 0 24px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Description about your company', fontSize: '16px', color: '#64748b', align: 'center', lineHeight: '1.8' } },
  ],
  'about-02': [
    { id: 'heading-1', type: 'heading', props: { content: 'About Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Description about your company', fontSize: '16px', color: '#64748b', align: 'left', lineHeight: '1.8' } },
    { id: 'button-1', type: 'button', props: { label: 'Learn More', href: '#', variant: 'primary', size: 'medium', background: '#4f46e5', color: '#ffffff' } },
  ],
  'about-03': [
    { id: 'heading-1', type: 'heading', props: { content: 'About Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 24px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Description about your company', fontSize: '16px', color: '#64748b', align: 'center', lineHeight: '1.8' } },
  ],
  'about-04': [
    { id: 'heading-1', type: 'heading', props: { content: 'About Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 24px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Description about your company', fontSize: '16px', color: '#cbd5e1', align: 'center', lineHeight: '1.8' } },
  ],

  // === SERVICES LAYOUTS ===
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

  // === GALLERY LAYOUTS ===
  'gallery-01': [
    { id: 'gal1-heading', type: 'heading', props: { content: 'Galeri Foto & Video', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal1-subtext', type: 'text', props: { content: 'Dokumentasi kegiatan, momen spesial, dan aktivitas terbaik kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'gal1-img-1', type: 'card', props: { variant: 'gallery', background: 'linear-gradient(135deg,#c7d2fe,#a5b4fc)', borderRadius: '16px', shadow: 'md', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal1-img1-image', type: 'image', props: { src: '', alt: 'Foto Galeri 1', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal1-img-2', type: 'card', props: { variant: 'gallery', background: 'linear-gradient(135deg,#ddd6fe,#c4b5fd)', borderRadius: '16px', shadow: 'md', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal1-img2-image', type: 'image', props: { src: '', alt: 'Foto Galeri 2', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal1-img-3', type: 'card', props: { variant: 'gallery', background: 'linear-gradient(135deg,#e0e7ff,#c7d2fe)', borderRadius: '16px', shadow: 'md', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal1-img3-image', type: 'image', props: { src: '', alt: 'Foto Galeri 3', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal1-img-4', type: 'card', props: { variant: 'gallery', background: 'linear-gradient(135deg,#f0fdf4,#bbf7d0)', borderRadius: '16px', shadow: 'md', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal1-img4-image', type: 'image', props: { src: '', alt: 'Foto Galeri 4', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal1-img-5', type: 'card', props: { variant: 'gallery', background: 'linear-gradient(135deg,#fef9c3,#fef08a)', borderRadius: '16px', shadow: 'md', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal1-img5-image', type: 'image', props: { src: '', alt: 'Foto Galeri 5', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal1-img-6', type: 'card', props: { variant: 'gallery', background: 'linear-gradient(135deg,#fce7f3,#fbcfe8)', borderRadius: '16px', shadow: 'md', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal1-img6-image', type: 'image', props: { src: '', alt: 'Foto Galeri 6', width: '100%', height: '220px', objectFit: 'cover', borderRadius: '16px' } }] },
  ],
  'gallery-02': [
    { id: 'gal2-heading', type: 'heading', props: { content: 'Galeri Portfolio & Proyek', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal2-subtext', type: 'text', props: { content: 'Kumpulan foto hasil karya dan portofolio proyek unggulan kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'gal2-img-1', type: 'card', props: { variant: 'gallery', background: '#f1f5f9', borderRadius: '12px', shadow: 'sm', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal2-img1-image', type: 'image', props: { src: '', alt: 'Proyek 1', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' } }] },
    { id: 'gal2-img-2', type: 'card', props: { variant: 'gallery', background: '#f1f5f9', borderRadius: '12px', shadow: 'sm', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal2-img2-image', type: 'image', props: { src: '', alt: 'Proyek 2', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' } }] },
    { id: 'gal2-img-3', type: 'card', props: { variant: 'gallery', background: '#f1f5f9', borderRadius: '12px', shadow: 'sm', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal2-img3-image', type: 'image', props: { src: '', alt: 'Proyek 3', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' } }] },
    { id: 'gal2-img-4', type: 'card', props: { variant: 'gallery', background: '#f1f5f9', borderRadius: '12px', shadow: 'sm', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal2-img4-image', type: 'image', props: { src: '', alt: 'Proyek 4', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' } }] },
    { id: 'gal2-img-5', type: 'card', props: { variant: 'gallery', background: '#f1f5f9', borderRadius: '12px', shadow: 'sm', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal2-img5-image', type: 'image', props: { src: '', alt: 'Proyek 5', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' } }] },
    { id: 'gal2-img-6', type: 'card', props: { variant: 'gallery', background: '#f1f5f9', borderRadius: '12px', shadow: 'sm', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal2-img6-image', type: 'image', props: { src: '', alt: 'Proyek 6', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' } }] },
    { id: 'gal2-img-7', type: 'card', props: { variant: 'gallery', background: '#f1f5f9', borderRadius: '12px', shadow: 'sm', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal2-img7-image', type: 'image', props: { src: '', alt: 'Proyek 7', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' } }] },
    { id: 'gal2-img-8', type: 'card', props: { variant: 'gallery', background: '#f1f5f9', borderRadius: '12px', shadow: 'sm', padding: '0', hoverEffect: 'zoom' }, childrenComponents: [{ id: 'gal2-img8-image', type: 'image', props: { src: '', alt: 'Proyek 8', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px' } }] },
  ],
  'gallery-03': [
    { id: 'gal3-heading', type: 'heading', props: { content: 'Galeri Eksklusif', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal3-subtext', type: 'text', props: { content: 'Dokumentasi visual proyek eksklusif dan pencapaian bermakna kami', fontSize: '16px', color: '#94a3b8', align: 'center', margin: '0 0 48px 0' } },
    { id: 'gal3-img-1', type: 'card', props: { variant: 'gallery-dark', background: '#1e293b', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '0', hoverEffect: 'glow' }, childrenComponents: [{ id: 'gal3-img1-image', type: 'image', props: { src: '', alt: 'Eksklusif 1', width: '100%', height: '240px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal3-img-2', type: 'card', props: { variant: 'gallery-dark', background: '#1e293b', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '0', hoverEffect: 'glow' }, childrenComponents: [{ id: 'gal3-img2-image', type: 'image', props: { src: '', alt: 'Eksklusif 2', width: '100%', height: '240px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal3-img-3', type: 'card', props: { variant: 'gallery-dark', background: '#1e293b', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '0', hoverEffect: 'glow' }, childrenComponents: [{ id: 'gal3-img3-image', type: 'image', props: { src: '', alt: 'Eksklusif 3', width: '100%', height: '240px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal3-img-4', type: 'card', props: { variant: 'gallery-dark', background: '#1e293b', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '0', hoverEffect: 'glow' }, childrenComponents: [{ id: 'gal3-img4-image', type: 'image', props: { src: '', alt: 'Eksklusif 4', width: '100%', height: '240px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal3-img-5', type: 'card', props: { variant: 'gallery-dark', background: '#1e293b', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '0', hoverEffect: 'glow' }, childrenComponents: [{ id: 'gal3-img5-image', type: 'image', props: { src: '', alt: 'Eksklusif 5', width: '100%', height: '240px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal3-img-6', type: 'card', props: { variant: 'gallery-dark', background: '#1e293b', borderRadius: '16px', shadow: 'xl', borderWidth: '1px', borderColor: '#334155', padding: '0', hoverEffect: 'glow' }, childrenComponents: [{ id: 'gal3-img6-image', type: 'image', props: { src: '', alt: 'Eksklusif 6', width: '100%', height: '240px', objectFit: 'cover', borderRadius: '16px' } }] },
  ],
  'gallery-04': [
    { id: 'gal4-heading', type: 'heading', props: { content: 'Galeri Aktivitas & Acara', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'gal4-subtext', type: 'text', props: { content: 'Momen-momen berharga dari berbagai event dan aktivitas kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'gal4-img-1', type: 'card', props: { variant: 'gallery', background: '#f8fafc', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '0', hoverEffect: 'lift' }, childrenComponents: [{ id: 'gal4-img1-image', type: 'image', props: { src: '', alt: 'Acara 1', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal4-img-2', type: 'card', props: { variant: 'gallery', background: '#f8fafc', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '0', hoverEffect: 'lift' }, childrenComponents: [{ id: 'gal4-img2-image', type: 'image', props: { src: '', alt: 'Acara 2', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal4-img-3', type: 'card', props: { variant: 'gallery', background: '#f8fafc', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '0', hoverEffect: 'lift' }, childrenComponents: [{ id: 'gal4-img3-image', type: 'image', props: { src: '', alt: 'Acara 3', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal4-img-4', type: 'card', props: { variant: 'gallery', background: '#f8fafc', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '0', hoverEffect: 'lift' }, childrenComponents: [{ id: 'gal4-img4-image', type: 'image', props: { src: '', alt: 'Acara 4', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal4-img-5', type: 'card', props: { variant: 'gallery', background: '#f8fafc', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '0', hoverEffect: 'lift' }, childrenComponents: [{ id: 'gal4-img5-image', type: 'image', props: { src: '', alt: 'Acara 5', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal4-img-6', type: 'card', props: { variant: 'gallery', background: '#f8fafc', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '0', hoverEffect: 'lift' }, childrenComponents: [{ id: 'gal4-img6-image', type: 'image', props: { src: '', alt: 'Acara 6', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal4-img-7', type: 'card', props: { variant: 'gallery', background: '#f8fafc', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '0', hoverEffect: 'lift' }, childrenComponents: [{ id: 'gal4-img7-image', type: 'image', props: { src: '', alt: 'Acara 7', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' } }] },
    { id: 'gal4-img-8', type: 'card', props: { variant: 'gallery', background: '#f8fafc', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', padding: '0', hoverEffect: 'lift' }, childrenComponents: [{ id: 'gal4-img8-image', type: 'image', props: { src: '', alt: 'Acara 8', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '16px' } }] },
  ],

  // === CONTACT LAYOUTS ===
  'contact-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Contact Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#000000', align: 'center', margin: '0 0 32px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Email: hello@company.com', fontSize: '16px', color: '#64748b', align: 'center' } },
    { id: 'text-2', type: 'text', props: { content: 'Phone: +62 123 456 789', fontSize: '16px', color: '#64748b', align: 'center' } },
  ],
  'contact-02': [
    { id: 'heading-1', type: 'heading', props: { content: 'Contact Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Get in touch with us', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 32px 0' } },
  ],
  'contact-03': [
    { id: 'heading-1', type: 'heading', props: { content: 'Contact Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Get in touch with us', fontSize: '16px', color: '#cbd5e1', align: 'center', margin: '0 0 32px 0' } },
  ],

  // === FOOTER LAYOUTS ===
  'footer-01': [
    { id: 'text-1', type: 'text', props: { content: '© 2024. All rights reserved.', fontSize: '14px', color: '#cbd5e1', align: 'center' } },
    { id: 'social-1', type: 'social', props: { platforms: ['facebook', 'twitter', 'linkedin'], size: 'medium' } },
  ],
  'footer-02': [
    { id: 'heading-1', type: 'heading', props: { content: 'Company Name', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: '© 2024. All rights reserved.', fontSize: '14px', color: '#cbd5e1', align: 'left' } },
  ],
  'footer-03': [
    { id: 'text-1', type: 'text', props: { content: '© 2024. All rights reserved.', fontSize: '14px', color: '#cbd5e1', align: 'center' } },
    { id: 'social-1', type: 'social', props: { platforms: ['facebook', 'twitter', 'linkedin'], size: 'medium' } },
  ],
  'footer-04': [
    { id: 'heading-1', type: 'heading', props: { content: 'Company Name', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: '© 2024. All rights reserved.', fontSize: '14px', color: '#cbd5e1', align: 'left' } },
  ],

  // === SINGLE LAYOUTS ===
  'statistics-01': [
    { id: 'stat1-heading', type: 'heading', props: { content: 'Statistik & Pencapaian', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'stat1-subtext', type: 'text', props: { content: 'Angka yang mencerminkan kepercayaan dan keunggulan layanan kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'stat1-card-1', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'stat1-c1-value', type: 'heading', props: { content: '50+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat1-c1-label', type: 'text', props: { content: 'Negara Jangkauan', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
    ]},
    { id: 'stat1-card-2', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'stat1-c2-value', type: 'heading', props: { content: '500+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat1-c2-label', type: 'text', props: { content: 'Klien Terpercaya', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
    ]},
    { id: 'stat1-card-3', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'stat1-c3-value', type: 'heading', props: { content: '10K+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat1-c3-label', type: 'text', props: { content: 'Pengiriman Selesai', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
    ]},
    { id: 'stat1-card-4', type: 'card', props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e0e7ff', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'stat1-c4-value', type: 'heading', props: { content: '99%', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#4f46e5', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat1-c4-label', type: 'text', props: { content: 'Tingkat Kepuasan', fontSize: '15px', fontWeight: '600', color: '#475569', align: 'center', margin: '0' } },
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
    { id: 'cli1-heading', type: 'heading', props: { content: 'Dipercaya Korporat Terkemuka', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli1-subtext', type: 'text', props: { content: 'Bergabung bersama ratusan perusahaan terkemuka yang telah mempercayakan kebutuhan mereka kepada kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'cli1-card-1', type: 'card', props: { variant: 'client', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'cli1-c1-logo', type: 'image', props: { src: '', alt: 'Logo Klien 1', width: '80px', height: '40px', objectFit: 'contain', align: 'center', margin: '0 auto 12px auto' } },
      { id: 'cli1-c1-name', type: 'heading', props: { content: 'PT Pertamina', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
    ]},
    { id: 'cli1-card-2', type: 'card', props: { variant: 'client', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'cli1-c2-logo', type: 'image', props: { src: '', alt: 'Logo Klien 2', width: '80px', height: '40px', objectFit: 'contain', align: 'center', margin: '0 auto 12px auto' } },
      { id: 'cli1-c2-name', type: 'heading', props: { content: 'Bank Mandiri', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
    ]},
    { id: 'cli1-card-3', type: 'card', props: { variant: 'client', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'cli1-c3-logo', type: 'image', props: { src: '', alt: 'Logo Klien 3', width: '80px', height: '40px', objectFit: 'contain', align: 'center', margin: '0 auto 12px auto' } },
      { id: 'cli1-c3-name', type: 'heading', props: { content: 'Telkom Indonesia', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
    ]},
    { id: 'cli1-card-4', type: 'card', props: { variant: 'client', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'cli1-c4-logo', type: 'image', props: { src: '', alt: 'Logo Klien 4', width: '80px', height: '40px', objectFit: 'contain', align: 'center', margin: '0 auto 12px auto' } },
      { id: 'cli1-c4-name', type: 'heading', props: { content: 'BRI', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
    ]},
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
    { id: 'prod1-badge', type: 'badge', props: { content: 'Produk Unggulan', background: '#ede9fe', color: '#4f46e5', borderRadius: '999px', padding: '6px 16px', fontSize: '13px', fontWeight: '600', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod1-heading', type: 'heading', props: { content: 'Produk & Layanan Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod1-subtext', type: 'text', props: { content: 'Solusi inovatif yang dirancang khusus untuk kebutuhan bisnis modern Anda', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'prod1-card-1', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' }, childrenComponents: [
      { id: 'prod1-c1-image', type: 'image', props: { src: '', alt: 'Produk Enterprise', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
      { id: 'prod1-c1-title', type: 'heading', props: { content: 'Microdata Enterprise', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 0 0', padding: '0 20px' } },
      { id: 'prod1-c1-desc', type: 'text', props: { content: 'Sistem manajemen bisnis terintegrasi untuk perusahaan skala besar.', fontSize: '14px', color: '#64748b', margin: '8px 0 20px 0', padding: '0 20px' } },
      { id: 'prod1-c1-btn', type: 'button', props: { content: 'Lihat Detail', variant: 'primary', background: '#4f46e5', color: '#ffffff', borderRadius: '10px', padding: '10px 20px', fontSize: '14px', fontWeight: '600', margin: '0 0 20px 20px' } },
    ]},
    { id: 'prod1-card-2', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' }, childrenComponents: [
      { id: 'prod1-c2-image', type: 'image', props: { src: '', alt: 'Produk UMKM', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
      { id: 'prod1-c2-title', type: 'heading', props: { content: 'Microdata UMKM', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 0 0', padding: '0 20px' } },
      { id: 'prod1-c2-desc', type: 'text', props: { content: 'Platform kasir dan stok digital yang mudah digunakan untuk UMKM.', fontSize: '14px', color: '#64748b', margin: '8px 0 20px 0', padding: '0 20px' } },
      { id: 'prod1-c2-btn', type: 'button', props: { content: 'Lihat Detail', variant: 'primary', background: '#4f46e5', color: '#ffffff', borderRadius: '10px', padding: '10px 20px', fontSize: '14px', fontWeight: '600', margin: '0 0 20px 20px' } },
    ]},
    { id: 'prod1-card-3', type: 'card', props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' }, childrenComponents: [
      { id: 'prod1-c3-image', type: 'image', props: { src: '', alt: 'Produk Akademik', width: '100%', height: '200px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
      { id: 'prod1-c3-title', type: 'heading', props: { content: 'Microdata Akademik', level: 'h3', fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: '16px 0 0 0', padding: '0 20px' } },
      { id: 'prod1-c3-desc', type: 'text', props: { content: 'Sistem informasi manajemen akademik lengkap untuk kampus dan sekolah.', fontSize: '14px', color: '#64748b', margin: '8px 0 20px 0', padding: '0 20px' } },
      { id: 'prod1-c3-btn', type: 'button', props: { content: 'Lihat Detail', variant: 'primary', background: '#4f46e5', color: '#ffffff', borderRadius: '10px', padding: '10px 20px', fontSize: '14px', fontWeight: '600', margin: '0 0 20px 20px' } },
    ]},
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
    { id: 'badge-1', type: 'badge', props: { content: 'Our Mission', variant: 'secondary', size: 'medium' } },
    { id: 'heading-1', type: 'heading', props: { content: 'Our Mission', level: 'h2', fontSize: '36px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 24px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'To provide exceptional value to our customers through quality products, dedicated service, and continuous innovation.', fontSize: '18px', color: '#64748b', align: 'center', lineHeight: '1.8' } },
  ],
  'timeline-01': [
    { id: 'tml1-badge', type: 'badge', props: { content: 'PERJALANAN KAMI', background: '#ede9fe', color: '#4f46e5', borderRadius: '999px', padding: '6px 16px', fontSize: '13px', fontWeight: '600', align: 'center', margin: '0 0 12px 0' } },
    { id: 'tml1-heading', type: 'heading', props: { content: 'Jejak Langkah & Sejarah', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'tml1-subtext', type: 'text', props: { content: 'Perjalanan panjang kami dalam membangun solusi terbaik dari masa ke masa', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'tml1-card-1', type: 'card', props: { variant: 'timeline', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'tml1-c1-year', type: 'badge', props: { content: '2015', background: '#e0e7ff', color: '#4f46e5', borderRadius: '8px', padding: '4px 12px', fontSize: '12px', fontWeight: '700', margin: '0 0 10px 0' } },
      { id: 'tml1-c1-title', type: 'heading', props: { content: 'Perusahaan Didirikan', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' } },
      { id: 'tml1-c1-desc', type: 'text', props: { content: 'Berawal dari 3 pendiri dengan visi besar menyediakan solusi teknologi tepercaya.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'tml1-card-2', type: 'card', props: { variant: 'timeline', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'tml1-c2-year', type: 'badge', props: { content: '2018', background: '#e0e7ff', color: '#4f46e5', borderRadius: '8px', padding: '4px 12px', fontSize: '12px', fontWeight: '700', margin: '0 0 10px 0' } },
      { id: 'tml1-c2-title', type: 'heading', props: { content: 'Ekspansi Nasional', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' } },
      { id: 'tml1-c2-desc', type: 'text', props: { content: 'Membuka cabang di 5 kota besar dan melayani lebih dari 100 perusahaan.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'tml1-card-3', type: 'card', props: { variant: 'timeline', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'tml1-c3-year', type: 'badge', props: { content: '2021', background: '#e0e7ff', color: '#4f46e5', borderRadius: '8px', padding: '4px 12px', fontSize: '12px', fontWeight: '700', margin: '0 0 10px 0' } },
      { id: 'tml1-c3-title', type: 'heading', props: { content: 'Inovasi Cloud Enterprise', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' } },
      { id: 'tml1-c3-desc', type: 'text', props: { content: 'Peluncuran platform cloud enterprise generasi baru berbasis otomasi AI.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'tml1-card-4', type: 'card', props: { variant: 'timeline', background: '#ffffff', borderRadius: '16px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '24px' }, childrenComponents: [
      { id: 'tml1-c4-year', type: 'badge', props: { content: '2024', background: '#e0e7ff', color: '#4f46e5', borderRadius: '8px', padding: '4px 12px', fontSize: '12px', fontWeight: '700', margin: '0 0 10px 0' } },
      { id: 'tml1-c4-title', type: 'heading', props: { content: 'Pemimpin Pasar Industri', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '0 0 6px 0' } },
      { id: 'tml1-c4-desc', type: 'text', props: { content: 'Diakui sebagai penyedia solusi terdepan dengan kepuasan pelanggan 99%.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
  ],
  'team-01': [
    { id: 'tm1-heading', type: 'heading', props: { content: 'Tim Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'tm1-subtext', type: 'text', props: { content: 'Didukung oleh tim profesional berpengalaman yang berdedikasi untuk kesuksesan Anda', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'tm1-card-1', type: 'card', props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'tm1-c1-avatar', type: 'image', props: { src: '', alt: 'Ahmad Santoso', width: '88px', height: '88px', borderRadius: '50%', objectFit: 'cover', align: 'center', margin: '0 auto 16px auto' } },
      { id: 'tm1-c1-name', type: 'heading', props: { content: 'Ahmad Santoso', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 4px 0' } },
      { id: 'tm1-c1-role', type: 'text', props: { content: 'CEO & Co-Founder', fontSize: '13px', color: '#4f46e5', fontWeight: '600', align: 'center', margin: '0 0 10px 0' } },
      { id: 'tm1-c1-desc', type: 'text', props: { content: '15 tahun pengalaman di industri teknologi dan manajemen perusahaan global.', fontSize: '13px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'tm1-card-2', type: 'card', props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'tm1-c2-avatar', type: 'image', props: { src: '', alt: 'Siti Rahayu', width: '88px', height: '88px', borderRadius: '50%', objectFit: 'cover', align: 'center', margin: '0 auto 16px auto' } },
      { id: 'tm1-c2-name', type: 'heading', props: { content: 'Siti Rahayu', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 4px 0' } },
      { id: 'tm1-c2-role', type: 'text', props: { content: 'CTO & Head of Engineering', fontSize: '13px', color: '#4f46e5', fontWeight: '600', align: 'center', margin: '0 0 10px 0' } },
      { id: 'tm1-c2-desc', type: 'text', props: { content: 'Insinyur senior dengan keahlian cloud architecture dan sistem distributed skala besar.', fontSize: '13px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'tm1-card-3', type: 'card', props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'tm1-c3-avatar', type: 'image', props: { src: '', alt: 'Budi Hartono', width: '88px', height: '88px', borderRadius: '50%', objectFit: 'cover', align: 'center', margin: '0 auto 16px auto' } },
      { id: 'tm1-c3-name', type: 'heading', props: { content: 'Budi Hartono', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 4px 0' } },
      { id: 'tm1-c3-role', type: 'text', props: { content: 'CMO & Head of Marketing', fontSize: '13px', color: '#4f46e5', fontWeight: '600', align: 'center', margin: '0 0 10px 0' } },
      { id: 'tm1-c3-desc', type: 'text', props: { content: 'Pakar pemasaran digital dengan rekam jejak pertumbuhan brand nasional dan internasional.', fontSize: '13px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'tm1-card-4', type: 'card', props: { variant: 'team', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' }, childrenComponents: [
      { id: 'tm1-c4-avatar', type: 'image', props: { src: '', alt: 'Diana Kusuma', width: '88px', height: '88px', borderRadius: '50%', objectFit: 'cover', align: 'center', margin: '0 auto 16px auto' } },
      { id: 'tm1-c4-name', type: 'heading', props: { content: 'Diana Kusuma', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 4px 0' } },
      { id: 'tm1-c4-role', type: 'text', props: { content: 'CFO & Financial Director', fontSize: '13px', color: '#4f46e5', fontWeight: '600', align: 'center', margin: '0 0 10px 0' } },
      { id: 'tm1-c4-desc', type: 'text', props: { content: 'Ahli keuangan dengan pengalaman IPO dan fund management perusahaan teknologi.', fontSize: '13px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
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

  // === STATISTICS EXTENDED ===
  'statistics-02': [
    { id: 'stat2-heading', type: 'heading', props: { content: 'Dampak \u0026 Pencapaian', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#ffffff', align: 'center', margin: '0 0 12px 0' } },
    { id: 'stat2-subtext', type: 'text', props: { content: 'Angka yang membuktikan komitmen kami terhadap kualitas dan kepuasan pelanggan', fontSize: '16px', color: '#e0e7ff', align: 'center', margin: '0 0 48px 0' } },
    { id: 'stat2-card-1', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', shadow: 'xl', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)', hoverEffect: 'glow', padding: '32px 24px' }, childrenComponents: [
      { id: 'stat2-c1-value', type: 'heading', props: { content: '10K+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat2-c1-label', type: 'text', props: { content: 'Pelanggan Aktif', fontSize: '15px', fontWeight: '600', color: '#e0e7ff', align: 'center', margin: '0' } },
    ]},
    { id: 'stat2-card-2', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', shadow: 'xl', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)', hoverEffect: 'glow', padding: '32px 24px' }, childrenComponents: [
      { id: 'stat2-c2-value', type: 'heading', props: { content: '50+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat2-c2-label', type: 'text', props: { content: 'Kota Layanan', fontSize: '15px', fontWeight: '600', color: '#e0e7ff', align: 'center', margin: '0' } },
    ]},
    { id: 'stat2-card-3', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', shadow: 'xl', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)', hoverEffect: 'glow', padding: '32px 24px' }, childrenComponents: [
      { id: 'stat2-c3-value', type: 'heading', props: { content: '98%', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat2-c3-label', type: 'text', props: { content: 'Tingkat Kepuasan', fontSize: '15px', fontWeight: '600', color: '#e0e7ff', align: 'center', margin: '0' } },
    ]},
    { id: 'stat2-card-4', type: 'card', props: { variant: 'stat-dark', background: 'rgba(255,255,255,0.1)', borderRadius: '20px', shadow: 'xl', borderWidth: '1px', borderColor: 'rgba(255,255,255,0.2)', hoverEffect: 'glow', padding: '32px 24px' }, childrenComponents: [
      { id: 'stat2-c4-value', type: 'heading', props: { content: '24/7', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#ffffff', align: 'center', margin: '0 0 8px 0' } },
      { id: 'stat2-c4-label', type: 'text', props: { content: 'Dukungan Teknis', fontSize: '15px', fontWeight: '600', color: '#e0e7ff', align: 'center', margin: '0' } },
    ]},
  ],

  // === CLIENTS EXTENDED ===
  'clients-02': [
    { id: 'cli2-heading', type: 'heading', props: { content: 'Mitra \u0026 Rekanan Bisnis', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cli2-subtext', type: 'text', props: { content: 'Jaringan kemitraan strategis dengan perusahaan-perusahaan terkemuka di Indonesia', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'cli2-card-1', type: 'card', props: { variant: 'client', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'cli2-c1-logo', type: 'image', props: { src: '', alt: 'Mitra 1', width: '90px', height: '45px', objectFit: 'contain', align: 'center', margin: '0 auto 12px auto' } },
      { id: 'cli2-c1-name', type: 'heading', props: { content: 'PT PLN (Persero)', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
    ]},
    { id: 'cli2-card-2', type: 'card', props: { variant: 'client', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'cli2-c2-logo', type: 'image', props: { src: '', alt: 'Mitra 2', width: '90px', height: '45px', objectFit: 'contain', align: 'center', margin: '0 auto 12px auto' } },
      { id: 'cli2-c2-name', type: 'heading', props: { content: 'Garuda Indonesia', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
    ]},
    { id: 'cli2-card-3', type: 'card', props: { variant: 'client', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'cli2-c3-logo', type: 'image', props: { src: '', alt: 'Mitra 3', width: '90px', height: '45px', objectFit: 'contain', align: 'center', margin: '0 auto 12px auto' } },
      { id: 'cli2-c3-name', type: 'heading', props: { content: 'Astra International', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
    ]},
    { id: 'cli2-card-4', type: 'card', props: { variant: 'client', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'cli2-c4-logo', type: 'image', props: { src: '', alt: 'Mitra 4', width: '90px', height: '45px', objectFit: 'contain', align: 'center', margin: '0 auto 12px auto' } },
      { id: 'cli2-c4-name', type: 'heading', props: { content: 'Bank Central Asia', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
    ]},
    { id: 'cli2-card-5', type: 'card', props: { variant: 'client', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'cli2-c5-logo', type: 'image', props: { src: '', alt: 'Mitra 5', width: '90px', height: '45px', objectFit: 'contain', align: 'center', margin: '0 auto 12px auto' } },
      { id: 'cli2-c5-name', type: 'heading', props: { content: 'Unilever Indonesia', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
    ]},
    { id: 'cli2-card-6', type: 'card', props: { variant: 'client', background: '#f8fafc', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'cli2-c6-logo', type: 'image', props: { src: '', alt: 'Mitra 6', width: '90px', height: '45px', objectFit: 'contain', align: 'center', margin: '0 auto 12px auto' } },
      { id: 'cli2-c6-name', type: 'heading', props: { content: 'Indofood Group', level: 'h4', fontSize: '14px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0' } },
    ]},
  ],

  // === PRODUCTS EXTENDED ===
  'products-02': [
    { id: 'prod2-heading', type: 'heading', props: { content: 'Katalog Produk', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'prod2-subtext', type: 'text', props: { content: 'Temukan produk terbaik yang sesuai dengan kebutuhan dan anggaran Anda', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'prod2-card-1', type: 'card', props: { variant: 'product', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' }, childrenComponents: [
      { id: 'prod2-c1-badge', type: 'badge', props: { content: 'Terlaris', background: '#fef3c7', color: '#d97706', borderRadius: '8px', padding: '4px 12px', fontSize: '12px', fontWeight: '600', margin: '12px 0 0 12px' } },
      { id: 'prod2-c1-image', type: 'image', props: { src: '', alt: 'Produk 1', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
      { id: 'prod2-c1-title', type: 'heading', props: { content: 'Produk Unggulan A', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '16px 0 0 0', padding: '0 20px' } },
      { id: 'prod2-c1-price', type: 'heading', props: { content: 'Rp 2.500.000', level: 'h4', fontSize: '20px', fontWeight: '800', color: '#4f46e5', margin: '8px 0 0 0', padding: '0 20px' } },
      { id: 'prod2-c1-desc', type: 'text', props: { content: 'Solusi terbaik untuk kebutuhan bisnis Anda dengan fitur-fitur canggih.', fontSize: '13px', color: '#64748b', margin: '6px 0 20px 0', padding: '0 20px' } },
    ]},
    { id: 'prod2-card-2', type: 'card', props: { variant: 'product', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' }, childrenComponents: [
      { id: 'prod2-c2-badge', type: 'badge', props: { content: 'Baru', background: '#dbeafe', color: '#1d4ed8', borderRadius: '8px', padding: '4px 12px', fontSize: '12px', fontWeight: '600', margin: '12px 0 0 12px' } },
      { id: 'prod2-c2-image', type: 'image', props: { src: '', alt: 'Produk 2', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
      { id: 'prod2-c2-title', type: 'heading', props: { content: 'Produk Premium B', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '16px 0 0 0', padding: '0 20px' } },
      { id: 'prod2-c2-price', type: 'heading', props: { content: 'Rp 4.750.000', level: 'h4', fontSize: '20px', fontWeight: '800', color: '#4f46e5', margin: '8px 0 0 0', padding: '0 20px' } },
      { id: 'prod2-c2-desc', type: 'text', props: { content: 'Paket premium dengan fitur eksklusif dan dukungan prioritas untuk bisnis Anda.', fontSize: '13px', color: '#64748b', margin: '6px 0 20px 0', padding: '0 20px' } },
    ]},
    { id: 'prod2-card-3', type: 'card', props: { variant: 'product', background: '#ffffff', borderRadius: '20px', shadow: 'md', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '0' }, childrenComponents: [
      { id: 'prod2-c3-image', type: 'image', props: { src: '', alt: 'Produk 3', width: '100%', height: '180px', objectFit: 'cover', borderRadius: '20px 20px 0 0' } },
      { id: 'prod2-c3-title', type: 'heading', props: { content: 'Produk Starter C', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '16px 0 0 0', padding: '0 20px' } },
      { id: 'prod2-c3-price', type: 'heading', props: { content: 'Rp 1.200.000', level: 'h4', fontSize: '20px', fontWeight: '800', color: '#4f46e5', margin: '8px 0 0 0', padding: '0 20px' } },
      { id: 'prod2-c3-desc', type: 'text', props: { content: 'Pilihan tepat untuk bisnis yang baru berkembang dengan budget yang terjangkau.', fontSize: '13px', color: '#64748b', margin: '6px 0 20px 0', padding: '0 20px' } },
    ]},
  ],

  // === ADDITIONAL LAYOUTS ===
  'about-05': [
    { id: 'ab5-heading', type: 'heading', props: { content: 'Tentang Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'ab5-subtext', type: 'text', props: { content: 'Mengenal lebih dekat visi, misi, dan perjalanan kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'ab5-image', type: 'image', props: { src: '', alt: 'About Image', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '20px' } },
    { id: 'ab5-text', type: 'text', props: { content: 'Kami adalah perusahaan yang berdedikasi untuk memberikan solusi terbaik kepada pelanggan kami. Dengan tim yang berpengalaman dan teknologi terkini, kami siap membantu bisnis Anda tumbuh dan berkembang.', fontSize: '16px', color: '#475569', lineHeight: '1.8', margin: '24px 0 0 0' } },
    { id: 'ab5-btn', type: 'button', props: { label: 'Pelajari Lebih Lanjut', href: '#', variant: 'primary', background: '#4f46e5', color: '#ffffff' } },
  ],

  'contact-04': [
    { id: 'cnt4-heading', type: 'heading', props: { content: 'Hubungi Kami', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'cnt4-subtext', type: 'text', props: { content: 'Kami siap membantu Anda. Hubungi kami melalui berbagai saluran yang tersedia.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'cnt4-card-1', type: 'card', props: { variant: 'contact', background: '#f8fafc', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'cnt4-c1-icon', type: 'icon', props: { icon: 'FaPhone', size: '32px', color: '#4f46e5', align: 'center' } },
      { id: 'cnt4-c1-title', type: 'heading', props: { content: 'Telepon', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '12px 0 4px 0' } },
      { id: 'cnt4-c1-text', type: 'text', props: { content: '+62 21 1234 5678', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'cnt4-card-2', type: 'card', props: { variant: 'contact', background: '#f8fafc', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'cnt4-c2-icon', type: 'icon', props: { icon: 'FaEnvelope', size: '32px', color: '#4f46e5', align: 'center' } },
      { id: 'cnt4-c2-title', type: 'heading', props: { content: 'Email', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '12px 0 4px 0' } },
      { id: 'cnt4-c2-text', type: 'text', props: { content: 'info@perusahaan.co.id', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
    { id: 'cnt4-card-3', type: 'card', props: { variant: 'contact', background: '#f8fafc', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'cnt4-c3-icon', type: 'icon', props: { icon: 'FaMapMarkerAlt', size: '32px', color: '#4f46e5', align: 'center' } },
      { id: 'cnt4-c3-title', type: 'heading', props: { content: 'Alamat', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '12px 0 4px 0' } },
      { id: 'cnt4-c3-text', type: 'text', props: { content: 'Jl. Sudirman No. 88, Jakarta Selatan', fontSize: '14px', color: '#64748b', align: 'center', margin: '0' } },
    ]},
  ],

  'faq-01': [
    { id: 'faq1-badge', type: 'badge', props: { content: 'FAQ', background: '#ede9fe', color: '#4f46e5', borderRadius: '999px', padding: '6px 16px', fontSize: '13px', fontWeight: '600', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq1-heading', type: 'heading', props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'faq1-subtext', type: 'text', props: { content: 'Jawaban atas pertanyaan paling umum dari pelanggan dan calon mahasiswa kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'faq1-item-1', type: 'card', props: { variant: 'faq', background: '#f8fafc', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' }, childrenComponents: [
      { id: 'faq1-i1-q', type: 'heading', props: { content: 'Layanan apa yang tersedia untuk bisnis kami?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } },
      { id: 'faq1-i1-a', type: 'text', props: { content: 'Kami menyediakan solusi lengkap mulai dari konsultasi, implementasi sistem, hingga pelatihan dan dukungan purna jual yang komprehensif.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'faq1-item-2', type: 'card', props: { variant: 'faq', background: '#f8fafc', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' }, childrenComponents: [
      { id: 'faq1-i2-q', type: 'heading', props: { content: 'Berapa lama proses implementasi sistem?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } },
      { id: 'faq1-i2-a', type: 'text', props: { content: 'Waktu implementasi bervariasi antara 2-8 minggu tergantung skala dan kompleksitas kebutuhan bisnis Anda.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'faq1-item-3', type: 'card', props: { variant: 'faq', background: '#f8fafc', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' }, childrenComponents: [
      { id: 'faq1-i3-q', type: 'heading', props: { content: 'Apakah tersedia paket harga yang fleksibel?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } },
      { id: 'faq1-i3-a', type: 'text', props: { content: 'Ya, kami menawarkan paket harga yang dapat disesuaikan mulai dari UMKM, perusahaan menengah, hingga enterprise berskala nasional.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'faq1-item-4', type: 'card', props: { variant: 'faq', background: '#f8fafc', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' }, childrenComponents: [
      { id: 'faq1-i4-q', type: 'heading', props: { content: 'Bagaimana sistem dukungan teknis bekerja?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } },
      { id: 'faq1-i4-a', type: 'text', props: { content: 'Kami menyediakan dukungan teknis 24/7 melalui live chat, email, dan telepon khusus dengan tim insinyur berpengalaman.', fontSize: '14px', color: '#64748b', margin: '0' } },
    ]},
  ],
  'pricing-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Pricing Plans', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ],
  'map-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
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
  'coverage-02': [
    { id: 'cov02-heading', type: 'heading', props: { content: 'Jangkauan Distribusi Nasional', level: 'h2', fontSize: '36px', color: '#ffffff' } },
    { id: 'cov02-desc', type: 'text', props: { content: 'Menghubungkan bisnis Anda ke seluruh wilayah di Indonesia.', fontSize: '16px', color: '#94a3b8' } }
  ],
  'timeline-02': [
    { id: 'tm02-heading', type: 'heading', props: { content: 'Proses Pengiriman Cargo', level: 'h2', fontSize: '36px', color: '#ffffff' } },
    { id: 'tm02-desc', type: 'text', props: { content: 'Alur kerja profesional dari pengambilan barang hingga tiba di tujuan.', fontSize: '16px', color: '#94a3b8' } }
  ],
};

export const getLayoutDefaults = (layoutId) => {
  return LAYOUT_DEFAULTS[layoutId] || [];
};
