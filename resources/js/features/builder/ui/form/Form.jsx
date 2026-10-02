import { useState } from 'react';
import { toast } from '@store';
import { handleCardFormSubmit } from '../../utils/formSubmissionHelper.js';
import { parseButtonHref } from '../button/CanvasButton';
import { useBuilderStore } from '../../stores/builderStore';

export default function Form({
  title = '',
  subtitle = '',
  badge = '',
  fields = [],
  submitLabel = 'KIRIM PESAN',
  submitBackground = '#2563eb',
  submitColor = '#ffffff',
  submitRadius = '12px',
  submitAlign = 'full', // 'left' | 'center' | 'right' | 'full'
  background = '#0d1627',
  backgroundGradient = '',
  color = '#ffffff',
  subtitleColor = '#94a3b8',
  borderRadius = '20px',
  borderColor = '#1e293b',
  borderWidth = '1px',
  shadow = 'xl',
  padding = '24px',
  margin = '0px',
  gap = '16px',
  gridCols = '1', // '1' | '2'
  inputBackground = '#091322',
  inputColor = '#ffffff',
  inputBorderColor = '#1e293b',
  inputRadius = '14px',
  labelColor = '#94a3b8',
  action = { type: 'card_form', formChannel: 'whatsapp' },
}) {
  const defaultFields = Array.isArray(fields) && fields.length > 0 ? fields : [
    { id: 'f1', type: 'text', label: '', placeholder: 'Ketik teks di sini...', required: false, width: 'full' },
  ];

  // Local state for user inputs so guests can type & select dropdowns seamlessly
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { switchPreviewPage } = useBuilderStore();

  const handleInputChange = (fieldId, val) => {
    setFormData(prev => ({ ...prev, [fieldId]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const destinationType = action?.type || 'card_form';
    if (destinationType === 'card_form' || destinationType === 'whatsapp' || destinationType === 'email') {
      const channel = destinationType === 'card_form'
        ? (action.formChannel || 'whatsapp')
        : destinationType;

      if (!action.value) {
        toast.error(
          channel === 'email' ? 'Masukkan alamat email tujuan di pengaturan Form Card.' : 'Masukkan nomor WhatsApp tujuan di pengaturan Form Card.',
          'Tujuan Belum Diatur'
        );
        return;
      }

      handleCardFormSubmit(e.currentTarget, {
        ...action,
        type: 'card_form',
        formChannel: channel,
      }, {
        onSuccess: () => {
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 4000);
        },
      });
      return;
    }

    const href = parseButtonHref(action);
    if (!action.value && destinationType !== 'section') {
      toast.error('Lengkapi tujuan pada pengaturan Form Card terlebih dahulu.', 'Tujuan Belum Diatur');
      return;
    }

    if (destinationType === 'file_download') {
      const link = document.createElement('a');
      link.href = href;
      link.download = action.fileName || '';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (destinationType === 'section') {
      const targetId = String(action.value || '').replace(/^#/, '');
      const target = targetId && (
        document.getElementById(targetId) ||
        document.querySelector(`[data-section-id="${targetId}"]`)
      );
      if (!target) {
        toast.error('Section tujuan tidak ditemukan.', 'Tujuan Tidak Ditemukan');
        return;
      }
      target.scrollIntoView({ behavior: 'smooth' });
    } else if (destinationType === 'page' && switchPreviewPage) {
      switchPreviewPage(action.value);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (destinationType === 'web_url' && action.target === '_blank') {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = href;
    }
  };

  const shadowClasses = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
  };

  const hasBorder = borderWidth && borderWidth !== '0px' && borderWidth !== '0';

  const cardStyle = {
    backgroundColor: background || '#0d1627',
    ...(backgroundGradient ? { background: backgroundGradient } : {}),
    borderRadius: borderRadius || '20px',
    borderWidth: hasBorder ? borderWidth : '0px',
    borderColor: hasBorder ? (borderColor || '#1e293b') : 'transparent',
    borderStyle: hasBorder ? 'solid' : 'none',
    padding: padding || '24px',
    margin: margin || '0px',
    boxSizing: 'border-box',
    width: '100%',
  };

  const fieldInputStyle = {
    width: '100%',
    padding: '11px 14px',
    backgroundColor: inputBackground || '#091322',
    color: inputColor || '#ffffff',
    border: `1.5px solid ${inputBorderColor || '#1e293b'}`,
    borderRadius: inputRadius || '14px',
    fontSize: '13px',
    fontWeight: '500',
    outline: 'none',
    transition: 'all 0.2s ease',
    boxSizing: 'border-box',
  };

  const getSubmitAlignStyle = () => {
    if (submitAlign === 'center') return { alignSelf: 'center', width: 'auto' };
    if (submitAlign === 'right') return { alignSelf: 'flex-end', width: 'auto' };
    if (submitAlign === 'left') return { alignSelf: 'flex-start', width: 'auto' };
    return { width: '100%' }; // 'full'
  };

  return (
    <div className={`relative max-w-full box-border ${shadowClasses[shadow] || 'shadow-xl'}`} style={cardStyle}>
      {/* Optional Card Header / Badge */}
      {(badge || title || subtitle) && (
        <div className="mb-6 space-y-2">
          {badge && (
            <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              {badge}
            </span>
          )}
          {title && (
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug" style={{ color: color || '#ffffff' }}>
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: subtitleColor || '#94a3b8' }}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      {submitted ? (
        <div className="py-8 px-4 text-center space-y-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl animate-in fade-in duration-300">
          <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-xl shadow-lg">
            ✓
          </div>
          <h4 className="text-base font-extrabold text-emerald-400">Terima Kasih!</h4>
          <p className="text-xs text-emerald-200/80">Pesan / formulir Anda berhasil terkirim. Tim kami akan segera menghubungi Anda.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: gap || '16px' }}>
          {/* Fields Grid */}
          <div className={`grid grid-cols-1 ${gridCols === '2' ? 'sm:grid-cols-2' : ''}`} style={{ gap: gap || '16px' }}>
            {defaultFields.map((field, idx) => {
              const fieldKey = field.id || `field-${idx}`;
              const isFullWidth = field.width === 'full' || field.type === 'textarea' || gridCols === '1';
              const rawOptions = field.options;
              const optionsArray = (Array.isArray(rawOptions)
                ? rawOptions
                : typeof rawOptions === 'string'
                  ? rawOptions.split(/[,\n]/)
                  : [])
                .map(o => (typeof o === 'string' ? o.trim() : ''))
                .filter(Boolean);

              return (
                <div
                  key={fieldKey}
                  className={isFullWidth ? 'sm:col-span-2' : 'sm:col-span-1'}
                >
                  {field.label && (
                    <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5" style={{ color: labelColor || '#94a3b8' }}>
                      {field.label}
                      {field.required && <span className="text-red-400 ml-1">*</span>}
                    </label>
                  )}

                  {field.type === 'textarea' ? (
                    <textarea
                      name={field.label || fieldKey}
                      value={formData[fieldKey] || ''}
                      onChange={(e) => handleInputChange(fieldKey, e.target.value)}
                      placeholder={field.placeholder || 'Tuliskan pesan Anda...'}
                      required={field.required}
                      rows={4}
                      style={{ ...fieldInputStyle, resize: 'vertical' }}
                    />
                  ) : field.type === 'select' ? (
                    <select
                      name={field.label || fieldKey}
                      value={formData[fieldKey] || ''}
                      onChange={(e) => handleInputChange(fieldKey, e.target.value)}
                      required={field.required}
                      style={{ ...fieldInputStyle, cursor: 'pointer' }}
                    >
                      <option value="" style={{ background: '#0f172a', color: '#94a3b8' }}>
                        {field.placeholder || '-- Pilih Opsi / Dropdown --'}
                      </option>
                      {optionsArray.map((opt, optIdx) => (
                        <option key={optIdx} value={opt} style={{ background: '#0f172a', color: '#ffffff' }}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      name={field.label || fieldKey}
                      type={field.type || 'text'}
                      value={formData[fieldKey] || ''}
                      onChange={(e) => handleInputChange(fieldKey, e.target.value)}
                      placeholder={field.placeholder}
                      required={field.required}
                      style={fieldInputStyle}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              padding: '12px 28px',
              backgroundColor: submitBackground || '#2563eb',
              color: submitColor || '#ffffff',
              borderRadius: submitRadius || '12px',
              fontSize: '13px',
              fontWeight: '800',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              border: 'none',
              cursor: 'pointer',
              marginTop: '8px',
              transition: 'all 0.2s ease',
              boxShadow: '0 10px 25px -5px rgba(37,99,235,0.4)',
              ...getSubmitAlignStyle(),
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
          >
            {submitLabel || 'KIRIM PESAN'}
          </button>
        </form>
      )}
    </div>
  );
}
