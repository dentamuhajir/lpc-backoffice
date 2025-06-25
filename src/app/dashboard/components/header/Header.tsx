import React from "react"

const Header: React.FC = () => {
    return ( 
            <div className="layout-topbar bg-white">
                <a href="/" className="router-link-active router-link-exact-active layout-topbar-logo">
                    <img alt="Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bank_Syariah_Indonesia.svg/1280px-Bank_Syariah_Indonesia.svg.png" />
                </a>                
                <button className="p-link layout-menu-button layout-topbar-button">
                    <i className="pi pi-bars"></i>
                </button>
                <button className="p-link layout-topbar-menu-button layout-topbar-button" data-pd-styleclass="true">
                    <i className="pi pi-ellipsis-v"></i>
                </button>
                <ul className="layout-topbar-menu hidden lg:flex origin-top">
                    <li>
                        <button className="p-link layout-topbar-button">
                            <i className="pi pi-cog"></i>
                            <span>Settings</span>
                        </button>
                    </li>
                    <li>
                        <button className="p-link layout-topbar-button">
                            <i className="pi pi-user"></i>
                            <span>Profile</span>
                        </button>
                    </li>
                </ul>
            </div>
        )
}

export default Header