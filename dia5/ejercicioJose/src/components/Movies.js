import React from 'react';
import api from '../utils/api';
import Navbar from './Navbar';
import Loading from './Loading';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import UserContext from '../contexts/user';
import {API_KEY} from '../App';


function NoResults ({ message, error }) {
	return (
		<div className="notification is-danger" id="no-results">
			<p>{message}</p>
			<p>{error}</p>
		</div>
	)
}

NoResults.propTypes = {
  message: PropTypes.string.isRequired,
  error: PropTypes.string
}

function MoviesGrid({ movies, imageBaseURL }) {
   return (
		<React.Fragment>
			{movies.length === 0
				? <NoResults message='No results found!!' />
				: <div className="columns is-multiline cards-group">
				{movies.map(movie => (
					<div key={movie.id} className="column is-one-quarter-desktop is-half-tablet">
						<div className="card">
							<div className="card-image">
								<figure className="image is-4by3">
									<img src={movie.poster_path ? `${imageBaseURL}original/${movie.backdrop_path}` : 'https://bulma.io/images/placeholders/1280x960.png'} alt="Placeholder" />
								</figure>
							</div>
							<div className="card-content">
								<div className="media">
									<div className="media-left">
										<figure className="image is-48x48">
											<img src={movie.backdrop_path ? `${imageBaseURL}w300/${movie.backdrop_path}` : 'https://bulma.io/images/placeholders/96x96.png'} alt="Placeholder" />
										</figure>
									</div>
							<div className="media-content">
								<p className="title is-4">{movie.title}</p>
								<p className="subtitle is-6">{`Original Title: ${movie.original_title}`}</p>
							</div>
						</div>
						<div className="content">
							{movie.overview.substring(0,150)}
							<br />
							<Link to={`/detail/${movie.id}`}>read more...</Link>
							<br />
							<time>{`Release Date: ${movie.release_date}`}</time>
						</div>
					</div>
				</div>
			</div>
			))}
		</div>}
    
	</React.Fragment>
	)
}

MoviesGrid.propType = {
  movies: PropTypes.array.isRequired,
  imageBaseURL: PropTypes.string.isRequired
}

export default class Movies extends React.Component {
  static contextType = UserContext ;

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: [],
      text: '',
      date:null,
      imageBaseURL: '',
      remaningQueries: 40,
      error: false
      
    }
    this.changeText = this.changeText.bind(this);
    console.log('Constructor Movies: ', this.context);
  }

  changeText(event) {
    const { getFilms } = api(this.context.user.apikey);
    this.setState({
      loading: true,
    })
    if (event.target.value.trim().length > 0 ) {
      return getFilms(event.target.value, this.context.user.birthDate)
        .then(response => this.setState({
          movies: response.data.results,
          loading: false,
          remaningQueries: response.headers['x-ratelimit-remaining']
        })).catch(err => console.error(error))
      }
    
    this.discoverFilms(this.context.user.birthDate);
  }
  componentDidMount() {
    const { user } = this.context
    console.log('User context en Movies: ', user.birthDate)
    if (this.isAuth()) {
      this.discoverFilms(user.birthDate);
    }
  }

  isAuth() {
    return Object.entries(this.context.user).length !== 0
  }

  discoverFilms(year) {
    console.log('api', API_KEY)

    const { getDiscoverFilms, getConfigurationImages } = api(this.context.user.apikey);
    Promise.all([
      getConfigurationImages(),
      getDiscoverFilms(year)
    ]).then(results =>this.setState({
      imageBaseURL: results[0].secure_base_url,
      movies: results[1],
      loading: false
    })).catch(({ response }) => {
        if (response.data.status_code === 7) {
            console.warn(response.data.status_message);
            this.setState({
              loading: false,
              error: true
            })
        } 
    })
  }

	render () {
    const { user } = this.context;
    const { loading , movies, remaningQueries, imageBaseURL, error } = this.state;
    
    if (Object.entries(user).length === 0) {
      this.props.history.push('/register');
      return null;
    }
    if (error) {
      return (
        <NoResults message='Error!!!' error='Invalid api key' />
      )
    }
    return (
      <React.Fragment>
        <Navbar text={this.state.text} onChangeText={this.changeText} remaningQueries={remaningQueries} showSearch />
        {loading === true 
          ?  <Loading text='Fetching Movies' />
          :  <MoviesGrid movies={movies} imageBaseURL={imageBaseURL}/>
        }
       </React.Fragment>
    )
  }
}
