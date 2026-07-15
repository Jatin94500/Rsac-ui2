import "./header.css"
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header({ onToggleSidebar }) {
    return (
        <header className="header">
            <nav className="header-nav">
                <button className="header-hamburger" onClick={onToggleSidebar}>
                    <MenuIcon className="h-6 w-6" />
                </button>
                <div className="header-content">
                    <h1 id="header-title">
                        <span style={{ color: "blue" }}>HYDROLOGY</span>
                        <span style={{ color: "green" }}>DSS</span>
                        <span style={{ color: "blue" }}>PLATFORM</span>
                    </h1>
                    <h3 id="header-subtitle">
                        <span style={{ color: "blue" }}>Smart Decision </span>
                        <span style={{ color: "blue" }}>Sustainable Water Future</span>
                    </h3>
                </div>

                <div className="ml-auto flex gap-5">
                    <div className="flex items-center gap-2 rounded-md border border-gray-400 p-2">
                        <img className="w-10 h-10" src="/sunrise.png"></img>
                        <div className='flex flex-col justify-center '>
                            <span className="">32°C</span>
                            <span className="text-xs text-gray-500">Partly Cloude</span>
                        </div>

                    </div>
                    <div className="notification">
                        <NotificationsIcon className='h-6 w-6 mt-4 ' />
                    </div>
                    <div >
                        <HelpIcon className='h-6 w-6 mt-4' />
                    </div>
                    <div className="flex items-center gap-2 rounded-md border border-gray-400 p-2">
                        <div>
                            <AccountCircleIcon className='h-6 w-6 mt-2' />
                        </div>
                        <div className='flex flex-col justify-center '>
                            <span className="font-bold"> Admin User </span>
                            <span className="text-sm text-gray-500"> Administrator </span>
                        </div>
                    </div>

                </div>
            </nav>

        </header>
    )
}
export default Header;