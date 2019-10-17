import React from 'react';
import { UserConsumer } from '../contexts/user';
import {API_KEY}  from '../App';


export default class Register extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name:'',
        surname:'',
        birthDate: '',
        apikey: ''
       
      }
    }
    this.onChangeField = this.onChangeField.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeField (event) {
    const { name, value } = event.target;
    this.setState(({ user }) => ({
      user: {
        ...user,
        [name]: value,
      }
    }))
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.user.name.trim().length <= 3) {
      alert("The name must be bigger than 3 characters");
      return false;
    }
    if (this.state.user.surname.trim().length <= 3 ) {
      alert("The surname must be bigger than 3 characters");
      return false;  
    }
    if (this.state.user.birthDate.trim().length <= 3 ) {
      alert("The birth date must be bigger than 3 characters");
      return false;  
    }
    return true;
  }

  render () {
    
    return (
      <UserConsumer>
        {({ user, updateUser }) => (
           <div className='register-container' style={{width: '50%', margin: '50px auto'}}>
       <form className='box' 
          onSubmit={event => {
            if (this.onSubmit(event)) {;
              updateUser(this.state.user);
              this.props.history.push('/profile')                       }
          }   }>
        <h1 className='is-large'>Formulario de acceso </h1>
          <div className="field">{console.log()}
            <label className="label">Name</label>
              <div className="control">
                <input name='name' className="input" type="text" placeholder="Enter Username" onChange={this.onChangeField}/>
              </div>
          </div>

          <div className="field">
            <label className="label">Surname</label>
            <div className="control">
              <input name='surname' className="input" type="text" placeholder="Enter Surname" onChange={this.onChangeField} />
            </div>
          </div>

          <div className="field">
            <label className="label">Birth Date</label>
            <div className="control">
              <input name='birthDate' className='input' type="number" placeholder="YYYY" min="1950" max="2100" onChange={this.onChangeField} />
            </div>
          </div>
          
          <div className="field">
            <label name='APIKEY' className="label">API KEY</label>
              <div className="control">
                <input name='apikey' className="input" type="text" placeholder="Enter API KEY" onChange={this.onChangeField} />
              </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            
          </div>
      </form>
    </div>
        )}
      </UserConsumer>
      
    )
  }

  
} 