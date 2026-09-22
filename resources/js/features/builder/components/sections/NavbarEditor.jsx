import { useState, useRef } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import { useMediaStore } from '../../stores/mediaStore';
import {
  Upload,
  Type,
  Image as ImageIcon,
  Plus,
  Trash2,
  GripVertical,
  Link,
  Sparkles,
  Palette,
  Maximize2,
  Check
} from 'lucide-react';
import { toast } from '@store';

export default function NavbarEditor({ sectionId, section }) {
  const {
    updateComponentProps,
    removeComponent,
    addComponent,
    reorderComponents,
    updateSectionStyles
  } = useBuilderStore();
  const { addUpload } = useMediaStore();
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  if (!section) return null;

  const components = section.components || [];

  // Identify logo component (first image or heading/text, or component with logo in id/props)
  let logoComponent = components.find(
    c => c.type === 'image' || (c.type === 'heading' || c.type === 'text')
  );

  // Separate menu items and CTA buttons
  const menuComponents = components.filter(
    c => c.type === 'button' && !String(c.id || '').startsWith('cta')
  );
  const ctaComponent = components.find(
    c => c.type === 'button' && String(c.id || '').startsWith('cta')
  );

  const isImageLogo = logoComponent?.type === 'image';
  const isTextLogo = logoComponent?.type === 'heading' || logoComponent?.type === 'text';

  // Toggle between Text Logo & Image Logo
  const handleSwitchLogoType = (targetType) => {
    let newLogo;
    if (targetType === 'image') {
      newLogo = {
        id: logoComponent?.id || `logo-${Date.now()}`,
        type: 'image',
        props: {
          src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80',
          alt: 'Brand Logo',
          width: '140px',
          height: 'auto',
          objectFit: 'contain',
        },
      };
    } else {
      newLogo = {
        id: logoComponent?.id || `logo-${Date.now()}`,
        type: 'heading',
        props: {
          content: typeof logoComponent?.props?.content === 'string' && !logoComponent.props.content.includes('/')
            ? logoComponent.props.content
            : 'MY BRAND',
          level: 'h2',
          fontSize: '20px',
          fontWeight: '900',
          color: '#0f172a',
          letterSpacing: '0.1em',
        },
      };
    }

    let updatedComponents;
    if (logoComponent) {
      updatedComponents = components.map(c => (c.id === logoComponent.id ? newLogo : c));
    } else {
      updatedComponents = [newLogo, ...components];
    }
    reorderComponents(sectionId, updatedComponents);
    toast.success(`Tipe logo diubah ke ${targetType === 'image' ? 'Image Logo (Gambar)' : 'Text Logo (Teks)'}`, 'Logo Updated');
  };

  // Handle local image file upload for Logo
  const handleLogoFileUpload = (file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      toast.error('File harus berupa gambar (PNG, JPG, WEBP, SVG)', 'Invalid File');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target.result;
      if (isImageLogo && logoComponent) {
        updateComponentProps(sectionId, logoComponent.id, { src: dataUrl, fileName: file.name });
      } else {
        // Create new image logo
        const newLogo = {
          id: logoComponent?.id || `logo-${Date.now()}`,
          type: 'image',
          props: {
            src: dataUrl,
            alt: file.name || 'Brand Logo',
            width: '140px',
            height: 'auto',
            objectFit: 'contain',
          },
        };
        const updatedComponents = logoComponent
          ? components.map(c => (c.id === logoComponent.id ? newLogo : c))
          : [newLogo, ...components];
        reorderComponents(sectionId, updatedComponents);
      }

      addUpload({
        name: file.name,
        url: dataUrl,
        size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
        type: 'image',
      });
      toast.success(`Logo "${file.name}" berhasil diupload!`, 'Logo Updated');
    };
    reader.readAsDataURL(file);
  };

  // Quick size presets for Image Logo
  const handleApplyLogoPresetSize = (widthPx) => {
    if (!logoComponent) return;
    updateComponentProps(sectionId, logoComponent.id, { width: widthPx, height: 'auto' });
  };

  // Add new navigation link
  const handleAddMenuItem = () => {
    const newId = `nav-item-${Date.now()}`;
    const newBtn = {
      id: newId,
      type: 'button',
      props: {
        label: `Menu ${menuComponents.length + 1}`,
        href: `#menu-${menuComponents.length + 1}`,
        variant: 'ghost',
        size: 'small',
        background: 'transparent',
        color: '#334155',
      },
    };
    reorderComponents(sectionId, [...components, newBtn]);
    toast.success('Navigasi baru berhasil ditambahkan', 'Menu Updated');
  };

  return (
    <div className="space-y-6">
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={(e) => handleLogoFileUpload(e.target.files?.[0])}
        className="hidden"
      />

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 1. LOGO CONFIGURATION STUDIO                                 */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="space-y-4 p-4 bg-slate-50/80 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-indigo-600" />
            <span>Pengaturan Logo Navbar</span>
          </h4>
        </div>

        {/* Tipe Logo Switcher (Text vs Image) */}
        <div>
          <label className="block text-[11px] font-bold text-slate-600 mb-1.5">Format / Tipe Logo</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleSwitchLogoType('text')}
              className={`py-2 px-3 text-xs font-bold rounded-xl border flex items-center justify-center gap-2 transition cursor-pointer ${
                isTextLogo
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Type className="h-3.5 w-3.5" />
              <span>Text Logo</span>
            </button>
            <button
              type="button"
              onClick={() => handleSwitchLogoType('image')}
              className={`py-2 px-3 text-xs font-bold rounded-xl border flex items-center justify-center gap-2 transition cursor-pointer ${
                isImageLogo
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <ImageIcon className="h-3.5 w-3.5" />
              <span>Image Logo</span>
            </button>
          </div>
        </div>

        {/* ─── IMAGE LOGO CONTROLS ─── */}
        {isImageLogo && logoComponent && (
          <div className="space-y-4 pt-1">
            {/* Upload Dropzone */}
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragging(false);
                handleLogoFileUpload(e.dataTransfer.files?.[0]);
              }}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-4 text-center cursor-pointer transition-all ${
                isDragging
                  ? 'border-indigo-600 bg-indigo-50/70 scale-[1.01]'
                  : 'border-slate-300 hover:border-indigo-400 bg-white'
              }`}
            >
              <div className="w-9 h-9 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-1.5 shadow-2xs">
                <Upload className="h-4 w-4" />
              </div>
              <p className="text-xs font-bold text-slate-800">
                Upload Logo Gambar dari Perangkat
              </p>
              <p className="text-[10px] text-slate-400 mt-0.5">
                Klik atau drag & drop file (PNG, JPG, WEBP, SVG)
              </p>
            </div>

            {/* Direct Image URL */}
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">Image URL / Link Gambar</label>
              <input
                type="text"
                value={logoComponent.props?.src || ''}
                onChange={(e) => updateComponentProps(sectionId, logoComponent.id, { src: e.target.value })}
                placeholder="https://..."
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
              />
            </div>

            {/* Quick Size Presets */}
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1.5">Ukuran Logo Cepat</label>
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { label: 'Kecil', width: '100px' },
                  { label: 'Sedang', width: '140px' },
                  { label: 'Besar', width: '180px' },
                  { label: 'Jumbo', width: '220px' },
                ].map(p => (
                  <button
                    key={p.width}
                    type="button"
                    onClick={() => handleApplyLogoPresetSize(p.width)}
                    className={`py-1.5 text-[11px] font-bold rounded-lg border transition cursor-pointer ${
                      logoComponent.props?.width === p.width
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Width & Height Details */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Lebar (Width)</label>
                <input
                  type="text"
                  value={logoComponent.props?.width || '140px'}
                  onChange={(e) => updateComponentProps(sectionId, logoComponent.id, { width: e.target.value })}
                  placeholder="140px"
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-800"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Tinggi (Height)</label>
                <input
                  type="text"
                  value={logoComponent.props?.height || 'auto'}
                  onChange={(e) => updateComponentProps(sectionId, logoComponent.id, { height: e.target.value })}
                  placeholder="auto"
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-800"
                />
              </div>
            </div>
          </div>
        )}

        {/* ─── TEXT LOGO CONTROLS ─── */}
        {isTextLogo && logoComponent && (
          <div className="space-y-3.5 pt-1">
            {/* Logo Brand Name */}
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">Nama Brand / Logo Text</label>
              <input
                type="text"
                value={logoComponent.props?.content || ''}
                onChange={(e) => updateComponentProps(sectionId, logoComponent.id, { content: e.target.value })}
                placeholder="Contoh: LUMIÈRE"
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition"
              />
            </div>

            {/* Font Color Picker & Swatches */}
            <div>
              <label className="block text-[11px] font-bold text-slate-600 mb-1">Warna Teks Logo</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={logoComponent.props?.color || '#0f172a'}
                  onChange={(e) => updateComponentProps(sectionId, logoComponent.id, { color: e.target.value })}
                  className="w-9 h-8 rounded-lg border border-slate-200 cursor-pointer p-0.5 bg-white shadow-2xs"
                />
                <input
                  type="text"
                  value={logoComponent.props?.color || '#0f172a'}
                  onChange={(e) => updateComponentProps(sectionId, logoComponent.id, { color: e.target.value })}
                  className="flex-1 px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono font-bold text-slate-800"
                />
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {['#0f172a', '#ffffff', '#4f46e5', '#2563eb', '#10b981', '#f59e0b', '#ef4444', '#ec4899'].map(cHex => (
                  <button
                    key={cHex}
                    type="button"
                    onClick={() => updateComponentProps(sectionId, logoComponent.id, { color: cHex })}
                    className={`w-6 h-6 rounded-lg border shadow-2xs transition hover:scale-110 cursor-pointer ${
                      logoComponent.props?.color?.toLowerCase() === cHex.toLowerCase() ? 'ring-2 ring-indigo-500 scale-110' : 'border-slate-300'
                    }`}
                    style={{ backgroundColor: cHex }}
                    title={cHex}
                  />
                ))}
              </div>
            </div>

            {/* Font Size & Weight */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Ukuran Font</label>
                <select
                  value={logoComponent.props?.fontSize || '20px'}
                  onChange={(e) => updateComponentProps(sectionId, logoComponent.id, { fontSize: e.target.value })}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-800"
                >
                  {['14px', '16px', '18px', '20px', '22px', '24px', '28px', '32px'].map(sz => (
                    <option key={sz} value={sz}>{sz}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-600 mb-1">Ketebalan (Weight)</label>
                <select
                  value={logoComponent.props?.fontWeight || '900'}
                  onChange={(e) => updateComponentProps(sectionId, logoComponent.id, { fontWeight: e.target.value })}
                  className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-800"
                >
                  <option value="600">SemiBold (600)</option>
                  <option value="700">Bold (700)</option>
                  <option value="800">ExtraBold (800)</option>
                  <option value="900">Black (900)</option>
                </select>
              </div>
            </div>

            {/* Letter Spacing */}
            <div>
              <label className="block text-[10px] font-bold text-slate-600 mb-1">Jarak Huruf (Letter Spacing)</label>
              <select
                value={logoComponent.props?.letterSpacing || '0.1em'}
                onChange={(e) => updateComponentProps(sectionId, logoComponent.id, { letterSpacing: e.target.value })}
                className="w-full px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-800"
              >
                <option value="normal">Normal</option>
                <option value="0.05em">Sedikit (0.05em)</option>
                <option value="0.1em">Sedang (0.1em)</option>
                <option value="0.18em">Lebar (0.18em)</option>
                <option value="0.3em">Sangat Lebar (0.3em)</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 2. NAVIGATION LINKS EDITOR                                    */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="space-y-3 p-4 bg-slate-50/80 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
            <Link className="h-4 w-4 text-indigo-600" />
            <span>Link Navigasi Menu</span>
          </h4>
          <button
            type="button"
            onClick={handleAddMenuItem}
            className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition cursor-pointer"
          >
            <Plus className="h-3 w-3" />
            <span>Tambah Link</span>
          </button>
        </div>

        <div className="space-y-2">
          {menuComponents.map((item, index) => (
            <div
              key={item.id}
              className="p-3 bg-white rounded-xl border border-slate-200 space-y-2 shadow-2xs"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-black flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-800">{item.props?.label || `Menu ${index + 1}`}</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeComponent(sectionId, item.id)}
                  className="p-1 text-slate-400 hover:text-rose-600 rounded-lg transition cursor-pointer"
                  title="Hapus Link Navigasi"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 mb-0.5">Label Menu</label>
                  <input
                    type="text"
                    value={item.props?.label || ''}
                    onChange={(e) => updateComponentProps(sectionId, item.id, { label: e.target.value })}
                    className="w-full px-2 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 mb-0.5">Target Link (#id / url)</label>
                  <input
                    type="text"
                    value={item.props?.href || '#'}
                    onChange={(e) => updateComponentProps(sectionId, item.id, { href: e.target.value })}
                    className="w-full px-2 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-800"
                  />
                </div>
              </div>
            </div>
          ))}

          {menuComponents.length === 0 && (
            <div className="text-xs text-slate-400 text-center py-4 bg-white rounded-xl border border-dashed border-slate-200">
              Belum ada item menu navigasi. Klik "Tambah Link" untuk menambahkan menu.
            </div>
          )}
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 3. CTA BUTTON EDITOR                                          */}
      {/* ───────────────────────────────────────────────────────────── */}
      {ctaComponent && (
        <div className="space-y-3 p-4 bg-slate-50/80 rounded-2xl border border-slate-200 shadow-xs">
          <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider">Tombol CTA Navbar</h4>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[10px] font-bold text-slate-600 mb-1">Teks Tombol CTA</label>
              <input
                type="text"
                value={ctaComponent.props?.label || ''}
                onChange={(e) => updateComponentProps(sectionId, ctaComponent.id, { label: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-600 mb-1">Target Link CTA</label>
              <input
                type="text"
                value={ctaComponent.props?.href || '#contact'}
                onChange={(e) => updateComponentProps(sectionId, ctaComponent.id, { href: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-mono text-slate-800"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}