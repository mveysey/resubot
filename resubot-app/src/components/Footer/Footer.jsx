import React from 'react';
import "./Footer.scss";
import {BiSolidInfoCircle} from 'react-icons/bi'; //https://react-icons.github.io/react-icons/icons?name=bi

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-grid">
                {/* footer text */}
                <div className="start">
                    <a href="/">Mark Yu</a>
                    <a href="/">Madeline Veysey</a>
                    <a href="/">Dana Al-Kwifi</a>
                    <a href="/">Mahira Moftah</a>
                </div>
                {/* copyright info */}
                <div className="end">
                    <a href=""><BiSolidInfoCircle/></a>
                    <a href="">SE4450 Capstone Project</a>
                    <a href="https://github.com/zhenxiao-yu">Resubot Copyright © 2023 - 2024</a>
                    <a href="">Western University Software Engineering</a>
                </div>
            </div>
        </div>
    );

}

export default Footer;