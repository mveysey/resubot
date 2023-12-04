import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import './Skills.scss'

const Skills = () => {
    const navigate = useNavigate();
    const [skills, setSkills] = useState("");

    

    
    useEffect( () => {
        setSkills(localStorage.getItem("skills"));
    }, [])
    const nextPage = () => {
        navigate("/projects")
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
					<li><a href="/education">
						<span className="text">Education</span>
					</a></li>
					<li><a href="/skills" className="active">
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
                <form>
                <div>
                    <div>
                        <label htmlFor="skills">Enter the Skills You Possess</label>
                        <textarea
                            type='text'
                            required anme = 'skills'
                            className="currentInput"
                            value={skills}
                            onChange={(e) => {setSkills(e.target.value);
                                localStorage.setItem("skills", e.target.value);}}
                        />
                    </div>
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

export default Skills;