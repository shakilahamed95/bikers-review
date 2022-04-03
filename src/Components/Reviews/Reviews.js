import React from 'react';
import useReviews from '../../Hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div>
            <h1 className='heading'> What Our Valuable Customer Say !!!</h1>
            <div className='review-container'>
                {
                    reviews.map(review => <SingleReview
                        key={review.id}
                        review={review}
                    ></SingleReview>)
                }

            </div>
        </div>
    );
};

export default Reviews;