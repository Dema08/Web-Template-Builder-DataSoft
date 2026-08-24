/**
 * Group Perusahaan / Holding Company Starter Templates — Category Index
 *
 * Aggregates all Group Perusahaan / Holding Company starter template
 * definitions into a single category object for the registry.
 */
import holdingEnterprise from './holdingEnterprise.js';
import holdingInvestor from './holdingInvestor.js';
import holdingPremium from './holdingPremium.js';

export const category = {
  categoryName: 'Group Perusahaan / Holding Company',
  templates: [
    holdingEnterprise,
    holdingInvestor,
    holdingPremium,
  ],
};
