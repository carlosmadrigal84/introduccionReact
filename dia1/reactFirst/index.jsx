import React, { Component } from 'react';
import { render } from 'react-dom';
import NameAndSurname from './NameAndSurname';
import './style.css';

class SimpleComponent extends Component {
  render() {
    return <h2>NESTED COMPONENT</h2>
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      surname: 'Class'
    };
  }

  render() {
    return (
      <div>
        <NameAndSurname
          name={this.state.name}
          surname={this.state.surname}
          nestedComponent={<SimpleComponent/>}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
