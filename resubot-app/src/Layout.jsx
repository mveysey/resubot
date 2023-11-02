import React from "react";
import Router from "./Router";

//Layout of the entire application
const Layout = () =>
    (
        <div className="layout-wrapper">
            <div className="layout-content-main">
                <Header user={user}/>
                <Router/>
                <Footer/>
            </div>
        </div>
    )


export default Layout