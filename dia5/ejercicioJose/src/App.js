import React from 'react';
import 'bulma/css/bulma.css';
import './index.css';
import Movies from './components/Movies';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetail from './components/MovieDetail';
import { UserProvider } from './contexts/user';
import Register from './components/Register';
import Profile from './components/Profile';
import api from './utils/api';

export let API_KEY;


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateUser = this.updateUser.bind(this);
    this.state = {
      user: {},
      // updateUser: user => {
      //   this.setState({ user })
      // }

      updateUser: this.updateUser


      // updateUser: user => {
      //   console.log(user)
      //   const { getDiscoverFilms } = api(user.apikey);
      //   getDiscoverFilms().then(res => {
      //     this.setState({ user });
      //     API_KEY=user.apikey;
      //   }).catch(({ response }) => {
      //       if (response.data.status_code === 7) {
      //         console.warn(response.data.status_message);
      //         alert(response.data.status_message);
      //       }
            
      //   })
      // }
    }
  }

  updateUser(user) {
    API_KEY = user.apikey;
    this.setState({ user })
  }

  

  render() {
  
    return (
      <div>{console.log(API_KEY)}
        <UserProvider value={this.state}>
        <Router>
          <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/home' component={Movies} />
              <Route exact path="/detail/:movieId" component={MovieDetail} />
              
          </Switch>
        </Router>
          
        </UserProvider>
    </div>
    )
  }
}


