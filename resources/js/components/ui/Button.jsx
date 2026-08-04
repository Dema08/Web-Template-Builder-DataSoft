export default function Button({
    type = 'button',
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}) {
    const base =
        'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary:
            'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/20 focus:ring-indigo-500',
        secondary:
            'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 focus:ring-slate-300',
        danger:
            'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/20 focus:ring-red-500',
        ghost:
            'text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:ring-slate-300',
        accent:
            'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 focus:ring-blue-500',
    };

    const sizes = {
        sm: 'px-3.5 py-2 text-xs',
        md: 'px-4.5 py-2.5 text-sm',
        lg: 'px-6 py-3 text-base',
    };

    return (
        <button
            type={type}
            className={`${base} ${variants[variant] || variants.primary} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
