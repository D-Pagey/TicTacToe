const squares = document.querySelectorAll('.square');

let state = 'x';

function switchState(state) {
  return (state === 'x' ? 'o' : 'x');
}

function handleClick(e) {
  e.target.innerHTML = state;
  state = switchState(state);
  e.target.removeEventListener('click', handleClick);
  console.log(e.target.className);
}

function enable() {
  squares.forEach((element) => {
    element.addEventListener('click', handleClick);
  })  
}

enable();

document.querySelector('.reset').addEventListener('click', function(e) {
  squares.forEach((element) => {
    element.innerHTML = '';
    enable();
  })
})

const winningCombos = [];