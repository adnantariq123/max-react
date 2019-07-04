import React, { Component } from 'react';

// we are NOT using classes yet :(
//class UserInput extends Component {

const UserInput = (timmy) => {
        return ( 
            <input className="m-2" type="text" onChange={timmy.changed} value={timmy.whouBe} />
         );
    
}
 
export default UserInput;