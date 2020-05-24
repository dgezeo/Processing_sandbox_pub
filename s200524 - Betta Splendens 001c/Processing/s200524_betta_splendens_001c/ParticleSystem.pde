class ParticleSystem {
  ArrayList<Particle> particles;

  int p_max = 100;

  ParticleSystem() {
    particles = new ArrayList<Particle>();
  }

  void addParticle(float x, float y, float life, float radius) {
    int p_size = particles.size();
    if (p_size <= p_max) particles.add(new Particle(x, y, life, radius));
  }

  void link() {
    for (Particle p : particles) {
      p.links(particles);
    }
  }

  void update() {
    for (int i = particles.size()-1; i >= 0; i--) {
      Particle p = particles.get(i);
      p.update();
      if (p.isDead()) particles.remove(i);
    }
  }
}
