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
    Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=99aaafdc06b5dcd80ac93560ce00b201&query=&query=${text}`)
    .then(res => dispatch({
        type: FETCH_MOVIE,
        payload: res.data
    }))
    .catch(err => console.log(err));
}