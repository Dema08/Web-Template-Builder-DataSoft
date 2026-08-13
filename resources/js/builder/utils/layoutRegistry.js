// Layout Registry
// Maps section types to their available layout variants

export const LAYOUT_REGISTRY = {
  navbar: [
    { id: 'navbar-01', name: 'Navbar 01', component: 'Navbar01', thumbnail: null },
    { id: 'navbar-02', name: 'Navbar 02', component: 'Navbar02', thumbnail: null },
    { id: 'navbar-03', name: 'Navbar 03', component: 'Navbar03', thumbnail: null },
    { id: 'navbar-04', name: 'Navbar 04', component: 'Navbar04', thumbnail: null },
    { id: 'navbar-05', name: 'Navbar 05', component: 'Navbar05', thumbnail: null },
    { id: 'navbar-06', name: 'Navbar 06', component: 'Navbar06', thumbnail: null },
  ],
  hero: [
    { id: 'hero-01', name: 'Hero 01', component: 'Hero01', thumbnail: null },
    { id: 'hero-02', name: 'Hero 02', component: 'Hero02', thumbnail: null },
    { id: 'hero-03', name: 'Hero 03', component: 'Hero03', thumbnail: null },
    { id: 'hero-04', name: 'Hero 04', component: 'Hero04', thumbnail: null },
    { id: 'hero-05', name: 'Hero 05', component: 'Hero05', thumbnail: null },
    { id: 'hero-06', name: 'Hero 06', component: 'Hero06', thumbnail: null },
    { id: 'hero-07', name: 'Hero 07', component: 'Hero07', thumbnail: null },
    { id: 'hero-08', name: 'Hero 08', component: 'Hero08', thumbnail: null },
    { id: 'hero-09', name: 'Hero 09', component: 'Hero09', thumbnail: null },
  ],
  about: [
    { id: 'about-01', name: 'About 01', component: 'About01', thumbnail: null },
    { id: 'about-02', name: 'About 02', component: 'About02', thumbnail: null },
    { id: 'about-03', name: 'About 03', component: 'About03', thumbnail: null },
    { id: 'about-04', name: 'About 04', component: 'About04', thumbnail: null },
  ],
  services: [
    { id: 'services-01', name: 'Services 01', component: 'Services01', thumbnail: null },
    { id: 'services-02', name: 'Services 02', component: 'Services02', thumbnail: null },
    { id: 'services-03', name: 'Services 03', component: 'Services03', thumbnail: null },
    { id: 'services-04', name: 'Services 04', component: 'Services04', thumbnail: null },
  ],
  gallery: [
    { id: 'gallery-01', name: 'Gallery 01', component: 'Gallery01', thumbnail: null },
    { id: 'gallery-02', name: 'Gallery 02', component: 'Gallery02', thumbnail: null },
    { id: 'gallery-03', name: 'Gallery 03', component: 'Gallery03', thumbnail: null },
    { id: 'gallery-04', name: 'Gallery 04', component: 'Gallery04', thumbnail: null },
  ],
  contact: [
    { id: 'contact-01', name: 'Contact 01', component: 'Contact01', thumbnail: null },
    { id: 'contact-02', name: 'Contact 02', component: 'Contact02', thumbnail: null },
    { id: 'contact-03', name: 'Contact 03', component: 'Contact03', thumbnail: null },
  ],
  footer: [
    { id: 'footer-01', name: 'Footer 01', component: 'Footer01', thumbnail: null },
    { id: 'footer-02', name: 'Footer 02', component: 'Footer02', thumbnail: null },
    { id: 'footer-03', name: 'Footer 03', component: 'Footer03', thumbnail: null },
    { id: 'footer-04', name: 'Footer 04', component: 'Footer04', thumbnail: null },
  ],
  statistics: [
    { id: 'statistics-01', name: 'Statistics 01', component: 'Statistics01', thumbnail: null },
  ],
  fleet: [
    { id: 'fleet-01', name: 'Fleet 01', component: 'Fleet01', thumbnail: null },
    { id: 'fleet-02', name: 'Fleet 02', component: 'Fleet02', thumbnail: null },
  ],
  coverage: [
    { id: 'coverage-01', name: 'Coverage 01', component: 'Coverage01', thumbnail: null },
    { id: 'coverage-02', name: 'Coverage 02', component: 'Coverage02', thumbnail: null },
  ],
  testimonials: [
    { id: 'testimonials-01', name: 'Testimonials 01', component: 'Testimonials01', thumbnail: null },
  ],
  clients: [
    { id: 'clients-01', name: 'Clients 01', component: 'Clients01', thumbnail: null },
  ],
  programs: [
    { id: 'programs-01', name: 'Programs 01', component: 'Programs01', thumbnail: null },
  ],
  teachers: [
    { id: 'teachers-01', name: 'Teachers 01', component: 'Teachers01', thumbnail: null },
  ],
  facilities: [
    { id: 'facilities-01', name: 'Facilities 01', component: 'Facilities01', thumbnail: null },
  ],
  achievements: [
    { id: 'achievements-01', name: 'Achievements 01', component: 'Achievements01', thumbnail: null },
  ],
  registration: [
    { id: 'registration-01', name: 'Registration 01', component: 'Registration01', thumbnail: null },
  ],
  products: [
    { id: 'products-01', name: 'Products 01', component: 'Products01', thumbnail: null },
  ],
  certifications: [
    { id: 'certifications-01', name: 'Certifications 01', component: 'Certifications01', thumbnail: null },
  ],
  vision: [
    { id: 'vision-01', name: 'Vision 01', component: 'Vision01', thumbnail: null },
  ],
  mission: [
    { id: 'mission-01', name: 'Mission 01', component: 'Mission01', thumbnail: null },
  ],
  timeline: [
    { id: 'timeline-01', name: 'Timeline 01', component: 'Timeline01', thumbnail: null },
    { id: 'timeline-02', name: 'Timeline 02', component: 'Timeline02', thumbnail: null },
  ],
  team: [
    { id: 'team-01', name: 'Team 01', component: 'Team01', thumbnail: null },
  ],
  faq: [
    { id: 'faq-01', name: 'FAQ 01', component: 'Faq01', thumbnail: null },
  ],
  pricing: [
    { id: 'pricing-01', name: 'Pricing 01', component: 'Pricing01', thumbnail: null },
  ],
  map: [
    { id: 'map-01', name: 'Map 01', component: 'Map01', thumbnail: null },
  ],
};

export const getLayoutsForSection = (sectionType) => {
  return LAYOUT_REGISTRY[sectionType] || [];
};

export const getDefaultLayout = (sectionType) => {
  const layouts = LAYOUT_REGISTRY[sectionType];
  return layouts && layouts.length > 0 ? layouts[0].id : null;
};

export const getLayoutComponent = (sectionType, layoutId) => {
  const layouts = LAYOUT_REGISTRY[sectionType];
  if (!layouts) return null;

  const layout = layouts.find(l => l.id === layoutId);
  return layout ? layout.component : null;
};