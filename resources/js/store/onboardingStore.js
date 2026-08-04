import { create } from 'zustand';

/**
 * Onboarding Zustand store.
 * Manages the multi-step website creation wizard state.
 */
export const useOnboardingStore = create((set, get) => ({
    // Current step (1-5)
    currentStep: 1,

    // Step 1: Company Information
    companyName: '',

    // Step 2: Category
    categories: [],
    selectedCategoryId: null,

    // Step 3: Template
    templates: [],
    templatesMeta: null,
    selectedTemplateId: null,
    templateSearchQuery: '',
    templatePreview: null,
    isPreviewOpen: false,

    // Step 4: Website URL
    slug: '',
    slugStatus: null, // 'idle' | 'checking' | 'available' | 'unavailable'

    // Step 5: Review & Submit
    isSubmitting: false,

    // Actions
    setCurrentStep: (step) => set({ currentStep: step }),

    setCompanyName: (name) => set({ companyName: name }),

    setCategories: (categories) => set({ categories }),
    setSelectedCategoryId: (id) => set({ selectedCategoryId: id }),

    setTemplates: (templates, meta) => set({ templates, templatesMeta: meta }),
    setSelectedTemplateId: (id) => set({ selectedTemplateId: id }),
    setTemplateSearchQuery: (query) => set({ templateSearchQuery: query }),
    setTemplatePreview: (template) => set({ templatePreview: template, isPreviewOpen: true }),
    closePreview: () => set({ isPreviewOpen: false }),

    setSlug: (slug) => set({ slug }),
    setSlugStatus: (status) => set({ slugStatus: status }),

    setIsSubmitting: (isSubmitting) => set({ isSubmitting }),

    reset: () => set({
        currentStep: 1,
        companyName: '',
        categories: [],
        selectedCategoryId: null,
        templates: [],
        templatesMeta: null,
        selectedTemplateId: null,
        templateSearchQuery: '',
        templatePreview: null,
        isPreviewOpen: false,
        slug: '',
        slugStatus: null,
        isSubmitting: false,
    }),
}));