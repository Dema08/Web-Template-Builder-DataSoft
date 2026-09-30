import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsContactCorporate
 * Enterprise RFQ (Request for Quotation) & Tender Inquiry Form with corporate info cards.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsContactCorporate({ components = [], sectionId = null }) {
  const [submitted, setSubmitted] = useState(false);

  const defaultComponents = [
    { id: 'cnt-badge', type: 'badge', props: { content: '📩 Hubungi Divisi Komersial & Tender', variant: 'primary', background: '#fff7ed', color: '#ea580c', size: 'medium' } },
    { id: 'cnt-title', type: 'heading', props: { content: 'Minta Penawaran Resmi & Konsultasi Rantai Pasok', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 12px 0' } },
    { id: 'cnt-desc', type: 'text', props: { content: 'Tim konsultan logistik enterprise TransGo siap menganalisis kebutuhan rute, tonase, dan skema efisiensi biaya rantai pasok perusahaan Anda dalam 1x24 jam kerja.', fontSize: '16px', color: '#94a3b8', align: 'left', margin: '0 0 32px 0' } },
    {
      id: 'contact-info-1',
      type: 'card',
      props: { variant: 'contact', background: '#0f223d', borderRadius: '16px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '16px', margin: '0 0 12px 0' },
      childrenComponents: [
        { id: 'ci-1-title', type: 'heading', props: { content: 'Kantor Pusat & Logistik Hub:', level: 'h4', fontSize: '14px', fontWeight: '800', color: '#f97316', margin: '0 0 4px 0' } },
        { id: 'ci-1-desc', type: 'text', props: { content: 'TransGo Tower Lt. 18, Kawasan Industri MM2100, Cikarang Barat, Bekasi 17530', fontSize: '13px', color: '#cbd5e1', margin: '0' } },
      ],
    },
    {
      id: 'contact-info-2',
      type: 'card',
      props: { variant: 'contact', background: '#0f223d', borderRadius: '16px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '16px', margin: '0 0 12px 0' },
      childrenComponents: [
        { id: 'ci-2-title', type: 'heading', props: { content: 'Hotline Dispatch & Hotline 24/7:', level: 'h4', fontSize: '14px', fontWeight: '800', color: '#f97316', margin: '0 0 4px 0' } },
        { id: 'ci-2-desc', type: 'text', props: { content: '0800-TRANSGO-B2B / (021) 8990-2888 | info@transgo-logistics.co.id', fontSize: '13px', color: '#cbd5e1', margin: '0' } },
      ],
    },
    {
      id: 'contact-info-3',
      type: 'card',
      props: { variant: 'contact', background: '#0f223d', borderRadius: '16px', borderWidth: '1px', borderColor: '#1e3a5f', padding: '16px', margin: '0 0 12px 0' },
      childrenComponents: [
        { id: 'ci-3-title', type: 'heading', props: { content: 'Sertifikasi Mutu & Legalitas:', level: 'h4', fontSize: '14px', fontWeight: '800', color: '#f97316', margin: '0 0 4px 0' } },
        { id: 'ci-3-desc', type: 'text', props: { content: 'ISO 9001:2015, ISO 45001:2018 (K3), GDP Certified (Farmasi), Asosiasi Logistik Indonesia (ALI)', fontSize: '13px', color: '#cbd5e1', margin: '0' } },
      ],
    },
    { id: 'cnt-submit-btn', type: 'button', props: { label: 'Kirim Formulir RFQ / Penawaran Resmi →', href: '#', variant: 'primary', size: 'large', radius: 'xl', background: '#f97316', color: '#ffffff', fontWeight: '800' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;
  const leftComps = layoutComponents.filter(c => c.type === 'badge' || c.type === 'heading' || c.type === 'text');
  const cardComps = layoutComponents.filter(c => c.type === 'card');
  const btnComps = layoutComponents.filter(c => c.type === 'button');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-[#0a192f] text-white relative">
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
        <div className="lg:col-span-6 bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {submitted ? (
            <div className="p-8 text-center space-y-4">
              <span className="text-5xl">✅</span>
              <h3 className="text-2xl font-bold text-white">Permintaan RFQ Berhasil Dikirim</h3>
              <p className="text-sm text-slate-300">
                Key Account Manager kami akan segera menghubungi tim pengadaan perusahaan Anda dalam kurun waktu 1x24 jam kerja.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs text-orange-400 underline font-bold mt-4"
              >
                Kirim formulir lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">Nama Perusahaan:</label>
                  <input
                    type="text"
                    required
                    placeholder="PT Manufaktur Maju Sejahtera"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">Nama Kontak PIC / Jabatan:</label>
                  <input
                    type="text"
                    required
                    placeholder="Budi Santoso (Head of Supply Chain)"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">Email Perusahaan:</label>
                  <input
                    type="email"
                    required
                    placeholder="procurement@perusahaan.co.id"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">Nomor Telepon / WhatsApp:</label>
                  <input
                    type="tel"
                    required
                    placeholder="0812-3456-7890"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">Kategori Kebutuhan Armada:</label>
                <select className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500">
                  <option>Dedicated Wingbox 40ft (Kontrak Bulanan / Tahunan)</option>
                  <option>Intermodal Laut Kontainer Lintas Pulau (FCL/LCL)</option>
                  <option>Cold Chain Reefer Truck -25°C (Farmasi / Makanan Beku)</option>
                  <option>Heavy Haulage Lowbed Trailer (Alat Berat & Proyek)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">Catatan Rute / Volume Muatan:</label>
                <textarea
                  rows={3}
                  placeholder="Contoh: Pengiriman rutin rute Cikarang ke Surabaya 5 trip/minggu muatan FMCG."
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="w-full pt-2">
                {btnComps.length > 0 ? (
                  renderLayoutComponents(btnComps, sectionId)
                ) : (
                  <button
                    type="submit"
                    className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-black text-sm rounded-xl transition-all shadow-lg shadow-orange-500/25"
                  >
                    Kirim Formulir RFQ / Penawaran Resmi →
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
