import React from 'react';
import './SingleReview.css'

const SingleReview = (props) => {
    const { id, user, text, ratings, userImage } = props.review
    return (
        <div>
            <div className='single-review'>
                <img src={userImage} alt="" />
                <h3>Name :{user}</h3>
                <p>{text}</p>
                <p>Ratings :{ratings}</p>
            </div>

        </div>
    );
};

export default SingleReview;