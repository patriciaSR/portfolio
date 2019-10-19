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
      sectionsColor: [...originalColors],
      fullpages: [
        {
          text: 'Welcome',
        },
        {
          text: 'Sobre mí',
        },
        {
          text: 'Skills',
        },
        {
          text: 'Soft Skills',
        },
        {
          text: 'Proyectos',
        },
        {
          text: 'Más sobre mí (Blog)',
        },
        {
          text: 'Contacto',
        },
      ],
    };
  }

  handleChangeColors() {
    const newColors =
      this.state.sectionsColor[0] === 'yellow'
        ? [...originalColors]
        : ['yellow', 'blue', 'white'];
    this.setState({
      sectionsColor: newColors,
    });
  }

  handleAddSection() {
    this.setState(state => {
      const { fullpages } = state;
      const { length } = fullpages;
      fullpages.push({
        text: `section ${length + 1}`,
        id: Math.random(),
      });

      return {
        fullpages: [...fullpages],
      };
    });
  }

  handleRemoveSection() {
    this.setState(state => {
      const { fullpages } = state;
      const newPages = [...fullpages];
      newPages.pop();

      return { fullpages: newPages };
    });
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    const Menu = () => (
      <div
        className="menu"
        style={{
          position: 'fixed',
          top: 0,
          zIndex: 100,
        }}
      >
        <ul className="actions">
          <li>
            <button onClick={() => this.handleAddSection()}>Add Section</button>
            <button onClick={() => this.handleRemoveSection()}>
              Remove Section
            </button>
            <button onClick={() => this.handleChangeColors()}>
              Change background colors
            </button>
            <button onClick={() => this.moveSectionDown()}>
              Move Section Down
            </button>
          </li>
        </ul>
      </div>
    );

    return (
      <div className="app">
        <Menu />
        <ReactFullpage
          debug /* Debug logging */

          // Required when using extensions
          pluginWrapper={pluginWrapper}

          // fullpage options
          licenseKey={'YOUR_KEY_HERE'} // Get one from https://alvarotrigo.com/fullPage/pricing/
          navigation
          anchors={['welcome', 'aboutMe', 'skills', 'softSkills', 'proyects', 'moreAboutMe', 'contact']}
          sectionSelector={SECTION_SEL}
          sectionsColor={this.state.sectionsColor}

          render={comp => (
            <ReactFullpage.Wrapper>
              <div className={`wellcome ${SEL}`} key='welcome'>
                <h1 className="wellcome__title">¡Hola! Mi nombre es Patricia Suárez Rodríguez y soy Junior Front-end Developer</h1>
              </div>
              <div className={`aboutMe ${SEL}`} key='aboutMe'>
                <h2 className="aboutMe__title">Sobre mí</h2>
                <p className="aboutMe__tex">Mi nombre es Patricia Suárez Rodríguez y soy Junior Front-end Developer</p>
              </div>
              <div className={`skills ${SEL}`} key='skills'>
                <h2 className="skills__title">Skills</h2>
                <p className="skills__tex">Mi nombre es Patricia Suárez Rodríguez y soy Junior Front-end Developer</p>
              </div>
              <div className={`soft-skills ${SEL}`} key='soft-skills'>
                <h2 className="soft-skills__title">Soft Skills</h2>
                <p className="soft-skills__tex">Mi nombre es Patricia Suárez Rodríguez y soy Junior Front-end Developer</p>
              </div>
              <div className={`proyects ${SEL}`} key='proyects'>
                <h2 className="proyects__title">Proyectos</h2>
                <p className="proyects__tex">Mi nombre es Patricia Suárez Rodríguez y soy Junior Front-end Developer</p>
              </div>
              <div className={`moreAboutMe ${SEL}`} key='moreAboutMe'>
                <h2 className="moreAboutMe__title">Más sobre mí</h2>
                <p className="moreAboutMe__tex">Mi nombre es Patricia Suárez Rodríguez y soy Junior Front-end Developer</p>
              </div>
              <div className={`contact ${SEL}`} key='contact'>
                <h2 className="contact__title">Contacto</h2>
                <p className="contact__tex">Mi nombre es Patricia Suárez Rodríguez y soy Junior Front-end Developer</p>
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

export default App;
