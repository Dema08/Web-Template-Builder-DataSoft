import { useState } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import { useMediaStore, STOCK_GALLERY, STOCK_LOGOS } from '../../stores/mediaStore';
import { Image as ImageIcon, Upload, Search, Check, Plus } from 'lucide-react';
import { toast } from '@store';

export default function MediaPanel() {
  const [searchQuery, setSearchQuery] = useState('');
  const { uploads, addUpload, setSelectedMedia } = useMediaStore();
  const { sections, selectedSectionId, selectedComponentId, updateComponentProps, addComponent } = useBuilderStore();

  // Filter gallery items
  const filteredGallery = STOCK_GALLERY.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredLogos = STOCK_LOGOS.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Helper to format file size
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  // Handle direct upload from media panel
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      toast.error('Supported formats: PNG, JPG, JPEG, SVG, WEBP', 'Invalid File');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      const newMedia = addUpload({
        name: file.name,
        url: dataUrl,
        size: formatFileSize(file.size),
        type: 'image',
      });
      toast.success(`Uploaded ${file.name}`, 'Success');
      applyImageToComponent(dataUrl, file.name);
    };
    reader.readAsDataURL(file);
  };

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

  // Apply chosen image to selected component OR add new Image component
  const applyImageToComponent = (imageUrl, imageName) => {
    setSelectedMedia({ url: imageUrl, name: imageName });

    let targetSectionId = selectedSectionId;
    let targetComponent = null;

    if (!targetSectionId && sections.length > 0) {
      targetSectionId = sections[0].id;
    }

    if (selectedComponentId) {
      for (const sec of sections) {
        const found = findComponentInTree(sec.components, selectedComponentId);
        if (found) {
          targetSectionId = sec.id;
          targetComponent = found;
          break;
        }
      }
    }

    if (targetComponent && targetSectionId) {
      // Intelligently find property name for image (src, image, avatar, bgImage, etc.)
      const currentProps = targetComponent.props || {};
      const propUpdates = {};

      if ('src' in currentProps || targetComponent.type === 'image') {
        propUpdates.src = imageUrl;
      } else if ('image' in currentProps) {
        propUpdates.image = imageUrl;
      } else if ('avatar' in currentProps) {
        propUpdates.avatar = imageUrl;
      } else if ('bgImage' in currentProps) {
        propUpdates.bgImage = imageUrl;
      } else {
        propUpdates.src = imageUrl;
      }

      updateComponentProps(targetSectionId, targetComponent.id, propUpdates);
      toast.success(`Image applied to "${targetComponent.type}" component`, 'Updated');
    } else if (targetSectionId) {
      // No component selected -> Add new Image component
      addComponent(targetSectionId, 'image');
      setTimeout(() => {
        const updatedSections = useBuilderStore.getState().sections;
        const currentSec = updatedSections.find((s) => s.id === targetSectionId);
        const newComp = currentSec?.components[currentSec.components.length - 1];
        if (newComp) {
          updateComponentProps(targetSectionId, newComp.id, { src: imageUrl, alt: imageName });
        }
      }, 10);
      toast.success('New Image component added to canvas', 'Component Created');
    } else {
      toast.info('Please add a section first', 'Notice');
    }
  };

  return (
    <div className="p-4 space-y-5">
      {/* Upload Banner */}
      <div>
        <label className="w-full flex flex-col items-center gap-2 p-5 border-2 border-dashed border-slate-300 rounded-2xl hover:border-indigo-500 hover:bg-indigo-50/50 transition cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Upload className="h-5 w-5" />
          </div>
          <div className="text-center">
            <span className="text-xs font-extrabold text-slate-800 block">Upload Media</span>
            <span className="text-[11px] text-slate-500">PNG, JPG, WEBP, SVG</span>
          </div>
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg, image/svg+xml, image/webp"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>
      </div>

      {/* Search Filter */}
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search stock media..."
          className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition"
        />
      </div>

      {/* User Uploads Row (if any) */}
      {uploads.length > 0 && (
        <div>
          <h3 className="text-xs font-extrabold text-slate-800 mb-2 flex items-center justify-between">
            <span>Your Uploads</span>
            <span className="text-[10px] text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full font-bold">
              {uploads.length}
            </span>
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {uploads.map((item) => (
              <button
                key={item.id}
                onClick={() => applyImageToComponent(item.url, item.name)}
                className="group relative aspect-square rounded-xl overflow-hidden border border-slate-200 hover:border-indigo-500 hover:shadow-md transition bg-slate-100"
                title={item.name}
              >
                <img src={item.url} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Plus className="h-5 w-5 text-white" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Stock Gallery */}
      <div>
        <h3 className="text-xs font-extrabold text-slate-800 mb-2">Stock Photos</h3>
        <div className="grid grid-cols-2 gap-2.5">
          {filteredGallery.map((item) => (
            <button
              key={item.id}
              onClick={() => applyImageToComponent(item.url, item.name)}
              className="group relative aspect-square rounded-xl overflow-hidden border border-slate-200 hover:border-indigo-500 hover:shadow-md transition text-left bg-slate-100"
            >
              <img src={item.url} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2">
                <span className="text-[10px] font-bold text-white truncate">{item.name}</span>
                <span className="text-[9px] text-indigo-200 uppercase tracking-wider font-semibold">{item.category}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Stock Logos */}
      <div>
        <h3 className="text-xs font-extrabold text-slate-800 mb-2">Sample Logos</h3>
        <div className="grid grid-cols-3 gap-2">
          {filteredLogos.map((item) => (
            <button
              key={item.id}
              onClick={() => applyImageToComponent(item.url, item.name)}
              className="group relative aspect-square rounded-xl overflow-hidden border border-slate-200 hover:border-indigo-500 hover:shadow-md transition bg-slate-50 p-1 flex items-center justify-center"
            >
              <img src={item.url} alt={item.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
