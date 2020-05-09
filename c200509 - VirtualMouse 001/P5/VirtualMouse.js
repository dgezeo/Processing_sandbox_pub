// dgezeo / guillaume durand
// 200509
//
// Widely and wildely inspired from Daniel Shiffman
// http://natureofcode.com 
// NOC_6_01_Seek : "Vehicle" class

function VirtualMouse(x, y, xoff, yoff, force_max, speed_max) {

  var pos;
  var vel;
  var acc;
  var force_max;
  var speed_max;

  var xoff;
  var yoff;
  var xoff_i;
  var yoff_i;

  var vmouseX = 0;
  var vmouseY = 0;
  var pvmouseX = 0;
  var pvmouseY = 0;

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