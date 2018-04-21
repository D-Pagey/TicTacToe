/**
 * Selectors
 */
const squares = document.querySelectorAll('.square');
const elements = document.querySelectorAll('.element');
const resetBtn = document.querySelector('.reset');

/**
 * Global Variables
 */
let player = 'X';
let board = ['E', 'E','E','E','E','E','E','E','E'];

/**
 * Methods
 */
addClickEvent();

function switchPlayer(player) {
  return (player === 'X' ? 'O' : 'X');
}

function playerMove(e) {
  e.target.childNodes[1].innerHTML = player;
  board[e.target.dataset.value] = player;
  isGameOver(board, player);
  player = switchPlayer(player);
  e.target.removeEventListener('click', playerMove);
}

function isGameOver(board, player) {
  if (
    // Horizontal
    (board[0] === player && board[1] === player && board[2] === player) ||
    (board[3] === player && board[4] === player && board[5] === player) ||
    (board[6] === player && board[7] === player && board[8] === player) ||
    // Vertical
    (board[0] === player && board[3] === player && board[6] === player) ||
    (board[1] === player && board[4] === player && board[7] === player) ||
    (board[2] === player && board[5] === player && board[8] === player) ||
    // Diagonal
    (board[0] === player && board[4] === player && board[8] === player) ||
    (board[2] === player && board[4] === player && board[6] === player)
  ) {
    console.log('game over');
  } else {
    console.log('keep going');
  }
  }

/**
  * Event Listeners
 */
function addClickEvent() {
  squares.forEach((element) => {
    element.addEventListener('click', playerMove);
  })  
}

resetBtn.addEventListener('click', function() {
  elements.forEach((element) => {
    element.innerHTML = '';
    addClickEvent();
  });
  board = ['E', 'E','E','E','E','E','E','E','E'];
})


