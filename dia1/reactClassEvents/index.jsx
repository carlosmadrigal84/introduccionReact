import React, { Component } from 'react';
import { render } from 'react-dom';
import Toggle from './Toggle';
import Input from './Input';
import './style.css';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Types of event binding</h1>
        <Toggle />
        <h1>Input binding</h1>
        <Input />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
