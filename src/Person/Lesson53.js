import React, { Component } from 'react';
//import './App.css';

import Person from "./Person"

class App extends Component {
  state = {
    persons:[
      {id:"1", name:"Adi", age:39},
      {id:"2", name:"Oriana", age:35},
      {id:"3", name:"Rafi", age:3},
      {id:"4", name:"Stuff", age:100}
    ],
    zzz_showPerson: false

  }

  switchNameHandler=() => {
    // Don't do this this.state.persons[0].name="Ahmed Adnan Tariq";
      this.setState({persons:[
        {id:"1", name:"Ahmed Adnan Tariq", age:39},
        {id:"2", name:"Oriana Adnan", age:35},
        {id:"3", name:"Rafi Adnan", age:3},
        {id:"4", name:"Stuff", age:100}
      ]})
  }


//mother of god
// pretty powerful i think, you can change the setstate based on the event.. in this example it will be an input field

  nameChangedHandler = (event, id) => {
    // .findIndex is a function just like .map
    const personIndex = this.state.persons.findIndex(ppp => {
      // right now the ppp is coming from "this.state.persons" and there we have an id tag, so that is ppp.id
      // and then === id is the argument that we passed from nameChangedHandler = (event, id)
      return ppp.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

      this.setState({persons: persons});
  }





// cause I changed the code slighty from what Max is doing it might be best to add another function to handle the argument
  switchSillyHandler=(newName) => {
    // Don't do this this.state.persons[0].name="Ahmed Adnan Tariq";
      this.setState({persons:[
        {id:"1", name:"Adi", age:39},
        {id:"2", name:"Oriana", age:35},
        {id:"3", name:"Rafi", age:3},
        {id:"4", name:newName, age:100}
      ]})
  }


 
  togglePersonHandler =() => {
    // ok so we are first grabbing whatever the boolean value if of the show person
    const doesShow = this.state.zzz_showPerson;
    // THEN we setSate of showPerson... TO THE OPPSOITE OF WHATEVER doesShow WAS using ": !" 
    this.setState({zzz_showPerson: !doesShow});
  }




  deletePersonHandler = (personIndex) => {
    // so monkey here is getting the value of the array this.state.persons; that itself isn't enough and we have 
    // use the SLICE method WITHOUT any arguments. SLICE method without amy arguemnts simply copies the full array 
    // and returns a NEW array which is stored in monkey.... that is why we use the slice method
    const monkey = this.state.persons.slice();
    // we then take that new array and remove the array by getting the argument personIndex
    //The splice() method adds/removes items to/from an array, and returns the removed item(s).
    //array.splice(index, howmany, item1, ....., itemX). So in our example we need to remove an item from the array 
    //at the 'personIndex' index of the array.. How many?  just one so we pass .splice(personIndex,1)
    // if we passed 0 nothing would have been removed

    monkey.splice(personIndex,1);

    // then we update the react state with out NEW array.. in this case monkey
    this.setState({persons:monkey})

  }

  render() {

    //NOW we are doing this a little bit more JS way.. regualr if then
    let xyz = null;

    if (this.state.zzz_showPerson) {
        xyz = (

          // we can add as many functions/methond handlers. the component person has seprate tags one p and
          // another input which will take them and work with them

          <div>
            {this.state.persons.map((xyz, index) => (
            <Person
            key={xyz.id} 
            name={xyz.name} 
            age={xyz.age}
            clicker= {()=> this.deletePersonHandler(index)}

            changed= {(event)=> this.nameChangedHandler(event, xyz.id)}
            >
            {/* try to understand this fuckery 
            (event)=> this.nameChangedHandler(event, xyz.id) is event driven, you will first add the event
            then add it to the function nameChangedHandler AS A ARGUMENT.. and also we need the id 
            ... yeah fml*/}

            </Person>))}
          </div>
        );
    }


    return (
    <React.Fragment>
        <h1>Max Style - coming from lesson 53 & IMP 57 59!! to handle Dynamic content, Flexible Lists .. and what not</h1>
        <p> more p tags</p>
        <button onClick={this.togglePersonHandler}>HideStuff</button>

        {/*  and becuase we can call/set-up/etc expression using the {}  we simply call xyz ^_^*/}

        {xyz}

   



    </React.Fragment>   
    );

  }


}

export default App;
