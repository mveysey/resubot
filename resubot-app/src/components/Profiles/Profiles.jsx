import React, {useState} from 'react';
import './Profiles.scss'
import Pagination from "../Pagination/Pagination.jsx";
import Modal from "../Modal/Modal.jsx";

const getProfilesList = () => {
    let initialProfiles = {};
    for (let i = 1; i <= 90; i++) {
        initialProfiles[i] = {
            profileTitle: `Profile ${i}`,
        };
    }
    return initialProfiles;
}

const Profiles = () => {
        const [sortedProfiles, setSortedProfiles] = useState(getProfilesList());
        const pageNumberLimit = 4;
        const [currentPage, setCurrentPage] = useState(1);
        const [maxPageLimit, setMaxPageLimit] = useState(10);
        const [minPageLimit, setMinPageLimit] = useState(0);
        const [openDeleteModal, setOpenDeleteModal] = useState(false);

        const onPageChange = (pageNumber) => {
            setCurrentPage(pageNumber);
        }
        const onPrevClick = () => {
            if ((currentPage - 1) % pageNumberLimit === 0) {
                setMaxPageLimit(maxPageLimit - pageNumberLimit);
                setMinPageLimit(minPageLimit - pageNumberLimit);
            }
            setCurrentPage(prev => prev - 1);
        }

        const paginationAttributes = {
            currentPage, maxPageLimit, minPageLimit, response: sortedProfiles,
        };

        const onNextClick = () => {
            if (currentPage + 1 > maxPageLimit) {
                setMaxPageLimit(maxPageLimit + pageNumberLimit);
                setMinPageLimit(minPageLimit + pageNumberLimit);
            }
            setCurrentPage(prev => prev + 1);
        }

        return (
            <>
                <Modal open={openDeleteModal}
                       onConfirm={() => setOpenDeleteModal(false)}
                       onClose={() => setOpenDeleteModal(false)}
                       title={"Are you sure you want to delete this profile?"}
                       width={"500px"}
                       height={"200px"}
                />
                <div className="profiles-wrapper">
                    <Pagination {...paginationAttributes}
                                pageNumberLimit={pageNumberLimit}
                                onPrevClick={onPrevClick}
                                onNextClick={onNextClick}
                                onPageChange={onPageChange}
                                isMini={true}
                    />

                    <div className="profiles-content">
                        <div className="columns is-multiline">
                            {Object.keys(sortedProfiles).map((key, index) => {
                                if (index >= minPageLimit && index < maxPageLimit) {
                                    return (
                                        <div className="column is-3" key={key}>
                                            <div className="card profile-card">
                                                <div className="card-content">
                                                    <div className="content">
                                                        <h2 className="title">{sortedProfiles[key].profileTitle}</h2>
                                                        <div className="tags">
                                                            <label className="tag is-info">Resume: 3</label>
                                                            <label className="tag is-info">Cover Letters: 2</label>
                                                        </div>
                                                        <progress className="progress is-primary" value="90"
                                                                  max="100">15%
                                                        </progress>
                                                        <time dateTime="2016-1-1">Last Edited:
                                                            11:09 PM - 1 Jan 2023
                                                        </time>
                                                    </div>
                                                </div>

                                                <footer className="card-footer">
                                                    <a href="#" className="card-footer-item">Summary</a>
                                                    <a href="#" className="card-footer-item">Edit</a>
                                                    <a href="#" className="card-footer-item"
                                                       onClick={() => setOpenDeleteModal(true)}>Delete</a>
                                                </footer>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return null;
                                }
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
;

export default Profiles;