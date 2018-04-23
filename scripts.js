/**
 * Selectors
 */
const modal = document.querySelector('.modal-btn');
const modalExit = document.querySelector('.modal-cancel');
const teamBtns = document.querySelectorAll('.choose-btn');
const squares = document.querySelectorAll('.square');
const elements = document.querySelectorAll('.element');
const resetBtn = document.querySelector('.reset');
const result = document.querySelector('.result');
const resultMsg = document.querySelector('.result-message');

/**
 * Global Variables
 */
let player;
let computer;
let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

/**
 * Methods
 */
function chooseTeam(e) {
  player = e.target.innerHTML;
  computer = (player === 'X' ? 'O' : 'X');
  document.querySelector('#choose-area').className = 'hidden';
  document.querySelector('#team-area').className = 'team-area';
  document.getElementById('player').innerHTML = player;
  document.getElementById('player').className = player;
  document.getElementById('computer').innerHTML = computer;
  document.getElementById('computer').className = computer;
  addClickEvent();
}

function playerMove(e) {
  e.target.childNodes[1].innerHTML = player;
  board[e.target.dataset.value] = player;
  isGameOver(player);
  e.target.removeEventListener('click', playerMove);
  if (isGameOver(player) === false) {
    setTimeout(computerMove, 250);
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function computerMove() {
  let empty = board.filter(element => typeof element === 'number');
  let index = getRandomInt(empty.length);
  let computerChoice = empty[index];
  squares[computerChoice].childNodes[1].innerHTML = computer;
  board[computerChoice] = computer;
  isGameOver(computer);
  squares[computerChoice].removeEventListener('click', playerMove);
}

function isGameOver(team) {
  let empty = board.filter(element => typeof element === 'number');

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
    if (team === player) {
      gameOver('Congratulations, you beat the computer!');
      return true;
    } else {
      gameOver('Wow...you lost to a randomised computer!');
      return true;
    }
  } else if (empty.length == 0) {
    gameOver('Shockingly, it is a Draw!');
    return true;
  } else {
    return false;
  }
}

function gameOver(status) {
  resultMsg.innerHTML = status;
  result.showModal();
  resetBtn.removeEventListener('click', resetGame);
  setTimeout(function() {
    result.close()
  }, 2250);
  removeClickEvent();
  setTimeout(resetGame, 3750);
}

function resetGame() {
  board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  removeClickEvent();
  elements.forEach((element) => {
    element.innerHTML = '';
  });
  document.querySelector('#choose-area').className = 'choose-area';
  document.querySelector('#team-area').className = 'team-area hidden';
}
  
/**
  * Event Listeners
 */
teamBtns.forEach((element) => {
  element.addEventListener('click', chooseTeam);
})

resetBtn.addEventListener('click', resetGame);

modal.addEventListener('click', function() {
  document.querySelector('.modal-about').showModal();
})

modalExit.addEventListener('click', function() {
  document.querySelector('.modal-about').close();
})

 function addClickEvent() {
  squares.forEach((element) => {
    element.addEventListener('click', playerMove);
  })  
}

function removeClickEvent() {
  squares.forEach((element) => {
    element.removeEventListener('click', playerMove);
  })  
}


