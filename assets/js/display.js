class Display {
  canvas;
  ctx;

  constructor() {
    this.canvas = document.querySelector(".display");
    this.ctx = this.canvas.getContext("2d");
  }

  winner() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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

  mineAt(row, column, i) {
    this.ctx.beginPath();
    this.ctx.font = "30px 'Glasstown NBP'";
    this.ctx.fillStyle = "#16730c";
    this.ctx.textAlign = "center";
    this.ctx.shadowColor = "#10350c";
    this.ctx.shadowOffsetX = 3;
    this.ctx.shadowOffsetY = 0;
    this.ctx.shadowBlur = 0;
    this.ctx.fillText(`Row: ${row} Column:${column}`, 100, i * 40);
  }
}
