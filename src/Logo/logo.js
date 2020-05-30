import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import Brain from './brain2.png';

function Logo(){
    return(
        <div>
        <Tilt className="Tilt ma3 tc br4" options={{ 
    max:55,     
            }} style={{ height: 150, width: 150 }} >
<div className=" Tilt-inner tc mt3"> 
<img alt="logo" src={Brain}/>
</div>
</Tilt>
        </div>
    )
}
export default Logo;