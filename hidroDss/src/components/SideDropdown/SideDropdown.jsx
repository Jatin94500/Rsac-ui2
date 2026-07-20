import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SideDropdown({ title, children, icon }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative w-full">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-1 px-2 text-white hover:bg-slate-700 rounded-md transition-colors bg-[#102c51]"
            >
                <div className="flex items-center gap-2 text-xs">
                    {icon && <span>{icon}</span>}
                    <span className="text-[11px]">{title}</span>
                </div>
                <ArrowForwardIosIcon className={`text-[10px] transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`} />
            </button>

            <div
                className={`
                    w-full bg-slate-800 rounded-md overflow-hidden
                    transition-all duration-300 ease-in-out
                    ${isOpen ? 'max-h-60 opacity-100 mt-1' : 'max-h-0 opacity-0'}
                `}
            >
                <ul className="p-1 flex flex-col gap-1 ml-3">
                    {children}
                </ul>
            </div>
        </div>
    );
}

export default SideDropdown;