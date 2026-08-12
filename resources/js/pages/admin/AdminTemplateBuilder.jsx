import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from '@store';
import { templateApi, categoryApi } from '@api';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import BuilderLayout from '@builder/components/layouts/BuilderLayout';
import BuilderToolbar from '@builder/components/toolbar/BuilderToolbar';
import LeftPanel from '@builder/components/sidebar/LeftPanel';
import RightInspector from '@builder/components/property-panel/RightInspector';
import StatusBar from '@builder/components/status-bar/StatusBar';
import BuilderCanvas from '@builder/components/editing/BuilderCanvas';
import SectionCanvas from '@builder/components/editing/SectionCanvas';
import FloatingToolbar from '@builder/components/editing/FloatingToolbar';
import ContextMenu from '@builder/components/editing/ContextMenu';
import KeyboardShortcuts from '@builder/components/editing/KeyboardShortcuts';
import { useBuilderStore } from '@builder/stores/builderStore';
import { getIndustryConfig } from '@builder/utils/industryConfigs';
import { getCategoryStarterTemplates, getTotalStarterTemplateCount, INDUSTRY_STARTER_TEMPLATES } from '@builder/utils/industryStarterTemplates';
import { getLayoutDefaults } from '@builder/utils/layoutDefaults';
import { ArrowLeft, FolderOpen, Sparkles, Layout, Zap, CheckCircle2, Eye, X, Layers, ArrowRight } from 'lucide-react';
import CustomDropdown from '@/components/ui/CustomDropdown';

