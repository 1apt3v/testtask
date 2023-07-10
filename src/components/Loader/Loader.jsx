import React from 'react';
import loaderImg from './../../img/loader.gif'

const Loader = () => {
    return (
        <div>
            <div className='loaderWrapper'>
                <img className='loader' src={loaderImg} alt="Loading..." />
            </div>
        </div>
    );
};

export default Loader;