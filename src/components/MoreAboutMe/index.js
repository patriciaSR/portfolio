import React from 'react';
import './styles.scss';
import blogPhoto from './../../images/blog-photo.jpg';

const MoreAboutMe = () => {
  return (
    <section className="moreAboutMe custom-section" key='moreAboutMe'>
      <div className="moreAboutMe__container">
        <h2 className="moreAboutMe__title">Más sobre mí</h2>
        <div className="moreAboutMe__info">
          <div className="moreAboutMe-text__container">

            <p className="moreAboutMe__text">
              ¡No todo va a ser programar!
              Me encanta <strong>viajar</strong> y qué mejor manera de juntar la programación y los viajes que con un blog.
            </p>
            <p className="moreAboutMe__text">
              Os presento a <strong>Pasaporte en Blanco</strong>, un blog de viajes para aventureros que tengan muchas ganas de descubrir Mundo y vivir nuevas experiencias. Aquí podréis encontrar mis aventuras viajeras y muchos consejos a la hora de viajar.
            </p>
            
          </div>
          <div className="moreAboutMe-photo__container">
            <a href="https://www.pasaporteenblanco.com/" target="_blank" rel="noopener noreferrer" className="moreAboutMe__link">
              <img src={blogPhoto} alt="blog-pasaporte-en-blanco" className="moreAboutMe__photo" />
            </a>
          </div>
        </div>

      </div>

    </section>
  )
}

export default MoreAboutMe;