class Count {
  torpedos = 0;
  canvas;
  ctx;

  constructor() {
    this.canvas = document.querySelector(".count");
    this.ctx = this.canvas.getContext("2d");
    this.torpedos = 11;
    this._draw();
  }

  oneDown() {
    if (this.torpedos > 0) {
      this.torpedos--;
      this.tick();
    }
  }

  _draw() {
    this.ctx.beginPath();
    this.ctx.font = "220px 'Glasstown NBP'";

    this.ctx.fillStyle = "#c40000";
    this.ctx.textAlign = "center";
    this.ctx.shadowColor = "#7c0000";
    this.ctx.shadowOffsetX = 3;
    this.ctx.shadowOffsetY = 0;
    this.ctx.shadowBlur = 0;
    this.ctx.fillText(
      this.torpedos,
      (this.canvas.width + 10) / 2,
      (this.canvas.height + 110) / 2
    );
  }

  tick() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this._draw();
  }
}
