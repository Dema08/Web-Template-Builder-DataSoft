import { CheckCircle2 } from 'lucide-react';
import { Card } from '@components/ui';
import { useOnboardingStore } from '@store/onboardingStore';

export default function ReviewCard() {
    const companyName = useOnboardingStore((state) => state.companyName);
    const categories = useOnboardingStore((state) => state.categories);
    const selectedCategoryId = useOnboardingStore((state) => state.selectedCategoryId);
    const templates = useOnboardingStore((state) => state.templates);
    const selectedTemplateId = useOnboardingStore((state) => state.selectedTemplateId);
    const slug = useOnboardingStore((state) => state.slug);

    const selectedCategory = categories.find((c) => c.id === selectedCategoryId);
    const selectedTemplate = templates.find((t) => t.id === selectedTemplateId);

    const items = [
        { label: 'Company Name', value: companyName },
        { label: 'Category', value: selectedCategory?.name || 'Not selected' },
        { label: 'Template', value: selectedTemplate?.name || 'Not selected' },
        { label: 'Website URL', value: `${slug}.datasoft.id` },
    ];

    return (
        <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                    <h2 className="text-lg font-extrabold text-slate-900">Review Your Website</h2>
                    <p className="text-xs text-slate-500">Please confirm the details below</p>
                </div>
            </div>

            <div className="space-y-4">
                {items.map((item, index) => (
                    <div
                        key={item.label}
                        className={`flex items-center justify-between p-4 rounded-xl ${
                            index !== items.length - 1 ? 'border-b border-slate-100' : ''
                        }`}
                    >
                        <span className="text-sm font-bold text-slate-500">{item.label}</span>
                        <span className="text-sm font-extrabold text-slate-900">{item.value}</span>
                    </div>
                ))}
            </div>
        </Card>
    );
}
