class Mine {
  canvas;
  ctx;
  left = 0;

  //59, 60 or 61
  row;

  //1 to 60
  column;

  //true or false
  isMine;

  constructor(row, column, isMine) {
    this.canvas = document.querySelector(".map");
    this.ctx = this.canvas.getContext("2d");

    //translate coord
    row = -10 + 70*row;
    column = 90 + 60 * (-1*(-61 + column));

    this.ctx.beginPath();
    this.ctx.rect(row, column, 20, 20);
    this.ctx.stroke();

    if (isMine) {
      this.armMine();
    }

  }

  armMine() {
    console.log("mine is armed");
  }

  tick() {
    this.left -= 10;
    this.canvas.style.marginLeft = `${this.left}px`;
    setTimeout(() => {this.tick();}, mapSpeed);
  }

}
