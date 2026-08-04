import { useOnboardingStore } from '@store/onboardingStore';
import ReviewCard from '../ReviewCard';
import { Button } from '@components/ui';
import { useCreateWebsite } from '@hooks/useOnboarding';

export default function StepReview() {
    const isSubmitting = useOnboardingStore((state) => state.isSubmitting);
    const createWebsiteMutation = useCreateWebsite();

    const handleCreateWebsite = async () => {
        const companyName = useOnboardingStore.getState().companyName;
        const slug = useOnboardingStore.getState().slug;
        const selectedTemplateId = useOnboardingStore.getState().selectedTemplateId;

        createWebsiteMutation.mutate({
            company_name: companyName,
            slug: slug,
            template_id: selectedTemplateId,
        });
    };

    return (
        <div className="max-w-3xl mx-auto">
            <div className="mb-8">
                <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Review & Create</h2>
                <p className="text-sm text-slate-500">Review your choices and create your website.</p>
            </div>

            <div className="mb-8">
                <ReviewCard />
            </div>

            <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                <div>
                    <p className="text-xs font-bold text-indigo-700 mb-1">Ready to launch?</p>
                    <p className="text-xs text-indigo-600">Your website will be created in draft mode.</p>
                </div>
                <Button
                    onClick={handleCreateWebsite}
                    loading={isSubmitting}
                    disabled={isSubmitting}
                >
                    Create Website
                </Button>
            </div>
        </div>
    );
}