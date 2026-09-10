import { useSettingsStore } from '@store';

/**
 * Brand logo for the guest layout.
 * Reads brand identity from the global settings store.
 */
export default function Logo({ className = '' }) {
    const { brand_name, brand_badge, brand_color, logo_path, plan_label } = useSettingsStore();

    return (
        <div className={`flex items-center justify-center gap-3 ${className}`}>
            <img
                src={logo_path || '/storage/settings/microdata-emblem.png'}
                alt={brand_name || 'Microdata'}
                className="inline-flex h-11 w-auto items-center justify-center object-contain"
                onError={(e) => {
                    if (!e.target.src.includes('/images/')) {
                        e.target.src = '/images/microdata-emblem.png';
                    } else {
                        e.target.style.display = 'none';
                    }
                }}
            />
            <span className="text-left">
                <span className="block text-lg font-bold text-gray-900 leading-tight">
                    {brand_name || 'Microdata'}
                </span>
                <span className="block text-xs text-gray-500 leading-tight">
                    {plan_label || 'Build your company website'}
                </span>
            </span>
        </div>
    );
}