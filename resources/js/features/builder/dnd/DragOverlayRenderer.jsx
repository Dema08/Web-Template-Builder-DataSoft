import * as FaIcons from 'react-icons/fa';
import { Layout, Layers, Component, Image as ImageIcon, Sparkles, GripVertical, CheckCircle2 } from 'lucide-react';

export default function DragOverlayRenderer({ activeDragItem }) {
  if (!activeDragItem) return null;

  const { type, data, title, preview } = activeDragItem;

  const renderContent = () => {
    switch (type) {
      case 'sidebar-section':
      case 'section':
        return (
          <div className="flex items-center gap-3.5 px-4 py-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl border-2 border-indigo-500 shadow-[0_20px_50px_rgba(79,70,229,0.35)] min-w-[260px] transform -rotate-1 scale-105 select-none ring-4 ring-indigo-500/10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <Layers className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                <span className="text-[10px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Bagian Baru</span>
              </div>
              <div className="text-sm font-black text-slate-900 dark:text-white truncate">{title || data?.id || 'Section'}</div>
            </div>
            <div className="p-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400">
              <GripVertical className="h-4 w-4" />
            </div>
          </div>
        );

      case 'sidebar-layout':
      case 'layout':
        return (
          <div className="flex items-center gap-3.5 px-4 py-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl border-2 border-purple-500 shadow-[0_20px_50px_rgba(168,85,247,0.35)] min-w-[260px] transform -rotate-1 scale-105 select-none ring-4 ring-purple-500/10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Layout className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                <span className="text-[10px] font-extrabold text-purple-600 dark:text-purple-400 uppercase tracking-wider">Template Layout</span>
              </div>
              <div className="text-sm font-black text-slate-900 dark:text-white truncate">{title || data?.id || 'Layout'}</div>
            </div>
            <div className="p-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400">
              <GripVertical className="h-4 w-4" />
            </div>
          </div>
        );

      case 'sidebar-component':
      case 'component':
        return (
          <div className="flex items-center gap-3 px-3.5 py-2.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-xl border-2 border-indigo-500 shadow-[0_15px_35px_rgba(79,70,229,0.3)] min-w-[190px] transform rotate-1 scale-105 select-none ring-2 ring-indigo-500/20">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs shadow-xs">
              <Component className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-xs font-black text-slate-900 dark:text-white block truncate">{title || data?.id || 'Component'}</span>
              <span className="text-[9px] text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="h-2.5 w-2.5" />
                Lepaskan di bagian
              </span>
            </div>
          </div>
        );

      case 'sidebar-media':
      case 'media':
        return (
          <div className="flex items-center gap-3 p-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl border-2 border-indigo-500 shadow-[0_20px_45px_rgba(79,70,229,0.3)] min-w-[180px] transform scale-105 select-none">
            {preview ? (
              <img src={preview} alt="Media preview" className="w-12 h-12 object-cover rounded-xl shadow-xs border border-indigo-100" />
            ) : (
              <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 flex items-center justify-center">
                <ImageIcon className="h-6 w-6" />
              </div>
            )}
            <div className="flex-1 pr-2 min-w-0">
              <span className="text-xs font-black text-slate-900 dark:text-white block truncate">{title || 'Media Asset'}</span>
              <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-extrabold uppercase tracking-wide">Gambar / Foto</span>
            </div>
          </div>
        );

      case 'sidebar-icon':
      case 'icon': {
        const iconKey = data?.icon || data?.id || data?.key || 'FaGlobe';
        const IconComponent = FaIcons[iconKey] || FaIcons.FaGlobe;
        return (
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-xl border-2 border-indigo-600 shadow-[0_20px_40px_rgba(79,70,229,0.35)] transform scale-110 select-none">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700 text-white flex items-center justify-center font-bold shadow-md shadow-indigo-600/30">
              <IconComponent className="h-4 w-4" />
            </div>
            <div className="pr-1">
              <span className="text-xs font-black text-slate-900 dark:text-white block">{iconKey.replace('Fa', '')}</span>
              <span className="text-[9px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Ikon Siap Tarik</span>
            </div>
          </div>
        );
      }

      case 'canvas-section':
        return (
          <div className="px-5 py-4 bg-slate-900/95 backdrop-blur-xl text-white rounded-2xl border-2 border-indigo-400 shadow-[0_25px_60px_rgba(0,0,0,0.5)] min-w-[280px] flex items-center justify-between transform -rotate-1 scale-102 select-none ring-4 ring-indigo-500/20">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-600/30 text-indigo-300 border border-indigo-400/30">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-indigo-400 font-black block">Mengatur Urutan Bagian</span>
                <span className="text-sm font-black text-white">{title || `Section (${data?.type})`}</span>
              </div>
            </div>
            <div className="px-2.5 py-1 bg-indigo-600/40 text-indigo-200 border border-indigo-400/40 rounded-full text-[10px] font-black uppercase tracking-wider">
              Pindahkan
            </div>
          </div>
        );

      case 'canvas-component':
        return (
          <div className="px-4 py-2.5 bg-slate-900/95 backdrop-blur-xl text-white rounded-xl border border-indigo-400 shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex items-center gap-2.5 transform rotate-1 scale-102 select-none">
            <Sparkles className="h-4 w-4 text-indigo-300 animate-spin" />
            <span className="text-xs font-black truncate max-w-[170px]">{title || data?.type || 'Elemen'}</span>
          </div>
        );

      default:
        return (
          <div className="px-3.5 py-2.5 bg-white/95 dark:bg-slate-900/95 rounded-xl border border-slate-300 shadow-2xl text-xs font-black text-slate-800 dark:text-white select-none">
            {title || 'Menyeret elemen...'}
          </div>
        );
    }
  };

  return (
    <div className="pointer-events-none cursor-grabbing select-none transition-transform will-change-transform">
      {renderContent()}
    </div>
  );
}

