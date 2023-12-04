import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import './Education.scss'

const Education = () => {
    const navigate = useNavigate();
    const [degree, setDegree] = useState("");
    const [schoolName, setSchoolName] = useState("");
    const [schoolLocation, setSchoolLocation] = useState("");
    const [graduation, setGraduation,] = useState("");
    


    useEffect(() => {
        setDegree(localStorage.getItem("degree"));
        setSchoolLocation(localStorage.getItem("location"));
        setSchoolName(localStorage.getItem("schoolName"));
        setGraduation(localStorage.getItem("graduation"));
    }, []);

    const nextPage = () => {
        navigate("/skills")
    };

    return(

        <div className="wrapper">
		<div className="wrapper_inner">
			<div className="vertical_wrap">
			<div className="backdrop"></div>
			<div className="vertical_bar">
				
				<ul className="menu">
                    <li><a href="/Customize">
						<span className="text">Cutomize Resume</span>
					</a></li>
					<li><a href="/contact">
						<span className="text">Contact Info</span>
					</a></li>
					<li><a href="/experience">
						<span className="text">Experience</span>
					</a></li>
					<li><a href="/education" className="active">
						<span className="text">Education</span>
					</a></li>
					<li><a href="/skills">
						<span className="text">Skills</span>
					</a></li>
                    <li><a href="/projects">
						<span className="text">Projects</span>
					</a></li>
				</ul>

				
			</div>
		</div>
			<div className="container">
				<div className="content">
                <div></div>
                <form>
                    <div>
                        <label htmlFor="degree">Degree</label>
                        <input
                            type='text'
                            required name = 'degree'
                            className="currentInput"
                            value={degree}
                            onChange={(e) => {setDegree(e.target.value);
                                localStorage.setItem("degree", e.target.value);}}
                        />
                    </div>
                    <div>
                        <label htmlFor="schoolName">University Name</label>
                        <input
                            type='text'
                            required name = 'schoolName'
                            className="currentInput"
                            value={schoolName}
                            onChange={(e) => {setSchoolName(e.target.value);
                                localStorage.setItem("schoolName", e.target.value);}}
                        />

                    </div>
                    <div>
                        <label htmlFor="schoolLocation">University Location</label>
                        <input
                            type='text'
                            required name = 'schoolLocation'
                            className="currentInput"
                            value={schoolLocation}
                            onChange={(e) => {setSchoolLocation(e.target.value);
                                localStorage.setItem("schoolLocation", e.target.value);}}
                        />
                    </div>
                    <div>
                        <label htmlFor="graduation">Graduation Date</label>
                        <input
                            type='text'
                            required name = 'graduation'
                            className="currentInput"
                            value={graduation}
                            onChange={(e) =>{ setGraduation(e.target.value);
                                localStorage.setItem("graduation", e.target.value);}}
                        />
                    </div>
                <button onClick={nextPage}>
                    Next Step
                </button>
            </form>
            </div>
            </div>
		</div>
		</div>     
    );
};

export default Education;