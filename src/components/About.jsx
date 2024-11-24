import React from 'react';
import aboutimage from '../images/about.png';
const About = () => {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={aboutimage} alt=''/>
            </div>
            <div className='about-text'>
                <h1>Learn more about us</h1>
                <p>Suspendisse pharetra nibh quis sagittis condimentum. Vivamus eget bibendum sem. Aenean sagittis odio lectus, ut pulvinar metus facilisis in. Curabitur eleifend interdum erat, a suscipit nulla congue ac. Fusce nulla lectus, ornare ac ipsum vel, hendrerit bibendum felis. Fusce in condimentum lectus. </p>
                <button>Contact Us</button>
            </div>
        </div>
    );
};

export default About;