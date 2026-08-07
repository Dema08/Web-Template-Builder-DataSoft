import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@components/ui';
import { useOnboardingStore } from '@store';
import { useSettingsStore } from '@store';
import ProgressStepper from './ProgressStepper';
import StepCompanyInfo from './steps/StepCompanyInfo';
import StepCategory from './steps/StepCategory';
import StepTemplate from './steps/StepTemplate';
import StepSlug from './steps/StepSlug';
import StepReview from './steps/StepReview';
import TemplatePreviewModal from './TemplatePreviewModal';

const stepsComponents = [StepCompanyInfo, StepCategory, StepTemplate, StepSlug, StepReview];

export default function Wizard() {
    const navigate = useNavigate();
    const [direction, setDirection] = useState('forward');
    const currentStep = useOnboardingStore((state) => state.currentStep);
    const setCurrentStep = useOnboardingStore((state) => state.setCurrentStep);
    const isSubmitting = useOnboardingStore((state) => state.isSubmitting);
    const { brand_badge, brand_name } = useSettingsStore();

    const CurrentStepComponent = stepsComponents[currentStep - 1];

    const goNext = () => {
        if (currentStep < 5) {
            setDirection('forward');
            setCurrentStep(currentStep + 1);
        }
    };

    const goPrev = () => {
        if (currentStep > 1) {
            setDirection('backward');
            setCurrentStep(currentStep - 1);
        }
    };

    const isFirstStep = currentStep === 1;
    const isLastStep = currentStep === 5;

    return (
        <div className="min-h-screen bg-slate-50">
            <TemplatePreviewModal />

            {/* Header */}
            <header className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-extrabold shadow-lg shadow-indigo-500/25">
                            {brand_badge || 'DS'}
                        </div>
                        <div>
                            <h1 className="text-sm font-extrabold text-slate-900">{brand_name} — Create Your Website</h1>
                            <p className="text-xs text-slate-500">Let's get you started</p>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="text-xs font-bold text-slate-600 hover:text-slate-900 transition"
                    >
                        Cancel
                    </button>
                </div>
            </header>

            {/* Progress Stepper */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                    <ProgressStepper currentStep={currentStep} />
                </div>
            </div>

            {/* Step Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                    <CurrentStepComponent
                        onNext={goNext}
                        onPrev={goPrev}
                        isFirstStep={isFirstStep}
                        isLastStep={isLastStep}
                        direction={direction}
                    />
                </div>
            </main>
        </div>
    );
}