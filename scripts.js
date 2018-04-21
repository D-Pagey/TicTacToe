/**
 * Selectors
 */
const squares = document.querySelectorAll('.square');
const elements = document.querySelectorAll('.element');
const resetBtn = document.querySelector('.reset');
const teamBtns = document.querySelectorAll('.choose-btn');
const modal = document.querySelector('.modal');

/**
 * Global Variables
 */
let team = 'X';
let board = ['E', 'E','E','E','E','E','E','E','E'];

/**
 * Methods
 */
function chooseTeam(e) {
  team = e.target.innerHTML;
  document.querySelector('.choose-area').className = 'hidden';
  document.querySelector('.team-area').className = 'team-area';
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
    modal.showModal();
    setTimeout(function() {
      modal.close()
    }, 2250);
  } 
}
  

/**
  * Event Listeners
 */
teamBtns.forEach((element) => {
  element.addEventListener('click', chooseTeam);
})

 function addClickEvent() {
  squares.forEach((element) => {
    element.addEventListener('click', playerMove);
  })  
}

// resetBtn.addEventListener('click', function() {
//   elements.forEach((element) => {
//     element.innerHTML = '';
//     addClickEvent();
//   });
//   board = ['E', 'E','E','E','E','E','E','E','E'];
// })


