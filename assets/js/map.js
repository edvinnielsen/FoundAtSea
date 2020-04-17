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

    for (let y = 0; y < this.canvas.width*2; y += 80) {
      this.ctx.moveTo(y, 0);
      this.ctx.lineTo(y, 310);

      // y to text
      this.ctx.font = '50px Glasstown NBP';
      this.ctx.fillStyle = '#c40000';
      this.ctx.textAlign = 'center';
      this.ctx.fillText(y / 80, y, 360);
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
