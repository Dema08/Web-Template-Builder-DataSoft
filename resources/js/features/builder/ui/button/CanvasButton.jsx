import React from 'react';
import { useBuilderStore } from '../../stores/builderStore';
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

// Icon Map for dynamic lookup
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

/**
 * Dynamic Href Parser
 * Converts action object into a valid web, whatsapp, mailto, tel, page, or anchor link
 */
export function parseButtonHref(action = {}) {
  const { type = 'web_url', value = '', message = '' } = action;

  if (!value && type !== 'section') return '#';

  switch (type) {
    case 'card_form': {
      return '#';
    }

    case 'file_download':
    case 'file': {
      return value || '#';
    }

    case 'whatsapp': {
      // Clean phone number: remove non-digits
      let cleanPhone = String(value).replace(/\D+/g, '');
      if (cleanPhone.startsWith('0')) {
        cleanPhone = '62' + cleanPhone.slice(1);
      }
      const encodedMsg = encodeURIComponent(message || '');
      return cleanPhone ? `https://wa.me/${cleanPhone}${encodedMsg ? `?text=${encodedMsg}` : ''}` : '#';
    }

    case 'email': {
      const cleanEmail = String(value).trim();
      const encodedSubject = encodeURIComponent(message || '');
      return cleanEmail ? `mailto:${cleanEmail}${encodedSubject ? `?subject=${encodedSubject}` : ''}` : '#';
    }

    case 'phone': {
      const cleanPhone = String(value).replace(/[^\d+]/g, '');
      return cleanPhone ? `tel:${cleanPhone}` : '#';
    }

    case 'page': {
      return value ? (value.startsWith('/') ? value : `/${value}`) : '#';
    }

    case 'section': {
      return value ? (value.startsWith('#') ? value : `#${value}`) : '#';
    }

    case 'web_url':
    default: {
      const trimmed = String(value).trim();
      if (!trimmed) return '#';
      if (
        trimmed.startsWith('#') ||
        trimmed.startsWith('/') ||
        trimmed.startsWith('http://') ||
        trimmed.startsWith('https://') ||
        trimmed.startsWith('mailto:') ||
        trimmed.startsWith('tel:')
      ) {
        return trimmed;
      }
      return `https://${trimmed}`;
    }
  }
}

export default function CanvasButton({
  id = 'btn-01',
  node = null,
  content: propContent,
  action: propAction,
  styles: propStyles,
  sectionId = null,
  isEditMode = true,
  onClick = null,
  className: extraClassName = '',
}) {
  const { isPreviewMode, selectComponent, switchPreviewPage } = useBuilderStore();

  // Support both direct node object or split props
  const content = node?.content || propContent || {
    text: 'Konsultasi Gratis',
    iconLeft: null,
    iconRight: null,
  };

  const action = node?.action || propAction || {
    type: 'web_url',
    value: '#',
    message: '',
    target: '_self',
  };

  const styles = node?.styles || propStyles || {
    variant: 'primary',
    size: 'md',
    borderRadius: 'full',
    customBgColor: null,
    customTextColor: null,
  };

  // Determine if running in active builder editing environment
  const isInEditor = !isPreviewMode && isEditMode;

  // 1. Variant Styles (Tailwind v4 ready)
  const variantStyles = {
    primary:
      'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg focus:ring-2 focus:ring-indigo-500/50 active:translate-y-0.5',
    secondary:
      'bg-slate-700 hover:bg-slate-800 text-white shadow-sm hover:shadow focus:ring-2 focus:ring-slate-500/50 active:translate-y-0.5',
    outline:
      'border-2 border-indigo-600 text-indigo-600 bg-transparent hover:bg-indigo-50 focus:ring-2 focus:ring-indigo-500/30 active:translate-y-0.5',
    ghost:
      'text-indigo-600 bg-transparent hover:bg-indigo-50/80 hover:text-indigo-700 active:translate-y-0.5',
    danger:
      'bg-rose-600 hover:bg-rose-700 text-white shadow-md hover:shadow-lg focus:ring-2 focus:ring-rose-500/50 active:translate-y-0.5',
  };

  // 2. Size Styles
  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5 min-h-[32px]',
    md: 'px-5 py-2.5 text-sm gap-2 min-h-[42px]',
    lg: 'px-6.5 py-3.5 text-base font-semibold gap-2.5 min-h-[50px]',
    full: 'w-full px-6 py-3.5 text-base font-semibold gap-2.5 justify-center min-h-[50px]',
  };

  // 3. Border Radius Styles
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

  // 4. Icon Size Mapping
  const iconSizeStyles = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    full: 'w-5 h-5',
  };

  const resolvedRadiusClass = radiusStyles[styles.borderRadius] || 'rounded-full';
  const customRadius = !radiusStyles[styles.borderRadius] && styles.borderRadius ? styles.borderRadius : undefined;

  // Resolve Icons
  const IconLeftComponent = content.iconLeft ? ICON_MAP[content.iconLeft] : null;
  const IconRightComponent = content.iconRight ? ICON_MAP[content.iconRight] : null;
  const iconClass = iconSizeStyles[styles.size] || 'w-4 h-4';

  const finalHref = parseButtonHref(action);
  const targetAttr = action.target === '_blank' ? '_blank' : undefined;
  const relAttr = action.target === '_blank' ? 'noopener noreferrer' : undefined;

  // Inline styles for custom color overrides
  const inlineStyles = {
    ...(customRadius ? { borderRadius: customRadius } : {}),
    ...(styles.customBgColor ? { backgroundColor: styles.customBgColor } : {}),
    ...(styles.customTextColor ? { color: styles.customTextColor } : {}),
  };

  const buttonClasses = [
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none no-underline',
    variantStyles[styles.variant] || variantStyles.primary,
    sizeStyles[styles.size] || sizeStyles.md,
    resolvedRadiusClass,
    styles.size === 'full' ? 'w-full' : '',
    extraClassName,
  ].filter(Boolean).join(' ');

  const isFileDownload = action.type === 'file_download' || action.type === 'file';
  const downloadAttr = isFileDownload ? (action.fileName || true) : undefined;

  const handleClick = (e) => {
    // If in builder editing mode, intercept link navigation to allow selection
    if (isInEditor) {
      e.preventDefault();
      e.stopPropagation();
      const compId = node?.id || id;
      if (compId && selectComponent) {
        selectComponent(compId, sectionId);
      }
      if (onClick) onClick(e);
      return;
    }

    // In Preview Mode: handle smooth scroll for section anchors or page switches or file download
    if (action.type === 'section' && action.value) {
      e.preventDefault();
      const targetId = action.value.replace('#', '');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (action.type === 'page' && action.value && switchPreviewPage) {
      e.preventDefault();
      switchPreviewPage(action.value);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (isFileDownload && finalHref && finalHref !== '#') {
      if (isPreviewMode) {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = finalHref;
        link.download = action.fileName || 'download';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  return (
    <a
      id={node?.id || id}
      href={finalHref}
      download={downloadAttr}
      target={targetAttr}
      rel={relAttr}
      onClick={handleClick}
      style={inlineStyles}
      className={buttonClasses}
    >
      {IconLeftComponent && (
        <IconLeftComponent className={`${iconClass} shrink-0 transition-transform group-hover:-translate-x-0.5`} />
      )}

      <span className="truncate whitespace-nowrap">{content.text || 'Button'}</span>

      {IconRightComponent && (
        <IconRightComponent className={`${iconClass} shrink-0 transition-transform group-hover:translate-x-0.5`} />
      )}
    </a>
  );
}
