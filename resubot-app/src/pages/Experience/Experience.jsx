import React, { useState } from "react";
import Loading from "../Loading/Loading";
import './Experience.scss';

const Experience = () => {
    const [role, setRole] = useState("");
    const [company, setCompany] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [companyInfo, setCompanyInfo] = useState([{ role: "", position: "", start: "", end: "", location: "", description: "" }]);
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

    if (loading) {
        return <Loading />;
    }


    //👇🏻 updates the state with user's input
    const handleAddCompany = () =>
        setCompanyInfo([...companyInfo, { role: "", position: "", start: "", end: "", location: "", description: "" }]);

    //👇🏻 removes a selected item from the list
    const handleRemoveCompany = (index) => {
        const list = [...companyInfo];
        list.splice(index, 1);
        setCompanyInfo(list);
    };
    //👇🏻 updates an item within the list
    const handleUpdateCompany = (e, index) => {
        const { name, value } = e.target;
        const list = [...companyInfo];
        list[index][role] = value;
        setCompanyInfo(list);
    };
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
            <form>
                {companyInfo.map((company, index) => (
                    <div class="nestedContainer" key={index}>
                        <div className="companies">
                            <label htmlFor="name">COMPANY NAME</label>
                            <input
                                type="text"
                                name="name"
                                required onChange={(e) => handleUpdateCompany(e, index)}
                            />
                        </div>
                        <div className="companies">
                            <label htmlFor="position">POSITION NAME</label>
                            <input
                                type="text"
                                name="position"
                                required onChange={(e) => handleAddCompany(e, index)}
                            />
                        </div>
                        <div className="verticalcontainer">
                            <div className="companies">
                                <label htmlFor="position">StART DATE</label>
                                <input
                                    type="text"
                                    name="position"
                                    className="subInput"
                                    required onChange={(e) => handleAddCompany(e, index)}
                                />
                            </div>
                            <div className="companies">
                                <label htmlFor="position">END DATE</label>
                                <input
                                    type="text"
                                    name="position"
                                    className="subInput"
                                    required onChange={(e) => handleAddCompany(e, index)}
                                />
                            </div>
                            <div className="companies">
                                <label htmlFor="position">LOCATION</label>
                                <input
                                    type="text"
                                    name="position"
                                    className="subInput"
                                    required onChange={(e) => handleAddCompany(e, index)}
                                />
                            </div>
                        </div>
                        <div className="companies">
                            <label htmlFor="position">DESCRIPTION OF YOUR ROLE</label>
                            <textarea
                                type="text"
                                name="position"
                                required onChange={(e) => handleAddCompany(e, index)}
                            />
                        </div>


                        <div className='btn__group'>
                        {companyInfo.length - 1 === index && companyInfo.length < 4 && (
                            <button id='addBtn' onClick={handleAddCompany}>
                                Add
                            </button>
                        )}
                        {companyInfo.length > 1 && (
                            <button id='deleteBtn' onClick={() => handleRemoveCompany(index)}>
                                Del
                            </button>
                        )}

                        </div>
                    </div>
                ))}
                
                <button>SAVE EXPERIENCE</button>
            </form>
            </div>
        </div>
        </div>
    </div>
    );
};

export default Experience;