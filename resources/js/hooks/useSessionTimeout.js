import { useState, useEffect, useCallback } from 'react';

const SESSION_TIMEOUT = 5 * 60 * 1000; // 5 minutes in milliseconds
const WARNING_BEFORE = 60 * 1000; // Show warning 1 minute before timeout

export function useSessionTimeout() {
    const [timeLeft, setTimeLeft] = useState(SESSION_TIMEOUT);
    const [showWarning, setShowWarning] = useState(false);

    const resetTimer = useCallback(() => {
        setTimeLeft(SESSION_TIMEOUT);
        setShowWarning(false);
    }, []);

    useEffect(() => {
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

                // Show warning when 1 minute left
                if (newTime <= WARNING_BEFORE && newTime > 0) {
                    setShowWarning(true);
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
    }, [resetTimer]);

    const formatTime = (ms) => {
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