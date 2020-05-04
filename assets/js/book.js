class Book {
  canvas;
  ctx;

  _currentPage = 0;
  _pageCount = 2;

  _image;
  _imageLocation = './assets/img/book.png';
  _spriteWidth = 160 * 6;
  _spriteHeight = 87 * 6;
  _sourceX = 0;

  constructor() {
    this.canvas = document.querySelector('.booklet');
    this.ctx = this.canvas.getContext('2d');

    this._loadImage();
  }

  _loadImage() {
    this._image = new Image();

    this._image.onload = () => {
      this._draw();
    };

    this._image.src = this._imageLocation;
  }
  _draw() {
    const _sourceY = this._spriteHeight * this._currentPage;

    this.ctx.beginPath();
    this.ctx.drawImage(
      this._image,
      this._sourceX,
      _sourceY,
      this._spriteWidth,
      this._spriteHeight,
      0,
      0,
      this._spriteWidth,
      this._spriteHeight
    );
  }

  tick() {
    this._draw();
  }

  switchPageUp() {
    if (this._currentPage + 1 <= this._pageCount) {
      this._currentPage++;
      let turnSound;
      turnSound = new sound('./assets/audio/turnpage.mp3');
      turnSound.play();
    }
  }

  switchPageDown() {
    if (this._currentPage - 1 >= 0) {
      this._currentPage--;
      let turnSound;
      turnSound = new sound('./assets/audio/turnpage.mp3');
      turnSound.play();
    }
  }
}
