import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    return (
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        
        <button onClick={(e) => this.setState({isLoggedIn: !this.state.isLoggedIn})}>
          {this.state.isLoggedIn ? "Log out" : "Log in"}
        </button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
