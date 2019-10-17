import axios from 'axios';
import {API_KEY} from '../App'  
console.log('api_key from file api', API_KEY)
// const API_KEY = 'a301e4e4161db41ecbf925937c7acadc';
const API_URL = 'https://api.themoviedb.org/3';

export const PEPE='NOMBRE';

const api = (API_KEY) => {
	return {
		getDiscoverFilms: (year) => {
      const endPointBase = `${API_URL}/discover/movie?api_key=${API_KEY}`;
      if (year) {
        const endPoint = `${endPointBase}&primary_release_year=${year}`;
      } else {
        const endPoint = `${endPointBase}`;
      }
			return axios.get(endPoint)
				.then(response => response.data.results)
		},
		getConfigurationImages: () => {
			const endPoint = `${API_URL}/configuration?api_key=${API_KEY}`;
			return axios.get(endPoint)
				.then(response => response.data.images)
      },
		getFilms: (query,year) => {
      const endPointBase = `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
      if (year) {
        const endPoint = `${endPointBase}&primary_release_year=${year}`;
      } else {
        const endPoint = `${endPointBase};`;
      }
			return axios.get(endPoint)
				.then(response => response);
		},
		getFilmById: id => {
			const endPoint = `${API_URL}/movie/${id}?api_key=${API_KEY}`;
			return axios.get(endPoint)
				.then(response => response.data)
        .catch(error => { throw error; });
		} 
		
	};
};

export default api;


