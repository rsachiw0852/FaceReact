import React from 'react';
import './face.css';

function FaceDetect({imageUrl,box}){
    return(
        <div className='tc grow xxx1'>
        <img id='inputImage' alt='' src={imageUrl}/>
            <div className='bounding-box' style={{top:box.topRow,right:box.rightCol,bottom:box.bottomRow,left:box.leftCol}}>
            </div>
            <div className='margin'></div>
        </div>
        
    )
}
export default FaceDetect; 