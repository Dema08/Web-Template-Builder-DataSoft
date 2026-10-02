import { useRef, useState } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import { ImageIcon, Upload, Sparkles, SlidersHorizontal } from 'lucide-react';

const DEFAULT_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1000&auto=format&fit=crop&q=80';

export default function Image({
  src = '',
  alt = 'Image',
  width = '100%',
  height = 'auto',
  aspectRatio = 'auto',
  objectFit = 'cover',
  objectPosition = 'center',
  borderRadius = '0',
  shadow = 'none',
  opacity = 100,
  brightness = 100,
  contrast = 100,
  blur = 0,
  borderWidth = '0',
  borderColor = '#e5e7eb',
  borderStyle = 'solid',
  hoverEffect = 'none',
  componentId = null,
  sectionId = null,
}) {
  const { updateComponentProps, selectComponent, setRightPanelOpen, isPreviewMode, selectedComponentId } = useBuilderStore();
  const fileInputRef = useRef(null);
  const [imgError, setImgError] = useState(false);

  const isSelected = selectedComponentId === componentId;

  const shadowStyles = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
  };

  const hoverStyles = {
    none: '',
    lift: 'hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300',
    scale: 'hover:scale-[1.03] hover:shadow-xl transition-all duration-300',
    glow: 'hover:ring-4 hover:ring-indigo-400/40 hover:shadow-2xl transition-all duration-300',
    grayscale: 'grayscale hover:grayscale-0 transition-all duration-500',
  };

  const hasBorder = borderWidth && borderWidth !== '0' && borderWidth !== '0px';

  // Build CSS filters
  const filterParts = [];
  if (brightness !== undefined && brightness !== 100) filterParts.push(`brightness(${brightness}%)`);
  if (contrast !== undefined && contrast !== 100) filterParts.push(`contrast(${contrast}%)`);
  if (blur && blur > 0) filterParts.push(`blur(${blur}px)`);
  const filterStyle = filterParts.length > 0 ? filterParts.join(' ') : undefined;

  const style = {
    objectFit: objectFit || 'cover',
    objectPosition: objectPosition || 'center',
    aspectRatio: aspectRatio && aspectRatio !== 'auto' ? aspectRatio : undefined,
    borderRadius: borderRadius || '0',
    opacity: typeof opacity === 'number' ? opacity / 100 : (parseInt(opacity) / 100 || 1),
    width: width || '100%',
    maxWidth: '100%',
    height: height || 'auto',
    borderWidth: hasBorder ? borderWidth : '0px',
    borderColor: hasBorder ? (borderColor || '#e5e7eb') : 'transparent',
    borderStyle: hasBorder ? (borderStyle || 'solid') : 'none',
    filter: filterStyle,
  };

  const effectiveSrc = (imgError || !src || src.trim() === '') ? DEFAULT_FALLBACK_IMAGE : src;

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file || !sectionId || !componentId || isPreviewMode) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setImgError(false);
      updateComponentProps(sectionId, componentId, { src: event.target.result });
    };
    reader.readAsDataURL(file);
  };

  const handleImageClick = (e) => {
    if (isPreviewMode) return;
    e.stopPropagation();
    if (componentId && sectionId) {
      selectComponent(componentId, sectionId);
      setRightPanelOpen(true);
    }
  };

  if (isPreviewMode) {
    return (
      <div className="relative pointer-events-none select-none overflow-hidden max-w-full" style={{ borderRadius: borderRadius || '0' }}>
        <img
          src={effectiveSrc}
          alt={alt || 'Image'}
          style={style}
          className={`${shadowStyles[shadow] || ''} ${hoverStyles[hoverEffect] || ''} transition-all duration-300`}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative group cursor-pointer overflow-hidden max-w-full ${isSelected ? 'ring-2 ring-indigo-500 ring-offset-2' : ''}`}
      style={{ borderRadius: borderRadius || '0' }}
      onClick={handleImageClick}
    >
      <img
        src={effectiveSrc}
        alt={alt || 'Image'}
        style={style}
        onError={() => setImgError(true)}
        className={`${shadowStyles[shadow] || ''} ${hoverStyles[hoverEffect] || ''} bg-slate-800/10 transition-all duration-300 block`}
      />

      {/* Quick Action Floating Controls on Hover */}
      <div className="absolute top-2 right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-auto">
        <button
          type="button"
          title="Upload / Ganti Gambar dari Komputer"
          onClick={(e) => {
            e.stopPropagation();
            if (componentId && sectionId) {
              selectComponent(componentId, sectionId);
              setRightPanelOpen(true);
            }
            fileInputRef.current?.click();
          }}
          className="p-1.5 bg-slate-950/85 hover:bg-indigo-600 text-white rounded-lg shadow-lg border border-white/20 backdrop-blur-md transition-colors cursor-pointer text-xs flex items-center gap-1 font-bold"
        >
          <Upload className="w-3.5 h-3.5" />
          <span className="text-[10px]">Upload</span>
        </button>
        <button
          type="button"
          title="Buka Pengaturan Gambar di Right Inspector"
          onClick={(e) => {
            e.stopPropagation();
            if (componentId && sectionId) {
              selectComponent(componentId, sectionId);
              setRightPanelOpen(true);
            }
          }}
          className="p-1.5 bg-slate-950/85 hover:bg-indigo-600 text-white rounded-lg shadow-lg border border-white/20 backdrop-blur-md transition-colors cursor-pointer text-xs flex items-center gap-1 font-bold"
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span className="text-[10px]">Edit</span>
        </button>
      </div>

      {/* Center Label on Empty/Fallback */}
      {(!src || src.trim() === '') && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/50 backdrop-blur-xs text-white p-4 text-center pointer-events-none">
          <ImageIcon className="w-8 h-8 text-indigo-400 mb-1 animate-pulse" />
          <span className="text-xs font-bold text-white">Gambar Hero / Konten</span>
          <span className="text-[10px] text-slate-300">Klik untuk atur gambar di Right Inspector</span>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileUpload}
      />
    </div>
  );
}