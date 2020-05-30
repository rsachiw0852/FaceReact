import React, { Component } from 'react';
import 'tachyons';
import './login.css';
class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state={
      loginEmail:'',
      loginPassword:''
    }
  }
  onLoginEmailChange=(event)=>{
    //console.log(event.target.value);
    this.setState({loginEmail:event.target.value})
  }
  onLoginPasswordChange=(event)=>{
    this.setState({loginPassword:event.target.value})
  }
  // "react-scripts": "3.4.1",
 onLoginSubmit=()=>{
   fetch('http://localhost:5000/login',{
     method:'post',
     headers:{'Content-Type':'application/json'},
     body:JSON.stringify({
       email:this.state.loginEmail,
       password:this.state.loginPassword
     })
   })
   .then(Response=>Response.json())
   .then(user=>{
     console.log(user);
     if(user.id){
      this.props.loadUser(user);
      this.props.onRouteChange("Home");
     }else {
       alert('email and password are wrong !')
     }
   })
   
 }
  render() { 
    const {onRouteChange}=this.props;
    return(
      <div>
        <main className="tc login br4 body shadow-5  BG  ma5 pa4 grow  tc pa4 black-80 center">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f3" htmlFor="email-address">Email</label>
        <input onChange={this.onLoginEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white " type="email" />
      </div>
      <div className="mv3">
        <label  className="db fw6 lh-copy f3" htmlFor="password">Password</label>
        <input onChange={this.onLoginPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white " type="password"/>
      </div>
    </fieldset>
    <div className="">
      <input 
      onClick={this.onLoginSubmit}
      className="x  ph1 pv1 input-reset ba b--black bg-transparent grow pointer f4 dib" 
      type="submit" 
      value="Sign in"/>
    </div>
    <div className="lh-copy mt3">
      <a onClick={()=>onRouteChange('register')}
      href="#0" className="f3 link dim black db">Register</a>

    </div>
  </div>
</main>
        </div>
    )
  }
}
export default LoginPage;


