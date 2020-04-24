let mapSpeed = 3000;

const book = new Book();
const button = new Button();
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
  console.log('You lost!');
}

const mine2 = new Mine(8, 60, false);
console.log(mine2.state);
mine2.mark();
console.log(mine2.state);
mine2.shot();

const mine3 = new Mine(13, 59, false);

mines.push(mine1, mine2, mine3);

document.addEventListener('click', mouseDown);

function mouseDown(event) {
  console.log(event);

  //switch to
  // const x = event.offsetX;
  // const y = event.offsetY;
  const x = event.x;
  const y = event.y;

  // loop through all mines to see if the x,y is touching the mine's x,y
  // for (let i = 0; i < mines.length; i++) {
  //   const mine = mines[i];

  //   mine.isTouching(x, y, )

  // }

  //Click on left page of book
  if (x > 925 && x < 1400 && y > 128 && y < 490) {
    book.switchPageDown();
    book.tick();
  }

  //Click on right page of book
  if (x > 1400 && x < 1875 && y > 128 && y < 490) {
    book.switchPageUp();
    book.tick();
  }

  //Click on button
  if (y > 375 && y < 470 && x > 700 && x < 835) {
    button.stateClick();
    button.tick();
    if (counter.torpedos > 0) {
      counter.torpedos--;
      counter.tick();
    }
  }
}

document.addEventListener('mouseup', mouseUp);

function mouseUp(event) {
  button.stateRest();
  button.tick();
}

// document.addEventListener('mousemove', mouseMove);
// function mouseMove(event) {
//   console.log(event.x, event.y);

//   const x = event.x;
//   const y = event.y;

//   //Hover on button
//   if (y > 375 && y < 470 && x > 700 && x < 835) {
//     button.stateHover();
//     button.tick();
//   // } else {
//   //   button.stateRest();
//   //   button.tick();
// }
// }

// document.addEventListener('mousemove', (event) =>
//   console.log(event.x, event.y)
// );
