import React, { Component } from 'react';

export class MovieCard extends Component {
    render() {
        const {movie} = this.props;
        return (
            <div className="col-md-3 mb-5">
                <div className="card card-body bg-dark text-center h-100">
                    {/* <img 
                    className="w-100 mb-2"
                    src={movie.results[0].poster_path}
                    alt="movie cover"/> */}
                    <h5 className="text-light card-title">
                        MovieTitle: Year    
                        {/* {movie.results[0].title} - {movie.results[0].release_date}  */}
                    </h5>
                    <a className="btn btn-primary" href="#">
                        <i className="fas fa-chevron-right" />
                        Movie Details
                    </a>
                </div>
            </div>
        )
    }
}

export default MovieCard;
