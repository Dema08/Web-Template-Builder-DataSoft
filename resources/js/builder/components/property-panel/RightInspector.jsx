import { useState, useEffect } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import { getComponentConfig } from '../../utils/componentRegistry';
import { getPropertyConfig, getPropertyGroup, PROPERTY_GROUPS } from '../../utils/propertyEngine';
import { Type, AlignLeft, Image, Video, MousePointer, Square, Palette, RectangleVertical, Frame, Sun, Play, Trash2, Move, Maximize, RotateCcw, Scaling } from 'lucide-react';

const GROUP_ICONS = {
  content: Type,
  typography: Type,
  color: Palette,
  spacing: Square,
  animation: Play,
  shadow: Sun,
  transform: Move,
  border: Frame,
  size: Maximize,
  position: Move,
};

export default function RightInspector() {
  const [activeTab, setActiveTab] = useState('content');
  const {
    sections,
    selectedSectionId,
    selectedComponentId,
    updateComponentProps,
    updateComponentPosition,
    removeComponent,
    selectComponent,
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

  const selectedSection = sections.find(s => s.id === selectedSectionId);
  const selectedComponent = selectedSection?.components?.find(c => c.id === selectedComponentId);

  const componentConfig = selectedComponent ? getComponentConfig(selectedComponent.type) : null;
  const propertyConfig = selectedComponent ? getPropertyConfig(selectedComponent.type) : null;

  useEffect(() => {
    if (selectedComponent) {
      const defaults = {};
      Object.entries(propertyConfig?.props || {}).forEach(([key, config]) => {
        // Special handling for content since it may be on a nested component
        defaults[key] = selectedComponent.props[key] ?? config.default;
      });
      setFormValues(defaults);

      // Set position values
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

  const handlePositionChange = (key, value) => {
    const newValues = { ...positionValues, [key]: value };
    setPositionValues(newValues);

    if (selectedSectionId && selectedComponentId) {
      updateComponentPosition(selectedSectionId, selectedComponentId, { [key]: value });
    }
  };

  const handleDelete = () => {
    if (selectedSectionId && selectedComponentId) {
      removeComponent(selectedSectionId, selectedComponentId);
    }
  };

  if (!selectedComponent) {
    return (
      <div className="h-full flex flex-col">
        {/* Empty State */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
              <MousePointer className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 mb-2">Select a Component</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Click on any component in the canvas to edit its properties
            </p>
          </div>
        </div>
      </div>
    );
  }

  const tabs = propertyConfig?.groups?.map(g => ({ id: g, label: PROPERTY_GROUPS[g]?.label || g, icon: GROUP_ICONS[g] || Type })) || [];

  const renderContentField = (key, config, value) => {
    return renderInput(key, config, value, handleChange);
  };

  const renderPositionTab = () => (
    <div className="p-4 space-y-4">
      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Position</h3>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">X</label>
          <input
            type="number"
            value={positionValues.x}
            onChange={(e) => handlePositionChange('x', parseInt(e.target.value) || 0)}
            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">Y</label>
          <input
            type="number"
            value={positionValues.y}
            onChange={(e) => handlePositionChange('y', parseInt(e.target.value) || 0)}
            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
          />
        </div>
      </div>

      <div className="pt-4 border-t border-slate-200">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Size</h3>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Width</label>
            <input
              type="text"
              value={positionValues.width}
              onChange={(e) => handlePositionChange('width', e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
              placeholder="auto"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Height</label>
            <input
              type="text"
              value={positionValues.height}
              onChange={(e) => handlePositionChange('height', e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
              placeholder="auto"
            />
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-200">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Transform</h3>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Rotation</label>
            <input
              type="number"
              value={positionValues.rotation}
              onChange={(e) => handlePositionChange('rotation', parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Scale</label>
            <input
              type="number"
              step="0.1"
              value={positionValues.scale}
              onChange={(e) => handlePositionChange('scale', parseFloat(e.target.value) || 1)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
            />
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-200">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Layer</h3>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">Z-Index</label>
          <input
            type="number"
            value={positionValues.zIndex}
            onChange={(e) => handlePositionChange('zIndex', parseInt(e.target.value) || 1)}
            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
          />
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    if (activeTab === 'position') {
      return renderPositionTab();
    }

    const props = propertyConfig?.props || {};
    return (
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Component Type</h3>
          <span className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full font-bold">
            {componentConfig?.label || selectedComponent.type}
          </span>
        </div>

        {Object.entries(props).map(([key, config]) => (
          <div key={key}>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              {config.label}
            </label>
            {renderContentField(key, config, formValues[key], handleChange)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col">
      {/* Tabs */}
      <div className="flex items-center gap-1 px-3 pt-3 pb-2 border-b border-slate-200 overflow-x-auto">
        {tabs.map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
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
        {renderTabContent()}

        {/* Delete */}
        <div className="p-4 pt-0">
          <button
            onClick={handleDelete}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-red-50 text-red-600 text-sm font-bold rounded-lg hover:bg-red-100 transition"
          >
            <Trash2 className="h-4 w-4" />
            Delete Component
          </button>
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
          {config.options.map(option => (
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