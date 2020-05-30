import React, { Component } from 'react';
import './register.css';
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      registerEmail:'',
      registerPassword:''
    }
  }
  onNameChange=(event)=>{
    this.setState({name:event.target.value})
  }
  onEmailChange=(event)=>{
    this.setState({email:event.target.value});
  }
  onPasswordChange=(event)=>{
    this.setState({password:event.target.value});
  }
  onSubmit=()=>{
    fetch('http://localhost:5000/register',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        name:this.state.name,
        email:this.state.email,
        password:this.state.password
      })
    })
    .then(Response=>Response.json())
    .then(user=>{
      //if(user.name.length>3 && user.email.length>10){
        if(user.id){
        console.log(user);
        this.props.loadUser(user);
        this.props.onRouteChange("Home");
      }else {
        alert("Enter your details...")
      }
    })
  }
  render() { 
    return(
      <div>
      <article className="register center grow shadow-5 mw7 br4 pa4 black-80">
<div action="sign-up_submit" method="get" acceptCharset="utf-8">
  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
    <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
    <div className="mt3">
      <label className="db fw4 lh-copy f3" htmlFor="name">Name</label>
      <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="name" />
    </div>
    <div className="mt3">
      <label className="db fw4 lh-copy f3" htmlFor="email-address">Email address</label>
      <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"/>
    </div>
    <div className="mt3">
      <label className="db fw4 lh-copy f3" htmlFor="password">Password</label>
      <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password"/>
    </div>
  </fieldset>
  <div className="mt3">
  <input onClick={this.onSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4" type="submit" value="Register"/>
  </div>
</div>
</article>
</div>
  )
  }
}
export default Register;