<<<<<<< Updated upstream
import { handleCardFormSubmit } from '../../utils/formSubmissionHelper.js';
=======
import { useState } from 'react';
import { toast } from '@store';
>>>>>>> Stashed changes

export default function Form({
  title = '',
  subtitle = '',
  badge = '',
  fields = [],
  submitLabel = 'KIRIM PESAN',
  submitBackground = '#2563eb',
  submitColor = '#ffffff',
<<<<<<< Updated upstream
  borderRadius = '8px',
  margin = '0',
  gap = '14px',
  action = null,
=======
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
>>>>>>> Stashed changes
}) {
  const defaultFields = Array.isArray(fields) && fields.length > 0 ? fields : [
    { id: 'f1', type: 'text', label: '', placeholder: 'Ketik teks di sini...', required: false, width: 'full' },
  ];

<<<<<<< Updated upstream
  const handleSubmit = (e) => {
    e.preventDefault();
    if (action && action.type === 'card_form') {
      handleCardFormSubmit(e.currentTarget, action);
    }
  };

  const inputStyle = {
=======
  // Local state for user inputs so guests can type & select dropdowns seamlessly
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (fieldId, val) => {
    setFormData(prev => ({ ...prev, [fieldId]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('Pesan Anda berhasil terkirim!', 'Form Submitted');
    setTimeout(() => setSubmitted(false), 4000);
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
    backgroundColor: background || '#0f172a',
    ...(backgroundGradient ? { background: backgroundGradient } : {}),
    borderRadius: borderRadius || '20px',
    borderWidth: hasBorder ? borderWidth : '0px',
    borderColor: hasBorder ? (borderColor || '#1e293b') : 'transparent',
    borderStyle: hasBorder ? 'solid' : 'none',
    padding: padding || '32px',
    margin: margin || '0px',
    boxSizing: 'border-box',
>>>>>>> Stashed changes
    width: '100%',
  };

  const fieldInputStyle = {
    width: '100%',
    padding: '11px 14px',
    backgroundColor: inputBackground || '#1e293b',
    color: inputColor || '#ffffff',
    border: `1.5px solid ${inputBorderColor || '#334155'}`,
    borderRadius: inputRadius || '10px',
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
<<<<<<< Updated upstream
    <div style={{ margin }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap }}
      >
        {defaultFields.map((field) => (
          <div key={field.id || field.label}>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#374151', marginBottom: '5px' }}>
              {field.label}
              {field.required && <span style={{ color: '#ef4444', marginLeft: '3px' }}>*</span>}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                placeholder={field.placeholder}
                rows={4}
                style={{ ...inputStyle, resize: 'vertical' }}
              />
            ) : field.type === 'select' ? (
              <select style={inputStyle}>
                <option value="">{field.placeholder || 'Select an option'}</option>
                {(field.options || []).map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type || 'text'}
                placeholder={field.placeholder}
                style={inputStyle}
              />
            )}
=======
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
>>>>>>> Stashed changes
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
              const optionsArray = Array.isArray(rawOptions)
                ? rawOptions
                : typeof rawOptions === 'string'
                  ? rawOptions.split(',').map(o => o.trim()).filter(Boolean)
                  : [];

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
                      value={formData[fieldKey] || ''}
                      onChange={(e) => handleInputChange(fieldKey, e.target.value)}
                      placeholder={field.placeholder || 'Tuliskan pesan Anda...'}
                      required={field.required}
                      rows={4}
                      style={{ ...fieldInputStyle, resize: 'vertical' }}
                    />
                  ) : field.type === 'select' ? (
                    <select
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
