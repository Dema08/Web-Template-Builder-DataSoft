import { useSettingsStore } from '@store';

/**
 * BrandLogo
 *
 * Reusable brand identity component.
 * Shows the uploaded logo image (if any) or a colored badge
 * with the brand badge text, followed by the brand name.
 *
 * All values are read from the global Settings Store so no
 * brand name is ever hardcoded.
 *
 * @param {string} [className]  - Extra CSS classes
 * @param {boolean} [showName] - Whether to show the brand name text
 * @param {string} [badgeSize] - sm | md | lg
 */
export default function BrandLogo({ className = '', showName = true, badgeSize = 'md' }) {
    const { brand_name, brand_badge, brand_color, logo_path } = useSettingsStore();

    const badgeClasses = {
        sm: 'h-7 w-7 text-[10px]',
        md: 'h-9 w-9 text-sm',
        lg: 'h-10 w-10 text-sm',
    };
    const badgeClass = badgeClasses[badgeSize] || badgeClasses.md;

    return (
        <div className={`flex items-center gap-2.5 ${className}`}>
            {logo_path ? (
                <img
                    src={logo_path}
                    alt={brand_name}
                    className={`${badgeClass} rounded-xl object-contain border border-gray-200 bg-white p-0.5 shadow-sm`}
                />
            ) : (
                <div
                    className={`${badgeClass} rounded-xl flex items-center justify-center text-white font-black tracking-tighter shadow-md`}
                    style={{ backgroundColor: brand_color }}
                >
                    {brand_badge || 'DS'}
                </div>
            )}
            {showName && (
                <span className="text-xl font-bold text-gray-900 tracking-tight">{brand_name}</span>
            )}
        </div>
    );
}
