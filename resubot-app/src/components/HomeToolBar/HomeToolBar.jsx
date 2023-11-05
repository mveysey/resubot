import React from "react";
import './HomeToolbar.scss';
import {AiOutlineSearch} from "react-icons/ai";


//Error Page
const HomeToolBar = () =>
    (
        <div className="hometoolbar-wrapper">
            <nav className="level">
                <div className="level-left">
                    <div className="level-item">
                        <p className="title is-4">
                            <strong>My Profiles</strong>
                        </p>
                    </div>
                    <div className="level-item ml-6">
                        <div className="field has-addons">
                            <p className="control">
                                <input className="input" type="text" placeholder="Find a profile..."/>
                            </p>
                            <p className="control">
                                <button className="button is-primary">
                                    Search
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="level-right">
                    <p className="level-item"><strong>All</strong></p>
                    <p className="level-item"><a>Completed</a></p>
                    <p className="level-item"><a>Drafts</a></p>
                    <p className="level-item">
                        <a className="new-button button is-info">New Profile +
                        </a>
                    </p>
                </div>
            </nav>
        </div>
    )


export default HomeToolBar