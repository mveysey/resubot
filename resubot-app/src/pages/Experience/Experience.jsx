import {useState, useEffect, React} from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import './Experience.scss';

const Experience = () => {
    const navigate = useNavigate();
    const [role1, setRole1] = useState("");
    const [company1, setCompany1] = useState("");
    const [date1, setDate1] = useState("");
    const [location1, setLocation1] = useState("");
    const [description1, setDescription1] = useState("");

    const [role2, setRole2] = useState("");
    const [company2, setCompany2] = useState("");
    const [date2, setDate2] = useState("");
    const [location2, setLocation2] = useState("");
    const [description2, setDescription2] = useState("");
    //const [companyInfo, setCompanyInfo] = useState([{ role: "", position: "", start: "", location: "", description: "" }]);
    //const [loading, setLoading] = useState(false);

   
    // To save the user input
    useEffect(() => {
        setRole1(localStorage.getItem("role1"));
        setCompany1(localStorage.getItem("company1"));
        setDate1(localStorage.getItem("date1"));
        setLocation1(localStorage.getItem('location1'));
        setDescription1(localStorage.getItem("description1"));

        setRole2(localStorage.getItem("role2"));
        setCompany2(localStorage.getItem("company2"));
        setDate2(localStorage.getItem("date2"));
        setLocation2(localStorage.getItem('location2'));
        setDescription2(localStorage.getItem("description2"));

    }, []);

    const nextPage = () => {
        navigate("/education")
    };
    

    /*//updates the state with user's input
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
    };*/


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
                    <div className="nestedContainer" >
                        <div className="companies">
                            <label htmlFor="role1">Position</label>
                            <input
                                type="text"
                                required name = 'role1'
                                className="currentInput"
                                value={role1}
                                    onChange={(e) => {setRole1(e.target.value);
                                        localStorage.setItem("role1", e.target.value);}}
                            />
                        </div>
                        <div className="companies">
                            <label htmlFor="company1">Company Name</label>
                            <input
                                type="text"
                                name="company1"
                                value={company1}
                                required onChange={(e) => {setCompany1(e.target.value);
                                        localStorage.setItem("company1", e.target.value);}}
                            />
                        </div>
                        <div className="verticalcontainer">
                            <div className="companies">
                                <label htmlFor="date1">Date or Date Range</label>
                                <input
                                    type="text"
                                    name="position"
                                    placeholder="May 23 - Present"
                                    className="subInput"
                                    value = {date1}
                                    required onChange={(e) => {setDate1(e.target.value);
                                        localStorage.setItem("date1", e.target.value);}}
                                />
                            </div>
                            <div className="companies">
                                <label htmlFor="location1">Location</label>
                                <input
                                    type="text"
                                    name="location1"
                                    className="subInput"
                                    value = {location1}
                                    required onChange={(e) => {setLocation1(e.target.value);
                                        localStorage.setItem("location1", e.target.value);}}
                                />
                            </div>
                        </div>
                        <div className="companies">
                            <label htmlFor="description1">Description of Your Position</label>
                            <textarea
                                type="text"
                                name="description1"
                                value = {description1}
                                    required onChange={(e) => {setDescription1(e.target.value);
                                        localStorage.setItem("description1", e.target.value);}}
                            />
                        </div>
                    </div>
                    <hr />

                    <div className="nestedContainer2 " >
                        <div className="companies">
                            <label htmlFor="role2">Position 2</label>
                            <input
                                type="text"
                                required name = 'role2'
                                className="currentInput"
                                value={role2}
                                    onChange={(e) => {setRole2(e.target.value);
                                        localStorage.setItem("role2", e.target.value);}}
                            />
                        </div>
                        <div className="companies">
                            <label htmlFor="company2">Company Name</label>
                            <input
                                type="text"
                                name="company2"
                                value={company2}
                                required onChange={(e) => {setCompany2(e.target.value);
                                        localStorage.setItem("company2", e.target.value);}}
                            />
                        </div>
                        <div className="verticalcontainer">
                            <div className="companies">
                                <label htmlFor="date2">Date or Date Range</label>
                                <input
                                    type="text"
                                    name="date2"
                                    placeholder="May 23 - Present"
                                    className="subInput"
                                    value = {date2}
                                    required onChange={(e) => {setDate2(e.target.value);
                                        localStorage.setItem("date2", e.target.value);}}
                                />
                            </div>
                            <div className="companies">
                                <label htmlFor="location2">Location</label>
                                <input
                                    type="text"
                                    name="location2"
                                    className="subInput"
                                    value = {location2}
                                    required onChange={(e) => {setLocation2(e.target.value);
                                        localStorage.setItem("location2", e.target.value);}}
                                />
                            </div>
                        </div>
                        <div className="companies">
                            <label htmlFor="description2">Description of Your Position</label>
                            <textarea
                                type="text"
                                name="description2"
                                value = {description2}
                                    required onChange={(e) => {setDescription2(e.target.value);
                                        localStorage.setItem("description2", e.target.value);}}
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

export default Experience;