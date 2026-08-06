import { useState, useEffect } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import { getComponentConfig } from '../../utils/componentRegistry';

export default function PropertyPanel() {
  const { sections, selectedSectionId, selectedComponentId, updateComponentProps, removeComponent } = useBuilderStore();
  const [formValues, setFormValues] = useState({});

  const selectedSection = sections.find(s => s.id === selectedSectionId);
  const selectedComponent = selectedSection?.components?.find(c => c.id === selectedComponentId);

  const componentConfig = selectedComponent ? getComponentConfig(selectedComponent.type) : null;

  useEffect(() => {
    if (selectedComponent) {
      const defaults = {};
      Object.entries(componentConfig?.props || {}).forEach(([key, config]) => {
        defaults[key] = selectedComponent.props[key] ?? config.default;
      });
      setFormValues(defaults);
    } else {
      setFormValues({});
    }
  }, [selectedComponent?.id, selectedComponentId]);

  const handleChange = (key, value) => {
    const newValues = { ...formValues, [key]: value };
    setFormValues(newValues);

    // Realtime update - no Apply button needed
    if (selectedSectionId && selectedComponentId) {
      updateComponentProps(selectedSectionId, selectedComponentId, { [key]: value });
    }
  };

  const handleDelete = () => {
    if (selectedSectionId && selectedComponentId) {
      removeComponent(selectedSectionId, selectedComponentId);
    }
  };

  if (!selectedComponent) {
    return (
      <div className="p-4">
        <h2 className="text-sm font-bold text-slate-900 mb-4">Properties</h2>
        <div className="p-4 bg-slate-50 rounded-xl text-center">
          <p className="text-xs text-slate-500">
            Select a section or component to edit its properties
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold text-slate-900">Properties</h2>
        <span className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full">
          {componentConfig?.label || selectedComponent.type}
        </span>
      </div>

      <div className="space-y-4">
        {Object.entries(componentConfig?.props || {}).map(([key, config]) => (
          <div key={key}>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {config.label}
            </label>
            {renderInput(key, config, formValues[key], handleChange)}
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button
          onClick={handleDelete}
          className="w-full px-4 py-2 bg-red-50 text-red-600 text-sm font-bold rounded-lg hover:bg-red-100 transition"
        >
          Delete Component
        </button>
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
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          ))}
        </select>
      );

    case 'color':
      return (
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(key, e.target.value)}
            className="w-10 h-9 border border-slate-200 rounded-lg cursor-pointer"
          />
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(key, e.target.value)}
            className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-mono"
          />
        </div>
      );

    case 'range':
      return (
        <input
          type="range"
          min={config.min}
          max={config.max}
          value={value}
          onChange={(e) => onChange(key, parseInt(e.target.value))}
          className="w-full"
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
