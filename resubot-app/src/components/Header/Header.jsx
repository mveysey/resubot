import React from 'react';
// import Panel from 'components/Panel';
// import UserProfile from 'components/UserProfile';\
import logo from '../../assets/logo.png'
import "./Header.scss";

//Header components
const Header = ({version}) => {
    //open user profile panel method
    // const toProfile = () => {
    //     Panel.open({
    //         component: UserProfile,
    //         props: {
    //             user: props.user
    //         },
    //         callback: data => {
    //             if (data === 'logout') {
    //                 props.history.go(0);
    //             }
    //         }
    //     });
    // };
    return (
        <div className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                {/*logo*/}
                <img src={logo} alt="JDP Logo" width="190" height="100"/>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbar-menu-id" className="navbar-menu">
                <div className="navbar-start">

                    <a className="navbar-item">
                        Home
                    </a>

                    <a className="navbar-item">
                        Chatbot
                    </a>

                    <a className="navbar-item">
                        Templates
                    </a>

                    <a className="navbar-item">
                        My Resume
                    </a>

                    <a className="navbar-item">
                        Help
                    </a>

                    <a className="navbar-item">
                        Preferences
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <label className="label is-size-6 has-text-light">
                            version {version ? version : '1.0.0'}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;