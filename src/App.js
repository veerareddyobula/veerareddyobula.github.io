import React, { Component } from 'react';
import "materialize-css/dist/css/materialize.min.css";
import './App.css';
import HomeContainer from './containers/home/home-container.js';

class App extends Component {
  render() {
    return (
      <div>
        <HomeContainer />
      </div>
    );
  }
}

export default App;
