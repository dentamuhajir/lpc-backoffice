export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="layout-wrapper layout-static">
            <div className="layout-topbar bg-white">
            <a
                href="/"
                className="router-link-active router-link-exact-active layout-topbar-logo"
            >
                <img alt="Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bank_Syariah_Indonesia.svg/1280px-Bank_Syariah_Indonesia.svg.png" />
            </a>

            <button className="p-link layout-menu-button layout-topbar-button">
                <i className="pi pi-bars"></i>
            </button>

            <button
                className="p-link layout-topbar-menu-button layout-topbar-button"
                data-pd-styleclass="true"
            >
                <i className="pi pi-ellipsis-v"></i>
            </button>

            <ul className="layout-topbar-menu hidden lg:flex origin-top">
                <li>
                <button className="p-link layout-topbar-button">
                    <i className="pi pi-calendar"></i>
                    <span>Events</span>
                </button>
                </li>
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
            <div className="layout-sidebar bg-white">
            <div className="layout-menu-container">
                <ul className="layout-menu">

                {/* Home */}
                <li className="layout-menuitem-category">
                    <div className="layout-menuitem-root-text">Home</div>
                    <ul>
                    <li>
                        <a href="/" className="p-ripple router-link-active router-link-exact-active">
                        <i className="pi pi-fw pi-home"></i>
                        <span>Dashboard</span>
                        </a>
                    </li>
                    </ul>
                </li>

                {/* UI Components */}
                <li className="layout-menuitem-category">
                    <div className="layout-menuitem-root-text">UI Components</div>
                    <ul>
                    <li><a href="/demo/formlayout" className="p-ripple"><i className="pi pi-fw pi-id-card"></i><span>Form Layout</span></a></li>
                    <li><a href="/demo/input" className="p-ripple"><i className="pi pi-fw pi-check-square"></i><span>Input</span></a></li>
                    <li><a href="/demo/floatlabel" className="p-ripple"><i className="pi pi-fw pi-bookmark"></i><span>Float Label</span></a></li>
                    <li><a href="/demo/invalidstate" className="p-ripple"><i className="pi pi-fw pi-exclamation-circle"></i><span>Invalid State</span></a></li>
                    <li><a href="/demo/button" className="p-ripple"><i className="pi pi-fw pi-mobile"></i><span>Button</span></a></li>
                    <li><a href="/demo/table" className="p-ripple"><i className="pi pi-fw pi-table"></i><span>Table</span></a></li>
                    <li><a href="/demo/list" className="p-ripple"><i className="pi pi-fw pi-list"></i><span>List</span></a></li>
                    <li><a href="/demo/tree" className="p-ripple"><i className="pi pi-fw pi-share-alt"></i><span>Tree</span></a></li>
                    <li><a href="/demo/panel" className="p-ripple"><i className="pi pi-fw pi-tablet"></i><span>Panel</span></a></li>
                    <li><a href="/demo/overlay" className="p-ripple"><i className="pi pi-fw pi-clone"></i><span>Overlay</span></a></li>
                    <li><a href="/demo/menu" className="p-ripple"><i className="pi pi-fw pi-bars"></i><span>Menu</span></a></li>
                    <li><a href="/demo/messages" className="p-ripple"><i className="pi pi-fw pi-comment"></i><span>Message</span></a></li>
                    <li><a href="/demo/file" className="p-ripple"><i className="pi pi-fw pi-file"></i><span>File</span></a></li>
                    <li><a href="/demo/chart" className="p-ripple"><i className="pi pi-fw pi-chart-bar"></i><span>Chart</span></a></li>
                    <li><a href="/demo/misc" className="p-ripple"><i className="pi pi-fw pi-circle-off"></i><span>Misc</span></a></li>
                    </ul>
                </li>

                {/* UI Blocks */}
                <li className="layout-menuitem-category">
                    <div className="layout-menuitem-root-text">UI Blocks</div>
                    <ul>
                    <li>
                        <a href="/demo/blocks" className="p-ripple">
                        <i className="pi pi-fw pi-eye"></i><span>Free Blocks</span>
                        <span className="p-badge">NEW</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.primefaces.org/primeblocks-vue" className="p-ripple">
                        <i className="pi pi-fw pi-globe"></i><span>All Blocks</span>
                        </a>
                    </li>
                    </ul>
                </li>

                {/* Pages */}
                <li className="layout-menuitem-category">
                    <div className="layout-menuitem-root-text">Pages</div>
                    <ul>
                    <li><a href="/demo/pages/crud" className="p-ripple"><i className="pi pi-fw pi-user-edit"></i><span>Crud</span></a></li>
                    <li><a href="/demo/pages/timeline" className="p-ripple"><i className="pi pi-fw pi-calendar"></i><span>Timeline</span></a></li>
                    <li><a href="/demo/pages/landing" className="p-ripple"><i className="pi pi-fw pi-calendar"></i><span>Landing</span></a></li>
                    <li><a href="/login" className="p-ripple"><i className="pi pi-fw pi-sign-in"></i><span>Login</span></a></li>
                    <li><a href="/notfound" className="p-ripple"><i className="pi pi-fw pi-exclamation-circle"></i><span>Not Found</span></a></li>
                    <li><a href="/demo/pages/empty" className="p-ripple"><i className="pi pi-fw pi-circle-off"></i><span>Empty</span></a></li>
                    </ul>
                </li>

                {/* Get Started */}
                <li className="layout-menuitem-category">
                    <div className="layout-menuitem-root-text">Get Started</div>
                    <ul>
                    <li><a href="#" className="p-ripple"><i className="pi pi-fw pi-question"></i><span>Documentation</span></a></li>
                    <li><a href="https://github.com/who-jonson/sakai-nuxt" className="p-ripple"><i className="pi pi-fw pi-search"></i><span>View Source</span></a></li>
                    </ul>
                </li>

                </ul>
            </div>
            </div>
        </div>
        );
    
  }