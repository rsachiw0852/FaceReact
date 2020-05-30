import React, { Component } from 'react';
import LoginPage from './login/LoginPage';
import './App.css';
import Particles from 'react-particles-js';
import Navbar from './nav/navbar';
import Logo from './Logo/logo'
import Register from './Register/register';
import ImageLink from './imageLink/ImageLink';
import Rank from './Rank/rank';
import FaceDetect from './FaceDetect/FaceDetect';

    const initialState={
            input:'',
            imageUrl:'',
            route:'login',
            isHome:false,
            box:{},
            user:{
                id:'',
                name:'',
                email:'',
                entries:0,
                joined:''
            }
    }
class App extends Component{
    constructor(){
        super();
        this.state=initialState
    }  
    calculateFaceLocation=(data)=>{
        const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
        const image=document.getElementById("inputImage");
        const width=Number(image.width);
        const height=Number(image.height)
        //console.log(data);
        //console.log(clarifaiFace);
        return{
            leftCol:clarifaiFace.left_col*width,
            topRow:clarifaiFace.top_row*height,
            rightCol:width-(clarifaiFace.right_col*width),
            bottomRow:height-(clarifaiFace.bottom_row*height)
        }
    }
    displayBox=(box)=>{
        this.setState({box:box});
        //console.log(this.state.box);
    }
    loadUser=(data)=>{
        this.setState({user:{
            id:data.id,
            name:data.name,
            email:data.email,
            entries:data.entries,
            joined:data.joined
        }})
    }

    onRouteChange=(route)=>{
       // console.log(route);
        if(route==='Home'){
            this.setState({isHome:true})
        }else{
            this.setState(initialState)
        }
        this.setState({route:route})
    }
    onChange=(event)=>{
        //console.log(event.target.value);
        this.setState({input:event.target.value})
    }
    onDetect=()=>{
        this.setState({imageUrl:this.state.input})
        fetch('http://localhost:5000/imageUrl',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                input:this.state.input
            })
        })
        .then(response=>response.json())
            .then(response=>{
                if(response){
                    fetch('http://localhost:5000/image',{
                        method:'put',
                        headers:{'Content-Type':'application/json'},
                        body:JSON.stringify({
                            id:this.state.user.id
                        })
                    })
                    .then(response=>response.json())
                    .then(count=>{
                        this.setState(
                            Object.assign(this.state.user,{entries:count})
                        )  
                        })
                }
                this.displayBox(this.calculateFaceLocation(response))
            })
    }
    render(){
        return(
            <div>
            <div>
            <Particles className='Particles'
    params={{
            "particles": {
                "number": {
                    "value": 100
                },
                "size": {
                    "value": 3
                }
            },
        "interactivity": {
            "events": {
                "onhover": {
                        "enable": true,
                        "mode": "repulse"
                }
            }
        }            
    }} />
            </div>

            <Navbar onRouteChange={this.onRouteChange} isHome={this.state.isHome}/>
            {
                this.state.route==='login' ?
                <LoginPage loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                :(

                    this.state.route==='Home'? 
                    <div>
                    <Logo/>
                    <Rank entries={this.state.user.entries} name={this.state.user.name}/>  
                    <ImageLink  onChange={this.onChange} onDetect={this.onDetect}/>
                    <FaceDetect box={this.displayBox} imageUrl={this.state.imageUrl}/>
                    </div>
                    :
                    <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                )
            }
            </div>
        )
    }
}
export default App;