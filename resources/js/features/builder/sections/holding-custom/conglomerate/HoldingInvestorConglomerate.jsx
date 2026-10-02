import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';
import { handleCardFormSubmit } from '../../../utils/formSubmissionHelper';

/**
 * HoldingInvestorConglomerate
 * Investor Relations, AGM (RUPS) registry & corporate inquiries desk.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingInvestorConglomerate({ components = [], sectionId = null }) {
  const [submitted, setSubmitted] = useState(false);

  const defaultComponents = [
    { id: 'inv-badge', type: 'badge', props: { content: '📊 HUBUNGAN INVESTOR & PEMEGANG SAHAM', variant: 'primary', background: '#fffbeb', color: '#b45309', size: 'medium' } },
    { id: 'inv-heading', type: 'heading', props: { content: 'Layanan Investor Relations & Keterbukaan Informasi', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 12px 0' } },
    { id: 'inv-text', type: 'text', props: { content: 'Divisi Investor Relations Nusantara Holdings siap melayani analis pasar modal, investor institusi, pemegang saham publik, dan pendaftaran RUPS Tahunan.', fontSize: '16px', color: '#94a3b8', align: 'left', margin: '0 0 32px 0' } },
    {
      id: 'inv-card-1',
      type: 'card',
      props: { variant: 'contact', background: '#091b33', borderRadius: '16px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '16px', margin: '0 0 12px 0' },
      childrenComponents: [
        { id: 'ic1-head', type: 'heading', props: { content: 'Sekretariat Perusahaan & IR Desk:', level: 'h4', fontSize: '14px', fontWeight: '800', color: '#fbbf24', margin: '0 0 4px 0' } },
        { id: 'ic1-txt', type: 'text', props: { content: 'Nusantara Tower Lt. 32, Jl. Jend. Sudirman Kav. 52-53, SCBD, Jakarta 12190', fontSize: '13px', color: '#cbd5e1', margin: '0' } },
      ],
    },
    {
      id: 'inv-card-2',
      type: 'card',
      props: { variant: 'contact', background: '#091b33', borderRadius: '16px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '16px', margin: '0 0 12px 0' },
      childrenComponents: [
        { id: 'ic2-head', type: 'heading', props: { content: 'Kontak Resmi Divisi Investor:', level: 'h4', fontSize: '14px', fontWeight: '800', color: '#fbbf24', margin: '0 0 4px 0' } },
        { id: 'ic2-txt', type: 'text', props: { content: 'Telepon: (021) 515-8888 | Email: ir@nusantaragroup.co.id', fontSize: '13px', color: '#cbd5e1', margin: '0' } },
      ],
    },
    { id: 'inv-btn-1', type: 'button', props: { label: 'Keterbukaan Informasi IDX →', href: 'https://idx.co.id', action: { type: 'card_form', formChannel: 'whatsapp', value: '081199887766', message: 'Halo Tim Hubungan Investor Nusantara Holdings, ada permohonan baru:' }, variant: 'primary', size: 'large', radius: 'xl', background: '#0ea5e9', color: '#ffffff', fontWeight: '800' } },
    { id: 'inv-btn-2', type: 'button', props: { label: 'Kontak Sekretaris Perusahaan', href: '#contact', action: { type: 'card_form', formChannel: 'email', value: 'corsec@nusantaragroup.co.id', message: '[Investor Relations] Permohonan Keterbukaan Informasi / RUPS' }, variant: 'primary', size: 'large', radius: 'xl', background: '#6366f1', color: '#ffffff', fontWeight: '800' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const badgeComps = layoutComponents.filter(c => c.type === 'badge' || c.id === 'inv-badge' || c.id === 'ir-badge');
  const headingComps = layoutComponents.filter(c => c.type === 'heading' || c.id === 'inv-heading' || c.id === 'ir-title');
  const textComps = layoutComponents.filter(c => c.type === 'text' || c.id === 'inv-text' || c.id === 'ir-desc');
  const cardComps = layoutComponents.filter(c => c.type === 'card');
  const btnComps = layoutComponents.filter(c => c.type === 'button');

  const handleSubmit = (e) => {
    e.preventDefault();
    const cardFormBtn = btnComps.find(c => c.props?.action?.type === 'card_form' || c.props?.linkType === 'card_form') || btnComps[btnComps.length - 1] || btnComps[0] || {};
    const btnAction = cardFormBtn.props?.action || {
      type: 'card_form',
      formChannel: cardFormBtn.props?.formChannel || 'whatsapp',
      value: cardFormBtn.props?.actionValue || cardFormBtn.props?.formTarget || cardFormBtn.props?.href || '',
      message: cardFormBtn.props?.actionMessage || '',
    };

    handleCardFormSubmit({
      containerElement: e.currentTarget,
      action: btnAction,
      defaultTarget: btnAction.value || cardFormBtn.props?.formTarget || cardFormBtn.props?.actionValue || '',
      defaultChannel: btnAction.formChannel || 'whatsapp',
      defaultIntro: btnAction.message || 'Halo Tim Investor Relations Nusantara Strategic Holdings, ada permohonan baru:',
      defaultSubject: '[Investor Relations] Permohonan Keterbukaan Informasi / RUPS',
      onSuccess: () => setSubmitted(true),
    });
  };

  return (
    <section id="investor" className="py-24 px-4 sm:px-6 bg-[#061427] text-white relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
        {/* Left Information */}
        <div className="lg:col-span-6">
          {renderLayoutComponents(badgeComps, sectionId)}
          <div className="mt-3">{renderLayoutComponents(headingComps, sectionId)}</div>
          {renderLayoutComponents(textComps, sectionId)}

          <div className="space-y-3 mt-6">
            {renderLayoutComponents(cardComps, sectionId)}
          </div>
        </div>

        {/* Right Form Card */}
        <div className="lg:col-span-6 bg-[#091b33] border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {submitted ? (
            <div className="p-8 text-center space-y-4">
              <span className="text-5xl">📊</span>
              <h3 className="text-2xl font-bold text-white">Permintaan Investor Diterima</h3>
              <p className="text-sm text-slate-300">
                Corporate Secretary & Investor Relations Officer kami akan merespons pertanyaan Anda dalam 1x24 jam bursa.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs text-amber-400 underline font-bold mt-4"
              >
                Kirim pesan lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">Nama Lengkap / PIC:</label>
                  <input
                    type="text"
                    required
                    placeholder="Ir. Agus Sudarman"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">Institusi / Perusahaan:</label>
                  <input
                    type="text"
                    required
                    placeholder="Schroder Investment / Pribadi"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">Email Korespondensi:</label>
                  <input
                    type="email"
                    required
                    placeholder="analyst@fundmanager.com"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">Nomor Kontak / WhatsApp:</label>
                  <input
                    type="tel"
                    required
                    placeholder="0811-9988-7766"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">Kategori Kebutuhan Informasi:</label>
                <select className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500">
                  <option>Pendaftaran Kehadiran RUPS Tahunan / Luar Biasa</option>
                  <option>Permintaan Jadwal One-on-One Analyst Meeting</option>
                  <option>Informasi Pembagian Dividen Tunai Saham NUSH</option>
                  <option>Klarifikasi Keterbukaan Informasi & Aksi Korporasi</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">Catatan Pertanyaan:</label>
                <textarea
                  rows={3}
                  placeholder="Tuliskan pertanyaan spesifik Anda seputar kinerja keuangan atau prospek bisnis grup."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="w-full pt-2 flex flex-col gap-3">
                {btnComps.length > 0 ? (
                  renderLayoutComponents(btnComps, sectionId)
                ) : (
                  <>
                    <button
                      type="submit"
                      className="w-full py-4 bg-sky-500 hover:bg-sky-600 text-white font-black text-sm rounded-xl transition-all shadow-lg"
                    >
                      Keterbukaan Informasi IDX →
                    </button>
                    <button
                      type="button"
                      className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm rounded-xl transition-all shadow-lg"
                    >
                      Kontak Sekretaris Perusahaan
                    </button>
                  </>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
