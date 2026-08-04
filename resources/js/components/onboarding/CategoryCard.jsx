import { Globe } from 'lucide-react';
import { Card } from '@components/ui';
import { useOnboardingStore } from '@store/onboardingStore';

export default function CategoryCard({ category }) {
    const selectedCategoryId = useOnboardingStore((state) => state.selectedCategoryId);
    const setSelectedCategoryId = useOnboardingStore((state) => state.setSelectedCategoryId);
    const setCurrentStep = useOnboardingStore((state) => state.setCurrentStep);

    const isSelected = selectedCategoryId === category.id;

    const Icon = Globe;

    const handleClick = () => {
        setSelectedCategoryId(category.id);
        setTimeout(() => setCurrentStep(3), 300);
    };

    return (
        <Card
            onClick={handleClick}
            className={`cursor-pointer p-6 transition-all duration-200 hover:shadow-md ${
                isSelected
                    ? 'ring-2 ring-indigo-600 shadow-md bg-indigo-50/50'
                    : 'hover:border-indigo-200'
            }`}
        >
            <div className="flex flex-col items-center text-center gap-3">
                <div
                    className={`h-12 w-12 rounded-2xl flex items-center justify-center ${
                        isSelected ? 'bg-indigo-600 text-white' : 'bg-indigo-50 text-indigo-600'
                    }`}
                >
                    <Icon className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="text-sm font-extrabold text-slate-900">{category.name}</h3>
                    {category.description && (
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">{category.description}</p>
                    )}
                </div>
            </div>
        </Card>
    );
}
