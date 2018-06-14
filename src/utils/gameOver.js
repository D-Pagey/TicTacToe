export default function isGameOver(board, team) {
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
        alert('chicken');
      } else {
        console.log('no chicken');
        return false;
      }



}


//   let empty = board.filter(element => typeof element === 'number');
//   if (
//     // Horizontal
//     (board[0] === team && board[1] === team && board[2] === team) ||
//     (board[3] === team && board[4] === team && board[5] === team) ||
//     (board[6] === team && board[7] === team && board[8] === team) ||
//     // Vertical
//     (board[0] === team && board[3] === team && board[6] === team) ||
//     (board[1] === team && board[4] === team && board[7] === team) ||
//     (board[2] === team && board[5] === team && board[8] === team) ||
//     // Diagonal
//     (board[0] === team && board[4] === team && board[8] === team) ||
//     (board[2] === team && board[4] === team && board[6] === team)
//   ) {
//     if (team === player) {
//       gameOver('Congratulations, you beat the computer!');
//       return true;
//     } else {
//       gameOver('Wow...you lost to a randomised computer!');
//       return true;
//     }
//   } else if (empty.length == 0) {
//     gameOver('Shockingly, it is a Draw!');
//     return true;
//   } else {
//     return false;
//   }