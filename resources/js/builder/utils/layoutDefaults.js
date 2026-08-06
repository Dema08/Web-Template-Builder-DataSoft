// Layout Defaults Registry
// Maps layout IDs to their default component definitions
// Used to seed sections with initial components when added to the canvas

export const LAYOUT_DEFAULTS = {
  // === NAVBAR LAYOUTS ===
  'navbar-01': [
    { id: 'logo-1', type: 'heading', props: { content: 'Logo', level: 'h2', fontSize: '20px', fontWeight: '700', color: '#000000' } },
  ],
  'navbar-02': [
    { id: 'logo-1', type: 'image', props: { src: '', alt: 'Logo', width: '120px', height: '40px', objectFit: 'contain' } },
    { id: 'heading-1', type: 'heading', props: { content: 'Brand Name', level: 'h2', fontSize: '18px', fontWeight: '700', color: '#0f172a' } },
  ],
  'navbar-03': [
    { id: 'logo-1', type: 'heading', props: { content: 'Logo', level: 'h2', fontSize: '20px', fontWeight: '700', color: '#ffffff' } },
  ],
  'navbar-04': [
    { id: 'logo-1', type: 'heading', props: { content: 'Logo', level: 'h2', fontSize: '20px', fontWeight: '700', color: '#0f172a' } },
  ],
  'navbar-05': [
    { id: 'logo-1', type: 'heading', props: { content: 'Logo', level: 'h2', fontSize: '20px', fontWeight: '700', color: '#0f172a' } },
    { id: 'button-1', type: 'button', props: { label: 'Get Started', href: '#', variant: 'primary', size: 'medium', background: '#4f46e5', color: '#ffffff' } },
  ],

  // === HERO LAYOUTS ===
  'hero-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Hero Title', level: 'h1', fontSize: '48px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Hero subtitle', fontSize: '20px', color: '#e0e7ff', align: 'center', margin: '0 0 24px 0' } },
    { id: 'button-1', type: 'button', props: { label: 'Get Started', href: '#', variant: 'primary', size: 'large', background: '#ffffff', color: '#4f46e5' } },
  ],
  'hero-02': [
    { id: 'heading-1', type: 'heading', props: { content: 'Hero Title', level: 'h1', fontSize: '48px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Hero subtitle', fontSize: '20px', color: '#e0e7ff', align: 'center', margin: '0 0 24px 0' } },
    { id: 'button-1', type: 'button', props: { label: 'Get Started', href: '#', variant: 'primary', size: 'large', background: '#4f46e5', color: '#ffffff' } },
  ],
  'hero-03': [
    { id: 'heading-1', type: 'heading', props: { content: 'Hero Title', level: 'h1', fontSize: '48px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Hero subtitle', fontSize: '20px', color: '#e0e7ff', align: 'center', margin: '0 0 24px 0' } },
    { id: 'button-1', type: 'button', props: { label: 'Get Started', href: '#', variant: 'primary', size: 'large', background: '#ffffff', color: '#4f46e5' } },
  ],
  'hero-04': [
    { id: 'heading-1', type: 'heading', props: { content: 'Hero Title', level: 'h1', fontSize: '48px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Hero subtitle', fontSize: '20px', color: '#64748b', align: 'center', margin: '0 0 24px 0' } },
    { id: 'button-1', type: 'button', props: { label: 'Get Started', href: '#', variant: 'primary', size: 'large', background: '#4f46e5', color: '#ffffff' } },
  ],
  'hero-05': [
    { id: 'heading-1', type: 'heading', props: { content: 'Hero Title', level: 'h1', fontSize: '56px', fontWeight: '800', color: '#0f172a', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Hero subtitle', fontSize: '20px', color: '#64748b', align: 'left', margin: '0 0 24px 0' } },
    { id: 'button-1', type: 'button', props: { label: 'Get Started', href: '#', variant: 'primary', size: 'large', background: '#4f46e5', color: '#ffffff' } },
  ],
  'hero-06': [
    { id: 'heading-1', type: 'heading', props: { content: 'Hero Title', level: 'h1', fontSize: '48px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Hero subtitle', fontSize: '20px', color: '#e0e7ff', align: 'center', margin: '0 0 24px 0' } },
    { id: 'button-1', type: 'button', props: { label: 'Get Started', href: '#', variant: 'primary', size: 'large', background: '#ffffff', color: '#4f46e5' } },
  ],
  'hero-07': [
    { id: 'heading-1', type: 'heading', props: { content: 'Hero Title', level: 'h1', fontSize: '48px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Hero subtitle', fontSize: '20px', color: '#64748b', align: 'center', margin: '0 0 24px 0' } },
    { id: 'button-1', type: 'button', props: { label: 'Get Started', href: '#', variant: 'primary', size: 'large', background: '#4f46e5', color: '#ffffff' } },
  ],
  'hero-08': [
    { id: 'heading-1', type: 'heading', props: { content: 'Hero Title', level: 'h1', fontSize: '48px', fontWeight: '700', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Hero subtitle', fontSize: '20px', color: '#e0e7ff', align: 'left', margin: '0 0 24px 0' } },
    { id: 'button-1', type: 'button', props: { label: 'Get Started', href: '#', variant: 'primary', size: 'large', background: '#ffffff', color: '#4f46e5' } },
  ],

  // === ABOUT LAYOUTS ===
  'about-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'About Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#000000', align: 'center', margin: '0 0 24px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Description about your company', fontSize: '16px', color: '#64748b', align: 'center', lineHeight: '1.8' } },
  ],
  'about-02': [
    { id: 'heading-1', type: 'heading', props: { content: 'About Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Description about your company', fontSize: '16px', color: '#64748b', align: 'left', lineHeight: '1.8' } },
    { id: 'button-1', type: 'button', props: { label: 'Learn More', href: '#', variant: 'primary', size: 'medium', background: '#4f46e5', color: '#ffffff' } },
  ],
  'about-03': [
    { id: 'heading-1', type: 'heading', props: { content: 'About Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 24px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Description about your company', fontSize: '16px', color: '#64748b', align: 'center', lineHeight: '1.8' } },
  ],
  'about-04': [
    { id: 'heading-1', type: 'heading', props: { content: 'About Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 24px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Description about your company', fontSize: '16px', color: '#cbd5e1', align: 'center', lineHeight: '1.8' } },
  ],

  // === SERVICES LAYOUTS ===
  'services-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Our Services', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#000000', align: 'center', margin: '0 0 32px 0' } },
  ],
  'services-02': [
    { id: 'heading-1', type: 'heading', props: { content: 'Our Services', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'We provide the best services for your business', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 32px 0' } },
  ],
  'services-03': [
    { id: 'heading-1', type: 'heading', props: { content: 'Our Services', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 32px 0' } },
  ],
  'services-04': [
    { id: 'heading-1', type: 'heading', props: { content: 'Our Services', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'left', margin: '0 0 32px 0' } },
  ],

  // === GALLERY LAYOUTS ===
  'gallery-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Gallery', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ],
  'gallery-02': [
    { id: 'heading-1', type: 'heading', props: { content: 'Gallery', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ],
  'gallery-03': [
    { id: 'heading-1', type: 'heading', props: { content: 'Gallery', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 32px 0' } },
  ],
  'gallery-04': [
    { id: 'heading-1', type: 'heading', props: { content: 'Gallery', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ],

  // === CONTACT LAYOUTS ===
  'contact-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Contact Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#000000', align: 'center', margin: '0 0 32px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Email: hello@company.com', fontSize: '16px', color: '#64748b', align: 'center' } },
    { id: 'text-2', type: 'text', props: { content: 'Phone: +62 123 456 789', fontSize: '16px', color: '#64748b', align: 'center' } },
  ],
  'contact-02': [
    { id: 'heading-1', type: 'heading', props: { content: 'Contact Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Get in touch with us', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 32px 0' } },
  ],
  'contact-03': [
    { id: 'heading-1', type: 'heading', props: { content: 'Contact Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#ffffff', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Get in touch with us', fontSize: '16px', color: '#cbd5e1', align: 'center', margin: '0 0 32px 0' } },
  ],

  // === FOOTER LAYOUTS ===
  'footer-01': [
    { id: 'text-1', type: 'text', props: { content: '© 2024. All rights reserved.', fontSize: '14px', color: '#cbd5e1', align: 'center' } },
    { id: 'social-1', type: 'social', props: { platforms: ['facebook', 'twitter', 'linkedin'], size: 'medium' } },
  ],
  'footer-02': [
    { id: 'heading-1', type: 'heading', props: { content: 'Company Name', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: '© 2024. All rights reserved.', fontSize: '14px', color: '#cbd5e1', align: 'left' } },
  ],
  'footer-03': [
    { id: 'text-1', type: 'text', props: { content: '© 2024. All rights reserved.', fontSize: '14px', color: '#cbd5e1', align: 'center' } },
    { id: 'social-1', type: 'social', props: { platforms: ['facebook', 'twitter', 'linkedin'], size: 'medium' } },
  ],
  'footer-04': [
    { id: 'heading-1', type: 'heading', props: { content: 'Company Name', level: 'h3', fontSize: '18px', fontWeight: '700', color: '#ffffff', align: 'left', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: '© 2024. All rights reserved.', fontSize: '14px', color: '#cbd5e1', align: 'left' } },
  ],

  // === SINGLE LAYOUTS ===
  'statistics-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Our Statistics', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ],
  'fleet-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Our Fleet', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ],
  'coverage-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Coverage Area', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ],
  'clients-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Our Clients', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ],
  'programs-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Our Programs', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ],
  'teachers-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Our Faculty', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ],
  'facilities-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Campus Facilities', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ],
  'achievements-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Achievements', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ],
  'registration-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Admissions', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 16px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'Apply now for the upcoming academic year', fontSize: '16px', color: '#64748b', align: 'center', margin: '0 0 32px 0' } },
  ],
  'products-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Our Products', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ],
  'certifications-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Certifications', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ],
  'vision-01': [
    { id: 'badge-1', type: 'badge', props: { content: 'Our Vision', variant: 'primary', size: 'medium' } },
    { id: 'heading-1', type: 'heading', props: { content: 'Our Vision', level: 'h2', fontSize: '36px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 24px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'To be the leading company in our industry, delivering innovative solutions that transform the way people live and work.', fontSize: '18px', color: '#64748b', align: 'center', lineHeight: '1.8' } },
  ],
  'mission-01': [
    { id: 'badge-1', type: 'badge', props: { content: 'Our Mission', variant: 'secondary', size: 'medium' } },
    { id: 'heading-1', type: 'heading', props: { content: 'Our Mission', level: 'h2', fontSize: '36px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 24px 0' } },
    { id: 'text-1', type: 'text', props: { content: 'To provide exceptional value to our customers through quality products, dedicated service, and continuous innovation.', fontSize: '18px', color: '#64748b', align: 'center', lineHeight: '1.8' } },
  ],
  'timeline-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Our Journey', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ],
  'team-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Our Team', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ],
  'faq-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Frequently Asked Questions', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ],
  'pricing-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Pricing Plans', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ],
  'map-01': [
    { id: 'heading-1', type: 'heading', props: { content: 'Find Us', level: 'h2', fontSize: '32px', fontWeight: '700', color: '#0f172a', align: 'center', margin: '0 0 32px 0' } },
  ],
};

export const getLayoutDefaults = (layoutId) => {
  return LAYOUT_DEFAULTS[layoutId] || [];
};