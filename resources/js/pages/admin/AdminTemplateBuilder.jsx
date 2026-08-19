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
import useAutosave, { loadLocalDraft, clearLocalDraft } from '@builder/hooks/useAutosave';
import BuilderErrorBoundary from '@builder/components/common/BuilderErrorBoundary';
import { getIndustryConfig, INDUSTRY_CONFIGS } from '@builder/utils/industryConfigs';
import { INDUSTRY_STARTER_TEMPLATES, getCategoryStarterTemplates, getTotalStarterTemplateCount } from '@builder/utils/industryStarterTemplates';

import { getLayoutDefaults } from '@builder/utils/layoutDefaults';
import { ArrowLeft, FolderOpen, Sparkles, Layout, Zap, CheckCircle2, Eye, X, Layers, ArrowRight, Image, FileEdit, Send } from 'lucide-react';
import CustomDropdown from '@/components/ui/CustomDropdown';
import ThumbnailUploader from '@/components/ui/ThumbnailUploader';

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

  // Save/Publish modal states
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [pendingSaveAction, setPendingSaveAction] = useState(null); // 'draft' | 'publish'
  const [saveDescription, setSaveDescription] = useState('');
  const [saveThumbnail, setSaveThumbnail] = useState('');
  const [saveThumbnailFile, setSaveThumbnailFile] = useState(null); // File object if user uploads
  const [saveModalError, setSaveModalError] = useState('');
  const [isSavingModal, setIsSavingModal] = useState(false);

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

  // Activate automatic draft persistence (localStorage & backend autosave)
  useAutosave();

  // Restore unsaved local draft on mount (preserves edits on browser restart/refresh)
  useEffect(() => {
    const localDraft = loadLocalDraft(id);
    if (localDraft && (localDraft.sections?.length > 0 || localDraft.industryId)) {
      if (!id) {
        // Restoring draft for /create route
        if (localDraft.industryId) {
          setIndustry(localDraft.industryId, localDraft.industrySlug, localDraft.industryName);
          setSelectedCategoryId(localDraft.industryId);
        }
        if (localDraft.templateName) setTemplateName(localDraft.templateName);
        if (localDraft.sections?.length > 0) loadSections(localDraft.sections);
      }
    }
  }, [id, setIndustry, setTemplateName, loadSections]);

  // Load template data into store if editing an existing template
  useEffect(() => {
    if (templateData) {
      setTemplateId(templateData.id);
      setTemplateName(templateData.name);

      const serverSections = templateData.draft_json?.sections || templateData.published_json?.sections || [];

      if (templateData.industry_category) {
        setIndustry(templateData.industry_category.id, templateData.industry_category.slug, templateData.industry_category.name);
        setSelectedCategoryId(templateData.industry_category.id);
        setSelectedCategoryObj(templateData.industry_category);
      }

      // Check if there are unsaved local edits for this template ID
      const localDraft = loadLocalDraft(templateData.id);
      const sectionsToLoad = (localDraft?.sections?.length > 0) ? localDraft.sections : serverSections;

      if (sectionsToLoad.length > 0) {
        setTimeout(() => {
          loadSections(sectionsToLoad);
        }, 10);
      }
    }
  }, [templateData, setTemplateId, setTemplateName, loadSections, setIndustry]);

  // Prompt warning when reloading/closing if there are unsaved sections
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      const currentSections = useBuilderStore.getState().sections;
      if (currentSections.length > 0) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  // Step 1 -> Step 2
  const handleIndustrySelect = () => {
    if (!selectedCategoryId) {
      toast.error('Please select an industry category', 'Error');
      return;
    }

    const selectedCategory = categoriesData?.find(c => String(c.id) === String(selectedCategoryId));

    if (selectedCategory) {
      setSelectedCategoryObj(selectedCategory);
      setIndustry(selectedCategory.id, selectedCategory.slug, selectedCategory.name, true);
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
        clearLocalDraft(id);
        resetBuilder();
        navigate('/admin/templates');
      }
    } else {
      clearLocalDraft(id);
      resetBuilder();
      navigate('/admin/templates');
    }
  };

  const handleSave = () => {
    setSaveDescription(templateData?.description || '');
    setSaveThumbnail(templateData?.thumbnail ? `/storage/${templateData.thumbnail}` : (templateData?.thumbnail || ''));
    setSaveThumbnailFile(null);
    setSaveModalError('');
    setPendingSaveAction('draft');
    setShowSaveModal(true);
  };

  const executeSave = async (desc, thumb, thumbFile, action) => {
    const { templateId, templateName, sections, status, industryId } = useBuilderStore.getState();
    const categoryId = selectedCategoryId || industryId;
    if (!categoryId) {
      toast.error('Please select an industry category for this template.', 'Category Required');
      return;
    }
    const draftJson = {
      sections: sections.map(s => ({
        id: s.id,
        type: s.type,
        layout: s.layout,
        styles: s.styles || {},
        isLocked: s.isLocked || false,
        isHidden: s.isHidden || false,
        components: s.components,
      })),
    };
    try {
      setIsSavingModal(true);
      // Build thumb URL to use: if file was picked, we'll upload after creating/updating template
      const thumbUrl = thumbFile ? null : thumb; // null means we'll set it via upload

      if (action === 'draft') {
        const payload = {
          name: templateName || 'Untitled Template',
          industry_category_id: parseInt(categoryId, 10),
          description: desc,
          ...(thumbUrl ? { thumbnail: thumbUrl } : {}),
          draft_json: draftJson,
          status: status || 'draft',
        };
        let savedId = templateId;
        if (templateId) {
          await templateApi.update(templateId, payload);
          toast.success('Template saved as draft', 'Success');
        } else {
          const response = await templateApi.create(payload);
          savedId = response.data?.data?.id || response.data?.id;
          if (savedId) {
            setTemplateId(savedId);
            clearLocalDraft(null); // clear /create local draft
            navigate(`/admin/templates/builder/${savedId}`, { replace: true });
          }
          toast.success('Template draft created successfully', 'Success');
        }
        // Upload thumbnail file if picked
        if (thumbFile && savedId) {
          const fd = new FormData();
          fd.append('thumbnail', thumbFile);
          await templateApi.uploadThumbnail(savedId, fd);
        }
      } else {
        const payload = {
          name: templateName || 'Untitled Template',
          industry_category_id: parseInt(categoryId, 10),
          description: desc,
          ...(thumbUrl ? { thumbnail: thumbUrl } : {}),
          draft_json: draftJson,
          published_json: draftJson,
          status: 'published',
        };
        if (!templateId) {
          const response = await templateApi.create(payload);
          const newId = response.data?.data?.id || response.data?.id;
          if (newId) {
            setTemplateId(newId);
            clearLocalDraft(null);
            if (thumbFile) {
              const fd = new FormData();
              fd.append('thumbnail', thumbFile);
              await templateApi.uploadThumbnail(newId, fd);
            }
            navigate(`/admin/templates/builder/${newId}`, { replace: true });
          }
          useBuilderStore.getState().setStatus('published');
          toast.success('Template created and published successfully!', 'Success');
        } else {
          await templateApi.update(templateId, payload);
          await templateApi.publish(templateId);
          if (thumbFile) {
            const fd = new FormData();
            fd.append('thumbnail', thumbFile);
            await templateApi.uploadThumbnail(templateId, fd);
          }
          useBuilderStore.getState().setStatus('published');
          toast.success('Template published successfully!', 'Success');
        }
      }
      queryClient.invalidateQueries(['admin-templates']);
      setShowSaveModal(false);
      setSaveThumbnailFile(null);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to save template', 'Error');
    } finally {
      setIsSavingModal(false);
    }
  };

  const handlePublish = () => {
    setSaveDescription(templateData?.description || '');
    setSaveThumbnail(templateData?.thumbnail ? `/storage/${templateData.thumbnail}` : (templateData?.thumbnail || ''));
    setSaveThumbnailFile(null);
    setSaveModalError('');
    setPendingSaveAction('publish');
    setShowSaveModal(true);
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
        leftPanel={
          <BuilderErrorBoundary title="Left Navigation Panel">
            <LeftPanel />
          </BuilderErrorBoundary>
        }
        rightPanel={
          <BuilderErrorBoundary title="Inspector Property Panel">
            <RightInspector />
          </BuilderErrorBoundary>
        }
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
              <BuilderErrorBoundary title="Canvas Section Renderer">
                <SectionCanvas />
              </BuilderErrorBoundary>
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

      {/* Save/Publish Modal — Description & Thumbnail Required */}
      {showSaveModal && (
        <div className="fixed inset-0 z-[999] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-7 shadow-2xl border border-slate-100 space-y-5">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl ${pendingSaveAction === 'publish' ? 'bg-emerald-50' : 'bg-indigo-50'}`}>
                  {pendingSaveAction === 'publish'
                    ? <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    : <FileEdit className="h-5 w-5 text-indigo-600" />}
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900">
                    {pendingSaveAction === 'publish' ? 'Publish Template' : 'Save as Draft'}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">Lengkapi informasi wajib sebelum menyimpan</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowSaveModal(false)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Form */}
            <div className="space-y-4">
              {saveModalError && (
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-xs font-semibold text-red-700 flex items-center gap-2">
                  <span>⚠️</span> {saveModalError}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Deskripsi Template <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={saveDescription}
                  onChange={(e) => setSaveDescription(e.target.value)}
                  placeholder="Tuliskan deskripsi singkat tentang template ini..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 resize-none"
                />
              </div>

              <ThumbnailUploader
                label="Thumbnail Template"
                required
                value={saveThumbnail}
                onChange={(url) => setSaveThumbnail(url)}
                onFileSelect={(file) => setSaveThumbnailFile(file)}
                error={saveModalError && !saveDescription.trim() === false && !saveThumbnail ? 'URL atau file thumbnail wajib diisi' : null}
              />
            </div>

            {/* Actions */}
            <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowSaveModal(false)}
                disabled={isSavingModal}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition disabled:opacity-50"
              >
                Batal
              </button>
              <button
                type="button"
                disabled={isSavingModal}
                onClick={() => {
                  const desc = saveDescription.trim();
                  const thumb = saveThumbnail;
                  if (!desc) { setSaveModalError('Deskripsi template wajib diisi.'); return; }
                  if (!thumb && !saveThumbnailFile) { setSaveModalError('Thumbnail wajib diisi — masukkan URL atau upload file gambar.'); return; }
                  setSaveModalError('');
                  executeSave(desc, thumb, saveThumbnailFile, pendingSaveAction);
                }}
                className={`px-5 py-2.5 text-xs font-extrabold text-white rounded-xl shadow-md transition flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed ${
                  pendingSaveAction === 'publish'
                    ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20'
                    : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20'
                }`}
              >
                {isSavingModal ? (
                  <><span className="animate-spin h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full" /> Menyimpan...</>
                ) : pendingSaveAction === 'publish'
                  ? <><Send className="h-3.5 w-3.5" /> Publish Sekarang</>
                  : <><FileEdit className="h-3.5 w-3.5" /> Simpan sebagai Draft</>}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
