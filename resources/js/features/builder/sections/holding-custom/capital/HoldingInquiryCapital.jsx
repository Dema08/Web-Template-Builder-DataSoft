import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * HoldingInquiryCapital
 * Founder Pitch Deck Submission & LP Capital Allocation Desk.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function HoldingInquiryCapital({ components = [], sectionId = null }) {
  const [submitted, setSubmitted] = useState(false);

  const defaultComponents = [
    { id: 'inq-badge', type: 'badge', props: { content: '🚀 FOUNDER PITCH & LP INQUIRY', variant: 'primary', background: '#022c22', color: '#34d399', size: 'medium' } },
    { id: 'inq-title', type: 'heading', props: { content: 'Bermitra & Tumbuh Bersama Vanguard Apex', level: 'h2', fontSize: '38px', fontWeight: '900', color: '#ffffff', align: 'left', margin: '0 0 12px 0' } },
    { id: 'inq-desc', type: 'text', props: { content: 'Apakah Anda pendiri startup tahap pertumbuhan dengan traksi kuat, atau pemodal institusional (LP) yang ingin berpartisipasi dalam Fund IV? Tim investasi kami siap berdiskusi.', fontSize: '16px', color: '#94a3b8', align: 'left', margin: '0 0 32px 0' } },
    {
      id: 'inq-card-1',
      type: 'card',
      props: { variant: 'contact', background: '#09090b', borderRadius: '16px', borderWidth: '1px', borderColor: '#27272a', padding: '16px', margin: '0 0 12px 0' },
      childrenComponents: [
        { id: 'iq1-t', type: 'heading', props: { content: 'Singapore Investment HQ:', level: 'h4', fontSize: '14px', fontWeight: '800', color: '#34d399', margin: '0 0 4px 0' } },
        { id: 'iq1-d', type: 'text', props: { content: 'One Raffles Quay, North Tower #38-01, Singapore 048583', fontSize: '13px', color: '#d1d5db', margin: '0' } },
      ],
    },
    {
      id: 'inq-card-2',
      type: 'card',
      props: { variant: 'contact', background: '#09090b', borderRadius: '16px', borderWidth: '1px', borderColor: '#27272a', padding: '16px', margin: '0 0 12px 0' },
      childrenComponents: [
        { id: 'iq2-t', type: 'heading', props: { content: 'Jakarta Venture Office:', level: 'h4', fontSize: '14px', fontWeight: '800', color: '#34d399', margin: '0 0 4px 0' } },
        { id: 'iq2-d', type: 'text', props: { content: 'Pacific Century Place Lt. 24, SCBD Kav. 52-53, Jakarta Selatan', fontSize: '13px', color: '#d1d5db', margin: '0' } },
      ],
    },
    {
      id: 'inq-card-3',
      type: 'card',
      props: { variant: 'contact', background: '#09090b', borderRadius: '16px', borderWidth: '1px', borderColor: '#27272a', padding: '16px', margin: '0 0 12px 0' },
      childrenComponents: [
        { id: 'iq3-t', type: 'heading', props: { content: 'Direct Pitch & LP Email:', level: 'h4', fontSize: '14px', fontWeight: '800', color: '#34d399', margin: '0 0 4px 0' } },
        { id: 'iq3-d', type: 'text', props: { content: 'dealflow@vanguardapex.com | lp-relations@vanguardapex.com', fontSize: '13px', color: '#d1d5db', margin: '0' } },
      ],
    },
    { id: 'inq-submit-btn', type: 'button', props: { label: 'Submit Pitch Deck / LP Allocation Request →', href: '#', variant: 'primary', size: 'large', radius: 'full', background: '#10b981', color: '#042f2e', fontWeight: '800' } },
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
    <section id="inquiry" className="py-24 px-4 sm:px-6 bg-[#030303] text-white relative">
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
        <div className="lg:col-span-6 bg-[#09090b] border border-[#27272a] rounded-3xl p-6 sm:p-10 shadow-2xl">
          {submitted ? (
            <div className="p-8 text-center space-y-4">
              <span className="text-5xl">⚡</span>
              <h3 className="text-2xl font-bold text-white">Proposal Investasi Diterima</h3>
              <p className="text-sm text-slate-400">
                Investment Principal kami akan mereview deck bisnis Anda dan menghubungi dalam kurun waktu 3 hari kerja.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs text-emerald-400 underline font-bold mt-4"
              >
                Submit proposal lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">Nama Startup / Institusi:</label>
                  <input
                    type="text"
                    required
                    placeholder="DeepVision AI"
                    className="w-full bg-[#030303] border border-[#27272a] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">Nama Founder / Kontak:</label>
                  <input
                    type="text"
                    required
                    placeholder="Rayhan Farhan (CEO)"
                    className="w-full bg-[#030303] border border-[#27272a] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">Email Korespondensi:</label>
                  <input
                    type="email"
                    required
                    placeholder="founder@deepvision.ai"
                    className="w-full bg-[#030303] border border-[#27272a] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">Nomor WhatsApp / Phone:</label>
                  <input
                    type="tel"
                    required
                    placeholder="+62 811-2233-4455"
                    className="w-full bg-[#030303] border border-[#27272a] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">Kategori & Tahap Pendanaan:</label>
                <select className="w-full bg-[#030303] border border-[#27272a] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500">
                  <option>Series A / B ($3M - $15M Growth Round)</option>
                  <option>Series C / Pre-IPO ($20M - $80M Late Stage)</option>
                  <option>Strategic Buyout & Secondary Sale</option>
                  <option>Institutional LP Fund IV Capital Allocation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5 uppercase">Link Pitch Deck (DocSend / Google Drive):</label>
                <input
                  type="url"
                  placeholder="https://docsend.com/view/..."
                  className="w-full bg-[#030303] border border-[#27272a] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="w-full pt-2">
                {btnComps.length > 0 ? (
                  renderLayoutComponents(btnComps, sectionId)
                ) : (
                  <button
                    type="submit"
                    className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-sm rounded-full transition-all shadow-xl"
                  >
                    Submit Pitch Deck / LP Allocation Request →
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
