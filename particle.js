// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

// A simple Particle class

class Particle {

    constructor(position) {
      this.acceleration = createVector(0, 0.05);
      this.velocity = createVector(random(0, 1), random(-1, 0));
      this.position = position.copy();
      this.lifespan = 255.0;
    }
  
    run() {
      this.update();
      this.display();
    }
  
    // Method to update position
    update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.lifespan -= 5;
    }
  
    // Method to display
    display() {
      stroke(255, this.lifespan);
      strokeWeight(2);
      fill(50,255,155, this.lifespan);
      ellipse(this.position.x, this.position.y, 8, 8);
    }
  
    // Is the particle still useful?
    isDead() {
      if (this.lifespan < 0.0) {
        return true;
      } else {
        return false;
      }
    }
  }