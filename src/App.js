import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'; 
import Home from './Components/pages/Home';
import Champions from './Components/pages/Champions';
import SignUp from './Components/pages/SignUp';
import About from './Components/pages/About';
import Map from './Components/pages/Map';
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
            <Route path='/About' exact component={About}/>
            <Route path='/Map' exact component={Map}/>
            <Route path='/SignUp' exact component={SignUp}/>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
