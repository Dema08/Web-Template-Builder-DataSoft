import { useOnboardingStore } from '@features/onboarding/stores/onboardingStore';
import { Card } from '@shared/components/ui';
import { Button } from '@shared/components/ui';

export default function StepCompanyInfo() {
    const companyName = useOnboardingStore((state) => state.companyName);
    const setCompanyName = useOnboardingStore((state) => state.setCompanyName);

    return (
        <div className="max-w-2xl mx-auto">
            <Card className="p-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Informasi Perusahaan</h2>
                    <p className="text-sm text-slate-500">Mulai dengan nama perusahaan Anda. Nama ini akan tampil di website.</p>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                            Nama Perusahaan <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="cth: Microdata Indonesia"
                            className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-600 transition"
                        />
                        <p className="text-xs text-slate-500 mt-2">
                            Ini adalah nama yang akan ditampilkan sebagai judul website Anda.
                        </p>
                    </div>

                    <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                        <p className="text-xs font-bold text-indigo-700 mb-1">💡 Tip</p>
                        <p className="text-xs text-indigo-600">
                            Gunakan nama resmi perusahaan atau brand Anda agar mudah dikenali.
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    );
}
