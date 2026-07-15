import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function SideDropdown({ title, children, icon }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}>
            <button className="w-full flex items-center justify-between p-3 text-white 
                hover:bg-slate-700 rounded-md transtion-colors">
                <div className="flex items-center gap-2" >
                    {icon && <span>{icon}</span>}
                    <span>{title}</span>

                </div>
                <ArrowForwardIosIcon className="text-[12px]" />

            </button>


            <div
                className={`
                    absolute left-full top-0 ml-2 w-48 bg-slate-800 rounded-md shadow-lg border border-slate-700
                    transition-all duration-200 origin-left
                    ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
                `}
            >
                <ul className="p-2 flex flex-col gap-1">
                    {children}
                </ul>
            </div>
        </div>

    );

}
export default SideDropdown;