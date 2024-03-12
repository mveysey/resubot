import React, {useState, useEffect} from "react";
import './Landing.scss'
import access_edit from '../../assets/access_edit.png';
import cover_letter from '../../assets/cover_letter.png';
import resume from '../../assets/resume.png';
import fast from '../../assets/fast.png';
import resume2 from '../../assets/resume2.png';
import coverletter2 from '../../assets/coverletter2.png';
import {ScrollMenu} from 'react-horizontal-scrolling-menu';
import {LeftArrow, RightArrow, ScrollCard} from "../../components/HorizontalScroller/HScroller";

const getItems = () =>
    Array(20)
        .fill(0)
        .map((_, ind) => ({id: `feature-${ind}`}));


const data = [
    
    {
        question: "What makes your AI-generated resumes different from traditional resumes?", 
        answer: "Our AI-generated resumes offer severla distinct advnatages over traditional resumes. They are created using advanced algorithms that analyze data to optimize content for relevance, keywords, and readability. Additionally, our resumes can be personalized to match specific job requirements and industry standards, ensuring a higher chance of catching the attention of hiring managers and passing through Applicant Tracking Systems (ATS).",
    },
    {
        question: "Can I edit and update my resume after it's been generated?", 
        answer: "Yes, you have the flexibility to edit and update your resume even after it has been generated. Our platform allows you to make changes to the content, formatting, and design as needed, ensuring that your resume stays up-to-date and tailored to your evolving career goals and experiences.",
    },
    {
        question: "Is there a limit to the number of resumes I can create using Resubot?", 
        answer: " No, there is no limit to the number of resumes you can create using Resubot. You can generate as many resumes as you need to target different job opportunities, industries, or career objectives. Our platform is designed to provide unlimited access to our resume-building tools, empowering you to create high-quality resumes tailored to your unique preferences and aspirations.",
    },
    {
        question: "What file formats are supported for downloading and sharing my resume?", 
        answer: "Once your resume is ready there you can download a PDF of your resumes or cover letters to start applying for jobs.",
    },

]



