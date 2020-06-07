size(500, 500);

int def = 10;

PVector a = new PVector(random(width), random(height));
PVector b = new PVector(random(width), random(height));
stroke(255, 0, 0);
ellipse(a.x, a.y, 10, 10);
stroke(0, 255, 0);
ellipse(b.x, b.y, 10, 10);

for (int i = 0; i < def; i++) {
  // progressif
  //  PVector c = PVector.lerp(a, b, 1 / (float(def) - float(i)));
  //  println(i, (def - i), 1 / (float(def) - float(i)));  

  // regulier
  PVector c = PVector.lerp(a, b, i * 1 / float(def));
  //println(i, i * 1 / float(def));  
  stroke(0);
  ellipse(c.x, c.y, 5, 5);
}
