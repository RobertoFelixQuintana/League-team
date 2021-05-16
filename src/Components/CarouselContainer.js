import React from 'react';
import {Carousel} from 'react-bootstrap';

const CarouselContainer=()=>{
    return(
        <Carousel>
            <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fgwen-color-splash.jpg"
                  alt="Gwen"
                />
                <Carousel.Caption>
                <h3>LA COSTURERA MISTERIOSA
                    <br></br>
                    POR MICHAEL LUO
                    </h3>
                  <p>Al atardecer, escondida detrás de un espeso matorral, 
                      una joven con grandes moños negros en su cabello 
                      azul plateado, ornamentos dorados y un vestido 
                      de elegante confección permanece de pie. 
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fviego-color-splash.jpg"
                  alt="Viego"
                />
                <Carousel.Caption>
                <h3>ELLA<br></br>
                    POR JARED ROSEN
                    </h3>
                    <p>A veces, los ojos estaban muy separados; otras veces, 
                    muy juntos. O sus mejillas eran muy delgadas o muy anchas. 
                    A veces, sus manos no tenían los callos de una costurera; 
                    pero, otras veces, eran nudosas y gruesas por los largos 
                    días de trabajo con tijeras y agujas. 
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Ffinishing-soates-splash.jpg"
                  alt="Kindred"
                />
                <Carousel.Caption>
                  <h3>EL FINAL DE SOATES<br></br>
                  POR MATT DUNN
                  </h3>
                  <p>Tarnold supo que la función estaba condenada al fracaso 
                    cuando se le terminaron todos los trucos de dramaturgo. 
                    Sus actores habían sucumbido ante el pánico escénico.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselContainer;