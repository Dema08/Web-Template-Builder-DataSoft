/**
 * Koperasi Starter Templates — Category Index
 *
 * Aggregates all Koperasi starter template definitions
 * into a single category object for the INDUSTRY_STARTER_TEMPLATES registry.
 */
import koperasiClassic from './koperasiClassic.js';
import koperasiModern from './koperasiModern.js';
import koperasiPremium from './koperasiPremium.js';
<<<<<<< Updated upstream
import puskopoldaKoperasi from './puskopoldaKoperasi.js';
=======
import koperasiPuskopolda from './koperasiPuskopolda.js';
>>>>>>> Stashed changes

export const category = {
  categoryName: 'Koperasi',
  templates: [
    puskopoldaKoperasi,
    koperasiClassic,
    koperasiModern,
    koperasiPremium,
    koperasiPuskopolda,
  ],
};
