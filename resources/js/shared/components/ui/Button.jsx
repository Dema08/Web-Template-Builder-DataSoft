import { forwardRef } from 'react';

const Button = forwardRef(function Button(
    {
        type = 'button',
        variant = 'primary',
        size = 'md',
        className = '',
        loading = false,
        disabled = false,
        icon: Icon,
        iconPosition = 'left',
        children,
        ...props
    },
    ref
) {
    const base =
        'inline-flex items-center justify-center gap-2 font-semibold rounded-lg select-none whitespace-nowrap transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 disabled:pointer-events-none';

    const variants = {
        primary:
            'bg-indigo-600 text-white shadow-sm shadow-indigo-600/20 hover:bg-indigo-700 hover:shadow-md hover:shadow-indigo-600/30 focus-visible:ring-indigo-500 focus-visible:ring-offset-white',
        secondary:
            'bg-white text-slate-700 border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 focus-visible:ring-slate-400 focus-visible:ring-offset-white',
        danger:
            'bg-red-600 text-white shadow-sm shadow-red-600/20 hover:bg-red-700 hover:shadow-md hover:shadow-red-600/30 focus-visible:ring-red-500 focus-visible:ring-offset-white',
        ghost:
            'text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-slate-300 focus-visible:ring-offset-white',
        accent:
            'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm shadow-blue-600/20 hover:from-blue-700 hover:to-indigo-700 hover:shadow-md hover:shadow-blue-600/30 focus-visible:ring-blue-500 focus-visible:ring-offset-white',
        success:
            'bg-emerald-600 text-white shadow-sm shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-md hover:shadow-emerald-600/30 focus-visible:ring-emerald-500 focus-visible:ring-offset-white',
        warning:
            'bg-amber-500 text-white shadow-sm shadow-amber-500/20 hover:bg-amber-600 hover:shadow-md hover:shadow-amber-500/30 focus-visible:ring-amber-400 focus-visible:ring-offset-white',
    };

    const sizes = {
        xs: 'px-2.5 py-1.5 text-xs',
        sm: 'px-3.5 py-2 text-sm',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-6 py-3 text-base',
        xl: 'px-8 py-3.5 text-lg',
    };

    const iconSizes = {
        xs: 'h-3.5 w-3.5',
        sm: 'h-4 w-4',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
        xl: 'h-5 w-5',
    };

    const isDisabled = disabled || loading;

    return (
        <button
            ref={ref}
            type={type}
            disabled={isDisabled}
            aria-busy={loading || undefined}
            className={`${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
            {...props}
        >
            {loading ? (
                <svg
                    className={`${iconSizes[size] || iconSizes.md} animate-spin`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            ) : (
                Icon &&
                iconPosition === 'left' && (
                    <Icon className={iconSizes[size] || iconSizes.md} aria-hidden="true" />
                )
            )}

            {children}

            {!loading && Icon && iconPosition === 'right' && (
                <Icon className={iconSizes[size] || iconSizes.md} aria-hidden="true" />
            )}
        </button>
    );
});

export default Button;