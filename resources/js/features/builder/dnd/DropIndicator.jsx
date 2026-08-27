import { Sparkles } from 'lucide-react';

/**
 * DropIndicator Component
 * Renders a glowing Canva-style insertion line with an optional centered badge.
 *
 * @param {Object} props
 * @param {string} [props.label] - Optional text label (e.g. "Insert Here")
 * @param {'horizontal' | 'vertical'} [props.orientation='horizontal']
 * @param {boolean} [props.active=true]
 * @param {string} [props.className='']
 */
export default function DropIndicator({
  label = 'Insert Here',
  orientation = 'horizontal',
  active = true,
  className = '',
}) {
  if (!active) return null;

  if (orientation === 'vertical') {
    return (
      <div className={`relative flex items-center justify-center pointer-events-none z-50 ${className}`}>
        <div className="w-1.5 h-full bg-gradient-to-b from-indigo-500 via-blue-500 to-indigo-600 rounded-full shadow-[0_0_12px_rgba(99,102,241,0.8)] animate-pulse" />
      </div>
    );
  }

  return (
    <div className={`relative w-full my-1.5 flex items-center justify-center pointer-events-none z-50 ${className}`}>
      {/* Glowing Line */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-indigo-600 to-transparent rounded-full shadow-[0_0_12px_rgba(99,102,241,0.85)] animate-pulse" />
      
      {/* Centered Pill Badge */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 bg-indigo-600 text-white text-[11px] font-extrabold rounded-full shadow-lg shadow-indigo-600/40 border border-white/20 scale-95 hover:scale-100 transition-transform">
        <Sparkles className="h-3 w-3 animate-spin text-indigo-200" style={{ animationDuration: '3s' }} />
        <span>{label}</span>
      </div>
    </div>
  );
}
