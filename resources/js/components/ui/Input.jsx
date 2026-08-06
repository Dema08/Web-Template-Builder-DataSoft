export default function Input({ label, error, className = '', ...props }) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-xs font-bold text-[rgb(var(--color-text-primary))] mb-1.5">
                    {label}
                </label>
            )}
            <input
                className={`ds-input ${error ? 'ds-input-error' : ''} ${className}`}
                {...props}
            />
            {error && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{error}</p>}
        </div>
    );
}
