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
        // Check if script already exists
        if (document.getElementById('google-translate-script')) {
            const checkInterval = setInterval(() => {
                if (window.google && window.google.translate) {
                    clearInterval(checkInterval);
                    isInitialized = true;
                    
                    // Wait for Google Translate to fully initialize before hiding UI
                    setTimeout(() => {
                        hideGoogleTranslateUI();
                        setupMutationObserver();
                    }, 2000);
                    
                    resolve();
                }
            }, 100);
            setTimeout(() => {
                clearInterval(checkInterval);
                reject(new Error('Google Translate load timeout'));
            }, 15000);
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
                    // Initialize Google Translate first
                    const gtElement = document.createElement('div');
                    gtElement.id = 'google_translate_element';
                    gtElement.style.cssText = 'position: absolute; top: -9999px; left: -9999px; width: 0; height: 0; overflow: hidden; opacity: 0;';
                    document.body.appendChild(gtElement);

                    new window.google.translate.TranslateElement({
                        pageLanguage: 'en',
                        includedLanguages: 'id,en,ja,ko,zh-CN,fr,de,es',
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                        autoDisplay: false,
                    });

                    isInitialized = true;
                    console.log('Google Translate initialized');
                    
                    // Hide UI after initialization is complete
                    setTimeout(() => {
                        hideGoogleTranslateUI();
                        setupMutationObserver();
                    }, 2000);
                    
                    resolve();
                }
            } catch (error) {
                console.error('Failed to initialize Google Translate:', error);
                reject(error);
            }
        };

        script.onerror = () => {
            loadPromise = null;
            reject(new Error('Failed to load Google Translate script'));
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

// Check if Google Translate cookie exists
export const getCookieLanguage = () => {
    if (typeof window === 'undefined') return null;
    
    const match = document.cookie.match(/googtrans=([^;]+)/);
    if (match) {
        const cookieLang = match[1].replace('/', '');
        return cookieLang;
    }
    return null;
};

// Set Google Translate cookie and reload
export const changeLanguage = async (languageCode) => {
    if (typeof window === 'undefined') return false;

    const lang = LANGUAGE_MAP[languageCode] || DEFAULT_LANGUAGE;

    try {
        // Set the googtrans cookie (Google Translate reads this on page load)
        const cookieValue = `/${lang}`;
        document.cookie = `googtrans=${cookieValue}; path=/; domain=.${window.location.hostname}`;
        document.cookie = `googtrans=${cookieValue}; path=/`;
        
        console.log(`Language cookie set to: ${lang}, reloading...`);

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
        // Clear cookie
        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname;
        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        
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

// Setup Mutation Observer to prevent insertBefore errors
const setupMutationObserver = () => {
    if (typeof window === 'undefined') return;
    if (window.googleTranslateObserverActive) return; // Prevent duplicate observers

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
                            node.id?.includes('goog-te') ||
                            node.tagName === 'IFRAME' && node.src?.includes('translate.google')
                        ) {
                            shouldRehide = true;
                        }
                    }
                });
            }
        });

        if (shouldRehide) {
            hideGoogleTranslateUI();
        }
    });

    // Observe body for changes
    if (document.body) {
        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    }

    window.googleTranslateObserverActive = true;
};

// Hide Google Translate UI
export const hideGoogleTranslateUI = () => {
    if (typeof window === 'undefined') return;

    const style = document.createElement('style');
    style.id = 'google-translate-hide-style';
    style.textContent = `
        .goog-te-banner-frame,
        .goog-te-gadget-simple,
        .goog-te-gadget-icon,
        body > .goog-te-banner-frame,
        body > .goog-te-banner-frame.skiptranslate,
        #google_translate_element,
        .skiptranslate,
        .goog-te-info,
        .goog-te-info img,
        .goog-te-menu-frame,
        iframe.goog-te-banner-frame,
        div#google_translate_element,
        .goog-te-float-bar {
            display: none !important;
            visibility: hidden !important;
            height: 0 !important;
            width: 0 !important;
            overflow: hidden !important;
            position: absolute !important;
            top: -9999px !important;
            left: -9999px !important;
            z-index: -9999 !important;
        }

        body {
            top: 0 !important;
            position: initial !important;
        }
    `;

    const existingStyle = document.getElementById('google-translate-hide-style');
    if (existingStyle) {
        existingStyle.remove();
    }

    document.head.appendChild(style);
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

export { LANGUAGE_MAP, LANGUAGES, DEFAULT_LANGUAGE, STORAGE_KEY, isInitialized, loadGoogleTranslateScript };
