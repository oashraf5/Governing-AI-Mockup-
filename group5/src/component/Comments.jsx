import React from 'react';
// import Aframefor-styling from './../Aframefor-styling.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
        items:[],
        currentitems:{
            text:'',
            key:''
        }
    }
}

    render(){
        return(
            <form>
                <input type="text" value="{this.state.items}"></input>

                <button type="submit">Submit</button>
            </form>

        );
    }
}
export default App;