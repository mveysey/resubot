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

            <div className="example-container box">

            </div>

        </div>
    )
}


export default LandingPage;


