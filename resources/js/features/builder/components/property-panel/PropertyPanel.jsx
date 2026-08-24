import { useState, useEffect } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import { getComponentConfig } from '../../utils/componentRegistry';

export default function PropertyPanel() {
  const { sections, selectedSectionId, selectedComponentId, updateComponentProps, removeComponent } = useBuilderStore();
  const [formValues, setFormValues] = useState({});

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

  const selectedSection = sections.find(s => s.id === selectedSectionId);
  const selectedComponent = selectedSection ? findComponentInTree(selectedSection.components, selectedComponentId) : null;

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
      if (selectedComponent?.isLocked) return; // refuse if locked
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
        {selectedComponent?.isLocked ? (
          <div className="w-full px-4 py-2 bg-amber-50 text-amber-600 text-sm font-bold rounded-lg flex items-center justify-center gap-2 cursor-not-allowed select-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Locked – Cannot Delete
          </div>
        ) : (
          <button
            onClick={handleDelete}
            className="w-full px-4 py-2 bg-red-50 text-red-600 text-sm font-bold rounded-lg hover:bg-red-100 transition"
          >
            Delete Component
          </button>
        )}
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
