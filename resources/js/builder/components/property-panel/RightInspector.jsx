import { useState, useEffect } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import { getComponentConfig } from '../../utils/componentRegistry';
import { getPropertyConfig, getPropertyGroup, PROPERTY_GROUPS } from '../../utils/propertyEngine';
import { Type, AlignLeft, Palette, Square, Frame, Sun, Play, Move, Maximize, MousePointer, Trash2, RotateCcw, RectangleHorizontal } from 'lucide-react';

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

const FONT_WEIGHTS = [
  { value: '300', label: 'Light 300' },
  { value: '400', label: 'Regular 400' },
  { value: '500', label: 'Medium 500' },
  { value: '600', label: 'Semi Bold 600' },
  { value: '700', label: 'Bold 700' },
  { value: '800', label: 'Extra Bold 800' },
  { value: '900', label: 'Black 900' },
];

const COLOR_PRESETS = [
  '#000000', '#ffffff', '#4f46e5', '#7c3aed', '#db2777', '#dc2626',
  '#ea580c', '#d97706', '#65a30d', '#16a34a', '#0891b2', '#2563eb',
  '#0f172a', '#1e293b', '#475569', '#64748b', '#94a3b8', '#cbd5e1',
  '#f8fafc', '#fee2e2', '#fef3c7', '#d1fae5', '#dbeafe', '#ede9fe',
];

const TYPOGRAPHY_TABS = [
  { id: 'content', label: 'Content', icon: Type },
  { id: 'typography', label: 'Typography', icon: Type },
  { id: 'color', label: 'Colors', icon: Palette },
  { id: 'spacing', label: 'Spacing', icon: Square },
  { id: 'position', label: 'Position', icon: Move },
  { id: 'border', label: 'Border', icon: RectangleHorizontal },
  { id: 'shadow', label: 'Shadow', icon: Sun },
  { id: 'background', label: 'Background', icon: Palette },
  { id: 'animation', label: 'Animation', icon: RotateCcw },
];

