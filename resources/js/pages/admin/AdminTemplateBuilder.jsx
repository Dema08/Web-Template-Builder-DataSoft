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
import { INDUSTRY_CONFIGS } from '@builder/utils/industryConfigs';
import { ArrowLeft, FolderOpen, Sparkles } from 'lucide-react';

export default function AdminTemplateBuilder() {
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();
  const [showIndustryModal, setShowIndustryModal] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [templateMode, setTemplateMode] = useState(null); // 'blank' | 'starter'
  const [selectedCategorySlug, setSelectedCategorySlug] = useState('');
  const [selectedCategoryName, setSelectedCategoryName] = useState('');

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

  // Load template data into store
  useEffect(() => {
    if (templateData) {
      setTemplateId(templateData.id);
      setTemplateName(templateData.name);

      // Load sections from draft_json or published_json
      const sectionsData = templateData.draft_json?.sections || templateData.published_json?.sections || [];

      // Set industry first (this resets sections)
      if (templateData.industry_category) {
        setIndustry(templateData.industry_category.id, templateData.industry_category.slug, templateData.industry_category.name);
        setSelectedCategoryId(templateData.industry_category.id);
      }

      // Initialize store with loaded sections (preserving all data)
      // Use setTimeout to ensure setIndustry completes first
      if (sectionsData.length > 0) {
        setTimeout(() => {
          loadSections(sectionsData);
        }, 10);
      }
    }
  }, [templateData, setTemplateId, setTemplateName, loadSections, setIndustry]);

  const handleIndustrySelect = () => {
    if (!selectedCategoryId) {
      toast.error('Please select an industry category', 'Error');
      return;
    }

    // Type-safe comparison (handle string/number mismatch between select value and API data)
    const selectedCategory = categoriesData?.find(c => String(c.id) === String(selectedCategoryId));
      
    if (selectedCategory) {
      // Set industry in store with id, slug, and name
      setIndustry(selectedCategory.id, selectedCategory.slug, selectedCategory.name);
      // Show template mode modal
      setShowIndustryModal(true);
    } else {
      toast.error('Category not found', 'Error');
    }
  };

  const handleTemplateModeSelect = (mode) => {
    setTemplateMode(mode);

    if (mode === 'starter') {
      // Use industrySlug from store which was set in handleIndustrySelect
      const slug = industrySlug || 'default';
      const config = INDUSTRY_CONFIGS[slug] || INDUSTRY_CONFIGS.default;

      // Add all starter sections
      config.sections.forEach((sectionConfig, index) => {
        setTimeout(() => {
          addSection(sectionConfig.type);
        }, index * 100);
      });

      toast.success('Starter template loaded', 'Success');
    } else {
      toast.success('Blank template created', 'Success');
    }
    
    // Close modal after selection
    setShowIndustryModal(false);
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
      draft_json: {
        sections: sections.map(s => ({
          type: s.type,
          layout: s.layout,
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

      queryClient.invalidateQueries(['templates']);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to save template', 'Error');
    }
  };

  const handlePublish = async () => {
    const { templateId, sections, status } = useBuilderStore.getState();

    if (!templateId) {
      toast.error('Please save the template first', 'Error');
      return;
    }

    try {
      await templateApi.publish(templateId);
      useBuilderStore.getState().setStatus('published');
      toast.success('Template published successfully', 'Success');
      queryClient.invalidateQueries(['templates']);
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
                has been deleted by the administrator. You can still edit the template, but the category 
                is no longer available for new templates.
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
                  onClick={() => {
                    // Continue editing without category
                    setIndustry(null, null, null);
                  }}
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
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-2">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Template Builder</span>
                  </div>
                  <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                    Create New Template
                  </h1>
                  <p className="text-sm text-slate-500">
                    Start by selecting an industry category for your template
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    Industry Category
                  </label>
                  <select
                    value={selectedCategoryId}
                    onChange={(e) => setSelectedCategoryId(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 ds-input"
                  >
                    <option value="">Select an industry...</option>
                    {industryOptions.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={handleIndustrySelect}
                    className="w-full px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition flex items-center justify-center gap-2"
                  >
                    <FolderOpen className="h-4 w-4" />
                    Continue
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

      {/* Industry Selection Modal */}
      {showIndustryModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900">Choose Template Mode</h3>
              <button
                onClick={() => setShowIndustryModal(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => handleTemplateModeSelect('blank')}
                className="w-full p-4 border-2 border-slate-200 rounded-xl hover:border-indigo-300 hover:bg-indigo-50 transition text-left"
              >
                <div className="text-sm font-bold text-slate-900">Blank Template</div>
                <div className="text-xs text-slate-500 mt-1">Start from scratch with no sections</div>
              </button>

              <button
                onClick={() => handleTemplateModeSelect('starter')}
                className="w-full p-4 border-2 border-slate-200 rounded-xl hover:border-indigo-300 hover:bg-indigo-50 transition text-left"
              >
                <div className="text-sm font-bold text-slate-900">Starter Template</div>
                <div className="text-xs text-slate-500 mt-1">Use default sections for {selectedCategoryName || 'selected industry'}</div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
