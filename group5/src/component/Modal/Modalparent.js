import React, { Component } from "react";
import ReactDOM from "react-dom";
import './Modal.css'
import {  BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Aframefor from '../aFrameFor'
import { Redirect } from "react-router-dom";


export default class Modal extends Component{
    constructor(props){
        super(props)
this.state={

    hideflag :"block",
    show:false,
    aframe:false,
    expand:'modal-main',
    redirect:'/Aframefor',
    rede:false
   
}}

showModal = () => {
    this.setState({ show: true });
    this.setState({ hideflag: "block" });
    this.setState({ expand: "modal-main" });
  };

hide=(e)=>{
    this.setState({ rede:true}) 
    // <Redirect to={this.state.redirect} />
    // this.setState({hideflag: "none"});
}
    handleexpand=(e)=>{
        this.setState({show:false});  
        this.setState({expand:"modal"});  
    }


render(){

   
    return (
      <div>

          {this.state.rede==true &&
          <Router>
          <Redirect to={this.state.redirect} />
          </Router>}
     
      <div className={this.state.expand} style={{display:this.state.hideflag}}>
      {this.state.show==true && 
<div>
  <button onClick={this.hide} >close</button>
  
        <button onClick={this.handleexpand}>expand</button>
        
        <Router>
        <Link to="/App/Aframefor" onClick={this.handleexpand}>Aframefor</Link>
        <Link to="/Afra" onClick={this.handleexpand}>Aframefor</Link>
        <Switch style={{display:"none"}}>
        <Route exact path="/App/Aframefor"><Aframefor /></Route>
        </Switch>
        </Router>
        </div>}
        
        </div>
<div>
        <button id="hambtn" onClick={this.showModal} >ShowModal</button> 
      </div>
        </div>
    );
    }}

  