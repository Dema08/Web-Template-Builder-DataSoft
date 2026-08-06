import { ReactNode } from 'react';

export default function BuilderLayout({
  children,
  leftPanel,
  toolbar,
  rightPanel,
  statusBar,
}) {
  return (
    <div className="h-screen flex flex-col bg-slate-100">
      {/* Top Toolbar */}
      {toolbar && (
        <div className="h-14 bg-white border-b border-slate-200 flex items-center px-4 z-20 shrink-0 shadow-sm">
          {toolbar}
        </div>
      )}

      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel */}
        {leftPanel && (
          <div className="w-72 bg-white border-r border-slate-200 overflow-hidden flex flex-col shrink-0">
            {leftPanel}
          </div>
        )}

        {/* Center Canvas */}
        <div className="flex-1 overflow-hidden flex flex-col bg-slate-100">
          {children}
        </div>

        {/* Right Inspector Panel */}
        {rightPanel && (
          <div className="w-80 bg-white border-l border-slate-200 overflow-y-auto shrink-0">
            {rightPanel}
          </div>
        )}
      </div>

      {/* Bottom Status Bar */}
      {statusBar && (
        <div className="h-8 bg-slate-900 text-white flex items-center px-4 text-xs shrink-0">
          {statusBar}
        </div>
      )}
    </div>
  );
}