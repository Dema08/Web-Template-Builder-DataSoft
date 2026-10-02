import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';
import { handleCardFormSubmit } from '../../../utils/formSubmissionHelper.js';

/**
 * LogisticsContactTech
 * Merchant onboarding & partnership contact form with support cards.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsContactTech({ components = [], sectionId = null }) {
  const [registered, setRegistered] = useState(false);

  const defaultComponents = [
    { id: 'tcnt-badge', type: 'badge', props: { content: '🚀 GABUNG EKOSISTEM SELLER TRACKFAST', variant: 'primary', background: '#e0f2fe', color: '#0284c7', size: 'medium' } },
    { id: 'tcnt-title', type: 'heading', props: { content: 'Daftar Akun Seller & Nikmati Diskon Ongkir 20%', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#0f172a', align: 'left', margin: '0 0 12px 0' } },
    { id: 'tcnt-desc', type: 'text', props: { content: 'Dapatkan fasilitas pickup prioritas, dashboard analitik pengiriman, dan tim CS WhatsApp khusus yang membantu operasional toko Anda setiap hari.', fontSize: '16px', color: '#64748b', align: 'left', margin: '0 0 32px 0' } },
    {
      id: 'tcnt-card-1',
      type: 'card',
      props: { variant: 'contact', background: '#f8fafc', borderRadius: '16px', borderWidth: '1px', borderColor: '#e2e8f0', padding: '16px', margin: '0 0 12px 0' },
      childrenComponents: [
        { id: 'tci1-t', type: 'heading', props: { content: 'Hotline Seller Support 24 Jam:', level: 'h4', fontSize: '14px', fontWeight: '800', color: '#0284c7', margin: '0 0 4px 0' } },
        { id: 'tci1-d', type: 'text', props: { content: 'WhatsApp: 0811-TRACKFAST / halo@trackfast.id', fontSize: '13px', color: '#334155', margin: '0' } },
      ],
    },
    {
      id: 'tcnt-card-2',
      type: 'card',
      props: { variant: 'contact', background: '#f8fafc', borderRadius: '16px', borderWidth: '1px', borderColor: '#e2e8f0', padding: '16px', margin: '0 0 12px 0' },
      childrenComponents: [
        { id: 'tci2-t', type: 'heading', props: { content: 'Kantor Inovasi & Tech Hub:', level: 'h4', fontSize: '14px', fontWeight: '800', color: '#0284c7', margin: '0 0 4px 0' } },
        { id: 'tci2-d', type: 'text', props: { content: 'TrackFast Smart Hub, Jl. Senopati No. 88, Kebayoran Baru, Jakarta Selatan', fontSize: '13px', color: '#334155', margin: '0' } },
      ],
    },
    { id: 'tcnt-btn', type: 'button', props: { label: 'Aktivasi Akun Seller Sekarang →', href: '#', variant: 'primary', size: 'large', radius: 'full', background: '#0284c7', color: '#ffffff', fontWeight: '800', action: { type: 'card_form', formChannel: 'whatsapp', value: '08118722532', formSubject: 'Aktivasi Akun Seller TrackFast' } } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const leftComps = layoutComponents.filter(c => c.type === 'badge' || c.type === 'heading' || c.type === 'text');
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
      formSubject: 'Aktivasi Akun Seller TrackFast'
    };
    handleCardFormSubmit(e.currentTarget, btnAction, {
      defaultTarget: btnAction.value || cardFormBtn.props?.formTarget || '',
      defaultChannel: btnAction.formChannel || 'whatsapp',
      defaultSubject: 'Aktivasi Akun Seller TrackFast',
      onSuccess: () => setRegistered(true),
    });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-white text-slate-800 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
        {/* Left Information */}
        <div className="lg:col-span-6">
          {renderLayoutComponents(leftComps.filter(c => c.type === 'badge'), sectionId)}
          <div className="mt-3">{renderLayoutComponents(leftComps.filter(c => c.type === 'heading'), sectionId)}</div>
          {renderLayoutComponents(leftComps.filter(c => c.type === 'text'), sectionId)}

          <div className="space-y-3 mt-6">
            {renderLayoutComponents(cardComps, sectionId)}
          </div>
        </div>

        {/* Right Form Card */}
        <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
          {registered ? (
            <div className="p-8 text-center space-y-4">
              <span className="text-5xl">⚡</span>
              <h3 className="text-2xl font-bold text-slate-900">Pendaftaran Berhasil!</h3>
              <p className="text-sm text-slate-600">
                Akun seller Anda telah aktif. Tim Onboarding kami akan mengirimkan panduan dashboard dan API key via WhatsApp dalam hitungan menit.
              </p>
              <button
                type="button"
                onClick={() => setRegistered(false)}
                className="text-xs text-sky-600 underline font-bold mt-4"
              >
                Daftarkan toko lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Nama Toko Online / Brand:</label>
                <input
                  type="text"
                  required
                  placeholder="Glow Skincare Official"
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Nama Owner / PIC:</label>
                  <input
                    type="text"
                    required
                    placeholder="Siti Rahma"
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Nomor WhatsApp Aktif:</label>
                  <input
                    type="tel"
                    required
                    placeholder="0812-3456-7890"
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Perkiraan Volume Pengiriman:</label>
                <select className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-sky-500">
                  <option>10 - 50 paket / hari (Starter UMKM)</option>
                  <option>50 - 200 paket / hari (Pro Merchant)</option>
                  <option>200 - 1.000+ paket / hari (Enterprise API)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase">Kota Lokasi Pickup:</label>
                <input
                  type="text"
                  required
                  placeholder="Jakarta Barat / Bandung / Surabaya"
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="w-full pt-2 flex flex-col gap-3">
                {btnComps.length > 0 ? (
                  renderLayoutComponents(btnComps, sectionId)
                ) : (
                  <button
                    type="submit"
                    className="w-full py-4 bg-sky-600 hover:bg-sky-700 text-white font-black text-sm rounded-full transition-all shadow-lg shadow-sky-600/25"
                  >
                    Aktivasi Akun Seller Sekarang →
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
