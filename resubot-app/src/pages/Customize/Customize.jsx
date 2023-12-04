import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
//import './Contact.scss'

const Customize = () => {
    const navigate = useNavigate();
    const [newPosition, setNewPosition] = useState("");
    const [industry, setIndustry] = useState("");
    useEffect(() => {
        setIndustry(localStorage.getItem("industry"));
        setNewPosition(localStorage.getItem("newPosition"));
    }, []);

    const nextPage = () => {
        navigate("/contact")
    }
   

    return(

        <div className="wrapper">
		<div className="wrapper_inner">
			<div className="vertical_wrap">
			<div className="backdrop"></div>
			<div className="vertical_bar">
				
				<ul className="menu">
                    <li><a href="/Customize" className="active">
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
					<li><a href="/projects">
						<span className="text">Projects</span>
					</a></li>
				</ul>

				
			</div>
		</div>
			<div className="container">
				<div className="content">
                <form>
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