import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieCard from './MovieCard';

export class MoviesContainer extends Component {
    render() {
        //Access Movies Props
        const {movies} = this.props;
        let content = '';

        //Check if the movie array length > 0 (if movie array has any movies)
        content = movies.length > 0 ? movies.map((movie, index) => <MovieCard key={index} movie={movie} />): null;
        return (            
            <div className="row">
                {content}
                {/* <MovieCard /> */}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    movies: state.movies.movies
})
export default connect(mapStateToProps)(MoviesContainer);
