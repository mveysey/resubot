import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
//import './Contact.scss'

const Customize = () => {
    const navigate = useNavigate();
    const [newPosition, setNewPosition] = useState("");
    const [industry, setIndustry] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log({
            newPosition,
            industry,

        });
    };

    useEffect(() => {
        setIndustry(localStorage.getItem("industry"));
        setNewPosition(localStorage.getItem("newPosition"));
    }, []);

    const nextPage = () => {
        navigate("/contact")
    }
   

    return(

        <div class="wrapper">
		<div class="wrapper_inner">
			<div class="vertical_wrap">
			<div class="backdrop"></div>
			<div class="vertical_bar">
				
				<ul class="menu">
                    <li><a href="/Customize" class="active">
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
                <label htmlFor='newPosition'>New Position</label>
                <input
                    type ='text'
                    required name = 'newPosition'
                    id = 'newPosition'
                    value = {newPosition}
                    onChange={(e) => {setNewPosition(e.target.value);
                        localStorage.setItem("newPosition", e.target.value);}}
                />
                <div>
                    <div>
                        <label htmlFor="industry">Industry</label>
                        <input
                            type='text'
                            required anme = 'industry'
                            className="currentInput"
                            value={industry}
                            onChange={(e) => {setIndustry(e.target.value);
                                localStorage.setItem("industry", e.target.value);}}
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

export default Customize;