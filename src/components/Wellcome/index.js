import React from 'react';
import './styles.scss';

const Wellcome = () => {
  return (
    <section className="active wellcome custom-section">
      <div className="wellcome__container">
        <h1 className="wellcome__title">
          ¡Hola! Mi nombre es
        <span className="title__name">Patricia Suárez Rodríguez</span>
          y soy 
        <span className="title__career"> Front-end Developer</span>
        </h1>
        <a href="#aboutMe" className="wellcome__arrow-link">
          <i className="fas fa-chevron-circle-down arrow__icon"></i>
        </a>
      </div>
    </section>
  )
}

export default Wellcome;