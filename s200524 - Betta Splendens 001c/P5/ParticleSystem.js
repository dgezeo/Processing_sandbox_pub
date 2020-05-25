class ParticleSystem {

  constructor() {
    this.particles = [];
    this.p_max = 100;
    this.id = 0;
  }

  addParticle(x, y, life, radius) {
    var p_size = this.particles.length;
    if (p_size <= this.p_max){
      this.id++;
      this.particles.push(new Particle(this.id, x, y, life, radius));
    }
  }

  link() {
    for (var p in this.particles) {
      this.particles[p].links(this.particles);
    }
  }

  update() {
    for (var i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].update();
      if (this.particles[i].isDead()) this.particles.splice(i, 1);
    }
  }
}
