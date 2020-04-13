const canvas = document.querySelector('.game');
const ctx = canvas.getContext('2d');

const book1 = new Book();

const back = new Control();

const button = new Button();

function onClick(event) {
  console.log('click');
  book1.switchPageUp();
  book1.tick();
}

document.addEventListener('click', onClick);
