import { useState } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import {
  ChevronDown,
  ChevronRight,
  Eye,
  EyeOff,
  Lock,
  ArrowUp,
  ArrowDown,
  Trash2,
  Copy,
  Square,
  Type,
  Tag,
  MousePointerClick,
  Star,
  Image as ImageIcon,
  BarChart3,
  Sparkles,
} from 'lucide-react';

const getComponentIcon = (type) => {
  switch (type) {
    case 'card':
      return Square;
    case 'heading':
    case 'text':
      return Type;
    case 'badge':
      return Tag;
    case 'button':
      return MousePointerClick;
    case 'icon':
      return Star;
    case 'image':
      return ImageIcon;
    case 'statistic':
      return BarChart3;
    default:
      return Sparkles;
  }
};

const getComponentSnippet = (component) => {
  if (!component) return 'Component';
  const props = component.props || {};

  switch (component.type) {
    case 'card': {
      if (Array.isArray(component.childrenComponents)) {
        const titleChild = component.childrenComponents.find((c) => c.type === 'heading' || c.type === 'text');
        if (titleChild && titleChild.props?.content) {
          return titleChild.props.content;
        }
      }
      return props.title || props.name || 'Card Container';
    }
    case 'heading':
      return props.content || 'Heading';
    case 'text':
      return props.content || 'Paragraph Text';
    case 'badge':
      return props.content || 'Badge';
    case 'button':
      return props.content || props.text || 'Button';
    case 'icon':
      return props.name || props.icon || 'Icon';
    case 'image':
      return props.alt || props.title || 'Image';
    case 'statistic':
      return `${props.value || '100+'} ${props.label || ''}`.trim();
    default:
      return props.content || props.label || props.name || component.type;
  }
};

