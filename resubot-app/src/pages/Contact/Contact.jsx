import React, {useState} from "react";
import Loading from "../Loading/Loading";

const Contact = () => {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [linkedIn, setLinkedIn] = useState("");
    const [personalLink, setPersonalLink] = useState("");
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log({
            fullName,
            phoneNumber,
            email,
            linkedIn,
            loading,
            personalLink,
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
                <lable htmlFor='fullName'>FULLNAME</lable>
                <input
                    type ='text'
                    required name = 'fullName'
                    id = 'fullName'
                    value = {fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <div>
                    <div>
                        <label htmlFor="email">EMAIL ADDRESS</label>
                        <input
                            type='text'
                            required anme = 'email'
                            className="currentInput"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">PHONE NUMBER</label>
                        <input
                            type='text'
                            required anme = 'phoneNumber'
                            className="currentInput"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />

                    </div>
                    <div>
                        <label htmlFor="linkedIn"><strong>LINKEDIN</strong>URL</label>
                        <input
                            type='text'
                            required anme = 'linkedIn'
                            className="currentInput"
                            value={linkedIn}
                            onChange={(e) => setLinkedIn(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="personalLink"><strong>PERSONAL WEBSITE</strong>OR RELEVANT LINK</label>
                        <input
                            type='text'
                            required anme = 'personalLink'
                            className="currentInput"
                            value={personalLink}
                            onChange={(e) => setPersonalLink(e.target.value)}
                        />
                    </div>
                </div>
                <button>SAVE PERSONAL INFO</button>
            </form>
        </div>
    );
};

export default Contact;