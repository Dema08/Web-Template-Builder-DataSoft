/**
 * Logistik & Transportasi Starter Templates — Category Index
 *
 * Aggregates all Logistik & Transportasi starter template definitions
 * into a single category object for the INDUSTRY_STARTER_TEMPLATES registry.
 */
import logisticsCorporate from './logisticsCorporate.js';
import logisticsPremium from './logisticsPremium.js';
import logisticsTracking from './logisticsTracking.js';

export const category = {
  categoryName: 'Logistik & Transportasi',
  templates: [
    logisticsCorporate,
    logisticsPremium,
    logisticsTracking,
  ],
};
