import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopNewsPuskopolda
 * News, Events, and Announcement Grid with Category Tabs for PUSKOPOLDA.
 * Pure Blue & White Theme (#1e40af, #2563eb, #3b82f6, #dbeafe, #ffffff, #f8fafc).
 */
export default function KopNewsPuskopolda({ components = [], sectionId = null }) {
  const [activeTab, setActiveTab] = useState('Semua');

  const defaultComponents = [
    { id: 'kop-news-badge', type: 'badge', props: { text: 'BERITA & KEGIATAN', variant: 'solid', background: '#dbeafe', color: '#1e40af' } },
    { id: 'kop-news-title', type: 'heading', props: { content: 'Warta Resmi & Agenda Puskopolda', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a' } },

    {
      id: 'news1-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '16px', padding: '16px', shadow: 'sm' },
      childrenComponents: [
        { id: 'n1-badge', type: 'badge', props: { text: 'Kegiatan • 12 Okt 2026', variant: 'solid', background: '#dbeafe', color: '#1e40af', fontSize: '11px', fontWeight: '700' } },
        { id: 'n1-title', type: 'heading', props: { content: 'RAT Puskopolda Tahun 2026', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a' } },
        { id: 'n1-desc', type: 'paragraph', props: { content: 'Rapat Anggota Tahunan sebagai forum evaluasi dan penyusunan rencana kerja koperasi.', fontSize: '13px', color: '#475569' } }
      ]
    },
    {
      id: 'news2-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '16px', padding: '16px', shadow: 'sm' },
      childrenComponents: [
        { id: 'n2-badge', type: 'badge', props: { text: 'Kegiatan • 05 Sep 2026', variant: 'solid', background: '#dbeafe', color: '#1e40af', fontSize: '11px', fontWeight: '700' } },
        { id: 'n2-title', type: 'heading', props: { content: 'Pelatihan Manajemen Koperasi', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a' } },
        { id: 'n2-desc', type: 'paragraph', props: { content: 'Pelatihan untuk pengurus dan anggota dalam meningkatkan kompetensi manajerial.', fontSize: '13px', color: '#475569' } }
      ]
    },
    {
      id: 'news3-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '16px', padding: '16px', shadow: 'sm' },
      childrenComponents: [
        { id: 'n3-badge', type: 'badge', props: { text: 'Kunjungan • 20 Agu 2026', variant: 'solid', background: '#dbeafe', color: '#1e40af', fontSize: '11px', fontWeight: '700' } },
        { id: 'n3-title', type: 'heading', props: { content: 'Kunjungan ke Koperasi Mitra', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a' } },
        { id: 'n3-desc', type: 'paragraph', props: { content: 'Studi banding ke koperasi mitra untuk berbagi best practice pengelolaan simpan pinjam.', fontSize: '13px', color: '#475569' } }
      ]
    },
    {
      id: 'news4-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '16px', padding: '16px', shadow: 'sm' },
      childrenComponents: [
        { id: 'n4-badge', type: 'badge', props: { text: 'Program • 15 Jul 2026', variant: 'solid', background: '#dbeafe', color: '#1e40af', fontSize: '11px', fontWeight: '700' } },
        { id: 'n4-title', type: 'heading', props: { content: 'Program Bantuan Sosial', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a' } },
        { id: 'n4-desc', type: 'paragraph', props: { content: 'Penyaluran bantuan sosial dan santunan pendidikan untuk keluarga anggota.', fontSize: '13px', color: '#475569' } }
      ]
    },
    {
      id: 'news5-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '16px', padding: '16px', shadow: 'sm' },
      childrenComponents: [
        { id: 'n5-badge', type: 'badge', props: { text: 'Kerja Sama • 10 Jun 2026', variant: 'solid', background: '#dbeafe', color: '#1e40af', fontSize: '11px', fontWeight: '700' } },
        { id: 'n5-title', type: 'heading', props: { content: 'Kerja Sama dengan Bank', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a' } },
        { id: 'n5-desc', type: 'paragraph', props: { content: 'Penandatanganan MoU untuk kemudahan akses permodalan dan virtual account.', fontSize: '13px', color: '#475569' } }
      ]
    },
    {
      id: 'news6-card',
      type: 'card',
      props: { background: '#ffffff', borderColor: '#e2e8f0', borderWidth: '1px', borderRadius: '16px', padding: '16px', shadow: 'sm' },
      childrenComponents: [
        { id: 'n6-badge', type: 'badge', props: { text: 'Pengumuman • 01 Jun 2026', variant: 'solid', background: '#dbeafe', color: '#1e40af', fontSize: '11px', fontWeight: '700' } },
        { id: 'n6-title', type: 'heading', props: { content: 'Pengumuman Libur Koperasi', level: 'h3', fontSize: '18px', fontWeight: '800', color: '#0f172a' } },
        { id: 'n6-desc', type: 'paragraph', props: { content: 'Informasi penyesuaian jadwal libur pelayanan kantor dan simpan pinjam.', fontSize: '13px', color: '#475569' } }
      ]
    }
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'kop-news-badge');
  const titleC = lc.filter(c => c.id === 'kop-news-title');
  const n1 = lc.filter(c => c.id === 'news1-card');
  const n2 = lc.filter(c => c.id === 'news2-card');
  const n3 = lc.filter(c => c.id === 'news3-card');
  const n4 = lc.filter(c => c.id === 'news4-card');
  const n5 = lc.filter(c => c.id === 'news5-card');
  const n6 = lc.filter(c => c.id === 'news6-card');

  const tabs = ['Semua', 'Berita', 'Kegiatan', 'Pengumuman', 'RAT', 'Program', 'Kunjungan', 'Kerja Sama'];

  return (
    <section id="berita" className="py-20 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <p className="text-slate-600 text-sm sm:text-base">
            Ikuti berbagai update kegiatan, program binaan, dan laporan pertanggungjawaban koperasi.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#2563eb] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 6 News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>{renderLayoutComponents(n1, sectionId)}</div>
          <div>{renderLayoutComponents(n2, sectionId)}</div>
          <div>{renderLayoutComponents(n3, sectionId)}</div>
          <div>{renderLayoutComponents(n4, sectionId)}</div>
          <div>{renderLayoutComponents(n5, sectionId)}</div>
          <div>{renderLayoutComponents(n6, sectionId)}</div>
        </div>
      </div>
    </section>
  );
}
