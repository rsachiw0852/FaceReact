import React from 'react';
import './imageLink.css';
function ImageLink({onChange,onDetect}){
    return(
        <div>
        <div>
        <p className='tc f3 color'>
        {`This Magic brain will detect your face.Git it try  ! `}
        </p>
        </div>
        <div className='xxx center grow  form pa3 shadow-5 br4 '>
        <input onChange={onChange} placeholder="insert your photo link here !" className="w-70 tc ma3 bg-light-gray " type='text'/>
        <button onClick={onDetect} className="grow w-30 br4 f3 ">Detect</button>
        </div>
        </div>
    )
}
export default ImageLink;