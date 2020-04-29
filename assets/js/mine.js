class Mine {
  canvas;
  ctx;
  left;

  //59, 60 or 61
  row;

  //1 to 60
  column;

  //true or false
  isMine = false;

  expImage;

  constructor(row, column, isMine) {
    this.canvas = document.querySelector(".map");
    this.ctx = this.canvas.getContext("2d");

    this.row = row;
    this.column = column;
    this.isMine = isMine;

    this.expImage = document.querySelector("#exp");

    if (this.isMine) {
      StateMachine.apply(this, {
        init: "hidden",
        transitions: [
          { name: "mark", from: "hidden", to: "marked" },
          { name: "unmark", from: "marked", to: "hidden" },
          { name: "shot", from: "marked", to: "exploded" },
        ],
        methods: {
          onMark: function () {
            console.log("I am a marked mine");
            this.showMark();
          },
          onUnmark: function () {
            console.log("I am unmarked");
            this.hideMark();
          },
          onShot: function () {
            console.log("I am hit");
            this.hit();
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
            console.log("I am a marked blank");
            this.showMark();
          },
          onUnmark: function () {
            console.log("I am unmarked");
            this.hideMark();
          },
          onShot: function () {
            console.log("I am missed");
            this.miss();
          },
        },
      });
    }
  }

  showMark() {
    const temp = getIndexOfMine(mine, this);

    // console.log(temp);

    // console.log(temp[0]);
    // console.log(temp[1]);

    const column = -10 + 70 * temp[1];
    const row = 90 + 60 * (-1 * (-61 + temp[0]));

    this.ctx.beginPath();
    this.ctx.rect(column, row, 20, 20);
    this.ctx.strokeStyle = "red";
    this.ctx.stroke();
  }

  hideMark() {
    // console.log("hiding mark");
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    map._draw();
  }

  hit() {
    const temp = getIndexOfMine(mine, this);

    // console.log(temp);

    // console.log(temp[0]);
    // console.log(temp[1]);


    const column = -10 + 70 * temp[1];
    const row = 90 + 60 * (-1 * (-61 + temp[0]));

    this.ctx.beginPath();
    this.ctx.rect(column, row, 20, 20);
    this.ctx.strokeStyle = "green";
    this.ctx.stroke();

    // console.log("make explosion visable");
    // this.expImage.style.width = `150px`;

    // this.expImage.style.top = `${row}px`;
    // this.expImage.style.left = `${column}px`;
    // this.expImage.style.visibility = "visible";

    // setTimeout(() => {
    //   this.expImage.style.visibility = `hidden`;
    // }, 1000);
  }

  miss() {

    console.log("animate miss");
    const temp = getIndexOfMine(mine, this);

    // console.log(temp);

    // console.log(temp[0]);
    // console.log(temp[1]);

    const column = -10 + 70 * temp[1];
    const row = 90 + 60 * (-1 * (-61 + temp[0]));

    this.ctx.beginPath();
    this.ctx.rect(column, row, 20, 20);
    this.ctx.strokeStyle = "yellow";
    this.ctx.stroke();
  }
}
