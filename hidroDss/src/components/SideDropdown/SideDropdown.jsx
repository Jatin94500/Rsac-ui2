import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SideDropdown({ title, children, icon }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}>
            <button className="w-full flex items-center justify-between py-0.5 px-2  
            text-white hover:bg-slate-700 rounded-md transition-colors
            bg-[#102c51]">

                <div className="flex items-center gap-2 pb-0 pt-0 text-xs" >
                    {icon && <span>{icon}</span>}
                    <span className="text-[11px]">{title}</span>

                </div>
                <ArrowForwardIosIcon className="text-[2px]" />

            </button>


            <div
                className={`
                    absolute left-full top-0 ml-2 w-48 ml-2 mr-2 bg-slate-800 rounded-md shadow-lg border border-slate-700
                    transition-all duration-200 origin-left
                    ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
                `}
            >
                <ul className="p-1 flex flex-col gap-1">
                    {children}
                </ul>
            </div>
        </div>

    );

}
export default SideDropdown;