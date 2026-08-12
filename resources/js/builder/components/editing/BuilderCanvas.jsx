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
        return 'max-w-[375px] builder-canvas-mobile';
      case 'tablet':
        return 'max-w-[768px] builder-canvas-tablet';
      case 'desktop':
      default:
        return 'max-w-6xl builder-canvas-desktop';
    }
  };

  return (
    <div className="flex-1 overflow-auto bg-slate-200/70 p-3 sm:p-6 ds-scrollbar-thin">
      <div
        ref={canvasRef}
        className={`mx-auto ${getCanvasConfig()} transition-all duration-300 relative`}
      >
        <div className="bg-white rounded-xl shadow-2xl border border-slate-200 min-h-[600px] overflow-hidden relative">
          {children}
          <SnapGuidelines guidelines={guidelines} />
        </div>
      </div>
    </div>
  );
}