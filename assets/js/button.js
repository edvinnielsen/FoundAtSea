class Button {
  canvas;
  ctx;

  //  rest - 0
  // press - 2

  _press = 0;

  _image;
  _imageLocation = "./assets/img/button.png";
  _spriteWidth = 192;
  _spriteHeight = 192;

  constructor() {
    this.canvas = document.querySelector(".button");
    this.ctx = this.canvas.getContext("2d");
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
    this.tick();
  };

  stateClick = () => {
    this._press = 2;
    this.tick();
    let clickSound;
    clickSound = new sound("./assets/audio/click.mp3");
    clickSound.play();
  };

  tick() {
    this._draw();
  }
}
