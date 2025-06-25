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
                {/* <li>
                <button className="p-link layout-topbar-button">
                    <i className="pi pi-calendar"></i>
                    <span>Events</span>
                </button>
                </li> */}
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
                        <i className="pi pi-fw pi-shopping-bag"></i>
                        <span>Dashboard</span>
                        </a>
                    </li>
                    </ul>
                </li>

                {/* UI Components */}
                <li className="layout-menuitem-category">
                    <div className="layout-menuitem-root-text">General Settings</div>
                    <ul>
                    <li>
                        <a href="/demo/formlayout" className="p-ripple"><i className="pi pi-fw pi-home"></i><span>Home</span></a></li>
                    <li>
                        <a href="/demo/input" className="p-ripple"><i className="pi pi-fw pi-users"></i><span>User</span></a></li>
                    <li><a href="/demo/floatlabel" className="p-ripple"><i className="pi pi-fw pi-bookmark"></i><span>Product Information</span></a></li>
                    <li><a href="/demo/tree" className="p-ripple"><i className="pi pi-fw pi-book"></i><span>Artikel</span></a></li>
                    <li><a href="/demo/panel" className="p-ripple"><i className="pi pi-fw pi-tablet"></i><span>Promo</span></a></li>
                    <li><a href="/demo/invalidstate" className="p-ripple"><i className="pi pi-fw pi-exclamation-circle"></i><span>Tentang Kami</span></a></li>
                    <li><a href="/demo/button" className="p-ripple"><i className="pi pi-fw pi-mobile"></i><span>Syarat & Ketentuan</span></a></li>
                    <li><a href="/demo/table" className="p-ripple"><i className="pi pi-fw pi-table"></i><span>Kebijakan & Privasi</span></a></li>
                    <li><a href="/demo/list" className="p-ripple"><i className="pi pi-fw pi-list"></i><span>Faq</span></a></li>
                    {/* <li><a href="/demo/overlay" className="p-ripple"><i className="pi pi-fw pi-clone"></i><span>User Management</span></a></li>
                    <li><a href="/demo/menu" className="p-ripple"><i className="pi pi-fw pi-bars"></i><span>Navigasi</span></a></li> */}
                    </ul>
                </li>

                {/* UI Blocks */}
                <li className="layout-menuitem-category">
                    <div className="layout-menuitem-root-text">Catalog</div>
                    <ul>
                    <li>
                        <a href="/demo/blocks" className="p-ripple">
                        <i className="pi pi-fw pi-building"></i><span>Katalog Perumahan</span>
                        {/* <span className="p-badge">NEW</span> */}
                        </a>
                    </li>
                    {/* <li>
                        <a href="https://www.primefaces.org/primeblocks-vue" className="p-ripple">
                        <i className="pi pi-fw pi-globe"></i><span>All Blocks</span>
                        </a>
                    </li> */}
                    </ul>
                </li>

                {/* Pages */}
                {/* <li className="layout-menuitem-category">
                    <div className="layout-menuitem-root-text">Pages</div>
                    <ul>
                    <li><a href="/demo/pages/crud" className="p-ripple"><i className="pi pi-fw pi-user-edit"></i><span>Crud</span></a></li>
                    <li><a href="/demo/pages/timeline" className="p-ripple"><i className="pi pi-fw pi-calendar"></i><span>Timeline</span></a></li>
                    <li><a href="/demo/pages/landing" className="p-ripple"><i className="pi pi-fw pi-calendar"></i><span>Landing</span></a></li>
                    <li><a href="/login" className="p-ripple"><i className="pi pi-fw pi-sign-in"></i><span>Login</span></a></li>
                    <li><a href="/notfound" className="p-ripple"><i className="pi pi-fw pi-exclamation-circle"></i><span>Not Found</span></a></li>
                    <li><a href="/demo/pages/empty" className="p-ripple"><i className="pi pi-fw pi-circle-off"></i><span>Empty</span></a></li>
                    </ul>
                </li> */}

                {/* Get Started */}
                {/* <li className="layout-menuitem-category">
                    <div className="layout-menuitem-root-text">Get Started</div>
                    <ul>
                    <li><a href="#" className="p-ripple"><i className="pi pi-fw pi-question"></i><span>Documentation</span></a></li>
                    <li><a href="https://github.com/who-jonson/sakai-nuxt" className="p-ripple"><i className="pi pi-fw pi-search"></i><span>View Source</span></a></li>
                    </ul>
                </li> */}

                </ul>
            </div>
            </div>
            <div className="layout-main-container">
                <div className="layout-main">

                    <div className="grid grid-cols-4 gap-4 mb-5">
                        <div className="bg-white p-10 rounded-2xl border-1 border-gray-200">bg-white p-10 rounded-2xl border-1 border-gray-200</div>
                        <div className="bg-white p-10 rounded-2xl border-1 border-gray-200">bg-white p-10 rounded-2xl border-1 border-gray-200</div>
                        <div className="bg-white p-10 rounded-2xl border-1 border-gray-200">bg-white p-10 rounded-2xl border-1 border-gray-200</div>
                        <div className="bg-white p-10 rounded-2xl border-1 border-gray-200">bg-white p-10 rounded-2xl border-1 border-gray-200</div>
                    </div>

                    <div className="grid grid-cols-1">
                        <div className="bg-white p-20 rounded-2xl border-1 border-gray-200">Content here</div>
                    </div>
                    {/* <div className="grid">
                        

                        <div className="col-12 lg:col-6 xl:col-3">
                            <p className="font-bold">Col 1</p>
                        </div>
                        <div className="col-12 lg:col-6 xl:col-3">
                            <p className="font-bold">Col 2</p>
                        </div>
                        <div className="col-12 lg:col-6 xl:col-3">
                            <p className="font-bold">Col 3</p>
                        </div>
                        <div className="col-12 lg:col-6 xl:col-3">
                            <p className="font-bold">Col 4</p>
                        </div>

                    </div> */}
                    {/* <div className="grid">
                        <div className="col-12 lg:col-6 xl:col-3">
                            <div className="card mb-0">
                                <div className="flex justify-content-between mb-3">
                                    <span className="block text-500 font-medium mb-3">Orders</span>
                                    <div className="text-900 font-medium text-xl"> 152 </div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width:'2.5rem', height:'2.5rem'}}>
                                    <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                                </div>
                            </div>
                            <span className="text-green-500 font-medium">24 new </span>
                            <span className="text-500">since last visit</span>
                        </div>

                        <div className="col-12 lg:col-6 xl:col-3">
                            <div className="card mb-0">
                                <div className="flex justify-content-between mb-3">
                                    <span className="block text-500 font-medium mb-3">Orders</span>
                                    <div className="text-900 font-medium text-xl"> 152 </div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width:'2.5rem', height:'2.5rem'}}>
                                    <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                                </div>
                            </div>
                            <span className="text-green-500 font-medium">24 new </span>
                            <span className="text-500">since last visit</span>
                        </div>

                        <div className="col-12 lg:col-6 xl:col-3">
                            <div className="card mb-0">
                                <div className="flex justify-content-between mb-3">
                                    <span className="block text-500 font-medium mb-3">Orders</span>
                                    <div className="text-900 font-medium text-xl"> 152 </div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width:'2.5rem', height:'2.5rem'}}>
                                    <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                                </div>
                            </div>
                            <span className="text-green-500 font-medium">24 new </span>
                            <span className="text-500">since last visit</span>
                        </div>

                        <div className="col-12 lg:col-6 xl:col-3">
                            <div className="card mb-0">
                                <div className="flex justify-content-between mb-3">
                                    <span className="block text-500 font-medium mb-3">Orders</span>
                                    <div className="text-900 font-medium text-xl"> 152 </div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width:'2.5rem', height:'2.5rem'}}>
                                    <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
                                </div>
                            </div>
                            <span className="text-green-500 font-medium">24 new </span>
                            <span className="text-500">since last visit</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        );
    
  }