import React from "react";
import axios from "../../common/axiosConfig.js";
import './Login.scss';
import {useForm} from "react-hook-form"; //plugin that help with validate form inputs
import {toast} from "react-toastify"; //notification plugin
const Login = ({props}) => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = async (data) => {
    };

    //JSX
    return (
        <div className="login-wrapper">
            <form className="box login-box" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="title is-1 has-text-centered">Login</h1>
                <div className="field">
                    {/* email */}
                    <label className="label">Email</label>
                    <div className="control">
                        <input className={`input`} type="text" placeholder="Email" name="email"/>
                        {/*{errors.email && (*/}
                        {/*    <p className="helper has-text-danger">{errors.email.message}</p>*/}
                        {/*)}*/}
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className={`input`} type="password" placeholder="Password" name="password"/>

                        {/*{errors.password && (*/}
                        {/*    <p className="helper has-text-danger">*/}
                        {/*        {errors.password.message}*/}
                        {/*    </p>*/}
                        {/*)}*/}
                    </div>
                </div>
                {/*Login Button*/}
                <div className="control">
                    <a className="button is-fullwidth is-info login-button" href="/home">Login</a>
                </div>

                <label className="register-link has-text-right">Don't have an account? <a href="/register"> Sign
                    up </a> Today</label>
            </form>
        </div>
    );
}

export default Login;