// shown when
const LandingPage = () => {

    const [scollItems, setScrollItems] = useState(getItems);
    const [selected, setSelected] = useState(null);
    const [position, setPosition] = useState(0);
    const isItemSelected = (id) => !!selected.find((el) => el === id);

    const toggle = (i) => {
        if(selected == i){
            return setSelected(null)
        }

        setSelected(i)
    };

    {/*const handleScrollItemClick = (id) =>
        ({getItemById, scrollToItem}) => {
            const itemSelected = isItemSelected(id);
            setSelected((currentSelected) =>
                itemSelected
                    ? currentSelected.filter((el) => el !== id)
                    : currentSelected.concat(id)
            );
        };
    */}

    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 19) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <div className="landing-wrapper">
        <section className="banner">
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fff" fillOpacity="1" d="M0,96L60,85.3C120,75,240,53,360,90.7C480,128,600,224,720,234.7C840,245,960,171,1080,160C1200,149,1320,203,1380,229.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
            <div className="hero-text">
                <h1 className="title">
                    Welcome to ResuBot
                </h1>
                <p className="subtitle">
                    Unlock Your Potential with AI-Optimized Resumes
                </p>
                {/* Get Started Button */}
                <div className="columns is-centered">
                    <a href="/home" className="start-btn button is-large is-info">GET STARTED</a>
                </div>
            </div>
        </section>
      {/*
                    <section className="section scroller-container is-align-items-center	">
                        {/* Horizontal Scroller}
                        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                            {scollItems.map(({id}) => (
                                <ScrollCard
                                    itemId={id} // NOTE: itemId is required for track items
                                    title={id}
                                    key={id}
                                    onClick={handleScrollItemClick(id)}
                                    selected={isItemSelected(id)}
                                />
                            ))}
                        </ScrollMenu>
                    </section>*/}
        

            <section className="features">
               <div className="container">
                  <h2>Features Designed To Help You Win your Dream Job</h2>
                  <div className="feature">
                     <img src={resume} alt="Resume" />
                     <h3>AI-Generated Resumes</h3>
                     <p>Our advanced AI techonology crafts personlaized resumes tailored to your career goals.</p>
                  </div>
                  <div className="feature">
                     <img src={cover_letter } alt="Cover Letter" />
                     <h3>Cover Letter</h3>
                     <p>Build a cover letter with a same ease and tailored to you specific industry.</p>
                  </div>
                  <div className="feature">
                     <img src={fast} alt="Fast and Efficient"/>
                     <h3>Fast and Efficient</h3>
                     <p>Get your professional resume within minutes, saving you time and effort.</p>
                  </div>
                  <div className="feature">
                     <img src={access_edit} alt="Cloud-Based Access" />
                     <h3>Cloud-Based Access</h3>
                     <p>Access and edit your resume anytime, anywhere with our secure cloud platform.</p>
                  </div>

               </div>

            </section>

            {/*  <div className="examples-container box">
                <h1 className="title">Ready-To-Use Resume Templates</h1>
                <div className="examples-grid-container">
                    <div className="example-box">
                        <article className="message">
                            <div className="message-header">
                                <p>Hello World</p>
                            </div>
                            <div className="message-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus
                                mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
                                fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean
                                ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin
                                porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna,
                                vehicula et sem eget, facilisis sodales sem.
                            </div>
                        </article>
                    </div>

                    <div className="example-box">
                        <article className="message">
                            <div className="message-header">
                                <p>Hello World</p>
                            </div>
                            <div className="message-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus
                                mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
                                fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean
                                ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin
                                porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna,
                                vehicula et sem eget, facilisis sodales sem.
                            </div>
                        </article>
                    </div>

                    <div className="example-box">
                        <article className="message">
                            <div className="message-header">
                                <p>Hello World</p>
                            </div>
                            <div className="message-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus
                                mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
                                fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean
                                ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin
                                porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna,
                                vehicula et sem eget, facilisis sodales sem.
                            </div>
                        </article>
                    </div>

                    <div className="example-box">
                        <article className="message">
                            <div className="message-header">
                                <p>Hello World</p>
                            </div>
                            <div className="message-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus
                                mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
                                fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean
                                ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin
                                porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna,
                                vehicula et sem eget, facilisis sodales sem.
                            </div>
                        </article>
                    </div>

                    <div className="example-box">
                        <article className="message">
                            <div className="message-header">
                                <p>Hello World</p>
                            </div>
                            <div className="message-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus
                                mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
                                fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean
                                ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin
                                porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna,
                                vehicula et sem eget, facilisis sodales sem.
                            </div>
                        </article>
                    </div>

                    <div className="example-box">
                        <article className="message">
                            <div className="message-header">
                                <p>Hello World</p>
                            </div>
                            <div className="message-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus
                                mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
                                fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean
                                ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin
                                porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna,
                                vehicula et sem eget, facilisis sodales sem.
                            </div>
                        </article>
                    </div>
                </div>
            </div>*/}

            <section className="resume">
                <div className="resume-content">
                    <div>
                        <h2>Unlock Your Dream Job</h2>
                    </div>
                    <div>
                        <p>Elevate your resume game with the premier AI-generated resume maker. Tailored to your specific industry and job description, ensuring your resume stands out. Our platform empowers you to distinguish yourself from the crowd and pursue your career ambitions confidently.</p>
                    </div>
                    <div className="columns is-centered">
                        <a href="/home" className="resume-btn button is-info">Create My Resume</a>
                    </div>
                </div>
                <div className="resume-image">
                    <img src={resume2} alt="Resume" />
                </div>
            </section>
            <section className="coverletter">
                <div className="coverletter-image">
                    <img src={coverletter2} alt="Resume" />
                </div>
                <div className="coverletter-content">
                    <div>
                        <h2>Craft A Compelling Cover Letter Effortlessly with our cover letter maker.</h2>
                    </div>
                    <div>
                        <p>create a professional pitches in mere minutes, saving you precious time and eliminating the stress of writer's block. Say goodbye to tedious searches for persuasive phrases and formatting woes. With our intuitive tool, you'll effortlessly captivate your audience and make a lasting impression</p>
                    </div>
                    <div className="columns is-centered">
                            <a href="/home" className="coverletter-btn button is-info">Create Cover Letter</a>
                    </div>
                    
                </div>
                
            </section>
            <section className="get-started">
                   <div>
                    <h2>Ready to Transform Your Career</h2>
                    <p>Take your first step towards a brigeter future by creating your AI-Optimized resume today.</p>
                    <a href="singup" class="btn">Get Started Now</a>
                   </div>

            </section>


                {/* Live data based on users*/}
                <div className="user-data-wrapper">
                    <h2>Frequently Asked Questions</h2>
                    <div>
                        <div className="accordion">
                            {data.map((item, i) => (
                                <div className="item">
                                    <div className="title" onClick={() => toggle(i)}>
                                        <p>{item.question}</p>
                                        <span>{selected == i ? '-' : '+'}</span>
                                    </div>
                                    <div className={selected == i ? 'content.show' : 'content'}>{item.answer}</div>
                                </div>
                            ))}

                        </div>
                    </div>
                    

                </div>

        </div>
    )
}


export default LandingPage;


