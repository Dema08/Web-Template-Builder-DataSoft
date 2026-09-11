// Google Translate Website Translator Utility
// Uses Google Translate Website Translator (free, no API key required)

const LANGUAGE_MAP = {
    id: 'id',
    en: 'en',
    ja: 'ja',
    ko: 'ko',
    'zh-CN': 'zh-CN',
    fr: 'fr',
    de: 'de',
    es: 'es',
};

const LANGUAGES = [
    { code: 'id', name: 'Indonesian', flag: '🇮🇩' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
    { code: 'ko', name: 'Korean', flag: '🇰🇷' },
    { code: 'zh-CN', name: 'Chinese (Simplified)', flag: '🇨🇳' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
];

const DEFAULT_LANGUAGE = 'en';
const STORAGE_KEY = 'preferred_language';

let isInitialized = false;
let loadPromise = null;

// Load Google Translate script once
const loadGoogleTranslateScript = () => {
    if (typeof window === 'undefined') return Promise.resolve();

    if (loadPromise) return loadPromise;

    if (isInitialized) return Promise.resolve();

    loadPromise = new Promise((resolve, reject) => {
        let settled = false;
        let checkInterval = null;
        const safeResolve = () => {
            if (settled) return;
            settled = true;
            if (checkInterval) clearInterval(checkInterval);
            clearTimeout(timeoutId);
            resolve();
        };
        const safeReject = (err) => {
            if (settled) return;
            settled = true;
            if (checkInterval) clearInterval(checkInterval);
            clearTimeout(timeoutId);
            loadPromise = null;
            reject(err);
        };

        // Fail-safe: never hang forever if Google is blocked (offline/adblock/CSP)
        const timeoutId = setTimeout(() => {
            safeReject(new Error('Google Translate load timeout (check connection/adblock)'));
        }, 20000);

        // Check if script already exists
        if (document.getElementById('google-translate-script')) {
            checkInterval = setInterval(() => {
                if (window.google && window.google.translate) {
                    isInitialized = true;

                    // Wait for Google Translate to fully initialize before hiding UI
                    setTimeout(() => {
                        hideGoogleTranslateUI();
                        setupMutationObserver();
                    }, 2000);

                    safeResolve();
                }
            }, 100);
            return;
        }

        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';

        window.googleTranslateElementInit = () => {
            try {
                if (window.google && window.google.translate) {
                    // Initialize Google Translate first (element must exist BEFORE
                    // constructing TranslateElement; keep it off-screen, NOT display:none)
                    let gtElement = document.getElementById('google_translate_element');
                    if (!gtElement) {
                        gtElement = document.createElement('div');
                        gtElement.id = 'google_translate_element';
                        gtElement.className = 'notranslate';
                        gtElement.setAttribute('aria-hidden', 'true');
                        gtElement.style.cssText = 'position:absolute;top:-9999px;left:-9999px;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none;';
                        document.body.appendChild(gtElement);
                    }

                    // Avoid double-initialization when callback fires twice
                    if (!gtElement.dataset.gtInit) {
                        new window.google.translate.TranslateElement({
                            pageLanguage: 'en',
                            includedLanguages: 'id,en,ja,ko,zh-CN,fr,de,es',
                            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                            autoDisplay: false,
                        });
                        gtElement.dataset.gtInit = '1';
                    }

                    isInitialized = true;
                    console.log('Google Translate initialized');

                    // Hide UI after initialization is complete
                    setTimeout(() => {
                        hideGoogleTranslateUI();
                        setupMutationObserver();
                    }, 2000);

                    safeResolve();
                } else {
                    safeReject(new Error('Google Translate API not available'));
                }
            } catch (error) {
                console.error('Failed to initialize Google Translate:', error);
                safeReject(error);
            }
        };

        script.onerror = () => {
            safeReject(new Error('Failed to load Google Translate script'));
        };

        document.head.appendChild(script);
    });

    return loadPromise;
};

// Get saved language from localStorage
export const getSavedLanguage = () => {
    if (typeof window === 'undefined') return DEFAULT_LANGUAGE;
    try {
        return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE;
    } catch {
        return DEFAULT_LANGUAGE;
    }
};

// Save language to localStorage
export const saveLanguage = (language) => {
    if (typeof window === 'undefined') return;
    try {
        localStorage.setItem(STORAGE_KEY, language);
    } catch (error) {
        console.error('Failed to save language preference:', error);
    }
};

// Clear saved language
export const clearSavedLanguage = () => {
    if (typeof window === 'undefined') return;
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error('Failed to clear language preference:', error);
    }
};

// Check if Google Translate cookie exists — returns TARGET language code (e.g. "id")
export const getCookieLanguage = () => {
    if (typeof window === 'undefined') return null;

    const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
    if (match) {
        try {
            // Cookie format is "/en/<target>" (e.g. "/en/id"). Older code wrote "/<target>".
            const raw = decodeURIComponent(match[1]);
            const parts = raw.split('/').filter(Boolean);
            if (parts.length === 0) return null;
            // Last segment is the target language: "/en/id" -> "id", "/id" -> "id"
            return parts[parts.length - 1] || null;
        } catch {
            return null;
        }
    }
    return null;
};

// Write the googtrans cookie in the format Google Translate actually reads: "/en/<target>"
const setGoogtransCookie = (languageCode) => {
    const lang = LANGUAGE_MAP[languageCode] || DEFAULT_LANGUAGE;
    // Google Translate expects "source/target", e.g. "/en/id". A bare "/id" is ignored.
    const cookieValue = `/en/${lang}`;
    const host = window.location.hostname;
    // Host-only cookie (works on localhost & all hosts)
    document.cookie = `googtrans=${cookieValue}; path=/`;
    // Domain cookie (works across subdomains) — wrap in try/catch for localhost/IP
    try {
        document.cookie = `googtrans=${cookieValue}; path=/; domain=.${host}`;
    } catch {
        /* ignore — host-only cookie above is enough */
    }
    return lang;
};

const clearGoogtransCookie = () => {
    const host = window.location.hostname;
    const expired = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    document.cookie = expired;
    try {
        document.cookie = `${expired}; domain=.${host}`;
    } catch {
        /* ignore */
    }
    try {
        document.cookie = `${expired}; domain=${host}`;
    } catch {
        /* ignore */
    }
};

// Set Google Translate cookie and reload
export const changeLanguage = async (languageCode) => {
    if (typeof window === 'undefined') return false;

    try {
        const lang = setGoogtransCookie(languageCode);

        console.log(`Language cookie set to: /en/${lang}, reloading...`);

        // Reload the page to apply translation
        setTimeout(() => {
            window.location.reload();
        }, 300);

        return true;
    } catch (error) {
        console.error('Failed to change language:', error);
        return false;
    }
};

// Get current language
export const getCurrentLanguage = () => {
    if (typeof window === 'undefined') return null;

    // Check cookie first
    const cookieLang = getCookieLanguage();
    if (cookieLang) return cookieLang;

    // Fallback to select element
    const selectElement = document.querySelector('.goog-te-combo');
    if (selectElement) {
        return selectElement.value;
    }

    return null;
};

// Initialize Google Translate
export const initializeGoogleTranslate = async (language = null) => {
    if (typeof window === 'undefined') return false;

    try {
        await loadGoogleTranslateScript();
        console.log('Google Translate initialized successfully');
        return true;
    } catch (error) {
        console.error('Failed to initialize Google Translate:', error);
        return false;
    }
};

// Reset Google Translate
export const resetGoogleTranslate = async () => {
    if (typeof window === 'undefined') return false;

    try {
        // Clear cookie (all variants) + restore default "/en/en" pair
        clearGoogtransCookie();
        try {
            document.cookie = 'googtrans=/en/en; path=/';
        } catch {
            /* ignore */
        }

        // Clear localStorage
        clearSavedLanguage();

        // Reload to reset
        setTimeout(() => {
            window.location.reload();
        }, 300);

        return true;
    } catch (error) {
        console.error('Failed to reset language:', error);
        return false;
    }
};

// Setup Mutation Observer — aggressively kills the Google top banner frame
// ("Translated to: ... Show original ... Options") every time Google injects
// or re-injects it, and keeps body positioning intact.
const setupMutationObserver = () => {
    if (typeof window === 'undefined') return;
    if (window.googleTranslateObserverActive) return; // Prevent duplicate observers

    const killBannerNow = () => {
        let killed = false;
        try {
            // The top bar is an iframe with class goog-te-banner-frame, sometimes
            // wrapped in body > .skiptranslate. Remove ALL of them.
            document.querySelectorAll(
                'iframe.goog-te-banner-frame, body > .skiptranslate, .goog-te-banner-frame, .goog-te-banner'
            ).forEach((el) => {
                // Never touch our hidden widget element or the app root
                if (el && el.id !== 'google_translate_element' && el.id !== 'app') {
                    el.remove();
                    killed = true;
                }
            });
            // Google forces body top offset for the banner — always reset it
            if (document.body && document.body.style.top !== '0px') {
                document.body.style.top = '0px';
            }
        } catch {
            /* ignore */
        }
        return killed;
    };

    // Expose so hideGoogleTranslateUI() and init flows can reuse it
    window.__killGoogleBanner = killBannerNow;

    const observer = new MutationObserver((mutations) => {
        let shouldRehide = false;

        mutations.forEach((mutation) => {
            // Check if Google Translate added elements to body
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) { // Element node
                        // Check if it's a Google Translate element
                        if (
                            node.classList?.contains('goog-te-banner-frame') ||
                            node.classList?.contains('goog-te-banner') ||
                            node.id?.includes('goog-te') ||
                            node.id?.includes('goog-gt') ||
                            node.tagName === 'IFRAME' && node.src?.includes('translate.google')
                        ) {
                            shouldRehide = true;
                        }
                    }
                });
            }
            // Google sets body top:40px inline for the banner — revert it live
            if (mutation.type === 'attributes' && mutation.target === document.body) {
                if (document.body.style.top && document.body.style.top !== '0px') {
                    document.body.style.top = '0px';
                }
            }
        });

        if (shouldRehide) {
            killBannerNow();
            hideGoogleTranslateUI();
        }
    });

    // Observe body for changes (childList + inline style changes)
    if (document.body) {
        killBannerNow();
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style'],
        });
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['style'],
        });
    }

    window.googleTranslateObserverActive = true;
};

