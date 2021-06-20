import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import {HashRouter, Switch,Route} from 'react-router-dom'; 
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
        <HashRouter basename="/">
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/Champions' exact component={Champions}/>
            <Route path='/About' exact component={About}/>
            <Route path='/Map' exact component={Map}/>
            <Route path='/SignUp' exact component={SignUp}/>
          </Switch>
        </HashRouter>
      </>
    )
  }
}

export default App
