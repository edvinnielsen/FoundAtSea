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
    column = -10 + 70 * column;
    row = 90 + 60 * (-1 * (-61 + row));

    this.ctx.beginPath();
    this.ctx.rect(column, row, 20, 20);
    this.ctx.strokeStyle = "red";
    this.ctx.stroke();

    if (isMine) {
      StateMachine.apply(this, {
        init: "hidden",
        transitions: [
          { name: "mark", from: "hidden", to: "marked" },
          { name: "unmark", from: "marked", to: "hidden" },
          { name: "shot", from: "marked", to: "exploded" },
        ],
        methods: {
          onMark: function () {
            console.log("I am marked");
          },
          onUnmark: function () {
            console.log("I am unmarked");
          },
          onShot: function () {
            console.log("I am hit");
          },
        },
      });
    } else {
      StateMachine.apply(this, {
        init: "hidden",
        transitions: [
          { name: "mark", from: "hidden", to: "marked" },
          { name: "unmark", from: "marked", to: "hidden" },
          { name: "shot", from: "marked", to: "missed" },
        ],
        methods: {
          onMark: function () {
            console.log("I am marked");
          },
          onUnmark: function () {
            console.log("I am unmarked");
          },
          onShot: function () {
            console.log("I am missed");
          },
        },
      });
    }
  }

  // tick() {
  //   this.left -= 10;
  //   this.canvas.style.marginLeft = `${this.left}px`;
  //   setTimeout(() => {this.tick();}, mapSpeed);
  // }
}
