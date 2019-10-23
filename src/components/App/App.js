import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { pluginWrapper } from '@fullpage/react-fullpage';
import Wellcome from '../Wellcome';
import AboutMe from '../AboutMe';
import Skills from '../Skills';

import './App.scss';
import Proyects from '../Proyects';
import MoreAboutMe from '../MoreAboutMe';
import Contact from '../Contact';

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
              <Contact />
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

export default App;
