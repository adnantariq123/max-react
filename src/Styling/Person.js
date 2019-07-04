import React, { Component } from 'react';
// for CSS modules we get git of Radium
//import Radium from 'radium';
import './PersonCSS.css';


const person = (props) => {

    // const style = {
    //     '@media (min-width:500px)': {
    //         width:'450px'
    //     }
    // };



    //return <p>I'm a person, my name is {props.name} and I'm {Math.floor(Math.random() * 50)} years old O,o</p>
    return (
    // need for Radium <div className="Person" style={style}>
    <div className="Person">

        <p onClick={props.clicker}>I'm a person, my name is {props.name} and I'm {props.age} years old O,o</p>
        {/* while this technically did not throw an error it's best to remove it
        cause without any children it was render as extra blank p tags <p>{props.children}</p> */}


        {/* the working example for this input field will only work on the LAst one as that is where we set it up.
        and it works on the onChange event 
        ...aaaand we have an onChange simply because it's a default property to them inputs tags*/}
        <input type="text" onChange={props.changed} />
    </div>
    )
}


//export default Radium(person);

export default person;















