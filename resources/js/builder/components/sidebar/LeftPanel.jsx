import { useState } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import { getIndustryConfig } from '../../utils/industryConfigs';
import { getComponentConfig } from '../../utils/componentRegistry';
import { getLayoutsForSection } from '../../utils/layoutRegistry';
import SectionLayoutPicker from './SectionLayoutPicker';
import MediaPanel from './MediaPanel';
import IconPanel from './IconPanel';
import UploadsPanel from './UploadsPanel';
import { 
  Layout, Section, Component, Image, Upload, Type, 
  Plus, Star, Layers, ChevronDown, ChevronRight, GripVertical,
  Eye, EyeOff, Lock, Unlock
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

function ComponentLayerNode({
  component,
  sectionId,
  depth = 1,
  selectedComponentId,
  selectSection,
  selectComponent,
  toggleVisibilityComponent,
  toggleLockComponent,
  expandedComps,
  toggleCompExpand,
}) {
  const componentConfig = getComponentConfig(component.type);
  const isComponentSelected = selectedComponentId === component.id;
  const isCompLocked = !!component.isLocked;
  const isCompHidden = !!component.isHidden;
  const hasChildren = Array.isArray(component.childrenComponents) && component.childrenComponents.length > 0;
  const isExpanded = expandedComps[component.id] !== false;

  const getIcon = (type) => {
    switch (type) {
      case 'card': return '🎴';
      case 'heading': return '🔤';
      case 'text': return '📝';
      case 'button': return '🔘';
      case 'image': return '🖼️';
      case 'icon': return '⭐';
      case 'badge': return '🏷️';
      case 'statistic': return '📊';
      case 'divider': return '➖';
      case 'social': return '🌐';
      default: return '🧩';
    }
  };

  return (
    <div className="space-y-0.5">
      <div
        className={`w-full flex items-center gap-1.5 pr-2 py-1 rounded-lg transition group ${
          isComponentSelected ? 'bg-indigo-50 text-indigo-700 font-bold border-l-2 border-indigo-600' : 'hover:bg-slate-50'
        }`}
        style={{ paddingLeft: `${depth * 12 + 12}px` }}
      >
        {hasChildren ? (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleCompExpand(component.id);
            }}
            className="text-slate-400 hover:text-slate-600"
          >
            {isExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
          </button>
        ) : (
          <span className="text-[10px] text-slate-300">▸</span>
        )}

        <span className="text-xs">{getIcon(component.type)}</span>

        <button
          type="button"
          onClick={() => {
            selectSection(sectionId);
            selectComponent(component.id, sectionId);
          }}
          className="text-xs flex-1 text-left truncate text-slate-700 font-medium"
        >
          {component.props?.content || component.props?.title || componentConfig?.label || component.type}
        </button>

        {/* Visibility and Lock Controls for Component */}
        <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleVisibilityComponent(sectionId, component.id);
            }}
            className={`p-0.5 rounded hover:bg-slate-200/60 ${isCompHidden ? 'text-amber-600' : 'text-slate-400'}`}
            title={isCompHidden ? 'Show Component' : 'Hide Component'}
          >
            {isCompHidden ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleLockComponent(sectionId, component.id);
            }}
            className={`p-0.5 rounded hover:bg-slate-200/60 ${isCompLocked ? 'text-amber-600' : 'text-slate-400'}`}
            title={isCompLocked ? 'Unlock Component' : 'Lock Component'}
          >
            {isCompLocked ? <Lock className="h-3 w-3" /> : <Unlock className="h-3 w-3" />}
          </button>
        </div>
      </div>

      {/* Render Sub-components recursively */}
      {hasChildren && isExpanded && (
        <div className="space-y-0.5">
          {component.childrenComponents.map((child) => (
            <ComponentLayerNode
              key={child.id}
              component={child}
              sectionId={sectionId}
              depth={depth + 1}
              selectedComponentId={selectedComponentId}
              selectSection={selectSection}
              selectComponent={selectComponent}
              toggleVisibilityComponent={toggleVisibilityComponent}
              toggleLockComponent={toggleLockComponent}
              expandedComps={expandedComps}
              toggleCompExpand={toggleCompExpand}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function LeftPanel() {
  const [activeTab, setActiveTab] = useState('layers');
  const [expandedSections, setExpandedSections] = useState({});
  const [layoutPickerSection, setLayoutPickerSection] = useState(null);
  const {
    addSection, addComponent, industrySlug, sections, selectedSectionId,
    selectSection, selectComponent, selectedComponentId,
    toggleLockComponent, toggleLockSection, toggleVisibilityComponent, toggleVisibilitySection
  } = useBuilderStore();

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
    // Open layout picker first instead of directly adding
    setLayoutPickerSection(sectionType);
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

  const [expandedComps, setExpandedComps] = useState({});

  const toggleCompExpand = (id) => {
    setExpandedComps(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderLayersTab = () => (
    <div className="p-3 space-y-0.5">
      {/* Website root */}
      <div className="flex items-center gap-2 px-2 py-2 rounded-lg bg-slate-100 mb-1">
        <GripVertical className="h-3.5 w-3.5 text-slate-400" />
        <span className="text-xs font-bold text-slate-700 flex-1">🌐 Website Canvas</span>
      </div>

      {sections.map((section) => {
        const isSectionSelected = selectedSectionId === section.id;
        const isExpanded = expandedSections[section.id] !== false;
        const isSecLocked = !!section.isLocked;
        const isSecHidden = !!section.isHidden;

        return (
          <div key={section.id} className="space-y-0.5">
            <div
              className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg transition group ${
                isSectionSelected ? 'bg-indigo-50 text-indigo-700 font-bold' : 'hover:bg-slate-50'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleSection(section.id)}
                className="text-slate-400 hover:text-slate-600"
              >
                {isExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
              </button>
              <span className="text-xs">📄</span>
              <button
                type="button"
                onClick={() => selectSection(section.id)}
                className="text-xs font-semibold flex-1 text-left truncate"
              >
                {getSectionLabel(section.type)} / {section.layout}
              </button>

              {/* Visibility and Lock Controls for Section */}
              <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 transition">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleVisibilitySection(section.id);
                  }}
                  className={`p-1 rounded hover:bg-slate-200/60 ${isSecHidden ? 'text-amber-600' : 'text-slate-400'}`}
                  title={isSecHidden ? 'Show Section' : 'Hide Section'}
                >
                  {isSecHidden ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLockSection(section.id);
                  }}
                  className={`p-1 rounded hover:bg-slate-200/60 ${isSecLocked ? 'text-amber-600' : 'text-slate-400'}`}
                  title={isSecLocked ? 'Unlock Section' : 'Lock Section'}
                >
                  {isSecLocked ? <Lock className="h-3 w-3" /> : <Unlock className="h-3 w-3" />}
                </button>
              </div>
            </div>

            {isExpanded && section.components.map((component) => (
              <ComponentLayerNode
                key={component.id}
                component={component}
                sectionId={section.id}
                depth={1}
                selectedComponentId={selectedComponentId}
                selectSection={selectSection}
                selectComponent={selectComponent}
                toggleVisibilityComponent={toggleVisibilityComponent}
                toggleLockComponent={toggleLockComponent}
                expandedComps={expandedComps}
                toggleCompExpand={toggleCompExpand}
              />
            ))}
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
        return <MediaPanel />;

      case 'icons':
        return <IconPanel />;

      case 'uploads':
        return <UploadsPanel />;

      default:
        return null;
    }
  };

  const getSectionLabel = (type) => {
    const section = SECTIONS.find(s => s.id === type);
    return section?.label || type;
  };

  return (
    <>
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

    {/* Section Layout Picker Modal */}
    {layoutPickerSection && (
      <SectionLayoutPicker
        sectionType={layoutPickerSection}
        onClose={() => setLayoutPickerSection(null)}
      />
    )}
    </>
  );
}
