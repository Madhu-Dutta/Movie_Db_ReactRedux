import {SEARCH_MOVIE, FETCH_MOVIE} from './types';
import Axios from 'axios';
// import {APIKey} from '../APIKey';

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}

export const fetchMovies = text => dispatch => {
    Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=&query=${text}`)
    .then(res => dispatch({
        type: FETCH_MOVIE,
        payload: res.data
    }))
    .catch(err => console.log(err));
}