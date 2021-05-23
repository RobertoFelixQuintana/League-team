import React from 'react'
import './ButtonMap.css';

const ButtonMap1 = () => {
    return (
        <> 
          <div class="container-map">
            <div class="card-map">
              <div class="card__image-container-map-btn1">
                <img class="card__image__map" src="https://universe-meeps.leagueoflegends.com/v1/assets/images/factions/piltover_splash.jpg" alt=""/>
              </div>
                  
              <svg class="card__svg__map" viewBox="0 0 800 500">
        
                <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"/>
                <path class="card__line__map" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent"/>
              </svg>
                
              <div class="card__content__map">
                <h1 class="card__title__map">Piltover</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor praesentium at quod autem omnis, amet eaque unde perspiciatis adipisci possimus quam facere illo et quisquam quia earum nesciunt porro.</p>
              </div>
            </div>
          </div>         
        </>
    )
}

export default ButtonMap1;