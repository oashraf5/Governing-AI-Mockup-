import React, { Component } from "react";
import ReactDOM from "react-dom";
import './Modal.css'
import {  BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Aframefor from '../aFrameFor'
import { Redirect } from "react-router-dom";
import hambtn from './Assets/menu-icon.png'


export default class Modal extends Component{
    constructor(props){
        super(props)
this.state={

    clsName :"none",
    show:false,
    expand:'modal-main',
  
    
   
}}

showModal = () => {
    this.setState({ show: true });
    this.setState({ clsName: "block" });
    this.setState({ expand: "modal-main" });
  };

hide=(e)=>{
    
this.setState({clsName: "none"});
}
    handleexpand=(e)=>{
        this.setState({show:false});  
        this.setState({expand:"modal"});  
    }


render(){

   
    return (
      
<div>
          
      <div className={this.state.expand} style={{display:this.state.clsName}}>
      {this.state.show==true && 
<div>
  <button id="close" onClick={this.hide} >X</button>
<Router>
        <Link to="/App/Aframefor" onClick={this.handleexpand}>Aframefor</Link>
        <Link to="/Afra" onClick={this.handleexpand}>Aframefor</Link>
        <Link to="/Afra" onClick={this.handleexpand}>Aframefor</Link>
        <Link to="/Afra" onClick={this.handleexpand}>Aframefor</Link>
</Router>
</div>}
{ this.state.expand=="modal" &&
<Router>
        <Switch >
        <Route exact path="/App/Aframefor"><Aframefor /></Route>
        </Switch>
        </Router>}
    
        </div>
        
      
<div>
    <img id="hambtn" src={hambtn} onClick={this.showModal} alt="img not found"/>
      
      </div>
       
       </div>
    );
    }}

  