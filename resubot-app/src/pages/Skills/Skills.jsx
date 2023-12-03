import React, {useState} from "react";
import Loading from "../Loading/Loading";
import './Skills.scss'

const Skills = () => {
    const [skills, setSkills] = useState("");

    const [loading, setLoading] = useState(false);
    

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log({
            skills,

        });
        setLoading(true);
    };
    if(loading){
        return<Loading />;
    }


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
					<li><a href="/skills" class="active">
						<span class="text">Skills</span>
					</a></li>
					<li><a href="/projects">
						<span class="text">Projects</span>
					</a></li>
				</ul>

				
			</div>
		</div>
			<div class="container">
				<div class="content">
                <form 
                    onSubmit= {handleFormSubmit}
                    method = 'POST'
                    encType = 'multipart/form-data'>
                <div>
                    <div>
                        <label htmlFor="skills">Enter the Skills You Possess</label>
                        <textarea
                            type='text'
                            required anme = 'skills'
                            className="currentInput"
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                        />
                    </div>
                </div>
                <button>
                    SAVE PERSONAL INFO
                </button>
            </form>
            </div>
            </div>
		</div>
		</div>     
    );
};

export default Skills;