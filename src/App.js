import React from 'react';
import './App.css';
import popcorns from './images/pop-corns.gif';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1 className="portfolio__title">PORTFOLIO EN CONSTRUCCIÓN</h1>
        <p className="coming__text">Coming soon ...</p>
        <img className="Coming__gif" src={popcorns} alt="coming soon portfolio gif" />
      </div>
    );
  }
}

export default App;
