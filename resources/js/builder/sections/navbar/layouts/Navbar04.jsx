import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Navbar04({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'logo-1', type: 'heading', props: { content: 'Logo', level: 'h2', fontSize: '20px', fontWeight: '700', color: '#0f172a' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <nav className="bg-transparent px-6 py-4 absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image'), sectionId)}
        <div className="flex items-center gap-6">
          <span className="text-sm text-white hover:text-indigo-300 cursor-pointer font-medium">Home</span>
          <span className="text-sm text-white hover:text-indigo-300 cursor-pointer font-medium">About</span>
          <span className="text-sm text-white hover:text-indigo-300 cursor-pointer font-medium">Services</span>
          <span className="text-sm text-white hover:text-indigo-300 cursor-pointer font-medium">Contact</span>
        </div>
      </div>
    </nav>
  );
}