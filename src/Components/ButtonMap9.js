import React from 'react'

const ButtonMap9 = () => {
    return (
        <> 
          <div class="container-map">
            <div class="card-map">
              <div class="card__image-container-map-btn9">
                <img class="card__image__map" src="https://universe-meeps.leagueoflegends.com/v1/assets/images/ixtal_splash.jpg" alt=""/>
              </div>
                  
              <svg class="card__svg__map" viewBox="0 0 800 500">
        
                <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="rgb(26,23,23)"/>
                <path class="card__line__map" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent"/>
              </svg>
                
              <div class="card__content__map">
                <h1 class="card__title__map">Ixtal</h1>
                <p>Apartada en las profundidades del oriente de Shurima, la sofisticada 
                  ciudad-arcología de Ixaocan permanece casi intacta frente a la 
                  influencia externa. 
                </p>
                <div className="imgs-map">
                  <img src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/universe-map/es_MX/58c9aeb77ffc8ea44a3d723fd2e0ccc964f3444b/assets/assets/images/champions/portraits/malphite.png" alt="malphite"/>
                  <img src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/universe-map/es_MX/58c9aeb77ffc8ea44a3d723fd2e0ccc964f3444b/assets/assets/images/champions/portraits/neeko.png" alt="neeko"/>
                  <img src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/universe-map/es_MX/58c9aeb77ffc8ea44a3d723fd2e0ccc964f3444b/assets/assets/images/champions/portraits/rengar.png" alt="rengar"/>
                  <img src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/universe-map/es_MX/58c9aeb77ffc8ea44a3d723fd2e0ccc964f3444b/assets/assets/images/champions/portraits/zyra.png" alt="zyra"/>
                  <img src="https://lolstatic-a.akamaihd.net/frontpage/apps/prod/universe-map/es_MX/58c9aeb77ffc8ea44a3d723fd2e0ccc964f3444b/assets/assets/images/champions/portraits/nidalee.png" alt="nidalee"/>
                </div>
              </div>
            </div>
          </div>         
        </>
    )
}

export default ButtonMap9;