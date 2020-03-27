import React from 'react';
import './navigation.css'

const Navigation = ({ onRouteChange, isSignedIn }) => {
        if (isSignedIn){
            return(
                <nav className='nav'>
                    <p onClick={() => onRouteChange('signout')}
                    className='pointer dim ma2 pa2'> Sign Out
                    </p>
                </nav>
            );
        } else {
            return(
                <nav className='nav'>
                    <p onClick={() => onRouteChange('signin')}
                    className='pointer dim ma2 pa2'> Sign In
                    </p>
                    <p onClick={() => onRouteChange('register')}
                    className='pointer dim ma2 pa2'>Register
                    </p>
                </nav>
            );
        }
}

export default Navigation;