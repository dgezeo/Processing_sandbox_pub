VirtualMouse vm;

void setup() {

  size(500, 500);
  vm = new VirtualMouse(width / 2, height / 2, 0.1, 0.2, 0.3, 6);
}

void draw() {

  background(0);
  vm.update();
  vm.display();

  println(vm.vmouseX, vm.vmouseY);
  println(vm.pvmouseX, vm.pvmouseY);
  println("-----");
}
