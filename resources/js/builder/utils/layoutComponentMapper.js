// Layout Component Mapper
// Maps layout component names to actual React components

import Hero01 from '@builder/sections/hero/layouts/Hero01';
import Hero02 from '@builder/sections/hero/layouts/Hero02';
import Hero03 from '@builder/sections/hero/layouts/Hero03';
import Hero04 from '@builder/sections/hero/layouts/Hero04';

import Navbar01 from '@builder/sections/navbar/layouts/Navbar01';

import About01 from '@builder/sections/about/layouts/About01';

import Services01 from '@builder/sections/services/layouts/Services01';

import Contact01 from '@builder/sections/contact/layouts/Contact01';

import Footer01 from '@builder/sections/footer/layouts/Footer01';

export const LAYOUT_COMPONENTS = {
  // Hero layouts
  'Hero01': Hero01,
  'Hero02': Hero02,
  'Hero03': Hero03,
  'Hero04': Hero04,

  // Navbar layouts
  'Navbar01': Navbar01,

  // About layouts
  'About01': About01,

  // Services layouts
  'Services01': Services01,

  // Contact layouts
  'Contact01': Contact01,

  // Footer layouts
  'Footer01': Footer01,
};

export const getLayoutComponent = (componentName) => {
  return LAYOUT_COMPONENTS[componentName] || null;
};
