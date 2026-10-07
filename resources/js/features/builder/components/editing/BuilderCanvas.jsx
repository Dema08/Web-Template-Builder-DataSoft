import { useRef } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import SectionCanvas from './SectionCanvas';
import { SnapGuidelines, useSnapEngine } from '../../hooks/useSnapEngine.jsx';

export default function BuilderCanvas({ children }) {
  const { deviceView, sections } = useBuilderStore();
  const canvasRef = useRef(null);
  const { guidelines } = useSnapEngine(canvasRef);

  const getCanvasConfig = () => {
    switch (deviceView) {
      case 'mobile':
        return 'max-w-[390px] builder-canvas-mobile preview-viewport-mobile';
      case 'tablet':
        return 'max-w-[768px] builder-canvas-tablet preview-viewport-tablet';
      case 'desktop':
      default:
        return 'max-w-6xl builder-canvas-desktop preview-viewport-desktop';
    }
  };

  const getWrapperStyle = () => {
    if (deviceView === 'mobile') {
      return 'bg-slate-900 sm:border-[8px] sm:border-slate-900 sm:rounded-[36px] rounded-2xl shadow-2xl overflow-hidden relative transition-all duration-300';
    }
    if (deviceView === 'tablet') {
      return 'bg-slate-900 sm:border-[10px] sm:border-slate-900 sm:rounded-[28px] rounded-2xl shadow-2xl overflow-hidden relative transition-all duration-300';
    }
    return 'bg-white rounded-xl shadow-2xl border border-slate-200 min-h-[500px] overflow-hidden relative transition-all duration-300';
  };

  return (
    <div className="flex-1 overflow-auto bg-slate-200/70 p-1.5 sm:p-4 md:p-6 ds-scrollbar-thin flex justify-center items-start">
      <div
        ref={canvasRef}
        className={`mx-auto w-full ${getCanvasConfig()} transition-all duration-300 relative`}
      >
        {/* Device Notch for Mobile & Tablet (on larger screens) */}
        {deviceView === 'mobile' && (
          <div className="hidden sm:flex w-full bg-slate-900 pt-2 pb-1 justify-center items-center select-none">
            <div className="w-24 h-3.5 bg-slate-950 rounded-full flex items-center justify-between px-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-800"></span>
              <span className="w-1 h-1 rounded-full bg-indigo-900"></span>
            </div>
          </div>
        )}
        {deviceView === 'tablet' && (
          <div className="hidden sm:flex w-full bg-slate-900 pt-2 pb-1 justify-center items-center select-none">
            <div className="w-2.5 h-2.5 bg-slate-950 rounded-full border border-slate-800"></div>
          </div>
        )}

        <div className={getWrapperStyle()}>
          <div className="bg-white min-h-[500px] overflow-hidden relative shadow-inner">
            {children}
            <SnapGuidelines guidelines={guidelines} />
          </div>
        </div>

        {/* Device Home Bar (on larger screens) */}
        {deviceView === 'mobile' && (
          <div className="hidden sm:flex w-full bg-slate-900 py-1.5 justify-center items-center select-none rounded-b-[32px]">
            <div className="w-28 h-1 bg-slate-600 rounded-full"></div>
          </div>
        )}
        {deviceView === 'tablet' && (
          <div className="hidden sm:flex w-full bg-slate-900 py-1.5 justify-center items-center select-none rounded-b-[20px]">
            <div className="w-32 h-1 bg-slate-600 rounded-full"></div>
          </div>
        )}
      </div>
    </div>
  );
}