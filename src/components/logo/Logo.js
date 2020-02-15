import React from 'react';
import './Logo.css'
import Brain from './Brain.png'

const Logo = () => {
    return (
        <div className='logo'>
            <div><img src={Brain} alt="logo"></img> </div>
        </div>
    );
}

export default Logo;