class Map {
  canvas;
  ctx;
  left = 0;
  y;

  constructor() {
    this.canvas = document.querySelector(".map");
    this.ctx = this.canvas.getContext("2d");
    this._draw();
    this.tick();
  }

  _draw() {
    this.ctx.beginPath();
    for (let y = 0; y < this.canvas.width; y += 70) {
      this.ctx.moveTo(y, 0);
      this.ctx.lineTo(y, 310);
      this.ctx.font = "50px 'Glasstown NBP'";
      this.ctx.fillStyle = "#c40000";
      this.ctx.textAlign = "center";
      let i = y / 70;
      if (i <= 60) {
        this.ctx.fillText(i, y, 360);
      } else {
        i = i - 60;
        this.ctx.fillText(i, y, 360);
      }
    }

    this.ctx.lineWidth = 6;
    this.ctx.strokeStyle = "#10350C";
    this.ctx.stroke();
  }

  tick() {
    this.left -= 10;
    this.canvas.style.marginLeft = `${this.left}px`;
    setTimeout(() => {
      this.tick();
    }, mapSpeed);
  }
}
