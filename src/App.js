import React from 'react';
import Landing from './Components/Home/Landing';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import store from './store';
import {Provider} from 'react-redux';

import './Styles/index.css'

function App() {
  return (
    
      <Provider store={store}>
        <Navbar />
        <Landing />
        <Footer />
      </Provider>
    
  );
}

export default App;
