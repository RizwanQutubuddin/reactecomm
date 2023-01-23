import React from "react";
import Footer from "./Footer";
import Navbar from './Navbar';
import Sidebar from "./Sidebar";
import '../../assets/admin/css/styles';
import '../../assets/admin/js/scripts';

const MasterLayout = () => { 
    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar/>
                </div>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    Master file
                </main>
                <Footer/>
            </div>
        </div>
    )
}
export default MasterLayout;