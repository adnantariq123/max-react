import React, { Component } from 'react';
//import './App.css';

import Person from "./Person"

class App extends Component {
  state = {
    persons:[
      {name:"Adi", age:39},
      {name:"Oriana", age:35},
      {name:"Rafi", age:3},
      {name:"Stuff", age:100}
    ],
    zzz_showPerson: false

  }

  switchNameHandler=() => {
    // Don't do this this.state.persons[0].name="Ahmed Adnan Tariq";
      this.setState({persons:[
        {name:"Ahmed Adnan Tariq", age:39},
        {name:"Oriana Adnan", age:35},
        {name:"Rafi Adnan", age:3},
        {name:"Stuff", age:100}
      ]})
  }

// pretty powerful i think, you can change the setstate based on the event.. in this example it will be an input field
  nameChangedHandler = (event) => {
      this.setState({persons:[
        {name:"Superman", age:39},
        {name:"wonder woman", age:35},
        {name:"Dash", age:3},
        {name:event.target.value, age:100}       
      ]})
  }



// cause I changed the code slighty from what Max is doing it might be best to add another function to handle the argument
  switchSillyHandler=(newName) => {
    // Don't do this this.state.persons[0].name="Ahmed Adnan Tariq";
      this.setState({persons:[
        {name:"Adi", age:39},
        {name:"Oriana", age:35},
        {name:"Rafi", age:3},
        {name:newName, age:100}
      ]})
  }

  //VERY IMP
  togglePersonHandler =() => {
    // ok so we are first grabbing whatever the boolean value if of the show person
    const doesShow = this.state.zzz_showPerson;
    // THEN we setSate of showPerson... TO THE OPPSOITE OF WHATEVER doesShow WAS using ": !" 
    this.setState({zzz_showPerson: !doesShow});
  }



  render() {
    return (
    <React.Fragment>
        <h1>Max Style - using classes</h1>
        <p> more p tags</p>
        <button onClick={this.togglePersonHandler}>HideStuff</button>

        {/* 
        and this isn't a .show .hidden approach. Because this is a 'virtual dom' it actually completelly REMOVES the div block 
        or addeds it back in... far moe powerful than adding them .css ^_^ You can check this in inspect elements
        
        because jsx is using html as 'syntacial sugar' we can make it dynamic by simply adding the  { } 
        between a block of div tags

        sooooo.. we added another property in the state called zzz_showPerson
        
        then we check if it were true or flase by doing "?" {this.state.zzz_showPerson === true ? 
        
        IF true then the block of div/person/p tags etc show ups. 
        
        if it is false we have a Null .... look for the ENDING </div> : null
        easy right
        */}

        {this.state.zzz_showPerson === true ? 
          <div>
          {this.state.persons.map(xyz => (
            <Person name={xyz.name} age={xyz.age}></Person>
            )
          )}

          {/* an extra person to follow along with Max... insetad of what Mosh should us */}
          <p>an extra person tag. THIS one will work with the input field! very cool!</p>
          <Person name={this.state.persons[3].name} age= {this.state.persons[3].age}
          clicker={()=>this.switchSillyHandler("strange O_o")}
          changed={this.nameChangedHandler}
          >

          </Person>

          </div> : null
        }



    </React.Fragment>   
    );

  }

  //return React.createElement('div',null,'h1',"yo sdvdf o!");

  //return React.createElement('div',null, React.createElement('h1',null,"i confuse the f out of u"));
  //}
}

export default App;
