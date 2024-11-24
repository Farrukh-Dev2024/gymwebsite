import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <div id='main'>
            <div className='header-heading'>
                <h2>Step up your</h2>
                <h1><span>Fitness</span> with us</h1>
                <p className='details'>Build your body and fitness with professional touch</p>
                <div className='header-btns'>
                    <Link className='header-btn' to='#main'>Join Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;