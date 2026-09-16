import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * MISSION 07 — Terminal Developer Command
 */
export default function Mission07({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-7', type: 'heading', props: { content: '$ datasoft --mission', level: 'h2', fontSize: '42px', fontWeight: '800', color: '#e2e8f0', align: 'left', margin: '0 0 14px 0' } },
    { id: 'text-7', type: 'text', props: { content: 'Empowering developers worldwide with lightning-fast CI/CD pipelines and instant cloud primitives.', fontSize: '16px', color: '#94a3b8', align: 'left', margin: '0 0 24px 0' } },
    { id: 'btn-deploy', type: 'button', props: { label: '▸ Read Manifest', href: '#manifest', variant: 'primary', size: 'large', radius: 'md', background: '#22c55e', color: '#052e16' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  return (
    <section className="py-24 px-6 bg-[#090d16] overflow-hidden font-mono">
      <div className="max-w-4xl mx-auto rounded-xl border border-slate-800 bg-[#0f172a] p-8 shadow-2xl">
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-800">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-xs text-slate-500">mission.sh</span>
        </div>
        <div className="flex flex-col items-start">
          <div className="w-full">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading'), sectionId)}</div>
          <div className="w-full">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'text'), sectionId)}</div>
          <div className="mt-2">{renderLayoutComponents(layoutComponents.filter(c => c.type === 'button'), sectionId)}</div>
        </div>
      </div>
    </section>
  );
}
