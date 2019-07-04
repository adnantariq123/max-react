import React, { Component } from 'react';

//class UserOutput extends Component {

const UserOutput = (xyz) => {
     
        return ( 

<div className="card" style={{fontSize:30}}>
    <ul className="list-group list-group-flush">

                <p className="list-group-item">the name is {xyz.namer}</p>

                <p className="list-group-item">stuff is banging</p>

    </ul>
</div>            
         );
    
}
 
export default UserOutput;