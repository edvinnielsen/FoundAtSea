let mapSpeed = 3000;
const firstColumn = 10;
const lastColumn = 20;

let timer;

const book = new Book();

const light = new Light();

const counter = new Count();

const map = new Map();

const display = new Display();

const buttonElement = document.querySelector('#button');
const mapElement = document.querySelector('#map');

//sound
function sound(src) {
  this.sound = document.createElement('audio');
  this.sound.src = src;
  this.sound.setAttribute('preload', 'auto');
  this.sound.setAttribute('controls', 'none');
  this.sound.style.display = 'none';
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}

let backMusic;
backMusic = new sound('./assets/audio/menu.mp3');
backMusic.play();
backMusic.loop = true;

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
    for (let column = firstColumn; column <= lastColumn; column++) {
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
          for (let column = firstColumn; column <= lastColumn; column++) {
            removeMine = mine[row][column];
            if (removeMine.state == 'marked') {
              console.log(getIndexOfMine(mine, removeMine));
              removeMine.unmark();
              if (activeMine == removeMine) {
                break if1;
              }
            }
            // if (removeMine.state == "exploded") {
            //   console.log("already shot");
            //   break if1;
            // }
          }
        }
        console.log(getIndexOfMine(mine, activeMine));
        if (activeMine != undefined) {
          activeMine.mark();
          break loop1;
        }
      }
    }
  }
}

//win-condition?
// if (mine1.isMine && mine1.x < 200) {
//   console.log("You lost!");
// }

document.getElementById('booklet').addEventListener('click', bookClick);

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
    for (let column = firstColumn; column <= lastColumn; column++) {
      const isMine = Math.random() < 0.08;

      mine[row][column] = new Mine(row, column, isMine);

      if (isMine) {
        console.log(row, column);
      }
    }
  }

  mapElement.addEventListener('click', mapClick);

  buttonElement.addEventListener('mousedown', (event) => {
    if (activeMine === undefined) {
      return;
    }

    button.stateClick();
    if (counter.torpedos > 0) {
      counter.torpedos--;
      counter.tick();
      activeMine.shot();

      // Unset activeMine
      activeMine = undefined;
    }
  });

  buttonElement.addEventListener('mouseup', button.stateRest);
}

// console.warn(`Loading Font`);

document.fonts.load("10pt 'Glasstown NBP'").then(init);
