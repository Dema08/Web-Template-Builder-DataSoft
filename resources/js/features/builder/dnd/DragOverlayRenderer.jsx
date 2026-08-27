import { Layout, Layers, Component, Image as ImageIcon, Sparkles, GripVertical } from 'lucide-react';

export default function DragOverlayRenderer({ activeDragItem }) {
  if (!activeDragItem) return null;

  const { type, data, title, preview } = activeDragItem;

  const renderContent = () => {
    switch (type) {
      case 'sidebar-section':
      case 'section':
        return (
          <div className="flex items-center gap-3 px-4 py-3 bg-white/95 backdrop-blur-md rounded-2xl border-2 border-indigo-500 shadow-2xl shadow-indigo-600/30 min-w-[240px] transform -rotate-1 scale-105">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 text-white flex items-center justify-center shadow-md">
              <Layers className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-extrabold text-indigo-600 uppercase tracking-wider">New Section</div>
              <div className="text-sm font-extrabold text-slate-900">{title || data?.id || 'Section'}</div>
            </div>
            <GripVertical className="h-4 w-4 text-slate-400" />
          </div>
        );

      case 'sidebar-layout':
      case 'layout':
        return (
          <div className="flex items-center gap-3 px-4 py-3 bg-white/95 backdrop-blur-md rounded-2xl border-2 border-indigo-500 shadow-2xl shadow-indigo-600/30 min-w-[240px] transform -rotate-1 scale-105">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center shadow-md">
              <Layout className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="text-[10px] font-extrabold text-purple-600 uppercase tracking-wider">Layout Template</div>
              <div className="text-sm font-extrabold text-slate-900">{title || data?.id || 'Layout'}</div>
            </div>
            <GripVertical className="h-4 w-4 text-slate-400" />
          </div>
        );

      case 'sidebar-component':
      case 'component':
        return (
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white/95 backdrop-blur-md rounded-xl border-2 border-indigo-500 shadow-2xl shadow-indigo-600/25 min-w-[180px] transform rotate-1 scale-105">
            <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs">
              <Component className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <span className="text-xs font-extrabold text-slate-900 block">{title || data?.id || 'Component'}</span>
              <span className="text-[10px] text-indigo-600 font-semibold uppercase">Drop on section</span>
            </div>
          </div>
        );

      case 'sidebar-media':
      case 'media':
        return (
          <div className="flex items-center gap-3 p-2 bg-white/95 backdrop-blur-md rounded-2xl border-2 border-indigo-500 shadow-2xl min-w-[160px] transform scale-105">
            {preview ? (
              <img src={preview} alt="Media preview" className="w-12 h-12 object-cover rounded-xl shadow-xs" />
            ) : (
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <ImageIcon className="h-6 w-6" />
              </div>
            )}
            <div className="flex-1 pr-2">
              <span className="text-xs font-extrabold text-slate-900 block truncate max-w-[120px]">{title || 'Media Asset'}</span>
              <span className="text-[10px] text-indigo-600 font-bold">Image</span>
            </div>
          </div>
        );

      case 'sidebar-icon':
      case 'icon':
        return (
          <div className="flex items-center gap-2 px-3 py-2 bg-white/95 backdrop-blur-md rounded-xl border-2 border-indigo-500 shadow-2xl transform scale-105">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              ★
            </div>
            <span className="text-xs font-extrabold text-slate-900">{title || 'Icon'}</span>
          </div>
        );

      case 'canvas-section':
        return (
          <div className="px-5 py-4 bg-indigo-900/90 backdrop-blur-md text-white rounded-2xl border-2 border-indigo-400 shadow-2xl min-w-[280px] flex items-center justify-between transform -rotate-1 scale-100">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white/10 text-white">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-indigo-300 font-extrabold block">Reordering Section</span>
                <span className="text-sm font-extrabold">{title || `Section (${data?.type})`}</span>
              </div>
            </div>
            <div className="px-2.5 py-1 bg-white/20 rounded-full text-[10px] font-bold">
              Move
            </div>
          </div>
        );

      case 'canvas-component':
        return (
          <div className="px-3.5 py-2 bg-slate-900/90 backdrop-blur-md text-white rounded-xl border border-indigo-400 shadow-2xl flex items-center gap-2 transform rotate-1 scale-100">
            <Sparkles className="h-3.5 w-3.5 text-indigo-300" />
            <span className="text-xs font-bold truncate max-w-[160px]">{title || data?.type || 'Component'}</span>
          </div>
        );

      default:
        return (
          <div className="px-3 py-2 bg-white/95 rounded-xl border border-slate-300 shadow-xl text-xs font-bold text-slate-800">
            {title || 'Dragging item...'}
          </div>
        );
    }
  };

  return (
    <div className="pointer-events-none cursor-grabbing select-none transition-transform">
      {renderContent()}
    </div>
  );
}
