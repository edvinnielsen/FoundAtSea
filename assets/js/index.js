

let mapSpeed = 5000;

const book = new Book();
const button = new Button();
const light = new Light();
const counter = new Count();
const map = new Map();


const mine1 = new Mine(6, 61, true);

console.log(mine1.state);

const mine2 = new Mine(8, 60, false);
const mine3 = new Mine(13, 59, false);


document.addEventListener('mousedown', mouseDown);

function mouseDown(event) {
  console.log(event);

  const x = event.x;
  const y = event.y;

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
