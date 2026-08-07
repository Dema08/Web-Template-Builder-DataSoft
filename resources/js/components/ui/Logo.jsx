import { useSettingsStore } from '@store';

/**
 * Brand logo for the guest layout.
 * Reads brand identity from the global settings store.
 */
export default function Logo({ className = '' }) {
    const { brand_name, brand_badge, brand_color, logo_path, plan_label } = useSettingsStore();

    return (
        <div className={`flex items-center justify-center gap-3 ${className}`}>
            {logo_path ? (
                <img
                    src={logo_path}
                    alt={brand_name}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-white shadow-sm object-contain border border-gray-200 p-0.5"
                />
            ) : (
                <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm"
                    style={{ backgroundColor: brand_color }}
                >
                    {brand_badge || 'DS'}
                </span>
            )}
            <span className="text-left">
                <span className="block text-lg font-bold text-gray-900 leading-tight">
                    {brand_name}
                </span>
                <span className="block text-xs text-gray-500 leading-tight">
                    {plan_label || 'Build your company website'}
                </span>
            </span>
        </div>
    );
}