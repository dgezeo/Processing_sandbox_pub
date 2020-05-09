// dgezeo / guillaume durand
// v.001
// 200509
//
// Widely and wildely inspired from Daniel Shiffman
// http://natureofcode.com 
// NOC_6_01_Seek : "Vehicle" class

class VirtualMouse {

  constructor(x, y, xoff, yoff, force_max, speed_max) {

    this.pos;
    this.vel;
    this.acc;
    this.force_max = force_max;
    this.speed_max = speed_max;

    this.xoff = xoff;
    this.yoff = yoff;
    this.xoff_i;
    this.yoff_i;

    this.vmouseX = x;
    this.vmouseY = y;
    this.pvmouseX = 0;
    this.pvmouseY = 0;

    this.acc = createVector(0, 0);
    this.vel = createVector(0, -2);
    this.pos = createVector(x, y);

  }

  update() {

    this.pvmouseX = this.pos.x;
    this.pvmouseY = this.pos.y;

    this.xoff += 0.01;
    this.yoff += 0.02;

    let target = createVector(noise(width + this.xoff) * width, noise(height + this.yoff) * height);

    let dest = p5.Vector.sub(target, this.pos);
    dest.setMag(this.speed_max);
    let steer = p5.Vector.sub(dest, this.vel);
    this.acc.add(steer.limit(this.force_max));

    this.vel.add(this.acc);
    this.pos.add(this.vel.limit(this.speed_max));
    this.acc.mult(0);

    this.vmouseX = this.pos.x;
    this.vmouseY = this.pos.y;
  }

  display() {
    let theta = this.vel.heading() + PI / 2;
    fill(255, 0, 128);
    stroke(255, 255, 255);
    strokeWeight(2);
    push();
    translate(this.pos.x, this.pos.y);
    rotate(theta);
    ellipse(0, 0, 20, 20);
    line(0, 0, 0, -10);
    pop();
  }
}

/*

function VirtualMouse(x, y, xoff, yoff, force_max, speed_max) {

  var pos, vel, acc;
  var force_max, speed_max;

  var xoff, yoff;
  var xoff_i, yoff_i;

  var vmouseX = 0, vmouseY = 0;
  var pvmouseX = 0, pvmouseY = 0;

  var acc = createVector(0, 0);
  var vel = createVector(0, -2);
  var pos = createVector(x, y);

  this.update = function() {

    pvmouseX = pos.x;
    pvmouseY = pos.y;

    xoff += 0.01;
    yoff += 0.02;

    let target = createVector(noise(width + xoff) * width, noise(height + yoff) * height);

    dest = p5.Vector.sub(target, pos);
    dest.setMag(speed_max);
    steer = p5.Vector.sub(dest, vel);
    acc.add(steer.limit(force_max));

    vel.add(acc);
    pos.add(vel.limit(speed_max));
    acc.mult(0);

    vmouseX = pos.x;
    vmouseY = pos.y;
  }

  this.display = function() {
    let theta = vel.heading() + PI / 2;
    fill(255, 0, 128);
    stroke(255, 255, 255);
    strokeWeight(2);
    push();
    translate(pos.x, pos.y);
    rotate(theta);
    ellipse(0, 0, 20, 20);
    line(0, 0, 0, -10);
    pop();
  }
}

*/