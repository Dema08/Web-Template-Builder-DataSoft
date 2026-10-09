import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopGalleryPuskopolda
 * Visual Photo Gallery Grid with Filter Tabs for PUSKOPOLDA.
 * Pure Blue & White Theme (#1e40af, #2563eb, #3b82f6, #dbeafe, #ffffff, #f8fafc).
 */
export default function KopGalleryPuskopolda({ components = [], sectionId = null }) {
  const [activeTab, setActiveTab] = useState('Semua');

  const defaultComponents = [
    { id: 'kop-gal-badge', type: 'badge', props: { text: 'GALERI FOTO', variant: 'solid', background: '#dbeafe', color: '#1e40af' } },
    { id: 'kop-gal-title', type: 'heading', props: { content: 'Dokumentasi Visual Kegiatan & Kantor', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'kop-gal-badge');
  const titleC = lc.filter(c => c.id === 'kop-gal-title');

  const galleryItems = [
    { title: 'Sidang Pleno RAT 2026', category: 'Kegiatan', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80' },
    { title: 'Penyerahan Dividen SHU', category: 'Kegiatan', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80' },
    { title: 'Foto Bersama Pengurus RAT', category: 'Kegiatan', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80' },
    { title: 'Gedung Kantor Pusat', category: 'Kantor', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80' },
    { title: 'Front Office Simpan Pinjam', category: 'Kantor', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80' },
    { title: 'Ruang Rapat Pengurus', category: 'Kantor', img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&auto=format&fit=crop&q=80' },
    { title: 'Gerai Mini Market Sembako', category: 'Dokumentasi', img: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&auto=format&fit=crop&q=80' },
    { title: 'Gudang Logistik Sembako', category: 'Dokumentasi', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80' },
    { title: 'Loket Pembayaran & PPOB', category: 'Dokumentasi', img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80' },
  ];

  const filtered = activeTab === 'Semua' ? galleryItems : galleryItems.filter(i => i.category === activeTab);
  const tabs = ['Semua', 'Kegiatan', 'Dokumentasi', 'Kantor'];

  return (
    <section id="galeri" className="py-20 bg-[#f8fafc] text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
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
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 9 Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-3 shadow-xs hover:shadow-md transition overflow-hidden group">
              <div className="relative overflow-hidden rounded-xl h-52 bg-slate-100">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-3 left-3 bg-[#1e40af] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                  {item.category}
                </span>
              </div>
              <div className="p-3">
                <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
