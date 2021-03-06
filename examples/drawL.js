function draw() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    // Draw border
    drawBorder();
    // transform
    ctx.save();
    ctx.translate(250, 250);
    ctx.rotate(Math.PI);
    ctx.scale(0.25, 0.25);
    // fill style: red
    ctx.fillStyle = "rgb(240,0,0)";
    draw_L();
    ctx.restore();
    // transform
    ctx.translate(250, 0);
    ctx.scale(0.5, 0.5);
    // fill style: yellow
    ctx.fillStyle = "rgb(250,250,0)";
    draw_L();
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
  function draw_L() {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(250, 0);
    ctx.lineTo(250, 400);
    ctx.lineTo(500, 400);
    ctx.lineTo(500, 500);
    ctx.lineTo(0, 500);
    ctx.lineTo(0, 0);
    ctx.fill();
  }
}

draw();