// Interval-based banner killer — Google sometimes re-injects the banner AFTER
// translation completes (long after MutationObserver setup), so keep a cheap
// interval running for a while after each init/translate to guarantee it dies.
const startBannerKiller = (durationMs = 30000) => {
    if (typeof window === 'undefined') return;
    if (window.__googleBannerKiller) return; // already running
    const kill = () => {
        try {
            if (typeof window.__killGoogleBanner === 'function') {
                window.__killGoogleBanner();
            } else {
                document.querySelectorAll(
                    'iframe.goog-te-banner-frame, body > .skiptranslate, .goog-te-banner-frame'
                ).forEach((el) => {
                    if (el && el.id !== 'google_translate_element' && el.id !== 'app') el.remove();
                });
                if (document.body && document.body.style.top !== '0px') {
                    document.body.style.top = '0px';
                }
            }
        } catch {
            /* ignore */
        }
    };
    kill();
    const intervalId = setInterval(kill, 500);
    window.__googleBannerKiller = intervalId;
    setTimeout(() => {
        clearInterval(intervalId);
        window.__googleBannerKiller = null;
        kill(); // one last sweep
    }, durationMs);
};

// Hide Google Translate UI — hides the banner/bar chrome ONLY.
// IMPORTANT: do NOT hide `.skiptranslate` globally: Google adds that class to
// <body>/<html> when a translation is active, so hiding it hides ALL content.
// Also never `display:none` #google_translate_element — the widget breaks.
export const hideGoogleTranslateUI = () => {
    if (typeof window === 'undefined') return;

    const css = `
        /* ===== Google top banner ("Translated to: ... Show original") ===== */
        .goog-te-banner-frame,
        body > .goog-te-banner-frame,
        body > .goog-te-banner-frame.skiptranslate,
        .goog-te-banner-frame.skiptranslate,
        iframe.goog-te-banner-frame,
        .goog-te-banner,
        /* gadget / menu / tooltip chrome */
        .goog-te-gadget-simple,
        .goog-te-gadget-icon,
        .goog-te-gadget,
        .goog-te-menu-frame,
        iframe.goog-te-menu-frame,
        .goog-te-float-bar,
        .goog-te-balloon-frame,
        #goog-gt-tt,
        .goog-te-balloon,
        .goog-tooltip,
        .goog-tooltip:hover,
        /* "Powered by Google" branding inside widget */
        .goog-logo-link,
        .goog-te-gadget span[style*="white"],
        .goog-te-gadget .goog-te-combo + div {
            display: none !important;
            visibility: hidden !important;
            pointer-events: none !important;
        }

        /* our hidden widget holder: off-screen, NEVER display:none */
        #google_translate_element {
            position: absolute !important;
            top: -9999px !important;
            left: -9999px !important;
            width: 1px !important;
            height: 1px !important;
            overflow: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
        }

        /* Google pushes <body> down 40px for the banner — force it back */
        body {
            top: 0 !important;
            margin-top: 0 !important;
        }
        html { margin-top: 0 !important; }
        iframe.goog-te-banner-frame { display: none !important; }
    `;

    // Keep ONE style tag — replace its content instead of remove+append
    // (remove+append causes a style flash where the banner briefly appears).
    let style = document.getElementById('google-translate-hide-style');
    if (!style) {
        style = document.createElement('style');
        style.id = 'google-translate-hide-style';
        // Insert at the TOP of <head> so it wins over Google's own stylesheets
        if (document.head.firstChild) {
            document.head.insertBefore(style, document.head.firstChild);
        } else {
            document.head.appendChild(style);
        }
    }
    if (style.textContent !== css) {
        style.textContent = css;
    }

    // Actively remove banner iframe if Google already injected it
    try {
        if (typeof window.__killGoogleBanner === 'function') {
            window.__killGoogleBanner();
        } else {
            document.querySelectorAll(
                'iframe.goog-te-banner-frame, body > .skiptranslate, .goog-te-banner-frame, .goog-te-banner'
            ).forEach((el) => {
                if (el && el.id !== 'google_translate_element' && el.id !== 'app') el.remove();
            });
            if (document.body && document.body.style.top !== '0px') {
                document.body.style.top = '0px';
            }
        }
    } catch {
        /* ignore */
    }
    startBannerKiller(30000);
};

// Setup Google Translate element
export const setupGoogleTranslateElement = () => {
    if (typeof window === 'undefined') return;

    hideGoogleTranslateUI();
};

// Check availability
export const isGoogleTranslateAvailable = () => {
    if (typeof window === 'undefined') return false;
    return !!(window.google && window.google.translate);
};

// `isGoogleTranslateReady` is a LIVE check (call it as a function). Do NOT use
// the exported `isInitialized` primitive directly — ES module bindings freeze
// primitives at import time, so it stays `false` in importers forever.
export const isGoogleTranslateReady = () => {
    if (typeof window === 'undefined') return false;
    if (isInitialized) return true;
    return isGoogleTranslateAvailable();
};

export { LANGUAGE_MAP, LANGUAGES, DEFAULT_LANGUAGE, STORAGE_KEY, isInitialized, loadGoogleTranslateScript };
