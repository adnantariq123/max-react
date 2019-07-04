import React, { Component } from 'react';
//import './App.css';

import Person from "./Person"
// for CSS module we had to git ride of the Radium package 
//import Radium, {StyleRoot}  from 'radium';

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




  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(ppp => {

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
    const doesShow = this.state.zzz_showPerson;
    this.setState({zzz_showPerson: !doesShow});
  }




  deletePersonHandler = (personIndex) => {

    const monkey = this.state.persons.slice();

    monkey.splice(personIndex,1);

    // then we update the react state with out NEW array.. in this case monkey
    this.setState({persons:monkey})

  }

  render() {
    const someStyle = {
      backgroundColor:'#22ff22',
      border:'1px solid #036',
      padding: '10px',
      margin:'0px auto',
      display:'block', 
      cursor: 'pointer',
      //Radium Code
      // ':hover':{
      //   backgroundColor:'#555',
      //   color:'#fff'
      // }
    };



    let xyz = null;

    if (this.state.zzz_showPerson) {
       
      // Check the states IF changed.. you can chane the css as well
      // how cool is that. 
      someStyle.backgroundColor='#c00';
      someStyle.color = '#fff';
      //Radium Code 
      // someStyle[':hover'] = {
      //   backgroundColor:'#555',
      //   color:'#fff'
      // }
      
      xyz = (
          <div>
            {this.state.persons.map((xyz, index) => (
            <Person
            key={xyz.id} 
            name={xyz.name} 
            age={xyz.age}
            clicker= {()=> this.deletePersonHandler(index)}

            changed= {(event)=> this.nameChangedHandler(event, xyz.id)}
            >


            </Person>))}
          </div>
        );
    }



    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push ('red');
    }
    if(this.state.persons.length <=1) {
      classes.push('bold');
    }






    return (
      /*IMPORTANT if you wanna use media query in react WITH Radium we have to use the StyleRoot tag that 
      you get with the import Radium, {StyleRoot}  from 'radium';
      <StyleRoot>
      and cause we are doing CSS modules now we have to git ride of Radium*/
    <div className="App">
        <h1>Coming from ./styling/styling (with GIT)</h1>
        {/* the className={classes.join(' ')} 
          the .join(' ') MUST HAVE A FUCKING SPACE to keep the classes seprate*/}
        <p className={classes.join(' ')}>from chapters 63 onwards</p>
        <button
        //we set the style dynamically witht he state change of zzz_showPerson
          style={someStyle}
          onClick={this.togglePersonHandler}>HideStuff</button>

        {/*  and becuase we can call/set-up/etc expression using the {}  we simply call xyz ^_^*/}

        {xyz}

    </div>
    // </StyleRoot>
    );

  }


}

//export default Radium(App);
export default App;