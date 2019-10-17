import React from 'react';
import { UserConsumer } from '../contexts/user'
import UserContext from '../contexts/user';


export default class Profile extends React.Component {
    static contextType = UserContext ;

    constructor(props) {
      super(props);
      this.goHome = this.goHome.bind(this);
  }

  componentDidMount() {
    const value = this.context

  }

  goHome() {
    this.props.history.push('/home');
  }



  render() {
    const { user } = this.context;
    if (Object.entries(user).length === 0) {
      this.props.history.push('/register');
      return null;
    }
    return (
      <div className='register-container' style={{width: '50%', margin: '50px auto'}}>
       <form className='box'  >
        <h1 className='is-large'>Profile User </h1>
          <div className="field">
            <label className="label">Name: <small>{user.name}</small></label>
              
          </div>

          <div className="field">
            <label className="label">Surname: <small>{user.surname}</small></label>
            
          </div>

          <div className="field">
            <label className="label">Birth Date: <small>{user.birthDate}</small></label>
           
          </div>
          
          <div className="field">
            <label name='APIKEY' className="label">API KEY: <small>{user.apikey}</small></label>
              
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" onClick={this.goHome}>Ir a Movies</button>
            </div>
           
          </div>
      </form>
    </div>
     
    )
    
}
}