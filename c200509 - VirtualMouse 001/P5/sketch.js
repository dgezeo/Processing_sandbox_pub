// dgezeo / guillaume durand
// 200509

var vm;

function setup() {
  createCanvas(400, 400);
  vm = new VirtualMouse(width / 2, height / 2, 0.1, 0.2, 0.3, 6);

}

function draw() {

  background(0);
  vm.update();
  vm.display();

}