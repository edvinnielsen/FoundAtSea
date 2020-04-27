let mapSpeed = 3000;

const book = new Book();
const button = new Button();
document
  .getElementById("button")
  .addEventListener("mousedown", button.stateClick);
document.getElementById("button").addEventListener("mouseup", button.stateRest);

const light = new Light();
const counter = new Count();
const map = new Map();

const mines = [];

const mine1 = new Mine(6, 61, true);

//press coord on map
mine1.mark();

//press fire-button
mine1.shot();

//win-condition?
if (mine1.isMine && mine1.x < 200) {
  console.log("You lost!");
}

const mine2 = new Mine(8, 60, false);
console.log(mine2.state);
mine2.mark();
console.log(mine2.state);
mine2.shot();

const mine3 = new Mine(13, 59, false);

mines.push(mine1, mine2, mine3);

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

  //   mine.isTouching(x, y, )
}

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
