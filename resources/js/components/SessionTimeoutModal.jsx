import { AlertTriangle } from 'lucide-react';
import { useSessionTimeout } from '@hooks/useSessionTimeout';
import { useAuthStore } from '@store';
import { TOKEN_STORAGE_KEY } from '@constants';

export default function SessionTimeoutModal() {
    const { formattedTime, showWarning, resetTimer } = useSessionTimeout();

    const handleLogout = () => {
        // Clear auth store & local storage cleanly
        useAuthStore.getState().clearSession();
        localStorage.removeItem(TOKEN_STORAGE_KEY);
        localStorage.removeItem('cpwb_user');
        window.location.href = '/login?logout=1';
    };

    const handleExtendSession = async () => {
        const token = useAuthStore.getState().token || localStorage.getItem(TOKEN_STORAGE_KEY);
        if (!token) {
            handleLogout();
            return;
        }

        // Ping the server to extend session
        try {
            await fetch('/api/v1/auth/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
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
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 max-w-md w-full mx-4 border border-amber-200 dark:border-amber-800 animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                        <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                        <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                            Sesi Akan Berakhir
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                            Session Expiring Soon
                        </p>
                    </div>
                </div>

                <div className="mb-6">
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2 font-medium">
                        Tidak ada aktivitas selama beberapa menit. Sesi Anda akan berakhir dalam:
                    </p>
                    <div className="text-center bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 py-3 rounded-xl">
                        <span className="text-4xl font-extrabold text-amber-600 dark:text-amber-400 font-mono">
                            {formattedTime}
                        </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 text-center">
                        Setelah waktu habis, Anda akan diarahkan ke halaman login.
                    </p>
                </div>

                <div className="flex gap-3">
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="flex-1 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-extrabold rounded-xl text-xs transition"
                    >
                        Logout Sekarang
                    </button>
                    <button
                        type="button"
                        onClick={handleExtendSession}
                        className="flex-1 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl text-xs shadow-md shadow-blue-600/20 transition"
                    >
                        Lanjutkan Sesi
                    </button>
                </div>
            </div>
        </div>
    );
}