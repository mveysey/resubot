import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import './Projects.scss'

const Projects = () => {
    const navigate = useNavigate();
    const [projectTitle, setProjectTitle] = useState("");
    const [projectDescription, setProjectDescription] = useState("");

    //const [loading, setLoading] = useState(false);
    

    useEffect( () => {
        setProjectDescription(localStorage.getItem("projectDescription"));
        setProjectTitle(localStorage.getItem("projectTitle"));
    })
    const nextPage = () => {
        navigate("/finalResume")
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
					<li><a href="/skills">
						<span className="text">Skills</span>
					</a></li>
					<li><a href="/projects"  className="active">
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
                        <label htmlFor="projectTitle">Give Your Project a Title</label>
                        <input
                            type='text'
                            required anme = 'projectTitle'
                            className="currentInput"
                            value={projectTitle}
                            onChange={(e) => {setProjectTitle(e.target.value);
                                localStorage.setItem("projectTitle", e.target.value);}}
                        />
                    </div>
                    <div>
                        <label htmlFor="projectDescription">Description of Your Project</label>
                        <textarea
                            type='text'
                            required anme = 'projectDescription'
                            className="currentInput"
                            value={projectDescription}
                            onChange={(e) => {setProjectDescription(e.target.value);
                                localStorage.setItem("projectDescription", e.target.value);}}
                        />
                    </div>
                   
                </div>
                <button onClick={nextPage}>
                    Review Resume
                </button>

            </form>
            </div>
            </div>
		</div>
		</div>     
    );
};

export default Projects;