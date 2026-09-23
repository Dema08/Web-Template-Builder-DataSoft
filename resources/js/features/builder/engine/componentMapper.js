// Component Mapper
// Maps component type names to actual React components

import Text from '@builder/ui/text/Text';
import Heading from '@builder/ui/heading/Heading';
import Button from '@builder/ui/button/Button';
import Image from '@builder/ui/image/Image';
import Badge from '@builder/ui/badge/Badge';
import Statistic from '@builder/ui/statistic/Statistic';
import Divider from '@builder/ui/divider/Divider';
import Social from '@builder/ui/social/Social';
import Icon from '@builder/ui/icon/Icon';
import Card from '@builder/ui/card/Card';
import Video from '@builder/ui/video/Video';
import Accordion from '@builder/ui/accordion/Accordion';
import Gallery from '@builder/ui/gallery/Gallery';
import MapComponent from '@builder/ui/map/Map';
import Form from '@builder/ui/form/Form';
import Counter from '@builder/ui/counter/Counter';
import Progress from '@builder/ui/progress/Progress';
import Testimonial from '@builder/ui/testimonial/Testimonial';
import FaqItem from '@builder/ui/faq-item/FaqItem';

export const UI_COMPONENTS = {
  text: Text,
  heading: Heading,
  button: Button,
  image: Image,
  badge: Badge,
  statistic: Statistic,
  divider: Divider,
  social: Social,
  icon: Icon,
  card: Card,
  video: Video,
  accordion: Accordion,
  gallery: Gallery,
  map: MapComponent,
  form: Form,
  counter: Counter,
  progress: Progress,
  testimonial: Testimonial,
  'faq-item': FaqItem,
};

export const getUIComponent = (componentType) => {
  return UI_COMPONENTS[componentType] || null;
};
