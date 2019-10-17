/* Requisitos V2

Partiendo de : https://stackblitz.com/edit/201910-react-second

Requisitos:

- Tendrá 2 rutas: 
  - La primera "/home" llevará a un componente con un botón que diga "Rellenar formulario"
  - La segunda "/form" llevará al componente formulario ya hecho y tendrá el comportamiento que hasta ahora tiene.
  - En caso de que se especifique "name", "description" o "role" a través de queryparams,
    estos deberán añadirse a los campos correspondientes en el formulario.
  - Por último, en caso de no tener ninguna ruta especificada te llevará a "/home". */

import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from './src/components/Form/Form';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Form onNameChange={this.onNameChange}/>
    );
  }
}

render(<App />, document.getElementById('root'));
