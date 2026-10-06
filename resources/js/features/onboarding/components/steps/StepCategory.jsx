import { useOnboardingStore } from '@features/onboarding/stores/onboardingStore';
import { useCategories } from '@features/onboarding/hooks/useOnboarding';
import CategoryCard from '../CategoryCard';
import { Alert } from '@shared/components/ui';

export default function StepCategory() {
    const selectedCategoryId = useOnboardingStore((state) => state.selectedCategoryId);
    const setCurrentStep = useOnboardingStore((state) => state.setCurrentStep);

    const { data: categories, isLoading, isError, error } = useCategories();

    const selectedCategory = categories?.find((c) => c.id === selectedCategoryId);
    const canProceed = !!selectedCategoryId;

    const handleContinue = () => {
        if (canProceed) {
            setCurrentStep(4);
        }
    };

    return (
        <div className="max-w-6xl mx-auto">
            <div className="mb-8">
                <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Pilih Kategori Anda</h2>
                <p className="text-sm text-slate-500">Pilih industri yang paling sesuai dengan bisnis Anda.</p>
            </div>

            {isLoading && (
                <div className="flex items-center justify-center py-20">
                    <div className="text-sm text-slate-500">Memuat kategori...</div>
                </div>
            )}

            {isError && (
                <Alert variant="error" title="Gagal memuat kategori">
                    {error?.message || 'Silakan coba lagi nanti.'}
                </Alert>
            )}

            {!isLoading && !isError && categories && (
                <>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {categories.map((category) => (
                            <CategoryCard key={category.id} category={category} />
                        ))}
                    </div>

                    {selectedCategory && (
                        <div className="mt-8 flex items-center justify-between p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                            <div>
                                <p className="text-xs font-bold text-indigo-700">Kategori Terpilih</p>
                                <p className="text-sm font-extrabold text-indigo-900">{selectedCategory.name}</p>
                            </div>
                            <button
                                type="button"
                                onClick={handleContinue}
                                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition"
                            >
                                Lanjutkan
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
