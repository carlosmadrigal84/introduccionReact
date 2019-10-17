import React from 'react';

export default class NameAndSurname extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      surname: ""
    }
  }
// Ejemplo con método ·onInputChange·
  onInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { name, surname } = this.state;

    return (
      <div>
        <h1>{name} {surname}</h1>

        <input 
          type="text"
          value={name}
          onChange={this.onNameChange}
          placeholder="Name"
          name= "name"
        />

        <input 
          type="text"
          value={surname}
          onChange={this.onSurnameChange}
          placeholder="Surname"
          surname= "Surname"
        />
      </div>
    )
  }
}

//Otra forma de hacerlo sin método ·onInputChange·

import React from 'react';

export default class NameAndSurname extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      surname: ""
    }
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  onSurnameChange = (event) => {
    this.setState({
      surname: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}{this.state.surname}</h1>

        <input 
          type="text"
          value={this.state.name}
          onChange={this.onNameChange}
          placeholder="Name"
          name= "name"
        />
        <input 
          type="text"
          value={this.state.surname}
          onChange={this.onSurnameChange}
          placeholder="Surname"
          surname= "Surname"
        />
      </div>
    )
  }
}
