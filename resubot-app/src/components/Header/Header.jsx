import React, { useMemo, useState } from 'react';
import logo from '../../assets/logo.png';
import "./Header.scss";
import auth from "../../common/auth.js";
import SlidingPane from "react-sliding-pane";
import UserProfile from "../UserProfile/UserProfile.jsx";

const Header = ({ version }) => {
  const [isOpen, setIsOpen] = useState(false);

  let user = useMemo(() => auth.getUser() || {}, []);

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
        onRequestClose={() => setState({ isPaneOpen: false })}
      >
        <UserProfile user={user} close={() => setState({ isPaneOpen: false })} />
      </SlidingPane>
      <nav className="navbar">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Logo" width="190" height="100" />
        </a>
        <div className={`nav-items ${isOpen ? 'open' : ''}`}>
          <a className="navbar-item" href="/chatbot">Chatbot</a>
          <a className="navbar-item" href="/home">Profile</a>
          <a className="navbar-item" href="/contact">Help</a>
          <div className="navbar-end">
            {user?.username ? (
              <div className="navbar-item" onClick={() => setState({ isPaneOpen: true })}>
                <span className="user-icon">{user?.username.slice(0, 1)}</span>
                <span>{user?.username.slice(0, 10)}</span>
              </div>
            ) : (
              <>
                <div className="navbar-item">
                  <a href="/login">Login</a>
                </div>
                <div className="navbar-item">
                  <a href="/register">Register</a>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="burger" onClick={() => setIsOpen(!isOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </>
  );
};

export default Header;
