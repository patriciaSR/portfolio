import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles.js';
import './styles.scss';

import tandem from './../../images/screenshots/tandem.png';
import awesomeJs from './../../images/screenshots/awesome-js.png';
import awesomeReact from './../../images/screenshots/awesome-react.png';
import tealify from './../../images/screenshots/tealify.png';
import shows from './../../images/screenshots/shows.png';
import ricky from './../../images/screenshots/ricky.png';


const images = [
  {
    url: tandem,
    web: 'https://github.com/patriciaSR/g-m1-tandemcode',
    title: 'Tandem Code - Web de Contacto',
    width: '30%',
  },
  {
    url: awesomeJs,
    web: 'https://github.com/patriciaSR/g-m2-letmecode',
    title: 'Awesome Profile Cards - vanillaJS',
    width: '30%',
  },
  {
    url: awesomeReact,
    web: 'https://github.com/patriciaSR/g-m3-actreact',
    title: 'Awesome Profile Cards - ReactJS',
    width: '30%',
  },
  {
    url: tealify,
    web: 'https://github.com/patriciaSR/g-m4-bridgeforbillions',
    title: 'Tealify - Proyecto para Bridge for Billions',
    width: '30%',
  },
  {
    url: shows,
    web: 'https://github.com/patriciaSR/m2-evaluacion-final-patriciaSR',
    title: 'Buscador de Series y Películas - vanillaJS',
    width: '30%',
  },
  {
    url: ricky,
    web: 'https://github.com/patriciaSR/m3-evaluacion-final-patriciaSR',
    title: 'Directorio de Ricky y Morty - ReactJS',
    width: '30%',
  },

];

const Proyects = () => {
  const classes = useStyles();

  return (
    <section className="proyects custom-section" key='proyects'>
      <div className="proyects__container">
        <h2 className="proyects__title">Proyectos</h2>
        <div className={classes.root}>
          {images.map(image => (
              <ButtonBase
                focusRipple
                key={image.title}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                href={image.web}
                target="_blank"
                style={{
                  width: image.width,
                }}
              >
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  {image.title}
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
              </ButtonBase>
          ))}
        </div>
      </div>
      
    </section>
  );
}


// const Proyects = () => {
//   return (
//     <section className="proyects custom-section" key='proyects'>
//       <h2 className="proyects__title">Proyectos</h2>
//       <ol className="proyects__list">
//         <li className="proyects__item">
//           <a href="#tandem" className="proyect__link">TandemCode-Web de Contacto</a>
//         </li>
//         <li className="proyects__item">
//           <a href="#awesome" className="proyect__link">Awesome profile Cards</a>
//         </li>
//         <li className="proyects__item">
//           <a href="#awesome-react" className="proyect__link">Awesome profile Cards-React</a>
//         </li>
//         <li className="proyects__item">
//           <a href="#tealify" className="proyect__link">tealify-Bridge for Billions</a>
//         </li>
//         <li className="proyects__item">
//           <a href="#ricky-morty" className="proyect__link">Directorio personajes Ricky y Morty</a>
//         </li>
//         <li className="proyects__item">
//           <a href="#pokedex" className="proyect__link">Pokedex</a>
//         </li>
//         <li className="proyects__item">
//           <a href="#films" className="proyect__link">Buscador de películas</a>
//         </li>
//       </ol>
//     </section>
//   )
// }

export default Proyects;