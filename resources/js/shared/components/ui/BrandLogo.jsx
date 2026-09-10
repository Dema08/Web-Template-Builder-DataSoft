import { useState } from 'react';
import { useSettingsStore } from '@store';

/**
 * BrandLogo
 *
 * Reusable brand identity component.
 * Shows the Microdata logo emblem image followed by the brand name.
 * Fallback chain: API logo_path → /images/microdata-emblem.png → colored MD badge.
 *
 * All values are read from the global Settings Store.
 *
 * @param {string} [className]  - Extra CSS classes
 * @param {boolean} [showName] - Whether to show the brand name text
 * @param {string} [badgeSize] - sm | md | lg
 */
const FALLBACK_LOGO = '/images/microdata-emblem.png';

export default function BrandLogo({ className = '', showName = true, badgeSize = 'md' }) {
    const { brand_name, brand_badge, brand_color, logo_path } = useSettingsStore();
    const [imgSrc, setImgSrc] = useState(null);

    const currentBrandName = brand_name || 'Microdata';

    // logoSrc = from API (resolved storage URL), else static public image
    const logoSrc = logo_path || FALLBACK_LOGO;

    const badgeClasses = {
        sm: 'h-7 text-[10px]',
        md: 'h-9 text-sm',
        lg: 'h-11 text-sm',
    };
    const badgeClass = badgeClasses[badgeSize] || badgeClasses.md;

    // Effective src: use override if set (after first error), else logoSrc
    const effectiveSrc = imgSrc ?? logoSrc;
    const showBadge = imgSrc === false;

    const handleError = () => {
        if (effectiveSrc !== FALLBACK_LOGO) {
            // Primary (API URL) failed → try static fallback
            setImgSrc(FALLBACK_LOGO);
        } else {
            // Static fallback also failed → show text badge
            setImgSrc(false);
        }
    };

    return (
        <div className={`flex items-center gap-2.5 ${className}`}>
            {!showBadge ? (
                <img
                    src={effectiveSrc}
                    alt={currentBrandName}
                    className={`${badgeClass} w-auto object-contain transition-transform duration-200 hover:scale-105`}
                    onError={handleError}
                />
            ) : (
                <div
                    className={`${badgeClass} w-9 rounded-xl flex items-center justify-center text-white font-black tracking-tighter shadow-md`}
                    style={{ backgroundColor: brand_color || '#2563eb' }}
                >
                    {brand_badge || 'MD'}
                </div>
            )}
            {showName && (
                <span className="text-xl font-black text-slate-900 tracking-tight">{currentBrandName}</span>
            )}
        </div>
    );
}

