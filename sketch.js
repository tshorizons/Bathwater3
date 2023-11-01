// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function preload(){
  img = loadImage ('bath.png');
  }

let particles = [];

function setup() {
  createCanvas(720,400);
}

function draw() {
  image(img,0,0,width,height)

  particles.push(new Particle(createVector(width / 4+10, 140)));
  particles.push(new Particle(createVector(width / 4+10, 220)));
  // Looping through backwards to delete
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.run();
    if (p.isDead()) {
      //remove the particle
      particles.splice(i, 1);
    }
  }

}