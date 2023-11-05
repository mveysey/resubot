import React, {useState} from 'react';
import './Preferences.scss';

const themes = ['var(--red-color)', 'var(--yellow-color)', 'var(--cyan-color)', 'var(--green-color)', 'var(--blue-color)'];
const Preferences = () => {
    const [isEditing, setIsEditing] = useState(false);


    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="preferences-wrapper">
            <h1 className="title is-3">Settings Page</h1>
            <h3 className="title is-5 mt-5">User Info</h3>
            <div className="user-info-container">
                <div className="columns">
                    <div className="column">
                        <div className="field">
                            <label className="label">Name</label>
                            <div className="control">
                                <input
                                    className={`input ${isEditing ? '' : 'is-disabled'}`}
                                    type="text"
                                    placeholder="e.g Alex Smith"
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input
                                    className={`input ${isEditing ? '' : 'is-disabled'}`}
                                    type="email"
                                    placeholder="e.g. alexsmith@gmail.com"
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Address</label>
                            <div className="control">
                                <input
                                    className={`input ${isEditing ? '' : 'is-disabled'}`}
                                    type="text"
                                    placeholder="Address"
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field">
                            <label className="label">Age</label>
                            <div className="control">
                                <input
                                    className={`input ${isEditing ? '' : 'is-disabled'}`}
                                    type="number"
                                    placeholder="22"
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Gender</label>
                            <div className="control">
                                <input
                                    className={`input ${isEditing ? '' : 'is-disabled'}`}
                                    type="text"
                                    placeholder="Gender"
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Education Level</label>
                            <div className="control">
                                <input
                                    className={`input ${isEditing ? '' : 'is-disabled'}`}
                                    type="text"
                                    placeholder="Education"
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                    </div>


                </div>

                <button
                    className={`button is-info edit-info-btn ${isEditing ? 'is-primary' : 'is-disabled'}`}
                    onClick={handleEditClick}>
                    {isEditing ? 'Apply Changes' : 'Edit Info'}
                </button>
            </div>

            <div className="settings-bar"/>
            <h3 className="title is-5 mt-5">Change Password</h3>
            <div className="password-reset-container">
                <div className="field">
                    <label className="label">Current Password</label>
                    <div className="control">
                        <input
                            className={`input ${isEditing ? '' : 'is-disabled'}`}
                            type="password"
                            placeholder="Current Password"
                            disabled={!isEditing}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">New Password</label>
                    <div className="control">
                        <input
                            className={`input ${isEditing ? '' : 'is-disabled'}`}
                            type="password"
                            placeholder="New Password"
                            disabled={!isEditing}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Confirm New Password</label>
                    <div className="control">
                        <input
                            className={`input ${isEditing ? '' : 'is-disabled'}`}
                            type="password"
                            placeholder="Confirm New Password"
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                <button className={`button is-info password-reset-btn`}>
                    Reset password
                </button>
            </div>


            <div className="settings-bar"/>
            <h3 className="title is-5 mt-5">Change UI Theme</h3>

            <div className="theme-colors">
                {themes.map((themeColor, index) => (
                    <div
                        key={index}
                        className={`theme-color ${isEditing ? 'editable' : ''}`}
                        style={{backgroundColor: themeColor}}
                    />
                ))}
            </div>
            <div className="settings-bar"/>
        </div>
    );
};

export default Preferences;
