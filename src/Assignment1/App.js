import React, { Component } from 'react';

// so kinda big mistake we are not using classes uyet just functions 
//import UserInput from "./UserInput";
//import UserOutput from "./UserOutput";
// so we are using the following syntax below 

import UserInput from "./UserInput"
import UserOutput from "./UserOutput"


class App extends Component {
  state = { 
    userName: [
      {name:"Adi"},
      {name:"Oriana"},
      {name:"Rahat"},
      {name:"Parveen"}
    ]
   }

   nameChange = (event) => {
     console.log("nameChange");
     this.setState({userName:[
      {name:event.target.value},
      {name:"Oriana"},
      {name:"Rahat"},
      {name:"Parveen"}          
    ]})     
   }
  render() { 
    return (
      <React.Fragment>
        <UserOutput namer={this.state.userName[0].name}></UserOutput>

        <UserInput whouBe={this.state.userName[0].name} changed={this.nameChange}></UserInput>
        <UserInput whouBe={this.state.userName[1].name}></UserInput>
        <UserInput whouBe={this.state.userName[2].name}></UserInput>
        <UserInput whouBe={this.state.userName[3].name}></UserInput>
        
        {/* <br/>
        at it's simplist form:

        {this.state.people.map(xyz => (<UserInput></UserInput>))}

        */}

      </React.Fragment>
    );
  }
}
 
export default App;