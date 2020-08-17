class Particle {

  constructor(id_, x, y, life_, radius_) {
    this.acc = createVector();
    this.vel = p5.Vector.random2D();
    this.pos = createVector(x, y);
    this.life = life_;
    this.radius = radius_;
    this.id = id_;
  }

  links(particles) {
    for (let i in particles) {

      let other = particles[i];

      if (other != this) {
        let dir = p5.Vector.sub(this.pos, other.pos);
        if (dir.mag() < this.radius * 2 && this.id < other.id) {
          strokeWeight(0.5);
          stroke(255, 255, 255, map(this.life, 50, 0, 255, 0));
          line(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        }
      }
    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.life -= 1;
  }

  isDead() {
    if (this.life < 0) return true;
    else return false;
  }
}
