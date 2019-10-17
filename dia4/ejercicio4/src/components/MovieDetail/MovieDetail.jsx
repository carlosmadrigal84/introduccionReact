import React, { Component } from "react";
import Movie from "../Movie/Movie";
import { getMovie } from "../../services/MovieDBService";

export default class MovieDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    
    const movieID = this.props.match.params.id;

    getMovie(movieID).then(movie => this.setState({ movie }));
  }

  render() {
    const { movie } = this.state;

    return (
      <div className="container">
        {
          movie
          &&
          <div>
            <h1>{movie.title}</h1>
          </div>
        }

        {
          !movie
          &&
          <h1>Loading...</h1>
        }
      </div>
    );
  }
}
