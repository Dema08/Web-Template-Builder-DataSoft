import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Navbar02({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'logo-1', type: 'image', props: { src: '', alt: 'Logo', width: '120px', height: '40px', objectFit: 'contain' } },
    { id: 'heading-1', type: 'heading', props: { content: 'Brand Name', level: 'h2', fontSize: '18px', fontWeight: '700', color: '#0f172a' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <nav className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'image' || c.type === 'heading' || c.type === 'text'), sectionId)}
        </div>
        <div className="flex items-center gap-6">
          <span className="text-sm text-slate-600 hover:text-indigo-600 cursor-pointer font-medium">Home</span>
          <span className="text-sm text-slate-600 hover:text-indigo-600 cursor-pointer font-medium">About</span>
          <span className="text-sm text-slate-600 hover:text-indigo-600 cursor-pointer font-medium">Services</span>
          <span className="text-sm text-slate-600 hover:text-indigo-600 cursor-pointer font-medium">Contact</span>
        </div>
      </div>
    </nav>
  );
}