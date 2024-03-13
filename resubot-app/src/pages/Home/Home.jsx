import React from "react";
import "./Home.scss";
import HomeToolBar from "../../components/HomeToolBar/HomeToolBar.jsx";
import Profiles from "../../components/Profiles/Profiles.jsx";

const Home = () => {

    return (
        <div className="home-wrapper">
            <div className="horizontal_wrap">
				
				<ul className="profile-menu">
                    <li><a href="/home" className="resume active"><strong>My Resume</strong>
					</a></li>
					<li><a href="/coverletter" className="coverletter">
						<span className="text"><strong>My Cover Letter</strong></span>
					</a></li>
				</ul>
		    </div>
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
                </nav>

                <div className="toolbar-bar"/>

                <div className="hometoolbar-wrapper">
            <nav className="level">
                <div className="level-left">
                    <div className="level-item">
                        <p className="title is-4">
                            <a href="/contact" className="new-button button is-info">New Resume 
                        </a>
                        </p>
                    </div>
                    
                </div>
                <div className="level-right">
                    <div className="level-item ml-6">
                        <div className="field has-addons">
                            <p className="control">
                                <input className="input" type="text" placeholder="Find a resume..."/>
                            </p>
                            <p className="control">
                                <button className="button ">
                                    Search
                                </button>
                            </p>
                        </div>
                    </div>
                    
                </div>
            </nav>
            </div>
            <div className="toolbar-bar"/>
                
                

            </div>
        </div>
    );
};

export default Home;
