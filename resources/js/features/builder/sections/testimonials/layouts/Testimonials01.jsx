import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

const StarRating = ({ count = 5 }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials01({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'test1-heading', type: 'heading', props: { content: 'Dipercaya Ribuan Korporasi', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a', align: 'center', margin: '0 0 12px 0' } },
    { id: 'test1-subtext', type: 'text', props: { content: 'Suara nyata dari perusahaan yang telah merasakan layanan rantai pasok TransGo.', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 48px 0' } },
    { id: 'test1-card-1', type: 'card', props: { variant: 'testimonial', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'test1-c1-text', type: 'text', props: { content: '"Pengiriman FTL antarpulau selalu tepat waktu. CS 24/7 sangat responsif, kami tidak pernah kecewa."', fontSize: '14px', color: '#475569', lineHeight: '1.8', margin: '0 0 16px 0' } },
      { id: 'test1-c1-name', type: 'heading', props: { content: 'Budi Santoso', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '0 0 2px 0' } },
      { id: 'test1-c1-role', type: 'text', props: { content: 'Kepala Supply Chain, PT Industri Semesta', fontSize: '12px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'test1-card-2', type: 'card', props: { variant: 'testimonial', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'test1-c2-text', type: 'text', props: { content: '"GPS tracking presisi memberikan kami kepastian posisi bahan baku pabrik secara real-time. Luar biasa."', fontSize: '14px', color: '#475569', lineHeight: '1.8', margin: '0 0 16px 0' } },
      { id: 'test1-c2-name', type: 'heading', props: { content: 'Sari Dewi', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '0 0 2px 0' } },
      { id: 'test1-c2-role', type: 'text', props: { content: 'Operations Director, PT Manufaktur Nasional', fontSize: '12px', color: '#64748b', margin: '0' } },
    ]},
    { id: 'test1-card-3', type: 'card', props: { variant: 'testimonial', background: '#ffffff', borderRadius: '20px', shadow: 'sm', borderWidth: '1px', borderColor: '#e2e8f0', hoverEffect: 'lift', padding: '28px' }, childrenComponents: [
      { id: 'test1-c3-text', type: 'text', props: { content: '"Cold chain logistic sangat stabil. Produk farmasi kami sampai dalam kondisi suhu yang sempurna tanpa kendala."', fontSize: '14px', color: '#475569', lineHeight: '1.8', margin: '0 0 16px 0' } },
      { id: 'test1-c3-name', type: 'heading', props: { content: 'Dr. Hendra Wijaya', level: 'h4', fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '0 0 2px 0' } },
      { id: 'test1-c3-role', type: 'text', props: { content: 'Manager Logistik, FarmaCare Indonesia', fontSize: '12px', color: '#64748b', margin: '0' } },
    ]},
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const allHeadings = layoutComponents.filter(c => c.type === 'heading');
  const allTexts = layoutComponents.filter(c => c.type === 'text');
  const cardComponents = layoutComponents.filter(c => c.type === 'card');

  const titleComp = allHeadings[0];
  const descComp = allTexts[0];

  // Avatar placeholder colors per card
  const avatarColors = ['#2563eb', '#059669', '#d97706'];
  const avatarInitials = ['BS', 'SD', 'HW'];

  return (
    <section className="py-20 bg-slate-50" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-14">
          {titleComp && renderLayoutComponents([titleComp], sectionId)}
          {descComp && (
            <div className="max-w-2xl">
              {renderLayoutComponents([descComp], sectionId)}
            </div>
          )}

          {/* Aggregate trust signal */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 pt-6 border-t border-slate-200 w-full max-w-xl">
            <div className="flex items-center gap-2">
              <StarRating count={5} />
              <span className="text-sm font-bold text-slate-900">4.9/5</span>
              <span className="text-xs text-slate-500">dari 2,000+ ulasan</span>
            </div>
            <div className="h-4 w-px bg-slate-200 hidden sm:block" />
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="font-semibold text-slate-700">Verified Reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardComponents.length > 0 ? (
            cardComponents.map((card, idx) => {
              const textComp = card.childrenComponents?.find(c => c.type === 'text' && c.id.includes('text'));
              const nameComp = card.childrenComponents?.find(c => c.type === 'heading');
              const roleComp = card.childrenComponents?.find(c => c.type === 'text' && c.id.includes('role'));

              return (
                <div
                  key={card.id || idx}
                  className="relative bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
                >
                  {/* Top accent bar */}
                  <div
                    className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                    style={{ background: `linear-gradient(90deg, ${avatarColors[idx] || '#2563eb'}, transparent)` }}
                  />

                  {/* Quote mark */}
                  <div className="text-4xl leading-none font-serif text-slate-100 mb-3 select-none">"</div>

                  {/* Stars */}
                  <StarRating count={5} />

                  {/* Quote text */}
                  {textComp && (
                    <div className="mt-3 mb-6 flex-1">
                      {renderLayoutComponents([textComp], card.id)}
                    </div>
                  )}

                  {/* Author row */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-50 mt-auto">
                    {/* Avatar */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                      style={{ background: `linear-gradient(135deg, ${avatarColors[idx] || '#2563eb'}, ${avatarColors[(idx + 1) % 3]})` }}
                    >
                      {avatarInitials[idx] || 'C'}
                    </div>
                    <div className="min-w-0">
                      {nameComp && renderLayoutComponents([nameComp], card.id)}
                      {roleComp && renderLayoutComponents([roleComp], card.id)}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            /* Fallback when no card components found */
            renderLayoutComponents(cardComponents, sectionId)
          )}
        </div>
      </div>
    </section>
  );
}
