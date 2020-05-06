const mapSpeed = 3000;
const firstColumn = 10;
const lastColumn = 20;
const isMineProb = 0.06;

let timer;
let activeMine;

const book = new Book();
const light = new Light();
const counter = new Count();
const map = new Map();
const display = new Display();
const button = new Button();

// Intro Screen
const $startBtn = document.querySelector(".start-btn");
const $screenIntro = document.querySelector(".intro");

// Game
const $screenGame = document.querySelector(".game-area");
const buttonElement = document.querySelector("#button");
const $mapElement = document.querySelector("#map");

const backMusic = new Sound("./assets/audio/menu.mp3");
const selectSound = new Sound("./assets/audio/select.wav");
const turnSound = new Sound("./assets/audio/turnpage.mp3");
const clickSound = new Sound("./assets/audio/click.mp3");

// create mines
const mine = Create2DArray(100);
let i = 0;
for (let row = 59; row <= 61; row++) {
  for (let column = firstColumn; column <= lastColumn; column++) {
    const isMine = Math.random() < isMineProb;
    mine[row][column] = new Mine(row, column, isMine);
    if (isMine) {
      i++;
      console.log(row, column);
      display.mineAt(row, column, i);
    }
  }
}

// Start game button
function startGame(event) {
  toggleDisplay($screenIntro, $screenGame);

  clickSound.play();
  backMusic.play();
  backMusic.loop = true;
  map.start();
}

$startBtn.addEventListener("click", startGame);

//Map-click
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
            if (removeMine.state == "marked") {
              console.log(getIndexOfMine(mine, removeMine));
              removeMine.unmark();
              selectSound.play();
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
          selectSound.play();
          break loop1;
        }
      }
    }
  }
}
$mapElement.addEventListener("click", mapClick);

//Book-click
function bookClick(event) {
  const x = event.offsetX;

  if (x < 480) {
    book.switchPageDown();
  } else {
    book.switchPageUp();
  }

  book.tick();
}
const $booklet = document.querySelector("#booklet");
$booklet.addEventListener("click", bookClick);

//Button-click
function buttonDown(event) {
  if (activeMine === undefined) {
    return;
  }
  button.stateClick();
  if (counter.torpedos > 0) {
    counter.torpedos--;
    counter.tick();
    activeMine.shot();
    activeMine = undefined;
  }
}
buttonElement.addEventListener("mousedown", buttonDown());
buttonElement.addEventListener("mouseup", button.stateRest);
