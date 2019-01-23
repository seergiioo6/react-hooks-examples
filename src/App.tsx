import React, { Component } from 'react';
import './App.css';
import { Greeting } from './Greeting'
import { User } from './User'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Greeting />
          <User />
      </div>
    );
  }
}

export default App;
