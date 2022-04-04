import React from 'react';
import notFound from '../../Resources/notFound.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <img className='not-found' src={notFound} alt="" />
            <h1>There is no webpage in this addres .....</h1>
        </div>
    );
};

export default NotFound;