import { useState, useEffect, useRef } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import { useMediaStore } from '../../stores/mediaStore';
import {
  BACKGROUND_IMAGES,
  BACKGROUND_IMAGE_CATEGORIES,
  BACKGROUND_VIDEO_PRESETS
} from '../../data/backgroundPresets';
import { getComponentConfig } from '../../engine/componentRegistry';
import { getPropertyConfig } from '../../engine/propertyEngine';
import {
  Type,
  AlignLeft,
  Palette,
  Square,
  Frame,
  Sun,
  Play,
  Move,
  Maximize,
  MousePointer,
  Trash2,
  RotateCcw,
  RectangleHorizontal,
  Image as ImageIcon,
  Video,
  Upload,
  Layers,
  Sparkles,
  Search,
  Check,
  RefreshCw,
  SlidersHorizontal,
  X
} from 'lucide-react';
import { toast } from '@store';

const FONT_FAMILIES = [
  { value: 'Inter', label: 'Inter' },
  { value: 'Poppins', label: 'Poppins' },
  { value: 'Roboto', label: 'Roboto' },
  { value: 'Open Sans', label: 'Open Sans' },
  { value: 'Montserrat', label: 'Montserrat' },
  { value: 'Lato', label: 'Lato' },
  { value: 'Playfair Display', label: 'Playfair Display' },
  { value: 'sans-serif', label: 'Sans Serif' },
  { value: 'serif', label: 'Serif' },
  { value: 'monospace', label: 'Monospace' },
];

const COMPONENT_TABS = [
  { id: 'content', label: 'Content', icon: Type },
  { id: 'typography', label: 'Typography', icon: Type },
  { id: 'color', label: 'Colors', icon: Palette },
  { id: 'spacing', label: 'Spacing', icon: Square },
  { id: 'position', label: 'Position', icon: Move },
  { id: 'border', label: 'Border', icon: RectangleHorizontal },
  { id: 'shadow', label: 'Shadow', icon: Sun },
  { id: 'animation', label: 'Animation', icon: RotateCcw },
];

