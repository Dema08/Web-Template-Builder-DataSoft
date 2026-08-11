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
  padding = '0',
  componentId = null,
  sectionId = null,
}) {
  const { updateComponentProps } = useBuilderStore();

  const baseStyles = 'font-bold transition-all inline-flex items-center justify-center';

  const variantStyles = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-slate-600 text-white hover:bg-slate-700',
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50',
    ghost: 'text-indigo-600 hover:bg-indigo-50',
    gradient: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700',
    pill: 'bg-indigo-600 text-white hover:bg-indigo-700',
    square: 'bg-indigo-600 text-white hover:bg-indigo-700',
    glass: 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30',
  };

  const sizeStyles = {
    small: 'px-3 py-1.5 text-xs',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-base',
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
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };

  const handleUpdate = (newLabel) => {
    if (sectionId && componentId) {
      updateComponentProps(sectionId, componentId, { label: newLabel });
    }
  };

  const className = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${sizeStyles[size]} ${radiusStyles[radius]} ${shadowStyles[shadow]}`;

  const style = {
    backgroundColor: ['primary', 'secondary', 'gradient', 'pill', 'square'].includes(variant) ? background : 'transparent',
    color: ['primary', 'secondary', 'gradient', 'pill', 'square'].includes(variant) ? color : background,
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    textTransform,
    padding,
  };

  return (
    <a
      href={href}
      onClick={(e) => e.preventDefault()}
      className={className}
      style={style}
    >
      <InlineEditableText
        value={label}
        onUpdate={handleUpdate}
        style={{ fontFamily, fontSize, fontWeight, letterSpacing, textTransform }}
        tag="span"
      />
    </a>
  );
}