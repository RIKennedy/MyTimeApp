import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ( {imageUrl, box} ) => {
    return (
        <div className= 'pad20'>
            <div className='absolute'>
            <img id='inputImage' alt='Enter a proper URL' src={imageUrl} width='500px' height='auto' />
            
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
            </div>
            </div>
        </div>
    );
}

export default FaceRecognition;