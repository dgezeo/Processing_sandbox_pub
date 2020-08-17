// dgezeo / guillaume durand
// 200509
//
// Widely and wildely inspired from Daniel Shiffman
// http://natureofcode.com 
// NOC_6_01_Seek : "Vehicle" class

class VirtualMouse {

  PVector pos;
  PVector vel;
  PVector acc;
  float force_max;
  float speed_max;

  float xoff;
  float yoff;
  float xoff_i;
  float yoff_i;

  float vmouseX = 0;
  float vmouseY = 0;
  float pvmouseX = 0;
  float pvmouseY = 0;

  VirtualMouse(float x, float y, float xoff_i_, float yoff_i_, float force_max_, float speed_max_) {
    acc = new PVector(0, 0);
    vel = new PVector(0, -2);
    pos = new PVector(x, y);   
    xoff_i = xoff_i_;
    yoff_i = yoff_i_;
    force_max = force_max_;
    speed_max = speed_max_;
  }

  void update() {

    pvmouseX = pos.x;
    pvmouseY = pos.y;

    xoff += 0.01;
    yoff += 0.02;

    PVector target = new PVector(noise(width + xoff) * width, noise(height + yoff) * height);

    PVector dest = PVector.sub(target, pos);
    dest.setMag(speed_max);
    PVector steer = PVector.sub(dest, vel);
    acc.add(steer.limit(force_max));

    vel.add(acc);
    pos.add(vel.limit(speed_max));
    acc.mult(0);

    vmouseX = pos.x;
    vmouseY = pos.y;
  }

  void display() {
    float theta = vel.heading() + PI/2;
    fill(255, 0, 128);
    stroke(255, 255, 255);
    strokeWeight(2);
    pushMatrix();
    translate(pos.x, pos.y);
    println("ok : ", pos.x, pos.y);
    rotate(theta);
    ellipse(0, 0, 20, 20);
    line(0, 0, 0, -10);
    popMatrix();
  }
}
