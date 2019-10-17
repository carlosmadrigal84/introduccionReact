import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

function FilmList(props) {
  const films = props.films;
  
  const listItems = films.map((film) =>
    <li key={film.id}>
      {film.name}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

class App extends Component {
  render() {
    const films = [
    {
      id: "A6D8FS9D09",
      name: "The Avengers"
    },
    {
      id: "8G7D87SD9S",
      name: "Interstellar"
    },
    {
      id: "9DF8F77D8F",
      name: "Noah's Diary"
    }];

    return (
      <div>
        <FilmList films={films} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
