import { renderLayoutComponents } from '../../../utils/layoutRenderer.jsx';

export default function Faq01({ components = [], sectionId = null }) {
  const defaultComponents = [
    { id: 'heading-1', type: 'heading', props: { content: 'Frequently Asked Questions', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ];

  const layoutComponents = components.length > 0 ? components : defaultComponents;

  const faqs = [
    { question: 'What services do you offer?', answer: 'We offer a comprehensive range of services tailored to your needs.' },
    { question: 'How can I get started?', answer: 'Simply contact us and our team will help you get started.' },
    { question: 'What is your pricing?', answer: 'We offer flexible pricing plans to suit businesses of all sizes.' },
    { question: 'Do you provide support?', answer: 'Yes, we provide 24/7 support for all our customers.' },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12">
          {renderLayoutComponents(layoutComponents.filter(c => c.type === 'heading' || c.type === 'text' || c.type === 'badge'), sectionId)}
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
              <button className="w-full px-6 py-4 text-left font-bold text-slate-900 hover:bg-slate-100 transition flex items-center justify-between">
                {faq.question}
                <span className="text-indigo-600">+</span>
              </button>
              <div className="px-6 pb-4 text-sm text-slate-600">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}