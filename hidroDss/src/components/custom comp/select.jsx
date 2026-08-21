import React, { useState, useEffect, useRef } from "react";

function Select({
    options = [],
    value = null,
    onChange,
    placeholder = "Select an option",
    label,
    error,
    width = "w-full",
    disabled = false
}) {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);

    const selectedOption = options.find((opt) => opt.value === value);

    const toggleDropdown = () => {
        if (!disabled) setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        if (onChange) {
            onChange(option.value);
        }
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={`relative font-sans select-none ${width} ${isOpen ? 'z-50' : 'z-0'}`} ref={selectRef}>
            {label && (
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">
                    {label}
                </label>
            )}

            <button
                type="button"
                onClick={toggleDropdown}
                disabled={disabled}
                className={`flex w-full items-center justify-between rounded-xl border bg-white px-4 py-3 text-left text-sm font-medium transition-all duration-200 outline-none
          ${disabled ? "bg-slate-50 text-slate-400 border-slate-200 cursor-not-allowed" : ""}
          ${!disabled && isOpen
                        ? "border-indigo-600 ring-4 ring-indigo-600/15"
                        : error
                            ? "border-red-500 text-slate-800"
                            : "border-slate-200 text-slate-700 hover:border-slate-300"
                    }`}
            >
                {selectedOption ? selectedOption.label : placeholder}
            </button>
            {isOpen && (
                <div className="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-lg border border-slate-200 py-1 overflow-hidden">
                    {options.length > 0 ? (
                        options.map((option) => (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => handleOptionClick(option)}
                                className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-slate-50
                                    ${value === option.value ? "bg-indigo-50 text-indigo-700 font-medium" : "text-slate-700"}
                                `}
                            >
                                {option.label}
                            </button>
                        ))
                    ) : (
                        <div className="px-4 py-3 text-sm text-slate-500 text-center">
                            No options available
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Select;
