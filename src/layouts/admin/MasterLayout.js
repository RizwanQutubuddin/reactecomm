import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from '../../routes/routes';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const MasterLayout = () => { 
    return (
        <div className="sb-nav-fixed">
        <Navbar/>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <Sidebar/>
            </div>
            <div id="layoutSidenav_content">
                    <main>
                        <Routes>
                            {
                                routes.map((route, idx) => {
                                    return (
                                        <Route key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            element={route.element}
                                        />
                                    )
                                })
                            }
                        </Routes>
                </main>
                <Footer/>
            </div>
        </div>
    </div>
    )
}

export default MasterLayout;