import React from 'react';
import ButtonMap1 from './ButtonMap1';
import ButtonMap2 from './ButtonMap2';
import ButtonMap3 from './ButtonMap3';
import ButtonMap4 from './ButtonMap4';
import ButtonMap5 from './ButtonMap5';
import ButtonMap6 from './ButtonMap6';
import ButtonMap7 from './ButtonMap7';
import ButtonMap8 from './ButtonMap8';
import ButtonMap9 from './ButtonMap9';
import ButtonMap10 from './ButtonMap10';
import ButtonMap11 from './ButtonMap11';
import './MapFunct.css';

class MapFunct extends React.Component{
    state = {
      visible: false,
      visible2: false,
      visible3:false,
      visible4:false,
      visible5:false,
      visible6:false,
      visible7:false,
      visible8:false,
      visible9:false,
      visible10:false,
      visible11:false,
      active:false
    } 

    render(){ 
      return(

            <div>
              {this.state.visible ? <ButtonMap1/> : null}
              {this.state.visible2 ? <ButtonMap2/> : null}
              {this.state.visible3 ? <ButtonMap3/> : null}
              {this.state.visible4 ? <ButtonMap4/> : null}
              {this.state.visible5 ? <ButtonMap5/> : null}
              {this.state.visible6 ? <ButtonMap6/> : null}
              {this.state.visible7 ? <ButtonMap7/> : null}
              {this.state.visible8 ? <ButtonMap8/> : null}
              {this.state.visible9 ? <ButtonMap9/> : null}
              {this.state.visible10 ? <ButtonMap10/> : null}
              {this.state.visible11 ? <ButtonMap11/> : null}

              <button className="Fr-1" 
              onClick={() =>{
              this.setState({visible:!this.state.visible});
              this.setState({active: !this.state.active});
              }}
              disabled={this.state.active===this.state.visible ? false: true}
              >OP 1</button>                
              
              <button className="Fr-2" 
              onClick={() =>{
              this.setState({visible2:!this.state.visible2});
              this.setState({active: !this.state.active});
              }}
              disabled={this.state.active===this.state.visible2 ? false: true}
              >OP 2</button>
           
              <button className="Fr-3"
              disabled={this.state.active} 
              onClick={() =>{
              this.setState({visible3:!this.state.visible3});
              this.setState({active: !this.state.active});
              }}
              disabled={this.state.active===this.state.visible3 ? false: true}
              >OP 3</button>
  
             
              <button className="Fr-4" 
              onClick={() =>{
              this.setState({visible4:!this.state.visible4});
              this.setState({active: !this.state.active});
              }}
              disabled={this.state.active===this.state.visible4 ? false: true}
              >OP 4</button>
  
              <button className="Fr-5" 
              onClick={() =>{
              this.setState({visible5:!this.state.visible5});
              this.setState({active: !this.state.active});
              }}
              disabled={this.state.active===this.state.visible5 ? false: true}
              >OP 5</button>
 
              <button className="Fr-6" 
              onClick={() =>{
              this.setState({visible6:!this.state.visible6});
              this.setState({active: !this.state.active});
              }}
              disabled={this.state.active===this.state.visible6 ? false: true}
              >OP 6</button>
  
              <button className="Fr-7" 
              onClick={() =>{
              this.setState({visible7:!this.state.visible7});
              this.setState({active: !this.state.active});
              }}
              disabled={this.state.active===this.state.visible7 ? false: true}
              >OP 7</button>
  
              <button className="Fr-8" onClick={() =>{
              this.setState({visible8:!this.state.visible8});
              this.setState({active: !this.state.active});
              }}
              disabled={this.state.active===this.state.visible8 ? false: true}
              >OP 8</button>

              <button className="Fr-9" 
              onClick={() =>{
              this.setState({visible9:!this.state.visible9});
              this.setState({active: !this.state.active});
              }}
              disabled={this.state.active===this.state.visible9 ? false: true}
              >OP 9</button>

              <button className="Fr-10" 
              onClick={() =>{
              this.setState({visible10:!this.state.visible10});
              this.setState({active: !this.state.active});
              }}
              disabled={this.state.active===this.state.visible10 ? false: true}
              >OP 1</button>

              <button className="Fr-11" 
              onClick={() =>{
              this.setState({visible11:!this.state.visible11});
              this.setState({active: !this.state.active});
              }}
              disabled={this.state.active===this.state.visible11 ? false: true}
              >OP 1</button>

            </div>  
      )
    }
  }
  
  export default MapFunct;