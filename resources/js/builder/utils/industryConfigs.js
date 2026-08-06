export const INDUSTRY_CONFIGS = {
  logistics: {
    id: 1,
    name: 'Logistics',
    slug: 'logistics',
    sections: [
      { id: 'navbar', type: 'navbar', label: 'Navbar', icon: 'Menu', defaultProps: { logo: '', menuItems: ['Home', 'Services', 'About', 'Contact'], ctaText: 'Get Quote', sticky: true, background: 'white' } },
      { id: 'hero', type: 'hero', label: 'Hero', icon: 'Image', defaultProps: { title: 'Global Logistics Solutions', subtitle: 'Delivering Excellence Worldwide', buttonText: 'Track Shipment', backgroundImage: '', layout: 'center' } },
      { id: 'statistics', type: 'statistics', label: 'Statistics', icon: 'BarChart', defaultProps: { stats: [{ label: 'Countries', value: '50+' }, { label: 'Clients', value: '500+' }, { label: 'Deliveries', value: '10K+' }] } },
      { id: 'fleet', type: 'fleet', label: 'Fleet', icon: 'Truck', defaultProps: { title: 'Our Fleet', description: 'Modern and reliable transportation', items: ['Trucks', 'Ships', 'Air Cargo'] } },
      { id: 'coverage', type: 'coverage', label: 'Coverage', icon: 'Map', defaultProps: { title: 'Coverage Area', regions: ['Asia', 'Europe', 'America'] } },
      { id: 'services', type: 'services', label: 'Services', icon: 'Layers', defaultProps: { title: 'Our Services', items: ['Freight', 'Warehousing', 'Supply Chain', 'Customs Clearance'] } },
      { id: 'gallery', type: 'gallery', label: 'Gallery', icon: 'Image', defaultProps: { title: 'Gallery', images: [] } },
      { id: 'clients', type: 'clients', label: 'Clients', icon: 'Users', defaultProps: { title: 'Our Clients', logos: [] } },
      { id: 'contact', type: 'contact', label: 'Contact', icon: 'Mail', defaultProps: { title: 'Get In Touch', email: 'info@logistics.com', phone: '+1234567890', address: '123 Logistics St' } },
      { id: 'footer', type: 'footer', label: 'Footer', icon: 'Layout', defaultProps: { copyright: '© 2024 Logistics Company', socialMedia: { facebook: '', twitter: '', linkedin: '' } } },
    ],
  },
  education: {
    id: 2,
    name: 'Education',
    slug: 'education',
    sections: [
      { id: 'navbar', type: 'navbar', label: 'Navbar', icon: 'Menu', defaultProps: { logo: '', menuItems: ['Home', 'Programs', 'About', 'Admissions'], ctaText: 'Apply Now', sticky: true, background: 'white' } },
      { id: 'hero', type: 'hero', label: 'Hero', icon: 'Image', defaultProps: { title: 'Excellence in Education', subtitle: 'Shaping Future Leaders', buttonText: 'Explore Programs', backgroundImage: '', layout: 'center' } },
      { id: 'programs', type: 'programs', label: 'Programs', icon: 'BookOpen', defaultProps: { title: 'Our Programs', items: ['Undergraduate', 'Graduate', 'Doctorate'] } },
      { id: 'teachers', type: 'teachers', label: 'Teachers', icon: 'Users', defaultProps: { title: 'Our Faculty', members: [] } },
      { id: 'facilities', type: 'facilities', label: 'Facilities', icon: 'Building', defaultProps: { title: 'Campus Facilities', items: ['Library', 'Laboratory', 'Sports Complex'] } },
      { id: 'achievements', type: 'achievements', label: 'Achievements', icon: 'Award', defaultProps: { title: 'Achievements', stats: [{ label: 'Awards', value: '100+' }, { label: 'Graduates', value: '5000+' }] } },
      { id: 'gallery', type: 'gallery', label: 'Gallery', icon: 'Image', defaultProps: { title: 'Campus Gallery', images: [] } },
      { id: 'registration', type: 'registration', label: 'Registration', icon: 'Clipboard', defaultProps: { title: 'Admissions', deadline: '2024-12-31' } },
      { id: 'footer', type: 'footer', label: 'Footer', icon: 'Layout', defaultProps: { copyright: '© 2024 Educational Institution', socialMedia: { facebook: '', twitter: '', linkedin: '' } } },
    ],
  },
  manufacturing: {
    id: 3,
    name: 'Manufacturing',
    slug: 'manufacturing',
    sections: [
      { id: 'navbar', type: 'navbar', label: 'Navbar', icon: 'Menu', defaultProps: { logo: '', menuItems: ['Home', 'Products', 'About', 'Contact'], ctaText: 'Request Quote', sticky: true, background: 'white' } },
      { id: 'hero', type: 'hero', label: 'Hero', icon: 'Image', defaultProps: { title: 'Industrial Manufacturing', subtitle: 'Quality & Precision', buttonText: 'Our Products', backgroundImage: '', layout: 'center' } },
      { id: 'products', type: 'products', label: 'Products', icon: 'Package', defaultProps: { title: 'Our Products', items: ['Product A', 'Product B', 'Product C'] } },
      { id: 'certifications', type: 'certifications', label: 'Certifications', icon: 'Shield', defaultProps: { title: 'Certifications', items: ['ISO 9001', 'ISO 14001', 'OHSAS 18001'] } },
      { id: 'about', type: 'about', label: 'About', icon: 'Info', defaultProps: { title: 'Company Overview', description: 'Leading manufacturer since 1990' } },
      { id: 'contact', type: 'contact', label: 'Contact', icon: 'Mail', defaultProps: { title: 'Request Quote', email: 'sales@manufacturing.com', phone: '+1234567890', address: '123 Industrial Park' } },
      { id: 'footer', type: 'footer', label: 'Footer', icon: 'Layout', defaultProps: { copyright: '© 2024 Manufacturing Company', socialMedia: { facebook: '', twitter: '', linkedin: '' } } },
    ],
  },
  default: {
    id: 0,
    name: 'Default',
    slug: 'default',
    sections: [
      { id: 'navbar', type: 'navbar', label: 'Navbar', icon: 'Menu', defaultProps: { logo: '', menuItems: ['Home', 'About', 'Services', 'Contact'], ctaText: 'Contact Us', sticky: true, background: 'white' } },
      { id: 'hero', type: 'hero', label: 'Hero', icon: 'Image', defaultProps: { title: 'Welcome', subtitle: 'Your Company', buttonText: 'Learn More', backgroundImage: '', layout: 'center' } },
      { id: 'about', type: 'about', label: 'About', icon: 'Info', defaultProps: { title: 'About Us', description: 'We are a leading company in our industry.' } },
      { id: 'services', type: 'services', label: 'Services', icon: 'Layers', defaultProps: { title: 'Our Services', items: ['Service 1', 'Service 2', 'Service 3'] } },
      { id: 'contact', type: 'contact', label: 'Contact', icon: 'Mail', defaultProps: { title: 'Contact', email: 'info@company.com', phone: '+1234567890', address: '123 Street' } },
      { id: 'footer', type: 'footer', label: 'Footer', icon: 'Layout', defaultProps: { copyright: '© 2024 Company', socialMedia: { facebook: '', twitter: '', linkedin: '' } } },
    ],
  },
};

export const getIndustryConfig = (slug) => {
  return INDUSTRY_CONFIGS[slug] || INDUSTRY_CONFIGS.default;
};

export const getSectionConfig = (industrySlug, sectionType) => {
  const config = getIndustryConfig(industrySlug);
  return config.sections.find(s => s.type === sectionType);
};
