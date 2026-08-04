import { Check } from 'lucide-react';
import { useOnboardingStore } from '@store/onboardingStore';

const steps = [
    { label: 'Company Info', description: 'Basic information' },
    { label: 'Category', description: 'Choose industry' },
    { label: 'Template', description: 'Select design' },
    { label: 'Website URL', description: 'Custom domain' },
    { label: 'Review', description: 'Confirm details' },
];

export default function ProgressStepper() {
    const currentStep = useOnboardingStore((state) => state.currentStep);

    return (
        <div className="w-full py-8">
            <div className="flex items-center justify-between">
                {steps.map((step, index) => {
                    const stepNumber = index + 1;
                    const isCompleted = stepNumber < currentStep;
                    const isCurrent = stepNumber === currentStep;

                    return (
                        <div key={step.label} className="flex flex-1 items-center">
                            <div className="flex flex-col items-center flex-1">
                                <div
                                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-200 ${
                                        isCompleted
                                            ? 'border-indigo-600 bg-indigo-600 text-white'
                                            : isCurrent
                                                ? 'border-indigo-600 bg-white text-indigo-600'
                                                : 'border-slate-300 bg-white text-slate-400'
                                    }`}
                                >
                                    {isCompleted ? (
                                        <Check className="h-5 w-5" />
                                    ) : (
                                        <span className="text-sm font-bold">{stepNumber}</span>
                                    )}
                                </div>
                                <div className="mt-2 text-center">
                                    <p
                                        className={`text-xs font-bold ${
                                            isCurrent ? 'text-indigo-600' : isCompleted ? 'text-slate-900' : 'text-slate-400'
                                        }`}
                                    >
                                        {step.label}
                                    </p>
                                    <p className="text-[10px] text-slate-400">{step.description}</p>
                                </div>
                            </div>
                            {index < steps.length - 1 && (
                                <div
                                    className={`mx-2 h-0.5 flex-1 transition-all duration-200 ${
                                        isCompleted ? 'bg-indigo-600' : 'bg-slate-200'
                                    }`}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
