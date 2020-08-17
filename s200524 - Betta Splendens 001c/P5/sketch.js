// dgezeo / guillaume durand
// 200524

var ps;
var vm;

function setup() {

  createCanvas(800, 450);
  ps = new ParticleSystem();
  vm = new VirtualMouse(width / 2, height / 2, 0.1, 0.2, 0.3, 6);
}

function draw() {
  background(0, 0, 50);

  if (mouseX == pmouseX && mouseY == pmouseY) {
    vm.update();
  } else {
    vm.pvmouseX = vm.vmouseX;
    vm.pvmouseY = vm.vmouseY;
    vm.vmouseX = mouseX;
    vm.vmouseY = mouseY;
  }
  //vm.display();

  ps.addParticle(vm.vmouseX, vm.vmouseY, random(50, 75), random(5, 25));
  ps.update();
  ps.link();
}