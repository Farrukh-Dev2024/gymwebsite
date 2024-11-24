import React from 'react';
import { Link } from 'react-scroll';

const Offer = () => {
    return (
        <div id='presentaion' >
            <div className='pr-heading'>
                <h1>A bing <span>OFFER</span> for this summer</h1>
                <p className='details'>The quick brown fox jumps over the lazy dog</p>
                <div className='pr-btns'>
                    <Link to='#' className='pr-btn'>Join Now</Link>
                </div>

            </div>
        </div>
    );
};

export default Offer;