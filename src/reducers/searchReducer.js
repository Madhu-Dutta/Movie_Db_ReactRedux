//Search reducer is the main or initial reducer
import {SEARCH_MOVIE, FETCH_MOVIE} from '../actions/types';

const initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: []
}

export default function(state = initialState, action){
    switch(action.type){
        case SEARCH_MOVIE:
            return{
                ...state,
                text: action.payload,
                loading: false
            }
            case FETCH_MOVIE:
            return{
                ...state,
                movies: action.payload
            }
            default: 
                return state;
    }
}