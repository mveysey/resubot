import React from "react";
import './Help.scss'


//Help Page
const HelpPage = () =>
    (
        <div className="help-wrapper">
            <section>
                <div>
                    <h1 className="help-title">Welcome to our Help Center!</h1>
                </div>
            </section>

            <section className="box">
                <div className="notification">
                    <h2 className="title is-4">Getting Started</h2>
                    <p>
                        <strong>How to Sign Up:</strong><br/>
                        To create an account, click on the "Sign Up" button at the top right corner of the page.<br/>
                        Fill in your details, including your name, email address, and a password.<br/>
                        Click "Sign Up" to complete the registration process.
                    </p>
                    <p>
                        <strong>My Resume Overview:</strong><br/>
                        The My Resume dashboard is your central hub for managing all your resume projects.<br/>
                        You can create new resumes, access your existing ones, and customize templates from here.
                    </p>
                </div>
            </section>

            <section className="box">
                <div className="notification">
                    <h2 className="title is-4">Building Your Resume</h2>
                    <p>
                        <strong>Creating a New Resume:</strong><br/>
                        To start a new resume, click the "New Resume" button on the dashboard.<br/>
                        Follow the on-screen prompts to enter your resume details and choose a template.<br/>
                        Click "Start Editing" to begin working on your new resume.
                    </p>
                    <p>
                        <strong>Editing Sections:</strong><br/>
                        To add or edit sections, click the "Edit" button next to the respective section on your
                        resume.<br/>
                        Use the toolbar to format text, add bullet points, or insert links.<br/>
                        To delete a section, click the "Delete" icon at the top right corner of the section.
                    </p>
                    <p>
                        <strong>Formatting Text:</strong><br/>
                        Describe how to format text, such as making text bold, italic, or creating bullet points.
                    </p>
                    <p>
                        <strong>Adding Images:</strong><br/>
                        If applicable, explain how to add images or logos to the resume.
                    </p>
                    <p>
                        <strong>Saving and Previewing:</strong><br/>
                        Show users how to save their progress and preview the resume.
                    </p>
                </div>
            </section>

            <section className="box">
                <div className="notification">
                    <h2 className="title is-4">Additional Resources</h2>
                    <p>
                        If applicable, link to user guides, video tutorials, or other resources that can provide more
                        in-depth assistance.
                    </p>
                </div>
            </section>

            <section className="box">
                <div className="notification">
                    <h2 className="title is-4">Conclusion</h2>
                    <p>
                        Thank users for using the app and remind them that help is always available.
                    </p>
                </div>
            </section>

            {/* Add more sections as needed */}
        </div>
    )


export default HelpPage