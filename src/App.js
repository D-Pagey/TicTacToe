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
    gameOver: false,
    gameOverMsg: null,
  }

  chooseTeam = (e) => {
    this.setState({
    player: e.target.innerHTML,
    computer: (e.target.innerHTML === 'X' ? 'O' : 'X'),
    chosenTeam: true
    });
  } 
  
  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  playerMove = (index) => {
    const newBoard = {...this.state.board};
    newBoard[index] = this.state.player;
    this.setState({ board: newBoard }, () => {
      this.isGameOver(this.state.board, this.state.player);
    });
  }

  computerMove = () => {
    const emptyCells = Object.entries(this.state.board)
      .filter(element => element[1] == null)
      .map(element => element[0]);
    const computerChoice = emptyCells[this.getRandomInt(emptyCells.length)];
    const newerBoard = {...this.state.board}
    newerBoard[computerChoice] = this.state.computer;
    setTimeout(() => {
      this.setState({ board: newerBoard })
    }, 500);
  } 

  isGameOver = (board, team) => {
    if (
        // Horizontal
        (board[0] === team && board[1] === team && board[2] === team) ||
        (board[3] === team && board[4] === team && board[5] === team) ||
        (board[6] === team && board[7] === team && board[8] === team) ||
        // Vertical
        (board[0] === team && board[3] === team && board[6] === team) ||
        (board[1] === team && board[4] === team && board[7] === team) ||
        (board[2] === team && board[5] === team && board[8] === team) ||
        // Diagonal
        (board[0] === team && board[4] === team && board[8] === team) ||
        (board[2] === team && board[4] === team && board[6] === team)
      ) {
        this.setState({ gameOver: true });
        console.log('chicken');
      } else {
        console.log('no chicken');
        this.computerMove();
      }
  }

  resetGame = () => {
    this.setState({
      computer: '',
      board: Array(9).fill(null),
      chosenTeam: false,
      player: '',
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
