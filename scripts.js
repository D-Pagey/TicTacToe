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

/**
 * Methods
 */
addClickEvent();

function switchPlayer(player) {
  return (player === 'X' ? 'O' : 'X');
}

function playerMove(e) {
  e.target.childNodes[1].innerHTML = player;
  player = switchPlayer(player);
  e.target.removeEventListener('click', playerMove);
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
  })
})


