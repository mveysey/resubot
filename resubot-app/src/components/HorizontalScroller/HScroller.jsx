import React from "react";
import {VisibilityContext} from "react-horizontal-scrolling-menu";
import {BiCaretLeft, BiCaretRight} from "react-icons/bi";
import './HScroller.scss'

const LeftArrow = () => {
    const {isFirstItemVisible, scrollPrev} =
        React.useContext(VisibilityContext);
    return (
        <button className="button scroll-btn is-dark is-inverted" disabled={isFirstItemVisible}
                onClick={() => scrollPrev()}>
            <BiCaretLeft/>
        </button>
    );
}

const RightArrow = () => {
    const {isLastItemVisible, scrollNext} = React.useContext(VisibilityContext);
    return (
        <button className="button scroll-btn is-dark is-inverted" disabled={isLastItemVisible}
                onClick={() => scrollNext()}>
            <BiCaretRight/>
        </button>
    );
}

const ScrollCard = ({onClick, selected, title}) => {
    const visibility = React.useContext(VisibilityContext);
    return (
        <div className="scroll-card-wrapper" onClick={() => onClick(visibility)} tabIndex={0}>
            <div className="card">
                {/*Card Image*/}
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-6">explanation</p>
                        </div>
                    </div>

                    <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>#resubot</a>.
                    </div>
                </div>
                {/*<div>selected: {JSON.stringify(!!selected)}</div>*/}
            </div>
            {/*Scroll bard height*/}
            <div style={{height: '40px'}}/>
        </div>
    );
}

export {LeftArrow, RightArrow, ScrollCard};