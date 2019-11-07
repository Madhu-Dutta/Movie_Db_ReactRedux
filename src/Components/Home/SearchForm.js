import React, { Component } from 'react';
import {searchMovie, fetchMovies} from '../../actions/searchActions';
import {connect} from 'react-redux';

export class SearchForm extends Component {

    onChange = (e) => {
        this.props.searchMovie(e.target.value);
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text);
    }
    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container">
                    <h1 className="display-4 mb-3">
                        <i className="fa fa-search" />
                        Search Movies, TV series...
                    </h1>
                    {/* On hitting enter form gets submitted */}
                    <form id="searchForm" onSubmit={this.onSubmit} >
                        <input 
                        type="text"
                        className="form-control"                        
                        name="searchText"
                        placeholder="Search Movies, TV series..."
                        onChange={this.onChange}
                        />
                        <button 
                        type="submit"
                        className="btn btn-primary" style={{margin: '3%'}}>
                            Search
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
const mapStatesToProps = state => ({
    text: state.movies.text
})


export default connect(mapStatesToProps, {searchMovie, fetchMovies})(SearchForm);