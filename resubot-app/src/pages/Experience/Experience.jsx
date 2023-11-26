import React, {useState} from "react";
import Loading from "../Loading/Loading";

const Experience = () => {
    const [role, setRole] = useState("");
    const [company, setCompany] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log({
            role,
            company,
            startDate,
            endDate,
            location,
            description,
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
					<li><a href="/experience" class="active">
						<span class="text">Experience</span>
					</a></li>
					<li><a href="/education">
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
            <form
                onSubmit= {handleFormSubmit}
                method = 'POST'
                encType = 'multipart/form-data'>
                <div>
                    <label htmlFor='role'>ROLE</label>
                    <input
                        type ='text'
                        required name = 'role'
                        className="currentInput"
                        value = {role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                </div>
                    <div>
                        <label htmlFor="company">COMPANY NAME</label>
                        <input
                            type='text'
                            required anme = 'company'
                            className="currentInput"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="startDate">START DATE</label>
                        <input
                            type='text'
                            required name = 'startDate'
                            className="currentInput"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />

                    </div>
                    <div>
                        <label htmlFor="endDate">END DATE</label>
                        <input
                            type='text'
                            required name = 'endDate'
                            className="currentInput"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="location">COMPANY'S LOCATION</label>
                        <input
                            type='text'
                            required name = 'location'
                            className="currentInput"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">DESCRITPION OF YOUR ROLE</label>
                        <input
                            type='text'
                            required name = 'description'
                            className="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                <button>SAVE EXPERIENCE</button>
            </form>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Experience;