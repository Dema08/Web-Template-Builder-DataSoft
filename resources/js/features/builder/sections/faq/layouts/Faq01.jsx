import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Faq01({ components = [], sectionId = null }) {
  const defaultComponents = [
    {
      id: 'faq1-badge',
      type: 'badge',
      props: { content: 'FAQ', background: '#ede9fe', color: '#4f46e5', borderRadius: '999px', padding: '6px 16px', fontSize: '13px', fontWeight: '600', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'faq1-heading',
      type: 'heading',
      props: { content: 'Pertanyaan yang Sering Diajukan', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' },
    },
    {
      id: 'faq1-subtext',
      type: 'text',
      props: { content: 'Jawaban atas pertanyaan paling umum dari pelanggan dan calon mahasiswa kami', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' },
    },
    {
      id: 'faq1-item-1',
      type: 'card',
      props: { variant: 'faq', background: '#f8fafc', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' },
      childrenComponents: [
        { id: 'faq1-i1-q', type: 'heading', props: { content: 'Layanan apa yang tersedia untuk bisnis kami?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } },
        { id: 'faq1-i1-a', type: 'text', props: { content: 'Kami menyediakan solusi lengkap mulai dari konsultasi, implementasi sistem, hingga pelatihan dan dukungan purna jual yang komprehensif.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'faq1-item-2',
      type: 'card',
      props: { variant: 'faq', background: '#f8fafc', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' },
      childrenComponents: [
        { id: 'faq1-i2-q', type: 'heading', props: { content: 'Berapa lama proses implementasi sistem?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } },
        { id: 'faq1-i2-a', type: 'text', props: { content: 'Waktu implementasi bervariasi antara 2-8 minggu tergantung skala dan kompleksitas kebutuhan bisnis Anda.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'faq1-item-3',
      type: 'card',
      props: { variant: 'faq', background: '#f8fafc', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' },
      childrenComponents: [
        { id: 'faq1-i3-q', type: 'heading', props: { content: 'Apakah tersedia paket harga yang fleksibel?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } },
        { id: 'faq1-i3-a', type: 'text', props: { content: 'Ya, kami menawarkan paket harga yang dapat disesuaikan mulai dari UMKM, perusahaan menengah, hingga enterprise berskala nasional.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
    {
      id: 'faq1-item-4',
      type: 'card',
      props: { variant: 'faq', background: '#f8fafc', borderRadius: '16px', shadow: 'none', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'none', padding: '24px' },
      childrenComponents: [
        { id: 'faq1-i4-q', type: 'heading', props: { content: 'Bagaimana sistem dukungan teknis bekerja?', level: 'h4', fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '0 0 10px 0' } },
        { id: 'faq1-i4-a', type: 'text', props: { content: 'Kami menyediakan dukungan teknis 24/7 melalui live chat, email, dan telepon khusus dengan tim insinyur berpengalaman.', fontSize: '14px', color: '#64748b', margin: '0' } },
      ],
    },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const headerComponents = layoutComponents.filter(c => c.type !== 'card');
  const cardComponents = layoutComponents.filter(c => c.type === 'card');

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="flex flex-col items-center justify-center text-center">
          {renderLayoutComponents(headerComponents, sectionId)}
        </div>
        <div className="space-y-4">
          {renderLayoutComponents(cardComponents, sectionId)}
        </div>
      </div>
    </section>
  );
}