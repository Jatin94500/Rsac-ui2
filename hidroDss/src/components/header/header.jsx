import "./header.css"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';


const [isMenuOpen, setIsMenuOpen] = useState(false);
function Header() {

    return (
        <>
            <header className="header">
                <nav className="header-nav">
                    <button onClick={() => setIsMenuOpen(true)}>
                        <MenuIcon className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" />
                    </button>

                    <div
                        on onClick={() => setIsMenuOpen(false)}
                        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                            }`} />




                    <div className="header-content">
                        <h1 id="header-title">
                            <span style={{ color: "blue", }}>HYDROLOGY</span>
                            <span style={{ color: "green" }}>DSS</span>
                            <span style={{ color: "blue" }}>PLATFORM</span>
                        </h1>
                        <h3 id="header-subtitle">
                            <span style={{ color: "blue" }}>Smart Decision </span><span style={{ color: "blue" }}>Sustainable Water Future</span>
                        </h3>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header;