export default function RightInspector() {
  const [activeTab, setActiveTab] = useState('content');
  const {
    sections,
    selectedSectionId,
    selectedComponentId,
    updateComponentProps,
    updateComponentPosition,
    removeComponent,
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
  const propertyConfig = selectedComponent ? getPropertyConfig(selectedComponent.type) : null;

  useEffect(() => {
    if (selectedComponent) {
      const defaults = {};
      Object.entries(propertyConfig?.props || {}).forEach(([key, config]) => {
        defaults[key] = selectedComponent.props[key] ?? config.default;
      });
      // Merge with position props for convenience
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

  const handlePositionChange = (key, value) => {
    const newValues = { ...positionValues, [key]: value };
    setPositionValues(newValues);

    if (selectedSectionId && selectedComponentId) {
      updateComponentPosition(selectedSectionId, selectedComponentId, { [key]: value });
    }
  };

  const handleDelete = () => {
    if (selectedSectionId && selectedComponentId) {
      if (selectedComponent?.isLocked) return; // refuse if locked
      removeComponent(selectedSectionId, selectedComponentId);
    }
  };

  const isLocked = !!(selectedComponent?.isLocked);

  if (!selectedComponent) {
    return (
      <div className="h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
              <Move className="h-8 w-8 text-slate-400" />
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

  const renderContentPanel = () => (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Component</h3>
        <span className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full font-bold">
          {componentConfig?.label || selectedComponent.type}
        </span>
      </div>

      {/* Content Fields */}
      {Object.entries(propertyConfig?.props || {}).map(([key, config]) => (
        <div key={key}>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            {config.label}
          </label>
          {renderInput(key, config, formValues[key], handleChange)}
        </div>
      ))}
    </div>
  );

  const renderTypographyPanel = () => (
    <div className="p-4 space-y-4">
      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Font</h3>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">Font Family</label>
        <select
          value={formValues.fontFamily || 'Inter'}
          onChange={(e) => handleChange('fontFamily', e.target.value)}
          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
        >
          {FONT_FAMILIES.map(f => (
            <option key={f.value} value={f.value} style={{ fontFamily: f.value }}>
              {f.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">Font Size</label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="8"
              max="96"
              value={parseInt(formValues['fontSize']) || 16}
              onChange={(e) => handleChange('fontSize', `${e.target.value}px`)}
              className="flex-1"
            />
            <input
              type="text"
              value={formValues['fontSize'] || '16px'}
              onChange={(e) => handleChange('fontSize', e.target.value)}
              className="w-16 px-2 py-2 bg-white border border-slate-200 rounded-lg text-sm text-center"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">Font Weight</label>
          <select
            value={formValues['fontWeight'] || '400'}
            onChange={(e) => handleChange('fontWeight', e.target.value)}
            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
          >
            {FONT_WEIGHTS.map(w => (
              <option key={w.value} value={w.value}>{w.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">Text Align</label>
        <div className="flex gap-1">
          {[
            { value: 'left', label: 'Left' },
            { value: 'center', label: 'Center' },
            { value: 'right', label: 'Right' },
          ].map(a => (
            <button
              key={a.value}
              onClick={() => handleChange('align', a.value)}
              className={`flex-1 px-3 py-2 text-xs font-bold rounded-lg transition ${
                (formValues['align'] || 'left') === a.value
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">Line Height</label>
          <input
            type="text"
            value={formValues['lineHeight'] || '1.5'}
            onChange={(e) => handleChange('lineHeight', e.target.value)}
            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">Letter Spacing</label>
          <input
            type="text"
            value={formValues['letterSpacing'] || 'normal'}
            onChange={(e) => handleChange('letterSpacing', e.target.value)}
            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">Text Transform</label>
          <select
            value={formValues['textTransform'] || 'none'}
            onChange={(e) => handleChange('textTransform', e.target.value)}
            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
          >
            <option value="none">None</option>
            <option value="uppercase">Uppercase</option>
            <option value="lowercase">Lowercase</option>
            <option value="capitalize">Capitalize</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">Decoration</label>
          <select
            value={formValues['textDecoration'] || 'none'}
            onChange={(e) => handleChange('textDecoration', e.target.value)}
            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
          >
            <option value="none">None</option>
            <option value="underline">Underline</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">Font Style</label>
        <div className="flex gap-1">
          {[
            { value: 'normal', label: 'Normal' },
            { value: 'italic', label: 'Italic' },
          ].map(s => (
            <button
              key={s.value}
              onClick={() => handleChange('fontStyle', s.value)}
              className={`flex-1 px-3 py-2 text-xs font-bold rounded-lg transition ${
                (formValues['fontStyle'] || 'normal') === s.value
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderColorPanel = () => (
    <div className="p-4 space-y-4">
      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Colors</h3>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">Text Color</label>
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={formValues['color'] || '#000000'}
            onChange={(e) => handleChange('color', e.target.value)}
            className="w-10 h-9 border border-slate-200 rounded-lg cursor-pointer"
          />
          <input
            type="text"
            value={formValues['color'] || '#000000'}
            onChange={(e) => handleChange('color', e.target.value)}
            className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-mono"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">Background Color</label>
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={formValues['background'] || '#00000000'}
            onChange={(e) => handleChange('background', e.target.value)}
            className="w-10 h-9 border border-slate-200 rounded-lg cursor-pointer"
          />
          <input
            type="text"
            value={formValues['background'] || ''}
            onChange={(e) => handleChange('background', e.target.value)}
            className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-mono"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">Color Presets</label>
        <div className="flex flex-wrap gap-2">
          {COLOR_PRESETS.map(color => (
            <button
              key={color}
              onClick={() => handleChange('color', color)}
              className="w-7 h-7 rounded-full border border-slate-200 hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const renderSpacingPanel = () => (
    <div className="p-4 space-y-4">
      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Margin</h3>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">Top</label>
          <input
            type="text"
            value={formValues['marginTop'] || formValues['margin']?.split(' ')[0] || '0'}
            onChange={(e) => handleChange('marginTop', e.target.value)}
            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">Right</label>
          <input
            type="text"
            value={formValues['marginRight'] || formValues['margin']?.split(' ')[1] || '0'}
            onChange={(e) => handleChange('marginRight', e.target.value)}
            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">Bottom</label>
          <input
            type="text"
            value={formValues['marginBottom'] || formValues['margin']?.split(' ')[2] || '0'}
            onChange={(e) => handleChange('marginBottom', e.target.value)}
            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">Left</label>
          <input
            type="text"
            value={formValues['marginLeft'] || formValues['margin']?.split(' ')[3] || '0'}
            onChange={(e) => handleChange('marginLeft', e.target.value)}
            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
          />
        </div>
      </div>

      <div className="pt-4 border-t border-slate-200">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Padding</h3>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Top</label>
            <input
              type="text"
              value={formValues['paddingTop'] || formValues['padding']?.split(' ')[0] || '0'}
              onChange={(e) => handleChange('paddingTop', e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Right</label>
            <input
              type="text"
              value={formValues['paddingRight'] || formValues['padding']?.split(' ')[1] || '0'}
              onChange={(e) => handleChange('paddingRight', e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Bottom</label>
            <input
              type="text"
              value={formValues['paddingBottom'] || formValues['padding']?.split(' ')[2] || '0'}
              onChange={(e) => handleChange('paddingBottom', e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Left</label>
            <input
              type="text"
              value={formValues['paddingLeft'] || formValues['padding']?.split(' ')[3] || '0'}
              onChange={(e) => handleChange('paddingLeft', e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
            />
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-200">
        <label className="block text-xs font-bold text-slate-700 mb-1.5">Gap</label>
        <input
          type="text"
          value={formValues['gap'] || '0'}
          onChange={(e) => handleChange('gap', e.target.value)}
          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
        />
      </div>
    </div>
  );

  const renderPositionPanel = () => (
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
            <label className="block text-xs font-bold text-slate-700 mb-1.5">W</label>
            <input
              type="text"
              value={positionValues.width}
              onChange={(e) => handlePositionChange('width', e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
              placeholder="auto"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">H</label>
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
            <div className="flex items-center gap-1">
              <input
                type="range"
                min="0"
                max="360"
                value={positionValues.rotation}
                onChange={(e) => handlePositionChange('rotation', parseInt(e.target.value) || 0)}
                className="flex-1"
              />
              <span className="text-xs font-mono w-8 text-center">{positionValues.rotation}°</span>
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Scale</label>
            <input
              type="number"
              step="0.1"
              min="0.1"
              max="3"
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

  const renderBorderPanel = () => (
    <div className="p-4 space-y-4">
      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Border</h3>
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">Border Width</label>
        <select
          value={formValues['borderWidth'] || '0'}
          onChange={(e) => handleChange('borderWidth', e.target.value)}
          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
        >
          <option value="0">None</option>
          <option value="1px">1px</option>
          <option value="2px">2px</option>
          <option value="3px">3px</option>
          <option value="4px">4px</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">Border Color</label>
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={formValues['borderColor'] || '#e5e7eb'}
            onChange={(e) => handleChange('borderColor', e.target.value)}
            className="w-10 h-9 border border-slate-200 rounded-lg cursor-pointer"
          />
          <input
            type="text"
            value={formValues['borderColor'] || '#e5e7eb'}
            onChange={(e) => handleChange('borderColor', e.target.value)}
            className="flex-1 px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm font-mono"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">Border Radius</label>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min="0"
            max="50"
            value={parseInt(formValues['borderRadius']) || 0}
            onChange={(e) => handleChange('borderRadius', `${e.target.value}px`)}
            className="flex-1"
          />
          <input
            type="text"
            value={formValues['borderRadius'] || '0'}
            onChange={(e) => handleChange('borderRadius', e.target.value)}
            className="w-16 px-2 py-2 bg-white border border-slate-200 rounded-lg text-sm text-center"
          />
        </div>
      </div>
    </div>
  );

  const renderShadowPanel = () => (
    <div className="p-4 space-y-4">
      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Shadow</h3>
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">Shadow Type</label>
        <select
          value={formValues['shadow'] || 'none'}
          onChange={(e) => handleChange('shadow', e.target.value)}
          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
        >
          <option value="none">None</option>
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
          <option value="xl">X-Large</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">Opacity</label>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min="0"
            max="100"
            value={formValues['opacity'] ?? 100}
            onChange={(e) => handleChange('opacity', parseInt(e.target.value))}
            className="flex-1"
          />
          <span className="text-xs font-bold w-8 text-center">{formValues['opacity'] ?? 100}%</span>
        </div>
      </div>
    </div>
  );

  const renderAnimationPanel = () => (
    <div className="p-4 space-y-4">
      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Animation</h3>
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">Hover Effect</label>
        <select
          value={formValues['hoverEffect'] || 'none'}
          onChange={(e) => handleChange('hoverEffect', e.target.value)}
          className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
        >
          <option value="none">None</option>
          <option value="scale">Scale</option>
          <option value="lift">Lift</option>
          <option value="glow">Glow</option>
          <option value="slide">Slide</option>
        </select>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'content':
        return renderContentPanel();
      case 'typography':
        return renderTypographyPanel();
      case 'color':
        return renderColorPanel();
      case 'spacing':
        return renderSpacingPanel();
      case 'position':
        return renderPositionPanel();
      case 'border':
        return renderBorderPanel();
      case 'shadow':
        return renderShadowPanel();
      case 'background':
        return renderColorPanel();
      case 'animation':
        return renderAnimationPanel();
      default:
        return renderContentPanel();
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Tabs */}
      <div className="flex items-center gap-1 px-3 pt-3 pb-2 border-b border-slate-200 overflow-x-auto scrollbar-thin">
        {TYPOGRAPHY_TABS.map(tab => {
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
        {renderTabContent()}

        {/* Delete */}
        <div className="p-4 pt-0">
          {isLocked ? (
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