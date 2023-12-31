import {useState, useEffect, React} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import './Contact.scss'

const Contact = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [linkedIn, setLinkedIn] = useState("");
    const [personalLink, setPersonalLink] = useState("");
    //const [loading, setLoading] = useState(false);
    
    // To save the user input
    useEffect(() => {
        setFullName(localStorage.getItem("fullName"));
        setPhoneNumber(localStorage.getItem("phoneNumber"));
        setEmail(localStorage.getItem("email"));
        setLinkedIn(localStorage.getItem("linkedIn"));
        setPersonalLink(localStorage.getItem("personalLink"));
    }, []);

    const nextPage = () => {
        navigate("/experience")
    }

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
					<li><a href="/contact" className="active">
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
                <label htmlFor='fullName'>Full Name</label>
                <input
                    type ='text'
                    required name = 'fullName'
                    id = 'fullName'
                    value = {fullName}
                    onChange={(e) => {
                        setFullName(e.target.value);
                        localStorage.setItem("fullName", e.target.value);
                        }}
                />
                <div>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input
                            type='text'
                            required anme = 'email'
                            className="currentInput"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                localStorage.setItem("email", e.target.value);
                                }}
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type='text'
                            required anme = 'phoneNumber'
                            className="currentInput"
                            value={phoneNumber}
                            onChange={(e) => {
                                setPhoneNumber(e.target.value);
                                localStorage.setItem("phoneNumber", e.target.value);}}
                        />

                    </div>
                    <div>
                        <label htmlFor="linkedIn"><strong>LinkedIn </strong>URL</label>
                        <input
                            type='text'
                            required anme = 'linkedIn'
                            className="currentInput"
                            value={linkedIn}
                            onChange={(e) => {setLinkedIn(e.target.value);
                                localStorage.setItem("linkedIn", e.target.value);}}
                        />
                    </div>
                    <div>
                        <label htmlFor="personalLink"><strong>Personal Website </strong>OR Relevant Links</label>
                        <input
                            type='text'
                            required anme = 'personalLink'
                            className="currentInput"
                            value={personalLink}
                            onChange={(e) => {setPersonalLink(e.target.value);
                                localStorage.setItem("personalLink", e.target.value);}}
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

export default Contact;