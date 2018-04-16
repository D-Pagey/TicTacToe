const squares = document.querySelectorAll('.square');

let state = 'x';

function stateSwitcher(state) {
  if (state === 'x') {
    state = 'o';
  } else {
    state = 'x';
  }
}

stateSwitcher(state);
console.log(state);

function handleClick(e) {
  e.target.innerHTML = state;
}

squares.forEach((element) => {
  element.addEventListener('click', handleClick);
})

/* To Do:

1) Hit a square, if empty then X, if X then do nothing.
2) Next square hit, has to be inverse of X or O. Stateswitcher should sort it.
3) Check if 3 add up then you win. Array of win results?
4) Check how other people coded theirs. 

*/
