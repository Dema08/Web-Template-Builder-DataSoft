import React, { useState, useRef, useEffect } from 'react';
import { useBackgroundStore } from '../../stores/useBackgroundStore';
import { useBuilderStore } from '../../stores/builderStore';
import { useMediaStore } from '../../stores/mediaStore';
import {
  BACKGROUND_IMAGES,
  BACKGROUND_IMAGE_CATEGORIES,
  BACKGROUND_VIDEO_PRESETS
} from '../../data/backgroundPresets';
import {
  Palette,
  Image as ImageIcon,
  Video,
  SlidersHorizontal,
  Sparkles,
  RefreshCw,
  Check,
  X,
  Upload,
  Search,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Eye,
  Trash2,
  Layers,
  Sparkle
} from 'lucide-react';
import { toast } from '@store';

export default function BackgroundEditorModal() {
  const { isOpen, closeEditor, backgroundConfig, updateConfig, resetConfig, currentSection, setBackground } = useBackgroundStore();
  const { updateSectionBackground } = useBuilderStore();
  const { addUpload } = useMediaStore();

  const [activeTab, setActiveTab] = useState('type');
  const [selectedImgCategory, setSelectedImgCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDraggingFile, setIsDraggingFile] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const videoPreviewRef = useRef(null);

  if (!isOpen) return null;

  // Filtered background images
  const filteredImages = BACKGROUND_IMAGES.filter(img => {
    const matchesCategory = selectedImgCategory === 'all' || img.category === selectedImgCategory;
    const matchesSearch = !searchQuery || img.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleApply = () => {
    if (!currentSection) return;

    // 1. Simpan ke backgroundStore
    setBackground(currentSection, backgroundConfig);

    // 2. Simpan ke builderStore
    updateSectionBackground(currentSection, backgroundConfig);

    toast.success('Background applied successfully to section', 'Background Editor');
    closeEditor();
  };

  const handleReset = () => {
    resetConfig();
    toast.info('Background reset to default', 'Background Editor');
  };

  // Handle local Image file upload
  const handleImageFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please upload a valid image file (PNG, JPG, WEBP, SVG)', 'Invalid File');
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      toast.error('Image size should be less than 15MB', 'File Too Large');
      return;
    }

    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      updateConfig({
        type: 'image',
        image: {
          ...backgroundConfig.image,
          url: dataUrl,
          fileName: file.name,
        }
      });
      // Save to media store
      addUpload({
        name: file.name,
        url: dataUrl,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        type: 'image'
      });
      setIsUploading(false);
      toast.success(`Image "${file.name}" uploaded successfully!`, 'Image Uploaded');
    };
    reader.onerror = () => {
      setIsUploading(false);
      toast.error('Failed to read image file', 'Upload Error');
    };
    reader.readAsDataURL(file);
  };

  // Handle local Video file upload
  const handleVideoFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('video/')) {
      toast.error('Please upload a valid video file (MP4, WebM, OGG)', 'Invalid File');
      return;
    }

    if (file.size > 50 * 1024 * 1024) {
      toast.error('Video size should be less than 50MB for optimal web performance', 'File Too Large');
      return;
    }

    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      updateConfig({
        type: 'video',
        video: {
          ...backgroundConfig.video,
          url: dataUrl,
          fileName: file.name,
        }
      });
      // Save to media store
      addUpload({
        name: file.name,
        url: dataUrl,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        type: 'video'
      });
      setIsUploading(false);
      toast.success(`Video "${file.name}" uploaded successfully!`, 'Video Uploaded');
    };
    reader.onerror = () => {
      setIsUploading(false);
      toast.error('Failed to read video file', 'Upload Error');
    };
    reader.readAsDataURL(file);
  };

  // Drop handlers for drag & drop zone
  const handleFileDrop = (e, fileType = 'image') => {
    e.preventDefault();
    setIsDraggingFile(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      if (fileType === 'image') {
        const fakeEvent = { target: { files } };
        handleImageFileUpload(fakeEvent);
      } else {
        const fakeEvent = { target: { files } };
        handleVideoFileUpload(fakeEvent);
      }
    }
  };

  // Helper for computing live preview style
  const getPreviewStyle = () => {
    const style = { position: 'relative' };
    if (backgroundConfig.type === 'color') {
      const hex = backgroundConfig.color?.hex || '#ffffff';
      const opacity = (backgroundConfig.color?.opacity ?? 100) / 100;
      style.backgroundColor = hex;
      style.opacity = opacity;
    } else if (backgroundConfig.type === 'gradient') {
      const stops = backgroundConfig.gradient?.stops || [];
      const color1 = stops[0]?.color || '#4f46e5';
      const color2 = stops[1]?.color || '#ec4899';
      const angle = backgroundConfig.gradient?.angle ?? 90;
      style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    } else if (backgroundConfig.type === 'image' && backgroundConfig.image?.url) {
      style.backgroundImage = `url(${backgroundConfig.image.url})`;
      style.backgroundPosition = backgroundConfig.image.position || 'center';
      style.backgroundSize = backgroundConfig.image.size || 'cover';
      style.backgroundRepeat = backgroundConfig.image.repeat || 'no-repeat';
    }

    if (backgroundConfig.filters) {
      let filters = [];
      if (backgroundConfig.filters.blur) filters.push(`blur(${backgroundConfig.filters.blur}px)`);
      if (backgroundConfig.filters.brightness !== 100) filters.push(`brightness(${backgroundConfig.filters.brightness}%)`);
      if (backgroundConfig.filters.contrast !== 100) filters.push(`contrast(${backgroundConfig.filters.contrast}%)`);
      if (backgroundConfig.filters.saturation !== 100) filters.push(`saturate(${backgroundConfig.filters.saturation}%)`);
      if (filters.length > 0) style.filter = filters.join(' ');
    }
    return style;
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white rounded-2xl shadow-sm">
              <Palette className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-extrabold text-slate-900">Section Background Studio</h2>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-md border border-indigo-100">
                  {backgroundConfig.type}
                </span>
              </div>
              <p className="text-xs text-slate-500">Customize colors, images, looping videos, overlays & visual filters</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition active:scale-95"
              title="Reset background to default clear"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Reset</span>
            </button>
            <button
              onClick={closeEditor}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Live Mini Preview Banner */}
        <div className="px-6 pt-4 pb-2 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5">
              <Eye className="h-3.5 w-3.5 text-indigo-400" />
              Live Preview
            </span>
            <span className="text-[10px] text-slate-500 font-mono">
              Mode: {backgroundConfig.type.toUpperCase()}
            </span>
          </div>

          <div
            className="relative w-full h-24 rounded-2xl overflow-hidden border border-slate-700 shadow-inner flex items-center justify-center text-center p-4 transition-all duration-300"
            style={getPreviewStyle()}
          >
            {/* Video preview in banner */}
            {backgroundConfig.type === 'video' && backgroundConfig.video?.url && (
              <video
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                src={backgroundConfig.video.url}
                autoPlay={backgroundConfig.video.autoplay ?? true}
                loop={backgroundConfig.video.loop ?? true}
                muted={backgroundConfig.video.muted ?? true}
                playsInline
              />
            )}

            {/* Overlay */}
            {backgroundConfig.overlay && backgroundConfig.overlay.opacity > 0 && (
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundColor: backgroundConfig.overlay.color || '#000000',
                  opacity: (backgroundConfig.overlay.opacity || 0) / 100,
                  mixBlendMode: backgroundConfig.overlay.blendMode || 'normal',
                }}
              />
            )}

            <div className="relative z-10 select-none">
              <h4 className="text-sm font-black text-white drop-shadow-md tracking-tight">
                Preview Section Heading
              </h4>
              <p className="text-[11px] text-slate-200 drop-shadow-sm font-medium">
                High-converting template section with dynamic background
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 px-6 py-2.5 border-b border-slate-100 bg-white overflow-x-auto ds-scrollbar-thin">
          {[
            { id: 'type', label: 'Background Type', icon: Palette },
            { id: 'color', label: 'Color & Gradient', icon: Sliders },
            { id: 'image', label: 'Image Library & Upload', icon: ImageIcon },
            { id: 'video', label: 'Video Background & Upload', icon: Video },
            { id: 'effects', label: 'Overlay & Filters', icon: Sparkles },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                if (tab.id === 'color' && backgroundConfig.type !== 'color' && backgroundConfig.type !== 'gradient') {
                  updateConfig({ type: 'color' });
                } else if (tab.id === 'image' && backgroundConfig.type !== 'image') {
                  updateConfig({ type: 'image' });
                } else if (tab.id === 'video' && backgroundConfig.type !== 'video') {
                  updateConfig({ type: 'video' });
                }
              }}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/20'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <tab.icon className="h-3.5 w-3.5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Main Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 ds-scrollbar-thin bg-slate-50/40">
          
          {/* TAB 1: BACKGROUND TYPE */}
          {activeTab === 'type' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">Choose Background Type</h3>
                <span className="text-[11px] text-slate-500">Select how this section's background should render</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                {[
                  { id: 'none', label: 'None / Transparent', icon: RefreshCw, desc: 'Clear transparent background' },
                  { id: 'color', label: 'Solid Color', icon: Palette, desc: 'Solid color with opacity slider' },
                  { id: 'gradient', label: 'Multi Gradient', icon: Sliders, desc: 'Multi-stop gradient with angles' },
                  { id: 'image', label: 'Photo Image', icon: ImageIcon, desc: 'Curated library or upload custom' },
                  { id: 'video', label: 'Looping Video', icon: Video, desc: 'Cinematic video presets or upload' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => {
                      updateConfig({ type: item.id });
                      if (item.id === 'color' || item.id === 'gradient') setActiveTab('color');
                      if (item.id === 'image') setActiveTab('image');
                      if (item.id === 'video') setActiveTab('video');
                    }}
                    className={`flex flex-col items-start p-4 rounded-2xl border-2 text-left transition-all ${
                      backgroundConfig.type === item.id
                        ? 'border-indigo-600 bg-indigo-50/70 shadow-md ring-2 ring-indigo-600/20'
                        : 'border-slate-200 hover:border-slate-300 bg-white hover:shadow-xs'
                    }`}
                  >
                    <div className={`p-2.5 rounded-xl mb-3 ${backgroundConfig.type === item.id ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-900 mb-0.5">{item.label}</span>
                    <span className="text-[11px] text-slate-500 leading-tight">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: COLOR & GRADIENT */}
          {activeTab === 'color' && (
            <div className="space-y-6">
              {/* Pill Switcher */}
              <div className="flex items-center p-1 bg-slate-200/80 rounded-2xl max-w-xs">
                <button
                  type="button"
                  onClick={() => updateConfig({ type: 'color' })}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition ${
                    backgroundConfig.type === 'color' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Solid Color
                </button>
                <button
                  type="button"
                  onClick={() => updateConfig({ type: 'gradient' })}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-xl transition ${
                    backgroundConfig.type === 'gradient' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Gradient
                </button>
              </div>

              {backgroundConfig.type === 'color' ? (
                <div className="space-y-5 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Color Picker & Hex Code</label>
                    <div className="flex items-center gap-3">
                      <input
                        type="color"
                        value={backgroundConfig.color?.hex || '#ffffff'}
                        onChange={(e) => updateConfig({ color: { ...backgroundConfig.color, hex: e.target.value } })}
                        className="w-14 h-12 rounded-xl border border-slate-200 cursor-pointer p-1 bg-white"
                      />
                      <input
                        type="text"
                        value={backgroundConfig.color?.hex || '#ffffff'}
                        onChange={(e) => updateConfig({ color: { ...backgroundConfig.color, hex: e.target.value } })}
                        className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-800"
                        placeholder="#ffffff"
                      />
                    </div>
                  </div>

                  {/* Quick Color Palette Presets */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Popular Color Swatches</label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        '#ffffff', '#f8fafc', '#f1f5f9', '#e2e8f0', '#0f172a', '#1e1b4b',
                        '#4f46e5', '#2563eb', '#0ea5e9', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#8b5cf6'
                      ].map(colorHex => (
                        <button
                          key={colorHex}
                          type="button"
                          onClick={() => updateConfig({ color: { ...backgroundConfig.color, hex: colorHex } })}
                          className={`w-7 h-7 rounded-lg border-2 shadow-xs transition hover:scale-110 ${
                            backgroundConfig.color?.hex?.toLowerCase() === colorHex.toLowerCase() ? 'border-indigo-600 scale-110 ring-2 ring-indigo-300' : 'border-slate-300'
                          }`}
                          style={{ backgroundColor: colorHex }}
                          title={colorHex}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="text-xs font-bold text-slate-700">Opacity Fill</label>
                      <span className="text-xs font-mono font-bold text-indigo-600">{backgroundConfig.color?.opacity ?? 100}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={backgroundConfig.color?.opacity ?? 100}
                      onChange={(e) => updateConfig({ color: { ...backgroundConfig.color, opacity: parseInt(e.target.value) } })}
                      className="w-full accent-indigo-600"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-5 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Start Color (Stop 1)</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={backgroundConfig.gradient?.stops?.[0]?.color || '#4f46e5'}
                          onChange={(e) => {
                            const stops = [...(backgroundConfig.gradient?.stops || [{ color: '#4f46e5', position: 0 }, { color: '#ec4899', position: 100 }])];
                            stops[0] = { ...stops[0], color: e.target.value };
                            updateConfig({ gradient: { ...backgroundConfig.gradient, stops } });
                          }}
                          className="w-12 h-10 rounded-xl border border-slate-200 cursor-pointer p-1 bg-white"
                        />
                        <input
                          type="text"
                          value={backgroundConfig.gradient?.stops?.[0]?.color || '#4f46e5'}
                          onChange={(e) => {
                            const stops = [...(backgroundConfig.gradient?.stops || [{ color: '#4f46e5', position: 0 }, { color: '#ec4899', position: 100 }])];
                            stops[0] = { ...stops[0], color: e.target.value };
                            updateConfig({ gradient: { ...backgroundConfig.gradient, stops } });
                          }}
                          className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">End Color (Stop 2)</label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={backgroundConfig.gradient?.stops?.[1]?.color || '#ec4899'}
                          onChange={(e) => {
                            const stops = [...(backgroundConfig.gradient?.stops || [{ color: '#4f46e5', position: 0 }, { color: '#ec4899', position: 100 }])];
                            stops[1] = { ...stops[1], color: e.target.value };
                            updateConfig({ gradient: { ...backgroundConfig.gradient, stops } });
                          }}
                          className="w-12 h-10 rounded-xl border border-slate-200 cursor-pointer p-1 bg-white"
                        />
                        <input
                          type="text"
                          value={backgroundConfig.gradient?.stops?.[1]?.color || '#ec4899'}
                          onChange={(e) => {
                            const stops = [...(backgroundConfig.gradient?.stops || [{ color: '#4f46e5', position: 0 }, { color: '#ec4899', position: 100 }])];
                            stops[1] = { ...stops[1], color: e.target.value };
                            updateConfig({ gradient: { ...backgroundConfig.gradient, stops } });
                          }}
                          className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="text-xs font-bold text-slate-700">Gradient Angle</label>
                      <span className="text-xs font-mono font-bold text-indigo-600">{backgroundConfig.gradient?.angle ?? 90}°</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="360"
                      value={backgroundConfig.gradient?.angle ?? 90}
                      onChange={(e) => updateConfig({ gradient: { ...backgroundConfig.gradient, angle: parseInt(e.target.value) } })}
                      className="w-full accent-indigo-600"
                    />
                  </div>

                  {/* Gradient Quick Presets */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Preset Gradients</label>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {[
                        { name: 'Indigo Dream', c1: '#4f46e5', c2: '#ec4899', angle: 135 },
                        { name: 'Cyber Blue', c1: '#2563eb', c2: '#06b6d4', angle: 90 },
                        { name: 'Dark Void', c1: '#0f172a', c2: '#1e1b4b', angle: 180 },
                        { name: 'Sunset Glow', c1: '#f97316', c2: '#ec4899', angle: 45 },
                        { name: 'Emerald Wave', c1: '#059669', c2: '#10b981', angle: 120 },
                        { name: 'Royal Purple', c1: '#7c3aed', c2: '#3b82f6', angle: 90 },
                      ].map(preset => (
                        <button
                          key={preset.name}
                          type="button"
                          onClick={() => {
                            updateConfig({
                              type: 'gradient',
                              gradient: {
                                angle: preset.angle,
                                stops: [{ color: preset.c1, position: 0 }, { color: preset.c2, position: 100 }]
                              }
                            });
                          }}
                          className="h-9 rounded-xl border border-white/50 shadow-xs hover:scale-105 transition"
                          style={{ background: `linear-gradient(${preset.angle}deg, ${preset.c1}, ${preset.c2})` }}
                          title={preset.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: IMAGE LIBRARY & UPLOAD */}
          {activeTab === 'image' && (
            <div className="space-y-6">
              
              {/* Section 1: Upload Custom Local Image */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-extrabold text-slate-800 flex items-center gap-2">
                    <Upload className="h-4 w-4 text-indigo-600" />
                    <span>Upload Local Image File</span>
                  </h4>
                  <span className="text-[11px] text-slate-400">PNG, JPG, WEBP, SVG up to 15MB</span>
                </div>

                <div
                  onDragOver={(e) => { e.preventDefault(); setIsDraggingFile(true); }}
                  onDragLeave={() => setIsDraggingFile(false)}
                  onDrop={(e) => handleFileDrop(e, 'image')}
                  onClick={() => imageInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                    isDraggingFile
                      ? 'border-indigo-600 bg-indigo-50/50 scale-[1.01]'
                      : 'border-slate-300 hover:border-indigo-400 bg-slate-50/60'
                  }`}
                >
                  <input
                    ref={imageInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageFileUpload}
                    className="hidden"
                  />
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-xs">
                    <Upload className="h-6 w-6" />
                  </div>
                  <p className="text-xs font-bold text-slate-700">
                    {isUploading ? 'Uploading image...' : 'Click to browse or drag & drop image here'}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Images are instantly saved and applied to this section
                  </p>
                </div>

                {/* Direct URL Input */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Or Paste Direct Image URL</label>
                  <input
                    type="text"
                    placeholder="https://images.unsplash.com/photo-..."
                    value={backgroundConfig.image?.url || ''}
                    onChange={(e) => updateConfig({ type: 'image', image: { ...backgroundConfig.image, url: e.target.value } })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono"
                  />
                </div>
              </div>

              {/* Section 2: Curated Stock Presets Library */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                      <Sparkles className="h-4 w-4 text-indigo-600" />
                      <span>Curated HD Stock Backgrounds</span>
                    </h4>
                    <p className="text-[11px] text-slate-500">Click any high-resolution image to apply instantly</p>
                  </div>

                  {/* Search bar */}
                  <div className="relative max-w-xs w-full">
                    <Search className="h-3.5 w-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search backgrounds..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 ds-scrollbar-thin">
                  {BACKGROUND_IMAGE_CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedImgCategory(cat.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                        selectedImgCategory === cat.id
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Images Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-h-[300px] overflow-y-auto pr-1 ds-scrollbar-thin">
                  {filteredImages.map(img => {
                    const isSelected = backgroundConfig.image?.url === img.url;
                    return (
                      <button
                        key={img.id}
                        type="button"
                        onClick={() => updateConfig({ type: 'image', image: { ...backgroundConfig.image, url: img.url } })}
                        className={`group relative rounded-2xl overflow-hidden border-2 aspect-video text-left transition-all ${
                          isSelected
                            ? 'border-indigo-600 ring-2 ring-indigo-400 scale-[1.02] shadow-md'
                            : 'border-slate-200 hover:border-indigo-400 hover:shadow-sm'
                        }`}
                      >
                        <img
                          src={img.thumbnail}
                          alt={img.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2">
                          <span className="text-[10px] font-bold text-white truncate drop-shadow-sm">
                            {img.title}
                          </span>
                        </div>
                        {isSelected && (
                          <div className="absolute top-1.5 right-1.5 w-5 h-5 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-md">
                            <Check className="h-3 w-3" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Section 3: Position, Size & Repeat Settings */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h4 className="text-xs font-extrabold text-slate-800">Image Positioning & Fit</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Size / Fit</label>
                    <select
                      value={backgroundConfig.image?.size || 'cover'}
                      onChange={(e) => updateConfig({ image: { ...backgroundConfig.image, size: e.target.value } })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                    >
                      <option value="cover">Cover (Fill)</option>
                      <option value="contain">Contain (Fit)</option>
                      <option value="auto">Original Auto</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Position</label>
                    <select
                      value={backgroundConfig.image?.position || 'center'}
                      onChange={(e) => updateConfig({ image: { ...backgroundConfig.image, position: e.target.value } })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                    >
                      <option value="center">Center</option>
                      <option value="top">Top</option>
                      <option value="bottom">Bottom</option>
                      <option value="left">Left</option>
                      <option value="right">Right</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Attachment</label>
                    <select
                      value={backgroundConfig.image?.attachment || 'scroll'}
                      onChange={(e) => updateConfig({ image: { ...backgroundConfig.image, attachment: e.target.value } })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                    >
                      <option value="scroll">Scroll (Standard)</option>
                      <option value="fixed">Fixed (Parallax Effect)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Repeat</label>
                    <select
                      value={backgroundConfig.image?.repeat || 'no-repeat'}
                      onChange={(e) => updateConfig({ image: { ...backgroundConfig.image, repeat: e.target.value } })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                    >
                      <option value="no-repeat">No Repeat</option>
                      <option value="repeat">Repeat Pattern</option>
                      <option value="repeat-x">Repeat X</option>
                      <option value="repeat-y">Repeat Y</option>
                    </select>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 4: VIDEO BACKGROUND & UPLOAD */}
          {activeTab === 'video' && (
            <div className="space-y-6">

              {/* Upload Local Video Card */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-extrabold text-slate-800 flex items-center gap-2">
                    <Video className="h-4 w-4 text-indigo-600" />
                    <span>Upload Your Own Video File</span>
                  </h4>
                  <span className="text-[11px] text-slate-400">MP4, WebM up to 50MB</span>
                </div>

                <div
                  onDragOver={(e) => { e.preventDefault(); setIsDraggingFile(true); }}
                  onDragLeave={() => setIsDraggingFile(false)}
                  onDrop={(e) => handleFileDrop(e, 'video')}
                  onClick={() => videoInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                    isDraggingFile
                      ? 'border-indigo-600 bg-indigo-50/50 scale-[1.01]'
                      : 'border-slate-300 hover:border-indigo-400 bg-slate-50/60'
                  }`}
                >
                  <input
                    ref={videoInputRef}
                    type="file"
                    accept="video/mp4,video/webm,video/ogg"
                    onChange={handleVideoFileUpload}
                    className="hidden"
                  />
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-xs">
                    <Video className="h-6 w-6" />
                  </div>
                  <p className="text-xs font-bold text-slate-700">
                    {isUploading ? 'Uploading video file...' : 'Click to select or drag & drop video MP4/WebM'}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Videos automatically loop and mute for smooth background playback
                  </p>
                </div>

                {/* Direct Video URL Input */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Or Direct Video MP4/WebM Link</label>
                  <input
                    type="text"
                    placeholder="https://assets.mixkit.co/videos/preview/..."
                    value={backgroundConfig.video?.url || ''}
                    onChange={(e) => updateConfig({ type: 'video', video: { ...backgroundConfig.video, url: e.target.value } })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono"
                  />
                </div>
              </div>

              {/* Video Presets Library */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div>
                  <h4 className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-indigo-600" />
                    <span>Curated Looping Video Presets</span>
                  </h4>
                  <p className="text-[11px] text-slate-500">Cinematic motion backgrounds optimized for web speed</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {BACKGROUND_VIDEO_PRESETS.map(preset => {
                    const isSelected = backgroundConfig.video?.url === preset.url;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => {
                          updateConfig({
                            type: 'video',
                            video: {
                              ...backgroundConfig.video,
                              url: preset.url,
                              title: preset.title,
                            }
                          });
                        }}
                        className={`group relative rounded-2xl overflow-hidden border-2 text-left transition-all ${
                          isSelected
                            ? 'border-indigo-600 ring-2 ring-indigo-400 scale-[1.02] shadow-md'
                            : 'border-slate-200 hover:border-indigo-400'
                        }`}
                      >
                        <div className="relative aspect-video overflow-hidden bg-slate-900">
                          <img
                            src={preset.thumbnail}
                            alt={preset.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-white/90 text-indigo-600 flex items-center justify-center shadow-md group-hover:scale-110 transition">
                              <Play className="h-4 w-4 ml-0.5" />
                            </div>
                          </div>
                          {isSelected && (
                            <div className="absolute top-2 right-2 px-2 py-0.5 bg-indigo-600 text-white rounded-md text-[10px] font-bold shadow-md flex items-center gap-1">
                              <Check className="h-3 w-3" />
                              Active
                            </div>
                          )}
                        </div>
                        <div className="p-3 bg-white">
                          <h5 className="text-xs font-bold text-slate-900 truncate mb-0.5">{preset.title}</h5>
                          <p className="text-[10px] text-slate-500 line-clamp-1">{preset.description}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Video Playback Settings */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h4 className="text-xs font-extrabold text-slate-800">Video Playback & Dark Overlay</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-100 transition">
                    <input
                      type="checkbox"
                      checked={backgroundConfig.video?.autoplay ?? true}
                      onChange={(e) => updateConfig({ video: { ...backgroundConfig.video, autoplay: e.target.checked } })}
                      className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                    />
                    <span className="text-xs font-bold text-slate-700">Autoplay</span>
                  </label>

                  <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-100 transition">
                    <input
                      type="checkbox"
                      checked={backgroundConfig.video?.loop ?? true}
                      onChange={(e) => updateConfig({ video: { ...backgroundConfig.video, loop: e.target.checked } })}
                      className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                    />
                    <span className="text-xs font-bold text-slate-700">Looping</span>
                  </label>

                  <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-100 transition">
                    <input
                      type="checkbox"
                      checked={backgroundConfig.video?.muted ?? true}
                      onChange={(e) => updateConfig({ video: { ...backgroundConfig.video, muted: e.target.checked } })}
                      className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                    />
                    <span className="text-xs font-bold text-slate-700">Muted (Required for web autoplay)</span>
                  </label>
                </div>
              </div>

            </div>
          )}

          {/* TAB 5: OVERLAY & FILTERS */}
          {activeTab === 'effects' && (
            <div className="space-y-6">
              
              {/* Color Overlay */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                      <Layers className="h-4 w-4 text-indigo-600" />
                      <span>Background Tint / Dark Overlay</span>
                    </h4>
                    <p className="text-[11px] text-slate-500">Great for making white text and CTA buttons easily readable on photos or videos</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-indigo-600">
                    {backgroundConfig.overlay?.opacity ?? 0}% Opacity
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Overlay Tint Color</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={backgroundConfig.overlay?.color || '#000000'}
                        onChange={(e) => updateConfig({ overlay: { ...backgroundConfig.overlay, color: e.target.value } })}
                        className="w-12 h-10 rounded-xl border border-slate-200 cursor-pointer p-1 bg-white"
                      />
                      <input
                        type="text"
                        value={backgroundConfig.overlay?.color || '#000000'}
                        onChange={(e) => updateConfig({ overlay: { ...backgroundConfig.overlay, color: e.target.value } })}
                        className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Blend Mode</label>
                    <select
                      value={backgroundConfig.overlay?.blendMode || 'normal'}
                      onChange={(e) => updateConfig({ overlay: { ...backgroundConfig.overlay, blendMode: e.target.value } })}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
                    >
                      <option value="normal">Normal</option>
                      <option value="multiply">Multiply (Darken)</option>
                      <option value="screen">Screen (Lighten)</option>
                      <option value="overlay">Overlay</option>
                      <option value="darken">Darken</option>
                    </select>
                  </div>
                </div>

                <div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={backgroundConfig.overlay?.opacity ?? 0}
                    onChange={(e) => updateConfig({ overlay: { ...backgroundConfig.overlay, opacity: parseInt(e.target.value) } })}
                    className="w-full accent-indigo-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>0% (No tint)</span>
                    <span>50% (Recommended for Hero)</span>
                    <span>100% (Full tint)</span>
                  </div>
                </div>
              </div>

              {/* Visual Filters */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h4 className="text-xs font-extrabold text-slate-800 flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-indigo-600" />
                  <span>Visual Filters</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-bold text-slate-700">Blur</label>
                      <span className="text-xs font-mono font-bold text-indigo-600">{backgroundConfig.filters?.blur ?? 0}px</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="30"
                      value={backgroundConfig.filters?.blur ?? 0}
                      onChange={(e) => updateConfig({ filters: { ...backgroundConfig.filters, blur: parseInt(e.target.value) } })}
                      className="w-full accent-indigo-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-bold text-slate-700">Brightness</label>
                      <span className="text-xs font-mono font-bold text-indigo-600">{backgroundConfig.filters?.brightness ?? 100}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={backgroundConfig.filters?.brightness ?? 100}
                      onChange={(e) => updateConfig({ filters: { ...backgroundConfig.filters, brightness: parseInt(e.target.value) } })}
                      className="w-full accent-indigo-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-bold text-slate-700">Contrast</label>
                      <span className="text-xs font-mono font-bold text-indigo-600">{backgroundConfig.filters?.contrast ?? 100}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={backgroundConfig.filters?.contrast ?? 100}
                      onChange={(e) => updateConfig({ filters: { ...backgroundConfig.filters, contrast: parseInt(e.target.value) } })}
                      className="w-full accent-indigo-600"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-bold text-slate-700">Saturation</label>
                      <span className="text-xs font-mono font-bold text-indigo-600">{backgroundConfig.filters?.saturation ?? 100}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="200"
                      value={backgroundConfig.filters?.saturation ?? 100}
                      onChange={(e) => updateConfig({ filters: { ...backgroundConfig.filters, saturation: parseInt(e.target.value) } })}
                      className="w-full accent-indigo-600"
                    />
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Bottom Action Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-slate-50">
          <div className="text-xs text-slate-500 font-medium">
            Section ID: <span className="font-mono text-slate-700 font-bold">{currentSection}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={closeEditor}
              className="px-4 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl text-xs font-bold transition active:scale-95"
            >
              Cancel
            </button>
            <button
              onClick={handleApply}
              className="flex items-center gap-1.5 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-extrabold shadow-md shadow-indigo-600/30 transition active:scale-95"
            >
              <Check className="h-4 w-4" />
              <span>Apply to Section</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
