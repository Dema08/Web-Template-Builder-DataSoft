import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Globe, Check } from 'lucide-react';
import { LANGUAGES, DEFAULT_LANGUAGE, getSavedLanguage, saveLanguage, changeLanguage, initializeGoogleTranslate, resetGoogleTranslate, hideGoogleTranslateUI, isInitialized, loadGoogleTranslateScript } from '@utils/googleTranslate';

export default function LanguageSelector({ variant = 'settings', showLabel = true }) {
    const [selectedLanguage, setSelectedLanguage] = useState(() => getSavedLanguage());
    const [isOpen, setIsOpen] = useState(false);
    const [isChanging, setIsChanging] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    // Hide Google Translate UI on mount
    useEffect(() => {
        hideGoogleTranslateUI();
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isOpen]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (!isOpen) return;

            if (event.key === 'Escape') {
                setIsOpen(false);
                buttonRef.current?.focus();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const handleLanguageChange = async (languageCode) => {
        setIsChanging(true);
        setIsOpen(false);

        try {
            // Initialize Google Translate if not already done
            if (!isInitialized) {
                await loadGoogleTranslateScript();
                // Wait for Google Translate to fully initialize
                await new Promise(resolve => setTimeout(resolve, 1500));
            }

            // Change language via Google Translate (await the async function)
            const success = await changeLanguage(languageCode);

            if (success) {
                // Save to localStorage
                saveLanguage(languageCode);

                // Update local state
                setSelectedLanguage(languageCode);

                // Hide Google Translate UI again after language change
                setTimeout(() => {
                    hideGoogleTranslateUI();
                }, 100);

                // Show success feedback
                console.log(`Language successfully changed to: ${languageCode}`);
            } else {
                throw new Error('Language change failed');
            }
        } catch (error) {
            console.error('Failed to change language:', error);
            // Revert to saved language on error
            setSelectedLanguage(getSavedLanguage());
            toast?.error?.('Failed to change language. Please try again.', 'Translation Error');
        } finally {
            setIsChanging(false);
        }
    };

    const handleReset = () => {
        handleLanguageChange(DEFAULT_LANGUAGE);
        resetGoogleTranslate();
    };

    const selectedLang = LANGUAGES.find(lang => lang.code === selectedLanguage) || LANGUAGES[0];

    // Variants
    const isCompact = variant === 'compact';
    const isSettings = variant === 'settings';

    return (
        <div className={isSettings ? 'space-y-3' : ''}>
            {showLabel && (
                <label className="block text-xs font-extrabold text-[rgb(var(--color-text-primary))] mb-2 flex items-center gap-1.5">
                    <Globe className="h-3.5 w-3.5 text-[rgb(var(--color-text-tertiary))]" />
                    {isSettings ? 'Application Language' : 'Language'}
                </label>
            )}

            <div className="relative">
                {/* Main Button */}
                <button
                    ref={buttonRef}
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    disabled={isChanging}
                    className={`
                        w-full flex items-center justify-between gap-3 px-4 py-3
                        bg-[rgb(var(--color-surface-alt))] border border-[rgb(var(--color-border))]
                        rounded-xl text-xs font-semibold text-[rgb(var(--color-text-primary))]
                        hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-200
                        focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600
                        disabled:opacity-50 disabled:cursor-not-allowed
                        ${isCompact ? 'py-2 px-3' : 'py-3 px-4'}
                    `}
                    aria-label="Select language"
                    aria-expanded={isOpen}
                    aria-haspopup="listbox"
                >
                    <span className="flex items-center gap-2.5">
                        <span className="text-base leading-none">{selectedLang.flag}</span>
                        <span className={isCompact ? 'text-xs' : 'text-sm'}>{selectedLang.name}</span>
                    </span>
                    <ChevronDown
                        className={`h-4 w-4 text-[rgb(var(--color-text-tertiary))] transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                        }`}
                    />
                </button>

                {/* Dropdown */}
                {isOpen && (
                    <div
                        ref={dropdownRef}
                        className="absolute z-50 w-full mt-2 bg-[rgb(var(--color-surface))] border border-[rgb(var(--color-border))] rounded-xl shadow-xl py-2 ds-animate-scale-in max-h-80 overflow-y-auto ds-scrollbar-thin"
                        role="listbox"
                        aria-label="Language options"
                    >
                        {LANGUAGES.map((language) => {
                            const isSelected = language.code === selectedLanguage;
                            const isDefault = language.code === DEFAULT_LANGUAGE;

                            return (
                                <button
                                    key={language.code}
                                    type="button"
                                    onClick={() => handleLanguageChange(language.code)}
                                    className={`
                                        w-full flex items-center gap-3 px-4 py-2.5 text-left
                                        transition-all duration-150
                                        hover:bg-[rgb(var(--color-surface-alt))] hover:text-blue-600
                                        focus:outline-none focus:bg-[rgb(var(--color-surface-alt))] focus:text-blue-600
                                        ${isSelected ? 'bg-blue-50 text-blue-700 font-bold' : 'text-[rgb(var(--color-text-primary))] font-medium'}
                                    `}
                                    role="option"
                                    aria-selected={isSelected}
                                >
                                    <span className="text-base leading-none flex-shrink-0">{language.flag}</span>
                                    <span className="flex-1 text-xs">{language.name}</span>
                                    {isSelected && (
                                        <Check className="h-4 w-4 text-blue-600 flex-shrink-0" />
                                    )}
                                    {isDefault && !isSelected && (
                                        <span className="text-[10px] text-[rgb(var(--color-text-tertiary))] font-semibold uppercase tracking-wider">
                                            Default
                                        </span>
                                    )}
                                </button>
                            );
                        })}

                        {/* Reset Option */}
                        {selectedLanguage !== DEFAULT_LANGUAGE && (
                            <>
                                <div className="border-t border-[rgb(var(--color-border))] my-2" />
                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-xs font-medium text-red-600 hover:bg-red-50 transition-all duration-150 focus:outline-none focus:bg-red-50"
                                >
                                    <span className="text-sm">↩️</span>
                                    <span>Reset to English (Default)</span>
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>

            {/* Help text for settings variant */}
            {isSettings && (
                <p className="text-[10px] text-[rgb(var(--color-text-tertiary))] leading-relaxed">
                    Choose the language used for the application interface. The translation is applied automatically using Google Translate.
                </p>
            )}

            {/* Loading indicator */}
            {isChanging && (
                <div className="flex items-center gap-2 text-[10px] text-blue-600 font-semibold">
                    <div className="h-3 w-3 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                    <span>Changing language...</span>
                </div>
            )}
        </div>
    );
}

export { LANGUAGES, DEFAULT_LANGUAGE };
