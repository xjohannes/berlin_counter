import React, { Component } from 'react';
import logo from './logo.svg';
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
  handleClick = (evt)=> {
    console.log("STATE", evt.target.value);
    if(evt.target.value === "+") {
      this.setState((prevState, props) =>
          ({
          counter: ++prevState.counter
        }), console.log("Pluss", this.state.counter));
    } else {
      this.setState((prevState, props) =>
          ({
          counter: --prevState.counter
        }), console.log("Minus", this.state.counter));
    }

      this.test = this.state.counter;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Berlin counter</h2>
        </div>
        <Button onClick={this.handleClick} val="+"></Button>
        <Button onClick={this.handleClick} val="-"></Button>
        <p>{this.state.counter}</p>
        <p>{this.test}</p>

      </div>
    );
  }
}

export default App;
