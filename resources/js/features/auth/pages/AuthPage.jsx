import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { ROUTES } from '@constants';

export default function AuthPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const isRegisterPath = location.pathname === ROUTES.REGISTER;
    const [isFlipped, setIsFlipped] = useState(isRegisterPath);
    const [cardHeight, setCardHeight] = useState(null);
    const prevPathRef = useRef(location.pathname);

    const frontRef = useRef(null);
    const backRef = useRef(null);
    const containerRef = useRef(null);

    // Measure both faces and set container to the taller one
    useLayoutEffect(() => {
        const syncHeight = () => {
            if (frontRef.current && backRef.current) {
                const frontH = frontRef.current.scrollHeight;
                const backH = backRef.current.scrollHeight;
                const maxH = Math.max(frontH, backH);
                if (maxH > 0) setCardHeight(maxH);
            }
        };

        syncHeight();

        // Re-measure on resize (e.g. window resize, plan list loads)
        const ro = new ResizeObserver(syncHeight);
        if (frontRef.current) ro.observe(frontRef.current);
        if (backRef.current) ro.observe(backRef.current);

        return () => ro.disconnect();
    }, []);

    // Sync flip state with browser back/forward
    useEffect(() => {
        if (prevPathRef.current !== location.pathname) {
            prevPathRef.current = location.pathname;
            setIsFlipped(location.pathname === ROUTES.REGISTER);
        }
    }, [location.pathname]);

    const handleSwitchToRegister = () => {
        prevPathRef.current = ROUTES.REGISTER;
        setIsFlipped(true);
        navigate(ROUTES.REGISTER, { replace: true });
    };

    const handleSwitchToLogin = () => {
        prevPathRef.current = ROUTES.LOGIN;
        setIsFlipped(false);
        navigate(ROUTES.LOGIN, { replace: true });
    };

    return (
        <div className="ds-auth-flip-stage w-full py-4">
            <div
                ref={containerRef}
                className={`ds-auth-flip-card ${isFlipped ? 'is-flipped' : ''}`}
                style={cardHeight ? { height: cardHeight } : undefined}
            >
                {/* Front Side: Login Card */}
                <div ref={frontRef} className="ds-auth-card-face ds-auth-card-front">
                    <Login onSwitchToRegister={handleSwitchToRegister} />
                </div>

                {/* Back Side: Register Card */}
                <div ref={backRef} className="ds-auth-card-face ds-auth-card-back">
                    <Register onSwitchToLogin={handleSwitchToLogin} />
                </div>
            </div>
        </div>
    );
}
