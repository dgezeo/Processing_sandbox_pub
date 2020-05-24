class Particle {
  PVector pos;
  PVector vel;
  PVector acc;

  float life;
  float radius;

  Particle(float x, float y, float life_, float radius_) {
    acc = new PVector();
    vel = PVector.random2D();
    pos = new PVector(x, y);
    life = life_;
    radius = radius_;
  }

  void links(ArrayList<Particle> particles) {
    for (Particle other : particles) {
      if (other != this) {
        PVector dir = PVector.sub(pos, other.pos);
        if (dir.mag() < radius * 2) {
          strokeWeight(0.5);
          stroke(255, 255, 255, map(life, 50, 0, 255, 0));
          line(pos.x, pos.y, other.pos.x, other.pos.y);
        }
      }
    }
  }

  void update() {
    vel.add(acc);
    pos.add(vel);
    acc.mult(0);
    life -= 1;
  }

  boolean isDead() {
    if (life < 0) return true;
    else return false;
  }
}
