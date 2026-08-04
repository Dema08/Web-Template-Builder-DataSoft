import { Eye } from 'lucide-react';
import { Card } from '@components/ui';
import { useOnboardingStore } from '@store/onboardingStore';

export default function TemplateCard({ template }) {
    const selectedTemplateId = useOnboardingStore((state) => state.selectedTemplateId);
    const setSelectedTemplateId = useOnboardingStore((state) => state.setSelectedTemplateId);
    const setTemplatePreview = useOnboardingStore((state) => state.setTemplatePreview);
    const setCurrentStep = useOnboardingStore((state) => state.setCurrentStep);

    const isSelected = selectedTemplateId === template.id;

    const handleClick = () => {
        setSelectedTemplateId(template.id);
    };

    const handlePreview = (e) => {
        e.stopPropagation();
        setTemplatePreview(template);
    };

    const handleContinue = () => {
        setCurrentStep(4);
    };

    return (
        <Card
            onClick={handleClick}
            className={`cursor-pointer overflow-hidden transition-all duration-200 hover:shadow-md ${
                isSelected
                    ? 'ring-2 ring-indigo-600 shadow-md'
                    : 'hover:border-indigo-200'
            }`}
        >
            <div className="relative aspect-video bg-slate-100 overflow-hidden">
                {template.thumbnail ? (
                    <img
                        src={template.thumbnail}
                        alt={template.name}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                        <span className="text-xs">No preview</span>
                    </div>
                )}
                <button
                    type="button"
                    onClick={handlePreview}
                    className="absolute top-2 right-2 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition"
                    title="Preview template"
                >
                    <Eye className="h-4 w-4 text-slate-700" />
                </button>
            </div>
            <div className="p-4">
                <h3 className="text-sm font-extrabold text-slate-900 line-clamp-1">{template.name}</h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{template.description}</p>
                {isSelected && (
                    <button
                        type="button"
                        onClick={handleContinue}
                        className="mt-3 w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition"
                    >
                        Continue
                    </button>
                )}
            </div>
        </Card>
    );
}
