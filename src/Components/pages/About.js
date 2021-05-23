import React from 'react';
import './About.css';

function About(){
    return(
        <>
            <div className="App">
              <header className="header">
                <h1>LEAGUE TEAM</h1>
              </header>

                <div className="wrapper">
                    <div className='wrapper1'>
                        <img src="http://pm1.narvii.com/6158/2f1a48c8a1f58aaa38342cc95e501d28d57f28bf_00.jpg" alt="F"/>
                        <h1>Desarrollador en jefe</h1>
                        <h2>Contador</h2>
                        <p>FELIX QUINTANA ROBERTO</p>
                    </div>
                    <div className='wrapper2'>
                      <img src="https://www.elimparcial.com/__export/1554746656666/sites/elimparcial/img/2017/11/07/1758831-N.JPG_1359985867.jpg" alt="O"></img>
                      <h1>Desarrollador</h1>
                      <p>RUVALCABA LEON OSCAR HUMBERTO</p>
                    </div>

                    <div className='wrapper3'>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7-vmNrjKGLJFg15TL7Zv-guD0KtxBixjTw&usqp=CAU" alt="G"/>
                      <h1>Desarrollador</h1>
                      <p>GÓMEZ FLORES JESÚS LEONARDO</p>
                    </div>

                    <div className='wrapper4'>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSjQ2tolv5eQJILr4eHz0JFaOmsrTXEeH1xw&usqp=CAU" alt="H"/>
                      <h1>Desarrollador</h1>
                      <p>HERNANDEZ RODRIGUEZ KEVIN ITZAY</p>
                    </div>

                    <div className='wrapper5'>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_0bzCGHEw5bXuR4O5Zn183vKsF3WQsyXEw&usqp=CAU" alt="L"/>
                      <h1>Desarrollador</h1>
                      <p>LEON RIVERA JOSHUA EMMANUEL</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;