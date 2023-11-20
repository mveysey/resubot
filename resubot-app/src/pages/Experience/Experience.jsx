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
        <div>
            <div id="navbar-menu-id" className="navbar-menu">
                <div className="navbar-start">

                    <a href="/contact" className="navbar-item">
                        PERSONAL INFO
                    </a>

                    <a href="/experience" className="navbar-item">
                        EXPERIENCE
                    </a>

                    <a href="/education" className="navbar-item">
                        EDUCATION
                    </a>

                    <a href="/skills" className="navbar-item">
                        SKILLS
                    </a>
                </div>
            </div>
            <form
                onSubmit= {handleFormSubmit}
                method = 'POST'
                encType = 'multipart/form-data'>
                <lable htmlFor='role'>Role</lable>
                <input
                    type ='text'
                    required name = 'role'
                    id = 'role'
                    value = {role}
                    onChange={(e) => setRole(e.target.value)}
                />
                <div>
                    <div>
                        <label htmlFor="company">Company Name</label>
                        <input
                            type='text'
                            required anme = 'company'
                            className="currentInput"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="startDate">Start Date</label>
                        <input
                            type='text'
                            required name = 'startDate'
                            className="currentInput"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />

                    </div>
                    <div>
                        <label htmlFor="endDate">End Date</label>
                        <input
                            type='text'
                            required name = 'endDate'
                            className="currentInput"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="location">Company's Location</label>
                        <input
                            type='text'
                            required name = 'location'
                            className="currentInput"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description of Your Role</label>
                        <input
                            type='text'
                            required name = 'description'
                            className="currentInput"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                <button>SAVE EXPERIENCE</button>
            </form>
        </div>
    );
};

export default Experience;