import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SideDropdown({ title, children, icon, flyout = false }) {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef(null);
    const [coords, setCoords] = useState({ top: 0, left: 0 });

    useEffect(() => {
        if (isOpen && flyout && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setCoords({ top: rect.top, left: rect.right + 5 });
        }
    }, [isOpen, flyout]);

    return (
        <div className="relative w-full">
            <button 
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-2 px-4 text-white hover:bg-slate-700 rounded-full transition-colors bg-[#102c51] shadow-sm"
            >
                <div className="flex items-center gap-2 text-xs">
                    {icon && <span>{icon}</span>}
                    <span className="text-[12px] font-semibold">{title}</span>
                </div>
                <ArrowForwardIosIcon className={`text-[10px] transition-transform duration-200 ${isOpen && !flyout ? "rotate-90" : ""}`} />
            </button>

            {!flyout && (
                <div
                    className={`
                        w-full bg-[#0a1f3a] rounded-2xl overflow-hidden
                        transition-all duration-300 ease-in-out
                        ${isOpen ? 'max-h-[800px] opacity-100 mt-2' : 'max-h-0 opacity-0'}
                    `}
                >
                    <ul className="p-2 flex flex-col gap-1">
                        {children}
                    </ul>
                </div>
            )}

            {flyout && isOpen && createPortal(
                <div 
                    className="fixed z-[9999] bg-[#0a1f3a] rounded-xl shadow-lg p-2 min-w-[150px]"
                    style={{ top: coords.top, left: coords.left }}
                >
                    <div className="flex justify-between items-center mb-2 px-2 border-b border-slate-600 pb-1">
                        <span className="text-white text-xs font-bold">{title}</span>
                        <button onClick={() => setIsOpen(false)} className="text-white text-xs hover:text-red-400">X</button>
                    </div>
                    <ul className="flex flex-col gap-1">
                        {children}
                    </ul>
                </div>,
                document.body
            )}
        </div>
    );
}

export default SideDropdown;