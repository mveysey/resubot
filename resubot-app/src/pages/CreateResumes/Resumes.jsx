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
                <a href="/customize">+</a>
                <h4>Create New Resume</h4>
            </div>
        </div>
    );
};

export default CreateResume;
