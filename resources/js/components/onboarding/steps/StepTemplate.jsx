import { useOnboardingStore } from '@store/onboardingStore';
import { useTemplates } from '@hooks/useOnboarding';
import TemplateCard from '../TemplateCard';
import { Alert, Spinner } from '@components/ui';

export default function StepTemplate() {
    const selectedCategoryId = useOnboardingStore((state) => state.selectedCategoryId);
    const setCurrentStep = useOnboardingStore((state) => state.setCurrentStep);
    const templateSearchQuery = useOnboardingStore((state) => state.templateSearchQuery);

    const { data: templatesData, isLoading, isError, error } = useTemplates(selectedCategoryId);

    const templates = templatesData?.data || [];
    const canProceed = templates.some((t) => t.id === selectedCategoryId);

    const handleContinue = () => {
        setCurrentStep(4);
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-8">
                <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Choose Your Template</h2>
                <p className="text-sm text-slate-500">Select a design template for your website.</p>
            </div>

            {isLoading && (
                <div className="flex items-center justify-center py-20">
                    <Spinner size="lg" />
                </div>
            )}

            {isError && (
                <Alert variant="error" title="Failed to load templates">
                    {error?.message || 'Please try again later.'}
                </Alert>
            )}

            {!isLoading && !isError && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {templates.map((template) => (
                            <TemplateCard key={template.id} template={template} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
