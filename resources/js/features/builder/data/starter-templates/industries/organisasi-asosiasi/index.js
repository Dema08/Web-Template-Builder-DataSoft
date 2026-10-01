/**
 * Organisasi & Asosiasi Starter Templates — Category Index
 *
 * Aggregates only the 3 exclusive premium Organisasi & Asosiasi starter template definitions:
 * 1. Forum Profesi Nusantara (Professional Association & National Forum)
 * 2. Gerakan Berdaya Indonesia (NGO, Social Movement & Philanthropy)
 * 3. Komunitas Inovasi Digital (Tech, Developer & Innovation Community)
 */
import orgProfessionalForum from './orgProfessionalForum.js';
import orgSocialMovement from './orgSocialMovement.js';
import orgDigitalCommunity from './orgDigitalCommunity.js';

export const category = {
  categoryName: 'Organisasi & Asosiasi',
  templates: [
    orgProfessionalForum,
    orgSocialMovement,
    orgDigitalCommunity,
  ],
};

