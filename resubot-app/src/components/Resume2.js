import React from 'react';
import "./resume2.css";

const Resume2 = () => {
    return (
        <div className="container2">
            <div className="header2">
                <h1>Your Name</h1>
                <div className="contact-info2">
                    <p>Email: your@email.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/yourname">linkedin.com/in/yourname</a></p>
                    <p>GitHub: <a href="https://github.com/yourusername">github.com/yourusername</a></p>
            </div>
            </div>

            <div className="education2">
                <h2>Education</h2>
                <hr/>
                <div className='education-item2'>
                    <h3>Bachelor of Science in Computer Science</h3>
                    <h4>Western University, London, Canada</h4>
                    <h5>Date - Date</h5>
                </div>
            </div>

            <div className="experience2">
                <h2>Experience</h2>
                <hr/>
                <div className='experience-item2'>
                    <h3>Company Name</h3>
                    <h4>Position</h4>
                    <h5>Date - Date</h5>
                    <ul>
                        <li>Responsibility 1</li>
                        <li>Responsibility 2</li>
                        <li>Responsibility 3</li>
                    </ul>                
                </div>
            </div>

            <div className='project2'>
                <h2>Projects</h2>
                <hr/>
                <div className='project-item2'>
                    <h3>Project Name</h3>
                    <h4>Software Used</h4>
                    <p>Small Description of what the project does</p>            
                </div>
            </div>

            <div className="skills2">
                <h2>Skills</h2>
                <hr/>
                    <ul className='skills-items2'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>Web Development</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>Web Development</li>
                    </ul>
            </div>
        </div>
    );
};

export default Resume2;
