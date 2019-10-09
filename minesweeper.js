document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells:[{row: 0,
      col: 0,
      isMine: false,
      hidden: true,
      surroundingMines: 0
      }, {row: 1,
      col: 0,
      isMine: false,
      hidden: true,
      surroundingMines: 0
      }, {row: 0,
      col: 1,
      isMine: false,
      hidden: true,
      surroundingMines: 0
      }, {row: 1,
      col: 1,
      isMine: true,
      hidden: true,
      surroundingMines: 0
      }
  ]
}



function startGame () {
  // Don't remove this function call: it makes the game work!
  populateCells(10, 10); //an as yet uwritten function which automatically fills out the cells array with a grid of cells when given the number of rows and columns in the grid of cells. 
  
  for (i=0; i<board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
//function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')

//}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//

//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  var surroundingMines = 0;
  // var gridPosition = [board.cells.row, board.cells.col]
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  for (i=0; i<surroundingCells.length; i++) {
    if ((cell.row, cell.col).isMine == true) {
      surroundingMines += 1;
    }
  }
}

function populateCells(x,y) {
  for (j=0; j<(y); j++) {
    for (i=0; i<(x); i++) {
      board.cells.push({row: j,
      col: i,
      isMine: randomBoolean(),
      hidden: true,
      surroundingMines: 0
      });
    }
  }
   
}

function randomBoolean() {
  var randomBool = Math.random() >= 0.7;
  return randomBool;
} 