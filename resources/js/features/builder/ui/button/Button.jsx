import { useBuilderStore } from '../../stores/builderStore';
import InlineEditableText from '../../components/editing/InlineEditableText';
import { parseButtonHref } from './CanvasButton';
import {
  MessageCircle,
  ArrowRight,
  Send,
  Phone,
  Mail,
  Download,
  ShoppingCart,
  Calendar,
  Sparkles,
  CheckCircle,
  Play,
  ExternalLink,
} from 'lucide-react';

const ICON_MAP = {
  MessageCircle,
  ArrowRight,
  Send,
  Phone,
  Mail,
  Download,
  ShoppingCart,
  Calendar,
  Sparkles,
  CheckCircle,
  Play,
  ExternalLink,
};

export default function Button({
  label = 'Button',
  content,
  action,
  styles: propStyles,
  href = '#',
  linkType = 'section',
  linkTarget = '',
  target = '_self',
  iconLeft = null,
  iconRight = null,
  variant = 'primary',
  size = 'medium',
  radius = 'md',
  borderRadius = null,
  background = '#4f46e5',
  color = '#ffffff',
  borderColor = null,
  shadow = 'md',
  fontFamily = 'sans-serif',
  fontSize = '14px',
  fontWeight = '700',
  letterSpacing = 'normal',
  textTransform = 'none',
  padding = null,
  width = null,
  height = null,
  componentId = null,
  sectionId = null,
}) {

  const { updateComponentProps, isPreviewMode, switchPreviewPage, selectComponent } = useBuilderStore();

  // Extract structured content or legacy label
  const rawText = typeof content === 'object' && content?.text !== undefined 
    ? content.text 
    : (content !== undefined && typeof content === 'string' ? content : label);

  const rawIconLeft = typeof content === 'object' && content?.iconLeft !== undefined 
    ? content.iconLeft 
    : iconLeft;

  const rawIconRight = typeof content === 'object' && content?.iconRight !== undefined 
    ? content.iconRight 
    : iconRight;

  const resolvedAction = action || {
    type: linkType || 'web_url',
    value: linkTarget || href || '#',
    message: '',
    target: target || '_self',
  };

  const resolvedVariant = propStyles?.variant || variant || 'primary';
  const resolvedSize = propStyles?.size || size || 'medium';
  const resolvedRadius = propStyles?.borderRadius || borderRadius || radius || 'md';
  const resolvedBg = propStyles?.customBgColor || background;
  const resolvedColor = propStyles?.customTextColor || color;

  const baseStyles = [
    'group',
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'max-w-full',
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
      'bg-indigo-600 text-white hover:bg-indigo-700 hover:-translate-y-0.5 shadow-md',
    secondary:
      'bg-slate-700 text-white hover:bg-slate-800 hover:-translate-y-0.5 shadow-xs',
    outline:
      'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:-translate-y-0.5 bg-transparent',
    ghost:
      'text-indigo-600 hover:bg-indigo-50/80 bg-transparent',
    danger:
      'bg-rose-600 text-white hover:bg-rose-700 hover:-translate-y-0.5 shadow-md',
    gradient:
      'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 hover:-translate-y-0.5',
    pill:
      'bg-indigo-600 text-white hover:bg-indigo-700 hover:-translate-y-0.5 rounded-full',
    square:
      'bg-indigo-600 text-white hover:bg-indigo-700 hover:-translate-y-0.5 rounded-none',
    glass:
      'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30',
  };

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs min-h-[32px]',
    small: 'px-3.5 py-1.5 text-xs min-h-[32px]',
    md: 'px-5 py-2.5 text-sm min-h-[40px]',
    medium: 'px-5 py-2.5 text-sm min-h-[40px]',
    lg: 'px-6.5 py-3.5 text-base min-h-[48px]',
    large: 'px-6.5 py-3.5 text-base min-h-[48px]',
    full: 'w-full px-6 py-3.5 text-base min-h-[48px] justify-center',
  };

  const radiusStyles = {
    none: 'rounded-none',
    '0': 'rounded-none',
    '0px': 'rounded-none',
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    '8px': 'rounded-lg',
    '12px': 'rounded-xl',
    '16px': 'rounded-2xl',
    full: 'rounded-full',
  };

  const shadowStyles = {
    none: '',
    sm: 'shadow-sm hover:shadow-md',
    md: 'shadow-md hover:shadow-lg',
    lg: 'shadow-lg hover:shadow-xl',
  };

  const hasArrow =
    typeof rawText === 'string' &&
    (rawText.endsWith('→') ||
      rawText.endsWith('->') ||
      rawText.endsWith('&rarr;'));

  const cleanLabel = hasArrow
    ? rawText.replace(/(→|->|&rarr;)$/, '').trim()
    : rawText;

  const handleUpdate = (newLabel) => {
    if (sectionId && componentId) {
      const finalLabel = hasArrow ? `${newLabel.trim()} →` : newLabel;
      updateComponentProps(sectionId, componentId, {
        label: finalLabel,
        content: typeof content === 'object' ? { ...content, text: finalLabel } : finalLabel,
        text: finalLabel,
      });
    }
  };

  const isSolidVariant = ['primary', 'secondary', 'pill', 'square', 'danger'].includes(resolvedVariant);

  const resolvedRadiusClass = radiusStyles[resolvedRadius] || 'rounded-lg';
  const customRadius = !radiusStyles[resolvedRadius] && resolvedRadius ? resolvedRadius : undefined;

  const className = [
    baseStyles,
    variantStyles[resolvedVariant] || variantStyles.primary,
    sizeStyles[resolvedSize] || sizeStyles.medium,
    resolvedRadiusClass,
    shadowStyles[shadow] || '',
    resolvedSize === 'full' ? 'w-full' : '',
  ].join(' ');

  const resolvedBorderColor = propStyles?.borderColor || borderColor;
  const isGradientBg = typeof resolvedBg === 'string' && (resolvedBg.includes('gradient') || resolvedBg.includes('linear-') || resolvedBg.includes('radial-'));

  const style = {
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    textTransform,
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
    ...(customRadius ? { borderRadius: customRadius } : {}),
    ...(isSolidVariant && resolvedBg ? {
      ...(isGradientBg ? { background: resolvedBg } : { backgroundColor: resolvedBg }),
      color: resolvedColor || '#ffffff',
    } : {}),
    ...(resolvedVariant === 'outline' ? {
      color: resolvedColor || '#ffffff',
      borderColor: resolvedBorderColor || (resolvedBg && resolvedBg !== 'transparent' && !isGradientBg ? resolvedBg : resolvedColor) || 'currentColor',
      ...(resolvedBg && resolvedBg !== 'transparent' ? (isGradientBg ? { background: resolvedBg } : { backgroundColor: resolvedBg }) : { backgroundColor: 'transparent' }),
    } : {}),
    ...(resolvedVariant === 'ghost' ? {
      color: resolvedColor || (resolvedBg && resolvedBg !== 'transparent' ? resolvedBg : '#ffffff'),
      backgroundColor: 'transparent',
    } : {}),
    ...(padding && padding !== '0' && padding !== 0 ? { padding } : {}),
  };


  // Parse Dynamic Href (WhatsApp, Email, Tel, Page, Section, URL)
  const finalHref = parseButtonHref(resolvedAction);

  // Icons
  const IconLeftComp = rawIconLeft ? ICON_MAP[rawIconLeft] : null;
  const IconRightComp = rawIconRight ? ICON_MAP[rawIconRight] : null;

  const isFileDownload = resolvedAction?.type === 'file_download' || resolvedAction?.type === 'file';
  const downloadAttr = isFileDownload ? (resolvedAction?.fileName || true) : undefined;

  return (
    <a
      href={finalHref}
      download={downloadAttr}
      target={resolvedAction.target === '_blank' ? '_blank' : undefined}
      rel={resolvedAction.target === '_blank' ? 'noopener noreferrer' : undefined}
      onClick={(e) => {
        if (!isPreviewMode) {
          e.preventDefault();
          e.stopPropagation();
          if (componentId) {
            selectComponent(componentId, sectionId);
          }
          return;
        }

        // --- PREVIEW MODE ACTIONS ---
        const actType = resolvedAction?.type || linkType || 'web_url';
        const actVal = resolvedAction?.value || linkTarget || href || '';

        if (actType === 'file_download' || actType === 'file') {
          e.preventDefault();
          if (finalHref && finalHref !== '#') {
            const link = document.createElement('a');
            link.href = finalHref;
            link.download = resolvedAction?.fileName || 'download';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }
        } else if (actType === 'section') {
          e.preventDefault();
          if (actVal) {
            const targetId = String(actVal).replace(/^#/, '');
            const el =
              document.getElementById(targetId) ||
              document.querySelector(`[data-section-id="${targetId}"]`) ||
              (actVal.startsWith('#') ? document.querySelector(actVal) : null);

            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }
        } else if (actType === 'page') {
          e.preventDefault();
          if (actVal && switchPreviewPage) {
            switchPreviewPage(actVal);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        } else if (actType === 'whatsapp') {
          e.preventDefault();
          if (finalHref && finalHref !== '#') {
            window.open(finalHref, '_blank', 'noopener,noreferrer');
          }
        } else if (actType === 'email') {
          e.preventDefault();
          if (finalHref && finalHref !== '#') {
            window.location.href = finalHref;
          }
        } else if (actType === 'phone') {
          e.preventDefault();
          if (finalHref && finalHref !== '#') {
            window.location.href = finalHref;
          }
        } else if (actType === 'web_url') {
          if (resolvedAction.target === '_blank' || target === '_blank') {
            e.preventDefault();
            if (finalHref && finalHref !== '#') {
              window.open(finalHref, '_blank', 'noopener,noreferrer');
            }
          } else {
            if (finalHref && finalHref !== '#') {
              window.location.href = finalHref;
            }
          }
        }
      }}
      className={className}
      style={style}
    >
      {IconLeftComp && <IconLeftComp className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}

      <span className="inline-flex items-center gap-1.5 whitespace-nowrap shrink-0">
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

        {hasArrow && !IconRightComp && (
          <span
            className="inline-flex items-center justify-center shrink-0 whitespace-nowrap transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        )}
      </span>

      {IconRightComp && <IconRightComp className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
    </a>
  );
}

