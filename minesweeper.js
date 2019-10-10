document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells:[{row: 1,
      col: 1,
      isMine: true,
      hidden: true,
      isMarked: false,
      surroundingMines: 0
      }, {row: 2,
      col: 1,
      isMine: true,
      hidden: true,
      isMarked: false,
      surroundingMines: 0
      }, {row: 3,
      col: 1,
      isMine: false,
      hidden: true,
      isMarked: false,
      surroundingMines: 0
      }, {row: 1,
      col: 2,
      isMine: false,
      hidden: true,
      isMarked: false,
      surroundingMines: 0
      }, {row: 2,
      col: 2,
      isMine: false,
      hidden: true,
      isMarked: false,
      surroundingMines: 0
      }, {row: 3,
      col: 2,
      isMine: false,
      hidden: true,
      isMarked: false,
      surroundingMines: 0
      }, {row: 1,
      col: 3,
      isMine: false,
      hidden: true,
      isMarked: false,
      surroundingMines: 0
      }, {row: 2,
      col: 3,
      isMine: false,
      hidden: true,
      isMarked: false,
      surroundingMines: 0
      }, {row: 3,
      col: 3,
      isMine: false,
      hidden: true,
      isMarked: false,
      surroundingMines: 0
      } 
  ]
}


  


function startGame () {
  // Don't remove this function call: it makes the game work!
  // populateCells(10, 10); // an as yet uwritten function which automatically fills out the cells array with a grid of cells when given the number of rows and columns in the grid of cells. 
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);// something about this seems temperamental. I've seen people with identical code (to me and to others) who do or don't have their eventListeners actually trigger, even though both their implementation of addEventListener and their checkForWin code seemed completely the same. 

 /* for (i=0; i<board.cells.length; i++) {
    board.cells[i].isMine = randomBoolean();
  } */

  for (i=0; i<board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() { 
  for (i=0; i<board.cells.length; i++) {
    if (!board.cells[i].isMarked && board.cells[i].isMine) {
      return;
    } else if (board.cells[i].hidden && !board.cells[i].isMine) {
      return;
    }
  }
  
    lib.displayMessage('You win!')

}



// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//

//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  var surroundingMines = 0;
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  for (j=0; j<surroundingCells.length; j++) {
    if (surroundingCells[j].isMine == true) {
      surroundingMines++;
    }
  }
  return surroundingMines;
}

function randomBoolean() {
  var randomBool = Math.random() >= 0.75;
  return randomBool;
} 

 /* it was a nice idea, but it made the whole page load so slowly it may have frozen. its certianly not practical, and seemed like a very difficult problem to try to fix on my own. 
function populateCells(x,y) {
  for (j=0; j<(y); j++) {
    for (i=0; i<(x); i++) {
      var isMineBoolean = randomBoolean();
      board.cells.push({row: j,
      col: i,
      isMine: isMineBoolean,
      hidden: true,
      isMarked: false,
      surroundingMines: 0
      });
    }
  }
} */