export default function RightInspector() {
  const [activeTab, setActiveTab] = useState('content');
  const { addUpload } = useMediaStore();
  const {
    sections,
    selectedSectionId,
    selectedComponentId,
    updateComponentProps,
    updateComponentPosition,
    removeComponent,
    updateSectionBackground,
  } = useBuilderStore();
  
  const [formValues, setFormValues] = useState({});
  const [positionValues, setPositionValues] = useState({
    x: 0,
    y: 0,
    width: '',
    height: '',
    rotation: 0,
    scale: 1,
    zIndex: 1,
  });

  const inspectorImgInputRef = useRef(null);
  const inspectorVidInputRef = useRef(null);

  // Inspector Section Background state
  const [selectedImgCategory, setSelectedImgCategory] = useState('all');
  const [searchImgQuery, setSearchImgQuery] = useState('');
  const [isDraggingImage, setIsDraggingImage] = useState(false);
  const [isDraggingVideo, setIsDraggingVideo] = useState(false);

  const selectedSection = sections.find(s => s.id === selectedSectionId);

  const findComponentInTree = (components, targetId) => {
    if (!Array.isArray(components)) return null;
    for (const c of components) {
      if (c.id === targetId) return c;
      if (Array.isArray(c.childrenComponents) && c.childrenComponents.length > 0) {
        const found = findComponentInTree(c.childrenComponents, targetId);
        if (found) return found;
      }
    }
    return null;
  };

  const selectedComponent = selectedSection ? findComponentInTree(selectedSection.components, selectedComponentId) : null;
  const componentConfig = selectedComponent ? getComponentConfig(selectedComponent.type) : null;
  const propertyConfig = selectedComponent ? getPropertyConfig(selectedComponent.type) : null;

  // Active section background configuration with safe fallbacks
  const bgConfig = selectedSection?.background || {
    type: 'none',
    color: { hex: '#ffffff', opacity: 100 },
    gradient: { type: 'linear', angle: 90, stops: [{ color: '#4f46e5', position: 0 }, { color: '#ec4899', position: 100 }] },
    image: { url: '', position: 'center', size: 'cover', repeat: 'no-repeat', attachment: 'scroll' },
    video: { url: '', autoplay: true, loop: true, muted: true },
    overlay: { color: '#000000', opacity: 0, blendMode: 'normal' },
    filters: { blur: 0, brightness: 100, contrast: 100, saturation: 100 },
  };

  /**
   * Helper: Apply real-time live background changes immediately
   */
  const applyLiveBackground = (updater) => {
    if (!selectedSectionId) return;
    const current = {
      type: bgConfig.type || 'none',
      color: { hex: '#ffffff', opacity: 100, ...(bgConfig.color || {}) },
      gradient: {
        type: 'linear',
        angle: 90,
        stops: [{ color: '#4f46e5', position: 0 }, { color: '#ec4899', position: 100 }],
        ...(bgConfig.gradient || {})
      },
      image: { url: '', position: 'center', size: 'cover', repeat: 'no-repeat', attachment: 'scroll', ...(bgConfig.image || {}) },
      video: { url: '', autoplay: true, loop: true, muted: true, ...(bgConfig.video || {}) },
      overlay: { color: '#000000', opacity: 0, blendMode: 'normal', ...(bgConfig.overlay || {}) },
      filters: { blur: 0, brightness: 100, contrast: 100, saturation: 100, ...(bgConfig.filters || {}) },
    };

    const newConfig = typeof updater === 'function' ? updater(current) : { ...current, ...updater };
    updateSectionBackground(selectedSectionId, newConfig);
  };

  // Sync component form values
  useEffect(() => {
    if (selectedComponent) {
      const defaults = {};
      Object.entries(propertyConfig?.props || {}).forEach(([key, config]) => {
        defaults[key] = selectedComponent.props[key] ?? config.default;
      });
      const position = selectedComponent.position || {};
      defaults.x = position.x || 0;
      defaults.y = position.y || 0;
      defaults.width = position.width || '';
      defaults.height = position.height || '';
      defaults.rotation = position.rotation || 0;
      defaults.scale = position.scale || 1;
      defaults.zIndex = position.zIndex || 1;
      setFormValues(defaults);

      if (selectedComponent.position) {
        setPositionValues({
          x: selectedComponent.position.x || 0,
          y: selectedComponent.position.y || 0,
          width: selectedComponent.position.width || '',
          height: selectedComponent.position.height || '',
          rotation: selectedComponent.position.rotation || 0,
          scale: selectedComponent.position.scale || 1,
          zIndex: selectedComponent.position.zIndex || 1,
        });
      }
    } else {
      setFormValues({});
      setPositionValues({ x: 0, y: 0, width: '', height: '', rotation: 0, scale: 1, zIndex: 1 });
    }
  }, [selectedComponent?.id, selectedComponentId]);

  const handleChange = (key, value) => {
    const newValues = { ...formValues, [key]: value };
    setFormValues(newValues);

    if (selectedSectionId && selectedComponentId) {
      updateComponentProps(selectedSectionId, selectedComponentId, { [key]: value });
    }
  };

  const handleDelete = () => {
    if (selectedSectionId && selectedComponentId) {
      if (selectedComponent?.isLocked) return;
      removeComponent(selectedSectionId, selectedComponentId);
    }
  };

  // Handle local image file upload live
  const handleImageUpload = (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file (PNG, JPG, WEBP, SVG)', 'Invalid File');
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      applyLiveBackground(curr => ({
        ...curr,
        type: 'image',
        image: { ...curr.image, url: dataUrl, fileName: file.name }
      }));
      addUpload({
        name: file.name,
        url: dataUrl,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        type: 'image'
      });
      toast.success(`Image "${file.name}" applied as background!`, 'Background Image');
    };
    reader.readAsDataURL(file);
  };

  // Handle local video file upload live
  const handleVideoUpload = (file) => {
    if (!file) return;
    if (!file.type.startsWith('video/')) {
      toast.error('Please upload a video file (MP4, WebM)', 'Invalid File');
      return;
    }
    if (file.size > 50 * 1024 * 1024) {
      toast.error('Video size should be less than 50MB for optimal performance', 'File Too Large');
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      applyLiveBackground(curr => ({
        ...curr,
        type: 'video',
        video: { ...curr.video, url: dataUrl, fileName: file.name }
      }));
      addUpload({
        name: file.name,
        url: dataUrl,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        type: 'video'
      });
      toast.success(`Video "${file.name}" applied as background!`, 'Background Video');
    };
    reader.readAsDataURL(file);
  };

  // Filtered background images
  const filteredImages = BACKGROUND_IMAGES.filter(img => {
    const matchesCategory = selectedImgCategory === 'all' || img.category === selectedImgCategory;
    const matchesSearch = !searchImgQuery || img.title.toLowerCase().includes(searchImgQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // If no component selected AND no section selected
  if (!selectedComponent && !selectedSection) {
    return (
      <div className="h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
              <Move className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-2">Select a Section or Component</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Click on any section or component in the canvas to edit properties & background in real-time
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // SECTION SELECTED -> LIVE BACKGROUND STUDIO
  // ==========================================
  if (!selectedComponent && selectedSection) {
    const currentType = bgConfig.type || 'none';

    return (
      <div className="h-full flex flex-col bg-white">
        {/* Hidden inputs for uploads */}
        <input
          ref={inspectorImgInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => handleImageUpload(e.target.files?.[0])}
          className="hidden"
        />
        <input
          ref={inspectorVidInputRef}
          type="file"
          accept="video/mp4,video/webm,video/ogg"
          onChange={(e) => handleVideoUpload(e.target.files?.[0])}
          className="hidden"
        />

        {/* Section Header Tab Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-50/70">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg">
              <Palette className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-xs font-extrabold text-slate-900">Section Background</h3>
              <p className="text-[10px] text-slate-500">Live Real-time Editing</p>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 bg-indigo-100/70 text-indigo-700 rounded-md font-bold uppercase">
            {selectedSection.type}
          </span>
        </div>

        {/* Section Background Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5 ds-scrollbar-thin">

          {/* 1. Background Type Selection (Auto-Apply on click) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">Background Type</label>
              {currentType !== 'none' && (
                <button
                  type="button"
                  onClick={() => applyLiveBackground({ type: 'none' })}
                  className="text-[10px] text-red-500 hover:text-red-700 font-bold flex items-center gap-1 transition"
                >
                  <RefreshCw className="h-2.5 w-2.5" />
                  <span>Reset / Clear</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-5 gap-1">
              {[
                { id: 'none', label: 'None', icon: X },
                { id: 'color', label: 'Color', icon: Palette },
                { id: 'gradient', label: 'Grad', icon: SlidersHorizontal },
                { id: 'image', label: 'Image', icon: ImageIcon },
                { id: 'video', label: 'Video', icon: Video },
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => applyLiveBackground({ type: t.id })}
                  className={`py-2 px-1 text-xs font-bold rounded-xl border flex flex-col items-center gap-1 transition-all ${
                    currentType === t.id
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs scale-100 ring-2 ring-indigo-300'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <t.icon className="h-3.5 w-3.5" />
                  <span className="text-[10px]">{t.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. SOLID COLOR CONTROLS                                  */}
          {/* ========================================================= */}
          {currentType === 'color' && (
            <div className="space-y-4 p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200 shadow-xs">
              <h4 className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                <Palette className="h-3.5 w-3.5 text-indigo-600" />
                <span>Solid Color Settings</span>
              </h4>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Color Picker & Hex</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={bgConfig.color?.hex || '#ffffff'}
                    onChange={(e) => applyLiveBackground(curr => ({
                      ...curr,
                      color: { ...curr.color, hex: e.target.value }
                    }))}
                    className="w-10 h-9 rounded-xl border border-slate-200 cursor-pointer p-0.5 bg-white shadow-xs"
                  />
                  <input
                    type="text"
                    value={bgConfig.color?.hex || '#ffffff'}
                    onChange={(e) => applyLiveBackground(curr => ({
                      ...curr,
                      color: { ...curr.color, hex: e.target.value }
                    }))}
                    className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-800"
                    placeholder="#ffffff"
                  />
                </div>
              </div>

              {/* Popular Swatches */}
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1.5">Quick Swatches</label>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    '#ffffff', '#f8fafc', '#f1f5f9', '#0f172a', '#1e1b4b',
                    '#4f46e5', '#2563eb', '#0ea5e9', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#8b5cf6'
                  ].map(cHex => (
                    <button
                      key={cHex}
                      type="button"
                      onClick={() => applyLiveBackground(curr => ({
                        ...curr,
                        color: { ...curr.color, hex: cHex }
                      }))}
                      className={`w-6 h-6 rounded-lg border shadow-2xs transition hover:scale-110 ${
                        bgConfig.color?.hex?.toLowerCase() === cHex.toLowerCase() ? 'ring-2 ring-indigo-500 scale-110 border-indigo-600' : 'border-slate-300'
                      }`}
                      style={{ backgroundColor: cHex }}
                      title={cHex}
                    />
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[11px] font-bold text-slate-600">Color Opacity</label>
                  <span className="text-[11px] font-mono font-bold text-indigo-600">{bgConfig.color?.opacity ?? 100}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={bgConfig.color?.opacity ?? 100}
                  onChange={(e) => applyLiveBackground(curr => ({
                    ...curr,
                    color: { ...curr.color, opacity: parseInt(e.target.value) }
                  }))}
                  className="w-full accent-indigo-600"
                />
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* 3. GRADIENT CONTROLS                                     */}
          {/* ========================================================= */}
          {currentType === 'gradient' && (
            <div className="space-y-4 p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200 shadow-xs">
              <h4 className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                <SlidersHorizontal className="h-3.5 w-3.5 text-indigo-600" />
                <span>Multi Gradient Settings</span>
              </h4>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Color 1 (Start)</label>
                  <div className="flex items-center gap-1.5">
                    <input
                      type="color"
                      value={bgConfig.gradient?.stops?.[0]?.color || '#4f46e5'}
                      onChange={(e) => {
                        const stops = [...(bgConfig.gradient?.stops || [{ color: '#4f46e5', position: 0 }, { color: '#ec4899', position: 100 }])];
                        stops[0] = { ...stops[0], color: e.target.value };
                        applyLiveBackground(curr => ({
                          ...curr,
                          gradient: { ...curr.gradient, stops }
                        }));
                      }}
                      className="w-8 h-8 rounded-lg border border-slate-200 cursor-pointer p-0.5 bg-white shadow-xs"
                    />
                    <input
                      type="text"
                      value={bgConfig.gradient?.stops?.[0]?.color || '#4f46e5'}
                      onChange={(e) => {
                        const stops = [...(bgConfig.gradient?.stops || [{ color: '#4f46e5', position: 0 }, { color: '#ec4899', position: 100 }])];
                        stops[0] = { ...stops[0], color: e.target.value };
                        applyLiveBackground(curr => ({
                          ...curr,
                          gradient: { ...curr.gradient, stops }
                        }));
                      }}
                      className="flex-1 px-2 py-1.5 bg-white border border-slate-200 rounded-lg text-[11px] font-mono font-bold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Color 2 (End)</label>
                  <div className="flex items-center gap-1.5">
                    <input
                      type="color"
                      value={bgConfig.gradient?.stops?.[1]?.color || '#ec4899'}
                      onChange={(e) => {
                        const stops = [...(bgConfig.gradient?.stops || [{ color: '#4f46e5', position: 0 }, { color: '#ec4899', position: 100 }])];
                        stops[1] = { ...stops[1], color: e.target.value };
                        applyLiveBackground(curr => ({
                          ...curr,
                          gradient: { ...curr.gradient, stops }
                        }));
                      }}
                      className="w-8 h-8 rounded-lg border border-slate-200 cursor-pointer p-0.5 bg-white shadow-xs"
                    />
                    <input
                      type="text"
                      value={bgConfig.gradient?.stops?.[1]?.color || '#ec4899'}
                      onChange={(e) => {
                        const stops = [...(bgConfig.gradient?.stops || [{ color: '#4f46e5', position: 0 }, { color: '#ec4899', position: 100 }])];
                        stops[1] = { ...stops[1], color: e.target.value };
                        applyLiveBackground(curr => ({
                          ...curr,
                          gradient: { ...curr.gradient, stops }
                        }));
                      }}
                      className="flex-1 px-2 py-1.5 bg-white border border-slate-200 rounded-lg text-[11px] font-mono font-bold"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-[11px] font-bold text-slate-600">Gradient Angle</label>
                  <span className="text-[11px] font-mono font-bold text-indigo-600">{bgConfig.gradient?.angle ?? 90}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={bgConfig.gradient?.angle ?? 90}
                  onChange={(e) => applyLiveBackground(curr => ({
                    ...curr,
                    gradient: { ...curr.gradient, angle: parseInt(e.target.value) }
                  }))}
                  className="w-full accent-indigo-600"
                />
              </div>

              {/* Gradient Presets */}
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1.5">Preset Gradient Swatches</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { name: 'Indigo Silk', c1: '#4f46e5', c2: '#ec4899', angle: 135 },
                    { name: 'Cyber Blue', c1: '#2563eb', c2: '#06b6d4', angle: 90 },
                    { name: 'Dark Space', c1: '#0f172a', c2: '#1e1b4b', angle: 180 },
                    { name: 'Sunset Glow', c1: '#f97316', c2: '#ec4899', angle: 45 },
                    { name: 'Emerald Wave', c1: '#059669', c2: '#10b981', angle: 120 },
                    { name: 'Royal Purple', c1: '#7c3aed', c2: '#3b82f6', angle: 90 },
                  ].map(g => (
                    <button
                      key={g.name}
                      type="button"
                      onClick={() => applyLiveBackground(curr => ({
                        ...curr,
                        gradient: {
                          angle: g.angle,
                          stops: [{ color: g.c1, position: 0 }, { color: g.c2, position: 100 }]
                        }
                      }))}
                      className="h-8 rounded-lg border border-white shadow-2xs hover:scale-105 transition"
                      style={{ background: `linear-gradient(${g.angle}deg, ${g.c1}, ${g.c2})` }}
                      title={g.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* 4. IMAGE CONTROLS & UPLOAD (LIVE)                        */}
          {/* ========================================================= */}
          {currentType === 'image' && (
            <div className="space-y-4 p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                  <ImageIcon className="h-3.5 w-3.5 text-indigo-600" />
                  <span>Image Background & Upload</span>
                </h4>
              </div>

              {/* Upload Image Dropzone & Button */}
              <div
                onDragOver={(e) => { e.preventDefault(); setIsDraggingImage(true); }}
                onDragLeave={() => setIsDraggingImage(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setIsDraggingImage(false);
                  handleImageUpload(e.dataTransfer.files?.[0]);
                }}
                onClick={() => inspectorImgInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-3.5 text-center cursor-pointer transition-all ${
                  isDraggingImage
                    ? 'border-indigo-600 bg-indigo-50/70 scale-[1.01]'
                    : 'border-slate-300 hover:border-indigo-400 bg-white'
                }`}
              >
                <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-1">
                  <Upload className="h-4 w-4" />
                </div>
                <p className="text-xs font-bold text-slate-700">
                  Upload Image from Device
                </p>
                <p className="text-[10px] text-slate-400">
                  Drag & drop or click (PNG, JPG, WEBP)
                </p>
              </div>

              {/* Direct URL Input */}
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Image URL</label>
                <input
                  type="text"
                  placeholder="https://images.unsplash.com/..."
                  value={bgConfig.image?.url || ''}
                  onChange={(e) => applyLiveBackground(curr => ({
                    ...curr,
                    image: { ...curr.image, url: e.target.value }
                  }))}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono text-slate-800"
                />
              </div>

              {/* Category Pills & Search */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-bold text-slate-600">Curated Presets Library</label>
                </div>

                <div className="relative">
                  <Search className="h-3 w-3 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search images..."
                    value={searchImgQuery}
                    onChange={(e) => setSearchImgQuery(e.target.value)}
                    className="w-full pl-7 pr-3 py-1 bg-white border border-slate-200 rounded-lg text-[11px]"
                  />
                </div>

                <div className="flex items-center gap-1 overflow-x-auto pb-1 ds-scrollbar-thin">
                  {BACKGROUND_IMAGE_CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedImgCategory(cat.id)}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap transition ${
                        selectedImgCategory === cat.id
                          ? 'bg-indigo-600 text-white shadow-2xs'
                          : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Grid Thumbnails (Instant Live Apply on click) */}
                <div className="grid grid-cols-3 gap-1.5 max-h-40 overflow-y-auto pr-0.5 ds-scrollbar-thin">
                  {filteredImages.map(img => {
                    const isSelected = bgConfig.image?.url === img.url;
                    return (
                      <button
                        key={img.id}
                        type="button"
                        onClick={() => applyLiveBackground(curr => ({
                          ...curr,
                          type: 'image',
                          image: { ...curr.image, url: img.url }
                        }))}
                        className={`aspect-video rounded-lg overflow-hidden border-2 relative group transition-all ${
                          isSelected
                            ? 'border-indigo-600 ring-2 ring-indigo-400 scale-[1.02]'
                            : 'border-slate-200 hover:border-indigo-400'
                        }`}
                      >
                        <img src={img.thumbnail} alt={img.title} className="w-full h-full object-cover" loading="lazy" />
                        {isSelected && (
                          <div className="absolute top-1 right-1 w-4 h-4 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-xs">
                            <Check className="h-2.5 w-2.5" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Fit & Position */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div>
                  <label className="block text-[10px] font-bold text-slate-600 mb-1">Fit Size</label>
                  <select
                    value={bgConfig.image?.size || 'cover'}
                    onChange={(e) => applyLiveBackground(curr => ({
                      ...curr,
                      image: { ...curr.image, size: e.target.value }
                    }))}
                    className="w-full px-2 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold"
                  >
                    <option value="cover">Cover (Fill)</option>
                    <option value="contain">Contain</option>
                    <option value="auto">Auto</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-600 mb-1">Attachment</label>
                  <select
                    value={bgConfig.image?.attachment || 'scroll'}
                    onChange={(e) => applyLiveBackground(curr => ({
                      ...curr,
                      image: { ...curr.image, attachment: e.target.value }
                    }))}
                    className="w-full px-2 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold"
                  >
                    <option value="scroll">Scroll</option>
                    <option value="fixed">Fixed (Parallax)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* 5. VIDEO CONTROLS & UPLOAD (LIVE)                        */}
          {/* ========================================================= */}
          {currentType === 'video' && (
            <div className="space-y-4 p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                  <Video className="h-3.5 w-3.5 text-indigo-600" />
                  <span>Video Background & Upload</span>
                </h4>
              </div>

              {/* Upload Video Dropzone & Button */}
              <div
                onDragOver={(e) => { e.preventDefault(); setIsDraggingVideo(true); }}
                onDragLeave={() => setIsDraggingVideo(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setIsDraggingVideo(false);
                  handleVideoUpload(e.dataTransfer.files?.[0]);
                }}
                onClick={() => inspectorVidInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-3.5 text-center cursor-pointer transition-all ${
                  isDraggingVideo
                    ? 'border-indigo-600 bg-indigo-50/70 scale-[1.01]'
                    : 'border-slate-300 hover:border-indigo-400 bg-white'
                }`}
              >
                <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-1">
                  <Video className="h-4 w-4" />
                </div>
                <p className="text-xs font-bold text-slate-700">
                  Upload Video from Device
                </p>
                <p className="text-[10px] text-slate-400">
                  Drag & drop MP4 / WebM (up to 50MB)
                </p>
              </div>

              {/* Direct Video URL Input */}
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Video MP4/WebM URL</label>
                <input
                  type="text"
                  placeholder="https://assets.mixkit.co/videos/preview/..."
                  value={bgConfig.video?.url || ''}
                  onChange={(e) => applyLiveBackground(curr => ({
                    ...curr,
                    video: { ...curr.video, url: e.target.value }
                  }))}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono text-slate-800"
                />
              </div>

              {/* Looping Video Presets */}
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1.5">Curated Looping Video Presets</label>
                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-0.5 ds-scrollbar-thin">
                  {BACKGROUND_VIDEO_PRESETS.map((vid) => {
                    const isSelected = bgConfig.video?.url === vid.url;
                    return (
                      <button
                        key={vid.id}
                        type="button"
                        onClick={() => applyLiveBackground(curr => ({
                          ...curr,
                          type: 'video',
                          video: { ...curr.video, url: vid.url, title: vid.title }
                        }))}
                        className={`aspect-video rounded-xl overflow-hidden border-2 relative text-left transition-all ${
                          isSelected
                            ? 'border-indigo-600 ring-2 ring-indigo-400 scale-[1.02]'
                            : 'border-slate-200 hover:border-indigo-400'
                        }`}
                      >
                        <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                          <Play className="h-4 w-4 text-white fill-white" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-1 bg-slate-950/70 text-[9px] text-white truncate font-bold">
                          {vid.title}
                        </div>
                        {isSelected && (
                          <div className="absolute top-1 right-1 px-1.5 py-0.5 bg-indigo-600 text-white rounded text-[8px] font-bold shadow-xs">
                            Active
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Video Toggles */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <label className="flex items-center gap-1.5 p-2 bg-white rounded-lg border border-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={bgConfig.video?.autoplay ?? true}
                    onChange={(e) => applyLiveBackground(curr => ({
                      ...curr,
                      video: { ...curr.video, autoplay: e.target.checked }
                    }))}
                    className="rounded text-indigo-600 focus:ring-indigo-500 h-3.5 w-3.5"
                  />
                  <span className="text-[11px] font-bold text-slate-700">Autoplay</span>
                </label>
                <label className="flex items-center gap-1.5 p-2 bg-white rounded-lg border border-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={bgConfig.video?.loop ?? true}
                    onChange={(e) => applyLiveBackground(curr => ({
                      ...curr,
                      video: { ...curr.video, loop: e.target.checked }
                    }))}
                    className="rounded text-indigo-600 focus:ring-indigo-500 h-3.5 w-3.5"
                  />
                  <span className="text-[11px] font-bold text-slate-700">Looping</span>
                </label>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* 6. DARK / TINT OVERLAY (LIVE FOR ALL TYPES)               */}
          {/* ========================================================= */}
          {(currentType === 'image' || currentType === 'video' || currentType === 'gradient' || currentType === 'color') && (
            <div className="space-y-3.5 p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-indigo-600" />
                  <span>Dark Tint / Color Overlay</span>
                </h4>
                <span className="text-[11px] font-mono font-bold text-indigo-600">
                  {bgConfig.overlay?.opacity ?? 0}%
                </span>
              </div>

              <div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={bgConfig.overlay?.opacity ?? 0}
                  onChange={(e) => applyLiveBackground(curr => ({
                    ...curr,
                    overlay: { ...curr.overlay, opacity: parseInt(e.target.value) }
                  }))}
                  className="w-full accent-indigo-600"
                />
              </div>

              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={bgConfig.overlay?.color || '#000000'}
                    onChange={(e) => applyLiveBackground(curr => ({
                      ...curr,
                      overlay: { ...curr.overlay, color: e.target.value }
                    }))}
                    className="w-8 h-7 rounded-lg border border-slate-200 cursor-pointer p-0.5 bg-white shadow-xs"
                  />
                  <span className="text-[11px] text-slate-600 font-bold">Tint Color</span>
                </div>

                <select
                  value={bgConfig.overlay?.blendMode || 'normal'}
                  onChange={(e) => applyLiveBackground(curr => ({
                    ...curr,
                    overlay: { ...curr.overlay, blendMode: e.target.value }
                  }))}
                  className="px-2 py-1 bg-white border border-slate-200 rounded-lg text-[11px] font-bold"
                >
                  <option value="normal">Normal</option>
                  <option value="multiply">Multiply (Darken)</option>
                  <option value="screen">Screen (Lighten)</option>
                  <option value="overlay">Overlay</option>
                </select>
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* 7. VISUAL FILTERS (LIVE)                                  */}
          {/* ========================================================= */}
          <div className="space-y-3 p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200 shadow-xs">
            <h4 className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
              <span>Visual Filters (Blur & Brightness)</span>
            </h4>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-bold text-slate-600">Blur</label>
                <span className="text-[11px] font-mono font-bold text-indigo-600">{bgConfig.filters?.blur ?? 0}px</span>
              </div>
              <input
                type="range"
                min="0"
                max="25"
                value={bgConfig.filters?.blur ?? 0}
                onChange={(e) => applyLiveBackground(curr => ({
                  ...curr,
                  filters: { ...curr.filters, blur: parseInt(e.target.value) }
                }))}
                className="w-full accent-indigo-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-bold text-slate-600">Brightness</label>
                <span className="text-[11px] font-mono font-bold text-indigo-600">{bgConfig.filters?.brightness ?? 100}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                value={bgConfig.filters?.brightness ?? 100}
                onChange={(e) => applyLiveBackground(curr => ({
                  ...curr,
                  filters: { ...curr.filters, brightness: parseInt(e.target.value) }
                }))}
                className="w-full accent-indigo-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-bold text-slate-600">Contrast</label>
                <span className="text-[11px] font-mono font-bold text-indigo-600">{bgConfig.filters?.contrast ?? 100}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                value={bgConfig.filters?.contrast ?? 100}
                onChange={(e) => applyLiveBackground(curr => ({
                  ...curr,
                  filters: { ...curr.filters, contrast: parseInt(e.target.value) }
                }))}
                className="w-full accent-indigo-600"
              />
            </div>
          </div>

        </div>
      </div>
    );
  }

  // ==========================================
  // COMPONENT SELECTED -> COMPONENT INSPECTOR
  // ==========================================
  return (
    <div className="h-full flex flex-col">
      {/* Tabs */}
      <div className="flex items-center gap-1 px-3 pt-3 pb-2 border-b border-slate-200 overflow-x-auto scrollbar-thin">
        {COMPONENT_TABS.map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap shrink-0 ${
                activeTab === tab.id
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Component</h3>
            <span className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full font-bold">
              {componentConfig?.label || selectedComponent.type}
            </span>
          </div>

          {Object.entries(propertyConfig?.props || {}).map(([key, config]) => (
            <div key={key}>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                {config.label}
              </label>
              {renderInput(key, config, formValues[key], handleChange)}
            </div>
          ))}
        </div>

        {/* Delete */}
        <div className="p-4 pt-0">
          {selectedComponent?.isLocked ? (
            <div className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-amber-50 text-amber-600 text-sm font-bold rounded-lg cursor-not-allowed select-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Locked – Cannot Delete
            </div>
          ) : (
            <button
              onClick={handleDelete}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-red-50 text-red-600 text-sm font-bold rounded-lg hover:bg-red-100 transition"
            >
              <Trash2 className="h-4 w-4" />
              Delete Component
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const renderInput = (key, config, value, onChange) => {
  switch (config.type) {
    case 'select':
      return (
        <select
          value={value}
          onChange={(e) => onChange(key, e.target.value)}
          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
        >
          {(config.options || []).map(option => (
            <option key={option} value={option}>
              {typeof option === 'string' ? option.charAt(0).toUpperCase() + option.slice(1) : option}
            </option>
          ))}
        </select>
      );

    case 'color':
      return (
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={value || '#000000'}
            onChange={(e) => onChange(key, e.target.value)}
            className="w-10 h-9 border border-slate-200 rounded-lg cursor-pointer"
          />
          <input
            type="text"
            value={value || '#000000'}
            onChange={(e) => onChange(key, e.target.value)}
            className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-mono"
          />
        </div>
      );

    case 'range':
      return (
        <div>
          <input
            type="range"
            min={config.min}
            max={config.max}
            value={value}
            onChange={(e) => onChange(key, parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>{config.min}</span>
            <span>{value}{config.unit || ''}</span>
            <span>{config.max}</span>
          </div>
        </div>
      );

    case 'textarea':
      return (
        <textarea
          value={value}
          onChange={(e) => onChange(key, e.target.value)}
          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
          rows={config.rows || 3}
        />
      );

    default:
      return (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(key, e.target.value)}
          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
          placeholder={config.label}
        />
      );
  }
};
