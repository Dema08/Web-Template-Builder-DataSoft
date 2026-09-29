import React, { useState } from 'react';
import {
  Type,
  Link,
  Phone,
  Mail,
  MessageCircle,
  Hash,
  FileText,
  ExternalLink,
  Palette,
  Sparkles,
  ArrowRight,
  Download,
  Send,
  CheckCircle,
  ShoppingCart,
  Calendar,
  Play,
  ChevronDown,
} from 'lucide-react';

// Available Lucide icons with their component reference
export const AVAILABLE_ICONS = {
  None: null,
  MessageCircle,
  ArrowRight,
  Send,
  Phone,
  Mail,
  Download,
  ShoppingCart,
  Calendar,
  Sparkles,
  CheckCircle,
  Play,
  ExternalLink,
};

// Predefined Mock Internal Pages
const MOCK_PAGES = [
  { id: 'home', title: 'Beranda (Home)' },
  { id: 'about', title: 'Tentang Kami (About Us)' },
  { id: 'services', title: 'Layanan (Services)' },
  { id: 'products', title: 'Katalog Produk (Products)' },
  { id: 'pricing', title: 'Paket Harga (Pricing)' },
  { id: 'contact', title: 'Hubungi Kami (Contact)' },
];

export default function ButtonInspector({ node, onUpdateNode, sectionId }) {
  const [activeTab, setActiveTab] = useState('content'); // 'content' | 'styles'

  if (!node) {
    return (
      <div className="p-4 text-center text-xs text-slate-400">
        Pilih elemen Button untuk membuka pengaturan.
      </div>
    );
  }

  // Safe defaults following the exact JSON schema
  const content = node.content || {
    text: 'Klik Disini',
    iconLeft: null,
    iconRight: null,
  };

  const action = node.action || {
    type: 'web_url',
    value: '',
    message: '',
    target: '_self',
  };

  const styles = node.styles || {
    variant: 'primary',
    size: 'md',
    borderRadius: 'full',
    customBgColor: null,
    customTextColor: null,
  };

  // Helper updates
  const updateContent = (partial) => {
    onUpdateNode({
      ...node,
      content: { ...content, ...partial },
    });
  };

  const updateAction = (partial) => {
    onUpdateNode({
      ...node,
      action: { ...action, ...partial },
    });
  };

  const updateStyles = (partial) => {
    onUpdateNode({
      ...node,
      styles: { ...styles, ...partial },
    });
  };

  return (
    <div className="w-full text-slate-800 bg-white flex flex-col h-full select-none text-xs">
      {/* Header Tabs */}
      <div className="flex border-b border-slate-200 bg-slate-50/75 p-1 gap-1">
        <button
          type="button"
          onClick={() => setActiveTab('content')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-md font-medium transition-all ${
            activeTab === 'content'
              ? 'bg-white text-indigo-600 shadow-xs border border-slate-200/80'
              : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
          }`}
        >
          <Type className="w-3.5 h-3.5" />
          <span>Konten & Aksi</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('styles')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-md font-medium transition-all ${
            activeTab === 'styles'
              ? 'bg-white text-indigo-600 shadow-xs border border-slate-200/80'
              : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
          }`}
        >
          <Palette className="w-3.5 h-3.5" />
          <span>Tampilan & Gaya</span>
        </button>
      </div>

      {/* Tab Body */}
      <div className="p-4 space-y-5 overflow-y-auto flex-1">
        {activeTab === 'content' ? (
          /* ================= SECTION A: CONTENT & ACTION ================= */
          <div className="space-y-4">
            {/* Button Text */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider flex items-center gap-1">
                <Type className="w-3 h-3 text-slate-400" />
                Teks Tombol
              </label>
              <input
                type="text"
                value={content.text || ''}
                onChange={(e) => updateContent({ text: e.target.value })}
                placeholder="Contoh: Konsultasi Sekarang"
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-slate-800 font-medium"
              />
            </div>

            {/* Action Type */}
            <div className="space-y-1.5 pt-2 border-t border-slate-100">
              <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <Link className="w-3 h-3 text-slate-400" />
                  Tipe Tindakan (Action)
                </span>
                <span className="text-[10px] text-indigo-600 font-normal lowercase bg-indigo-50 px-1.5 py-0.5 rounded">
                  {action.type}
                </span>
              </label>

              <div className="relative">
                <select
                  value={action.type || 'web_url'}
                  onChange={(e) => updateAction({ type: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg appearance-none focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all pr-8 font-medium cursor-pointer"
                >
                  <option value="web_url">🌐 Buka URL Web Eksternal</option>
                  <option value="whatsapp">💬 Chat WhatsApp Langsung</option>
                  <option value="page">📄 Pindah ke Halaman Internal</option>
                  <option value="section">⚓ Scroll ke Seksi (Anchor ID)</option>
                  <option value="email">✉️ Kirim Email (Mailto)</option>
                  <option value="phone">📞 Panggil Telepon Langsung</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* DYNAMIC ACTION INPUTS */}
            <div className="p-3 bg-slate-50/80 border border-slate-200/80 rounded-xl space-y-3">
              {/* 1. WEB URL */}
              {action.type === 'web_url' && (
                <>
                  <div className="space-y-1">
                    <label className="text-[11px] font-medium text-slate-700">Tautan URL Web</label>
                    <input
                      type="url"
                      value={action.value || ''}
                      onChange={(e) => updateAction({ value: e.target.value })}
                      placeholder="https://example.com/promo"
                      className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>

                  <label className="flex items-center gap-2 cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      checked={action.target === '_blank'}
                      onChange={(e) => updateAction({ target: e.target.checked ? '_blank' : '_self' })}
                      className="w-3.5 h-3.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="text-[11px] text-slate-600 flex items-center gap-1">
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                      Buka di Tab Baru (`_blank`)
                    </span>
                  </label>
                </>
              )}

              {/* 2. WHATSAPP */}
              {action.type === 'whatsapp' && (
                <>
                  <div className="space-y-1">
                    <label className="text-[11px] font-medium text-slate-700 flex items-center gap-1">
                      <MessageCircle className="w-3 h-3 text-emerald-600" />
                      Nomor WhatsApp
                    </label>
                    <input
                      type="text"
                      value={action.value || ''}
                      onChange={(e) => updateAction({ value: e.target.value })}
                      placeholder="6281234567890 (Gunakan kode negara)"
                      className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-md focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 font-mono"
                    />
                    <p className="text-[10px] text-slate-400">Gunakan format internasional tanpa tanda + (contoh: 62812...)</p>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-medium text-slate-700">Pesan Otomatis Default</label>
                    <textarea
                      rows={3}
                      value={action.message || ''}
                      onChange={(e) => updateAction({ message: e.target.value })}
                      placeholder="Halo, saya ingin menanyakan paket layanan..."
                      className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-md focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                    />
                  </div>
                </>
              )}

              {/* 3. INTERNAL PAGE */}
              {action.type === 'page' && (
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-slate-700 flex items-center gap-1">
                    <FileText className="w-3 h-3 text-indigo-600" />
                    Pilih Halaman Tujuan
                  </label>
                  <select
                    value={action.value || 'home'}
                    onChange={(e) => updateAction({ value: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer"
                  >
                    {MOCK_PAGES.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* 4. SECTION ID */}
              {action.type === 'section' && (
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-slate-700 flex items-center gap-1">
                    <Hash className="w-3 h-3 text-indigo-600" />
                    ID Seksi Anchor
                  </label>
                  <input
                    type="text"
                    value={action.value || ''}
                    onChange={(e) => updateAction({ value: e.target.value })}
                    placeholder="#pricing atau #contact"
                    className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 font-mono"
                  />
                  <p className="text-[10px] text-slate-400">Halaman akan otomatis melakukan smooth scroll ke seksi ini.</p>
                </div>
              )}

              {/* 5. EMAIL */}
              {action.type === 'email' && (
                <>
                  <div className="space-y-1">
                    <label className="text-[11px] font-medium text-slate-700 flex items-center gap-1">
                      <Mail className="w-3 h-3 text-sky-600" />
                      Alamat Email Tujuan
                    </label>
                    <input
                      type="email"
                      value={action.value || ''}
                      onChange={(e) => updateAction({ value: e.target.value })}
                      placeholder="support@perusahaan.com"
                      className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-md focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-medium text-slate-700">Subjek Email Default</label>
                    <input
                      type="text"
                      value={action.message || ''}
                      onChange={(e) => updateAction({ message: e.target.value })}
                      placeholder="Tanya Penawaran Produk"
                      className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-md focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
                    />
                  </div>
                </>
              )}

              {/* 6. PHONE */}
              {action.type === 'phone' && (
                <div className="space-y-1">
                  <label className="text-[11px] font-medium text-slate-700 flex items-center gap-1">
                    <Phone className="w-3 h-3 text-blue-600" />
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    value={action.value || ''}
                    onChange={(e) => updateAction({ value: e.target.value })}
                    placeholder="+62 812-3456-7890"
                    className="w-full px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 font-mono"
                  />
                  <p className="text-[10px] text-slate-400">Membuka dialer telepon otomatis di perangkat seluler.</p>
                </div>
              )}
            </div>

            {/* ICONS CONFIGURATION */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-slate-400" />
                Ikon Tombol
              </label>

              <div className="grid grid-cols-2 gap-3">
                {/* Left Icon */}
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-500">Ikon Kiri (Left)</span>
                  <select
                    value={content.iconLeft || 'None'}
                    onChange={(e) => updateContent({ iconLeft: e.target.value === 'None' ? null : e.target.value })}
                    className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-md cursor-pointer"
                  >
                    {Object.keys(AVAILABLE_ICONS).map((iconKey) => (
                      <option key={`left-${iconKey}`} value={iconKey}>
                        {iconKey}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Right Icon */}
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-500">Ikon Kanan (Right)</span>
                  <select
                    value={content.iconRight || 'None'}
                    onChange={(e) => updateContent({ iconRight: e.target.value === 'None' ? null : e.target.value })}
                    className="w-full px-2.5 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-md cursor-pointer"
                  >
                    {Object.keys(AVAILABLE_ICONS).map((iconKey) => (
                      <option key={`right-${iconKey}`} value={iconKey}>
                        {iconKey}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ================= SECTION B: STYLE & APPEARANCE ================= */
          <div className="space-y-5">
            {/* 1. Variant Chips */}
            <div className="space-y-2">
              <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                Varian Gaya (Variant)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'primary', label: 'Primary', bg: 'bg-indigo-600 text-white' },
                  { id: 'secondary', label: 'Secondary', bg: 'bg-slate-700 text-white' },
                  { id: 'outline', label: 'Outline', bg: 'border border-indigo-600 text-indigo-600 bg-white' },
                  { id: 'ghost', label: 'Ghost', bg: 'text-indigo-600 hover:bg-indigo-50 border border-dashed border-slate-200' },
                  { id: 'danger', label: 'Danger', bg: 'bg-rose-600 text-white' },
                ].map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => updateStyles({ variant: v.id })}
                    className={`px-2.5 py-2 rounded-lg text-[11px] font-medium transition-all text-center flex items-center justify-center ${v.bg} ${
                      styles.variant === v.id
                        ? 'ring-2 ring-indigo-500 ring-offset-1 shadow-xs font-bold'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Size Preset */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                Ukuran Tombol (Size)
              </label>
              <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-100 rounded-lg">
                {[
                  { id: 'sm', label: 'Small' },
                  { id: 'md', label: 'Medium' },
                  { id: 'lg', label: 'Large' },
                  { id: 'full', label: 'Full W' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => updateStyles({ size: s.id })}
                    className={`py-1.5 text-[11px] font-medium rounded-md transition-all text-center ${
                      styles.size === s.id
                        ? 'bg-white text-indigo-600 shadow-xs font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Border Radius Presets */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                  Kelengkungan Sudut (Radius)
                </label>
                <span className="text-[11px] text-slate-500 font-mono">
                  {styles.borderRadius === 'full'
                    ? 'Pill (Full)'
                    : styles.borderRadius === 'none'
                    ? '0px'
                    : styles.borderRadius || '8px'}
                </span>
              </div>

              {/* Preset buttons */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'none', label: 'Square (0px)' },
                  { id: '8px', label: 'Rounded (8px)' },
                  { id: 'full', label: 'Pill (Full)' },
                ].map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => updateStyles({ borderRadius: r.id })}
                    className={`py-1.5 px-2 border rounded-lg text-[10px] font-medium transition-all ${
                      styles.borderRadius === r.id
                        ? 'border-indigo-600 bg-indigo-50/50 text-indigo-700 font-bold'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Custom Colors (Optional Overrides) */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                Kustomisasi Warna Khusus
              </label>

              <div className="grid grid-cols-2 gap-3">
                {/* Background Color */}
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-500">Custom Background</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={styles.customBgColor || '#4f46e5'}
                      onChange={(e) => updateStyles({ customBgColor: e.target.value })}
                      className="w-7 h-7 rounded border border-slate-200 cursor-pointer p-0.5 bg-white"
                    />
                    <button
                      type="button"
                      onClick={() => updateStyles({ customBgColor: null })}
                      className="text-[10px] text-slate-400 hover:text-rose-600 underline"
                    >
                      Reset
                    </button>
                  </div>
                </div>

                {/* Text Color */}
                <div className="space-y-1">
                  <span className="text-[10px] text-slate-500">Custom Text Color</span>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={styles.customTextColor || '#ffffff'}
                      onChange={(e) => updateStyles({ customTextColor: e.target.value })}
                      className="w-7 h-7 rounded border border-slate-200 cursor-pointer p-0.5 bg-white"
                    />
                    <button
                      type="button"
                      onClick={() => updateStyles({ customTextColor: null })}
                      className="text-[10px] text-slate-400 hover:text-rose-600 underline"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
