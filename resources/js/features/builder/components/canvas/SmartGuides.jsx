export default function SmartGuides({ guides = [] }) {
  if (!Array.isArray(guides) || guides.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-[9999] overflow-visible">
      {guides.map((guide, index) => {
        let lineColor = 'bg-rose-600';
        let lineStyle = 'solid';

        if (guide.type === 'section-center') {
          lineColor = 'bg-blue-500'; // Blue for section center
        } else if (guide.type === 'section-edge') {
          lineColor = 'bg-slate-400 border-dashed border-slate-400'; // Dashed gray for section edges
        } else if (guide.type === 'spacing') {
          lineColor = 'bg-pink-500'; // Pink for equal spacing
        } else if (guide.type === 'size') {
          lineColor = 'bg-amber-500'; // Amber/Yellow for equal size
        }

        if (guide.subtype === 'vertical') {
          return (
            <div
              key={`guide-v-${index}`}
              className={`absolute top-[-500px] bottom-[-500px] w-[2px] ${lineColor} shadow-md`}
              style={{ left: `${guide.position}px` }}
            />
          );
        } else if (guide.subtype === 'horizontal') {
          return (
            <div
              key={`guide-h-${index}`}
              className={`absolute left-[-500px] right-[-500px] h-[2px] ${lineColor} shadow-md`}
              style={{ top: `${guide.position}px` }}
            />
          );
        }
        return null;
      })}
    </div>
  );
}