export default function LayerItem({ component, sectionId, depth = 0 }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const {
    selectedComponentId,
    selectComponent,
    setHoveredComponent,
    toggleVisibilityComponent,
    toggleLockComponent,
    duplicateComponent,
    removeComponent,
    bringForward,
    sendBackward,
  } = useBuilderStore();

  const isSelected = selectedComponentId === component.id;
  const isLocked = !!(component.isLocked || component.position?.locked);
  const isHidden = !!(component.isHidden || component.position?.hidden);

  const hasChildren = Array.isArray(component.childrenComponents) && component.childrenComponents.length > 0;
  const IconComp = getComponentIcon(component.type);
  const snippet = getComponentSnippet(component);

  const handleClick = (e) => {
    e.stopPropagation();
    selectComponent(component.id, sectionId);

    const el = document.getElementById(component.id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="space-y-1">
      <div
        onClick={handleClick}
        onMouseEnter={() => setHoveredComponent(component.id)}
        onMouseLeave={() => setHoveredComponent(null)}
        style={{ paddingLeft: `${depth * 14 + 10}px` }}
        className={`group flex items-center justify-between py-1.5 pr-2 rounded-xl text-xs transition-all cursor-pointer border ${
          isHidden ? 'opacity-50 bg-slate-100/70 border-dashed border-slate-300' : ''
        } ${
          isSelected
            ? 'bg-indigo-600 text-white font-extrabold border-indigo-700 shadow-md ring-2 ring-indigo-300'
            : 'bg-white border-slate-200/80 hover:border-indigo-300 text-slate-700 hover:bg-indigo-50/40 hover:shadow-xs'
        }`}
      >
        {/* Left: Expand Arrow + Label (No extra icon image box) */}
        <div className="flex items-center gap-1.5 min-w-0 flex-1 mr-2">
          {hasChildren ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className={`p-0.5 rounded hover:bg-black/10 transition shrink-0 ${isSelected ? 'text-white' : 'text-slate-400'}`}
            >
              {isExpanded ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
            </button>
          ) : (
            <div className="w-1.5 shrink-0" />
          )}

          <div className="flex items-center gap-1.5 min-w-0 flex-1">
            <span className={`text-[10px] font-extrabold uppercase tracking-wide shrink-0 ${isSelected ? 'text-indigo-200' : 'text-slate-400'}`}>
              {component.type}
            </span>
            <span className={`truncate text-xs ${isSelected ? 'text-white font-bold' : 'text-slate-800 font-semibold'}`} title={snippet}>
              {snippet}
            </span>
          </div>
        </div>

        {/* Right: Status Badges & Quick Action Controls */}
        <div className="flex items-center gap-0.5 shrink-0" onClick={(e) => e.stopPropagation()}>
          {/* Status Badges when not hovering */}
          {isHidden && (
            <span className={`p-1 rounded ${isSelected ? 'text-white' : 'text-rose-500'}`} title="Hidden">
              <EyeOff className="h-3.5 w-3.5" />
            </span>
          )}
          {isLocked && (
            <span className={`p-1 rounded ${isSelected ? 'text-amber-200' : 'text-amber-500'}`} title="Locked">
              <Lock className="h-3.5 w-3.5" />
            </span>
          )}

          {/* Action Toolbar on Hover/Selection */}
          <div className="hidden group-hover:flex items-center gap-0.5">
            <button
              onClick={() => toggleVisibilityComponent(sectionId, component.id)}
              className={`p-1 rounded-md transition ${
                isSelected
                  ? 'hover:bg-white/20 text-white'
                  : 'hover:bg-slate-200 text-slate-500 hover:text-slate-900'
              }`}
              title={isHidden ? 'Tampilkan Komponen' : 'Sembunyikan Komponen'}
            >
              {isHidden ? <EyeOff className="h-3.5 w-3.5 text-rose-500" /> : <Eye className="h-3.5 w-3.5" />}
            </button>

            <button
              onClick={() => toggleLockComponent(sectionId, component.id)}
              className={`p-1 rounded-md transition ${
                isSelected
                  ? 'hover:bg-white/20 text-white'
                  : 'hover:bg-slate-200 text-slate-500 hover:text-slate-900'
              }`}
              title={isLocked ? 'Buka Kunci Komponen' : 'Kunci Komponen'}
            >
              <Lock className={`h-3.5 w-3.5 ${isLocked ? 'text-amber-500 font-bold' : ''}`} />
            </button>

            <button
              onClick={() => bringForward(sectionId, component.id)}
              className={`p-1 rounded-md transition ${
                isSelected
                  ? 'hover:bg-white/20 text-white'
                  : 'hover:bg-slate-200 text-slate-500 hover:text-slate-900'
              }`}
              title="Pindah Layer Ke Atas (Tumpuk Atas / Forward)"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>

            <button
              onClick={() => sendBackward(sectionId, component.id)}
              className={`p-1 rounded-md transition ${
                isSelected
                  ? 'hover:bg-white/20 text-white'
                  : 'hover:bg-slate-200 text-slate-500 hover:text-slate-900'
              }`}
              title="Pindah Layer Ke Bawah (Tumpuk Bawah / Backward)"
            >
              <ArrowDown className="h-3.5 w-3.5" />
            </button>

            <button
              onClick={() => duplicateComponent(sectionId, component.id)}
              className={`p-1 rounded-md transition ${
                isSelected
                  ? 'hover:bg-white/20 text-white'
                  : 'hover:bg-slate-200 text-slate-500 hover:text-slate-900'
              }`}
              title="Duplicate Component"
            >
              <Copy className="h-3.5 w-3.5" />
            </button>

            {!isLocked && (
              <button
                onClick={() => removeComponent(sectionId, component.id)}
                className={`p-1 rounded-md transition ${
                  isSelected
                    ? 'hover:bg-red-500/30 text-red-200 hover:text-white'
                    : 'hover:bg-rose-100 text-rose-500 hover:text-rose-700'
                }`}
                title="Delete Component"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Recursive rendering of nested children */}
      {hasChildren && isExpanded && (
        <div className="space-y-1">
          {component.childrenComponents.map((child) => (
            <LayerItem
              key={child.id}
              component={child}
              sectionId={sectionId}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
