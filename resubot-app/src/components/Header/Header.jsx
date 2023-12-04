import React, {useMemo, useState} from 'react';
import logo from '../../assets/logo.png'
import "./Header.scss";
import auth from "../../common/auth.js";
import SlidingPane from "react-sliding-pane";
import UserProfile from "../UserProfile/UserProfile.jsx";

//Header components
const Header = ({version}) => {
    // open user profile panel method

    let user = useMemo(() => {
        return auth.getUser() || {};
    }, []);

    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
    });


    return (
        <>
            <SlidingPane
                closeIcon={<div>x</div>}
                className="section panel"
                overlayClassName="overlay"
                isOpen={state.isPaneOpen}
                width="500px"
                onRequestClose={() => {setState({isPaneOpen: false});}}
            >
               <UserProfile user={user} close={() => {setState({isPaneOpen: false});}}/>
            </SlidingPane>
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
                            <div className="navbar-item" onClick={() => setState({isPaneOpen: true})}>
                                <span className="user-icon">  {user?.username.slice(0, 1)}</span>
                                <span className=" label is-size-6 has-text-light m-2">{user?.username.slice(0, 10)} </span>
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
        </>
    )
};

export default Header;