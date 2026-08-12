/**
 * UMKM Starter Templates — Category Index
 *
 * Aggregates all UMKM starter template definitions into a single
 * category object that conforms to the INDUSTRY_STARTER_TEMPLATES interface.
 */
import umkmModern from './umkmModern.js';
import umkmEcommerce from './umkmEcommerce.js';
import umkmPremium from './umkmPremium.js';
import umkmMinimalist from './umkmMinimalist.js';
import umkmCreative from './umkmCreative.js';

export const category = {
  categoryName: 'UMKM',
  templates: [
    umkmModern,
    umkmEcommerce,
    umkmPremium,
    umkmMinimalist,
    umkmCreative,
  ],
};
