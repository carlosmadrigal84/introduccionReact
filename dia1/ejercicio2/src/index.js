/* Requisitos V1 ¡Ánimo!

Formulario:

- Título (H1)
- Input (name)
- Textarea (description)
- RadioButton (userRole)
  - Admin
  - User
  
El título (h1) debe tener como valor: "Formulario de {name}

Al darle al onSubmit: name > 3 caractéres, description > 10 caractéres

Al darle al onSubmit: debajo del formulario se mostrará la descripción escrita
y una frase que diga si es administrador o usuario normal. */

import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import SimpleForm from './SimpleForm';

class App extends Component {
  render() {
    return (
      <div>
        <SimpleForm />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
