// import React from 'react';
// import './../Aframefor-styling.css';

// class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//         items:[],
//         currentitems:{
//             text:'',
//             key:''
//         }
//     }
//     this.addItem = this.addItem.bind(this);
//     this.handleInput = this.handleInput.bind(this);
//     this.deleteItem = this.deleteItem.bind(this);
//     this.setUpdate = this.setUpdate.bind(this);
//   }


// handleInput(e){
//     this.setState({
//       currentItem:{
//         text: e.target.value,
//         key: Date.now()
//       }
//     })
//   }





//   deleteItem(key){
//     const filteredItems= this.state.items.filter(item =>
//       item.key!==key);
//     this.setState({
//       items: filteredItems
//     })

//   }



//   setUpdate(text,key){
//     console.log("items:"+this.state.items);
//     const items = this.state.items;
//     items.map(item=>{      
//       if(item.key===key){
//         console.log(item.key +"    "+key)
//         item.text= text;
//       }
//     })
//     this.setState({
//       items: item
//     })
// }

// addItem(e){
//     e.preventDefault();
//     const newItem = this.state.currentItem;
//     if(newItem.text !==""){
//       const items = [...this.state.items, newItem];
//     this.setState({
//       items: items,
//       currentItem:{
//         text:'';
//         key:''
//       }
//     })
//     }
//   }
//   }


//     render()
//         return(

//             <div>
//             <form onSubmit={this.addItem}>
//                 <input type="text" value={this.state.currentitems} onChange='this.handleInput'></input>

//                 <button type="submit">Submit</button>
//             </form>

//             <p>{this.state.items.text}</p>
        
//             <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
//             </div>

//         );

// export default App;