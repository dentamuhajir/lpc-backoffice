import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="layout-wrapper layout-static">
            <Header/>
            <Sidebar/>
            <div className="layout-main-container">
                <div className="layout-main">
                    { children }
                </div>
            </div>
        </div>
    );
  }