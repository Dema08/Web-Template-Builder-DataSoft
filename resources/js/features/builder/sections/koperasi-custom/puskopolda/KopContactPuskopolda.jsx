import { useState } from 'react';
import { renderLayoutComponents } from '../../../engine/layoutRenderer.jsx';

/**
 * KopContactPuskopolda
 * Contact Details, Messaging Form, Google Maps Embed, and Social Media for PUSKOPOLDA.
 * Pure Blue & White Theme (#1e40af, #2563eb, #3b82f6, #dbeafe, #ffffff, #f8fafc).
 */
export default function KopContactPuskopolda({ components = [], sectionId = null }) {
  const [submitted, setSubmitted] = useState(false);

  const defaultComponents = [
    { id: 'kop-cnt-badge', type: 'badge', props: { text: 'HUBUNGI KAMI', variant: 'solid', background: '#dbeafe', color: '#1e40af' } },
    { id: 'kop-cnt-title', type: 'heading', props: { content: 'Informasi Kontak & Sekretariat', level: 'h2', fontSize: '36px', fontWeight: '800', color: '#0f172a' } },
  ];

  const lc = components.length > 0 ? components : defaultComponents;
  const badgeC = lc.filter(c => c.id === 'kop-cnt-badge');
  const titleC = lc.filter(c => c.id === 'kop-cnt-title');

  const contactCards = [
    { icon: '📍', title: 'Alamat Kantor', desc: 'Jl. Contoh No. 123, Jakarta Selatan 12345' },
    { icon: '☎️', title: 'Telepon / WA', desc: 'Telp: (021) 1234-5678\nWA: 0812-3456-7890' },
    { icon: '✉️', title: 'Email Resmi', desc: 'info@puskopolda.co.id\nlayanan@puskopolda.co.id' },
    { icon: '🕐', title: 'Jam Pelayanan', desc: 'Senin – Jumat: 08.00 – 16.00 WIB\nSabtu – Minggu: Tutup' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontak" className="py-20 bg-[#f8fafc] text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex">{renderLayoutComponents(badgeC, sectionId)}</div>
          <div className="leading-tight">{renderLayoutComponents(titleC, sectionId)}</div>
          <p className="text-slate-600 text-sm sm:text-base">
            Kami siap melayani pertanyaan seputar keanggotaan, simpan pinjam, dan pengaduan layanan.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs text-center space-y-2">
              <span className="text-2xl">{card.icon}</span>
              <h4 className="text-base font-bold text-slate-900">{card.title}</h4>
              <p className="text-xs text-slate-600 whitespace-pre-line leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Form + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white border border-blue-200 rounded-2xl p-6 lg:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Kirim Pesan / Pengaduan</h3>
            <p className="text-xs text-slate-500 mb-6">Lengkapi data berikut untuk mengirim pesan langsung ke pengurus.</p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-center space-y-2">
                <span className="text-3xl">✅</span>
                <h4 className="text-base font-bold">Pesan Berhasil Terkirim</h4>
                <p className="text-xs text-slate-600">Terima kasih, sekretariat kami akan merespons pesan Anda dalam waktu 1x24 jam.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Nama Lengkap</label>
                    <input
                      type="text"
                      required
                      placeholder="Masukkan nama lengkap"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="nama@email.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Subjek</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Info Pendaftaran Anggota"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Isi Pesan</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tuliskan pertanyaan atau pesan Anda..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600 bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#2563eb] text-white font-bold text-sm hover:bg-[#1e40af] transition cursor-pointer shadow-sm"
                >
                  Kirim Pesan Sekarang ✉️
                </button>
              </form>
            )}
          </div>

          {/* Map & Social */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Lokasi Kantor</h3>
              <div className="w-full h-52 rounded-xl bg-slate-100 border border-slate-200 overflow-hidden relative">
                <iframe
                  title="Peta Lokasi Kantor"
                  src="https://maps.google.com/maps?q=Jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="bg-[#dbeafe] rounded-2xl p-6 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-[#1e40af]">Media Sosial Resmi</h3>
              <ul className="text-xs text-slate-700 space-y-2">
                <li>📸 <strong>Instagram:</strong> @puskopolda</li>
                <li>📘 <strong>Facebook:</strong> Puskopolda Official</li>
                <li>📺 <strong>YouTube:</strong> Puskopolda TV</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
