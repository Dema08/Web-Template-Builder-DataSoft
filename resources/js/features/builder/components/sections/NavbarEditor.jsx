import { useState } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import { Plus, X, GripVertical } from 'lucide-react';

export default function NavbarEditor({ sectionId, section }) {
  const { updateComponentProps, updateSectionStyles, addComponent, removeComponent } = useBuilderStore();
  const [showMenuEditor, setShowMenuEditor] = useState(false);

  const navbarProps = section.styles || {};

  const handleUpdate = (key, value) => {
    updateSectionStyles(sectionId, { [key]: value });
  };

  // Get menu items from components
  const menuComponents = section.components.filter(c => c.type === 'text' || c.type === 'heading');
  const logoComponent = section.components.find(c => c.type === 'image' || (c.type === 'heading' && c.props.content === 'Logo'));
  const ctaComponent = section.components.find(c => c.type === 'button');

  return (
    <div className="space-y-4">
      {/* Navbar Properties */}
      <div>
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Navbar Settings</h3>
        
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Height</label>
            <input
              type="text"
              value={navbarProps.height || 'auto'}
              onChange={(e) => handleUpdate('height', e.target.value)}
              placeholder="auto"
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Sticky</label>
            <select
              value={navbarProps.sticky || 'none'}
              onChange={(e) => handleUpdate('sticky', e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
            >
              <option value="none">None</option>
              <option value="top">Sticky Top</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Menu Justification</label>
            <select
              value={navbarProps.justify || 'between'}
              onChange={(e) => handleUpdate('justify', e.target.value)}
              className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
            >
              <option value="start">Left</option>
              <option value="center">Center</option>
              <option value="between">Space Between</option>
              <option value="end">Right</option>
            </select>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="pt-4 border-t border-slate-200">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Menu Items</h3>
          <button
            onClick={() => {
              // Add new menu item as text component
              addComponent(sectionId, 'heading');
            }}
            className="flex items-center gap-1 px-2 py-1 text-xs font-bold text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
          >
            <Plus className="h-3 w-3" />
            Add
          </button>
        </div>

        <div className="space-y-1">
          {menuComponents.map((component, index) => (
            <div
              key={component.id}
              className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg"
            >
              <GripVertical className="h-3 w-3 text-slate-400 cursor-move" />
              <span className="flex-1 text-sm text-slate-700">{component.props.content || `Menu ${index + 1}`}</span>
              <button
                onClick={() => removeComponent(sectionId, component.id)}
                className="p-1 text-red-400 hover:text-red-600 transition"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}

          {menuComponents.length === 0 && (
            <div className="text-xs text-slate-400 text-center py-4">
              No menu items yet. Click "Add" to add menu items.
            </div>
          )}
        </div>
      </div>

      {/* Logo Settings */}
      <div className="pt-4 border-t border-slate-200">
        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Logo</h3>
        {logoComponent && (
          <div className="space-y-2">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Logo Text</label>
              <input
                type="text"
                value={logoComponent.props.content || ''}
                onChange={(e) => updateComponentProps(sectionId, logoComponent.id, { content: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Logo Width</label>
              <input
                type="text"
                value={logoComponent.props.width || '120px'}
                onChange={(e) => updateComponentProps(sectionId, logoComponent.id, { width: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
              />
            </div>
          </div>
        )}
      </div>

      {/* CTA Button Settings */}
      {ctaComponent && (
        <div className="pt-4 border-t border-slate-200">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">CTA Button</h3>
          <div className="space-y-2">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Button Text</label>
              <input
                type="text"
                value={ctaComponent.props.label || ''}
                onChange={(e) => updateComponentProps(sectionId, ctaComponent.id, { label: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Button Link</label>
              <input
                type="text"
                value={ctaComponent.props.href || '#'}
                onChange={(e) => updateComponentProps(sectionId, ctaComponent.id, { href: e.target.value })}
                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}