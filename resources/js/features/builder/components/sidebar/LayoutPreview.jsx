import { getLayoutComponent } from '../../utils/layoutComponentMapper';
import { getLayoutDefaults } from '../../utils/layoutDefaults';

// Convert layout ID like "hero-01" to component name "Hero01"
const layoutIdToComponentName = (layoutId) => {
  if (!layoutId) return null;
  return layoutId
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
};

export default function LayoutPreview({ layoutId, height = 'h-24' }) {
  const componentName = layoutIdToComponentName(layoutId);
  const LayoutComponent = getLayoutComponent(componentName);
  const defaultComponents = getLayoutDefaults(layoutId);

  if (!LayoutComponent) {
    return (
      <div className={`w-full ${height} bg-slate-100 flex items-center justify-center`}>
        <span className="text-[10px] text-slate-400 font-medium">{layoutId}</span>
      </div>
    );
  }

  return (
    <div className={`w-full ${height} overflow-hidden relative bg-white`}>
      <div
        className="absolute top-0 left-0 origin-top-left pointer-events-none"
        style={{ transform: 'scale(0.25)', width: '400%', height: '400%' }}
      >
        <LayoutComponent components={defaultComponents} />
      </div>
    </div>
  );
}