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
        
                <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="rgb(26,23,23)"/>
                <path class="card__line__map" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="2" fill="transparent"/>
              </svg>
                
              <div class="card__content__map">
                <h1 class="card__title__map">Piltover</h1>
                <p>Piltóver es una ciudad boyante y progresista, con vistas al océano. 
                  Flotas de barcos pasan a través de sus titánicas puertas 
                  marítimas, transportando mercancías provenientes de todo 
                  el mundo. 
                </p>
                <div className="imgs-map">
                  <img src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/universe-map/es_MX/58c9aeb77ffc8ea44a3d723fd2e0ccc964f3444b/assets/assets/images/champions/portraits/camille.png" alt="camille"/>
                  <img src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/universe-map/es_MX/58c9aeb77ffc8ea44a3d723fd2e0ccc964f3444b/assets/assets/images/champions/portraits/caitlyn.png" alt="caitlyn"/>
                  <img src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/universe-map/es_MX/58c9aeb77ffc8ea44a3d723fd2e0ccc964f3444b/assets/assets/images/champions/portraits/ezreal.png" alt="ezreal"/>
                  <img src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/universe-map/es_MX/58c9aeb77ffc8ea44a3d723fd2e0ccc964f3444b/assets/assets/images/champions/portraits/jayce.png" alt="jayce"/>
                  <img src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/universe-map/es_MX/58c9aeb77ffc8ea44a3d723fd2e0ccc964f3444b/assets/assets/images/champions/portraits/orianna.png" alt="orianna"/>
                  <img src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/universe-map/es_MX/58c9aeb77ffc8ea44a3d723fd2e0ccc964f3444b/assets/assets/images/champions/portraits/vi.png" alt="vi"/>
                  <img src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/universe-map/es_MX/58c9aeb77ffc8ea44a3d723fd2e0ccc964f3444b/assets/assets/images/champions/portraits/heimerdinger.png" alt="heimerdinger"/>
                </div>
              </div>
            </div>
          </div>         
        </>
    )
}

export default ButtonMap1;