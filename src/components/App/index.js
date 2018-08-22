import React, { Component } from "react";
import "./App.css";
import Intro from "../Intro/App.js";
import "whatwg-fetch";

import Series from '../../containers/series'

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here You can find all of your most loved series" />
       
        <Series/>
      </div>
    );
  }
}

export default App;
