import { useBuilderStore } from '../../stores/builderStore';
import InlineEditableText from '../../components/editing/InlineEditableText';

export default function Button({
  label = 'Button',
  href = '#',
  variant = 'primary',
  size = 'medium',
  radius = 'md',
  background = '#4f46e5',
  color = '#ffffff',
  shadow = 'md',
  fontFamily = 'sans-serif',
  fontSize = '14px',
  fontWeight = '700',
  letterSpacing = 'normal',
  textTransform = 'none',
  padding = null,
  componentId = null,
  sectionId = null,
}) {
  const { updateComponentProps } = useBuilderStore();

  const baseStyles = [
    'group',
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'whitespace-nowrap',
    'min-w-max',
    'shrink-0',
    'select-none',
    'transition-all',
    'duration-300',
    'ease-out',
    'cursor-pointer',
    'no-underline',
  ].join(' ');

  const variantStyles = {
    primary:
      'bg-indigo-600 text-white hover:bg-indigo-700 hover:-translate-y-0.5',

    secondary:
      'bg-slate-600 text-white hover:bg-slate-700 hover:-translate-y-0.5',

    outline:
      'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:-translate-y-0.5',

    ghost:
      'text-indigo-600 hover:bg-indigo-50',

    gradient:
      'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 hover:-translate-y-0.5',

    pill:
      'bg-indigo-600 text-white hover:bg-indigo-700 hover:-translate-y-0.5',

    square:
      'bg-indigo-600 text-white hover:bg-indigo-700 hover:-translate-y-0.5',

    glass:
      'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30',
  };

  const sizeStyles = {
    small: 'px-3 py-1.5 text-xs min-h-[32px]',
    medium: 'px-4 py-2 text-sm min-h-[40px]',
    large: 'px-6 py-3 text-base min-h-[48px]',
  };

  const radiusStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    full: 'rounded-full',
  };

  const shadowStyles = {
    none: '',
    sm: 'shadow-sm hover:shadow-md',
    md: 'shadow-md hover:shadow-lg',
    lg: 'shadow-lg hover:shadow-xl',
  };

  /**
   * Detect arrow at the end of the label.
   */
  const hasArrow =
    typeof label === 'string' &&
    (label.endsWith('→') ||
      label.endsWith('->') ||
      label.endsWith('&rarr;'));

  const cleanLabel = hasArrow
    ? label.replace(/(→|->|&rarr;)$/, '').trim()
    : label;

  /**
   * Update editable label while preserving arrow.
   */
  const handleUpdate = (newLabel) => {
    if (sectionId && componentId) {
      const finalLabel = hasArrow
        ? `${newLabel.trim()} →`
        : newLabel;

      updateComponentProps(
        sectionId,
        componentId,
        {
          label: finalLabel,
        }
      );
    }
  };

  const isSolidVariant = [
    'primary',
    'secondary',
    'pill',
    'square',
  ].includes(variant);

  const isGradientVariant = variant === 'gradient';

  const className = [
    baseStyles,
    variantStyles[variant] || variantStyles.primary,
    sizeStyles[size] || sizeStyles.medium,
    radiusStyles[radius] || radiusStyles.md,
    shadowStyles[shadow] || '',
  ].join(' ');

  const style = {
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    textTransform,

    /**
     * Only apply custom background to solid variants.
     * Gradient variant keeps its Tailwind gradient.
     */
    ...(isSolidVariant
      ? {
          backgroundColor: background,
          color,
        }
      : {}),

    /**
     * Outline / ghost / glass use the configured color.
     */
    ...(variant === 'outline' || variant === 'ghost'
      ? {
          color: background,
        }
      : {}),

    ...(variant === 'glass'
      ? {
          color,
        }
      : {}),

    /**
     * Custom padding is optional.
     * Don't let default "0" destroy Tailwind sizing.
     */
    ...(padding &&
    padding !== '0' &&
    padding !== 0
      ? {
          padding,
        }
      : {}),
  };

  return (
    <a
      href={href}
      onClick={(e) => e.preventDefault()}
      className={className}
      style={style}
    >
      <span className="inline-flex items-center gap-2 whitespace-nowrap shrink-0">
        <InlineEditableText
          value={cleanLabel}
          onUpdate={handleUpdate}
          style={{
            fontFamily,
            fontSize,
            fontWeight,
            letterSpacing,
            textTransform,
            whiteSpace: 'nowrap',
            display: 'inline-block',
          }}
          tag="span"
        />

        {hasArrow && (
          <span
            className="
              inline-flex
              items-center
              justify-center
              shrink-0
              whitespace-nowrap
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
            aria-hidden="true"
          >
            →
          </span>
        )}
      </span>
    </a>
  );
}
