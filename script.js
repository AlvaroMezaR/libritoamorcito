let currentPage = 0;
const book = document.getElementById("book");
const totalPages = document.querySelectorAll(".spread").length;

function updateBook() {
  const offset = -currentPage * 100;
  book.style.transform = `translateX(${offset}%)`;
}

function nextPage() {
  if (currentPage < totalPages - 1) {
    currentPage++;
    updateBook();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    updateBook();
  }
}

/* Partículas (pétalos y corazones) */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function createParticle() {
  const shapes = ["❤️", "🌸", "💖", "💐"];
  const shape = shapes[Math.floor(Math.random() * shapes.length)];
  particles.push({
    x: Math.random() * canvas.width,
    y: -20,
    size: Math.random() * 24 + 14,
    speed: Math.random() * 2 + 1,
    shape: shape,
    rotation: Math.random() * 360
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, index) => {
    ctx.font = `${p.size}px serif`;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation * Math.PI / 180);
    ctx.fillText(p.shape, 0, 0);
    ctx.restore();
    p.y += p.speed;
    p.rotation += 1;
    if (p.y > canvas.height) {
      particles.splice(index, 1);
    }
  });
}

function animateParticles() {
  if (Math.random() < 0.1) createParticle();
  drawParticles();
  requestAnimationFrame(animateParticles);
}
animateParticles();
