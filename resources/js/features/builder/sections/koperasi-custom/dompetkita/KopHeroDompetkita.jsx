import { useEffect } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopHeroDompetkita
 * Hero Section for KOPERASI DOMPETKITA BERSAMA.
 * Fully responsive across Mobile, Tablet, and Desktop.
 */
export default function KopHeroDompetkita({ components = [], sectionId = null }) {
  useEffect(() => {
    if (!document.getElementById('dk-fonts')) {
      const lnk = document.createElement('link');
      lnk.id = 'dk-fonts';
      lnk.rel = 'stylesheet';
      lnk.href = 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&family=Source+Sans+3:wght@400;600&display=swap';
      document.head.appendChild(lnk);
    }
  }, []);

  const defaultComponents = [
    { id: 'dompet-hero-eyebrow', type: 'badge', props: { text: 'Koperasi untuk tumbuh bersama', variant: 'outline', background: 'rgba(244,181,68,0.15)', color: '#D7F1F3', borderColor: 'rgba(244,181,68,0.4)' } },
    { id: 'dompet-hero-title', type: 'heading', props: { content: 'Koperasi DOMPETKITA BERSAMA.', level: 'h1', fontSize: 'clamp(28px,4.5vw,60px)', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.035em' } },
    { id: 'dompet-hero-desc', type: 'paragraph', props: { content: 'KOPERASI DOMPETKITA BERSAMA adalah koperasi umum yang menghimpun anggota dari kalangan karyawan perusahaan yang telah memiliki akun Dompetkita.id. Koperasi mengembangkan usaha dan layanan berdasarkan kebutuhan anggota, dengan tata kelola yang transparan, bertanggung jawab, dan berorientasi pada kesejahteraan bersama.', fontSize: '16px', color: '#E5F5F7' } },
    { id: 'dompet-hero-btn1', type: 'button', props: { label: 'Pelajari keanggotaan ↗', href: '#anggota', variant: 'primary', size: 'large', radius: 'full', background: '#ffffff', color: '#123B52', fontWeight: '700' } },
    { id: 'dompet-hero-btn2', type: 'button', props: { label: 'Jelajahi unit usaha →', href: '#usaha', variant: 'outline', size: 'large', radius: 'full', background: 'transparent', color: '#ffffff', borderColor: 'rgba(255,255,255,0.55)', fontWeight: '600' } },
    // Stat cards
    {
      id: 'dompet-stat1-card', type: 'card',
      props: { background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.18)', borderWidth: '1px', borderRadius: '13px', padding: '14px 12px sm:19px 17px' },
      childrenComponents: [
        { id: 'dompet-stat1-val', type: 'heading', props: { content: '1 orang = 1 suara', level: 'h3', fontSize: 'clamp(16px,2vw,22px)', fontWeight: '800', color: '#ffffff', lineHeight: '1.2' } },
        { id: 'dompet-stat1-lbl', type: 'paragraph', props: { content: 'di Rapat Anggota', fontSize: '13px', color: '#D7F1F3', fontWeight: '500' } },
      ]
    },
    {
      id: 'dompet-stat2-card', type: 'card',
      props: { background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.18)', borderWidth: '1px', borderRadius: '13px', padding: '14px 12px sm:19px 17px' },
      childrenComponents: [
        { id: 'dompet-stat2-val', type: 'heading', props: { content: '5 tahun', level: 'h3', fontSize: 'clamp(16px,2vw,22px)', fontWeight: '800', color: '#ffffff', lineHeight: '1.2' } },
        { id: 'dompet-stat2-lbl', type: 'paragraph', props: { content: 'masa jabatan pengurus', fontSize: '13px', color: '#D7F1F3', fontWeight: '500' } },
      ]
    },
    {
      id: 'dompet-stat3-card', type: 'card',
      props: { background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.18)', borderWidth: '1px', borderRadius: '13px', padding: '14px 12px sm:19px 17px' },
      childrenComponents: [
        { id: 'dompet-stat3-val', type: 'heading', props: { content: 'Min. 1×/tahun', level: 'h3', fontSize: 'clamp(16px,2vw,22px)', fontWeight: '800', color: '#ffffff', lineHeight: '1.2' } },
        { id: 'dompet-stat3-lbl', type: 'paragraph', props: { content: 'Rapat Anggota Tahunan', fontSize: '13px', color: '#D7F1F3', fontWeight: '500' } },
      ]
    },
    {
      id: 'dompet-stat4-card', type: 'card',
      props: { background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.18)', borderWidth: '1px', borderRadius: '13px', padding: '14px 12px sm:19px 17px' },
      childrenComponents: [
        { id: 'dompet-stat4-val', type: 'heading', props: { content: '5 bagian', level: 'h3', fontSize: 'clamp(16px,2vw,22px)', fontWeight: '800', color: '#ffffff', lineHeight: '1.2' } },
        { id: 'dompet-stat4-lbl', type: 'paragraph', props: { content: 'pembagian SHU', fontSize: '13px', color: '#D7F1F3', fontWeight: '500' } },
      ]
    },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const eyebrowC = lc.filter(c => c.id === 'dompet-hero-eyebrow' || c.type === 'badge');
  const titleC = lc.filter(c => c.id === 'dompet-hero-title' || (c.type === 'heading' && c.props?.level === 'h1'));
  const descC = lc.filter(c => c.id === 'dompet-hero-desc');
  const btn1C = lc.filter(c => c.id === 'dompet-hero-btn1');
  const btn2C = lc.filter(c => c.id === 'dompet-hero-btn2');
  const stat1 = lc.filter(c => c.id === 'dompet-stat1-card');
  const stat2 = lc.filter(c => c.id === 'dompet-stat2-card');
  const stat3 = lc.filter(c => c.id === 'dompet-stat3-card');
  const stat4 = lc.filter(c => c.id === 'dompet-stat4-card');

  return (
    <header
      id="beranda"
      className="relative overflow-hidden text-white font-['Source_Sans_3',system-ui,sans-serif]"
      style={{ background: 'radial-gradient(circle at 83% 37%, #20788b 0%, transparent 34%), linear-gradient(130deg, #0c2b40 3%, #123b52 54%, #0c5362 100%)' }}
    >
      {/* Diagonal stripe accent */}
      <div
        className="absolute right-[-60px] top-0 bottom-0 pointer-events-none z-0 hidden sm:block"
        style={{ width: '26%', background: 'repeating-linear-gradient(115deg,rgba(255,255,255,0.07) 0 22px,transparent 22px 44px)', borderLeft: '3px solid #F4B544', transform: 'skewX(-8deg)', opacity: 0.3 }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-10 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left: Copy */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="inline-flex">
              {renderLayoutComponents(eyebrowC, sectionId)}
            </div>
            <div className="leading-tight font-['Bricolage_Grotesque',system-ui,sans-serif]" style={{ textWrap: 'balance' }}>
              {renderLayoutComponents(titleC, sectionId)}
            </div>
            <div className="leading-relaxed max-w-xl text-sm sm:text-base" style={{ color: '#E5F5F7' }}>
              {renderLayoutComponents(descC, sectionId)}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-1 w-full sm:w-auto">
              {renderLayoutComponents(btn1C, sectionId)}
              {renderLayoutComponents(btn2C, sectionId)}
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <div style={{ filter: 'drop-shadow(0 18px 35px rgba(6,30,42,0.25))' }} className="w-full max-w-[280px] sm:max-w-sm lg:max-w-none">
              <svg viewBox="0 0 480 400" role="img" aria-label="Ilustrasi karyawan terhubung dengan Dompetkita" className="w-full h-auto">
                <circle cx="240" cy="190" r="172" fill="#FFFFFF" fillOpacity=".06" />
                <circle cx="240" cy="190" r="196" fill="none" stroke="#F4B544" strokeOpacity=".5" strokeWidth="2" strokeDasharray="3 9" strokeLinecap="round" />
                <ellipse cx="240" cy="382" rx="200" ry="8" fill="#FFFFFF" fillOpacity=".08" />
                {/* Phone */}
                <rect x="180" y="24" width="120" height="232" rx="24" fill="#0E2C3E" stroke="#FFFFFF" strokeOpacity=".3" strokeWidth="2" />
                <rect x="190" y="46" width="100" height="198" rx="14" fill="#FFFFFF" />
                <rect x="225" y="32" width="30" height="5" rx="2.5" fill="#FFFFFF" fillOpacity=".3" />
                {/* Logo on phone */}
                <circle cx="240" cy="67" r="13" fill="#123B52" />
                <circle cx="240" cy="67" r="12" fill="none" stroke="#F4B544" strokeWidth="1.5" strokeDasharray="2 1.5" />
                <circle cx="240" cy="67" r="9" fill="#147D92" />
                <path d="M240 74c-3-2-3.5-5.5 0-8 3.5 2.5 3 6 0 8z" fill="#fff" />
                <path d="M239 74c-4 0-6.5-3-6-6.5 3 .5 5 3 6 6.5z" fill="#E5F5F7" />
                <path d="M241 74c4 0 6.5-3 6-6.5-3 .5-5 3-6 6.5z" fill="#E5F5F7" />
                <path d="M240 59l.9 2.1 2.3.2-1.7 1.5.5 2.2L240 64l-2 1.3.5-2.2-1.7-1.5 2.3-.2z" fill="#F4B544" />
                {/* App UI */}
                <rect x="205" y="92" width="70" height="42" rx="10" fill="#147D92" />
                <rect x="248" y="106" width="26" height="14" rx="7" fill="#F4B544" />
                <circle cx="260" cy="113" r="3" fill="#123B52" />
                <rect x="205" y="148" width="70" height="7" rx="3.5" fill="#DCE7EC" />
                <rect x="205" y="163" width="46" height="7" rx="3.5" fill="#DCE7EC" />
                <rect x="205" y="196" width="70" height="20" rx="10" fill="#F4B544" />
                {/* Connecting dashed lines */}
                <path d="M150 276C150 200 178 170 194 150" fill="none" stroke="#F4B544" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 9" opacity=".9" />
                <path d="M330 276C330 200 302 170 286 150" fill="none" stroke="#F4B544" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 9" opacity=".9" />
                {/* Coins */}
                <g transform="translate(345 92)"><circle r="22" fill="#F4B544" /><circle r="14" fill="none" stroke="#123B52" strokeOpacity=".3" strokeWidth="2" /></g>
                <g transform="translate(130 120)"><circle r="16" fill="#F4B544" /><circle r="10" fill="none" stroke="#123B52" strokeOpacity=".3" strokeWidth="2" /></g>
                <g transform="translate(372 196)"><circle r="12" fill="#F4B544" /><circle r="7" fill="none" stroke="#123B52" strokeOpacity=".3" strokeWidth="2" /></g>
                {/* Person left */}
                <path d="M120 380v-28a30 30 0 0 1 60 0v28z" fill="#36B6C4" />
                <circle cx="150" cy="300" r="20" fill="#F1C7A0" />
                <path d="M130 298a20 20 0 0 1 40 0c-8-8-32-8-40 0z" fill="#2A2A33" />
                {/* Person center */}
                <path d="M208 380v-38a32 32 0 0 1 64 0v38z" fill="#F4B544" />
                <circle cx="240" cy="288" r="22" fill="#C98F62" />
                <path d="M218 286a22 22 0 0 1 44 0c-10-9-34-9-44 0z" fill="#2A2A33" />
                <path d="M232 322l8 10 8-10" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                {/* Person right */}
                <path d="M300 380v-28a30 30 0 0 1 60 0v28z" fill="#2F8878" />
                <circle cx="330" cy="300" r="20" fill="#8D5A3B" />
                <path d="M310 298a20 20 0 0 1 40 0c-8-8-32-8-40 0z" fill="#2A2A33" />
              </svg>
              <p className="text-center mt-2 text-[11px] sm:text-xs font-semibold text-[#D7F1F3] tracking-wide">
                KOPERASI DOMPETKITA BERSAMA, Bertumbuh dan Sejahtera Bersama
              </p>
            </div>
          </div>
        </div>

        {/* 4-stat Strip */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/15">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            <div className="border-t-[3px] border-[#F4B544]">{renderLayoutComponents(stat1, sectionId)}</div>
            <div className="border-t-[3px] border-[#F4B544]">{renderLayoutComponents(stat2, sectionId)}</div>
            <div className="border-t-[3px] border-[#F4B544]">{renderLayoutComponents(stat3, sectionId)}</div>
            <div className="border-t-[3px] border-[#F4B544]">{renderLayoutComponents(stat4, sectionId)}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
