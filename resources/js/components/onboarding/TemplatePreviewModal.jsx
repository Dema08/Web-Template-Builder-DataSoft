import { X } from 'lucide-react';
import { useOnboardingStore } from '@store/onboardingStore';

export default function TemplatePreviewModal() {
    const templatePreview = useOnboardingStore((state) => state.templatePreview);
    const closePreview = useOnboardingStore((state) => state.closePreview);

    if (!templatePreview) return null;

    return (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between p-6 border-b border-slate-100">
                    <div>
                        <h2 className="text-lg font-extrabold text-slate-900">Template Preview</h2>
                        <p className="text-xs text-slate-500 mt-1">{templatePreview.name}</p>
                    </div>
                    <button
                        type="button"
                        onClick={closePreview}
                        className="p-2 hover:bg-slate-100 rounded-full transition"
                    >
                        <X className="h-5 w-5 text-slate-500" />
                    </button>
                </div>
                <div className="p-6 overflow-y-auto max-h-[70vh]">
                    {templatePreview.thumbnail && (
                        <img
                            src={templatePreview.thumbnail}
                            alt={templatePreview.name}
                            className="w-full rounded-2xl shadow-lg"
                        />
                    )}
                    {templatePreview.description && (
                        <p className="mt-4 text-sm text-slate-600">{templatePreview.description}</p>
                    )}
                    {templatePreview.preview_data && (
                        <div className="mt-4 p-4 bg-slate-50 rounded-xl">
                            <h3 className="text-xs font-bold text-slate-700 mb-2">Preview Data</h3>
                            <pre className="text-xs text-slate-600 overflow-x-auto">
                                {JSON.stringify(templatePreview.preview_data, null, 2)}
                            </pre>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
