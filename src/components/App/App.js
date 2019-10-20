import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { pluginWrapper } from '@fullpage/react-fullpage';
import Wellcome from '../Wellcome';
import AboutMe from '../AboutMe';
import Skills from '../Skills';

import './App.scss';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

const originalColors = ['#ff5f45', '#0798ec', '#fc6c7c', '#435b71', 'orange', 'blue', 'purple', 'yellow'];

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
              <section className={`proyects ${SEL}`} key='proyects'>
                <h2 className="proyects__title">Proyectos</h2>
                <p className="proyects__tex">Lista de proyectos con componentes importados</p>
              </section>
              <section className={`moreAboutMe ${SEL}`} key='moreAboutMe'>
                <h2 className="moreAboutMe__title">Más sobre mí</h2>
                <p className="moreAboutMe__tex">Blog Pasaporte en Blanco</p>
              </section>
              <section className={`contact ${SEL}`} key='contact'>
                <h2 className="contact__title">Contacto</h2>
                <p className="contact__tex">Links a RRSS</p>
              </section>
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

export default App;
