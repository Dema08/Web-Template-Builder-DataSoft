import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Navbar05({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'logo-1', type: 'heading', props: { content: 'Logo', level: 'h2', fontSize: '20px', fontWeight: '700', color: '#0f172a' } },
    { id: 'button-1', type: 'button', props: { label: 'Get Started', href: '#', variant: 'primary', size: 'medium', background: '#4f46e5', color: '#ffffff' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <nav className="bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image'), sectionId)}
        <div className="flex items-center gap-6">
          <span className="text-sm text-slate-600 hover:text-indigo-600 cursor-pointer font-medium">Home</span>
          <span className="text-sm text-slate-600 hover:text-indigo-600 cursor-pointer font-medium">About</span>
          <span className="text-sm text-slate-600 hover:text-indigo-600 cursor-pointer font-medium">Services</span>
          <span className="text-sm text-slate-600 hover:text-indigo-600 cursor-pointer font-medium">Contact</span>
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'button'), sectionId)}
        </div>
      </div>
    </nav>
  );
}