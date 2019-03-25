import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom"

import Login from './components/Login'
import Home from './components/Home'
import Index from './components/Index'

class App extends Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={ Index }></Route>
          <Route path="/login" component={ Login }></Route>
          <Route path="/home" component={ Home }></Route>
        </div>
      </Router>
      
    );
  }
}

export default App;
