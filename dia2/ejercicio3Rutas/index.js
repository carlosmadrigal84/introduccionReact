import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from './src/components/Form/Form';
import './style.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/form" component={Form}/>
          <Route component={Home}/>
        </Switch>
      </Router>
    );
  }
}

const Home = ({ history }) => {
  const goToForm = () => {
    history.push("/form");
  };

  return <button onClick={goToForm}>Go!</button>
};


render(<App />, document.getElementById('root'));
