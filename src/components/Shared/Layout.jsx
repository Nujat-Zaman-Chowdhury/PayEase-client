
import {Outlet} from "react-router-dom"
import Sidebar from "../Dashboard/Sidebar/Sidebar";
const Layout = () => {
    return (
        <div className="relative min-h-screen md:flex">
            {/* sidebar */}
            
                <Sidebar></Sidebar>
            
            {/* outlet */}
            <div className="flex-1 md:ml-64">
            <div className="p-5">
            <Outlet></Outlet>
            </div>
            </div>
        </div>
    );
};

export default Layout;