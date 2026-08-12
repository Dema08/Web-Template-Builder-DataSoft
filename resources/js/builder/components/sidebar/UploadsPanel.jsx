import { useState } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import { useMediaStore } from '../../stores/mediaStore';
import { Upload, Trash2, Image as ImageIcon, Check, Plus, FileText } from 'lucide-react';
import { toast } from '@store';

export default function UploadsPanel() {
  const [isDragging, setIsDragging] = useState(false);
  const { uploads, addUpload, removeUpload, setSelectedMedia } = useMediaStore();
  const { sections, selectedSectionId, selectedComponentId, updateComponentProps, addComponent } = useBuilderStore();

  const formatFileSize = (bytes) => {
    if (!bytes) return '1.2 MB';
    if (typeof bytes === 'string') return bytes;
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const processFile = (file) => {
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      toast.error('Supported formats: PNG, JPG, JPEG, SVG, WEBP', 'Invalid File Format');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      const newUpload = addUpload({
        name: file.name,
        url: dataUrl,
        size: formatFileSize(file.size),
        type: file.type.includes('svg') ? 'svg' : 'image',
      });
      toast.success(`Uploaded ${file.name}`, 'Success');
      applyImageToComponent(dataUrl, file.name);
    };
    reader.readAsDataURL(file);
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files || []);
    files.forEach(processFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files || []);
    files.forEach(processFile);
  };

  const applyImageToComponent = (imageUrl, imageName) => {
    setSelectedMedia({ url: imageUrl, name: imageName });

    let targetSectionId = selectedSectionId;
    let targetComponent = null;

    if (!targetSectionId && sections.length > 0) {
      targetSectionId = sections[0].id;
    }

    if (selectedComponentId) {
      for (const sec of sections) {
        const found = sec.components?.find((c) => c.id === selectedComponentId);
        if (found) {
          targetSectionId = sec.id;
          targetComponent = found;
          break;
        }
      }
    }

    if (targetComponent && targetSectionId) {
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
      {/* Dropzone */}
      <label
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`w-full flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-2xl transition cursor-pointer text-center ${
          isDragging
            ? 'border-indigo-600 bg-indigo-50/80 scale-[0.99]'
            : 'border-slate-300 hover:border-indigo-500 hover:bg-indigo-50/30'
        }`}
      >
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3 shadow-sm">
          <Upload className="h-6 w-6" />
        </div>
        <p className="text-xs font-extrabold text-slate-800 mb-1">
          {isDragging ? 'Drop files now' : 'Click or drop files here'}
        </p>
        <p className="text-[11px] text-slate-500 font-medium mb-3">
          PNG, JPG, JPEG, SVG, WEBP
        </p>
        <span className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-bold rounded-xl shadow-sm transition">
          Browse Computer
        </span>
        <input
          type="file"
          multiple
          accept="image/png, image/jpeg, image/jpg, image/svg+xml, image/webp"
          className="hidden"
          onChange={handleFileSelect}
        />
      </label>

      {/* Uploaded Files List */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-extrabold text-slate-800">Uploaded Files</h3>
          <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
            {uploads.length} items
          </span>
        </div>

        {uploads.length === 0 ? (
          <div className="p-6 border border-slate-200/80 rounded-2xl text-center bg-slate-50">
            <ImageIcon className="h-8 w-8 text-slate-300 mx-auto mb-2" />
            <p className="text-xs font-bold text-slate-600">No uploaded files yet</p>
            <p className="text-[11px] text-slate-400 mt-0.5">Uploaded images will appear here</p>
          </div>
        ) : (
          <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
            {uploads.map((file) => (
              <div
                key={file.id}
                onClick={() => applyImageToComponent(file.url, file.name)}
                className="group flex items-center gap-3 p-2.5 bg-white border border-slate-200 rounded-xl hover:border-indigo-500 hover:shadow-sm transition cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-100 overflow-hidden shrink-0 border border-slate-200 flex items-center justify-center">
                  <img src={file.url} alt={file.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-slate-900 truncate group-hover:text-indigo-600 transition">
                    {file.name}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium mt-0.5">
                    <span>{file.size}</span>
                    <span>•</span>
                    <span>{file.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeUpload(file.id);
                      toast.success(`Removed ${file.name}`, 'Deleted');
                    }}
                    className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                    title="Delete Upload"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
