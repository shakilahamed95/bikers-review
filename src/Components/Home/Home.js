import React from 'react';
import bike from '../../Resources/bike.jpg'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <img className='img-container' src={bike} alt="" />

                <div className='description-container'>
                    <h1>Honda CB150R Streetfire</h1>
                    <h3>Can Be Your next Dream Bike</h3>
                    <p>Honda CB150R Streetfire is one of the top rated Honda's racing bikes, which is the member of world famous CB150R naked sport bike series. The CB150R Streetfire is also made by PT Astra Honda Motor one of the subsidiaries of Honda Global. The bike was made in Indonesia for south Asian markets including Bangladesh.</p>
                    <button className='btn'>See More</button>
                </div>
            </div>

            <div customer-review>

            </div>
        </div>
    );
};

export default Home;