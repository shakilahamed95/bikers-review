import React, { useEffect, useState } from 'react';
import useReviews from '../../Hooks/useReviews';
import bike from '../../Resources/bike.jpg'
import './Home.css'
import SingleReview from '../SingleReview/SingleReview'
import { Link } from 'react-router-dom';


const Home = () => {
    const [reviews, setReviews] = useReviews();
    if (reviews.length > 3) {
        const newreviews = reviews.slice(0, 3)
        setReviews(newreviews)
    }
    return (
        <div>
            <div className='home-container'>
                <img className='img-container' src={bike} alt="" />

                <div className='description-container'>
                    <h1>Honda CB150R Streetfire</h1>
                    <h3>Can Be Your next Dream Bike</h3>
                    <p>Honda CB150R Streetfire is one of the top rated Honda's racing bikes, which is the member of world famous CB150R naked sport bike series. The CB150R Streetfire is also made by PT Astra Honda Motor one of the subsidiaries of Honda Global. The bike was made in Indonesia for south Asian markets including Bangladesh.</p>
                    <button className='btn'> See More</button>
                </div>
            </div>

            <div customer-review>
                <h1>Customer Review</h1>
                <div className='review-container'>
                    {
                        reviews.map(review => <SingleReview
                            key={review.id}
                            review={review}
                        ></SingleReview>)
                    }
                </div>
                <Link to='/reviews' className='btn'>See All Reviews</Link>
            </div>
        </div>
    );
};

export default Home;