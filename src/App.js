import './App.css';

import React, { Component } from 'react'
import StyleImagen from './layouts/StyleImagen';
import StyleButton from './layouts/StyleButton';

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <StyleImagen/>
        <StyleButton/> 
      </div>
    )
  }
}

export default App
