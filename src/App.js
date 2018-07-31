import React, { Component } from 'react';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import TemporatyDrawer from './components/TemporatyDrawer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TemporatyDrawer />
      </div>
    );
  }
}

export default App;
