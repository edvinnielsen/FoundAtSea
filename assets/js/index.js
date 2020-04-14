const canvas = document.querySelector('.game');
const ctx = canvas.getContext('2d');

const book1 = new Book();
const back = new Control();
const button = new Button();
const light = new Light();


document.addEventListener('mousedown', mouseDown);

function mouseDown(event) {
  console.log('click');
  console.log(event);

  const x = event.x;
  const y = event.y;

  //Click on left page of book
  if (x > 925 && x < 1400 && y > 128 && y < 490) {
    book1.switchPageDown();
    book1.tick();
  }

  //Click on right page of book
  if (x > 1400 && x < 1875 && y > 128 && y < 490) {
    book1.switchPageUp();
    book1.tick();
  }

  //Click on button
  if (y > 375 && y < 470 && x > 700 && x < 835) {
    button.stateClick();
    button.tick();
  }
}

document.addEventListener('mouseup', mouseUp);

function mouseUp(event) {
  button.stateRest();
  button.tick();
}

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

// document.addEventListener('mousemove', mouseMove);


// document.addEventListener('mousemove', (event) =>
//   console.log(event.x, event.y)
// );
