import React, { Component } from 'react';
import SearchForm from './SearchForm';
import {connect} from 'react-redux';
import Spinner from '../Layout/Spinner';
import MoviesContainer from './MoviesContainer';

export class Landing extends Component {
    render() {
          // Access Loading prop
          const {loading} = this.props;
        return (          
            <div className="container">
                <SearchForm />
                {/* Display Spinner if loading is false or display Movies */}
                {loading ? <Spinner/> : <MoviesContainer/>}
            </div>
        )
    }
}
const mapStateToProp = state => ({
    loading: state.movies.loading
})
export default connect(mapStateToProp)(Landing);