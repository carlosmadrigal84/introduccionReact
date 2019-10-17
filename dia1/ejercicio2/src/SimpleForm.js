import React from 'react';

export default class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
      name: '',
      description: '',
      role: 'user',
      // submited: false,
      submitedState: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeElement = this.onChangeElement.bind(this);
  }

  onChangeElement(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      submitedState: {} //Cuando vuelve a escribir desparece lo que has hecho submitd
    })
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.name.trim().length <= 3) {
      alert("The name must be bigger than 3 characters");
      return;
    }
    if (this.state.description.trim().length <= 10 ) {
      alert("The description must be bigger than 10 characters");
      return;  
    }
    this.setState({
      // submited: true,
      submitedState: {
        description: this.state.description,
        role: this.state.role
      }
    })
  }
  
  render() {
    const { name, role, description, submited } = this.state;
    const { submitedState } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Formulario de {name} </h1>
          <input type='text' name='name' placeholder='name' value={name} onChange={this.onChangeElement} />
          <br /><br />
          <textarea rows="4" name='description' cols="50" placeholder='description' value={description} onChange={this.onChangeElement}/>
          <br />
          <input type="radio" name="role" value="user" checked={role === 'user'} onChange={this.onChangeElement} /> User<br />
          <input type="radio" name="role" value="admin" checked={role === 'admin'} onChange={this.onChangeElement} /> Admin<br />
          <br />
          <button type='submit'>Envia</button>
        </form>
        {Object.keys(submitedState).length >=1 &&
          <h3>Descripción: {submitedState.description} , Role: {submitedState.role} </h3> 
        }
      </div>
      )
    }
  }

export default SimpleForm;