import React, { Component } from 'react';

export class MovieCard extends Component {
    render() {
        const {movieParent} = this.props;
         //Manually construct the movie path
         movieParent.posterSrc = "https://image.tmdb.org/t/p/w185" + movieParent.poster_path
        return (
            <div className="col-md-3 mb-5">
                <div className="card card-body bg-dark text-center h-100">
                    <img 
                    className="w-100 mb-2"
                    src={movieParent.posterSrc}
                    alt="movie cover"/>
                    <h5 className="text-light card-title">
                        {movieParent.title} <br/>
                        {movieParent.release_date}               

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
