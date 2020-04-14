class Control {
  _image;
  _imageLocation = './assets/img/controlpanel.png';

  constructor() {
    this._loadImage();
  }

  _loadImage() {
    this._image = new Image();
    this._image.onload = () => {
      ctx.beginPath();
      ctx.drawImage(this._image, 0, 0);
    };
    this._image.src = this._imageLocation;
  }
}
