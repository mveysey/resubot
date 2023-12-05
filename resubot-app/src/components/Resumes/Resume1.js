import React from 'react';
import { useLocation } from 'react-router-dom';
import "./resume1.css";

const Resume = () => {
    const location = useLocation();
    const resumeData = location.state?.resumeData || {};

     // Convert the entire experienceData object to a JSON string
     const experienceDataString = JSON.stringify(resumeData, null, 2);
     const experienceData = resumeData.experienceData || '';
     const educationGenerated = resumeData.educationGenerated || '';
     const skillsGenerated = resumeData.skillsGenerated || '';
     const projectGenerated = resumeData.projectGenerated || '';

     // Split the skills data based on numbered lists
    const skills = skillsGenerated.split(/\d+\.\s/).filter(Boolean);

    // Split the education data based on numbered lists
    const educationCourses = educationGenerated.split(/\d+\.\s/).filter(Boolean);
 

    
    return (
        <div className="container">
            <div className="header">
                <h1>Your Name</h1>
                <div className="contact-info">
                    <p>Email: your@email.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/yourname">linkedin.com/in/yourname</a></p>
                    <p>GitHub: <a href="https://github.com/yourusername">github.com/yourusername</a></p>
            </div>
            </div>

            {/* <div className="education">
                <h2>Education</h2>
                <hr/>
                {courseDetails.map((course, index) => (
                    <div key={index} className='education-item'>
                        <h4>{course.title}</h4>
                        <p>{course.institution}</p>
                        <p>{course.graduationDate}</p>
                        <p>{course.description}</p>
                    </div>
                ))}
            </div> */}
            <div className="education">
                <h2>Education</h2>
                <hr/>
                {educationCourses.map((course, index) => {
                    const lines = course.split('\n').filter(Boolean);
                    return (
                        <div key={index} className='education-item'>
                            <h4>{lines[0]}</h4>
                            {lines.slice(1).map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>
                    );
                })}
            </div>

            <div className="experience">
                <h2>Experience</h2>
                <hr/>
                <div className='experience-item'>
                    <p>{experienceData}</p>
                    {/* {experienceDataString} */}
                    {/* <h4>Company Name</h4>
                   
                    <p>Position</p>
                    <p>Date - Date</p>
                    <ul>
                        <li>Responsibility 1</li>
                        <li>Responsibility 2</li>
                        <li>Responsibility 3</li>
                    </ul>                 */}
                </div>
            </div>

            <div className='project'>
                <h2>Projects</h2>
                <hr/>
                <div className='project-item'>
                    {/* <h4>Project Name</h4> */}
                    <p>{projectGenerated}</p>
                    {/* <p>Software Used</p>
                    <p>Small Description of what the project does</p>             */}
                </div>
            </div>
            <div className="skills">
                <h2>Skills</h2>
                <hr/>
                {skills.map((skill, index) => {
                    const [title, description] = skill.split(':');
                    return (
                        <div key={index} className='skill-item'>
                            <p><strong>{title}:</strong> {description}</p>
                        </div>
                    );
                })}
                <ul className='skills-items'>
                    {/* ... your skills list ... */}
                </ul>
            </div>


            {/* <div className="skills">
                <h2>Skills</h2>
                <p>{skillsGenerated}</p>
                <hr/>
                    <ul className='skills-items'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>Web Development</li>
                    </ul>
            </div> */}

            {/* <pre>
                        {experienceDataString}
                    </pre> */}
        </div>
    );
};

export default Resume;
