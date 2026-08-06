import { useState } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import { getIndustryConfig } from '../../utils/industryConfigs';
import { getComponentConfig } from '../../utils/componentRegistry';
import { getLayoutsForSection } from '../../utils/layoutRegistry';
import { 
  Layout, Section, Component, Image, Upload, Type, 
  Plus, Star, Layers, ChevronDown, ChevronRight, GripVertical
} from 'lucide-react';

const TABS = [
  { id: 'layouts', label: 'Layouts', icon: Layout },
  { id: 'sections', label: 'Sections', icon: Section },
  { id: 'components', label: 'Components', icon: Component },
  { id: 'media', label: 'Media', icon: Image },
  { id: 'icons', label: 'Icons', icon: Type },
  { id: 'uploads', label: 'Uploads', icon: Upload },
  { id: 'layers', label: 'Layers', icon: Layers },
];

const LAYOUTS = [
  { id: 'navbar', label: 'Navbar Layout' },
  { id: 'hero', label: 'Hero Layout' },
  { id: 'about', label: 'About Layout' },
  { id: 'services', label: 'Services Layout' },
  { id: 'gallery', label: 'Gallery Layout' },
  { id: 'contact', label: 'Contact Layout' },
  { id: 'footer', label: 'Footer Layout' },
];

const SECTIONS = [
  { id: 'navbar', label: 'Navbar' },
  { id: 'hero', label: 'Hero' },
  { id: 'about', label: 'About' },
  { id: 'vision', label: 'Vision' },
  { id: 'mission', label: 'Mission' },
  { id: 'statistics', label: 'Statistics' },
  { id: 'services', label: 'Services' },
  { id: 'products', label: 'Products' },
  { id: 'fleet', label: 'Fleet' },
  { id: 'coverage', label: 'Coverage' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'team', label: 'Team' },
  { id: 'clients', label: 'Clients' },
  { id: 'faq', label: 'FAQ' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'map', label: 'Map' },
  { id: 'contact', label: 'Contact' },
  { id: 'footer', label: 'Footer' },
];

const COMPONENTS = [
  { id: 'heading', label: 'Heading' },
  { id: 'text', label: 'Text' },
  { id: 'button', label: 'Button' },
  { id: 'image', label: 'Image' },
  { id: 'video', label: 'Video' },
  { id: 'card', label: 'Card' },
  { id: 'divider', label: 'Divider' },
  { id: 'icon', label: 'Icon' },
  { id: 'badge', label: 'Badge' },
  { id: 'accordion', label: 'Accordion' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'map', label: 'Map' },
  { id: 'form', label: 'Form' },
  { id: 'social', label: 'Social Media' },
  { id: 'counter', label: 'Counter' },
  { id: 'progress', label: 'Progress' },
  { id: 'testimonial', label: 'Testimonial' },
  { id: 'faq-item', label: 'FAQ Item' },
];

