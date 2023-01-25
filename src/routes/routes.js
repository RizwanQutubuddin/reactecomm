import React from "react";
import Dashboard from "../components/admin/Dashboard";
import NotFound from "../components/admin/NotFound";
import Profile from "../components/admin/Profile";

const Routes=[
    { name: 'dashboard',exact:true, element: <Dashboard/> , path:'/admin/dashboard/' },
    { name: 'default',exact:true, element: <Dashboard/> , path:'/' },
    { name:'profile', exact:true, element: <Profile/>, path:'/admin/profile/' },
    { name:'page not found', exact:true, element: <NotFound/>, path:'/*' }
]

export default Routes;