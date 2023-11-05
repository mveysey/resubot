import React from 'react';
import './Pagination.scss'

const Pagination = (props) => {
    // init
    const {currentPage, maxPageLimit, minPageLimit, response, pageNumberLimit, isMini} = props;
    const totalPages = Math.floor(Object.keys(response).length / pageNumberLimit);

    // build page numbers list based on total number of pages
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const handlePrevClick = () => {
        props.onPrevClick();
    }

    const handleNextClick = () => {
        props.onNextClick();
    }

    const handlePageClick = (e) => {
        props.onPageChange(Number(e.target.id));
    }

    const pageNumbers = pages.map(page => {

            if (page <= maxPageLimit && page > minPageLimit) {
                return (
                    <li key={page} id={page} onClick={handlePageClick}
                        className={`pagination-link ${currentPage === page ? 'is-current' : null}`}>
                        {page}
                    </li>
                );
            } else {
                return null;
            }
        }
    );


    // page ellipses
    let pageIncrementEllipses = null;
    if (pages.length > maxPageLimit) {
        pageIncrementEllipses = <span className="pagination-ellipsis" onClick={handleNextClick}>&hellip;</span>
    }
    let pageDecrementEllipses = null;
    if (minPageLimit >= 1) {
        pageDecrementEllipses = <span className="pagination-ellipsis" onClick={handlePrevClick}>&hellip;</span>
    }

    return (
        <>
            {pages.length > 1 && <div className={`pagination-wrapper ${isMini && 'is-small'}`}>

                <nav className={`pagination is-centered ${isMini && 'is-small'}`} role="navigation"
                     aria-label="pagination">
                    {currentPage !== pages[0] &&
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a className={`pagination-previous ${currentPage === pages[0] && "is-disabled"}`}
                           onClick={handlePrevClick}>Prev</a>}
                    {currentPage !== pages[pages.length - 1] &&
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a className={`pagination-next ${currentPage === pages[pages.length - 1] && "is-disabled"}`}
                           onClick={handleNextClick}>Next</a>}
                    <ul className="pagination-list">
                        {pageDecrementEllipses}
                        {pageNumbers}
                        {pageIncrementEllipses}
                    </ul>

                </nav>
            </div>}
        </>

    )
}

export default Pagination