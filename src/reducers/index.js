//This is the main / root combine reducer which holds all other reducers
import {combineReducers} from 'redux';
import searchReducer from './searchReducer';

export default combineReducers({
    movies: searchReducer
})