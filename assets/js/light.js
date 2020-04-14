class Light {
  x = 444;
  y = 426;

  //off - 0
  // on - 1

  _state = 0;

  _image;
  _imageLocation = './assets/img/morse.png';
  _spriteWidth = 120;
  _spriteHeight = 120;

  constructor() {
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
    const _sourceY = this._spriteHeight * this._state;

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
    this._draw();
  }
}
