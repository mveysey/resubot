import React from 'react';
import {RotatingLines} from 'react-loader-spinner'
import './Loader.scss'

const Loader = () => (
    <>
        <div className='loader-bg'/>
        <div className="Loader-container">
            <RotatingLines
                strokeColor="silver"
                strokeWidth="5"
                animationDuration="0.75"
                width="100"
                visible={true}
            />
        </div>
    </>
);

export default Loader;