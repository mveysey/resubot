import React, {useState} from "react";
import axios from "axios";
import "./Home.scss";
import HomeToolBar from "../../components/HomeToolBar/HomeToolBar.jsx";
import Profiles from "../../components/Profiles/Profiles.jsx";

const Home = () => {
    const [fullName, setFullName] = useState("");
    const [currentPosition, setCurrentPosition] = useState("");
    const [currentLength, setCurrentLength] = useState(1);
    const [currentTechnologies, setCurrentTechnologies] = useState("");
    const [companyInfo, setCompanyInfo] = useState([{name: "", position: ""}]);

    const handleAddCompany = () =>
        setCompanyInfo([...companyInfo, {name: "", position: ""}]);

    const handleRemoveCompany = (index) => {
        const list = [...companyInfo];
        list.splice(index, 1);
        setCompanyInfo(list);
    };

    const handleUpdateCompany = (e, index) => {
        const {name, value} = e.target;
        const list = [...companyInfo];
        list[index][name] = value;
        setCompanyInfo(list);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("fullName", fullName);
        formData.append("currentPosition", currentPosition);
        formData.append("currentLength", currentLength);
        formData.append("currentTechnologies", currentTechnologies);
        formData.append("workHistory", JSON.stringify(companyInfo));
        axios
            .post("http://localhost:5000/resume/create", formData, {})
            .then((res) => {
                if (res.data.message) {
                    console.log(res.data.data);
                }
            })
            .catch((err) => console.error(err));
    };

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
