function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    // Draw border
    drawBorder();

    ctx.translate(0, 250);
    ctx.rotate(-Math.PI / 2);
    draw_F();

    for (let i = 0; i < 3; i++) {
      ctx.translate(250, 200);
      ctx.rotate(Math.PI / 2);
      draw_F();
    }
  }
  function drawBorder() {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(500, 0);
    ctx.lineTo(500, 500);
    ctx.lineTo(0, 500);
    ctx.closePath();
    ctx.stroke();
  }
  function draw_F() {
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.strokeStyle = "green";
    ctx.moveTo(100, 100);
    ctx.lineTo(50, 100);
    ctx.lineTo(50, 150);
    ctx.lineTo(100, 150);
    ctx.moveTo(50, 150);
    ctx.lineTo(50, 200);
    ctx.stroke();
  }
}

draw();
