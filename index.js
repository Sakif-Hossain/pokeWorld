const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

keys = {
  w: { pressed: false },
  a: { pressed: false },
  s: { pressed: false },
  d: { pressed: false },
};

const backgroundImg = new Image();
backgroundImg.src = "./Game Assets/img/dungeonWorldMap.png";

const playerImg = new Image();
playerImg.src = "./Game Assets/img/player/playerDown.png";

class Sprite {
  constructor({ img, position, velocity }) {
    this.img = img;
    this.position = position;
    this.velocity = velocity;
  }

  draw() {
    ctx.drawImage(this.img, this.position.x, this.position.y);
  }
}

const background = new Sprite({
  img: backgroundImg,
  position: { x: -350, y: -300 },
  velocity: { x: 0, y: 0 },
});

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  ctx.drawImage(
    playerImg,
    0,
    0,
    playerImg.width / 4,
    playerImg.height,
    canvas.width / 2 - playerImg.width / 4 / 2,
    canvas.height / 2 - playerImg.height / 2,
    playerImg.width / 4,
    playerImg.height
  );
  if (keys.w.pressed && lastKey === "w") background.position.y += 5;
  else if (keys.a.pressed && lastKey === "a") background.position.x += 5;
  else if (keys.s.pressed && lastKey === "s") background.position.y -= 5;
  else if (keys.d.pressed && lastKey === "d") background.position.x -= 5;
}
animate();

lastKey = "";
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = true;
      lastKey = "w";
      break;
    case "a":
      keys.a.pressed = true;
      lastKey = "a";
      break;
    case "s":
      keys.s.pressed = true;
      lastKey = "s";
      break;
    case "d":
      keys.d.pressed = true;
      lastKey = "d";
      break;
    default:
      console.log("not wasd");
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
    default:
      console.log("not wasd");
      break;
  }
});
