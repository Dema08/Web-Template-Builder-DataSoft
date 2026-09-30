import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * LogisticsInquiryGlobal
 * International Freight Space Booking & Customs Inquiry Form.
 * Fully supports right-inspector selection and property editing for all elements.
 */
export default function LogisticsInquiryGlobal({ components = [], sectionId = null }) {
  const [submitted, setSubmitted] = useState(false);

  const defaultComponents = [
    { id: 'inq-badge', type: 'badge', props: { content: '🌐 GLOBAL CHARTER & FORWARDING DESK', variant: 'primary', background: '#1c1917', color: '#e7c873', size: 'medium' } },
    { id: 'inq-title', type: 'heading', props: { content: 'Request International Freight Allocation', level: 'h2', fontSize: '38px', fontWeight: '800', color: '#fafaf9', align: 'left', margin: '0 0 12px 0' } },
    { id: 'inq-desc', type: 'text', props: { content: 'Hubungi tim charter kargo udara dan manajer rute internasional kami untuk alokasi ruang kargo mendesak, jadwal FCL/LCL, atau konsultasi kepabeanan jalur hijau.', fontSize: '16px', color: '#a8a29e', align: 'left', margin: '0 0 32px 0' } },
    {
      id: 'inq-card-1',
      type: 'card',
      props: { variant: 'contact', background: '#141210', borderRadius: '16px', borderWidth: '1px', borderColor: '#292524', padding: '16px', margin: '0 0 12px 0' },
      childrenComponents: [
        { id: 'iq1-t', type: 'heading', props: { content: 'Global Headquarters (Singapore):', level: 'h4', fontSize: '14px', fontWeight: '800', color: '#e7c873', margin: '0 0 4px 0' } },
        { id: 'iq1-d', type: 'text', props: { content: 'Marina Bay Financial Centre Tower 3, #28-01, Singapore 018982', fontSize: '13px', color: '#d6d3d1', margin: '0' } },
      ],
    },
    {
      id: 'inq-card-2',
      type: 'card',
      props: { variant: 'contact', background: '#141210', borderRadius: '16px', borderWidth: '1px', borderColor: '#292524', padding: '16px', margin: '0 0 12px 0' },
      childrenComponents: [
        { id: 'iq2-t', type: 'heading', props: { content: 'Indonesia Operations & Bonded Hub:', level: 'h4', fontSize: '14px', fontWeight: '800', color: '#e7c873', margin: '0 0 4px 0' } },
        { id: 'iq2-d', type: 'text', props: { content: 'Soekarno-Hatta Int Airport Cargo Area, Building 520 & PLB Cikarang Hub', fontSize: '13px', color: '#d6d3d1', margin: '0' } },
      ],
    },
    {
      id: 'inq-card-3',
      type: 'card',
      props: { variant: 'contact', background: '#141210', borderRadius: '16px', borderWidth: '1px', borderColor: '#292524', padding: '16px', margin: '0 0 12px 0' },
      childrenComponents: [
        { id: 'iq3-t', type: 'heading', props: { content: 'Aviation Freight Desk 24/7:', level: 'h4', fontSize: '14px', fontWeight: '800', color: '#e7c873', margin: '0 0 4px 0' } },
        { id: 'iq3-d', type: 'text', props: { content: '+62 21 559 8899 / charter@nexusglobal-cargo.com', fontSize: '13px', color: '#d6d3d1', margin: '0' } },
      ],
    },
    { id: 'inq-btn', type: 'button', props: { label: 'Submit International Booking Inquiry →', href: '#', variant: 'primary', size: 'large', radius: 'full', background: '#e7c873', color: '#0c0a09', fontWeight: '800' } },
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
    <section id="inquiry" className="py-24 px-4 sm:px-6 bg-[#0a0807] text-white relative">
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
        <div className="lg:col-span-6 bg-[#141210] border border-[#292524] rounded-3xl p-6 sm:p-10 shadow-2xl">
          {submitted ? (
            <div className="p-8 text-center space-y-4">
              <span className="text-5xl">✈️</span>
              <h3 className="text-2xl font-bold text-white">Freight Inquiry Received</h3>
              <p className="text-sm text-[#a8a29e]">
                Our International Freight Desk has logged your routing request and will dispatch a verified quote within 60 minutes.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs text-[#e7c873] underline font-bold mt-4"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#a8a29e] mb-1.5 uppercase">Company Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="Global Enterprises Ltd"
                    className="w-full bg-[#0c0a09] border border-[#292524] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#e7c873]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#a8a29e] mb-1.5 uppercase">Corporate Email:</label>
                  <input
                    type="email"
                    required
                    placeholder="freight@globalcorp.com"
                    className="w-full bg-[#0c0a09] border border-[#292524] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#e7c873]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#a8a29e] mb-1.5 uppercase">Origin Port / Airport:</label>
                  <input
                    type="text"
                    required
                    placeholder="CGK / Tanjung Priok (ID)"
                    className="w-full bg-[#0c0a09] border border-[#292524] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#e7c873]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#a8a29e] mb-1.5 uppercase">Destination Port / Airport:</label>
                  <input
                    type="text"
                    required
                    placeholder="FRA (Frankfurt) / RTM (Rotterdam)"
                    className="w-full bg-[#0c0a09] border border-[#292524] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#e7c873]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#a8a29e] mb-1.5 uppercase">Freight Service Mode:</label>
                <select className="w-full bg-[#0c0a09] border border-[#292524] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#e7c873]">
                  <option>Air Freight Charter (Dedicated Boeing 777F / 747-8F)</option>
                  <option>Scheduled International Air Cargo (IATA Prioritas)</option>
                  <option>Ocean Container FCL (20ft / 40ft HQ)</option>
                  <option>Ocean Container LCL (Partial Consolidation)</option>
                  <option>Bonded Logistics Center (PLB) Storage & Clearance</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#a8a29e] mb-1.5 uppercase">Cargo Description / Special Handling:</label>
                <textarea
                  rows={3}
                  placeholder="e.g. 15,000 kg electronics payload requiring temperature control (+15°C to +25°C) and customs clearance."
                  className="w-full bg-[#0c0a09] border border-[#292524] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#e7c873]"
                />
              </div>

              <div className="w-full pt-2">
                {btnComps.length > 0 ? (
                  renderLayoutComponents(btnComps, sectionId)
                ) : (
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#e7c873] hover:bg-[#d8b860] text-[#0c0a09] font-black text-sm rounded-full transition-all shadow-xl"
                  >
                    Submit International Booking Inquiry →
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
