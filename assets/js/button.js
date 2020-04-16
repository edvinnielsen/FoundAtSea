class Button {
  _press = 0;
  canvas;
  ctx;
  // x = 660;
  // y = 318;

  //  rest - 0
  // hover - 1
  // press - 2

  _image;
  _imageLocation = './assets/img/button.png';
  _spriteWidth = 192;
  _spriteHeight = 192;

  constructor() {
    this.canvas = document.querySelector('.button');
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
    const _sourceY = this._spriteHeight * this._press;

    this.ctx.beginPath();
    this.ctx.drawImage(
      this._image,
      0,
      _sourceY,
      this._spriteWidth,
      this._spriteHeight,
      -8,
      -10,
      this._spriteWidth,
      this._spriteHeight
    );
  }

  stateRest = () => {
    this._press = 0;
  };

  // stateHover = () => {
  //   console.log('state hover run');
  //   this._press = 1;
  // };

  stateClick = () => {
    this._press = 2;
  };

  tick() {
    this._draw();
  }
}
