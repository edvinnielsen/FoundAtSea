class Control {
  _image;
  _imageLocation = './assets/img/controlpanel.png';

  constructor() {
    console.log('control: constructor');
    this._loadImage();
  }

  _loadImage() {
    console.log('control: _loadImage');
    this._image = new Image();
    this._image.onload = () => {
      console.log('control: loaded');
      ctx.beginPath();
      ctx.drawImage(this._image, 0, 0);
    };
    this._image.src = this._imageLocation;
  }

}
