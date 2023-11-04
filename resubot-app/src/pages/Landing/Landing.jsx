import React, {useState} from "react";
import './Landing.scss'
import {ScrollMenu} from 'react-horizontal-scrolling-menu';
import {LeftArrow, RightArrow, ScrollCard} from "../../components/HorizontalScroller/HScroller";

const getItems = () =>
    Array(20)
        .fill(0)
        .map((_, ind) => ({id: `element-${ind}`}));

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
                    {/* Get Started Button*/}
                    <button className="button is-danger">GET STARTED</button>
                </div>
            </section>

            <div className="example box">

            </div>

        </div>
    )
}


export default LandingPage;


