import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro/App.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
       <Intro />
      </div>
    );
  }
}

export default App;
