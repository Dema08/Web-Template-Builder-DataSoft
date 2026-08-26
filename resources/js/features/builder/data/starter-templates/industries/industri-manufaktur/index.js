/**
 * Industri & Manufaktur Starter Templates — Category Index
 *
 * Aggregates all Industri & Manufaktur starter template definitions
 * into a single category object for the INDUSTRY_STARTER_TEMPLATES registry.
 */
import manufacturingFactory from './manufacturingFactory.js';
import manufacturingPremium from './manufacturingPremium.js';
import manufacturingModern from './manufacturingModern.js';

export const category = {
  categoryName: 'Industri & Manufaktur',
  templates: [
    manufacturingFactory,
    manufacturingPremium,
    manufacturingModern,
  ],
};
