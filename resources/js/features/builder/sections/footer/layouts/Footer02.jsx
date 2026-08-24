import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Footer02({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-1', type: 'heading', props: { content: 'Company Name', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: '© 2024. All rights reserved.', fontSize: '14px', color: '#cbd5e1', align: 'left' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <footer className="py-12 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-2">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image'), sectionId)}
        </div>
        <div>
          <h4 className="text-sm font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li className="text-sm text-slate-400 hover:text-white cursor-pointer">Home</li>
            <li className="text-sm text-slate-400 hover:text-white cursor-pointer">About</li>
            <li className="text-sm text-slate-400 hover:text-white cursor-pointer">Services</li>
            <li className="text-sm text-slate-400 hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold text-white mb-4">Contact</h4>
          <ul className="space-y-2">
            <li className="text-sm text-slate-400">info@company.com</li>
            <li className="text-sm text-slate-400">+1 234 567 890</li>
            <li className="text-sm text-slate-400">123 Main Street</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}