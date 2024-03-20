import React from "react";
import axios from "../../common/axiosConfig.js";
import './Register.scss';
import {useForm} from "react-hook-form"; //plugin that help with validate form inputs
import {toast} from "react-toastify";
import {Link, useNavigate} from "react-router-dom";
import auth from "../../common/auth.js"; //notification plugin
const Register = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = async (data) => {
        //handles register logic
        try {
            //define register required fields
            const {username, email, password} = data;
            const res = await axios.post("/api/auth/register", {
                username,
                email,
                password,
                type: 0, //normal user by default
            });
            const jwToken = res.data.token;
            console.log(jwToken)
            auth.setToken(jwToken);
            toast.success("Registration Successful, Welcome to Resubot");
            navigate("/home");
            await new Promise((resolve) => setTimeout(resolve, 3000));
            window.location.reload();
            await new Promise((resolve) => setTimeout(resolve, 3000));
        } catch (error) {
            const message = error.response.data.message;
            toast.error(message);
        }
    };

    //JSX
    return (
        <div className="register-wrapper">
            <form className="box register-box" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="title is-1 has-text-centered">Create account</h1>
                <div className="field">
                    {/* username */}
                    <label className="label">Username</label>
                    <div className="control">
                        <input
                            className={`input`}
                            type="text"
                            placeholder="Username"
                            name="email"
                            {...register("username", {
                                    required: "username is required",
                                    minLength: {
                                        value: 3,
                                        message: "username must have at least 3 characters",
                                    },
                                    maxLength: {
                                        value: 15,
                                        message: "username cannot have more than 15 characters",
                                    },
                                }
                            )}

                        />
                    </div>
                </div>
                <div className="field">
                    {/* email */}
                    <label className="label">Email</label>
                    <div className="control">
                        <input className={`input`} type="text" placeholder="Email" name="email"
                               {...register("email", {
                                       required: "email is required",
                                       maxLength: {
                                           value: 20,
                                           message: "email cannot have more than 20 characters",
                                       },
                                       pattern: {
                                           value:
                                               /^[A-Za-z0-9]+([_\\.][A-Za-z0-9]+)*@([A-Za-z0-9\\-]+\.)+[A-Za-z]{2,6}$/,
                                           message: "invalid email format",
                                       },
                                   }
                               )}
                        />
                        {errors.email && (
                            <p className="helper has-text-danger">{errors.email.message}</p>
                        )}
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className={`input`} type="password" placeholder="Password" name="password"
                               {...register("password", {
                                       required: "password is required",
                                       minLength: {
                                           value: 4,
                                           message: "password must have at least 4 digits",
                                       },
                                       maxLength: {
                                           value: 10,
                                           message: "password cannot have more than 10 digits",
                                       },
                                   }
                               )}
                        />
                        {errors.password && (
                            <p className="helper has-text-danger">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                </div>
                {/*Login Button*/}
                <div className="control">
                    <button type="submit" className="button is-fullwidth is-info register-button">Register</button>
                </div>

                <label className="login-link has-text-right">Already have an account? <Link to="/login"> Log
                    in </Link> now</label>
            </form>
        </div>
    );
}

export default Register;