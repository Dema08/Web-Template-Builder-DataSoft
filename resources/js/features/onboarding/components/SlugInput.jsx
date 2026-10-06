import { useState, useEffect } from 'react';
import { useOnboardingStore } from '@features/onboarding/stores/onboardingStore';
import { useCheckSlug } from '@features/onboarding/hooks/useOnboarding';
import { Button } from '@shared/components/ui';

export default function SlugInput() {
    const [localSlug, setLocalSlug] = useState('');
    const slug = useOnboardingStore((state) => state.slug);
    const setSlug = useOnboardingStore((state) => state.setSlug);
    const slugStatus = useOnboardingStore((state) => state.slugStatus);
    const setSlugStatus = useOnboardingStore((state) => state.setSlugStatus);
    const companyName = useOnboardingStore((state) => state.companyName);

    const checkSlugMutation = useCheckSlug();

    useEffect(() => {
        if (localSlug && localSlug.length >= 3) {
            const timeoutId = setTimeout(() => {
                checkSlugMutation.mutate(localSlug);
            }, 500);
            return () => clearTimeout(timeoutId);
        } else if (localSlug && localSlug.length < 3) {
            setSlugStatus('idle');
        }
    }, [localSlug]);

    useEffect(() => {
        if (companyName && !slug) {
            const generated = companyName
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '');
            setLocalSlug(generated);
        }
    }, [companyName]);

    const handleBlur = () => {
        setSlug(localSlug);
        if (localSlug && localSlug.length >= 3) {
            checkSlugMutation.mutate(localSlug);
        }
    };

    const getStatusColor = () => {
        if (slugStatus === 'checking') return 'text-slate-500';
        if (slugStatus === 'available') return 'text-emerald-600';
        if (slugStatus === 'unavailable') return 'text-red-600';
        return 'text-slate-500';
    };

    const getStatusText = () => {
        if (slugStatus === 'checking') return 'Memeriksa ketersediaan...';
        if (slugStatus === 'available') return '✓ Tersedia';
        if (slugStatus === 'unavailable') return '✗ Tidak tersedia';
        return '';
    };

    return (
        <div className="space-y-2">
            <label className="block text-sm font-bold text-slate-700">
                Slug URL Website
            </label>
            <div className="relative">
                <div className="flex items-center">
                    <input
                        type="text"
                        value={localSlug}
                        onChange={(e) => setLocalSlug(e.target.value.toLowerCase())}
                        onBlur={handleBlur}
                        placeholder="your-company-name"
                        className={`flex-1 px-4 py-3 bg-slate-50 border-2 rounded-xl text-sm focus:outline-none transition ${
                            slugStatus === 'available'
                                ? 'border-emerald-500 focus:border-emerald-600'
                                : slugStatus === 'unavailable'
                                    ? 'border-red-500 focus:border-red-600'
                                    : 'border-slate-200 focus:border-indigo-600'
                        }`}
                    />
                </div>
                <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-slate-500">
                        Website Anda akan tersedia di: <span className="font-mono font-bold text-slate-700">{localSlug || 'slug-anda'}.datasoft.id</span>
                    </p>
                    {slugStatus && slugStatus !== 'idle' && (
                        <span className={`text-xs font-bold ${getStatusColor()}`}>
                            {getStatusText()}
                        </span>
                    )}
                </div>
            </div>
            {slugStatus === 'unavailable' && (
                <p className="text-xs text-red-600 font-medium">
                    Slug ini sudah dipakai. Silakan coba yang lain.
                </p>
            )}
        </div>
    );
}
