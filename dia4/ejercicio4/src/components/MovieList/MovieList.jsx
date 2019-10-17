import React, { Component } from 'react';
import Movie from '../Movie/Movie'

export default class MovieList extends Component {

  buildMovieList = (movies) => {
    return (
      <div className="row">
        {
          movies.map(movie => <Movie movie={movie}/>)
        }
      </div>
    )
  };

  render() {
    const { movies } = this.props;
    return (
      <div className="mt-3">
        {
          movies
          &&
          movies.length
          &&
          this.buildMovieList(movies)
        }
        
        {
          !movies
          &&
          <div className="text-center mt-5">
            <h2>No hay películas</h2>
          </div>
        }
      </div>
    );
  }
}