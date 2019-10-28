import React from 'react';
import './styles.scss';

const Contact = () => {
  return (
    <section className="contact custom-section" key='contact'>
      <div className="contact__container">
        <h2 className="contact__title">Contacto</h2>
        <p className="contact__text">¿Quieres saber más mí?</p>
        <p className="contact__text">Si estás buscando un frontend o simplemente quieres conocerme más, contáctame y hablamos.</p>
        <ul className="contact__list">
          <li className="contact__item">
            <a draggable="false" href="https://github.com/patriciaSR" target="_blank" rel="noopener noreferrer" className="contact__link">
              <i className="fab fa-github-alt contact__icon"></i>
              <span className="link__text">@patriciaSR</span>
                    </a>
          </li>
          <li className="contact__item">
            <a href="https://www.linkedin.com/in/patricia-suarez-rodriguez/" target="_blank" rel="noopener noreferrer" className="contact__link">
              <i className="fab fa-linkedin contact__icon"></i>
              <span className="link__text">Patricia Suárez Rodríguez</span>
                    </a>
          </li>
          <li className="contact__item">
            <a href="https://twitter.com/patriiSR" target="_blank" rel="noopener noreferrer" className="contact__link">
              <i className="fab fa-twitter-square contact__icon"></i>
              <span className="link__text">@patriiSR</span>
                    </a>
          </li>
          <li className="contact__item">
            <a href="mailto:patricia.suarez.psr@gmail.com" target="_blank" rel="noopener noreferrer" className="contact__link">
              <i className="fas fa-envelope contact__icon"></i>
              <span className="link__text">patricia.suarez.psr@gmail.com</span>
                    </a>
          </li>
        </ul>
      </div>

      <footer className="page__footer">
        <span className="footer__text">Diseñado y desarrollado por </span>
        <a href="https://github.com/patriciaSR" target="_blank" rel="noopener noreferrer" className="footer__link">@patriciaSR</a>
      </footer>
    </section>
  )
}

export default Contact;