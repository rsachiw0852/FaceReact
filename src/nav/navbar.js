import React from 'react';

function Navbar({onRouteChange,isHome}){

    if(isHome){
        return(
            <div>
            <nav style={{color:"green",display:"flex",justifyContent:'flex-end'}}>
            <p onClick={()=>onRouteChange('login')} className="grow f3 pa3 black underline pointer i b">SignOut</p>
            </nav>
            </div>
        )
    }
    else {
      return(
          <div>
          <nav style={{color:"green",display:"flex",justifyContent:'flex-end'}}>
          <p onClick={()=>onRouteChange('login')} className="grow f3 pa3 black underline pointer i b">SignOut</p>
        <p onClick={()=>onRouteChange('register')} className="grow f3 pa3  black underline pointer i b">Register</p>
          
          </nav>
          </div>
      )
    }
    
}
export default Navbar;