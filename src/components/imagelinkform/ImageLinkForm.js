import React from 'react';
import './Input.css'

const ImageLinkForm = () => {
    return (
        <div className='imagelink'>
            <p className='text'>{'This magic brain will detect faces, upload a picture to give it a try'}</p>
            <div>
                <input className='input' type='tex' />
                <button className='button'>Detect</button>
            </div>
        </div>
    );
}

export default ImageLinkForm;