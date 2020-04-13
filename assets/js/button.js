class Button {
  x = 660;
  y = 318;

  _press = 0;

  _image;
  _imageLocation = './assets/img/button.png';
  _spriteWidth = 192;
  _spriteHeight = 192;

  constructor() {
    console.log('button: constructor');

    this._loadImage();
  }

  _loadImage() {
    console.log('button: _loadImage');

    this._image = new Image();

    this._image.onload = () => {
      this._draw();
    };

    this._image.src = this._imageLocation;
  }
  _draw() {
    // console.log('book: _draw');

    const _sourceY = this._spriteHeight * this._press;

    ctx.beginPath();
    ctx.drawImage(
      this._image,
      0,
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


}
