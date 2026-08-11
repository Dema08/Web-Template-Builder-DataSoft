import { useState, useEffect, useCallback } from 'react';
import { useAuthStore } from '@store';
import { TOKEN_STORAGE_KEY } from '@constants';

const SESSION_TIMEOUT = 15 * 60 * 1000; // 15 minutes in milliseconds
const WARNING_BEFORE = 2 * 60 * 1000; // Show warning 2 minutes before timeout

export function useSessionTimeout() {
    const [timeLeft, setTimeLeft] = useState(SESSION_TIMEOUT);
    const [showWarning, setShowWarning] = useState(false);
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    const resetTimer = useCallback(() => {
        setTimeLeft(SESSION_TIMEOUT);
        setShowWarning(false);
    }, []);

    useEffect(() => {
        if (!isAuthenticated) return;

        // Track user activity
        const events = ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart', 'click'];

        const handleActivity = () => {
            resetTimer();
        };

        // Add event listeners
        events.forEach(event => {
            window.addEventListener(event, handleActivity);
        });

        // Timer countdown
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                const newTime = prev - 1000;

                // Show warning when 2 minutes left
                if (newTime <= WARNING_BEFORE && newTime > 0) {
                    setShowWarning(true);
                }

                // If timeout reached 0, trigger clean logout to avoid blank screen
                if (newTime <= 0) {
                    clearInterval(interval);
                    useAuthStore.getState().clearSession();
                    localStorage.removeItem(TOKEN_STORAGE_KEY);
                    localStorage.removeItem('cpwb_user');

                    if (!window.location.pathname.startsWith('/login')) {
                        window.location.href = '/login?logout=1';
                    }
                }

                return newTime;
            });
        }, 1000);

        return () => {
            // Cleanup
            events.forEach(event => {
                window.removeEventListener(event, handleActivity);
            });
            clearInterval(interval);
        };
    }, [resetTimer, isAuthenticated]);

    const formatTime = (ms) => {
        if (ms <= 0) return '0:00';
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return {
        timeLeft,
        formattedTime: formatTime(timeLeft),
        showWarning,
        resetTimer,
        isExpired: timeLeft <= 0,
    };
}