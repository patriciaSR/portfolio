import React from 'react';
import './styles.scss';
import profilePhoto from './../../images/foto-perfil-2.jpg';

const AboutMe = () => {
  return (
    <section className="aboutMe custom-section" key='aboutMe'>
      <div className="aboutMe__container">
        <h2 className="aboutMe__title">Sobre mí</h2>
        <div className="aboutMe__info">
          <div className="aboutMe-photo__container">
            <img src={profilePhoto} alt="Patricia Suárez" className="aboutMe__photo" />
          </div>
          <div className="aboutMe-text__container">
            <p className="aboutMe__text">
              Me llamo Patricia Suárez, de Madrid, y soy una bioquímica apasionada por la ciencia que ahora quiere reinventarse y seguir creciendo dentro del mundo de la programación front-end.
            </p>
            <p className="aboutMe__text">
              Soy desarrolladora web frontend desde junio de 2019. La curiosidad por la programación me llevó al bootcamp de Adalab y ahora, tras meses formándome, tengo verdadera pasión por todo lo que tiene relación con la tecnología y el desarrollo web.
            </p>
            <p className="aboutMe__text">
              Me encanta este sector, y para mí cada proyecto es un nuevo reto que afronto con gran entusiasmo, ganas de aprender y me implico al máximo para dar lo mejor de mí misma.
            </p>
          </div>
        </div>
        <div className="aboutMe__quote">
          <span className="left">❝</span>
          <blockquote className="quote">
            Los humanos son alérgicos al cambio. Les encanta decir: "Siempre lo hemos hecho de esta manera". Yo intento luchar cada día contra eso.
          </blockquote>
          <small>Grace Murray Hopper</small>
          <span className="right">❞</span>
        </div>
      </div>

    </section>
  )
}

export default AboutMe;