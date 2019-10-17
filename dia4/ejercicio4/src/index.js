import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/App'


render(<App />, document.getElementById('root'));
/* 
Requisitos V3
https://developers.themoviedb.org/3/getting-started/request-rate-limiting

Se necesita:
 - Que por defecto se listen las películas recomendadas (https://developers.themoviedb.org/3/discover/movie-discover)
 - Tener un input de búsqueda libre y que mientras se va escribiendo se busque las películas coincidentes (https://developers.themoviedb.org/3/search/search-movies)
 - Cuando se haga click en una película iríamos a su detalle.

Por tanto, constaría de como mínimo 2 componentes, uno con el input y el resultado de las películas y otro componente
para el detalle de las películas.

Se deben usar rutas para este ejercicio.

Opcional:
 - Input para realizar búsquedas por año
 - Mostrar el límite actual de peticiones a Movie DB
 */