import React, { Component } from 'react';

import './App.css';
import Choose from './components/Choose';
import Board from './components/Board';
import Team from './components/Team';
import Result from './components/Result';
import Footer from './components/Footer';

class App extends Component {
    state = {
      player: '',
      computer: '',
      board: Array(9).fill(null),
      chosenTeam: false,
    }

 chooseTeam = (e) => {
    this.setState({
      player: e.target.innerHTML,
      computer: (e.target.innerHTML === 'X' ? 'O' : 'X'),
      chosenTeam: true
    });
 }

 playerMove = (index) => {
   const newBoard = {...this.state.board};
   newBoard[index] = this.state.player;
   this.setState({ board: newBoard });
   setTimeout(this.computerMove, 500);
 }

 getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

computerMove = () => {
  const emptyCells = Object.entries(this.state.board)
  .filter(element => element[1] == null)
  .map(element => element[0]);
  const indices = emptyCells.map(element => parseInt(element));
  const computerChoice = emptyCells[this.getRandomInt(emptyCells.length)];
  const newerBoard = {...this.state.board}
  newerBoard[computerChoice] = this.state.computer;
  this.setState({ board: newerBoard });
}

 resetGame = () => {
  this.setState({
    player: '',
    computer: '',
    board: Array(9).fill(null),
    chosenTeam: false,
  });
 }

  render() {
    return (
      <div className="App">
        <h1 className='title'>Tic-Tac-Toe</h1>
        <Choose chooseTeam={this.chooseTeam} toggle={this.state.chosenTeam} />
        <Board board={this.state.board} playerMove={this.playerMove} />
        <Team toggle={this.state.chosenTeam}
        player={this.state.player}
        computer={this.state.computer} />
        <Result />
        <button className='reset' onClick={this.resetGame}>Reset</button>
        <Footer />
      </div>
    );
  }
}

export default App;