export default function LeftPanel() {
  const [activeTab, setActiveTab] = useState('layers');
  const [expandedSections, setExpandedSections] = useState({});
  const { addSection, addComponent, industrySlug, sections, selectedSectionId, selectSection, selectComponent, selectedComponentId } = useBuilderStore();

  const industryConfig = industrySlug ? getIndustryConfig(industrySlug) : null;
  const availableSections = industryConfig?.sections || [];
  // All sections have real layouts now, so all are available
  const allSectionsAvailable = true;

  const toggleSection = (id) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleAddSection = (sectionType) => {
    addSection(sectionType);
  };

  const handleAddLayout = (layoutId) => {
    // Map layout to section type
    const layoutToSection = {
      'navbar': 'navbar',
      'hero': 'hero',
      'about': 'about',
      'services': 'services',
      'gallery': 'gallery',
      'contact': 'contact',
      'footer': 'footer',
    };
    const sectionType = layoutToSection[layoutId];
    if (sectionType) {
      addSection(sectionType);
    }
  };

  const handleAddComponent = (componentId) => {
    // Add to selected section if available
    if (selectedSectionId) {
      addComponent(selectedSectionId, componentId);
    } else if (sections.length > 0) {
      addComponent(sections[0].id, componentId);
    }
  };

  const handleDragStart = (e, type, id) => {
    e.dataTransfer.setData('application/json', JSON.stringify({ type, id }));
    e.dataTransfer.effectAllowed = 'copy';
  };

  const renderLayersTab = () => (
    <div className="p-3 space-y-0.5">
      {/* Website root */}
      <div className="flex items-center gap-2 px-2 py-2 rounded-lg bg-slate-100">
        <GripVertical className="h-3.5 w-3.5 text-slate-400" />
        <span className="text-xs font-bold text-slate-700">🌐 Website</span>
      </div>

      {sections.map((section) => {
        const isSectionSelected = selectedSectionId === section.id;
        const isExpanded = expandedSections[section.id] !== false;

        return (
          <div key={section.id} className="space-y-0.5">
            <button
              onClick={() => {
                toggleSection(section.id);
                selectSection(section.id);
              }}
              className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg transition ${
                isSectionSelected ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-slate-50'
              }`}
            >
              {isExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
              <span className="text-xs">📄</span>
              <span className="text-xs font-medium flex-1 text-left">
                {getSectionLabel(section.type)} / {section.layout}
              </span>
            </button>

            {isExpanded && section.components.map((component) => {
              const componentConfig = getComponentConfig(component.type);
              const isComponentSelected = selectedComponentId === component.id;

              return (
                <button
                  key={component.id}
                  onClick={() => {
                    selectSection(section.id);
                    selectComponent(component.id);
                  }}
                  className={`w-full flex items-center gap-2 pl-8 pr-2 py-1 rounded-lg transition ${
                    isComponentSelected ? 'bg-purple-50 text-purple-600' : 'hover:bg-slate-50'
                  }`}
                >
                  <span className="text-xs">▸</span>
                  <span className="text-xs">{componentConfig?.label || component.type}</span>
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'layers':
        return renderLayersTab();

      case 'layouts':
        return (
          <div className="p-3 space-y-1">
            {LAYOUTS.map(layout => {
              const layouts = getLayoutsForSection(layout.id);
              const isExpanded = expandedSections[layout.id] !== false;

              return (
                <div key={layout.id}>
                  <button
                    onClick={() => toggleSection(layout.id)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition text-left group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-100 transition">
                      <Layout className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-slate-900">{layout.label}</div>
                    </div>
                    {isExpanded ? <ChevronDown className="h-4 w-4 text-slate-400" /> : <ChevronRight className="h-4 w-4 text-slate-400" />}
                  </button>

                  {isExpanded && layouts.map(l => (
                    <button
                      key={l.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, 'layout', l.id)}
                      onClick={() => addSection(layout.id, l.id)}
                      className="w-full flex items-center gap-2 pl-12 pr-3 py-1.5 rounded-lg hover:bg-indigo-50 transition text-left group"
                    >
                      <GripVertical className="h-3 w-3 text-slate-300" />
                      <span className="text-xs text-slate-700">{l.name}</span>
                      <Plus className="h-3 w-3 text-slate-400 opacity-0 group-hover:opacity-100" />
                    </button>
                  ))}
                </div>
              );
            })}
          </div>
        );

      case 'sections':
        return (
          <div className="p-3 space-y-1">
            {SECTIONS.map(section => {
              const isAvailable = allSectionsAvailable || availableSections.some(s => s.type === section.id);

              return (
                <button
                  key={section.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, 'section', section.id)}
                  onClick={() => handleAddSection(section.id)}
                  disabled={!isAvailable}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition text-left group ${
                    isAvailable 
                      ? 'hover:bg-slate-50 cursor-pointer' 
                      : 'opacity-40 cursor-not-allowed'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition ${
                    isAvailable 
                      ? 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100' 
                      : 'bg-slate-100 text-slate-400'
                  }`}>
                    <Section className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-slate-900">{section.label}</div>
                  </div>
                  {isAvailable && (
                    <Plus className="h-4 w-4 text-slate-400 opacity-0 group-hover:opacity-100 transition" />
                  )}
                </button>
              );
            })}
          </div>
        );

      case 'components':
        return (
          <div className="p-3 space-y-1">
            {COMPONENTS.map(component => (
              <button
                key={component.id}
                draggable
                onDragStart={(e) => handleDragStart(e, 'component', component.id)}
                onClick={() => handleAddComponent(component.id)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition text-left group"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-100 transition">
                  <Component className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-slate-900">{component.label}</div>
                </div>
                <Plus className="h-4 w-4 text-slate-400 opacity-0 group-hover:opacity-100 transition" />
              </button>
            ))}
          </div>
        );

      case 'media':
        return (
          <div className="p-4 space-y-4">
            <button className="w-full flex flex-col items-center gap-2 p-6 border-2 border-dashed border-slate-300 rounded-xl hover:border-indigo-400 hover:bg-indigo-50/50 transition">
              <Image className="h-8 w-8 text-slate-400" />
              <span className="text-sm font-bold text-slate-700">Upload Image</span>
              <span className="text-xs text-slate-500">Click or drag to upload</span>
            </button>

            <div>
              <h3 className="text-xs font-bold text-slate-700 mb-3 px-1">Gallery</h3>
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="aspect-square bg-slate-100 rounded-lg border border-slate-200 hover:border-indigo-400 hover:shadow-sm transition cursor-pointer" />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-700 mb-3 px-1">Logo</h3>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="aspect-square bg-slate-100 rounded-lg border border-slate-200 hover:border-indigo-400 hover:shadow-sm transition cursor-pointer" />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-700 mb-3 px-1">Video</h3>
              <button className="w-full flex items-center gap-2 px-3 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition">
                <Upload className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-slate-700">Upload Video</span>
              </button>
            </div>
          </div>
        );

      case 'icons':
        return (
          <div className="p-4">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search icons..."
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {['Home', 'User', 'Settings', 'Mail', 'Phone', 'Map', 'Calendar', 'Star'].map(icon => (
                <button
                  key={icon}
                  className="aspect-square flex items-center justify-center rounded-lg border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 transition"
                  title={icon}
                >
                  <Type className="h-5 w-5 text-slate-600" />
                </button>
              ))}
            </div>
          </div>
        );

      case 'uploads':
        return (
          <div className="p-4">
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-indigo-400 hover:bg-indigo-50/50 transition cursor-pointer">
              <Upload className="h-10 w-10 text-slate-400 mx-auto mb-3" />
              <p className="text-sm font-bold text-slate-700 mb-1">Drop files here</p>
              <p className="text-xs text-slate-500">or click to browse</p>
            </div>

            <div className="mt-6">
              <h3 className="text-xs font-bold text-slate-700 mb-3">Recent Uploads</h3>
              <div className="space-y-2">
                {['image1.png', 'document.pdf', 'video.mp4'].map(file => (
                  <div key={file} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition cursor-pointer">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                      <Image className="h-5 w-5 text-slate-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-900 truncate">{file}</p>
                      <p className="text-xs text-slate-500">2.4 MB</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getSectionLabel = (type) => {
    const section = SECTIONS.find(s => s.id === type);
    return section?.label || type;
  };

  return (
    <div className="h-full flex flex-col">
      {/* Tabs */}
      <div className="flex items-center gap-1 px-3 pt-3 pb-2 border-b border-slate-200 overflow-x-auto">
        {TABS.map(tab => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
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
        {renderContent()}
      </div>
    </div>
  );
}