import { useOnboardingStore } from '@store/onboardingStore';
import { Card } from '@components/ui';
import { Button } from '@components/ui';

export default function StepCompanyInfo() {
    const companyName = useOnboardingStore((state) => state.companyName);
    const setCompanyName = useOnboardingStore((state) => state.setCompanyName);

    return (
        <div className="max-w-2xl mx-auto">
            <Card className="p-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Company Information</h2>
                    <p className="text-sm text-slate-500">Let's start with your company name. This will appear on your website.</p>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                            Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="e.g. DataSoft Solusindo"
                            className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-600 transition"
                        />
                        <p className="text-xs text-slate-500 mt-2">
                            This is the name that will be displayed as your website title.
                        </p>
                    </div>

                    <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                        <p className="text-xs font-bold text-indigo-700 mb-1">💡 Tip</p>
                        <p className="text-xs text-indigo-600">
                            Use your official company or brand name for better recognition.
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    );
}
