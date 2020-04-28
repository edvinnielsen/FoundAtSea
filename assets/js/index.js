let mapSpeed = 3000;

const book = new Book();

const button = new Button();
document.getElementById("button").addEventListener("mousedown", () => {
  button.stateClick();
  counter.oneDown();
});
document.getElementById("button").addEventListener("mouseup", button.stateRest);

const light = new Light();

const counter = new Count();

const map = new Map();

function Create2DArray(rows) {
  var arr = [];

  for (var i = 0; i < rows; i++) {
    arr[i] = [];
  }
  return arr;
}

function getIndexOfMine(arr, k) {
  for (var i = 0; i < arr.length; i++) {
    var index = arr[i].indexOf(k);
    if (index > -1) {
      return [i, index];
    }
  }
}

var mine = Create2DArray(100);

for (let i = 0; i <= 2; i++) {
  const row = 59 + i;

  for (let y = 1; y <= 50; y++) {
    const column = y;
    const isMine = Math.random() < 0.05;

    // console.log(row, column, isMine);

    mine[row][column] = new Mine(row, column, isMine);
  }
}

document.getElementById("map").addEventListener("click", mapClick);

function mapClick(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  // loop through all mines to see if the x,y is touching the mine's x,y
  for (let i = 0; i <= 2; i++) {
    const row = 59 + i;
    for (let g = 1; g <= 50; g++) {
      const column = g;
      const checkMine = mine[row][column];
      rowCord = 10 + 90 + 60 * (-1 * (-61 + row));
      colCord = 10 - 10 + 70 * column;

      if (
        rowCord - 20 < y &&
        y < rowCord + 20 &&
        colCord - 20 < x &&
        x < colCord + 20
      ) {
        let remove;
        for (let i = 0; i <= 2; i++) {
          const row = 59 + i;
          for (let g = 1; g <= 50; g++) {
            const column = g;
            remove = mine[row][column];
            if (remove.state == "marked") {
              console.log(getIndexOfMine(mine, remove));
              remove.unmark();
              break;
            }
          }
        }
        if (remove != checkMine) {
          console.log(getIndexOfMine(mine, checkMine));
          checkMine.mark();
          break;
        }
      }
    }
  }
}

//press fire-button
// mine601.shot();

//win-condition?
// if (mine1.isMine && mine1.x < 200) {
//   console.log("You lost!");
// }

document.getElementById("booklet").addEventListener("click", bookClick);

function bookClick(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  if (x < 480) {
    book.switchPageDown();
  } else {
    book.switchPageUp();
  }

  book.tick();
}
