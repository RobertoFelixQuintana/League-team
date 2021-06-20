import Muuri from 'muuri';
import React, {useState,useEffect} from 'react';
import './Champions.css';



export default function Champions(){

    const [grid, setGrid] = useState();
    useEffect(() => {
        setGrid(
          new Muuri('.grid', {
            layout:{
                rounding:false,
            },
            dragEnabled: true,
            layoutDuration: 400,
          })
        );
    
      }, []);
      /* Cambiar el boton activo de categorias*/
      window.addEventListener('load', ()=>{
        const enlaces=document.querySelectorAll('#categorias a');
        enlaces.forEach((elemento)=>{
            elemento.addEventListener('click',(evento)=>{
                evento.preventDefault();
                enlaces.forEach((enlace)=>enlace.classList.remove('active'))
                evento.target.classList.add('active');      
            })
        }) 
    });

    return(
        
        <>
            
            <div className="container-head">
                <div className="span-head-champs">
                    <span>CAMPEONES</span>
                </div>
            </div>
            <div className="fondo-champs">
                <div className="container-champ">
                    <h2>
                        Listado de campeones por region
                    </h2>
                    <div class="container-busqueda">
                      <input 
                      type="search" 
                      id="search" 
                      placeholder="Search a champ..." 
                      onChange={() => {
                        let searchField = document.querySelector('#search');
                        let searchAttr = 'data-name';
                        let searchFieldValue = searchField.value.toLowerCase();
                        /*Guardar los datos del input a variable */
                        searchField.addEventListener('keyup', function () {
                            var newSearch = searchField.value.toLowerCase();
                            if (searchFieldValue !== newSearch) {
                              searchFieldValue = newSearch;
                            }
                          });
                        grid.filter(function (item) {
                            
                            var element = item.getElement(),
                            isSearchMatch = !searchFieldValue ? true : (element.getAttribute(searchAttr) || '').toLowerCase().indexOf(searchFieldValue) > -1
                            return isSearchMatch;
                        });
                            }}
                        />
                    </div>
                </div>
                <div className="categorias" id="categorias">
                    <a href="" class="active"
                    onClick={() => {
                      grid.filter("[data-categoria]");
                      }}
                      >Todas</a>
                    <a href=""
                    onClick={() => {
                        grid.filter("[data-categoria='aguasturbias']");
                      }}
                      >Aguasturbias</a>
                    <a href=""
                    onClick={() => {
                        grid.filter("[data-categoria='ciudad de bandle']");
                      }}
                      >Ciudad de Bandle</a>
                    <a href=""
                    onClick={() => {
                        grid.filter("[data-categoria='demacia']");
                      }}
                      >Demacia</a>
                    <a href=""
                    onClick={() => {
                        grid.filter("[data-categoria='el freljord']");
                      }}>El Fréljord</a>              
                    <a href=""
                    onClick={() => {
                        grid.filter("[data-categoria='el vacio']");
                      }}
                      >El vacio</a>
                    <a href=""
                    onClick={() => {
                        grid.filter("[data-categoria='islas de la sombra']");
                      }}
                      >Islas de la sombra</a>
                    <a href=""
                    onClick={() => {
                        grid.filter("[data-categoria='ixtal']");
                      }}>Ixtal</a>
                    <a href=""
                    onClick={() => {
                        grid.filter("[data-categoria='jonia']");
                      }}
                      >Jonia</a>
                    <a href=""
                    onClick={() => {
                        grid.filter("[data-categoria='noxus']");
                      }}
                      >Noxus</a>
                    <a href=""
                    onClick={() => {
                        grid.filter("[data-categoria='piltover']");
                      }}
                      >Piltóver</a>
                    <a href=""
                    onClick={() => {
                        grid.filter("[data-categoria='shurima']");
                      }}
                      >Shurima</a>
                    <a href=""
                    onClick={() => {
                        grid.filter("[data-categoria='targon']");
                      }}
                      >Targón</a>
                    <a href=""
                    onClick={() => {
                        grid.filter("[data-categoria='zaun']");
                      }}
                      >Zaun</a>            
                </div>
                <div className='grid' id="grid">
                    <div className='card card-cr item'
                    data-categoria="todas"
                    data-name="aatrox">
                        <div className='item-content'>
                            <img src='https://esports.as.com/2019/05/17/league-of-legends/Aatrox_1246085401_158925_1024x576.jpg'
                            alt='aatrox'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            Alguna vez honorables defensores de Shurima contra 
                            el Vacío, Aatrox y sus hermanos se convertirían con 
                            el tiempo en una mayor amenaza para Runaterra, y 
                            fueron derrotados solo con brujería astuta y mortal.
                            </p>
                        </div>
                        <div className='tag-champ'>
                            <h1>Aatrox</h1>
                        </div>
                    </div>       
                    <div className='card card-c item'
                    data-categoria="jonia"
                    data-name="ahri">
                        
                        <div className="item-content">
                            <img src='https://esports.as.com/2019/05/17/league-of-legends/Ahri_1246085402_158937_1024x576.jpg'
                            alt='ahri'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            Conectada de manera natural a la magia del reino espiritual, Ahri es 
                            una misteriosa vastaya vulpina que busca su lugar en el mundo. 
                            </p>
                        </div>
                        <div className='tag-champ'>
                            <h1>Ahri</h1>
                        </div>
                    </div>    
                    <div className='card card-c item'
                    data-categoria="jonia"
                    data-name="akali">
                        <div className="item-content">
                            <img src='https://esports.as.com/2019/05/17/league-of-legends/Akali_1246085403_158949_1024x576.jpg'
                            alt='akali'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            Tras renunciar a la Orden Kinkou y a su título como el Puño de la Sombra, Akali 
                            pelea sola, lista para ser el arma letal que su pueblo necesita. Aunque conserva 
                            todo lo que aprendió de su maestro Shen, juró defender a Jonia de sus enemigos, 
                            una muerte a la vez.
                            </p>
                        </div>
                        <div className='tag-champ'>
                            <h1>Akali</h1>
                        </div>
                    </div>    
                    <div className='card card-cr item'
                    data-categoria="todas"
                    data-name="alistar">
                        <div className="item-content">
                            <img src='https://esports.as.com/2019/05/17/league-of-legends/Alistar_1246085404_158961_1024x576.jpg'
                            alt='alistar'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            Alistar, que desde siempre fue un gran guerrero con una temible reputación, busca 
                            venganza por la muerte de su clan a manos del imperio noxiano. Aunque haya sido 
                            esclavizado y forzado a tener una vida de gladiador, su voluntad inquebrantable 
                            fue lo que impidió que se convirtiera en una bestia completamente.
                            </p>
                        </div>
                        <div className='tag-champ'>
                            <h1>Alistar</h1>
                        </div>
                    </div>
                    <div className='card card-r item'
                    data-categoria="shurima"
                    data-name="amumu">
                        <div className="item-content">
                            <img src='https://esports.as.com/2019/05/17/league-of-legends/Amumu_1246085405_158973_1024x576.jpg'
                            alt='amumu'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            Cuenta la leyenda que Amumu es un alma solitaria y melancólica de la antigua Shurima que 
                            vaga por el mundo en busca de un amigo. Una antigua maldición lo condenó a permanecer
                            solo por toda la eternidad. Sus caricias son la muerte, su afecto es la ruina.
                            </p>
                        </div>
                        <div className='tag-champ'>
                            <h1>Amumu</h1>
                        </div>
                    </div>
                    <div className='card card-c item'
                    data-categoria="el freljord"
                    data-name="anivia">
                        <div className="item-content">
                            <img src='https://esports.as.com/2019/05/17/league-of-legends/Anivia_1246085406_158985_1024x576.jpg'
                            alt='anivia'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            Anivia es un espíritu benevolente alado que soporta interminables ciclos de vida, muerte 
                            y resurrección para proteger Fréljord. Nació de la unión del hielo cruel y del viento 
                            penetrante.
                            </p>
                        </div>
                        <div className='tag-champ'>
                            <h1>Anivia</h1>
                        </div>
                    </div> 
                    <div className='card card-rr item'
                    data-categoria="todas"
                    data-name="annie">
                        <div className="item-content">
                            <img src='https://esports.as.com/2019/05/17/league-of-legends/Annie_1246085407_158997_1024x576.jpg'
                            alt='annie'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            Peligrosa y encantadora, Annie es una niña con un gran poder piromántico. Incluso en las 
                            sombras de las montañas al norte de Noxus, es una maga excepcional. Su afinidad innata 
                            con el fuego se manifestó de forma precoz a través de explosiones emocionales 
                            impredecibles.
                            </p>
                        </div>
                        <div className='tag-champ'>
                            <h1>Annie</h1>
                        </div>
                    </div>   
                    <div className='card card-c item'
                    data-categoria="targon"
                    data-name="aphelios">
                        <div className="item-content">
                            <img src='https://esports.as.com/2020/01/16/league-of-legends/Aphelios-odiado-League-of-Legends_1319278082_324417_1024x576.jpg'
                            alt='aphelios'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            Aphelios emerge de la sombra de la luz de la luna con las armas desenvainadas y mata a los 
                            enemigos de su fe en un silencio melancólico. Habla únicamente a través de la certeza de 
                            su puntería y del disparo de cada arma.
                            </p>
                        </div>
                        <div className='tag-champ'>
                            <h1>Aphelios</h1>
                        </div>
                    </div>    
                    <div className='card card-r item'
                    data-categoria="el freljord"
                    data-name="ashe">
                        <div className="item-content">
                            <img src='https://esports.as.com/2019/05/17/league-of-legends/Ashe_1246085408_159009_1024x576.jpg'
                            alt='ashe'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            Como Hija del Hielo y madre de guerra de la tribu Avarosa, Ashe comanda la más 
                            grande horda en el norte. Estoica, inteligente e idealista, pero incómoda con 
                            su rol de líder, ella aprovecha las magias ancestrales de su linaje para portar 
                            un arco de Hielo Puro.
                            </p>
                        </div>
                        <div className='tag-champ'>
                            <h1>Ashe</h1>
                        </div>
                    </div>    
                    <div className='card card-c item'
                    data-categoria="todas"
                    data-name="aurelion sol">
                        <div className="item-content">
                            <img src='https://esports.as.com/2019/05/17/league-of-legends/Aurelion-Sol_1246085409_159021_1024x576.jpg'
                            alt='aurelion sol'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            En otro tiempo, Aurelion Sol adornó el gran vacío del reino celestial con maravillas de 
                            su propia invención, pero fue engañado por los aspectos de Targón para que les revelara 
                            los secretos de un sol que él mismo creó. 
                            </p>
                        </div>
                        <div className='tag-champ'>
                            <h1>Aurelion Sol</h1>
                        </div>
                    </div> 
                    <div className='card card-r item'
                    data-categoria="shurima"
                    data-name="azir">
                        <div className="item-content">
                            <img src='https://esports.as.com/2019/05/17/league-of-legends/Azir_1246085410_159033_1024x576.jpg'
                            alt='azir'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            Azir, emperador de Shurima en un pasado remoto, fue un hombre 
                            orgulloso que estuvo a punto de alcanzar la inmortalidad. Dominado 
                            por la arrogancia, fue traicionado y asesinado en la hora de su 
                            mayor triunfo. 
                            </p>
                        </div>
                        <div className='tag-champ'>
                            <h1>Azir</h1>
                        </div>
                    </div> 
                    <div className='card card-c item'
                    data-categoria="todas"
                    data-name="bardo">
                        <div className="item-content">
                             <img src='https://esports.as.com/2019/05/17/league-of-legends/Bardo_1246085411_159045_1024x576.jpg'
                            alt='bardo'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            El Bardo es un viajero de un reino más allá de las estrellas y un agente 
                            de la serendipia que lucha por conservar la armonía entre la 
                            creación y la fría indiferencia de lo que yace más allá de ella. 
                            </p>
                        </div>
                        <div className='tag-champ'>
                            <h1>Bardo</h1>
                        </div>
                    </div> 
                    <div className='card card-r item'
                    data-categoria="zaun"
                    data-name="blitzcrank">
                        <div className="item-content">
                             <img src='https://esports.as.com/2019/05/17/league-of-legends/Blitzcrank_1246085412_159057_1024x576.jpg'
                            alt='blitzcrank'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            Blitzcrank, un coloso de metal bruñido, vapor y electricidad 
                            centelleante, camina por las calles de Zaun en un esfuerzo 
                            incansable por mejorar el distrito suburbano y ayudar a aquellos 
                            que lo necesiten.
                            </p>
                        </div>
                        <div className='tag-champ'>
                            <h1>Blitzcrank</h1>
                        </div>
                    </div> 
                    <div className='card card-r item'
                    data-categoria="todas"
                    data-name="brand">
                        <div className="item-content">
                            <img src='https://esports.as.com/2019/05/17/league-of-legends/Brand_1246085413_159069_1024x576.jpg'
                            alt='brand'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            La criatura conocida como Brand, quien alguna vez fuera Kegan Rhode,
                            miembro de una tribu del gélido Fréljord, es una lección sobre la 
                            tentación de un poder mayor.
                            </p>
                        </div>
                        <div className='tag-champ'>
                            <h1>Brand</h1>
                        </div>
                    </div> 
                    <div className='card card-r item'
                    data-categoria="el freljord"
                    data-name="braum">
                        <div className="item-content">
                            <img src='https://esports.as.com/2019/05/17/league-of-legends/Braum_1246085414_159081_1024x576.jpg'
                            alt='braum'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            Dotado de bíceps inmensos y un corazón aún más grande, Braum es un 
                            querido héroe Hijo del Hielo del Fréljord. En todas las tabernas al
                            norte de Frostheld brindan por su fuerza legendaria y se cuentan 
                            relatos de cómo taló un bosque de robles en una sola noche.
                            </p>
                        </div>
                        <div className='tag-champ'>
                            <h1>Braum</h1>
                        </div>
                    </div> 
                    <div className='card card-c item'
                    data-categoria="zaun"
                    data-name="mundo">
                        <div className="item-content">
                            <img src='//am-a.akamaihd.net/image?f=https%3A%2F%2Funiverse-meeps.leagueoflegends.com%2Fv1%2Fassets%2Fimages%2Fmundo-splash.jpg&resize=:1800'
                            alt='mundo'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            El Dr. Mundo, completamente demente, trágicamente homicida y espeluznantemente morado, 
                            es la razón por la que los ciudadanos de Zaun permanecen en sus casas en las noches 
                            particularmente oscuras.
                            </p>
                        </div>
                        <div className='tag-champ'>
                            <h1>Mundo</h1>
                        </div>
                    </div> 
                    <div className='card card-rr item'
                    data-categoria="piltover"
                    data-name="camille">
                        <div className="item-content">
                            <img src='https://esports.as.com/2019/05/17/league-of-legends/Camille_1246085416_159105_1024x576.jpg'
                            alt='camille'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            Armada para operar fuera de los límites de la ley, Camille es la principal inteligencia 
                            del clan Ferros: una elegante agente de élite que se asegura de que la máquina de Piltóver 
                            y el submundo zaunita funcionen sin problemas.
                            </p>
                        </div>
                        <div className='tag-champ'>
                            <h1>Camille</h1>
                        </div>
                    </div>    
                    <div className='card card-r item'
                    data-categoria="noxus"
                    data-name="cassiopeia">
                        <div className="item-content">
                            <img src='https://esports.as.com/2019/05/17/league-of-legends/Cassiopeia_1246085417_159117_1024x576.jpg'
                            alt='cassiopeia'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            Cassiopeia es una criatura letal que disfruta manipular a otros para que hagan su voluntad. 
                            La más joven y hermosa hija de la noble familia Du Couteau de Noxus, se aventuró en las 
                            profundidades de las criptas debajo de Shurima en búsqueda de un poder antiguo.
                            </p>
                        </div>
                        <div className='tag-champ'>
                            <h1>Cassiopeia</h1>
                        </div>
                    </div> 
                    <div className='card card-cr item'
                    data-categoria="el vacio"
                    data-name="chogath cho'gath">
                        <div className="item-content">
                            <img src='https://esports.as.com/2019/05/17/league-of-legends/ChoGath_1246085418_159129_1024x576.jpg'
                            alt='cho gath'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            Desde el momento que Cho'Gath emergió por primera vez a la fuerte 
                            luz del sol de Runaterra, la bestia se vio consumida por el hambre 
                            más pura e insaciable.
                            </p>

                        </div>
                        <div className='tag-champ'>
                            <h1>Cho'Gath</h1>
                        </div>
                    </div>  
                    <div className='card card-r item'
                    data-categoria="ciudad de bandle"
                    data-name="corki">
                        <div className="item-content">
                            <img src='https://esports.as.com/2019/05/17/league-of-legends/Corki_1246085419_159141_1024x576.jpg'
                            alt='corki'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            Corki, el piloto yordle, adora dos cosas sobre todo lo demás: 
                            volar y su glamoroso bigote... aunque no siempre en ese orden.
                            </p>

                        </div>
                        <div className='tag-champ'>
                            <h1>Corki</h1>
                        </div>
                    </div> 
                    <div className='card card-r item'
                    data-categoria="islas de la sombra"
                    data-name="elise">
                        <div className="item-content">
                            <img src='https://esports.as.com/2019/05/17/league-of-legends/Elise_1246085425_159213_1024x576.jpg'
                            alt='elise'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            Elise es una depredadora letal que mora en un palacio sin luz 
                            ni ventanas, en las profundidades de la ciudad más antigua de 
                            Noxus.
                            </p>

                        </div>
                        <div className='tag-champ'>
                            <h1>Elise</h1>
                        </div>
                    </div>  
                    <div className='card card-cr item'
                    data-categoria="demacia"
                    data-name="fiora">
                        <div className="item-content">
                            <img src='https://esports.as.com/2019/05/17/league-of-legends/Fiora_1246085429_159261_1024x576.jpg'
                            alt='fiora'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            La duelista más temida en todo Valoran, Fiora es conocida por sus 
                            modos ásperos e ingenio político tanto como por la velocidad de 
                            su florete.
                            </p>

                        </div>
                        <div className='tag-champ'>
                            <h1>Fiora</h1>
                        </div>
                    </div>   
                    <div className='card card-r item'
                    data-categoria="aguasturbias"
                    data-name="gangplank">
                        <div className="item-content">
                            <img src='https://esports.as.com/2019/05/17/league-of-legends/Gangplank_1246085432_159297_1024x576.jpg'
                            alt='gangplank'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            Tan impredecible como brutal, el saqueador y rey destronado 
                            Gangplank es temido por todo el mundo. Alguna vez gobernó la 
                            ciudad portuaria de Aguasturbias y aunque su reino terminó, 
                            hay quienes creen que esto solo lo hizo más peligroso.
                            </p>

                        </div>
                        <div className='tag-champ'>
                            <h1>Gangplank</h1>
                        </div>
                    </div> 
                    <div className='card card-c item'
                    data-categoria="ixtal"
                    data-name="neeko">
                        <div className="item-content">
                            <img src='https://esports.as.com/2019/05/17/league-of-legends/Neeko_1246085478_159849_1024x576.jpg'
                            alt='neeko'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            Proveniente de una tribu vastaya perdida desde hace mucho tiempo, 
                            Neeko puede mezclarse en cualquier multitud adoptando la apariencia 
                            de los demás e incluso absorber un poco de su estado emocional para 
                            distinguir a un amigo de un enemigo en tan solo un instante.
                            </p>

                        </div>
                        <div className='tag-champ'>
                            <h1>Neeko</h1>
                        </div>
                    </div>  
                    <div className='card card-r item'
                    data-categoria="piltover"
                    data-name="caitlyn">
                        <div className="item-content">
                            <img src='https://esports.as.com/2019/05/17/league-of-legends/Caitlyn_1246085415_159093_1024x576.jpg'
                            alt='caitlyn'/>
                        </div>

                        <div className='img-description'>
                            <p>
                            Reconocida como la mejor pacificadora, Caitlyn también es la mejor oportunidad 
                            de Piltóver para deshacerse de los elementos criminales elusivos de su ciudad. 
                            A veces hace equipo con Vi y es un buen contrapunto para la naturaleza más 
                            impulsiva de su compañera.
                            </p>

                        </div>
                        <div className='tag-champ'>
                            <h1>Caitlyn</h1>
                        </div>
                    </div>               
                </div>
            </div>
            
        </>
    );
    
}
