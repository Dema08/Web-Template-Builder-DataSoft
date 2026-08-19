import { useSettingsStore } from '@store';
import { Spinner } from '@components/ui';

export default function PageLoader({ fullScreen = false }) {
    const { brand_name, logo_path, brand_color, brand_badge } = useSettingsStore();

    const loaderContent = (
        <div className="flex flex-col items-center justify-center gap-6 animate-pulse p-8">
            <div className="relative">
                {logo_path ? (
                    <img 
                        src={logo_path} 
                        alt={brand_name || 'Loading'} 
                        className="h-16 w-16 rounded-2xl object-contain bg-white shadow-sm border border-[rgb(var(--color-border))] p-1"
                    />
                ) : (
                    <div
                        className="h-16 w-16 rounded-2xl flex items-center justify-center text-white font-extrabold text-xl shadow-md border border-white/20"
                        style={{ backgroundColor: brand_color || '#4f46e5' }}
                    >
                        {brand_badge || 'DS'}
                    </div>
                )}
                <div className="absolute -bottom-2 -right-2 bg-[rgb(var(--color-surface))] rounded-full p-1 shadow-sm border border-[rgb(var(--color-border))]">
                    <Spinner size="sm" className="text-indigo-600" />
                </div>
            </div>
            
            <div className="text-center space-y-2">
                <div className="text-sm font-bold text-[rgb(var(--color-text-primary))]">
                    Memuat halaman...
                </div>
                <div className="text-xs text-[rgb(var(--color-text-tertiary))] max-w-[200px] mx-auto leading-relaxed">
                    Menyiapkan data untuk pengalaman terbaik Anda
                </div>
            </div>
        </div>
    );

    if (fullScreen) {
        return (
            <div translate="no" className="fixed inset-0 z-[9999] bg-[rgb(var(--color-surface))] flex flex-col items-center justify-center backdrop-blur-sm bg-opacity-80 transition-all duration-300 ds-animate-fade-in">
                {loaderContent}
            </div>
        );
    }

    return (
        <div translate="no" className="w-full h-full min-h-[60vh] flex flex-col items-center justify-center bg-[rgb(var(--color-surface-alt))] rounded-3xl border border-[rgb(var(--color-border-soft))] shadow-xs m-4 ds-animate-fade-in">
            {loaderContent}
        </div>
    );
}
