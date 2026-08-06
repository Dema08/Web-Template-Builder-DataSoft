import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Navbar01({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'logo-1', type: 'heading', props: { content: 'Logo', level: 'h2', fontSize: '20px', fontWeight: '700', color: '#000000' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <nav className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'image'), sectionId)}
      </div>
    </nav>
  );
}
