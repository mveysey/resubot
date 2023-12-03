import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import './Education.scss'

const Education = () => {
    const navigate = useNavigate();
    const [degree, setDegree] = useState("");
    const [schoolName, setSchoolName] = useState("");
    const [schoolLocation, setSchoolLocation] = useState("");
    const [graduation, setGraduation,] = useState("");
    //const [loading, setLoading] = useState(false);
    

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log({
            degree,
            schoolName,
            schoolLocation,
            graduation,
        });
        //setLoading(true);
    };
    /*if(loading){
        return<Loading />;
    }*/

    const nextPage = () => {
        navigate("/skills")
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
					<li><a href="/education" class="active">
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
                <div></div>
                <form
                    onSubmit= {handleFormSubmit}
                    method = 'POST'
                    encType = 'multipart/form-data'>
                    <div>
                        <label htmlFor="degree">Degree</label>
                        <input
                            type='text'
                            required anme = 'degree'
                            className="currentInput"
                            value={degree}
                            onChange={(e) => setDegree(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="schoolName">University Name</label>
                        <input
                            type='text'
                            required anme = 'schoolName'
                            className="currentInput"
                            value={schoolName}
                            onChange={(e) => setSchoolName(e.target.value)}
                        />

                    </div>
                    <div>
                        <label htmlFor="schoolLocation">University Location</label>
                        <input
                            type='text'
                            required anme = 'schoolLocation'
                            className="currentInput"
                            value={schoolLocation}
                            onChange={(e) => setSchoolLocation(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="graduation">Graduation Date</label>
                        <input
                            type='text'
                            required anme = 'graduation'
                            className="currentInput"
                            value={graduation}
                            onChange={(e) => setGraduation(e.target.value)}
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