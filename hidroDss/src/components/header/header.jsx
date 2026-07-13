import "./header.css"


function Header() {
    return (
        <header className="header">
            <nav>
                <div id="header-content">
                    <h1 className="header-title">
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
    )
}
export default Header;