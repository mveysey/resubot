import {useState, useEffect, React} from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import './Experience.scss';

const Experience = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState("");
    const [company, setCompany] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [companyInfo, setCompanyInfo] = useState([{ role: "", position: "", start: "", location: "", description: "" }]);
    //const [loading, setLoading] = useState(false);

    /*const handleFormSubmit = (e) => {
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
    }*/
   
    // To save the user input
    useEffect(() => {
        const storedCompanyInfo = JSON.parse(localStorage.getItem("companyInfo"));
        if (storedCompanyInfo) {
            setCompanyInfo(storedCompanyInfo);
        }
    }, []);

    const nextPage = () => {
        navigate("/education")
    };
    

    //updates the state with user's input
    const handleAddCompany = () =>
        setCompanyInfo([...companyInfo, { role: "", position: "", start: "", location: "", description: "" }]);

    // removes a selected item from the list
    const handleRemoveCompany = (index) => {
        const list = [...companyInfo];
        list.splice(index, 1);
        setCompanyInfo(list);
    };

    // updates an item within the list
    const handleUpdateCompany = (e, index) => {
        const { name, value } = e.target;
        const list = [...companyInfo];
        list[index][name] = value;
        setCompanyInfo(list);
        localStorage.setItem("companyInfo", JSON.stringify(list));
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
					<li><a href="/experience" className="active">
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
                {companyInfo.map((company, index) => (
                    <div className="nestedContainer" key={index}>
                        <div className="companies">
                            <label htmlFor="role">Position</label>
                            <input
                                type="text"
                                required name = 'role'
                                className="currentInput"
                                value={company.role}
                                    onChange={(e) => {handleUpdateCompany(e, index);
                                        localStorage.setItem(companyInfo, e.target.value);}}
                            />
                        </div>
                        <div className="companies">
                            <label htmlFor="position">Position</label>
                            <input
                                type="text"
                                name="position"
                                required onChange={(e) => handleAddCompany(e, index)}
                            />
                        </div>
                        <div className="verticalcontainer">
                            <div className="companies">
                                <label htmlFor="position">Date or Date Range</label>
                                <input
                                    type="text"
                                    name="position"
                                    placeholder="May 23 - Present"
                                    className="subInput"
                                    required onChange={(e) => handleAddCompany(e, index)}
                                />
                            </div>
                            <div className="companies">
                                <label htmlFor="position">Location</label>
                                <input
                                    type="text"
                                    name="position"
                                    className="subInput"
                                    required onChange={(e) => handleAddCompany(e, index)}
                                />
                            </div>
                        </div>
                        <div className="companies">
                            <label htmlFor="position">Description of Your Position</label>
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

export default Experience;