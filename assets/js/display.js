class Display {
  canvas;
  ctx;

  constructor() {
    this.canvas = document.querySelector(".display");
    this.ctx = this.canvas.getContext("2d");
  }

  winner() {
    this.ctx.beginPath();
    this.ctx.font = "200px 'Glasstown NBP'";
    this.ctx.fillStyle = "#16730c";
    this.ctx.textAlign = "center";
    this.ctx.shadowColor = "#10350c";
    this.ctx.shadowOffsetX = 3;
    this.ctx.shadowOffsetY = 0;
    this.ctx.shadowBlur = 0;
    this.ctx.fillText(
      "Winner!",
      this.canvas.width / 2 + 10,
      this.canvas.height / 2 + 40
    );
  }
}
