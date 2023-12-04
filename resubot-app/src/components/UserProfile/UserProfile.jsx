import React from "react";
import auth from "../../common/auth.js";
import {toast} from "react-toastify";

const UserProfile = (props) => {

    // logout method
    const logout = async () => {
        toast.warning("Logging Out...");
        await new Promise((resolve) => setTimeout(resolve, 3000));
        auth.logout();
        window.location.reload();
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

            <br />
            <br />
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
        </div>
    );
};

export default UserProfile;