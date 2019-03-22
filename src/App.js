import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom"

import Login from './components/Login'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/login" component={ Login }></Route>
          <Route path="/home" component={ Home }></Route>
        </div>
      </Router>
      
    );
  }
}

export default App;
