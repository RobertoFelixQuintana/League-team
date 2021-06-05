import React from 'react';
import './About.css';

function About(){
    return(
        <>
            <section className="about-container">
              <div className="header">
                <h1>LEAGUE TEAM</h1>
              </div>

                <div className="wrapper">
                    <div className='wrapper1'>
                        <img src="https://scontent.ftij1-1.fna.fbcdn.net/v/t1.15752-9/194111347_535427507828217_2617439927981624054_n.png?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=wleJQwOYhw0AX9u5yGC&_nc_ht=scontent.ftij1-1.fna&oh=a0490342e0c539a2395627aaef49d146&oe=60D99896" alt="roberto"/>
                        <h1>Jefe de proyecto</h1>
                        <h2>UX/UI Designer</h2>
                        <p>FELIX QUINTANA ROBERTO</p>
                    </div>
                    <div className='wrapper2'>
                      <img src="https://scontent.ftij1-2.fna.fbcdn.net/v/t1.15752-9/192835776_4006458056075715_6028967300893520627_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=ae9488&_nc_ohc=iulG5aJmZAsAX_vlUCa&_nc_ht=scontent.ftij1-2.fna&oh=8c9b209eb59b9cbbbe48f76fe93350a6&oe=60D8FE28" alt="oscar"></img>
                      <h1>Arquitecto de Software</h1>
                      <p>RUVALCABA LEON OSCAR HUMBERTO</p>
                    </div>

                    <div className='wrapper3'>
                      <img src="https://scontent.ftij1-2.fna.fbcdn.net/v/t1.6435-9/128568135_378678576728388_1173218143363462862_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=174925&_nc_ohc=s73ops5n79MAX8UJw0O&tn=RdnPI2EUE6cfQdBS&_nc_ht=scontent.ftij1-2.fna&oh=ef1b96284ea40439995e2a1dcba9108e&oe=60DBECC9" alt="leo"/>
                      <h1>QUALITY ASSURANCE (QA)</h1>
                      <p>GÓMEZ FLORES JESÚS LEONARDO</p>
                    </div>

                    <div className='wrapper4'>
                      <img src="https://scontent.ftij1-1.fna.fbcdn.net/v/t1.15752-9/194655349_205744744707257_8452029027349117677_n.png?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_ohc=y5QJyqVzi6MAX8mF3rg&_nc_ht=scontent.ftij1-1.fna&oh=52249f3c277adea7af66af3144a6390b&oe=60DBB6CA" alt="kevin"/>
                      <h1>Analista de Software</h1>
                      <p>HERNANDEZ RODRIGUEZ KEVIN ITZAY</p>
                    </div>

                    <div className='wrapper5'>
                      <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/s206x206/189471999_537642530731114_7102656892890724198_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=58c789&_nc_ohc=McSPKIS3PVsAX_xkaMz&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=7&oh=4bf056695f264bc22e02241b7e5becee&oe=60D9D9FB" alt="emma"/>
                      <h1>Tester / Investigador</h1>
                      <p>LEON RIVERA JOSHUA EMMANUEL</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;