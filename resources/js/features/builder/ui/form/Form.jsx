export default function Form({
  fields = [],
  submitLabel = 'Send Message',
  submitBackground = '#4f46e5',
  submitColor = '#ffffff',
  borderRadius = '8px',
  margin = '0',
  gap = '14px',
}) {
  const defaultFields = fields.length > 0 ? fields : [
    { id: 'f1', type: 'text', label: 'Your Name', placeholder: 'Enter your name', required: true },
    { id: 'f2', type: 'email', label: 'Email Address', placeholder: 'Enter your email', required: true },
    { id: 'f3', type: 'tel', label: 'Phone Number', placeholder: 'Enter your phone', required: false },
    { id: 'f4', type: 'textarea', label: 'Message', placeholder: 'Your message...', required: true },
  ];

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    border: '1.5px solid #e2e8f0',
    borderRadius: '6px',
    fontSize: '14px',
    color: '#1e293b',
    background: '#f8fafc',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  };

  return (
    <div style={{ margin }}>
      <form
        onSubmit={(e) => e.preventDefault()}
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
          </div>
        ))}
        <button
          type="submit"
          style={{
            padding: '12px 24px',
            background: submitBackground,
            color: submitColor,
            border: 'none',
            borderRadius,
            fontSize: '14px',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
            alignSelf: 'flex-start',
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '0.85')}
          onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
        >
          {submitLabel}
        </button>
      </form>
    </div>
  );
}
