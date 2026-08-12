import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export default function CustomDropdown({
  options = [],
  value = '',
  onChange,
  placeholder = 'Select an option...',
  label = null,
  className = '',
  disabled = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Format options if passed as string array or object array
  const formattedOptions = options.map((opt) => {
    if (typeof opt === 'object' && opt !== null) {
      return { value: String(opt.id ?? opt.value), label: opt.name ?? opt.label };
    }
    return { value: String(opt), label: String(opt) };
  });

  const selectedOption = formattedOptions.find((opt) => opt.value === String(value));

  const handleSelect = (optionValue) => {
    if (onChange) {
      onChange(optionValue);
    }
    setIsOpen(false);
  };

  return (
    <div className={`relative w-full ${className}`} ref={dropdownRef}>
      {label && (
        <label className="block text-xs font-bold text-slate-700 mb-2">
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 bg-slate-50 border transition-all duration-200 rounded-xl text-sm flex items-center justify-between text-left ${
          isOpen
            ? 'border-indigo-600 ring-4 ring-indigo-600/10 bg-white shadow-sm'
            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-100/70'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        <span
          className={`block truncate font-medium ${
            selectedOption ? 'text-slate-900 font-semibold' : 'text-slate-400'
          }`}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-slate-400 transition-transform duration-200 shrink-0 ml-2 ${
            isOpen ? 'rotate-180 text-indigo-600' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 mt-1.5 w-full bg-white border border-slate-200/80 rounded-2xl shadow-xl py-1.5 max-h-60 overflow-y-auto focus:outline-none animate-in fade-in-50 zoom-in-95 duration-150">
          {formattedOptions.length === 0 ? (
            <div className="px-4 py-3 text-xs text-slate-400 text-center font-medium">
              No options available
            </div>
          ) : (
            formattedOptions.map((opt) => {
              const isSelected = String(value) === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleSelect(opt.value)}
                  className={`w-full px-4 py-2.5 text-xs sm:text-sm text-left transition-colors flex items-center justify-between font-medium ${
                    isSelected
                      ? 'bg-indigo-50/80 text-indigo-700 font-bold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span className="truncate">{opt.label}</span>
                  {isSelected && (
                    <Check className="h-4 w-4 text-indigo-600 shrink-0 ml-2" />
                  )}
                </button>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
