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
        <div className="footer">
            <div className="tags">
                <a href="https://euw.leagueoflegends.com/es/game-info/get-started/what-is-lol/" target="_blank">Acerca de League of Legends</a>
                <a href="http://leagueoflegends.eu-surveyes2.sgizmo.com/s3/" target="_blank">Ayudanos a mejorar</a>
                <a href="https://status.riotgames.com/?locale=es_ES&region=na" target="_blank">Estados del servidor</a>
                <a href="https://support.riotgames.com/hc/es-419" target="_blank">Asistencia</a>
            </div>
            <div className="logo-footer">
                <a href="http://www.riotgames.com/" target="_blank"><svg width="109" height="35" viewBox="0 0 109 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.7136 31.6814L16.1378 27.5918L31.3569 28.3812L30.6733 34.9265L17.7136 31.6814Z" 
                    fill="#E6E6E6"></path>
                    <path d="M21.3595 0L0.0616455 10.143L3.35453 25.427H7.70011L6.9491 14.4946L7.61666 14.2843L10.2291 25.427H14.7416L14.5747 12.1101L15.2423 11.8998L17.5242 25.427H22.3031L23.4296 9.34061L24.0971 9.13031L25.2782 25.427H31.5976L33.8217 3.05746L21.3595 0Z" 
                    fill="#E6E6E6"></path>
                    <path d="M105.462 31.1253L99.4029 30.09L99.4286 29.2908L105.228 29.074L105.08 27.5469H97.6249L97.2429 31.3809L103.405 32.4615L103.434 33.1668L97.0215 33.4192L96.8642 34.9463H105.838L105.462 31.1253ZM47.5673 30.5526L47.4742 31.9374L49.6823 32.0118L49.6534 33.416L45.035 33.2801L45.2372 29.2196L51.5887 29.0708L51.4956 27.5437H43.2923L42.5573 34.9431H51.9032L51.6625 30.4815L47.5673 30.5526ZM87.1332 33.2704L87.0883 31.9956L91.4595 31.9439L91.5013 30.5526L87.0369 30.4976L86.992 29.2067L92.8749 29.0676L92.923 27.5437H84.9893L84.7518 34.9431H93.0707L93.0129 33.416L87.1332 33.2704Z" 
                    fill="#E6E6E6"></path>
                    <path d="M80.7274 34.9431L79.9924 27.5437H77.8806L74.8445 31.0703L71.8116 27.5437H69.6998L68.9648 34.9431H71.4457L71.6832 30.145L74.8445 33.416L78.009 30.145L78.2465 34.9431H80.7274Z" 
                    fill="#E6E6E6"></path>
                    <path d="M70.2996 0.453735H65.3346L64.882 23.3313H70.8805L70.2996 0.453735Z" 
                    fill="#E6E6E6"></path>
                    <path d="M90.4879 0.461792H75.0088L74.4055 23.3296H91.5887L90.4879 0.461792ZM85.6866 18.3536L80.2081 18.5315L80.0252 5.07548L85.754 5.25019L85.6866 18.3536Z" 
                    fill="#E6E6E6"></path>
                    <path d="M109 5.4589L108.448 0.453735H93.1935L93.3219 4.91212L98.2035 5.0836L98.7009 23.3313H104.712L102.915 5.2486L109 5.4589Z" 
                    fill="#E6E6E6"></path>
                    <path d="M55.6236 23.3313H62.1387L57.8927 13.0621L61.2818 11.1953L58.9646 0.453735H42.3301L41.7845 5.41037L45.5042 5.28419L43.7101 23.3313H49.5321L49.6893 17.5787L53.8841 15.2686L55.6236 23.3313ZM50.0327 5.13213L54.818 4.97036L55.3636 9.52904L49.8402 12.1594L50.0327 5.13213Z" 
                    fill="#E6E6E6"></path>
                    <path d="M62.9415 34.9431H65.4545L63.4679 27.5437H57.5721L55.5855 34.9431H58.0985L58.4868 33.0762L62.566 33.128L62.9415 34.9431ZM58.7917 31.6074L59.2956 29.1873L61.7187 29.0773L62.2258 31.5071L58.7917 31.6074Z" fill="#E6E6E6"></path></svg></a>
            </div>
        </div>
        </> 

    );
}

export default Home;