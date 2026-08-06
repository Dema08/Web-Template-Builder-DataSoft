import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from '@store';
import { templateApi, categoryApi } from '@api';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import BuilderLayout from '@builder/components/layouts/BuilderLayout';
import BuilderToolbar from '@builder/components/toolbar/BuilderToolbar';
import SectionSidebar from '@builder/components/sidebar/SectionSidebar';
import PropertyPanel from '@builder/components/property-panel/PropertyPanel';
import StatusBar from '@builder/components/status-bar/StatusBar';
import SectionCanvas from '@builder/components/editing/SectionCanvas';
import FloatingToolbar from '@builder/components/editing/FloatingToolbar';
import ContextMenu from '@builder/components/editing/ContextMenu';
import KeyboardShortcuts from '@builder/components/editing/KeyboardShortcuts';
import LayerPanel from '@builder/components/editing/LayerPanel';
import Breadcrumb from '@builder/components/editing/Breadcrumb';
import { useBuilderStore } from '@builder/stores/builderStore';
import { INDUSTRY_CONFIGS } from '@builder/utils/industryConfigs';
import { ArrowLeft, FolderOpen, Sparkles } from 'lucide-react';

export default function AdminTemplateBuilder() {
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();
  const [showIndustryModal, setShowIndustryModal] = useState(false);
  const [selectedIndustrySlug, setSelectedIndustrySlug] = useState('');
  const [templateMode, setTemplateMode] = useState(null); // 'blank' | 'starter'

  const {
    setIndustry,
    setTemplateId,
    setTemplateName,
    addSection,
    sections,
    selectedSectionId,
    selectSection,
    resetBuilder,
    saveToHistory,
    industryId,
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

      // Initialize store with loaded sections
      sectionsData.forEach((section, index) => {
        setTimeout(() => {
          addSection(section.type);
        }, index * 100);
      });

      // Set industry if available
      if (templateData.industry_category?.slug) {
        setIndustry(templateData.industry_category.id);
        setSelectedIndustrySlug(templateData.industry_category.slug);
      }
    }
  }, [templateData]);

  const handleIndustrySelect = () => {
    if (!selectedIndustrySlug) {
      toast.error('Please select an industry category', 'Error');
      return;
    }

    const config = INDUSTRY_CONFIGS[selectedIndustrySlug] || INDUSTRY_CONFIGS.default;
    setIndustry(config.id);
    setShowIndustryModal(false);
    setTemplateMode(null);

    toast.success(`Industry "${config.name}" selected. Choose a template mode.`, 'Success');
  };

  const handleTemplateModeSelect = (mode) => {
    setTemplateMode(mode);

    if (mode === 'starter') {
      const config = INDUSTRY_CONFIGS[selectedIndustrySlug] || INDUSTRY_CONFIGS.default;

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
  };

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

  const industryOptions = categoriesData?.data || [];

  return (
    <>
      <KeyboardShortcuts />
      <FloatingToolbar />
      <ContextMenu />

      <BuilderLayout
        toolbar={
          <div className="flex items-center justify-between w-full">
            <BuilderToolbar
              onBack={handleBack}
              onSave={handleSave}
              onPublish={handlePublish}
            />
            <Breadcrumb />
          </div>
        }
        sidebar={
          <div>
            <SectionSidebar />
            <div className="border-t border-slate-200 mt-4 pt-4">
              <LayerPanel />
            </div>
          </div>
        }
        propertyPanel={<PropertyPanel />}
        statusBar={<StatusBar />}
      >
        {!industryId ? (
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
                    value={selectedIndustrySlug}
                    onChange={(e) => setSelectedIndustrySlug(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 ds-input"
                  >
                    <option value="">Select an industry...</option>
                    {industryOptions.map((cat) => (
                      <option key={cat.id} value={cat.slug}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={() => {
                    setShowIndustryModal(true);
                    handleIndustrySelect();
                  }}
                  className="w-full px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition flex items-center justify-center gap-2"
                >
                  <FolderOpen className="h-4 w-4" />
                  Continue
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            <div
              onClick={handleCanvasClick}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 min-h-[600px] p-4"
            >
              <SectionCanvas />
            </div>
          </div>
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
                <div className="text-xs text-slate-500 mt-1">Use default sections for {selectedIndustrySlug || 'selected industry'}</div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
