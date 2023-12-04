import React from "react";
import './Login.scss';
import {useForm} from "react-hook-form"; //plugin that help with validate form inputs
import axios from "../../common/axiosConfig.js";
import {toast} from "react-toastify";
import auth from "../../common/auth.js";
import { Link, useNavigate } from "react-router-dom";


const Login = ({props}) => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = async (data) => {
        //Login function implementation
        try {
            const {email, password} = data;
            //verify user information
            const res = await axios.post("/api/auth/login", {email, password});
            const jwToken = res.data;
            console.log(jwToken);
            // save jwToken in local storage
            auth.setToken(jwToken);
            toast.success("Login Successful");
            navigate("/home");
        } catch (error) {
            toast.error("Login Failed, Please Check Your Credentials");
        }
    };


    return (
        <div className="login-wrapper">
            <form className="box login-box" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="title is-1 has-text-centered">Login</h1>
                <div className="field">
                    {/* email */}
                    <label className="label">Email</label>
                    <div className="control">
                        <input className={`input ${errors.email && 'is-danger'}`}
                               type="text"
                               placeholder="Email"
                               name="email"
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
                        <input className={`input ${errors.password && 'is-danger'}`}
                               type="password"
                               placeholder="Password"
                               name="password"
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
                    <button type="submit" className="button is-fullwidth is-info login-button">Login</button>
                </div>

                <label className="register-link has-text-right">Don't have an account? <Link to="/register"> Sign
                    up </Link> Today</label>
            </form>
        </div>
    );
}

export default Login;