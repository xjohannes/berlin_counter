import React, { Component } from 'react';
import logo from './photo.jpg';
import Button from './button'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.test = 0;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Berlin counter</h2>
        </div>


      </div>
    );
  }
}

export default App;
