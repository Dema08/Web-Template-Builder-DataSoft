/**
 * Logistics Corporate Express — Premium trust-forward, fleet & coverage
 * Starter template for large logistics companies with fleet, coverage, and B2B focus.
 * Distinct design system: deep navy + orange accents, refined typography, and premium storytelling flow.
 */
export default {
  id: 'logistics-corporate',
  name: 'Logistics Corporate Express',
  description: 'Template premium untuk perusahaan logistik besar: hero dengan trust indicator, profil perusahaan, statistik armada, layanan lengkap, sertifikasi resmi, jangkauan peta, dan FAQ — untuk perusahaan logistik nasional.',
  thumbnail: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
  tags: ['Corporate', 'Fleet', 'Supply Chain', 'B2B', 'National', 'Premium'],
  theme: {
    primaryColor: '#0b192f',
    secondaryColor: '#1e293b',
    accentColor: '#f97316',
    dark: true,
    surface: '#0f172a',
    text: '#f8fafc',
    muted: '#94a3b8',
    border: '#1e293b',
    radius: 'lg',
    font: 'Inter, Manrope, sans-serif',
  },
  animations: ['fade-up', 'counter-up', 'logo-carousel', 'scale-in', 'hover-lift'],
  sections: [

    // ─── NAVBAR ──────────────────────────────────────────────────────────────
    {
      id: 'nav',
      type: 'navbar',
      layout: 'navbar-06',
      components: [
        {
          id: 'nav-logo',
          type: 'heading',
          props: {
            content: 'TRANSGO LOGISTICS',
            level: 'h2',
            fontSize: '18px',
            fontWeight: '900',
            letterSpacing: '0.045em',
            color: '#ffffff',
            lineHeight: '1',
            textTransform: 'uppercase',
          },
        },
        {
          id: 'nav-cta-btn',
          type: 'button',
          props: {
            label: 'Track Shipment →',
            href: '#tracking',
            variant: 'primary',
            size: 'small',
            radius: 'full',
            background: '#f97316',
            color: '#ffffff',
            shadow: 'md',
            fontSize: '13px',
            fontWeight: '700',
            letterSpacing: '0.01em',
            textTransform: 'none',
            padding: '10px 16px',
          },
        },
      ],
    },

    // ─── HERO ─────────────────────────────────────────────────────────────────
    {
      id: 'hero',
      type: 'hero',
      layout: 'hero-09',
      components: [
        {
          id: 'hero-badge',
          type: 'badge',
          props: {
            content: '🚚 Jaringan Nasional & Internasional',
            variant: 'primary',
            size: 'medium',
          },
        },
        {
          id: 'hero-title',
          type: 'heading',
          props: {
            content: 'Moving Businesses Forward, Across Indonesia.',
            level: 'h1',
            fontSize: '52px',
            fontWeight: '900',
            color: '#ffffff',
            align: 'left',
            lineHeight: '1.15',
            letterSpacing: '-0.02em',
            margin: '0 0 24px 0',
          },
        },
        {
          id: 'hero-desc',
          type: 'text',
          props: {
            content: 'Penyedia solusi rantai pasok terintegrasi untuk korporasi B2B. Didukung armada darat, laut, udara modern dan sistem pelacakan berbasis data real-time.',
            fontSize: '18px',
            color: '#94a3b8',
            align: 'left',
            lineHeight: '1.7',
            margin: '0 0 32px 0',
          },
        },
        {
          id: 'hero-btn1',
          type: 'button',
          props: {
            label: 'Request a Quote →',
            href: '#contact',
            variant: 'primary',
            size: 'large',
            radius: 'lg',
            background: '#f97316',
            color: '#ffffff',
            shadow: 'lg',
            fontSize: '16px',
            fontWeight: '700',
          },
        },
        {
          id: 'hero-btn2',
          type: 'button',
          props: {
            label: 'Track Shipment',
            href: '#tracking',
            variant: 'outline',
            size: 'large',
            radius: 'lg',
            background: 'transparent',
            color: '#ffffff',
            shadow: 'none',
            fontSize: '16px',
            fontWeight: '700',
          },
        },
        {
          id: 'hero-trust',
          type: 'text',
          props: {
            content: '⭐ 4.9/5 — Dipercaya 500+ korporasi nasional & internasional',
            fontSize: '15px',
            fontWeight: '600',
            color: '#f97316',
            align: 'left',
            letterSpacing: '0.02em',
            margin: '16px 0 0 0',
          },
        },
        {
          id: 'hero-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=80',
            alt: 'Cargo Ship Logistics',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '24px',
            shadow: 'xl',
          },
        },
      ],
    },

    // ─── ABOUT ────────────────────────────────────────────────────────────────
    {
      id: 'about',
      type: 'about',
      layout: 'about-02',
      components: [
        {
          id: 'about-badge',
          type: 'badge',
          props: { content: '🏢 Tentang TransGo', variant: 'primary', size: 'medium' },
        },
        {
          id: 'about-title',
          type: 'heading',
          props: {
            content: 'Rantai Pasok Nasional yang Terintegrasi & Terpercaya',
            level: 'h2',
            fontSize: '40px',
            fontWeight: '900',
            color: '#0f172a',
            align: 'left',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            margin: '0 0 20px 0',
          },
        },
        {
          id: 'about-desc',
          type: 'text',
          props: {
            content: 'Sejak 1998, TransGo Logistics telah membangun jaringan distribusi terluas di Indonesia. Dengan 500+ armada multi-modal, 12 pusat transit strategis, dan sistem pelacakan real-time, kami memastikan setiap kiriman korporasi tiba tepat waktu dan dalam kondisi sempurna.',
            fontSize: '16px',
            color: '#64748b',
            align: 'left',
            lineHeight: '1.8',
            margin: '0 0 24px 0',
          },
        },
        {
          id: 'about-f1',
          type: 'text',
          props: {
            content: '✓ GPS real-time tracking di seluruh armada',
            fontSize: '15px',
            fontWeight: '600',
            color: '#0b192f',
            align: 'left',
            margin: '0 0 12px 0',
          },
        },
        {
          id: 'about-f2',
          type: 'text',
          props: {
            content: '✓ Cold chain logistics dengan kontrol suhu presisi',
            fontSize: '15px',
            fontWeight: '600',
            color: '#0b192f',
            align: 'left',
            margin: '0 0 12px 0',
          },
        },
        {
          id: 'about-f3',
          type: 'text',
          props: {
            content: '✓ WMS terintegrasi untuk manajemen gudang efisien',
            fontSize: '15px',
            fontWeight: '600',
            color: '#0b192f',
            align: 'left',
            margin: '0 0 28px 0',
          },
        },
        {
          id: 'about-btn',
          type: 'button',
          props: {
            label: 'Lihat Sertifikasi Resmi',
            href: '#certifications',
            variant: 'primary',
            size: 'medium',
            radius: 'lg',
            background: '#0b192f',
            color: '#ffffff',
            shadow: 'md',
            fontSize: '14px',
            fontWeight: '700',
          },
        },
        {
          id: 'about-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&auto=format&fit=crop&q=80',
            alt: 'TransGo Logistics Fleet',
            width: '100%',
            height: '460px',
            objectFit: 'cover',
            borderRadius: '24px',
            shadow: 'xl',
          },
        },
      ],
    },

    // ─── CLIENTS ──────────────────────────────────────────────────────────────
    {
      id: 'clients',
      type: 'clients',
      layout: 'clients-01',
      components: [
        {
          id: 'clients-heading',
          type: 'heading',
          props: {
            content: 'Dipercaya Korporat Terkemuka',
            level: 'h2',
            fontSize: '36px',
            fontWeight: '800',
            color: '#0f172a',
            align: 'center',
            margin: '0 0 12px 0',
          },
        },
        {
          id: 'clients-subtext',
          type: 'text',
          props: {
            content: 'Mitra strategis dari berbagai industri nasional dan internasional dalam mengoptimalkan rantai pasok.',
            fontSize: '16px',
            color: '#64748b',
            align: 'center',
            margin: '0 0 48px 0',
          },
        },
        {
          id: 'client-card-pertamina',
          type: 'card',
          props: {
            variant: 'default',
            background: '#ffffff',
            borderRadius: '16px',
            shadow: 'sm',
            borderWidth: '1px',
            borderColor: '#e2e8f0',
            hoverEffect: 'lift',
            padding: '24px',
          },
          childrenComponents: [
            { id: 'client-pertamina-icon', type: 'icon', props: { icon: 'FaBuilding', size: '32px', color: '#0b192f', align: 'center' } },
            { id: 'client-pertamina-name', type: 'heading', props: { content: 'PT Pertamina Persero', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
          ],
        },
        {
          id: 'client-card-semen',
          type: 'card',
          props: {
            variant: 'default',
            background: '#ffffff',
            borderRadius: '16px',
            shadow: 'sm',
            borderWidth: '1px',
            borderColor: '#e2e8f0',
            hoverEffect: 'lift',
            padding: '24px',
          },
          childrenComponents: [
            { id: 'client-semen-icon', type: 'icon', props: { icon: 'FaIndustry', size: '32px', color: '#0b192f', align: 'center' } },
            { id: 'client-semen-name', type: 'heading', props: { content: 'PT Semen Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
          ],
        },
        {
          id: 'client-card-indomaret',
          type: 'card',
          props: {
            variant: 'default',
            background: '#ffffff',
            borderRadius: '16px',
            shadow: 'sm',
            borderWidth: '1px',
            borderColor: '#e2e8f0',
            hoverEffect: 'lift',
            padding: '24px',
          },
          childrenComponents: [
            { id: 'client-indomaret-icon', type: 'icon', props: { icon: 'FaStore', size: '32px', color: '#0b192f', align: 'center' } },
            { id: 'client-indomaret-name', type: 'heading', props: { content: 'Indomaret Group', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
          ],
        },
        {
          id: 'client-card-pelindo',
          type: 'card',
          props: {
            variant: 'default',
            background: '#ffffff',
            borderRadius: '16px',
            shadow: 'sm',
            borderWidth: '1px',
            borderColor: '#e2e8f0',
            hoverEffect: 'lift',
            padding: '24px',
          },
          childrenComponents: [
            { id: 'client-pelindo-icon', type: 'icon', props: { icon: 'FaShip', size: '32px', color: '#0b192f', align: 'center' } },
            { id: 'client-pelindo-name', type: 'heading', props: { content: 'PT Pelindo Logistik', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
          ],
        },
        {
          id: 'client-card-farma',
          type: 'card',
          props: {
            variant: 'default',
            background: '#ffffff',
            borderRadius: '16px',
            shadow: 'sm',
            borderWidth: '1px',
            borderColor: '#e2e8f0',
            hoverEffect: 'lift',
            padding: '24px',
          },
          childrenComponents: [
            { id: 'client-farma-icon', type: 'icon', props: { icon: 'FaPills', size: '32px', color: '#0b192f', align: 'center' } },
            { id: 'client-farma-name', type: 'heading', props: { content: 'FarmaCare Indonesia', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
          ],
        },
        {
          id: 'client-card-ecommerce',
          type: 'card',
          props: {
            variant: 'default',
            background: '#ffffff',
            borderRadius: '16px',
            shadow: 'sm',
            borderWidth: '1px',
            borderColor: '#e2e8f0',
            hoverEffect: 'lift',
            padding: '24px',
          },
          childrenComponents: [
            { id: 'client-ecommerce-icon', type: 'icon', props: { icon: 'FaShoppingCart', size: '32px', color: '#0b192f', align: 'center' } },
            { id: 'client-ecommerce-name', type: 'heading', props: { content: 'Nusantara E-Commerce', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '8px 0 0 0' } },
          ],
        },
      ],
    },

    // ─── STATISTICS ───────────────────────────────────────────────────────────
    {
      id: 'stats',
      type: 'statistics',
      layout: 'statistics-01',
      components: [
        {
          id: 'stats-badge',
          type: 'badge',
          props: { content: '📊 Kapasitas & Jangkauan', variant: 'primary', size: 'medium' },
        },
        {
          id: 'stats-title',
          type: 'heading',
          props: {
            content: 'Infrastruktur Logistik Nasional',
            level: 'h2',
            fontSize: '40px',
            fontWeight: '800',
            color: '#0f172a',
            align: 'center',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            margin: '0 0 12px 0',
          },
        },
        {
          id: 'stats-subtitle',
          type: 'text',
          props: {
            content: 'Kapasitas penuh yang siap mendukung kelancaran rantai distribusi produk korporasi Anda.',
            fontSize: '17px',
            color: '#64748b',
            align: 'center',
            lineHeight: '1.7',
            margin: '0 0 48px 0',
          },
        },
        {
          id: 'stat-card-fleet',
          type: 'card',
          props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' },
          childrenComponents: [
            { id: 'stat-fleet-value', type: 'heading', props: { content: '500+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#0b192f', align: 'center', margin: '0 0 8px 0' } },
            { id: 'stat-fleet-label', type: 'text', props: { content: 'Active Fleet', fontSize: '15px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
          ],
        },
        {
          id: 'stat-card-cities',
          type: 'card',
          props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' },
          childrenComponents: [
            { id: 'stat-cities-value', type: 'heading', props: { content: '50+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#0b192f', align: 'center', margin: '0 0 8px 0' } },
            { id: 'stat-cities-label', type: 'text', props: { content: 'Cities Covered', fontSize: '15px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
          ],
        },
        {
          id: 'stat-card-shipments',
          type: 'card',
          props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' },
          childrenComponents: [
            { id: 'stat-shipments-value', type: 'heading', props: { content: '10K+', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#0b192f', align: 'center', margin: '0 0 8px 0' } },
            { id: 'stat-shipments-label', type: 'text', props: { content: 'Monthly Shipments', fontSize: '15px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
          ],
        },
        {
          id: 'stat-card-ontime',
          type: 'card',
          props: { variant: 'stat', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' },
          childrenComponents: [
            { id: 'stat-ontime-value', type: 'heading', props: { content: '99.8%', level: 'h3', fontSize: '48px', fontWeight: '900', color: '#f97316', align: 'center', margin: '0 0 8px 0' } },
            { id: 'stat-ontime-label', type: 'text', props: { content: 'On-Time Performance', fontSize: '15px', fontWeight: '600', color: '#64748b', align: 'center', margin: '0' } },
          ],
        },
      ],
    },

    // ─── SERVICES ─────────────────────────────────────────────────────────────
    {
      id: 'services',
      type: 'services',
      layout: 'services-02',
      components: [
        {
          id: 'services-badge',
          type: 'badge',
          props: { content: '🛠️ Layanan Pengiriman', variant: 'primary', size: 'medium' },
        },
        {
          id: 'services-title',
          type: 'heading',
          props: {
            content: 'Solusi Logistik & Supply Chain',
            level: 'h2',
            fontSize: '40px',
            fontWeight: '800',
            color: '#0f172a',
            align: 'center',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            margin: '0 0 12px 0',
          },
        },
        {
          id: 'services-subtitle',
          type: 'text',
          props: {
            content: 'Kategori pengiriman lengkap untuk menyesuaikan dengan kebutuhan operasional perusahaan Anda.',
            fontSize: '17px',
            color: '#64748b',
            align: 'center',
            lineHeight: '1.7',
            margin: '0 0 48px 0',
          },
        },
        {
          id: 'service-card-warehouse',
          type: 'card',
          props: { variant: 'service', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'glow', padding: '24px' },
          childrenComponents: [
            { id: 'srv-warehouse-icon', type: 'icon', props: { icon: 'FaWarehouse', size: '32px', color: '#0b192f', align: 'left' } },
            { id: 'srv-warehouse-title', type: 'heading', props: { content: 'Warehouse & Fulfillment', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
            { id: 'srv-warehouse-desc', type: 'text', props: { content: 'Fasilitas pergudangan dengan sistem WMS terintegrasi untuk klasifikasi stok dan distribusi efisien.', fontSize: '14px', color: '#64748b', margin: '0' } },
          ],
        },
        {
          id: 'service-card-overland',
          type: 'card',
          props: { variant: 'service', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'glow', padding: '24px' },
          childrenComponents: [
            { id: 'srv-overland-icon', type: 'icon', props: { icon: 'FaTruck', size: '32px', color: '#0b192f', align: 'left' } },
            { id: 'srv-overland-title', type: 'heading', props: { content: 'B2B Overland Distribution', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
            { id: 'srv-overland-desc', type: 'text', props: { content: 'Pengiriman darat skala besar FTL (Full Truckload) dan LTL (Less Than Truckload) antar wilayah.', fontSize: '14px', color: '#64748b', margin: '0' } },
          ],
        },
        {
          id: 'service-card-multimodal',
          type: 'card',
          props: { variant: 'service', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'glow', padding: '24px' },
          childrenComponents: [
            { id: 'srv-multimodal-icon', type: 'icon', props: { icon: 'FaPlane', size: '32px', color: '#0b192f', align: 'left' } },
            { id: 'srv-multimodal-title', type: 'heading', props: { content: 'Multimodal Express Cargo', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
            { id: 'srv-multimodal-desc', type: 'text', props: { content: 'Kombinasi transportasi laut dan udara untuk rute antar pulau berkecepatan tinggi dan biaya optimal.', fontSize: '14px', color: '#64748b', margin: '0' } },
          ],
        },
        {
          id: 'service-card-coldchain',
          type: 'card',
          props: { variant: 'service', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'glow', padding: '24px' },
          childrenComponents: [
            { id: 'srv-coldchain-icon', type: 'icon', props: { icon: 'FaSnowflake', size: '32px', color: '#f97316', align: 'left' } },
            { id: 'srv-coldchain-title', type: 'heading', props: { content: 'Cold Chain Logistics', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
            { id: 'srv-coldchain-desc', type: 'text', props: { content: 'Rantai dingin dengan kontrol suhu presisi untuk produk farmasi, makanan beku, dan bahan kimia sensitif.', fontSize: '14px', color: '#64748b', margin: '0' } },
          ],
        },
        {
          id: 'service-card-express',
          type: 'card',
          props: { variant: 'service', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'glow', padding: '24px' },
          childrenComponents: [
            { id: 'srv-express-icon', type: 'icon', props: { icon: 'FaBolt', size: '32px', color: '#0b192f', align: 'left' } },
            { id: 'srv-express-title', type: 'heading', props: { content: 'Express Same-Day Delivery', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
            { id: 'srv-express-desc', type: 'text', props: { content: 'Pengiriman ekspres dalam kota dengan jaminan sampai di hari yang sama untuk kebutuhan mendesak.', fontSize: '14px', color: '#64748b', margin: '0' } },
          ],
        },
        {
          id: 'service-card-customs',
          type: 'card',
          props: { variant: 'service', background: '#ffffff', borderRadius: '16px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'glow', padding: '24px' },
          childrenComponents: [
            { id: 'srv-customs-icon', type: 'icon', props: { icon: 'FaFileContract', size: '32px', color: '#0b192f', align: 'left' } },
            { id: 'srv-customs-title', type: 'heading', props: { content: 'Customs & Clearance', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: '12px 0 6px 0' } },
            { id: 'srv-customs-desc', type: 'text', props: { content: 'Pengurusan dokumen kepabeanan dan bea cukai untuk impor-ekspor dengan proses cepat dan transparan.', fontSize: '14px', color: '#64748b', margin: '0' } },
          ],
        },
      ],
    },

    // ─── FLEET ────────────────────────────────────────────────────────────────
    {
      id: 'fleet',
      type: 'fleet',
      layout: 'fleet-02',
      components: [
        {
          id: 'fleet-badge',
          type: 'badge',
          props: { content: '🚛 Armada Modern', variant: 'primary', size: 'medium' },
        },
        {
          id: 'fleet-title',
          type: 'heading',
          props: {
            content: 'Armada & Fasilitas Transit Modern',
            level: 'h2',
            fontSize: '40px',
            fontWeight: '800',
            color: '#0f172a',
            align: 'center',
            margin: '0 0 12px 0',
          },
        },
        {
          id: 'fleet-desc',
          type: 'text',
          props: {
            content: 'Armada transportasi multi-modal yang dipasangi GPS real-time tracker dan sistem pengontrol suhu untuk cold chain logistics.',
            fontSize: '17px',
            color: '#64748b',
            align: 'center',
            margin: '0 0 48px 0',
          },
        },
        {
          id: 'fleet-img',
          type: 'image',
          props: {
            src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&auto=format&fit=crop&q=80',
            alt: 'Logistics Fleet Container Truck',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '24px',
            shadow: 'xl',
          },
        },
      ],
    },

    // ─── CERTIFICATIONS ───────────────────────────────────────────────────────
    {
      id: 'certifications',
      type: 'certifications',
      layout: 'certifications-01',
      components: [
        {
          id: 'cert-badge',
          type: 'badge',
          props: { content: '🏅 Sertifikasi Resmi', variant: 'primary', size: 'medium' },
        },
        {
          id: 'cert-title',
          type: 'heading',
          props: {
            content: 'Standar Mutu & Keamanan Terjamin',
            level: 'h2',
            fontSize: '40px',
            fontWeight: '800',
            color: '#0f172a',
            align: 'center',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            margin: '0 0 12px 0',
          },
        },
        {
          id: 'cert-subtitle',
          type: 'text',
          props: {
            content: 'Seluruh operasional kami diawasi dan disertifikasi oleh lembaga berwenang nasional dan internasional',
            fontSize: '16px',
            color: '#64748b',
            align: 'center',
            lineHeight: '1.7',
            margin: '0 0 48px 0',
          },
        },
        {
          id: 'cert-card-iso',
          type: 'card',
          props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' },
          childrenComponents: [
            { id: 'cert-iso-icon', type: 'icon', props: { icon: 'FaShieldAlt', size: '44px', color: '#0b192f', align: 'center', margin: '0 0 16px 0' } },
            { id: 'cert-iso-title', type: 'heading', props: { content: 'ISO 9001:2015', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 8px 0' } },
            { id: 'cert-iso-desc', type: 'text', props: { content: 'Sistem Manajemen Mutu berstandar internasional untuk seluruh proses operasional logistik.', fontSize: '14px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0' } },
          ],
        },
        {
          id: 'cert-card-kemenhub',
          type: 'card',
          props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' },
          childrenComponents: [
            { id: 'cert-kemenhub-icon', type: 'icon', props: { icon: 'FaMedal', size: '44px', color: '#f97316', align: 'center', margin: '0 0 16px 0' } },
            { id: 'cert-kemenhub-title', type: 'heading', props: { content: 'Kemenhub RI', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 8px 0' } },
            { id: 'cert-kemenhub-desc', type: 'text', props: { content: 'Izin operasional resmi dari Kementerian Perhubungan RI untuk angkutan darat, laut, dan udara.', fontSize: '14px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0' } },
          ],
        },
        {
          id: 'cert-card-iso22000',
          type: 'card',
          props: { variant: 'feature', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '32px 24px' },
          childrenComponents: [
            { id: 'cert-iso22000-icon', type: 'icon', props: { icon: 'FaAward', size: '44px', color: '#0b192f', align: 'center', margin: '0 0 16px 0' } },
            { id: 'cert-iso22000-title', type: 'heading', props: { content: 'ISO 22000', level: 'h3', fontSize: '20px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 8px 0' } },
            { id: 'cert-iso22000-desc', type: 'text', props: { content: 'Sertifikasi keamanan pangan untuk cold chain logistics produk makanan dan farmasi.', fontSize: '14px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0' } },
          ],
        },
      ],
    },

    // ─── COVERAGE + MAP ───────────────────────────────────────────────────────
    {
      id: 'coverage',
      type: 'coverage',
      layout: 'coverage-02',
      components: [
        {
          id: 'coverage-badge',
          type: 'badge',
          props: { content: '🗺️ Jangkauan Nasional', variant: 'primary', size: 'medium' },
        },
        {
          id: 'coverage-title',
          type: 'heading',
          props: {
            content: 'Area Jangkauan Distribusi Nasional',
            level: 'h2',
            fontSize: '36px',
            fontWeight: '800',
            color: '#0f172a',
            align: 'left',
            margin: '0 0 12px 0',
          },
        },
        {
          id: 'coverage-desc',
          type: 'text',
          props: {
            content: 'Jaringan distribusi nasional kami menjangkau seluruh pulau utama dengan pusat transit di kota-kota strategis Indonesia.',
            fontSize: '16px',
            color: '#64748b',
            align: 'left',
            margin: '0 0 32px 0',
          },
        },
      ],
    },
    {
      id: 'map',
      type: 'map',
      layout: 'map-01',
      components: [
        {
          id: 'map-title',
          type: 'heading',
          props: {
            content: 'Pusat Transit Strategis',
            level: 'h3',
            fontSize: '24px',
            fontWeight: '800',
            color: '#0f172a',
            align: 'center',
            margin: '0 0 12px 0',
          },
        },
        {
          id: 'map-desc',
          type: 'text',
          props: {
            content: '12 pusat transit di kota-kota utama: Jakarta, Surabaya, Medan, Makassar, Balikpapan, Semarang, Palembang, Denpasar, Batam, Pontianak, Manado, dan Jayapura.',
            fontSize: '15px',
            color: '#64748b',
            align: 'center',
            lineHeight: '1.7',
            margin: '0 0 32px 0',
          },
        },
      ],
    },

    // ─── TIMELINE ─────────────────────────────────────────────────────────────
    {
      id: 'timeline',
      type: 'timeline',
      layout: 'timeline-02',
      components: [
        {
          id: 'timeline-badge',
          type: 'badge',
          props: { content: '📦 Proses Pengiriman', variant: 'primary', size: 'medium' },
        },
        {
          id: 'timeline-title',
          type: 'heading',
          props: {
            content: 'Alur Proses Pengiriman Cargo',
            level: 'h2',
            fontSize: '36px',
            fontWeight: '800',
            color: '#0f172a',
            align: 'center',
            margin: '0 0 12px 0',
          },
        },
        {
          id: 'timeline-desc',
          type: 'text',
          props: {
            content: 'Standardisasi proses empat tahap dari penjemputan barang hingga serah terima di tujuan akhir.',
            fontSize: '16px',
            color: '#64748b',
            align: 'center',
            margin: '0 0 48px 0',
          },
        },
      ],
    },

    // ─── TESTIMONIALS ─────────────────────────────────────────────────────────
    {
      id: 'testimonials',
      type: 'testimonials',
      layout: 'testimonials-01',
      components: [
        {
          id: 'testi-badge',
          type: 'badge',
          props: { content: '💬 Testimoni Korporasi', variant: 'primary', size: 'medium' },
        },
        {
          id: 'testi-title',
          type: 'heading',
          props: {
            content: 'Dipercaya Ribuan Korporasi',
            level: 'h2',
            fontSize: '36px',
            fontWeight: '800',
            color: '#0f172a',
            align: 'center',
            margin: '0 0 12px 0',
          },
        },
        {
          id: 'testi-subtitle',
          type: 'text',
          props: {
            content: 'Suara nyata dari perusahaan yang telah merasakan layanan rantai pasok TransGo.',
            fontSize: '16px',
            color: '#64748b',
            align: 'center',
            margin: '0 0 48px 0',
          },
        },
        {
          id: 'testi-card-budi',
          type: 'card',
          props: { variant: 'testimonial', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' },
          childrenComponents: [
            { id: 'testi-budi-text', type: 'text', props: { content: '"Pengiriman FTL antarpulau selalu tepat waktu. Dukungan CS 24/7 mempermudah penanganan kendala tak terduga."', fontSize: '14px', color: '#475569', lineHeight: '1.8', margin: '12px 0 16px 0' } },
            { id: 'testi-budi-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '0 0 2px 0' } },
            { id: 'testi-budi-role', type: 'text', props: { content: 'Kepala Rantai Pasok, PT Industri Semesta', fontSize: '12px', color: '#64748b', margin: '0' } },
          ],
        },
        {
          id: 'testi-card-sari',
          type: 'card',
          props: { variant: 'testimonial', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' },
          childrenComponents: [
            { id: 'testi-sari-text', type: 'text', props: { content: '"Sistem pelacakan real-time TransGo memberi kami kepastian posisi kargo bahan baku pabrik secara presisi."', fontSize: '14px', color: '#475569', lineHeight: '1.8', margin: '12px 0 16px 0' } },
            { id: 'testi-sari-name', type: 'heading', props: { content: 'Sari Dewi', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '0 0 2px 0' } },
            { id: 'testi-sari-role', type: 'text', props: { content: 'Operations Director, PT Manufaktur Nasional', fontSize: '12px', color: '#64748b', margin: '0' } },
          ],
        },
        {
          id: 'testi-card-hendra',
          type: 'card',
          props: { variant: 'testimonial', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' },
          childrenComponents: [
            { id: 'testi-hendra-text', type: 'text', props: { content: '"Cold chain logistics sangat stabil. Produk farmasi kami sampai dalam kondisi sempurna tanpa kendala apapun."', fontSize: '14px', color: '#475569', lineHeight: '1.8', margin: '12px 0 16px 0' } },
            { id: 'testi-hendra-name', type: 'heading', props: { content: 'Dr. Hendra Wijaya', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '0 0 2px 0' } },
            { id: 'testi-hendra-role', type: 'text', props: { content: 'Manager Logistik, FarmaCare Indonesia', fontSize: '12px', color: '#64748b', margin: '0' } },
          ],
        },
      ],
    },

    // ─── FAQ ──────────────────────────────────────────────────────────────────
    {
      id: 'faq',
      type: 'faq',
      layout: 'faq-01',
      components: [
        {
          id: 'faq-badge',
          type: 'badge',
          props: { content: '💬 Pertanyaan Umum', variant: 'primary', size: 'medium' },
        },
        {
          id: 'faq-title',
          type: 'heading',
          props: {
            content: 'Seputar Layanan Logistik TransGo',
            level: 'h2',
            fontSize: '40px',
            fontWeight: '800',
            color: '#0f172a',
            align: 'center',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            margin: '0 0 12px 0',
          },
        },
        {
          id: 'faq-subtitle',
          type: 'text',
          props: {
            content: 'Jawaban atas pertanyaan paling sering ditanyakan klien korporasi kami',
            fontSize: '16px',
            color: '#64748b',
            align: 'center',
            lineHeight: '1.7',
            margin: '0 0 48px 0',
          },
        },
        {
          id: 'faq-item-1',
          type: 'card',
          props: { variant: 'faq', background: '#f8fafc', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' },
          childrenComponents: [
            { id: 'faq1-q', type: 'heading', props: { content: 'Bagaimana cara melacak kiriman korporasi?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } },
            { id: 'faq1-a', type: 'text', props: { content: 'Setiap kiriman dilengkapi nomor resi unik. Anda dapat melacak posisi real-time melalui portal pelanggan atau aplikasi mobile kami yang terintegrasi dengan GPS tracker di seluruh armada.', fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: '0' } },
          ],
        },
        {
          id: 'faq-item-2',
          type: 'card',
          props: { variant: 'faq', background: '#f8fafc', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' },
          childrenComponents: [
            { id: 'faq2-q', type: 'heading', props: { content: 'Apakah TransGo melayani cold chain logistics?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } },
            { id: 'faq2-a', type: 'text', props: { content: 'Ya, kami memiliki armada berpendingin dengan kontrol suhu presisi dari -20°C hingga 25°C. Cocok untuk produk farmasi, makanan beku, dan bahan kimia yang memerlukan rantai dingin.', fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: '0' } },
          ],
        },
        {
          id: 'faq-item-3',
          type: 'card',
          props: { variant: 'faq', background: '#f8fafc', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' },
          childrenComponents: [
            { id: 'faq3-q', type: 'heading', props: { content: 'Berapa lama waktu pengiriman antar pulau?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } },
            { id: 'faq3-a', type: 'text', props: { content: 'Rata-rata 2-5 hari kerja untuk rute antar pulau utama, tergantung jarak dan moda transportasi. Rute ekspres udara dapat tiba dalam 1-2 hari kerja.', fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: '0' } },
          ],
        },
        {
          id: 'faq-item-4',
          type: 'card',
          props: { variant: 'faq', background: '#f8fafc', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' },
          childrenComponents: [
            { id: 'faq4-q', type: 'heading', props: { content: 'Apakah ada asuransi untuk kiriman korporasi?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } },
            { id: 'faq4-a', type: 'text', props: { content: 'Ya, seluruh kiriman korporasi dilindungi asuransi kargo dengan nilai pertanggungan hingga Rp 10 Miliar per pengiriman. Perlindungan tambahan dapat disesuaikan dengan kebutuhan.', fontSize: '14px', color: '#64748b', lineHeight: '1.7', margin: '0' } },
          ],
        },
      ],
    },

    // ─── CONTACT ──────────────────────────────────────────────────────────────
    {
      id: 'contact',
      type: 'contact',
      layout: 'contact-03',
      components: [
        {
          id: 'contact-badge',
          type: 'badge',
          props: { content: '📬 Hubungi Konsultan Kami', variant: 'primary', size: 'medium' },
        },
        {
          id: 'contact-title',
          type: 'heading',
          props: {
            content: 'Konsultasikan Kebutuhan Distribusi Bisnis Anda',
            level: 'h2',
            fontSize: '44px',
            fontWeight: '900',
            color: '#ffffff',
            align: 'center',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            margin: '0 0 12px 0',
          },
        },
        {
          id: 'contact-subtitle',
          type: 'text',
          props: {
            content: 'Tim spesialis supply chain kami siap membantu merumuskan jalur distribusi paling efisien dan hemat biaya untuk perusahaan Anda.',
            fontSize: '17px',
            color: '#94a3b8',
            align: 'center',
            lineHeight: '1.8',
            margin: '0 0 32px 0',
          },
        },
        {
          id: 'contact-btn',
          type: 'button',
          props: {
            label: 'Hubungi Tim Kami',
            href: '#',
            variant: 'primary',
            size: 'large',
            radius: 'full',
            background: '#f97316',
            color: '#ffffff',
            shadow: 'lg',
            fontSize: '16px',
            fontWeight: '700',
          },
        },
      ],
    },

    // ─── FOOTER ───────────────────────────────────────────────────────────────
    {
      id: 'footer',
      type: 'footer',
      layout: 'footer-04',
      components: [
        {
          id: 'footer-brand-name',
          type: 'heading',
          props: {
            content: 'TRANSGO LOGISTICS',
            level: 'h3',
            fontSize: '18px',
            fontWeight: '900',
            color: '#ffffff',
            align: 'left',
            letterSpacing: '0.045em',
            margin: '0 0 16px 0',
          },
        },
        {
          id: 'footer-copyright',
          type: 'text',
          props: {
            content: '© 2026 TransGo Logistics Indonesia. Rantai Pasok Nasional Terpercaya B2B.',
            fontSize: '14px',
            color: '#94a3b8',
            align: 'left',
            margin: '0 0 16px 0',
          },
        },
        {
          id: 'footer-social',
          type: 'social',
          props: { platforms: ['linkedin', 'twitter', 'facebook'], size: 'medium' },
        },
      ],
    },

  ],
};