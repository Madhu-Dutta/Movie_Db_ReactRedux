import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieCard from './MovieCard';

export class MoviesContainer extends Component {
    render() {
        //Access Movies Props
        const {movies} = this.props;
        let content = '';
        
        //If page === 1. Get this info from the server respone for every api 
        content =
        movies.page === 1
          ? movies.results.map((movie, index) => (
              <MovieCard key={index} movieParent={movie} />
            ))
          : null;
        return <div className="row">{content}</div>;
    }    
}
const mapStateToProps = state => ({
    movies: state.movies.movies
})
export default connect(mapStateToProps)(MoviesContainer);
