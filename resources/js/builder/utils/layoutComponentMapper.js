// Layout Component Mapper
// Maps layout component names to actual React components

import Hero01 from '@builder/sections/hero/layouts/Hero01';
import Hero02 from '@builder/sections/hero/layouts/Hero02';
import Hero03 from '@builder/sections/hero/layouts/Hero03';
import Hero04 from '@builder/sections/hero/layouts/Hero04';
import Hero05 from '@builder/sections/hero/layouts/Hero05';
import Hero06 from '@builder/sections/hero/layouts/Hero06';
import Hero07 from '@builder/sections/hero/layouts/Hero07';
import Hero08 from '@builder/sections/hero/layouts/Hero08';
import Hero09 from '@builder/sections/hero/layouts/Hero09';

import Navbar01 from '@builder/sections/navbar/layouts/Navbar01';
import Navbar02 from '@builder/sections/navbar/layouts/Navbar02';
import Navbar03 from '@builder/sections/navbar/layouts/Navbar03';
import Navbar04 from '@builder/sections/navbar/layouts/Navbar04';
import Navbar05 from '@builder/sections/navbar/layouts/Navbar05';
import Navbar06 from '@builder/sections/navbar/layouts/Navbar06';

import About01 from '@builder/sections/about/layouts/About01';
import About02 from '@builder/sections/about/layouts/About02';
import About03 from '@builder/sections/about/layouts/About03';
import About04 from '@builder/sections/about/layouts/About04';

import Services01 from '@builder/sections/services/layouts/Services01';
import Services02 from '@builder/sections/services/layouts/Services02';
import Services03 from '@builder/sections/services/layouts/Services03';
import Services04 from '@builder/sections/services/layouts/Services04';

import Gallery01 from '@builder/sections/gallery/layouts/Gallery01';
import Gallery02 from '@builder/sections/gallery/layouts/Gallery02';
import Gallery03 from '@builder/sections/gallery/layouts/Gallery03';
import Gallery04 from '@builder/sections/gallery/layouts/Gallery04';

import Contact01 from '@builder/sections/contact/layouts/Contact01';
import Contact02 from '@builder/sections/contact/layouts/Contact02';
import Contact03 from '@builder/sections/contact/layouts/Contact03';

import Footer01 from '@builder/sections/footer/layouts/Footer01';
import Footer02 from '@builder/sections/footer/layouts/Footer02';
import Footer03 from '@builder/sections/footer/layouts/Footer03';
import Footer04 from '@builder/sections/footer/layouts/Footer04';

import Statistics01 from '@builder/sections/statistics/layouts/Statistics01';
import Fleet01 from '@builder/sections/fleet/layouts/Fleet01';
import Fleet02 from '@builder/sections/fleet/layouts/Fleet02';
import Coverage01 from '@builder/sections/coverage/layouts/Coverage01';
import Coverage02 from '@builder/sections/coverage/layouts/Coverage02';
import Testimonials01 from '@builder/sections/testimonials/layouts/Testimonials01';
import Clients01 from '@builder/sections/clients/layouts/Clients01';
import Programs01 from '@builder/sections/programs/layouts/Programs01';
import Teachers01 from '@builder/sections/teachers/layouts/Teachers01';
import Facilities01 from '@builder/sections/facilities/layouts/Facilities01';
import Achievements01 from '@builder/sections/achievements/layouts/Achievements01';
import Registration01 from '@builder/sections/registration/layouts/Registration01';
import Products01 from '@builder/sections/products/layouts/Products01';
import Certifications01 from '@builder/sections/certifications/layouts/Certifications01';
import Vision01 from '@builder/sections/vision/layouts/Vision01';
import Mission01 from '@builder/sections/mission/layouts/Mission01';
import Timeline01 from '@builder/sections/timeline/layouts/Timeline01';
import Timeline02 from '@builder/sections/timeline/layouts/Timeline02';
import Team01 from '@builder/sections/team/layouts/Team01';
import Faq01 from '@builder/sections/faq/layouts/Faq01';
import Pricing01 from '@builder/sections/pricing/layouts/Pricing01';
import Map01 from '@builder/sections/map/layouts/Map01';

export const LAYOUT_COMPONENTS = {
  // Hero layouts
  'Hero01': Hero01,
  'Hero02': Hero02,
  'Hero03': Hero03,
  'Hero04': Hero04,
  'Hero05': Hero05,
  'Hero06': Hero06,
  'Hero07': Hero07,
  'Hero08': Hero08,
  'Hero09': Hero09,

  // Navbar layouts
  'Navbar01': Navbar01,
  'Navbar02': Navbar02,
  'Navbar03': Navbar03,
  'Navbar04': Navbar04,
  'Navbar05': Navbar05,
  'Navbar06': Navbar06,

  // About layouts
  'About01': About01,
  'About02': About02,
  'About03': About03,
  'About04': About04,

  // Services layouts
  'Services01': Services01,
  'Services02': Services02,
  'Services03': Services03,
  'Services04': Services04,

  // Gallery layouts
  'Gallery01': Gallery01,
  'Gallery02': Gallery02,
  'Gallery03': Gallery03,
  'Gallery04': Gallery04,

  // Contact layouts
  'Contact01': Contact01,
  'Contact02': Contact02,
  'Contact03': Contact03,

  // Footer layouts
  'Footer01': Footer01,
  'Footer02': Footer02,
  'Footer03': Footer03,
  'Footer04': Footer04,

  // Other section layouts
  'Statistics01': Statistics01,
  'Fleet01': Fleet01,
  'Fleet02': Fleet02,
  'Coverage01': Coverage01,
  'Coverage02': Coverage02,
  'Testimonials01': Testimonials01,
  'Clients01': Clients01,
  'Programs01': Programs01,
  'Teachers01': Teachers01,
  'Facilities01': Facilities01,
  'Achievements01': Achievements01,
  'Registration01': Registration01,
  'Products01': Products01,
  'Certifications01': Certifications01,
  'Vision01': Vision01,
  'Mission01': Mission01,
  'Timeline01': Timeline01,
  'Timeline02': Timeline02,
  'Team01': Team01,
  'Faq01': Faq01,
  'Pricing01': Pricing01,
  'Map01': Map01,
};

export const getLayoutComponent = (componentName) => {
  return LAYOUT_COMPONENTS[componentName] || null;
};