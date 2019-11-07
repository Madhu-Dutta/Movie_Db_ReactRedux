import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchMovie} from '../../actions/searchActions';
import Spinner from '../Layout/Spinner';

export class Movie extends Component {
    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id);      
      }
    render() {
        const { loading, movie } = this.props;
        
    let movieInfo =  (
        <div className="container">
                <div className="row">
                <div className="col-md-4 card card-body">
                    <img src={movie.Poster} 
                    className="thumbnail"
                    alt="poster"
                    />
                </div>
                <div className="col-md-8">
                    <h2 className="mb-4"> {movie.Title}</h2>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>Genre: </strong>
                           {movie.Genre}
                        </li>
                        <li className="list-group-item">
                            <strong>Released: </strong>
                            {movie.Year}
                            <br/>
                            
                        </li>
                        <li className="list-group-item">
                            <strong>Rated: </strong>
                            {movie.Rated}
                        </li>
                        <li className="list-group-item">
                            <strong>IMDb Rating: </strong>
                            {movie.imdbRating}
                        </li>
                        <li className="list-group-item">
                            <strong>Director: </strong>
                            {movie.Director}
                        </li>
                        <li className="list-group-item">
                            <strong>Writer: </strong>
                            {movie.Writer}
                        </li>
                        <li className="list-group-item">
                            <strong>Actor: </strong>
                            {movie.Actors}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="card card-body bg-dark my-5 text-light">
                    <div className="col-md-12">
                        <h3>About</h3>
                        {movie.Plot}                        
                        <hr />

                        <Link
                            href="https://www.imdb.com/title/' + movie.imdbID"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            View on IMDB
                        </Link>
                        <Link
                            href="#"
                            className="btn btn-default text-light"
                        >
                            Go Back to Search
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        );
        let content = loading ? <Spinner /> : movieInfo
        return<div>{content}</div>
    }
}
const mapStateToProps = state => ({
    loading: state.movies.loading,
    movie: state.movies.movie
})
export default connect(mapStateToProps, {fetchMovie})(Movie);
