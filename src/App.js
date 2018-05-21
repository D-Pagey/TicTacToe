import React, { Component } from 'react';

import './App.css';
import Choose from './components/Choose';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='title'>Tic-Tac-Toe</h1>
        <Choose />
      </div>
    );
  }
}

export default App;
