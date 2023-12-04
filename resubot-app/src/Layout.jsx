import React, {useMemo} from "react";
import Router from "./Router";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import auth from "./common/auth.js";

//Layout of the entire application
const Layout = () => {
    return (
        <div className="layout-wrapper">
            <div className="layout-content-main">
                <Header version={"1.0"}/>
                <Router/>
                <Footer/>
            </div>
        </div>
    )
}


export default Layout