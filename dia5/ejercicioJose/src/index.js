import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

/* 
Requisitos V4

(Usando rutas)

Requisitos:

   - Un componente de registro (/register) que pida lo siguiente: Nombre, Apellidos, Año de nacimiento y API Key
     (this.setState({
         user: {
           name: name;
           surname...
           ...
          }
         }))
   
   - Cuando el usuario haga click en el submit del formulario, debemos añadir al contexto la información
     y pasarla a los siguientes componentes:
        - Al home donde está el input y la lista de películas (/home) y por defecto tanto en el discover como en la búsqueda
          las peliculas deben estar filtradas por el campo primary_release_year de dichas APIs con el año de nacimiento
          del usuario.
        - A un componente que esté en la ruta /profile que muestre la información del usuario
        
   - Si intento acceder a una ruta donde el usuario no exista en el contexto me debe redirigir al registro
*/
