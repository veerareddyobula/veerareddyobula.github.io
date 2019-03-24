import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import ProfileRouter from './routes/profile-router.js'
import AdminRouter from './routes/admin-router'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/admin/*" component={AdminRouter}/>
        <Route exact path="/" component={ProfileRouter}/>
      </BrowserRouter>
    );
  }
}

export default App;
