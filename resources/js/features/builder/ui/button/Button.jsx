import { useState, useRef, useEffect } from 'react';
import { useBuilderStore } from '../../stores/builderStore';
import InlineEditableText from '../../components/editing/InlineEditableText';
import { parseButtonHref } from './CanvasButton';
import { handleCardFormSubmit } from '../../utils/formSubmissionHelper';
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
  ChevronDown,
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
  hasDropdown = null,
  dropdownItems = null,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const leaveTimerRef = useRef(null);

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

  const hasArrow =
    typeof rawText === 'string' &&
    (rawText.endsWith('→') ||
      rawText.endsWith('->') ||
      rawText.endsWith('&rarr;'));

  const cleanLabel = hasArrow
    ? rawText.replace(/(→|->|&rarr;)$/, '').trim()
    : rawText;

  // Dropdown detection & sub-items resolution
  const isCta = (componentId && String(componentId).toLowerCase().startsWith('cta')) ||
                (content && typeof content === 'object' && content?.isCta);

  const isDropdownActive = !isCta && (
    hasDropdown === true ||
    (content && typeof content === 'object' && content?.hasDropdown === true) ||
    (Array.isArray(dropdownItems) && dropdownItems.length > 0 && hasDropdown !== false) ||
    (content && typeof content === 'object' && Array.isArray(content?.dropdownItems) && content.dropdownItems.length > 0 && hasDropdown !== false)
  );

  const defaultDropdownSubItems = [
    { label: `${cleanLabel} Utama`, href: `#${cleanLabel.toLowerCase().replace(/\s+/g, '-')}-hero`, type: 'section' },
    { label: `${cleanLabel} Detail`, href: `#${cleanLabel.toLowerCase().replace(/\s+/g, '-')}-details`, type: 'section' },
    { label: `${cleanLabel} Informasi`, href: `#${cleanLabel.toLowerCase().replace(/\s+/g, '-')}-info`, type: 'section' },
  ];

  const resolvedDropdownItems = (Array.isArray(dropdownItems) && dropdownItems.length > 0)
    ? dropdownItems
    : ((content && Array.isArray(content.dropdownItems) && content.dropdownItems.length > 0)
        ? content.dropdownItems
        : defaultDropdownSubItems);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    if (!dropdownOpen) return;
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dropdownOpen]);

  const handleMouseEnter = () => {
    if (!isDropdownActive) return;
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (!isDropdownActive) return;
    leaveTimerRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const handleSubItemClick = (e, subItem) => {
    if (!isPreviewMode) {
      e.preventDefault();
      e.stopPropagation();
      setDropdownOpen(false);
      if (componentId) selectComponent(componentId, sectionId);
      return;
    }

    e.preventDefault();
    e.stopPropagation();
    setDropdownOpen(false);

    const val = subItem.href || '#';
    if (subItem.type === 'page') {
      if (switchPreviewPage) switchPreviewPage(val);
    } else if (val.startsWith('#')) {
      const targetId = val.replace(/^#/, '');
      const el = document.getElementById(targetId) || document.querySelector(`[data-section-id="${targetId}"]`) || document.querySelector(val);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(val, '_blank', 'noopener,noreferrer');
    }
  };

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
    'min-w-0',
    'shrink-0',
    'select-none',
    'transition-all',
    'duration-300',
    'ease-out',
    'cursor-pointer',
    'no-underline',
    'whitespace-normal',
    'break-words',
    'text-center',
  ].join(' ');

  const variantStyles = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 hover:-translate-y-0.5 shadow-md',
    secondary: 'bg-slate-700 text-white hover:bg-slate-800 hover:-translate-y-0.5 shadow-xs',
    outline: 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:-translate-y-0.5 bg-transparent',
    ghost: 'text-indigo-600 hover:bg-indigo-50/80 bg-transparent',
    danger: 'bg-rose-600 text-white hover:bg-rose-700 hover:-translate-y-0.5 shadow-md',
    gradient: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 hover:-translate-y-0.5',
    pill: 'bg-indigo-600 text-white hover:bg-indigo-700 hover:-translate-y-0.5 rounded-full',
    square: 'bg-indigo-600 text-white hover:bg-indigo-700 hover:-translate-y-0.5 rounded-none',
    glass: 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30',
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

  const buttonElement = (
    <a
      href={finalHref}
      download={downloadAttr}
      target={resolvedAction.target === '_blank' ? '_blank' : undefined}
      rel={resolvedAction.target === '_blank' ? 'noopener noreferrer' : undefined}
      onClick={(e) => {
        if (isDropdownActive) {
          if (!isPreviewMode) {
            e.preventDefault();
            e.stopPropagation();
            setDropdownOpen(v => !v);
            if (componentId) selectComponent(componentId, sectionId);
            return;
          }
          setDropdownOpen(v => !v);
        }

        if (!isPreviewMode) {
          e.preventDefault();
          e.stopPropagation();
          if (componentId) selectComponent(componentId, sectionId);
          return;
        }

        // --- PREVIEW MODE ACTIONS ---
        const actType = resolvedAction?.type || linkType || 'web_url';
        const actVal = resolvedAction?.value || linkTarget || href || '';

        if (actType === 'card_form') {
          e.preventDefault();
          const formCardEl = e.currentTarget.closest('form') || e.currentTarget.closest('[data-form-card]') || e.currentTarget.closest('.shadow-2xl') || e.currentTarget.closest('.shadow-xl') || e.currentTarget.closest('[class*="rounded-3xl"]') || e.currentTarget.closest('[class*="rounded-2xl"]') || e.currentTarget.closest('section') || document.body;
          
          handleCardFormSubmit({
            containerElement: formCardEl,
            action: resolvedAction,
            defaultTarget: actVal || resolvedAction?.formTarget || '',
            defaultChannel: resolvedAction?.formChannel || (actVal.includes('@') ? 'email' : 'whatsapp'),
            defaultIntro: resolvedAction?.message || 'Halo Admin, ada permohonan baru dari formulir website:',
            defaultSubject: resolvedAction?.formSubject || resolvedAction?.subject || '[Form Website] Permohonan Baru',
          });
          return;
        }

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
          if (!isDropdownActive) {
            e.preventDefault();
            if (actVal) {
              const targetId = String(actVal).replace(/^#/, '');
              const el =
                document.getElementById(targetId) ||
                document.querySelector(`[data-section-id="${targetId}"]`) ||
                (actVal.startsWith('#') ? document.querySelector(actVal) : null);

              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          }
        } else if (actType === 'page') {
          if (!isDropdownActive) {
            e.preventDefault();
            if (actVal && switchPreviewPage) {
              switchPreviewPage(actVal);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
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
          if (!isDropdownActive) {
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
        }
      }}
      className={className}
      style={style}
    >
      {IconLeftComp && <IconLeftComp className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-0.5" />}

      <span className="inline-flex items-center gap-1.5 min-w-0 max-w-full flex-wrap justify-center text-center">
        <InlineEditableText
          value={cleanLabel}
          onUpdate={handleUpdate}
          style={{
            fontFamily,
            fontSize,
            fontWeight,
            letterSpacing,
            textTransform,
            whiteSpace: 'normal',
            overflowWrap: 'anywhere',
            wordBreak: 'break-word',
            display: 'inline-block',
            maxWidth: '100%',
          }}
          tag="span"
        />

        {hasArrow && !IconRightComp && (
          <span
            className="inline-flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        )}

        {isDropdownActive && (
          <ChevronDown
            className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
              dropdownOpen ? 'rotate-180 text-indigo-500' : 'opacity-70 group-hover:opacity-100'
            }`}
          />
        )}
      </span>

      {IconRightComp && <IconRightComp className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
    </a>
  );

  if (!isDropdownActive) {
    return buttonElement;
  }

  return (
    <div
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block text-left w-full sm:w-auto"
    >
      {buttonElement}

      {/* Floating Desktop Dropdown Menu */}
      {dropdownOpen && (
        <div className="hidden lg:block absolute left-0 top-full pt-1.5 z-[100] min-w-[210px] animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 rounded-2xl p-2 shadow-2xl shadow-slate-900/15 ring-1 ring-black/5 flex flex-col gap-0.5">
            <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-3 py-1.5 select-none border-b border-slate-100 dark:border-slate-800/80 mb-1 flex items-center justify-between">
              <span>{cleanLabel}</span>
              <span className="text-[9px] bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 rounded-md font-mono">
                Menu
              </span>
            </div>
            {resolvedDropdownItems.map((subItem, idx) => (
              <a
                key={idx}
                href={subItem.href || '#'}
                onClick={(e) => handleSubItemClick(e, subItem)}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/80 dark:hover:bg-slate-800/80 transition-all group/sub select-none"
              >
                <span className="truncate">{subItem.label}</span>
                <span className="text-[11px] text-slate-400 group-hover/sub:translate-x-0.5 transition-transform">→</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Inline Mobile Expandable Sub-Menu */}
      {dropdownOpen && (
        <div className="lg:hidden w-full pl-3 pr-1 py-1 flex flex-col gap-1 border-l-2 border-indigo-500/40 my-1 bg-slate-50/80 dark:bg-slate-900/60 rounded-r-xl transition-all">
          {resolvedDropdownItems.map((subItem, idx) => (
            <a
              key={idx}
              href={subItem.href || '#'}
              onClick={(e) => handleSubItemClick(e, subItem)}
              className="py-1.5 px-2.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-slate-800/50 rounded-lg transition flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/70" />
                <span>{subItem.label}</span>
              </span>
              <span className="text-[10px] text-slate-400">↳</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}


