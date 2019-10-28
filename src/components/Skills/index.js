import React from 'react';
import './styles.scss';
import html5Icon from './../../images/icons/html.png';
import css3Icon from './../../images/icons/CSS3.png';
import jsIcon from './../../images/icons/js.png';
import reactIcon from './../../images/icons/react.png';
import sassIcon from './../../images/icons/sass.png';
import gulpIcon from './../../images/icons/gulp.png';
import gitIcon from './../../images/icons/git.png';
import gitHubIcon from './../../images/icons/github.png';




const Skills = () => {
  return (
    <section className="skills custom-section" key='skills'>
      <div className="skills__container">
        <h2 className="skills__title">Skills</h2>
        <p className="skills__tex">
          Estoy especializada en diseño y desarrollo web con <strong>HTML5, CSS3 y JavaScript</strong>. Tengo experiencia desarrolando aplicaciones web con <strong>React</strong> y nunca me olvido de trabajar con herramientas como <strong>Sass, Gulp, Git o GitHub</strong>.
        </p>
        <ul className="skills__list">
          <li className="skills__item">
            <img src={html5Icon} alt="html5" className="item__icon"/>
          </li>
          <li className="skills__item">
            <img src={css3Icon} alt="html5" className="item__icon"/>
          </li>
          <li className="skills__item">
            <img src={jsIcon} alt="html5" className="item__icon"/>
          </li>
          <li className="skills__item">
            <img src={reactIcon} alt="html5" className="item__icon"/>
          </li>
          <li className="skills__item">
            <img src={sassIcon} alt="html5" className="item__icon"/>
          </li>
          <li className="skills__item">
            <img src={gulpIcon} alt="html5" className="item__icon"/>
          </li>
          <li className="skills__item">
            <img src={gitIcon} alt="html5" className="item__icon"/>
          </li>
          <li className="skills__item">
            <img src={gitHubIcon} alt="html5" className="item__icon"/>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills;