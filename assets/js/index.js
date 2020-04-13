const canvas = document.querySelector('.game');
const ctx = canvas.getContext('2d');

const book1 = new Book();

book1.tick();

function onClick(event) {
    console.log("click");

    // if (area) ?

    book1.switchPageUp();
    book1.tick();
}

document.addEventListener('click', onClick);
