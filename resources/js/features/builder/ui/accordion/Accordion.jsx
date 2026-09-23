import { useState } from 'react';

export default function Accordion({
  items = [],
  allowMultiple = false,
  variant = 'default',
  gap = '8px',
  margin = '0',
  borderRadius = '8px',
}) {
  const [openItems, setOpenItems] = useState([]);

  const defaultItems = items.length > 0 ? items : [
    { id: 'acc-1', question: 'What is this accordion component?', answer: 'This is a collapsible FAQ component you can customize with your own questions and answers.' },
    { id: 'acc-2', question: 'How do I add more items?', answer: 'Select this component in the inspector panel to add, remove or edit accordion items.' },
    { id: 'acc-3', question: 'Can I customize the styling?', answer: 'Yes! Use the Inspector panel on the right to change colors, fonts, and other style properties.' },
  ];

  const toggle = (id) => {
    if (allowMultiple) {
      setOpenItems(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    } else {
      setOpenItems(prev => prev.includes(id) ? [] : [id]);
    }
  };

  const variantStyles = {
    default: { border: '1px solid #e2e8f0', background: '#ffffff' },
    filled: { border: 'none', background: '#f8fafc' },
    minimal: { border: 'none', borderBottom: '1px solid #e2e8f0', background: 'transparent', borderRadius: '0' },
  };

  const baseStyle = { margin };

  return (
    <div style={baseStyle}>
      <div style={{ display: 'flex', flexDirection: 'column', gap }}>
        {defaultItems.map((item) => {
          const isOpen = openItems.includes(item.id || item.question);
          const itemStyle = {
            ...(variantStyles[variant] || variantStyles.default),
            borderRadius: variant === 'minimal' ? '0' : borderRadius,
            overflow: 'hidden',
          };
          return (
            <div key={item.id || item.question} style={itemStyle}>
              <button
                onClick={() => toggle(item.id || item.question)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: '12px',
                }}
              >
                <span style={{ fontSize: '15px', fontWeight: '600', color: '#1e293b', flex: 1 }}>
                  {item.question}
                </span>
                <span style={{
                  fontSize: '18px',
                  color: '#6366f1',
                  fontWeight: '300',
                  transition: 'transform 0.2s ease',
                  transform: isOpen ? 'rotate(45deg)' : 'none',
                  flexShrink: 0,
                }}>
                  +
                </span>
              </button>
              {isOpen && (
                <div style={{
                  padding: '0 18px 16px 18px',
                  fontSize: '14px',
                  color: '#64748b',
                  lineHeight: '1.6',
                }}>
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
