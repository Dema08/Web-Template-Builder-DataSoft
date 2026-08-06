import { ReactNode } from 'react';

export default function BuilderLayout({
  children,
  sidebar,
  toolbar,
  propertyPanel,
  statusBar,
}) {
  return (
    <div className="h-screen flex flex-col bg-slate-50">
      {/* Top Toolbar */}
      {toolbar && (
        <div className="h-14 bg-white border-b border-slate-200 flex items-center px-4 z-20 shrink-0">
          {toolbar}
        </div>
      )}

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        {sidebar && (
          <div className="w-64 bg-white border-r border-slate-200 overflow-y-auto shrink-0">
            {sidebar}
          </div>
        )}

        {/* Center Canvas */}
        <div className="flex-1 overflow-auto p-6">{children}</div>

        {/* Right Property Panel */}
        {propertyPanel && (
          <div className="w-80 bg-white border-l border-slate-200 overflow-y-auto shrink-0">
            {propertyPanel}
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
