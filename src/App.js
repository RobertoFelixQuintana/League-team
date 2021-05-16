import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'; 
import Home from './Components/pages/Home';
import Champions from './Components/pages/Champions';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/Champions' exact component={Champions}/>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
