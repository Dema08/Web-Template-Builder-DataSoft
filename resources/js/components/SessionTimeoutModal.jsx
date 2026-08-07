import { AlertTriangle } from 'lucide-react';
import { useSessionTimeout } from '@hooks/useSessionTimeout';

export default function SessionTimeoutModal() {
    const { formattedTime, showWarning, resetTimer } = useSessionTimeout();

    const handleLogout = () => {
        // Clear local storage and redirect to login
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user');
        window.location.href = '/login';
    };

    const handleExtendSession = async () => {
        // Ping the server to extend session
        try {
            await fetch('/api/v1/auth/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });
            resetTimer();
        } catch (error) {
            // If request fails, session is already invalid
            handleLogout();
        }
    };

    if (!showWarning) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 max-w-md w-full mx-4 border border-amber-200 dark:border-amber-800">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                        <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                        <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                            Sesi Akan Berakhir
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Session Expiring Soon
                        </p>
                    </div>
                </div>

                <div className="mb-6">
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                        Tidak ada aktivitas selama beberapa menit. Sesi Anda akan berakhir dalam:
                    </p>
                    <div className="text-center">
                        <span className="text-4xl font-extrabold text-amber-600 dark:text-amber-400 font-mono">
                            {formattedTime}
                        </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 text-center">
                        Setelah habis, Anda harus login kembali.
                    </p>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={handleLogout}
                        className="flex-1 px-4 py-2.5 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-extrabold rounded-xl text-sm transition"
                    >
                        Logout Sekarang
                    </button>
                    <button
                        onClick={handleExtendSession}
                        className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl text-sm shadow-md shadow-blue-600/20 transition"
                    >
                        Lanjutkan Sesi
                    </button>
                </div>
            </div>
        </div>
    );
}