// dgezeo / guillaume durand
// 200508 - 200502

var elements = 75;
var speed = 0.35; // 0 -> 1

var trailers = [];
var trailers_back = [];

var vm;

function setup() {

  createCanvas(800, 450);
  background(0, 0, 50);

  vm = new VirtualMouse(width / 2, height / 2, 0.1, 0.2, 0.3, 6);

  for (let i = 0; i < elements; i++) {
    trailers.push(new Trail());
    trailers_back.push(new Trail());
  }

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

  var target_x;
  var target_y;

  for (let i = 0; i < trailers.length; i++) {

    if (i == 0) {
      target_x = vm.vmouseX;
      target_y = vm.vmouseY;
    } else {
      target_x = trailers[i - 1].x;
      target_y = trailers[i - 1].y;
    }

    trailers[i].x += (target_x - trailers[i].last_x) * speed;
    trailers[i].y += (target_y - trailers[i].last_y) * speed;

    trailers[i].last_x = trailers[i].x;
    trailers[i].last_y = trailers[i].y;

    trailers_back[i].x = width / 2 - (trailers[i].x - width / 2);
    trailers_back[i].y = height / 2 - (trailers[i].y - height / 2);
  }

  for (let i = 0; i < trailers.length - 1; i = i + 2) {

    let a = trailers[i];
    let b = trailers[i + 1];
    let c = trailers_back[trailers.length - 1 - i];
    let d = trailers_back[trailers.length - 1 - i - 1];

    if (i % 2 == 0) fill(255, 255, 255);
    if (i % 4 == 0) fill(255, 255, 0);
    if (i % 6 == 0) fill(255, 0, 255);
    if (i % 8 == 0) fill(0, 255, 255);

    noStroke();
    beginShape();
    vertex(a.x, a.y);
    vertex(b.x, b.y);
    vertex(d.x, d.y);
    vertex(c.x, c.y);
    endShape(CLOSE);
  }
}