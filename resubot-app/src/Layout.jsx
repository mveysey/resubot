import React from "react";
import Router from "./Router";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//Layout of the entire application
const Layout = () =>
    (
        <div className="layout-wrapper">
            <div className="layout-content-main">
                <Header
                    // user={user}
                />
                <Router/>
                <Footer/>
            </div>
        </div>
    )


export default Layout