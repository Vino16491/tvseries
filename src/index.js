import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const getCurrentDate = () => {
    const date = new Date();
    return date.toString();
}

const greeting = <h1> Hello World Current Date: {getCurrentDate()}</h1>

ReactDOM.render(greeting, document.getElementById('root'));
registerServiceWorker();