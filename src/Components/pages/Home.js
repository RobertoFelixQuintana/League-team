import React from 'react';
import '../../App.css';
import './Home.css';
import Carousel from '../CarouselContainer';

function Home(){
    return(
        <>
        <div className="container-color">
            <div className="carousel-container">
                <Carousel/>
            </div>
        </div>
        <div className="contenedor">
            <div className="contenido">
            </div>
        </div>
        </> 

    );
}

export default Home;