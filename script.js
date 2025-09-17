// Fundo de estrelas animadas
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let w, h;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

const numStars = 200;
const stars = [];
for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.2,
    d: Math.random() * 0.5
  });
}

function draw() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let i = 0; i < numStars; i++) {
    const s = stars[i];
    ctx.moveTo(s.x, s.y);
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  update();
  requestAnimationFrame(draw);
}

function update() {
  for (let i = 0; i < numStars; i++) {
    const s = stars[i];
    s.y += s.d;
    if (s.y > h) {
      stars[i] = { x: Math.random() * w, y: 0, r: s.r, d: s.d };
    }
  }
}

draw();
