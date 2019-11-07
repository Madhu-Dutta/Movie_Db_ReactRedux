import React from 'react';
import Landing from './Components/Home/Landing';
import Movie from './Components/Home/Movie';

import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';

import store from './store';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';

import './Styles/index.css'

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Landing} />
        {/* Matching the parameter when fetching api */}
        <Route exact path="/movie/:id" component={Movie} />
        <Footer />
      </div>
    </Router>
  </Provider>
  );
}

export default App;
