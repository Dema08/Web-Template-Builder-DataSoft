/**
 * Online Learning Platform — Premium soft split, LMS-forward
 * Starter template for modern e-learning platform with course catalog.
 */
export default {
  id: 'education-online',
  name: 'Online Learning Platform',
  description: 'Template platform e-learning modern premium dengan soft-split hero, course catalog, tutor profiles, dan call-to-action pendaftaran yang efektif — untuk startup edtech.',
  thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
  tags: ['Online', 'E-Learning', 'Platform', 'Digital', 'Premium'],
  theme: {
    primaryColor: '#0ea5e9',
    secondaryColor: '#f0f9ff',
    accentColor: '#0284c7',
    dark: false,
    surface: '#ffffff',
    text: '#1e293b',
    muted: '#64748b',
    border: '#e0f2fe',
    radius: 'md',
    font: 'system-ui, -apple-system, sans-serif',
  },
  animations: ['scale-in', 'fade-in', 'counter-up', 'hover-lift'],
  sections: [
    { id: 'nav', type: 'navbar', layout: 'navbar-05', components: [
      { id: 'logo', type: 'heading', props: { content: 'BELAJAR.ID', level: 'h2', fontSize: '24px', fontWeight: '900', color: '#0369a1', letterSpacing: '0.02em' } },
      { id: 'cta', type: 'button', props: { label: 'Daftar Gratis', href: '#registration', variant: 'primary', size: 'small', radius: 'full', background: '#0ea5e9', color: '#ffffff', shadow: 'sm', fontSize: '13px', fontWeight: '600' } },
    ]},
    { id: 'hero', type: 'hero', layout: 'hero-05', components: [
      { id: 'badge', type: 'badge', props: { content: '📱 Belajar Kapan Saja, Di Mana Saja', variant: 'primary', size: 'medium' } },
      { id: 'title', type: 'heading', props: { content: 'Platform Belajar Online Terlengkap di Indonesia', level: 'h1', fontSize: '48px', fontWeight: '900', color: '#0f172a', align: 'left', lineHeight: '1.1', letterSpacing: '-0.02em', margin: '0 0 24px 0' } },
      { id: 'desc', type: 'text', props: { content: '1.000+ kursus video berkualitas tinggi dari instruktur top Indonesia dan internasional. Belajar sesuai jadwal Anda.', fontSize: '18px', color: '#64748b', align: 'left', lineHeight: '1.8', maxWidth: '540px', margin: '0 0 32px 0' } },
      { id: 'btn', type: 'button', props: { label: 'Mulai Belajar Gratis', href: '#programs', variant: 'primary', size: 'large', radius: 'full', background: '#0ea5e9', color: '#ffffff', shadow: 'lg', fontSize: '16px', fontWeight: '700' } },
      { id: 'img', type: 'image', props: { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop', alt: 'Online Learning', width: '100%', height: '400px', objectFit: 'cover', borderRadius: '24px', shadow: 'xl' } },
    ]},
    { id: 'stats', type: 'statistics', layout: 'statistics-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📊 Komunitas Pelajar', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Komunitas Pelajar Belajar.ID', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Angka yang mencerminkan pertumbuhan dan kepercayaan pelajar', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'programs', type: 'programs', layout: 'programs-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📚 Kursus Populer', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Kursus Populer & Trending', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Pilih kursus paling diminati dan mulai perjalanan belajar Anda', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'teachers', type: 'teachers', layout: 'teachers-01', components: [
      { id: 'badge', type: 'badge', props: { content: '👨‍🏫 Tutor Terbaik', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Tutor & Mentor Terbaik', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Belajar dari para ahli yang berpengalaman di industri', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'testimonials', type: 'testimonials', layout: 'testimonials-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 Testimonial Alumni', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Kisah Sukses Alumni Kami', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Testimoni nyata dari alumni yang telah merasakan manfaat platform kami', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'about', type: 'about', layout: 'about-03', components: [
      { id: 'badge', type: 'badge', props: { content: '✨ Tentang Platform', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Mengapa Memilih Belajar.ID', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 20px 0' } },
      { id: 'd', type: 'text', props: { content: 'Platform pembelajaran online kami dirancang untuk memberikan pengalaman belajar yang interaktif, fleksibel, dan sesuai dengan ritme kehidupan modern Anda.', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.8', maxWidth: '720px', margin: '0 auto' } },
    ]},
    { id: 'faq', type: 'faq', layout: 'faq-01', components: [
      { id: 'badge', type: 'badge', props: { content: '💬 FAQ', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Pertanyaan Seputar Platform', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Jawaban cepat untuk pertanyaan yang paling sering diajukan', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 48px 0' } },
    ]},
    { id: 'registration', type: 'registration', layout: 'registration-01', components: [
      { id: 'badge', type: 'badge', props: { content: '📝 Daftar & Akses', variant: 'primary', size: 'medium' } },
      { id: 't', type: 'heading', props: { content: 'Daftar & Akses 7 Hari Trial Gratis', level: 'h2', fontSize: '40px', fontWeight: '900', color: '#0f172a', align: 'center', lineHeight: '1.2', letterSpacing: '-0.02em', margin: '0 0 12px 0' } },
      { id: 'sub', type: 'text', props: { content: 'Nikmati akses penuh ke ratusan kursus selama 7 hari tanpa biaya', fontSize: '17px', color: '#64748b', align: 'center', lineHeight: '1.7', margin: '0 0 32px 0' } },
    ]},
    { id: 'footer', type: 'footer', layout: 'footer-02', components: [
      { id: 'c', type: 'text', props: { content: '© 2026 Belajar.ID. Learning Without Limits.', fontSize: '14px', color: '#94a3b8' } },
    ]},
  ],
};
