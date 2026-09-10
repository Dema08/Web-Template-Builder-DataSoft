import { Crown, X, Check, Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSubscriptionStore } from '@store';
import { ROUTES } from '@constants';

export default function UpgradeModal() {
  const isOpen = useSubscriptionStore((s) => s.isUpgradeModalOpen);
  const modalData = useSubscriptionStore((s) => s.upgradeModalData);
  const close = useSubscriptionStore((s) => s.closeUpgradeModal);
  const availablePlans = useSubscriptionStore((s) => s.availablePlans);
  const fetchPlans = useSubscriptionStore((s) => s.fetchAvailablePlans);
  const isPlansLoading = useSubscriptionStore((s) => s.isPlansLoading);
  const planName = useSubscriptionStore((s) => s.planName);
  const usedCount = useSubscriptionStore((s) => s.usedTemplateCount);
  const limit = useSubscriptionStore((s) => s.templateLimit);

  useEffect(() => {
    if (isOpen && availablePlans.length === 0) fetchPlans();
  }, [isOpen]);

  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') close(); };
    if (isOpen) document.addEventListener('keydown', fn);
    return () => document.removeEventListener('keydown', fn);
  }, [isOpen, close]);

  if (!isOpen) return null;

  const paidPlans = availablePlans.filter((p) => Number(p.harga ?? p.price ?? 0) > 0).slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(15,23,42,0.7)', backdropFilter: 'blur(6px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 max-h-[90vh] overflow-y-auto">
        <div className="px-6 py-6 text-white relative" style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}>
          <button type="button" onClick={close} className="absolute top-4 right-4 p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition">
            <X className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2 mb-2">
            <Crown className="h-5 w-5" />
            <span className="text-xs font-extrabold uppercase tracking-widest opacity-90">Upgrade Required</span>
          </div>
          <h3 className="text-xl font-extrabold leading-tight">{modalData.title}</h3>
          <p className="text-sm text-white/85 mt-1.5 leading-relaxed">Template ini memerlukan paket berlangganan. Silakan upgrade untuk mengaksesnya.</p>
          {modalData.reason && (<p className="text-xs text-white/75 mt-2 bg-white/10 rounded-xl px-3 py-2">{modalData.reason}</p>)}
        </div>
        <div className="p-6 space-y-3">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
            Paket Anda: <span className="text-indigo-600">{planName}</span>
            {typeof limit === 'number' && limit > 0 && (<span className="text-slate-400"> — Kuota: {usedCount}/{limit}</span>)}
          </p>
          {isPlansLoading ? (
            <div className="flex items-center justify-center py-8"><Loader2 className="h-6 w-6 animate-spin text-indigo-600" /></div>
          ) : paidPlans.length > 0 ? (
            paidPlans.map((p) => (
              <div key={p.id} className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 px-4 py-3 hover:border-indigo-300 transition">
                <div>
                  <p className="text-sm font-extrabold text-slate-900">{p.nama ?? p.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">Rp {Number(p.harga ?? 0).toLocaleString('id-ID')} — {(p.maks_starter_template === -1) ? 'Semua template' : `${p.maks_starter_template ?? 0} template`}</p>
                </div>
                <Link to={ROUTES.BILLING} onClick={close} className="shrink-0 inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md" style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}>
                  Upgrade <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))
          ) : (
            <div className="rounded-2xl bg-indigo-50 border border-indigo-100 px-4 py-3 text-xs text-indigo-900 space-y-1">
              <p className="font-extrabold flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5" /> Starter — hingga 5 template premium pilihan</p>
              <p className="font-extrabold flex items-center gap-1.5"><Check className="h-3.5 w-3.5" /> Unlimited — semua template tanpa batas</p>
            </div>
          )}
          <Link to={ROUTES.BILLING} onClick={close} className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl text-sm font-bold text-white shadow-lg" style={{ background: 'linear-gradient(135deg,#7c3aed,#4f46e5)' }}>
            <Crown className="h-4 w-4" /> Lihat Semua Paket & Upgrade
          </Link>
          <button type="button" onClick={close} className="w-full py-2.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition">Nanti Saja</button>
        </div>
      </div>
    </div>
  );
}
