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

export const UI_COMPONENTS = {
  text: Text,
  heading: Heading,
  button: Button,
  image: Image,
  badge: Badge,
  statistic: Statistic,
  divider: Divider,
  social: Social,
};

export const getUIComponent = (componentType) => {
  return UI_COMPONENTS[componentType] || null;
};
