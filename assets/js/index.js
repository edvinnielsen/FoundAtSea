let mapSpeed = 3000;

const book = new Book();

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

let activeMine;

function mapClick(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  // loop through all mines to see if the x,y is touching the mine's x,y
  loop1: for (let row = 59; row <= 61; row++) {
    for (let column = 1; column <= 50; column++) {
      activeMine = mine[row][column];
      rowCord = 10 + 90 + 60 * (-1 * (-61 + row));
      colCord = 10 - 10 + 70 * column;

      if1: if (
        rowCord - 20 < y &&
        y < rowCord + 20 &&
        colCord - 20 < x &&
        x < colCord + 20
      ) {
        let removeMine;
        for (let row = 59; row <= 61; row++) {
          for (let column = 1; column <= 50; column++) {
            removeMine = mine[row][column];
            if (removeMine.state == "marked") {
              console.log(getIndexOfMine(mine, removeMine));
              removeMine.unmark();
              if (activeMine == removeMine) {
                break if1;
              }
            }
          }
        }
        console.log(getIndexOfMine(mine, activeMine));
        activeMine.mark();
        break loop1;
      }
    }
  }
}

// console.log(activeMine.isMine);

//win-condition?
// if (mine1.isMine && mine1.x < 200) {
//   console.log("You lost!");
// }

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

const button = new Button();

function init() {
  console.warn(`Font Loaded`);
  for (let row = 59; row <= 61; row++) {
    for (let column = 1; column <= 50; column++) {
      const isMine = Math.random() < 0.5;
      // const isMine = false;
      console.log(row, column, isMine);

      mine[row][column] = new Mine(row, column, isMine);
    }
  }

  document.getElementById("map").addEventListener("click", mapClick);

  document.getElementById("button").addEventListener("mousedown", () => {
    button.stateClick();
    if (counter.torpedos > 0) {
      counter.torpedos--;
      counter.tick();
      console.log(activeMine);
      activeMine.onShot();
    }
  });

  document
    .getElementById("button")
    .addEventListener("mouseup", button.stateRest);
}

console.warn(`Loading Font`);

document.fonts.load("10pt 'Glasstown NBP'").then(init);
