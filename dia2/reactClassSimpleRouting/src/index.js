import React, { Component } from 'react';
import { render } from 'react-dom';
import BasicExample from './BasicExample';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <BasicExample/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
