import React from 'react';
import './styles.css';

const Wellcome = () => {
  return (
    <section className="active wellcome custom-section">
      <h1 className="wellcome__title">
        <span>¡Hola!</span>
        <span>Mi nombre es</span>
        <span className="title__name">Patricia Suárez Rodríguez</span>
        <span>y soy</span>
        <span className="title__career">Junior Front-end Developer</span>
      </h1>
    </section>
  )
}

export default Wellcome;