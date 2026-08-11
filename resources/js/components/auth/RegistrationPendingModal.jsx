import { useState, useEffect } from 'react';
import { Mail, Clock, AlertCircle } from 'lucide-react';

export default function RegistrationPendingModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if modal should be shown from localStorage
        const shouldShow = localStorage.getItem('show_registration_pending_modal');
        if (shouldShow === 'true') {
            setIsOpen(true);
        }
    }, []);

    const handleClose = () => {
        localStorage.removeItem('show_registration_pending_modal');
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-lg w-full mx-4 border border-amber-200">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-amber-100 rounded-full">
                        <Clock className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                        <h3 className="text-lg font-extrabold text-gray-900">
                            Menunggu Persetujuan Admin
                        </h3>
                        <p className="text-sm text-gray-600">
                            Akun Anda sedang dalam proses review
                        </p>
                    </div>
                </div>

                <div className="mb-6 space-y-3">
                    <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-xl">
                        <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700 leading-relaxed">
                            <span className="font-bold">Perhatian:</span> Saat ini akun yang telah di daftarkan tidak bisa digunakan, harus menunggu persetujuan dari admin.
                        </p>
                    </div>

                    <div className="flex items-start gap-2 p-3 bg-blue-50 border border-blue-200 rounded-xl">
                        <Mail className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Pesan persetujuan dari admin akan kami kirimkan ke email yang sudah anda cantumkan.
                        </p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={handleClose}
                        className="flex-1 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold rounded-xl text-sm shadow-lg shadow-indigo-600/25 transition-all"
                    >
                        Mengerti
                    </button>
                </div>
            </div>
        </div>
    );
}
