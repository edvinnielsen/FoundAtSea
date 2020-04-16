class Map {
  canvas;
  ctx;

  constructor() {
    this.canvas = document.querySelector('.map');
    this.ctx = this.canvas.getContext('2d');
    this._draw();
  }

  _draw() {
    this.ctx.beginPath();

    for (let y = 0; y < this.canvas.width; y += 80) {
      this.ctx.moveTo(y, 0);
      this.ctx.lineTo(y, 310);
      // y to text
      // this.ctx.font = '220px Glasstown NBP';
      // this.ctx.fillText(
      //   this.y,
      //   (this.canvas.width + 10) / 2,
      //   (this.canvas.height + 110) / 2
      // );
    }

    this.ctx.lineWidth = 6;
    this.ctx.strokeStyle = '#10350C';
    this.ctx.stroke();
  }

  tick() {
    console.log('map: ticked');
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(-10, 0);
    this._draw();
  }
}
