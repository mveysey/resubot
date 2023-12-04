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

        <div class="wrapper">
		<div class="wrapper_inner">
			<div class="vertical_wrap">
			<div class="backdrop"></div>
			<div class="vertical_bar">
				
				<ul class="menu">
                    <li><a href="/Customize">
						<span class="text">Cutomize Resume</span>
					</a></li>
					<li><a href="/contact">
						<span class="text">Contact Info</span>
					</a></li>
					<li><a href="/experience">
						<span class="text">Experience</span>
					</a></li>
					<li><a href="/education">
						<span class="text">Education</span>
					</a></li>
					<li><a href="/skills">
						<span class="text">Skills</span>
					</a></li>
					<li><a href="/projects"  class="active">
						<span class="text">Projects</span>
					</a></li>
				</ul>

				
			</div>
		</div>
			<div class="container">
				<div class="content">
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