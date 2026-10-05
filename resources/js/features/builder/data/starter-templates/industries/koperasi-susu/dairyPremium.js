/**
 * Dairy Premium Brand — Single-Estate Grass-Fed Organic Farmstead
 * Starter template for luxury organic dairy brands, A2 milk, and artisan farmsteads.
 * Full Right-Inspector support for all cards, images, badges, headings, and buttons.
 */
export default {
  id: 'dairy-premium',
  name: 'Dairy Premium Brand',
  description: 'Template brand susu organik mewah & artisan farmstead dengan status sertifikasi grass-fed, 4 metrik kemurnian A2, koleksi keju & ghee emas artisan, standar pertanian regeneratif, dan reservasi farm tour private.',
  thumbnail: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&auto=format&fit=crop&q=80',
  tags: ['Premium', 'Organic', 'Grass-Fed', 'A2 Milk', 'Artisan Cheese', 'Ghee', 'Boutique'],
  theme: {
    primaryColor: '#d97706',
    secondaryColor: '#fef3c7',
    accentColor: '#f59e0b',
    dark: true,
    surface: '#04140e',
    text: '#fefce8',
    muted: '#cbd5e1',
    border: 'rgba(245,158,11,0.4)',
    radius: 'lg',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['fade-up', 'scale-in', 'hover-lift', 'counter-up'],
  sections: [
    {
      id: 'art-nav-sec',
      type: 'navbar',
      layout: 'dairy-nav-artisan',
      components: [
        { id: 'art-brand', type: 'heading', props: { content: 'VALLEY PASTURES DAIRY', level: 'h3', fontSize: '20px', fontWeight: '900', color: '#fef3c7', letterSpacing: '0.08em' } },
        { id: 'art-status-badge', type: 'badge', props: { text: '🌾 100% GRASS-FED ORGANIC CERTIFIED • A2 PROTEIN', variant: 'outline', background: 'rgba(245,158,11,0.15)', color: '#fde68a', borderColor: 'rgba(245,158,11,0.4)' } },
        { id: 'art-tour-btn', type: 'button', props: { label: 'Book Farm Visit 🌿', href: '#pasture', variant: 'outline', size: 'small', radius: 'full', background: 'rgba(20,40,25,0.8)', color: '#fde68a', borderColor: 'rgba(245,158,11,0.5)', fontSize: '12px' } },
        { id: 'art-club-btn', type: 'button', props: { label: 'Gabung Member Langganan', href: '#collection', variant: 'primary', size: 'small', radius: 'full', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff', fontWeight: '700', fontSize: '13px' } },
      ]
    },
    {
      id: 'art-hero-sec',
      type: 'hero',
      layout: 'dairy-hero-artisan',
      components: [
        { id: 'art-badge', type: 'badge', props: { text: '🌾 SINGLE-ESTATE HIGHLAND ORGANIC PASTURE', variant: 'outline', background: 'rgba(245,158,11,0.15)', color: '#fde68a', borderColor: 'rgba(245,158,11,0.45)' } },
        { id: 'art-title', type: 'heading', props: { content: 'Kemurnian Susu Organik Grass-Fed Dari Padang Rumput Kaki Gunung', level: 'h1', fontSize: '46px', fontWeight: '900', color: '#fefce8', letterSpacing: '-0.025em' } },
        { id: 'art-desc', type: 'text', props: { content: 'Susu organik murni dari sapi Frisian Holstein & Jersey yang merumput bebas di 150 hektar padang rumput alami. Mengandung protein A2 alami yang lebih mudah dicerna dan kaya Omega-3.', fontSize: '17px', color: '#fef3c7' } },
        { id: 'art-btn1', type: 'button', props: { label: 'Langganan Susu Botol Kaca ✨', href: '#collection', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #d97706, #b45309)', color: '#ffffff', fontWeight: '700' } },
        { id: 'art-btn2', type: 'button', props: { label: 'Eksplor Padang Rumput', href: '#pasture', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(10,38,26,0.7)', color: '#fde68a', borderColor: 'rgba(245,158,11,0.4)' } },

        // 4 Purity Metrics Cards
        {
          id: 'art-stat1-card',
          type: 'card',
          props: { background: '#092d1f', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'art-stat1-num', type: 'heading', props: { content: '100% Grass-Fed', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#fde68a' } },
            { id: 'art-stat1-lbl', type: 'text', props: { content: 'Pakan Rumput Organik', fontSize: '12px', color: '#cbd5e1' } },
          ]
        },
        {
          id: 'art-stat2-card',
          type: 'card',
          props: { background: '#092d1f', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'art-stat2-num', type: 'heading', props: { content: 'A2 Protein', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#a7f3d0' } },
            { id: 'art-stat2-lbl', type: 'text', props: { content: 'Ramah Pencernaan Perut', fontSize: '12px', color: '#cbd5e1' } },
          ]
        },
        {
          id: 'art-stat3-card',
          type: 'card',
          props: { background: '#092d1f', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'art-stat3-num', type: 'heading', props: { content: '0% Hormon', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#a7f3d0' } },
            { id: 'art-stat3-lbl', type: 'text', props: { content: 'Bebas rBST & Non-GMO', fontSize: '12px', color: '#cbd5e1' } },
          ]
        },
        {
          id: 'art-stat4-card',
          type: 'card',
          props: { background: '#092d1f', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '14px', padding: '16px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'art-stat4-num', type: 'heading', props: { content: '150 Hektar', level: 'h3', fontSize: '24px', fontWeight: '900', color: '#fde68a' } },
            { id: 'art-stat4-lbl', type: 'text', props: { content: 'Padang Rumput Dataran Tinggi', fontSize: '12px', color: '#cbd5e1' } },
          ]
        },

        // Highland Pasture Showcase Card
        {
          id: 'artisan-hero-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #0e3d2b 0%, #041a12 100%)', borderColor: 'rgba(245,158,11,0.4)', borderWidth: '2px', borderRadius: '24px', padding: '16px', shadow: '2xl' },
          childrenComponents: [
            {
              id: 'artisan-hero-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1000&auto=format&fit=crop&q=80',
                alt: 'Highland Organic Grass Fed Dairy Cow Pasture Valley',
                borderRadius: '16px',
                width: '100%',
                height: '380px',
                objectFit: 'cover',
              }
            },
            { id: 'art-card-badge', type: 'badge', props: { text: '🌿 KESEJAHTERAAN HEWAN (ANIMAL WELFARE CERTIFIED)', variant: 'solid', background: 'rgba(245,158,11,0.25)', color: '#fef3c7' } },
            { id: 'art-card-title', type: 'heading', props: { content: 'Sapi Bahagia Menghasilkan Susu Paling Gurih & Sehat', level: 'h4', fontSize: '17px', fontWeight: '800', color: '#fefce8' } },
            { id: 'art-card-desc', type: 'text', props: { content: 'Sapi kami bebas berjalan di alam terbuka dengan udara sejuk pegunungan 1.400 mdpl dan meminum air mata air alami pegunungan.', fontSize: '13px', color: '#cbd5e1' } },
          ]
        }
      ]
    },
    {
      id: 'art-collection-sec',
      type: 'products',
      layout: 'dairy-collection-artisan',
      components: [
        { id: 'art-col-badge', type: 'badge', props: { text: '✨ FARMSTEAD ARTISAN SELECTION', variant: 'outline', background: 'rgba(217,119,6,0.1)', color: '#d97706', borderColor: 'rgba(217,119,6,0.3)' } },
        { id: 'art-col-title', type: 'heading', props: { content: 'Koleksi Olahan Susu Organik Pilihan Untuk Gaya Hidup Sehat Alami', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#0f172a', letterSpacing: '-0.02em' } },
        { id: 'art-col-desc', type: 'text', props: { content: 'Diproduksi dalam jumlah terbatas setiap minggu dengan metode artisan tradisional Eropa dan dikemas dalam botol kaca ramah lingkungan.', fontSize: '16px', color: '#64748b' } },

        // Card 1: Milk
        {
          id: 'card-art-col1',
          type: 'card',
          props: { background: '#ffffff', borderColor: '#fef3c7', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'art-col1-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800&auto=format&fit=crop&q=80',
                alt: 'Susu Organik A2 Botol Kaca Mewah Gold Cap',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'art-col1-badge', type: 'badge', props: { text: '🥛 A2 ORGANIC • GOLD CAP', variant: 'solid', background: '#fef3c7', color: '#b45309' } },
            { id: 'art-col1-title', type: 'heading', props: { content: 'A2 Grass-Fed Pure Gold Milk 1L', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
            { id: 'art-col1-desc', type: 'text', props: { content: 'Susu organik segar dengan lapisan creamline alami di atasnya. Mengandung beta-kasein A2 murni yang sangat lembut bagi lambung sensitif.', fontSize: '14px', color: '#64748b' } },
            { id: 'art-col1-btn', type: 'button', props: { label: 'Langganan Mingguan 🥛', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#d97706', color: '#ffffff', fontWeight: '600' } },
          ]
        },

        // Card 2: Cheese
        {
          id: 'card-art-col2',
          type: 'card',
          props: { background: '#ffffff', borderColor: '#fef3c7', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'art-col2-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&auto=format&fit=crop&q=80',
                alt: 'Keju Artisan Aged Gouda Cheese Wheel Natural Wax',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'art-col2-badge', type: 'badge', props: { text: '🧀 AGED 12 BULAN • NATURAL WAX', variant: 'solid', background: '#fef3c7', color: '#b45309' } },
            { id: 'art-col2-title', type: 'heading', props: { content: 'Artisan Farmhouse Gouda Wheel', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
            { id: 'art-col2-desc', type: 'text', props: { content: 'Keju keras matang dengan kristal kalsium renyah dan aroma nutty yang kaya. Dibuat tanpa pewarna buatan dari 100% susu mentah perahan sendiri.', fontSize: '14px', color: '#64748b' } },
            { id: 'art-col2-btn', type: 'button', props: { label: 'Beli Cheese Wheel 🧀', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#d97706', color: '#ffffff', fontWeight: '600' } },
          ]
        },

        // Card 3: Ghee
        {
          id: 'card-art-col3',
          type: 'card',
          props: { background: '#ffffff', borderColor: '#fef3c7', borderWidth: '1px', borderRadius: '18px', padding: '24px', shadow: 'md', hoverEffect: 'lift' },
          childrenComponents: [
            {
              id: 'art-col3-img',
              type: 'image',
              props: {
                src: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=800&auto=format&fit=crop&q=80',
                alt: 'Organic Grass Fed Golden Ghee Clarified Butter',
                borderRadius: '12px',
                width: '100%',
                height: '220px',
                objectFit: 'cover',
              }
            },
            { id: 'art-col3-badge', type: 'badge', props: { text: '🧈 KETO & KETO-FRIENDLY • 0% LAKTOSA', variant: 'solid', background: '#fef3c7', color: '#b45309' } },
            { id: 'art-col3-title', type: 'heading', props: { content: 'Traditional Golden Grass-Fed Ghee', level: 'h3', fontSize: '19px', fontWeight: '800', color: '#0f172a' } },
            { id: 'art-col3-desc', type: 'text', props: { content: 'Minyak samin organik murni yang dimasak perlahan dari krim susu segar. Memiliki smoke point tinggi 250°C, kaya vitamin A, D, E, dan K2.', fontSize: '14px', color: '#64748b' } },
            { id: 'art-col3-btn', type: 'button', props: { label: 'Order Golden Ghee 🧈', href: '#contact', variant: 'primary', size: 'small', radius: 'full', background: '#d97706', color: '#ffffff', fontWeight: '600' } },
          ]
        }
      ]
    },
    {
      id: 'art-pasture-sec',
      type: 'about',
      layout: 'dairy-pasture-artisan',
      components: [
        { id: 'pas-badge', type: 'badge', props: { text: '🌿 FILOSOFI PETERNAKAN BERKELANJUTAN', variant: 'outline', background: 'rgba(245,158,11,0.15)', color: '#fde68a', borderColor: 'rgba(245,158,11,0.4)' } },
        { id: 'pas-title', type: 'heading', props: { content: 'Harmoni Alam, Kesejahteraan Ternak & Pertanian Regeneratif', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#fefce8', letterSpacing: '-0.02em' } },
        { id: 'pas-desc', type: 'text', props: { content: 'Kami percaya kualitas susu terbaik lahir dari tanah yang subur tanpa pupuk kimia, pakan rumput liar alami, dan cinta pada setiap hewan ternak.', fontSize: '16px', color: '#cbd5e1' } },

        // 4 Farmstead Cards
        {
          id: 'card-pas1',
          type: 'card',
          props: { background: '#092d1f', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'pas1-badge', type: 'badge', props: { text: '🌱 ZERO PESTICIDE', variant: 'solid', background: 'rgba(245,158,11,0.25)', color: '#fde68a' } },
            { id: 'pas1-title', type: 'heading', props: { content: 'Padang Rumput Bebas Kimia Sintetis', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fefce8' } },
            { id: 'pas1-desc', type: 'text', props: { content: 'Tanah disuburkan dengan kompos alami peternakan sendiri tanpa herbisida, menghasilkan rumput clover dan alfalfa berkualitas tinggi.', fontSize: '14px', color: '#a7f3d0' } },
          ]
        },
        {
          id: 'card-pas2',
          type: 'card',
          props: { background: '#092d1f', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'pas2-badge', type: 'badge', props: { text: '🎵 VOLUNTARY MILKING', variant: 'solid', background: 'rgba(245,158,11,0.25)', color: '#fde68a' } },
            { id: 'pas2-title', type: 'heading', props: { content: 'Pemerahan Sukarela Bebas Stres', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fefce8' } },
            { id: 'pas2-desc', type: 'text', props: { content: 'Sapi masuk ke stasiun perahan dengan kemauannya sendiri diiringi musik klasik yang terbukti menjaga kadar hormon kortisol tetap nol.', fontSize: '14px', color: '#a7f3d0' } },
          ]
        },
        {
          id: 'card-pas3',
          type: 'card',
          props: { background: '#092d1f', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'pas3-badge', type: 'badge', props: { text: '♻️ ZERO SINGLE-USE PLASTIC', variant: 'solid', background: 'rgba(245,158,11,0.25)', color: '#fde68a' } },
            { id: 'pas3-title', type: 'heading', props: { content: 'Botol Kaca Sirkular Daur Ulang', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fefce8' } },
            { id: 'pas3-desc', type: 'text', props: { content: 'Kemasan kaca tebal kedap udara yang dapat ditukar saat pengiriman berikutnya, disterilisasi dengan uap panas bersuhu 120°C.', fontSize: '14px', color: '#a7f3d0' } },
          ]
        },
        {
          id: 'card-pas4',
          type: 'card',
          props: { background: '#092d1f', borderColor: 'rgba(245,158,11,0.3)', borderWidth: '1px', borderRadius: '16px', padding: '24px', shadow: 'lg', hoverEffect: 'lift' },
          childrenComponents: [
            { id: 'pas4-badge', type: 'badge', props: { text: '🌅 PENGANTARAN SUBUH', variant: 'solid', background: 'rgba(245,158,11,0.25)', color: '#fde68a' } },
            { id: 'pas4-title', type: 'heading', props: { content: 'Tiba di Depan Pintu Pukul 06.00', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#fefce8' } },
            { id: 'pas4-desc', type: 'text', props: { content: 'Kurir khusus meletakkan botol dingin di cooler box depan pintu Anda sebelum keluarga bangun untuk sarapan pagi sehat.', fontSize: '14px', color: '#a7f3d0' } },
          ]
        },

        // Tour Banner
        {
          id: 'tour-banner-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #1c4a35 0%, #061c13 100%)', borderColor: 'rgba(245,158,11,0.5)', borderWidth: '2px', borderRadius: '20px', padding: '28px', shadow: '2xl' },
          childrenComponents: [
            { id: 'tour-banner-badge', type: 'badge', props: { text: '🐄 PRIVATE FARM TOUR & CHEESE TASTING', variant: 'solid', background: 'rgba(245,158,11,0.3)', color: '#fef3c7' } },
            { id: 'tour-banner-title', type: 'heading', props: { content: 'Ajak Keluarga Menikmati Suasana Peternakan Pegunungan & Tasting Keju', level: 'h3', fontSize: '22px', fontWeight: '900', color: '#ffffff' } },
            { id: 'tour-banner-desc', type: 'text', props: { content: 'Nikmati tur edukasi memberi makan anak sapi, melihat proses pembuatan keju gouda, dan piknik santai di hamparan rumput hijau kaki bukit.', fontSize: '14px', color: '#cbd5e1' } },
            { id: 'tour-banner-btn', type: 'button', props: { label: 'Reservasi Kunjungan Private 🌿', href: '#contact', variant: 'primary', size: 'medium', radius: 'full', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#ffffff', fontWeight: '700' } },
          ]
        }
      ]
    },
    {
      id: 'art-cta-sec',
      type: 'contact',
      layout: 'dairy-cta-artisan',
      components: [
        {
          id: 'cta-artisan-card',
          type: 'card',
          props: { background: 'linear-gradient(135deg, #1e4533 0%, #051a11 100%)', borderColor: 'rgba(245,158,11,0.5)', borderWidth: '2px', borderRadius: '24px', padding: '48px 32px', shadow: '2xl' },
          childrenComponents: [
            { id: 'cta-art-badge', type: 'badge', props: { text: '🌾 VALLEY PASTURES FARMSTEAD CLUB', variant: 'solid', background: 'rgba(245,158,11,0.3)', color: '#fde68a' } },
            { id: 'cta-art-title', type: 'heading', props: { content: 'Berikan Nutrisi Alami Terbaik Untuk Buah Hati & Keluarga Tercinta', level: 'h2', fontSize: '36px', fontWeight: '900', color: '#ffffff' } },
            { id: 'cta-art-desc', type: 'text', props: { content: 'Daftar paket pengantaran susu botol mingguan sekarang dan dapatkan bonus complimentary artisan salted butter dan cooler bag eksklusif di pengantaran pertama.', fontSize: '16px', color: '#fef3c7' } },
            { id: 'cta-art-btn1', type: 'button', props: { label: 'Mulai Langganan Mingguan 🥛', href: '#contact', variant: 'primary', size: 'large', radius: 'full', background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#ffffff', fontWeight: '800' } },
            { id: 'cta-art-btn2', type: 'button', props: { label: 'Tanya Tim Farmstead Concierge', href: '#contact', variant: 'outline', size: 'large', radius: 'full', background: 'rgba(5,26,17,0.8)', color: '#fde68a', borderColor: 'rgba(245,158,11,0.4)' } },
          ]
        }
      ]
    },
    {
      id: 'art-footer-sec',
      type: 'footer',
      layout: 'dairy-footer-artisan',
      components: [
        { id: 'art-ft-title', type: 'heading', props: { content: 'VALLEY PASTURES ORGANIC FARMSTEAD', level: 'h3', fontSize: '18px', fontWeight: '900', color: '#ffffff', letterSpacing: '0.08em' } },
        { id: 'art-ft-desc', type: 'text', props: { content: 'Peternakan Susu Organik Single-Estate & Pabrik Keju Artisan. Sertifikasi Organik Indonesia (INOFICE) & Standar Kesejahteraan Ternak Internasional.', fontSize: '13px', color: '#cbd5e1' } },
        { id: 'art-ft-copy', type: 'text', props: { content: '© 2026 Valley Pastures Dairy Estate. Pure Nature, Pure Nutrition.', fontSize: '12px', color: '#a7f3d0' } },
      ]
    }
  ],
};
