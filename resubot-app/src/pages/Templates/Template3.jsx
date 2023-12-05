import React from 'react';

const Template3 = () => {
    return (
        <div className="container">
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="columns">
                        <div className="column is-3">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="John Doe"
                                className="image is-128x128"
                            />
                        </div>
                        <div className="column">
                            <h1 className="title is-size-2 has-text-white">John Doe</h1>
                            <h2 className="subtitle is-size-4 has-text-white">Web Developer</h2>
                            <p className="has-text-white">Email: johndoe@example.com</p>
                            <p className="has-text-white">LinkedIn: linkedin.com/in/johndoe</p>
                            <p className="has-text-white">GitHub: github.com/johndoe</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <p>
                        Hi there! I'm John Doe, a passionate web developer with over 5 years of experience, specializing in both front-end and back-end technologies. I have a proven track record of creating responsive web applications and delivering high-quality code that meets client needs and exceeds expectations.
                    </p>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <h2 className="title is-size-3 has-text-danger">Professional Experience</h2>
                    <div className="box">
                        <h3 className="is-size-4 has-text-primary">Senior Web Developer - Tech Solutions Inc.</h3>
                        <p className="subtitle is-6 has-text-success">Jan 2020 - Present</p>
                        <ul>
                            <li>Lead a team of 5 highly skilled developers, fostering innovation in web application development.</li>
                            <li>Revamped the user interface with a new responsive design, resulting in a remarkable 50% increase in mobile traffic.</li>
                            <li>Played a key role in optimizing application performance, leading to an impressive 40% reduction in load times.</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h3 className="is-size-4 has-text-primary">Front-end Developer - Web Solutions Ltd.</h3>
                        <p className="subtitle is-6 has-text-success">July 2017 - Dec 2019</p>
                        <ul>
                            <li>Collaborated with cross-functional teams to create innovative and visually appealing web applications.</li>
                            <li>Implemented cutting-edge front-end technologies, enhancing the overall user experience.</li>
                            <li>Contributed to the development of responsive designs, making websites mobile-friendly and increasing user engagement.</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h3 className="is-size-4 has-text-primary">Junior Web Developer - CodeCrafters</h3>
                        <p className="subtitle is-6 has-text-success">May 2015 - June 2017</p>
                        <ul>
                            <li>Participated in the development of web applications, gaining valuable experience in full-stack development.</li>
                            <li>Assisted in troubleshooting and debugging code to ensure smooth website functionality.</li>
                            <li>Collaborated with senior developers to implement best practices and improve coding skills.</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <h2 className="title is-size-3 has-text-danger">Education</h2>
                    <ul>
                        <li>
                            <strong>Master of Computer Science</strong> - University of XYZ
                        </li>
                        <li>
                            <strong>Bachelor's Degree in Web Development</strong> -
                            Community College
                        </li>
                    </ul>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <h2 className="title is-size-3 has-text-danger">Skills</h2>
                    <div className="columns">
                        <div className="column">
                            <h3 className="is-size-4 has-text-primary">Front-end Technologies</h3>
                            <ul>
                                <li>
                                    <span className="skill-title has-text-warning">JavaScript:</span>
                                    <div className="slider">
                                        <input
                                            className="slider is-fullwidth is-danger"
                                            type="range"
                                            min="0"
                                            max="100"
                                            defaultValue="90"
                                        />
                                    </div>
                                </li>
                                <li>
                                    <span className="skill-title has-text-warning">React.js:</span>
                                    <div className="slider">
                                        <input
                                            className="slider is-fullwidth is-warning"
                                            type="range"
                                            min="0"
                                            max="100"
                                            defaultValue="85"
                                        />
                                    </div>
                                </li>
                                <li>
                                    <span className="skill-title has-text-warning">HTML/CSS:</span>
                                    <div className="slider">
                                        <input
                                            className="slider is-fullwidth is-success"
                                            type="range"
                                            min="0"
                                            max="100"
                                            defaultValue="95"
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="column">
                            <h3 className="is-size-4 has-text-primary">Back-end Technologies</h3>
                            <ul>
                                <li>
                                    <span className="skill-title has-text-warning">Node.js:</span>
                                    <div className="slider">
                                        <input
                                            className="slider is-fullwidth is-success"
                                            type="range"
                                            min="0"
                                            max="100"
                                            defaultValue="80"
                                        />
                                    </div>
                                </li>
                                <li>
                                    <span className="skill-title has-text-warning">Express.js:</span>
                                    <div className="slider">
                                        <input
                                            className="slider is-fullwidth is-warning"
                                            type="range"
                                            min="0"
                                            max="100"
                                            defaultValue="75"
                                        />
                                    </div>
                                </li>
                                <li>
                                    <span className="skill-title has-text-warning">MongoDB:</span>
                                    <div className="slider">
                                        <input
                                            className="slider is-fullwidth is-info"
                                            type="range"
                                            min="0"
                                            max="100"
                                            defaultValue="70"
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <h2 className="title is-size-3 has-text-danger">Projects</h2>
                    <div className="columns is-multiline">
                        <div className="column is-6">
                            <div className="card">
                                <div className="card-content">
                                    <h3 className="title is-4">E-commerce Website</h3>
                                    <p className="subtitle is-6 has-text-primary">Role: Front-end Developer</p>
                                    <p>Designed and developed a responsive e-commerce website, resulting in a 30% increase in online sales.</p>
                                </div>
                            </div>
                        </div>
                        <div className="column is-6">
                            <div className="card">
                                <div className="card-content">
                                    <h3 className="title is-4">Portfolio Website</h3>
                                    <p className="subtitle is-6 has-text-primary">Role: Full-stack Developer</p>
                                    <p>Created a personal portfolio website to showcase projects and skills, receiving positive feedback from peers and clients.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <h2 className="title is-size-3 has-text-danger">Certifications & Awards</h2>
                    <ul>
                        <li>Certified JavaScript Developer - XYZ Institute</li>
                        <li>Best Innovative Solution Award - ABC Hackathon 2021</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Template3;
