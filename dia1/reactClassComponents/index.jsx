import React, { Component } from 'react';
import { render } from 'react-dom';
import ComponentWithProps from './ComponentWithProps';
import ComponentWithPropsAndState from './ComponentWithPropsAndState';
import SimpleComponent from './SimpleComponent';
import './style.css';

function SimpleComponentAsFunction(props) {
  return <p>
      This is a simple component too
    </p>
}

class App extends Component {
  constructor() {
    this.state = {
      name: "Jesé"
    };
  }

  render() {
    return (
      <div>
        <h1>Simple component</h1>
        <SimpleComponent/>

        <h1>Simple component as function</h1>
        <SimpleComponentAsFunction />

        <h1>Component with props</h1>
        <ComponentWithProps name={this.state.name} />

        <h1>Component with props and state</h1>
        <ComponentWithPropsAndState name={this.state.name} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
