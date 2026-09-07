import { Layers, Lock, Eye, EyeOff, ArrowUp, ArrowDown, ChevronsUp, ChevronsDown, Trash2 } from 'lucide-react';
import { useLayerActions } from './useLayerActions';
import { useBuilderStore } from '../../stores/builderStore';

export default function LayerItem({ component, sectionId, index }) {
  const actions = useLayerActions(sectionId);
  const isSelected = useBuilderStore(state => state.selectedComponentId === component.id);
  const isLocked = !!(component.isLocked || component.position?.locked);
  const isHidden = !!(component.isHidden || component.position?.hidden);

  return (
    <div
      onClick={() => actions.handleSelect(component.id)}
      className={`group flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all cursor-pointer border ${
        isHidden ? 'opacity-50 bg-slate-100/60' : ''
      } ${
        isSelected
          ? 'bg-indigo-50/80 border-indigo-200 text-indigo-900 font-bold shadow-xs'
          : 'bg-white border-slate-100 hover:border-slate-200 text-slate-700 hover:bg-slate-50'
      }`}
    >
      <div className="flex items-center gap-2 truncate">
        <span className="w-5 h-5 rounded-md bg-slate-100 text-slate-500 flex items-center justify-center text-[10px] font-mono shrink-0">
          {index + 1}
        </span>
        <span className="truncate capitalize font-medium">
          {component.type} <span className="text-[10px] text-slate-400 font-mono">({component.id.slice(-4)})</span>
        </span>
      </div>

      <div className="flex items-center gap-1 opacity-85 group-hover:opacity-100 shrink-0" onClick={e => e.stopPropagation()}>
        <button
          onClick={() => actions.handleToggleVisibility(component.id)}
          className={`p-1 rounded-md hover:bg-slate-200 transition-colors ${isHidden ? 'text-rose-500 font-bold' : 'text-slate-400'}`}
          title={isHidden ? 'Show component' : 'Hide component'}
        >
          {isHidden ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
        </button>

        <button
          onClick={() => actions.handleToggleLock(component.id)}
          className={`p-1 rounded-md hover:bg-slate-200 transition-colors ${isLocked ? 'text-amber-500 font-bold' : 'text-slate-400'}`}
          title={isLocked ? 'Unlock component' : 'Lock component'}
        >
          <Lock className="h-3.5 w-3.5" />
        </button>

        <div className="h-3 w-[1px] bg-slate-200 mx-0.5" />

        <button
          onClick={() => actions.handleBringToFront(component.id)}
          className="p-1 rounded-md hover:bg-slate-200 text-slate-500 transition-colors"
          title="Bring to Front"
        >
          <ChevronsUp className="h-3.5 w-3.5" />
        </button>

        <button
          onClick={() => actions.handleBringForward(component.id)}
          className="p-1 rounded-md hover:bg-slate-200 text-slate-500 transition-colors"
          title="Bring Forward"
        >
          <ArrowUp className="h-3.5 w-3.5" />
        </button>

        <button
          onClick={() => actions.handleSendBackward(component.id)}
          className="p-1 rounded-md hover:bg-slate-200 text-slate-500 transition-colors"
          title="Send Backward"
        >
          <ArrowDown className="h-3.5 w-3.5" />
        </button>

        <button
          onClick={() => actions.handleSendToBack(component.id)}
          className="p-1 rounded-md hover:bg-slate-200 text-slate-500 transition-colors"
          title="Send to Back"
        >
          <ChevronsDown className="h-3.5 w-3.5" />
        </button>

        {!isLocked && (
          <button
            onClick={() => actions.handleDelete(component.id)}
            className="p-1 rounded-md hover:bg-rose-50 text-slate-400 hover:text-rose-600 transition-colors ml-1"
            title="Delete component"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
