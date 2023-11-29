import React, {useState} from "react";
import Loading from "../Loading/Loading";
import './Contact.scss'

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

        <div class="wrapper">
		<div class="wrapper_inner">
			<div class="vertical_wrap">
			<div class="backdrop"></div>
			<div class="vertical_bar">
				
				<ul class="menu">
					<li><a href="/contact" class="active">
						<span class="text">Personal Info</span>
					</a></li>
					<li><a href="/experience">
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
                <label htmlFor='fullName'>FULL NAME</label>
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
                        <label htmlFor="linkedIn"><strong>LINKEDIN </strong>URL</label>
                        <input
                            type='text'
                            required anme = 'linkedIn'
                            className="currentInput"
                            value={linkedIn}
                            onChange={(e) => setLinkedIn(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="personalLink"><strong>PERSONAL WEBSITE </strong>OR RELEVANT LINK</label>
                        <input
                            type='text'
                            required anme = 'personalLink'
                            className="currentInput"
                            value={personalLink}
                            onChange={(e) => setPersonalLink(e.target.value)}
                        />
                    </div>
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

export default Contact;