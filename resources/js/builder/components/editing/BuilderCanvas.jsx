import { useRef } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import SectionCanvas from './SectionCanvas';
import { SnapGuidelines, useSnapEngine } from '../../hooks/useSnapEngine.jsx';

export default function BuilderCanvas({ children }) {
  const { deviceView, sections } = useBuilderStore();
  const canvasRef = useRef(null);
  const { guidelines } = useSnapEngine(canvasRef);

  const getCanvasWidth = () => {
    switch (deviceView) {
      case 'mobile':
        return 'max-w-[375px]';
      case 'tablet':
        return 'max-w-[768px]';
      case 'desktop':
      default:
        return 'max-w-6xl';
    }
  };

  return (
    <div className="flex-1 overflow-auto bg-slate-200/70 p-6">
      <div
        ref={canvasRef}
        className={`mx-auto ${getCanvasWidth()} transition-all duration-300 relative`}
      >
        <div className="bg-white rounded-xl shadow-2xl border border-slate-200 min-h-[600px] overflow-hidden relative">
          {children}
          <SnapGuidelines guidelines={guidelines} />
        </div>
      </div>
    </div>
  );
}