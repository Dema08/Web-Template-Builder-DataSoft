import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@components/ui';
import { useOnboardingStore } from '@store';
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
                            DS
                        </div>
                        <div>
                            <h1 className="text-sm font-extrabold text-slate-900">Create Your Website</h1>
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <ProgressStepper />
                </div>
            </div>

            {/* Step Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
                <div
                    key={currentStep}
                    className={`transition-all duration-300 ${
                        direction === 'forward' ? 'animate-in fade-in slide-in-from-right-4' : 'animate-in fade-in slide-in-from-left-4'
                    }`}
                >
                    <CurrentStepComponent />
                </div>
            </main>

            {/* Navigation Buttons */}
            <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    <div>
                        {!isFirstStep && (
                            <Button variant="ghost" onClick={goPrev}>
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back
                            </Button>
                        )}
                    </div>
                    <div>
                        {!isLastStep ? (
                            <Button onClick={goNext}>
                                Continue
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                        ) : (
                            <Button
                                onClick={() => navigate('/dashboard')}
                                loading={isSubmitting}
                                disabled={isSubmitting}
                            >
                                <Sparkles className="h-4 w-4 mr-2" />
                                Create Website
                            </Button>
                        )}
                    </div>
                </div>
            </footer>
        </div>
    );
}
