import React, { Component } from 'react';

import './App.css';
import Choose from './components/Choose';
import Board from './components/Board';
import Team from './components/Team';
import Result from './components/Result';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      player: '',
      computer: '',
      board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      chosenTeam: false,
    }

    this.chooseTeam = this.chooseTeam.bind(this);
  }

 chooseTeam(e) {
    this.setState({
      player: e.target.innerHTML,
      computer: (e.target.innerHTML === 'X' ? 'O' : 'X'),
      chosenTeam: true
    });
 }

  render() {
    return (
      <div className="App">
        <h1 className='title'>Tic-Tac-Toe</h1>
        <Choose chooseTeam={this.chooseTeam} toggle={this.state.chosenTeam} />
        <Board />
        <Team toggle={this.state.chosenTeam}
        player={this.state.player}
        computer={this.state.computer} />
        <Result />
        <button className='reset'>Reset</button>
        <Footer />
      </div>
    );
  }
}

export default App;
