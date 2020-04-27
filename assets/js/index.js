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

var mine = Create2DArray(100);

for (let i = 0; i <= 2; i++) {
  const row = 59 + i;

  for (let y = 1; y <= 50; y++) {
    const column = y;
    const isMine = Math.random() < 0.05;

    console.log(row, column, isMine);

    mine[row][column] = new Mine(row, column, isMine);
  }
}

console.log(mine[59][12].state);

//press coord on map
mine[59][12].mark();

document.getElementById("map").addEventListener("click", mapClick);

function mapClick(event) {
  console.log(event.offsetX, event.offsetY);

  //switch to
  // const x = event.offsetX;
  // const y = event.offsetY;
  const x = event.x;
  const y = event.y;

  // loop through all mines to see if the x,y is touching the mine's x,y
  // for (let i = 0; i < mines.length; i++) {
  //   const mine = mines[i];
  //   if (mine.)

  //   mine.isTouching(x, y, )
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
    book.tick();
  } else {
    book.switchPageUp();
    book.tick();
  }
}
