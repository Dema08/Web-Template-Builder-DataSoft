import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Footer01({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'text-1', type: 'text', props: { content: '© 2024. All rights reserved.', fontSize: '14px', color: '#cbd5e1', align: 'center' } },
    { id: 'social-1', type: 'social', props: { platforms: ['facebook', 'twitter', 'linkedin'], size: 'medium' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <footer className="py-8 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
        {renderLayoutComponents(layoutComponents, sectionId)}
      </div>
    </footer>
  );
}
