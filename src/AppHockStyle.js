// LOOK at useState instead of components
import React, { useState } from 'react';
import './App.css';

import Person from "./Person/Person"

//class App extends Component {
//aaand since we need to rearange / update/ whatevere we use the distribute thingy instead of = const app = (props) => {
const app = (props) => {

  const [personsOriginalState, setPersonState] = useState({
    persons:[
      {name:"Addddi", age:39},
      {name:"Ordddiana", age:35},
      {name:"Rasssfi", age:3},
      {name:"Stuff", age:100}
    ]
  });  


  const switchNameHandler=() => {
    setPersonState({
      persons:[
        {name:"Ahmed Adnan Tariq", age:39},
        {name:"Oriana Adnan", age:35},
        {name:"Rafi Adnan", age:3},
        {name:"Stuff", age:100}
      ]})
  }



    return (
    <React.Fragment>
        <h1>Max Style- coming from the Hocks Examples</h1>
        <p> more p tags</p>
        {/* remember we are NOT inside a class anymore cause Max had to mess things up and show us the Hock method.. 
        so NOW we add the function name without the "THIS. keyword.. easy to remember right*/}
        <button onClick={switchNameHandler}>Switch Name</button>


        {/* we cannot use this.state anymore cause this is not a class based ... 
        sooo we use the personsOriginalState thingy -.- 
        moral of the story please stick with class */}

        {personsOriginalState.persons.map(xyz => (
          <Person name={xyz.name} age={xyz.age}></Person>
          )
        )}



    </React.Fragment>   
    );


}
//export default App;
export default app;





















