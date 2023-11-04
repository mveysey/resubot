import React, {useState} from "react";
import './Landing.scss'
import {ScrollMenu} from 'react-horizontal-scrolling-menu';
import {LeftArrow, RightArrow, ScrollCard} from "../../components/HorizontalScroller/HScroller";

const getItems = () =>
    Array(20)
        .fill(0)
        .map((_, ind) => ({id: `feature-${ind}`}));


// shown when
const LandingPage = () => {

    const [scollItems, setScrollItems] = useState(getItems);
    const [selected, setSelected] = useState([]);
    const [position, setPosition] = useState(0);
    const isItemSelected = (id) => !!selected.find((el) => el === id);

    const handleScrollItemClick = (id) =>
        ({getItemById, scrollToItem}) => {
            const itemSelected = isItemSelected(id);
            setSelected((currentSelected) =>
                itemSelected
                    ? currentSelected.filter((el) => el !== id)
                    : currentSelected.concat(id)
            );
        };

    return (
        <div className="landing-wrapper">
            {/*hero*/}
            <section className="hero is-main">
                <div className="hero-body">
                    <p className="title">
                        Welcome to ResuBot
                    </p>
                    <p className="subtitle">
                        An AI powered resume builder for the modern job seeker
                    </p>

                    <section className="section scroller-container is-align-items-center	">
                        {/* Horizontal Scroller*/}
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
                    </section>
                    {/* Get Started Button*/}
                    <div className="columns is-centered">
                        <button className="start-btn button is-large is-info">GET STARTED</button>
                    </div>
                </div>
            </section>

            <div className="examples-container box">
                <h1 className="title">Example Resumes</h1>
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

                {/* Live data based on users*/}
                <div className="user-data-wrapper">
                    <h1 className="title">Live User Data</h1>
                    {/*Number of resumes created over time.*/}
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">
                                Number of resumes created over time
                            </p>
                            <button className="card-header-icon" aria-label="more options">
                                    <span className="icon">
                                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                            </button>
                        </header>
                        <div className="card-content">
                            <div className="content">
                                insert apex chart component
                            </div>
                        </div>
                    </div>

                    {/*Average time spent on creating a resume*/}
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">
                                Average time spent on creating a resume
                            </p>
                            <button className="card-header-icon" aria-label="more options">
                                    <span className="icon">
                                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                            </button>
                        </header>
                        <div className="card-content">
                            <div className="content">
                                insert apex chart component
                            </div>
                        </div>
                    </div>

                    {/*Most frequently used keywords in resumesAverage time spent on creating a resume*/}
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">
                                Most frequently used keywords in resumes
                            </p>
                            <button className="card-header-icon" aria-label="more options">
                                    <span className="icon">
                                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                            </button>
                        </header>
                        <div className="card-content">
                            <div className="content">
                                insert apex chart component
                            </div>
                        </div>
                    </div>

                    {/*Work experience distribution */}
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">
                                Work experience distribution (years of experience).
                            </p>
                            <button className="card-header-icon" aria-label="more options">
                                    <span className="icon">
                                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                            </button>
                        </header>
                        <div className="card-content">
                            <div className="content">
                                insert apex chart component
                            </div>
                        </div>
                    </div>

                    {/*Education level distribution*/}
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title">
                                Education level distribution
                            </p>
                            <button className="card-header-icon" aria-label="more options">
                                    <span className="icon">
                                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                            </button>
                        </header>
                        <div className="card-content">
                            <div className="content">
                                insert apex chart component
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default LandingPage;


