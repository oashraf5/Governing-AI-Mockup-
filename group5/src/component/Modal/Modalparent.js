import React, { Component } from "react";
import ReactDOM from "react-dom";
import './Modal.css'
import {  BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Aframefor from '../aFrameFor'
import { Redirect } from "react-router-dom";
import hambtn from './Assets/menu-icon.png'
import Stakeholders from '../stakeholders/Stakeholders'
import Conclusion from './Conclusion'


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
<div >
  <button id="close" onClick={this.hide} >X</button>
  <div className="links">
<Router>
        <Link to="/Home" className="link" onClick={this.handleexpand}>Home</Link>
        <Link to="/Aframefor" className="link" onClick={this.handleexpand}>Aframefor</Link>
        <Link to="/Conclusion" className="link" onClick={this.handleexpand}>Conclusion</Link>
        <Link to="/Stakeholders" className="link" onClick={this.handleexpand}>Stakeholders</Link>
</Router>
</div>
</div>}
{ this.state.expand=="modal" &&
<Router>
        <Switch >
        <Route exact path="/Aframefor"><Aframefor /></Route>
        <Route exact path="/Stakeholders"><Stakeholders /></Route>
        <Route exact path="/Conclusion"><Conclusion /></Route>
        </Switch>
        </Router>}
    
        </div>
        
      
<div>
    <img id="hambtn" src={hambtn} onClick={this.showModal} alt="img not found"/>
      
      </div>
       
       </div>
    );
    }}

  