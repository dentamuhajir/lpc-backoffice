import Link from 'next/link'
import React from 'react'

const Sidebar: React.FC = () => {
  return (
    <div className="layout-sidebar bg-white">
        <div className="layout-menu-container">
            <ul className="layout-menu">
            <li className="layout-menuitem-category">
                <div className="layout-menuitem-root-text">Home</div>
                <ul>
                <li>
                    <Link href="/dashboard" className="p-ripple router-link-active router-link-exact-active">
                        <i className="pi pi-fw pi-shopping-bag"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>
                </ul>
            </li>

            {/* UI Components */}
            <li className="layout-menuitem-category">
                <div className="layout-menuitem-root-text">General Settings</div>
                <ul>
                <li>
                    <a href="/demo/formlayout" className="p-ripple">
                    <i className="pi pi-fw pi-home"></i>
                    <span>Home</span>
                    </a>
                </li>
                <li>
                    <Link href="/dashboard/users" className="p-ripple">
                    <i className="pi pi-fw pi-users"></i>
                    <span>User</span>
                    </Link>
                </li>
                <li>
                    <a href="/demo/floatlabel" className="p-ripple">
                    <i className="pi pi-fw pi-bookmark"></i>
                    <span>Product Information</span>
                    </a>
                </li>
                <li>
                    <a href="/demo/tree" className="p-ripple">
                    <i className="pi pi-fw pi-book"></i>
                    <span>Artikel</span>
                    </a>
                </li>
                <li>
                    <a href="/demo/panel" className="p-ripple">
                    <i className="pi pi-fw pi-tablet"></i>
                    <span>Promo</span>
                    </a>
                </li>
                <li>
                    <a href="/demo/invalidstate" className="p-ripple">
                    <i className="pi pi-fw pi-exclamation-circle"></i>
                    <span>Tentang Kami</span>
                    </a>
                </li>
                <li>
                    <a href="/demo/button" className="p-ripple">
                    <i className="pi pi-fw pi-mobile"></i>
                    <span>Syarat & Ketentuan</span>
                    </a>
                </li>
                <li>
                    <a href="/demo/table" className="p-ripple">
                    <i className="pi pi-fw pi-table"></i>
                    <span>Kebijakan & Privasi</span>
                    </a>
                </li>
                <li>
                    <a href="/demo/list" className="p-ripple">
                    <i className="pi pi-fw pi-list"></i>
                    <span>Faq</span>
                    </a>
                </li>
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
                    <i className="pi pi-fw pi-building"></i>
                    <span>Katalog Perumahan</span>
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
  )
}

export default Sidebar