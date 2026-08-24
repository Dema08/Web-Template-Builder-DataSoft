import { useBuilderStore } from '../../stores/builderStore';
import { X } from 'lucide-react';

export default function BuilderLayout({
  children,
  leftPanel,
  toolbar,
  rightPanel,
  statusBar,
}) {
  const { isLeftPanelOpen, isRightPanelOpen, setLeftPanelOpen, setRightPanelOpen } = useBuilderStore();

  return (
    <div className="h-screen flex flex-col bg-slate-100 overflow-hidden font-sans selection:bg-indigo-600 selection:text-white">
      {/* Top Toolbar */}
      {toolbar && (
        <div className="h-14 bg-white border-b border-slate-200 flex items-center px-3 sm:px-4 z-30 shrink-0 shadow-xs relative">
          {toolbar}
        </div>
      )}

      <div className="flex-1 flex overflow-hidden relative">
        {/* Mobile/Tablet Backdrop Overlay for Left Panel */}
        {leftPanel && isLeftPanelOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 transition-opacity"
            onClick={() => setLeftPanelOpen(false)}
          />
        )}

        {/* Left Panel — Inline on Desktop (>=1024px), Drawer Overlay on Mobile/Tablet (<1024px) */}
        {leftPanel && isLeftPanelOpen && (
          <div className="fixed lg:relative inset-y-0 left-0 z-40 lg:z-10 w-72 sm:w-80 lg:w-72 bg-white border-r border-slate-200 flex flex-col shrink-0 shadow-2xl lg:shadow-none transition-all duration-300">
            {/* Close button for Mobile/Tablet overlay header */}
            <div className="lg:hidden flex items-center justify-between px-4 py-2 border-b border-slate-100 bg-slate-50">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Navigation & Components</span>
              <button
                onClick={() => setLeftPanelOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col">
              {leftPanel}
            </div>
          </div>
        )}

        {/* Center Canvas Workspace */}
        <div className="flex-1 overflow-hidden flex flex-col bg-slate-200/70 min-w-0">
          {children}
        </div>

        {/* Mobile/Tablet Backdrop Overlay for Right Inspector Panel */}
        {rightPanel && isRightPanelOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 transition-opacity"
            onClick={() => setRightPanelOpen(false)}
          />
        )}

        {/* Right Inspector Panel — Inline on Desktop (>=1024px), Drawer Overlay on Mobile/Tablet (<1024px) */}
        {rightPanel && isRightPanelOpen && (
          <div className="fixed lg:relative inset-y-0 right-0 z-40 lg:z-10 w-80 sm:w-96 lg:w-80 bg-white border-l border-slate-200 overflow-y-auto shrink-0 shadow-2xl lg:shadow-none transition-all duration-300">
            {/* Close button for Mobile/Tablet overlay header */}
            <div className="lg:hidden flex items-center justify-between px-4 py-2 border-b border-slate-100 bg-slate-50">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Properties & Inspector</span>
              <button
                onClick={() => setRightPanelOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            {rightPanel}
          </div>
        )}
      </div>

      {/* Bottom Status Bar */}
      {statusBar && (
        <div className="h-8 bg-slate-900 text-white flex items-center px-4 text-xs shrink-0 z-30">
          {statusBar}
        </div>
      )}
    </div>
  );
}