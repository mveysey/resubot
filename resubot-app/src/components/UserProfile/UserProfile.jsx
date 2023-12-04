import React, {useState} from "react";
import auth from "../../common/auth.js";
import {toast} from "react-toastify";
import axios from "../../common/axiosConfig.js";

const UserProfile = (props) => {

    // logout method
    const logout = async () => {
        toast.warning("Logging Out...");
        await new Promise((resolve) => setTimeout(resolve, 1500));
        auth.logout();
        window.location.reload();
    };

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    // Function to handle password update
    const updatePassword = async () => {
        try {
            const res = await axios.post("/api/auth/updatePassword", {
                email: props?.user?.email,
                currentPassword: currentPassword,
                newPassword: newPassword,
            });

            if (res.status === 200) {
                toast.success("Password updated successfully");
                setCurrentPassword("");
                setNewPassword("");
            } else if (res.status === 401) {
                toast.error("Incorrect current password");
            } else {
                toast.error("Failed to update password");
            }
        } catch (error) {
            console.error("Error updating password:", error);
            toast.error("Password Update Failed, Current Password Must Be Correct");
        }
    };

    return (
        <div className="user-profile">
            <p className="title has-text-centered">User Profile</p>
            <fieldset disabled>
                {/* User name */}
                <div className="field">
                    <div className="control">
                        <label className="label has-text-left">Username</label>
                        <input
                            className="input"
                            type="text"
                            defaultValue={props.user.username}
                        />
                    </div>
                </div>
                {/* user email */}
                <div className="field">
                    <div className="control">
                        <label className="label has-text-left">Email</label>
                        <input
                            className="input"
                            type="text"
                            //change to email thats signed in
                            defaultValue={props.user.email}
                        />
                    </div>
                </div>
                {/* user type */}
                <div className="field">
                    <div className="control">
                        <label className="label has-text-left">Account Type</label>
                        <input
                            className="input"
                            type="text"
                            //change user type status
                            defaultValue={props.user.type === 1 ? "Resubot Admin" : "Resubot User"}
                        />
                    </div>
                </div>
            </fieldset>

            <br/>
            <br/>
            <div className="field is-grouped is-grouped-centered">
                {/* logout button */}
                <div className="control">
                    <button className="button is-danger" type="button" onClick={logout}>
                        Logout
                    </button>
                </div>
                {/* close button */}
                <div className="control">
                    <button
                        className="button"
                        type="button"
                        onClick={() => {
                            props.close();
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
            <br/>
            <br/>

            {/* Password update section */}
            <div className="field">
                <div className="control">
                    <label className="label has-text-left">Current Password</label>
                    <input
                        className="input"
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <label className="label has-text-left">New Password</label>
                    <input
                        className="input"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className="field is-grouped is-grouped-centered">
                <div className="control">
                    <button className="button is-primary" type="button" onClick={updatePassword}>
                        Update Password
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;