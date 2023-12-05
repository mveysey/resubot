import React from "react";
import "./Home.scss";
import HomeToolBar from "../../components/HomeToolBar/HomeToolBar.jsx";
import Profiles from "../../components/Profiles/Profiles.jsx";

const Home = () => {

    return (
        <div className="home-wrapper">
            <div className="home-content">
                {/*Dashboard Stats*/}
                <nav className="level is-mobile">
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Total Profiles</p>
                            <p className="title">12</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Total Resumes</p>
                            <p className="title">23</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Total Cover Letters</p>
                            <p className="title">13</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Completed Profiles </p>
                            <p className="title">60%</p>
                        </div>
                    </div>
                </nav>

                {/*Tool Bar*/}
                <div className="toolbar-bar"/>
                <HomeToolBar/>
                <div className="toolbar-bar"/>

                {/*Profiles*/}
                <Profiles/>
            </div>
        </div>
    );
};

export default Home;
