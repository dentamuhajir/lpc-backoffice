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

                    <div className="grid grid-cols-4 gap-4 mb-5">
                        <div className="bg-white p-10 rounded-2xl border-1 border-gray-200">bg-white p-10 rounded-2xl border-1 border-gray-200</div>
                        <div className="bg-white p-10 rounded-2xl border-1 border-gray-200">bg-white p-10 rounded-2xl border-1 border-gray-200</div>
                        <div className="bg-white p-10 rounded-2xl border-1 border-gray-200">bg-white p-10 rounded-2xl border-1 border-gray-200</div>
                        <div className="bg-white p-10 rounded-2xl border-1 border-gray-200">bg-white p-10 rounded-2xl border-1 border-gray-200</div>
                    </div>

                    <div className="grid grid-cols-1">
                        <div className="bg-white p-20 rounded-2xl border-1 border-gray-200">Content here</div>
                    </div>
                </div>
            </div>
        </div>
        );
  }