export default function AdminTemplateBuilder() {
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();

  // Modal States
  const [modalStep, setModalStep] = useState(1); // 1: Category, 2: Mode, 3: Starter Selection
  const [showIndustryModal, setShowIndustryModal] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [selectedCategoryObj, setSelectedCategoryObj] = useState(null);
  const [templateMode, setTemplateMode] = useState(null); // 'blank' | 'starter'
  const [previewTemplateItem, setPreviewTemplateItem] = useState(null);

  const {
    setIndustry,
    setTemplateId,
    setTemplateName,
    addSection,
    loadSections,
    sections,
    selectedSectionId,
    selectSection,
    resetBuilder,
    saveToHistory,
    industryId,
    industrySlug,
  } = useBuilderStore();

  // Fetch template if editing
  const { data: templateData, isLoading: templateLoading } = useQuery({
    queryKey: ['template', id],
    queryFn: () => templateApi.getById(id).then(res => res.data.data),
    enabled: !!id,
  });

  // Fetch categories
  const { data: categoriesData } = useQuery({
    queryKey: ['categories'],
    queryFn: () => categoryApi.getAll().then(res => res.data.data),
  });

  // Load template data into store if editing an existing template
  useEffect(() => {
    if (templateData) {
      setTemplateId(templateData.id);
      setTemplateName(templateData.name);

      const sectionsData = templateData.draft_json?.sections || templateData.published_json?.sections || [];

      if (templateData.industry_category) {
        setIndustry(templateData.industry_category.id, templateData.industry_category.slug, templateData.industry_category.name);
        setSelectedCategoryId(templateData.industry_category.id);
        setSelectedCategoryObj(templateData.industry_category);
      }

      if (sectionsData.length > 0) {
        setTimeout(() => {
          loadSections(sectionsData);
        }, 10);
      }
    }
  }, [templateData, setTemplateId, setTemplateName, loadSections, setIndustry]);

  // Step 1 -> Step 2
  const handleIndustrySelect = () => {
    if (!selectedCategoryId) {
      toast.error('Please select an industry category', 'Error');
      return;
    }

    const selectedCategory = categoriesData?.find(c => String(c.id) === String(selectedCategoryId));

    if (selectedCategory) {
      setSelectedCategoryObj(selectedCategory);
      setIndustry(selectedCategory.id, selectedCategory.slug, selectedCategory.name);
      setModalStep(2);
      setShowIndustryModal(true);
    } else {
      toast.error('Category not found', 'Error');
    }
  };

  // Step 2 -> Action or Step 3
  const handleTemplateModeSelect = (mode) => {
    setTemplateMode(mode);

    if (mode === 'blank') {
      toast.success('Blank canvas created', 'Success');
      setShowIndustryModal(false);
    } else if (mode === 'starter') {
      // Advance to Step 3: Starter Template Picker
      setModalStep(3);
    }
  };

  // Step 3 -> Load Complete Starter Template
  const handleApplyStarterTemplate = (starterTpl) => {
    if (!starterTpl || !starterTpl.sections) return;

    // Enrich each section: merge starter template components with layoutDefaults
    // so sections that only declare a heading still get the full card/sub-component tree
    const enrichedSections = starterTpl.sections.map(section => {
      const defaults = getLayoutDefaults(section.layout);
      const starterComps = section.components || [];

      let mergedComponents;
      if (defaults.length === 0 || starterComps.length === 0) {
        // No defaults or no starter overrides — just use whichever has content
        mergedComponents = starterComps.length > 0 ? starterComps : defaults;
      } else {
        // Merge: for each default component, check if starter has an override by id/type
        // Starter overrides take priority for matching nodes; defaults fill the rest
        const starterMap = {};
        starterComps.forEach(c => {
          if (c.id) starterMap[c.id] = c;
        });
        mergedComponents = defaults.map(def => {
          const override = starterMap[def.id];
          if (override) {
            return {
              ...def,
              props: { ...def.props, ...(override.props || {}) },
            };
          }
          return def;
        });
        // Append any starter components not in defaults (e.g. badges, extra buttons)
        starterComps.forEach(sc => {
          if (!defaults.some(d => d.id === sc.id)) {
            mergedComponents.push(sc);
          }
        });
      }

      return { ...section, components: mergedComponents };
    });

    // Load enriched sections into store (loadSections will recursively normalize childrenComponents)
    loadSections(enrichedSections);

    // Auto-set template name
    setTemplateName(starterTpl.name);

    toast.success(`Starter template "${starterTpl.name}" loaded with complete structure & demo content`, 'Success');
    setShowIndustryModal(false);
    setModalStep(1);
  };

  // Check if category still exists when editing
  const categoryExists = templateData?.industry_category
    ? categoriesData?.some(c => String(c.id) === String(templateData.industry_category.id))
    : true;

  const handleBack = () => {
    if (sections.length > 0) {
      if (confirm('You have unsaved changes. Are you sure you want to leave?')) {
        resetBuilder();
        navigate('/admin/templates');
      }
    } else {
      resetBuilder();
      navigate('/admin/templates');
    }
  };

  const handleSave = async () => {
    const { templateId, templateName, sections, status } = useBuilderStore.getState();

    const payload = {
      name: templateName || 'Untitled Template',
      industry_category_id: selectedCategoryId || null,
      draft_json: {
        sections: sections.map(s => ({
          id: s.id,
          type: s.type,
          layout: s.layout,
          styles: s.styles || {},
          isLocked: s.isLocked || false,
          isHidden: s.isHidden || false,
          components: s.components,
        })),
      },
      published_json: null,
      status: status,
    };

    try {
      if (templateId) {
        await templateApi.update(templateId, payload);
        toast.success('Template saved successfully', 'Success');
      } else {
        const response = await templateApi.create(payload);
        setTemplateId(response.data.data.id);
        toast.success('Template created successfully', 'Success');
      }

      queryClient.invalidateQueries(['admin-templates']);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to save template', 'Error');
    }
  };

  const handlePublish = async () => {
    const { templateId, status } = useBuilderStore.getState();

    if (!templateId) {
      toast.error('Please save the template first', 'Error');
      return;
    }

    try {
      await templateApi.publish(templateId);
      useBuilderStore.getState().setStatus('published');
      toast.success('Template published successfully', 'Success');
      queryClient.invalidateQueries(['admin-templates']);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to publish template', 'Error');
    }
  };

  const handleCanvasClick = (e) => {
    if (e.target === e.currentTarget) {
      selectSection(null);
    }
  };

  if (templateLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="text-sm text-slate-600 mt-4">Loading template...</p>
        </div>
      </div>
    );
  }

  // Show warning if category was deleted
  if (templateData?.industry_category && !categoryExists && id) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="max-w-2xl w-full space-y-6">
          <div className="bg-red-50 border border-red-200 rounded-3xl p-8 shadow-lg">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold mb-4">
                <span>⚠️ Warning</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
                Category Not Available
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                The category <strong>"{templateData.industry_category.name}"</strong> for this template
                has been deleted by the administrator. You can still edit the template.
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => {
                    resetBuilder();
                    navigate('/admin/templates');
                  }}
                  className="px-5 py-2.5 border border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition"
                >
                  Back to Templates
                </button>
                <button
                  onClick={() => setIndustry(null, null, null)}
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition"
                >
                  Continue Editing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const industryOptions = categoriesData || [];
  const currentCategorySlug = selectedCategoryObj?.slug || industrySlug || 'default';
  const availableStarters = getCategoryStarterTemplates(currentCategorySlug);
  const industryConfig = getIndustryConfig(currentCategorySlug);
  const totalStarterCount = getTotalStarterTemplateCount();

  return (
    <>
      <KeyboardShortcuts />
      <FloatingToolbar />
      <ContextMenu />

      <BuilderLayout
        toolbar={
          <BuilderToolbar
            onBack={handleBack}
            onSave={handleSave}
            onPublish={handlePublish}
          />
        }
        leftPanel={<LeftPanel />}
        rightPanel={<RightInspector />}
        statusBar={<StatusBar />}
      >
        {!industryId ? (
          <BuilderCanvas>
            <div className="flex items-center justify-center h-full">
              <div className="max-w-2xl w-full space-y-6">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 text-indigo-700 text-xs font-extrabold mb-3">
                    <Sparkles className="h-4 w-4 text-indigo-600" />
                    <span>Intelligent Starter Generator 2026</span>
                    <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-full text-[10px]">
                      {totalStarterCount} Templates &times; 10 Industries
                    </span>
                  </div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                    Create Industry Website Starter
                  </h1>
                  <p className="text-sm text-slate-500">
                    Select an industry category to generate complete, publishable, ThemeForest-quality starter templates.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 space-y-6">
                  <div>
                  <CustomDropdown
                    label="Select Industry Category"
                    options={industryOptions.map(cat => ({ id: cat.id, name: cat.name }))}
                    value={selectedCategoryId}
                    onChange={(val) => setSelectedCategoryId(val)}
                    placeholder="Choose an industry..."
                  />
                  </div>

                  <button
                    onClick={handleIndustrySelect}
                    className="w-full px-5 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-extrabold rounded-xl shadow-lg shadow-indigo-600/25 transition flex items-center justify-center gap-2 text-sm"
                  >
                    <span>Continue to Template Options</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </BuilderCanvas>
        ) : (
          <BuilderCanvas>
            <div onClick={handleCanvasClick}>
              <SectionCanvas />
            </div>
          </BuilderCanvas>
        )}
      </BuilderLayout>

      {/* Step 2 & 3: Template Mode & Starter Selection Modal */}
      {showIndustryModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`bg-white rounded-3xl w-full shadow-2xl border border-slate-100 transition-all duration-300 ${modalStep === 3 ? 'max-w-4xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto' : 'max-w-lg p-6'}`}>

            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div className="flex items-center gap-3">
                {modalStep > 1 && (
                  <button
                    onClick={() => {
                      if (modalStep === 3) {
                        setModalStep(2);
                        setTemplateMode(null);
                      } else if (modalStep === 2) {
                        setShowIndustryModal(false);
                        setModalStep(1);
                      }
                    }}
                    className="text-slate-400 hover:text-slate-700 p-1.5 rounded-xl hover:bg-slate-100 transition"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                )}
                <div>
                  <span className="text-[11px] font-extrabold text-indigo-600 uppercase tracking-wider">
                    Category: {selectedCategoryObj?.name}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                    {modalStep === 2 ? 'Choose Generation Mode' : `Select Starter Template for ${selectedCategoryObj?.name}`}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setShowIndustryModal(false)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-xl hover:bg-slate-100 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* STEP 2: Mode Choice */}
            {modalStep === 2 && (
              <div className="space-y-4">
                {/* Industry Sections from INDUSTRY_CONFIGS */}
                {industryConfig && industryConfig.sections && (
                  <div className="bg-indigo-50/50 rounded-xl p-4 border border-indigo-100 mb-2">
                    <h4 className="text-xs font-extrabold text-indigo-900 uppercase mb-2 flex items-center gap-2">
                      <Layers className="h-4 w-4" />
                      Sections for {industryConfig.name} ({industryConfig.sections.length})
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {industryConfig.sections.map((sec) => (
                        <span key={sec.id} className="px-2.5 py-1 bg-white text-indigo-700 text-xs font-bold rounded-lg border border-indigo-100">
                          {sec.label}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => handleTemplateModeSelect('starter')}
                  className="w-full p-5 border-2 border-indigo-200 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 rounded-2xl hover:border-indigo-600 hover:shadow-lg transition-all text-left group flex items-start gap-4"
                >
                  <div className="p-3 bg-indigo-600 text-white rounded-xl group-hover:scale-110 transition-transform">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                      Starter Template (Recommended)
                      <span className="text-[10px] px-2 py-0.5 bg-indigo-600 text-white font-extrabold rounded-full uppercase">Instant Site</span>
                    </div>
                    <div className="text-xs text-slate-600 mt-1">
                      Auto-generate a complete, production-ready website for {selectedCategoryObj?.name} with all standard sections, layout, images, and copy.
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleTemplateModeSelect('blank')}
                  className="w-full p-5 border-2 border-slate-200 rounded-2xl hover:border-slate-400 hover:bg-slate-50 transition-all text-left flex items-start gap-4"
                >
                  <div className="p-3 bg-slate-100 text-slate-700 rounded-xl">
                    <Layout className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-base font-extrabold text-slate-900">Blank Canvas</div>
                    <div className="text-xs text-slate-500 mt-1">
                      Start with a clean blank slate and manually build sections from scratch.
                    </div>
                  </div>
                </button>
              </div>
            )}

            {/* STEP 3: Available Starter Templates Grid */}
            {modalStep === 3 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-500">
                    Select a starter template design below. Each template includes complete sections, demo text, images, and modern responsive layouts.
                  </p>
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                    {availableStarters.length} template{availableStarters.length !== 1 ? 's' : ''} available
                  </span>
                </div>

                {availableStarters.length === 0 ? (
                  <div className="text-center py-12 text-slate-400">
                    <Layers className="h-12 w-12 text-slate-300 mx-auto mb-3" />
                    <p className="text-sm font-medium text-slate-500">
                      No starter templates found for "{selectedCategoryObj?.name}".
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Try selecting a different category or use Blank Canvas mode.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {availableStarters.map((starter) => (
                      <div
                        key={starter.id}
                        className="border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group bg-white"
                      >
                        <div className="relative h-48 bg-slate-100 overflow-hidden">
                          <img
                            src={starter.thumbnail}
                            alt={starter.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                            <button
                              type="button"
                              onClick={() => setPreviewTemplateItem(starter)}
                              className="px-3 py-1.5 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold rounded-lg flex items-center gap-1.5 hover:bg-white transition"
                            >
                              <Eye className="h-3.5 w-3.5 text-indigo-600" />
                              <span>Preview</span>
                            </button>
                          </div>
                        </div>

                        <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-1.5 flex-wrap mb-2">
                              {starter.tags?.map((tag, idx) => (
                                <span key={idx} className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-[10px] font-extrabold rounded-md uppercase">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <h4 className="text-base font-extrabold text-slate-900 group-hover:text-indigo-600 transition">
                              {starter.name}
                            </h4>
                            <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                              {starter.description}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                              <Layers className="h-3.5 w-3.5 text-indigo-500" />
                              {starter.sections?.length || 0} Sections
                            </span>

                            <button
                              type="button"
                              onClick={() => handleApplyStarterTemplate(starter)}
                              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold rounded-xl shadow-md shadow-indigo-600/20 transition flex items-center gap-1.5"
                            >
                              <span>Generate Website</span>
                              <Zap className="h-3.5 w-3.5 fill-current" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Full Live Preview Modal */}
      {previewTemplateItem && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">{previewTemplateItem.name}</h3>
                <p className="text-xs text-slate-500">{previewTemplateItem.description}</p>
              </div>
              <button
                type="button"
                onClick={() => setPreviewTemplateItem(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src={previewTemplateItem.thumbnail}
                alt={previewTemplateItem.name}
                className="w-full h-80 object-cover"
              />
            </div>

            <div className="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 space-y-2">
              <h4 className="text-xs font-extrabold text-indigo-900 uppercase">Included Page Sections:</h4>
              <div className="flex flex-wrap gap-2">
                {previewTemplateItem.sections?.map((sec, i) => (
                  <span key={i} className="px-2.5 py-1 bg-white text-indigo-700 text-xs font-bold rounded-lg border border-indigo-100 shadow-2xs">
                    ✓ {sec.type.toUpperCase()} ({sec.layout})
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setPreviewTemplateItem(null)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition"
              >
                Close Preview
              </button>
              <button
                type="button"
                onClick={() => {
                  const tpl = previewTemplateItem;
                  setPreviewTemplateItem(null);
                  handleApplyStarterTemplate(tpl);
                }}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold rounded-xl shadow-md shadow-indigo-600/20 transition flex items-center gap-1.5"
              >
                <span>Use This Template</span>
                <CheckCircle2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
