import React from "react";
import axios from "../../common/axiosConfig.js";
import {useForm} from "react-hook-form"; //plugin that help with validate form inputs
import {toast} from "react-toastify"; //notification plugin
const Login = (props) => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = async (data) => {
        //Login function implementation
        try {
            const {email, password} = data;
            //verify user information
            const res = await axios.post("/auth/login", {email, password});
            const jwToken = res.data;
            console.log(jwToken);
            global.auth.setToken(jwToken);
            //show success message
            toast.success("Login Success");
            //redirect to index page when authorized
            props.history.push("/");
        }
            //if authorization fails
        catch (error) {
            const message = error.response.data.message;
            toast.error(message);
        }
    };

    //JSX
    return (
        <div className="login-wrapper">
            <form className="box login-box" onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    {/* email */}
                    <label className="label">Email</label>
                    <div className="control">
                        <input
                            className={`input ${errors?.email && "is-danger"}`}
                            type="text"
                            placeholder="Email"
                            name="email"

                            ref={register({
                                //email field cant be empty
                                required: "email is required",
                                //emial must be in format "xxxxxxxxx@xxx.xxx"
                                pattern: {
                                    value:
                                        /^[A-Za-z0-9]+([_\\.][A-Za-z0-9]+)*@([A-Za-z0-9\\-]+\.)+[A-Za-z]{2,6}$/,
                                    message: "invalid email",
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="helper has-text-danger">{errors.email.message}</p>
                        )}
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input
                            className={`input ${errors.password && "is-danger"}`}
                            type="password"
                            placeholder="Password"
                            name="password"

                            ref={register({
                                //password field cant be empty
                                required: "password is required",
                                //minimum length requiremnet for password
                                minLength: {
                                    value: 6,
                                    message: "cannot be less than 6 digits",
                                },
                            })}
                        />

                        {/* error message container */}
                        {errors.password && (
                            <p className="helper has-text-danger">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="control">
                    <button className="button is-fullwidth is-primary">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;