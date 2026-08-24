import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Footer04({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-1', type: 'heading', props: { content: 'Company Name', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: '© 2024. All rights reserved.', fontSize: '14px', color: '#cbd5e1', align: 'left' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <footer className="py-12 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          <div className="col-span-2">
            {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image'), sectionId)}
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li className="text-sm text-slate-400 hover:text-white cursor-pointer">About</li>
              <li className="text-sm text-slate-400 hover:text-white cursor-pointer">Careers</li>
              <li className="text-sm text-slate-400 hover:text-white cursor-pointer">Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li className="text-sm text-slate-400 hover:text-white cursor-pointer">Help Center</li>
              <li className="text-sm text-slate-400 hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="text-sm text-slate-400 hover:text-white cursor-pointer">Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex items-center justify-between">
          <p className="text-sm text-slate-500">© 2024 Company. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-500 cursor-pointer hover:text-white">Facebook</span>
            <span className="text-sm text-slate-500 cursor-pointer hover:text-white">Twitter</span>
            <span className="text-sm text-slate-500 cursor-pointer hover:text-white">LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
}