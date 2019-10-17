import React from 'react';
import Navbar from './Navbar';
import Loading from './Loading';
import api from '../utils/api';
import UserContext from '../contexts/user';


const { getFilmById, getConfigurationImages } = api();

export default class MovieDetail extends React.Component {
  static contextType = UserContext ;
  constructor(props) {
    super(props);
    this.state = {
      movie:'',
      loading: true,
      imageBaseURL: ''
    }
  }

  componentDidMount() {
    this.fetchFilm()  
  }

  fetchFilm() {
    const { getFilmById, getConfigurationImages } = api(this.context.user.apikey);
    const { movieId } = this.props.match.params;
    Promise.all([
      getConfigurationImages(),
      getFilmById(movieId)
    ]).then(results =>this.setState({
      imageBaseURL: results[0].secure_base_url,
      movie: results[1],
      loading: false
    })).catch(err => {
      this.setState({
        loading:false
      })
      console.error('Error Fetching Movie Detail: ', err)
      })
  }

  render() {
    const { movie, imageBaseURL, loading } = this.state;
    const posterURL = `${imageBaseURL}/original${movie.poster_path}`
    return (
      <React.Fragment>
        <Navbar showSearch={false}/>
        {loading 
          ? <Loading text='Loading Movie Detail'/>
          : <div className="movie-detail-container">
              <div className="movie-card-container">
                <div className="image-container">
                  <div className="bg-image" style={{ backgroundImage: `url(${posterURL})` }} />
                  </div>
                  <div className="movie-info">
                    <h2>Movie Details</h2>
                      <div>
                        <h1>{movie.title}</h1>
                        <small>Released Date: {movie.release_date}</small>
                      </div>
                      <h4>Rating: {movie.vote_average}/10</h4>
                      <h4>Runtime: {movie.runtime} min</h4>
                      <p>{movie.overview}</p>
                      <div className="tags-container">
                          {movie.genres && movie.genres.map(genre => <span key={genre.id}>{genre.name}</span>)}
                      </div>
                  </div>
                </div>
              </div>}
      </React.Fragment>
      )
    }
  }

