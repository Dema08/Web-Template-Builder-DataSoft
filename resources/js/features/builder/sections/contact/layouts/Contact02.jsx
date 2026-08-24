import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Contact02({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-1', type: 'heading', props: { content: 'Contact Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Get in touch with us', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 32px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'badge'), sectionId)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
                <span className="text-indigo-600 font-bold">📍</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Address</h3>
                <p className="text-sm text-slate-600">123 Main Street, City</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
                <span className="text-indigo-600 font-bold">📞</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Phone</h3>
                <p className="text-sm text-slate-600">+1 234 567 890</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
                <span className="text-indigo-600 font-bold">✉️</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Email</h3>
                <p className="text-sm text-slate-600">info@company.com</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <div className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20" />
              <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20" />
              <button className="w-full px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg transition">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}