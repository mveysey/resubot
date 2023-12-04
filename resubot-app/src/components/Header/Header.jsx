import React, {useMemo} from 'react';
import logo from '../../assets/logo.png'
import "./Header.scss";
import auth from "../../common/auth.js";

//Header components
const Header = ({version}) => {
    // open user profile panel method

    const user = useMemo(() => {
        return auth.getUser() || {};
    }, []);

    const toProfile = () => {
        console.log("s")
    }

    return (
        <div className="navbar is-dark" role="navigation" aria-label="main navigation">
            <a className="navbar-brand" href="/">
                {/*logo*/}
                <img src={logo} alt="JDP Logo" width="190" height="100"/>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </a>
            <div id="navbar-menu-id" className="navbar-menu">
                <div className="navbar-start">

                    <a href="/home" className="navbar-item">
                        Home
                    </a>

                    <a href="/chatbot" className="navbar-item">
                        Chatbot
                    </a>

                    <a href="/templates" className="navbar-item">
                        Templates
                    </a>

                    <a href="/resumes" className="navbar-item">
                        My Resume
                    </a>

                    <a href="/help" className="navbar-item">
                        Help
                    </a>

                    <a href="/preferences" className="navbar-item">
                        Preferences
                    </a>
                </div>
                <div className="navbar-end">


                    {user?.username ? (
                        <div className="navbar-item" onClick={toProfile}>
                            <span className="user-icon">  {user?.username.slice(0, 1)}</span>
                            <span className=" label is-size-6 has-text-light m-2">{user?.username} </span>
                        </div>
                    ) : (
                        <>
                            <div className="navbar-item">
                                {/* redirect to login page */}
                                <a href="/login" className="label is-size-6 has-text-light ml-2">Login</a>
                            </div>
                            <div className="navbar-item">
                                {/* redirect to Register page */}
                                <a href="/register" className="label is-size-6 has-text-light ml-2">Register</a>
                            </div>
                        </>
                    )}
                </div>
                <div className="navbar-item">
                    <label className="label is-size-5 has-text-light">
                        version {version ? version : '1.0.0'}
                    </label>
                </div>
            </div>
        </div>
    )
};

export default Header;