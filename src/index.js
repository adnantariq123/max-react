import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './Assignment1/App';
//import AppHocks from './AppHockStyle'

//import App from "./Person/Lesson53"

import './App.css';

import Style from "./Styling/Styling"
import registerServiceWorker from './registerServiceWorker';

//import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<Style/>, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));

//ReactDOM.render(<AppHocks />, document.getElementById('root'));


registerServiceWorker();
