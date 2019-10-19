import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { pluginWrapper } from '@fullpage/react-fullpage';
import './App.css';

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
          navigationTooltips={['HOLA', 'SOBRE MÍ', 'SKILLS', 'SOFT SKILLS', 'PROYECTOS', 'BLOG', 'CONTACTO']}
          navigation
          anchors={['welcome', 'aboutMe', 'skills', 'softSkills', 'proyects', 'moreAboutMe', 'contact']}
          sectionSelector={SECTION_SEL}
          sectionsColor={this.state.sectionsColor}

          render={comp => (
            <ReactFullpage.Wrapper>
              <section className={`active wellcome ${SEL}`} key='welcome'>
                <h1 className="wellcome__title">¡Hola! Mi nombre es Patricia Suárez Rodríguez y soy Junior Front-end Developer</h1>
              </section>
              <section className={`aboutMe ${SEL}`} key='aboutMe'>
                <h2 className="aboutMe__title">Sobre mí</h2>
                <p className="aboutMe__tex">
                  Me llamo Patricia Suárez, de Madrid y soy una bioquímica apasionada por la ciencia que ahora quiere reinventarse y seguir creciendo dentro del mundo de la programación front-end.
                  Soy desarrolladora web frontend junior desde junio de 2019. La curiosidad por la programación me llevó al bootcamp de Adalab y ahora, tras meses formándome, tengo verdadera pasión por todo lo que tiene relación con la tecnología y el desarrollo web. 
                  Me encanta este sector, y para mí cada proyecto es un nuevo reto que afronto con gran entusiasmo, ganas de aprender y me implico al máximo para dar lo mejor de mí misma.

                  **Añadir un quote**
                </p>
              </section>
              <section className={`skills ${SEL}`} key='skills'>
                <h2 className="skills__title">Skills</h2>
                <p className="skills__tex">HTML5, CSS3, JavaScript ES6, React, Gulp, SASS, GIT, GitHub...</p>
              </section>
              <section className={`soft-skills ${SEL}`} key='soft-skills'>
                <h2 className="soft-skills__title">Soft Skills</h2>
                <p className="soft-skills__tex">Trabajo en equipo, creatividad, proactividad...</p>
              </section>
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
