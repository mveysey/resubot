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
          <a className='sidebar' onClick={() => setIsOpen(!isOpen)} href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg></a>
          <a className="navbar-item" href="/chatbot">Chatbot</a>
          <a className="navbar-item" href="/profile_resume">Profile</a>
          <a className="navbar-item" href="/help">Help</a>
          <div className='vl'></div>
          
          <div className="navbar-end">
            {user?.username ? (
              <div  onClick={() => setState({ isPaneOpen: true })}>
                <span className="user-icon">{user?.username.slice(0, 1)}</span>
                <span>{user?.username.slice(0, 10)}</span>
              </div>
            ) : (
              <>
              <a className="navbar-item login-link " href="/login">Login</a>
              <a className="navbar-item register-link" href="/register">Register</a>
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
