import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Resumes.scss'; // Import your component styles here

const CreateResume = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCreateResumeClick = () => {
        setIsModalOpen(true);
    };

    const newResume = () => {
        navigate("/customize")
    };

    return (
        <div className="resume_container">
            <div className="content">
                <button onClick={newResume}>Create a new resume</button>
            </div>
        </div>
    );
};

export default CreateResume;
