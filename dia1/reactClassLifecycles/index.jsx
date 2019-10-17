import React, { Component } from 'react';
import { render } from 'react-dom';
import Clock from './Clock';
import './style.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isTimer1Active: true
    }
  }

  render() {
    const timer1 = 
      <div>
        <h1>Timer 1</h1>
        <Clock name="1"/>
      </div>

    const timer2 = 
      <div>
        <h1>Timer 2</h1>
        <Clock name="2"/>
      </div>

    return (
      <div>
        {this.state.isTimer1Active && timer1}
        {!this.state.isTimer1Active && timer2}
        <button onClick={(e) => this.setState({isTimer1Active: !this.state.isTimer1Active})}>Click me</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
