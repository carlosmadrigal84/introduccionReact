import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home/Home'
import MovieDetail from './MovieDetail/MovieDetail'

export default class App extends Component {
  render() {
    return (
      <div className="container mt-5">
        <Router>
          <Switch>
            <Route path='/detail/:id' component={MovieDetail}/>
            <Route component={Home}/>
          </Switch>
        </Router>
      </div>
    );
  }
}