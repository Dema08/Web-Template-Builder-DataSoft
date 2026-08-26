/**
 * Perdagangan / Retail Starter Templates — Category Index
 *
 * Aggregates all Perdagangan / Retail starter template definitions
 * into a single category object for the INDUSTRY_STARTER_TEMPLATES registry.
 */
import retailModern from './retailModern.js';
import retailPremium from './retailPremium.js';
import retailCommerce from './retailCommerce.js';

export const category = {
  categoryName: 'Perdagangan / Retail',
  templates: [
    retailModern,
    retailPremium,
    retailCommerce,
  ],
};
