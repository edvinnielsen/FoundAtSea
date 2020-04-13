class Book {
  x = 1920 - 160*6 - 50;
  y = 0;

  _currentPage = 0;
  _pageCount = 3;

  _image;
  _imageLocation = './assets/img/book.png';
  _spriteWidth = 160 * 6;
  _spriteHeight = 87 * 6;
  _sourceX = 0;

  constructor() {
    // console.log('book: constructor');

    this._loadImage();
  }

  _loadImage() {
    // console.log('book: _loadImage');

    this._image = new Image();

    this._image.onload = () => {
      this._draw();
    };

    this._image.src = this._imageLocation;
  }
  _draw() {
    // console.log('book: _draw');

    const _sourceY = this._spriteHeight * this._currentPage;

    ctx.beginPath();
    ctx.drawImage(
      this._image,
      this._sourceX,
      _sourceY,
      this._spriteWidth,
      this._spriteHeight,
      this.x,
      this.y,
      this._spriteWidth,
      this._spriteHeight
    );
  }

  tick() {
    // console.log("book: tick")
    this._draw();
  }

  switchPageUp() {
    // console.log('switch');
    this._currentPage++;
    if (this._currentPage % this._pageCount == 0) {
      this._currentPage = 0;
    }
    // console.log(this._currentPage)
  }
}
