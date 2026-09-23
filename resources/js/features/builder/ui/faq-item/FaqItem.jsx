export default function FaqItem({
  question = 'What is your return policy?',
  answer = 'We offer a 30-day money-back guarantee for all purchases. Simply contact our support team to initiate the process.',
  isOpen = false,
  accentColor = '#4f46e5',
  margin = '0',
  borderRadius = '8px',
}) {
  // FaqItem renders as a static display (use Accordion for interactive toggle)
  return (
    <div style={{
      margin,
      border: '1.5px solid #e2e8f0',
      borderRadius,
      overflow: 'hidden',
    }}>
      <div style={{
        padding: '14px 18px',
        background: '#f8fafc',
        borderBottom: isOpen ? `2px solid ${accentColor}` : 'none',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <span style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b' }}>{question}</span>
          <span style={{ fontSize: '20px', color: accentColor, fontWeight: '300', flexShrink: 0 }}>
            {isOpen ? '−' : '+'}
          </span>
        </div>
      </div>
      {isOpen && (
        <div style={{ padding: '12px 18px', fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>
          {answer}
        </div>
      )}
    </div>
  );
}
