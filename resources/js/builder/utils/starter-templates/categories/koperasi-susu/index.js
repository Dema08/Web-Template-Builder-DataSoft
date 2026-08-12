/**
 * Koperasi Susu Starter Templates — Category Index
 *
 * Aggregates all Koperasi Susu starter template definitions
 * into a single category object for the INDUSTRY_STARTER_TEMPLATES registry.
 */
import dairyCoop from './dairyCoop.js';
import dairyPremium from './dairyPremium.js';
import dairyFarmerNetwork from './dairyFarmerNetwork.js';

export const category = {
  categoryName: 'Koperasi Susu',
  templates: [
    dairyCoop,
    dairyPremium,
    dairyFarmerNetwork,
  ],
};
