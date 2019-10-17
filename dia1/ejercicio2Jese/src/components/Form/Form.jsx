/* 
Requisitos V1
Formulario:

- Título (h1)
- Input (name)
- Textarea (description)
- RadioButton (userRole)
  - Admin
  - User
El título (h1) debe tener como valor: "Formulario de {name}"

Al darle al onSubmit: name > 3 caracteres, description > 10 caractares

Al darle al onSubmit: debajo del formulario se mostrará la descripción escrita
y una frase que diga se es administrador o usuario normal.
*/

import React from 'react';
import Title from '../Title';

const USER_ROLES = [
  {
    id: "admin",
    name: "Admin"
  },
  {
    id: "user",
    name: "User"
  }
]

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      role: USER_ROLES[0].id,
      result: null
    }
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    
    this.setState({
      [name]: value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { name, description, role } = this.state;

    if (!name || name.trim().length < 3) {
      alert("Name is smaller than 3");
      return;
    }

    if (!description || description.trim().length < 10) {
      alert("Description is smaller than 10");
      return;
    }

    this.setState({
      result: {
        description,
        role
      }
    })
  }

  render() {
    const { name, description, role, result } = this.state;

    return (
      <React.Fragment>
        <div>
          <Title name={name} />

          <h2>Campos</h2>

          <form onSubmit={this.onSubmit}>
            <div>
              <p>Name</p>
              <input
                name="name"
                type="text"
                value={name}
                onChange={this.onInputChange}
                placeholder="Your name"
                />
            </div>

            <div>
              <p>Description</p>
              <textarea
                name="description"
                value={description}
                onChange={this.onInputChange}
                placeholder="Your message"
                />
            </div>

            <div>
              <p>Role</p>
              {
                USER_ROLES.map(_role => (
                  <div>
                    {_role.name}
                    <input 
                      type='radio' 
                      value={_role.id}
                      checked={role === _role.id}
                      name='role'
                      onChange={this.onInputChange}
                    />  
                  </div>
                ))
              }
            </div>

            <button type='submit'>Guardar</button>
          </form>

          {
            result
            &&
            <div>
              <p>{result.description}</p>
              <p>
              {
                result.role === 'admin' 
                ?
                'El usuario es Administrador'
                :
                'El usuario es Usuario'
              }
              </p>
            </div>
          }
        </div>
      </React.Fragment>
    );
  }
}