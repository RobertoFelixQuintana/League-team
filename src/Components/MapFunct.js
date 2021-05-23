import React from 'react';
import ButtonMap1 from './ButtonMap1';
import ButtonMap2 from './ButtonMap2';
import './MapFunct.css';

class MapFunct extends React.Component{
    state = {
      visible: false,
      visible2: false
    }
    render() { 
      return(
            <div>
            {this.state.visible ? <ButtonMap1/> : false}
            <button className="Fr-1" onClick={() =>{
            this.setState({visible:!this.state.visible})
            }}>OP 1</button>
          
            {this.state.visible2 ? <ButtonMap2/> : false}
            <button className="Fr-2" onClick={() =>{
            this.setState({visible2:!this.state.visible2})
            }}>OP 2</button>
            </div>  
      );
    }
  }
  
  export default MapFunct;