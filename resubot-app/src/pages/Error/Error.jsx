import React from "react";
import './Error.scss'


//Error Page
const ErrorPage = () =>
    (
        <div className="error-wrapper">
            <div className="error-bg">
            <i className='bx bx-bug'/>
            <h1 className="title is-1">404</h1>
            <h2 className="subtitle is-2">Sorry, page not found</h2>
            <p>The URL you requested was probably broken or the page has been removed.</p>
            </div>
        </div>
    )


export default ErrorPage