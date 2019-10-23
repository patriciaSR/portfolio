import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { pluginWrapper } from '@fullpage/react-fullpage';
import Wellcome from '../Wellcome';
import AboutMe from '../AboutMe';
import Skills from '../Skills';

import './App.scss';
import Proyects from '../Proyects';
import MoreAboutMe from '../MoreAboutMe';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

const originalColors = ['#ff5f45', '#0798ec', '#fc6c7c', '#435b71', 'orange', 'green'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors]
    };
  }

  render() {

    return (
      <div className="app">
        <ReactFullpage

          // Required when using extensions
          pluginWrapper={pluginWrapper}
          navigation={true}
          navigationPosition={'right'}
          navigationTooltips={['HOLA', 'SOBRE MÍ', 'SKILLS', 'PROYECTOS', 'BLOG', 'CONTACTO']}
          navigation
          anchors={['welcome', 'aboutMe', 'skills', 'proyects', 'moreAboutMe', 'contact']}
          sectionSelector={SECTION_SEL}
          sectionsColor={this.state.sectionsColor}

          render={comp => (
            <ReactFullpage.Wrapper>
              <Wellcome />
              <AboutMe />
              <Skills />
              <Proyects />
              <MoreAboutMe />
              <section className={`contact ${SEL}`} key='contact'>
                <h2 className="contact__title">Contacto</h2>
                <p className="contact__tex">Links a RRSS</p>
                <ul className="contact__list">
                  <li className="contact__item">
                    <a href="https://github.com/patriciaSR" target="_blank" rel="noopener noreferrer" className="contact__link">Github</a>
                  </li>
                  <li className="contact__item">
                    <a href="https://www.linkedin.com/in/patricia-suarez-rodriguez/" target="_blank" rel="noopener noreferrer" className="contact__link">LinkedIn</a>
                  </li>
                  <li className="contact__item">
                    <a href="https://twitter.com/patriiSR" target="_blank" rel="noopener noreferrer" className="contact__link">Twitter</a>
                  </li>
                  <li className="contact__item">
                    <a href="mailto:patricia.suarez.psr@gmail.com" target="_blank" rel="noopener noreferrer" className="contact__link">Mail</a>
                  </li>
                </ul>
                <footer className="page__footer">
                  <span className="footer__text">Diseñado y desarrollado por </span>
                  <a href="https://github.com/patriciaSR" target="_blank" rel="noopener noreferrer" className="footer__link">@patriciaSR</a>
                </footer>
              </section>
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

export default App;
