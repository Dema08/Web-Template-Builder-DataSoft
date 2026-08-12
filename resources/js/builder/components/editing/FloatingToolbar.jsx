import { useEffect, useState } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import { getComponentConfig } from '../../utils/componentRegistry';

export default function FloatingToolbar() {
  const {
    sections,
    selectedSectionId,
    selectedComponentId,
    updateComponentProps,
    setSelectedProperty,
    toggleLockComponent,
  } = useBuilderStore();
  const [position, setPosition] = useState(null);

  const selectedSection = sections.find(s => s.id === selectedSectionId);
  const selectedComponent = selectedSection?.components?.find(c => c.id === selectedComponentId);
  const componentConfig = selectedComponent ? getComponentConfig(selectedComponent.type) : null;

  useEffect(() => {
    if (selectedComponent) {
      // Find the DOM element and position toolbar above it
      const element = document.getElementById(selectedComponent.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        setPosition({
          top: rect.top - 50,
          left: rect.left + rect.width / 2,
        });
      }
    }
  }, [selectedComponentId, selectedComponent?.props]);

  if (!selectedComponent || !componentConfig || !position) return null;

  const handleUpdate = (prop, value) => {
    updateComponentProps(selectedSectionId, selectedComponentId, { [prop]: value });
  };

  const renderTextToolbar = () => (
    <div className="flex items-center gap-1">
      <button
        onClick={() => {
          const fontWeight = selectedComponent.props.fontWeight === '700' ? '400' : '700';
          handleUpdate('fontWeight', fontWeight);
        }}
        className={`px-2 py-1 text-xs rounded hover:bg-slate-100 ${selectedComponent.props.fontWeight === '700' ? 'font-bold bg-slate-100' : ''}`}
        title="Bold"
      >
        B
      </button>
      <button
        onClick={() => handleUpdate('fontStyle', selectedComponent.props.fontStyle === 'italic' ? 'normal' : 'italic')}
        className={`px-2 py-1 text-xs italic rounded hover:bg-slate-100 ${selectedComponent.props.fontStyle === 'italic' ? 'bg-slate-100' : ''}`}
        title="Italic"
      >
        I
      </button>
      <button
        onClick={() => handleUpdate('textDecoration', selectedComponent.props.textDecoration === 'underline' ? 'none' : 'underline')}
        className={`px-2 py-1 text-xs underline rounded hover:bg-slate-100 ${selectedComponent.props.textDecoration === 'underline' ? 'bg-slate-100' : ''}`}
        title="Underline"
      >
        U
      </button>
      <div className="w-px h-4 bg-slate-200 mx-1" />
      <input
        type="color"
        value={selectedComponent.props.color || '#000000'}
        onChange={(e) => handleUpdate('color', e.target.value)}
        className="w-6 h-6 rounded cursor-pointer"
        title="Text Color"
      />
      <div className="w-px h-4 bg-slate-200 mx-1" />
      {['left', 'center', 'right'].map(align => (
        <button
          key={align}
          onClick={() => handleUpdate('align', align)}
          className={`px-2 py-1 text-xs rounded hover:bg-slate-100 ${selectedComponent.props.align === align ? 'bg-slate-100' : ''}`}
          title={`Align ${align}`}
        >
          {align === 'left' ? '⇤' : align === 'center' ? '⇹' : '⇥'}
        </button>
      ))}
    </div>
  );

  const renderButtonToolbar = () => (
    <div className="flex items-center gap-2">
      <select
        value={selectedComponent.props.radius || 'md'}
        onChange={(e) => handleUpdate('radius', e.target.value)}
        className="px-2 py-1 text-xs border border-slate-200 rounded text-slate-600"
      >
        <option value="none">Radius: None</option>
        <option value="sm">Radius: SM</option>
        <option value="md">Radius: MD</option>
        <option value="lg">Radius: LG</option>
        <option value="full">Radius: Full</option>
      </select>
      <label className="flex items-center gap-1 text-xs text-slate-600">
        BG
        <input
          type="color"
          value={selectedComponent.props.background || '#4f46e5'}
          onChange={(e) => handleUpdate('background', e.target.value)}
          className="w-6 h-6 rounded cursor-pointer"
        />
      </label>
      <label className="flex items-center gap-1 text-xs text-slate-600">
        Text
        <input
          type="color"
          value={selectedComponent.props.color || '#ffffff'}
          onChange={(e) => handleUpdate('color', e.target.value)}
          className="w-6 h-6 rounded cursor-pointer"
        />
      </label>
      <select
        value={selectedComponent.props.shadow || 'md'}
        onChange={(e) => handleUpdate('shadow', e.target.value)}
        className="px-2 py-1 text-xs border border-slate-200 rounded text-slate-600"
      >
        <option value="none">Shadow: None</option>
        <option value="sm">Shadow: SM</option>
        <option value="md">Shadow: MD</option>
        <option value="lg">Shadow: LG</option>
      </select>
    </div>
  );

  const renderImageToolbar = () => (
    <div className="flex items-center gap-2">
      <button
        onClick={() => document.getElementById(`file-input-${selectedComponent.id}`)?.click()}
        className="px-2 py-1 text-xs bg-slate-100 rounded hover:bg-slate-200"
      >
        Replace
      </button>
      <input
        id={`file-input-${selectedComponent.id}`}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = () => handleUpdate('src', reader.result);
            reader.readAsDataURL(file);
          }
        }}
      />
      <label className="flex items-center gap-1 text-xs text-slate-600">
        Opacity
        <input
          type="range"
          min="0"
          max="100"
          value={selectedComponent.props.opacity ?? 100}
          onChange={(e) => handleUpdate('opacity', parseInt(e.target.value))}
          className="w-16"
        />
      </label>
      <select
        value={selectedComponent.props.borderRadius || '0'}
        onChange={(e) => handleUpdate('borderRadius', e.target.value)}
        className="px-2 py-1 text-xs border border-slate-200 rounded text-slate-600"
      >
        <option value="0">Radius: 0</option>
        <option value="8px">Radius: 8</option>
        <option value="16px">Radius: 16</option>
        <option value="50%">Radius: Full</option>
      </select>
    </div>
  );

  const toolbarStyle = {
    position: 'fixed',
    top: position.top,
    left: position.left,
    transform: 'translateX(-50%)',
    zIndex: 100,
  };

  const isLocked = !!selectedComponent?.isLocked;

  return (
    <div
      style={toolbarStyle}
      className="bg-white border border-slate-200 rounded-xl shadow-lg px-3 py-2 flex items-center gap-2"
      onClick={(e) => e.stopPropagation()}
    >
      {selectedComponent.type === 'text' || selectedComponent.type === 'heading'
        ? renderTextToolbar()
        : selectedComponent.type === 'button'
          ? renderButtonToolbar()
          : selectedComponent.type === 'image'
            ? renderImageToolbar()
            : null}

      <div className="w-px h-4 bg-slate-200 mx-1" />

      {/* Lock / Unlock Toggle Button */}
      <button
        onClick={() => toggleLockComponent(selectedSectionId, selectedComponentId)}
        className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-bold transition ${
          isLocked ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
        }`}
        title={isLocked ? 'Unlock Component' : 'Lock Component'}
      >
        <span>{isLocked ? '🔒 Locked' : '🔓 Unlock'}</span>
      </button>
    </div>
  );
}
