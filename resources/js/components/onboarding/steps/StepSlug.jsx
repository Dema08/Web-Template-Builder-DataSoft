import { useOnboardingStore } from '@store/onboardingStore';
import { useCreateWebsite } from '@hooks/useOnboarding';
import SlugInput from '../SlugInput';
import { Card } from '@components/ui';

export default function StepSlug() {
    const slug = useOnboardingStore((state) => state.slug);
    const slugStatus = useOnboardingStore((state) => state.slugStatus);
    const setCurrentStep = useOnboardingStore((state) => state.setCurrentStep);

    const createWebsiteMutation = useCreateWebsite();

    const canProceed = slug && slugStatus === 'available';

    const handleContinue = () => {
        if (canProceed) {
            setCurrentStep(5);
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <Card className="p-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Website URL</h2>
                    <p className="text-sm text-slate-500">Choose a custom URL for your website.</p>
                </div>

                <SlugInput />

                {canProceed && (
                    <div className="mt-8 flex items-center justify-end">
                        <button
                            type="button"
                            onClick={handleContinue}
                            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition"
                        >
                            Continue
                        </button>
                    </div>
                )}
            </Card>
        </div>
    );
}