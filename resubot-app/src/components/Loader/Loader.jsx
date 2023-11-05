import React from 'react';
import {RotatingLines} from 'react-loader-spinner'
import './Loader.scss'

const Loader = () => (
    <div className="loader-wrapper">
        <div className='loader-bg'/>
        <div className="Loader-container">
            <RotatingLines
                strokeColor="#f28168"
                strokeWidth="3"
                animationDuration="0.75"
                width="200"
                visible={true}
            />
        </div>
    </div>
);

export default Loader;