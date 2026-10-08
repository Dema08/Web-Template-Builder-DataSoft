/**
 * Koperasi Starter Templates — Category Index
 *
 * Aggregates all Koperasi starter template definitions
 * into a single category object for the INDUSTRY_STARTER_TEMPLATES registry.
 */
import koperasiClassic from './koperasiClassic.js';
import koperasiModern from './koperasiModern.js';
import koperasiPremium from './koperasiPremium.js';
import puskopoldaKoperasi from './puskopoldaKoperasi.js';

export const category = {
  categoryName: 'Koperasi',
  templates: [
    puskopoldaKoperasi,
    koperasiClassic,
    koperasiModern,
    koperasiPremium,
  ],
};
