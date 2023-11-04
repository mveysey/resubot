import React from "react";
import {VisibilityContext} from "react-horizontal-scrolling-menu";
import {BiCaretLeft, BiCaretRight} from "react-icons/bi";

const LeftArrow = () => {
    const {isFirstItemVisible, scrollPrev} =
        React.useContext(VisibilityContext);
    return (
        <button className="button is-dark" disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
            <BiCaretLeft/>
        </button>
    );
}

const RightArrow = () => {
    const {isLastItemVisible, scrollNext} = React.useContext(VisibilityContext);
    return (
        <button className="button is-dark" disabled={isLastItemVisible} onClick={() => scrollNext()}>
            <BiCaretRight/>
        </button>
    );
}

const ScrollCard = ({onClick, selected, title, itemId}) => {
    const visibility = React.useContext(VisibilityContext);
    return (
        <div onClick={() => onClick(visibility)} style={{
            width: '160px',
        }}
             tabIndex={0}
        >
            <div className="card">
                <div>{title}</div>
                <div>selected: {JSON.stringify(!!selected)}</div>
            </div>
            <div
                style={{
                    height: '200px',
                }}
            />
        </div>
    );
}

export {LeftArrow, RightArrow, ScrollCard};