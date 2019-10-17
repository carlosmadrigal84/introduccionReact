import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Movie extends Component {
  goToDetail = () => {
    this.props.history.push(`/detail/${this.props.movie.id}`);
  };

  render() {
    const { movie } = this.props;
    return (
      <div
        style={{
          cursor: "pointer"
        }}
        key={movie.id}
        className="col-4"
        onClick={this.goToDetail}
      >
        <h5
          style={{
            color: movie.isImportant() ? "green" : "red"
          }}
        >
          {movie.title}
        </h5>
        <p>{movie.popularity}</p>
        <p>{movie.vote_count}</p>
      </div>
    );
  }
}

export default withRouter(Movie);
