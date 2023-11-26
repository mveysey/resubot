import React, {useState} from "react";
import Loading from "../Loading/Loading";
import './Education.scss'

const Education = () => {
    const [degree, setDegree] = useState("");
    const [schoolName, setSchoolName] = useState("");
    const [schoolLocation, setSchoolLocation] = useState("");
    const [graduation, setGraduation,] = useState("");
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log({
            degree,
            schoolName,
            schoolLocation,
            graduation,
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
					<li><a href="/contact">
						<span class="text">Personal Info</span>
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
					<li><a href="#">
						<span class="text">Rewards</span>
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
                        <label htmlFor="degree">DEGREE</label>
                        <input
                            type='text'
                            required anme = 'degree'
                            className="currentInput"
                            value={degree}
                            onChange={(e) => setDegree(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="schoolName">UNIVERSITY NAME</label>
                        <input
                            type='text'
                            required anme = 'schoolName'
                            className="currentInput"
                            value={schoolName}
                            onChange={(e) => setSchoolName(e.target.value)}
                        />

                    </div>
                    <div>
                        <label htmlFor="schoolLocation">UNIVERSITY LOCATIONL</label>
                        <input
                            type='text'
                            required anme = 'schoolLocation'
                            className="currentInput"
                            value={schoolLocation}
                            onChange={(e) => setSchoolLocation(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="graduation">GRADUATION DATE</label>
                        <input
                            type='text'
                            required anme = 'graduation'
                            className="currentInput"
                            value={graduation}
                            onChange={(e) => setGraduation(e.target.value)}
                        />
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

export default Education;