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

/**
 * Global Variables
 */
let team;
let board = [0, 1, 2, 3, 4, 5, 6, 7, 8];

/**
 * Methods
 */
function chooseTeam(e) {
  team = e.target.innerHTML;
  document.querySelector('#choose-area').className = 'hidden';
  document.querySelector('#team-area').className = 'team-area';
  document.getElementById('player').innerHTML = team;
  document.getElementById('player').className = team;
  document.getElementById('computer').innerHTML = (team === 'X' ? 'O' : 'X');
  document.getElementById('computer').className = (team === 'X' ? 'O' : 'X');
  addClickEvent();
}

function switchTeam(team) {
  return (team === 'X' ? 'O' : 'X');
}

function playerMove(e) {
  e.target.childNodes[1].innerHTML = team;
  board[e.target.dataset.value] = team;
  isGameOver(board, team);
  team = switchTeam(team);
  e.target.removeEventListener('click', playerMove);
  computerMove();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function computerMove() {
  let empty = board.filter(element => typeof element === 'number');
  let index = getRandomInt(empty.length);
  let computerChoice = empty[index];
  squares[computerChoice].childNodes[1].innerHTML = team;
  board[computerChoice] = team;
  isGameOver(board, team);
  team = switchTeam(team);
  squares[computerChoice].removeEventListener('click', playerMove);
}

function isGameOver(board, team) {
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
    result.showModal();
    setTimeout(function() {
      result.close()
    }, 2250);
    removeClickEvent();
    setTimeout(resetGame, 3750);
  } 
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


