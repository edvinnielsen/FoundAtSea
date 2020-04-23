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

    let fsm = new StateMachine({
      init: 'solid',
      transitions: [
        { name: 'melt',     from: 'solid',  to: 'liquid' },
        { name: 'freeze',   from: 'liquid', to: 'solid'  },
        { name: 'vaporize', from: 'liquid', to: 'gas'    },
        { name: 'condense', from: 'gas',    to: 'liquid' }
      ],
      methods: {
        onMelt:     function() { console.log('I melted')    },
        onFreeze:   function() { console.log('I froze')     },
        onVaporize: function() { console.log('I vaporized') },
        onCondense: function() { console.log('I condensed') }
      }
    });
    
    console.log("hiu");




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
