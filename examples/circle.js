function circle() {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();
}

circle();

// ctx.scaling(x,y) - skaliavimas
// ctx.rotate(a) - posūkis
// ctx.translate(b,c) - postūmis
