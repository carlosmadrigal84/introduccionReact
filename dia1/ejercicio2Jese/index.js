import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from './src/components/Form/Form';
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
      <Form onNameChange={this.onNameChange}/>
    );
  }
}

render(<App />, document.getElementById('root'));
