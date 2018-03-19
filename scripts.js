const squares = document.querySelectorAll('div');

let state = '';

function stateSwitcher() {
  return (state ? 'x' : 'o');
}

function handleClick(e) {
  e.target.innerHTML = 'x';
}

squares[1].addEventListener('click', handleClick);
squares[2].addEventListener('click', handleClick);
squares[3].addEventListener('click', handleClick);
squares[4].addEventListener('click', handleClick);
squares[5].addEventListener('click', handleClick);
squares[6].addEventListener('click', handleClick);
squares[7].addEventListener('click', handleClick);
squares[8].addEventListener('click', handleClick);
squares[9].addEventListener('click', handleClick);

/* To Do:

1) Hit a square, if empty then X, if X then do nothing.
2) Next square hit, has to be inverse of X or O. Stateswitcher should sort it.
3) Check if 3 add up then you win. Array of win results?
4) Check how other people coded theirs. 

*/
