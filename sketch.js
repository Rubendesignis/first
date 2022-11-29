function setup() {
  createCanvas(windowWidth,windowHeight);
 }
 function draw() {
  background(random(0,50),random(50),random(0,50));
   frameRate(30)
 
  fill (255,255,0);
 
 beginShape();
 for (let i = 0; i < 2; i++) {
   fill (255,255,0,70);
 vertex (random(width), random(height))
 endShape();
   fill(255,0,0,60)
   vertex (random(width), random(height))
 endShape();
   fill(0,255,0,70)
   vertex (random(width), random(height))
 endShape();
   fill(0,0,255,70)
   vertex (random(width), random(height))
 endShape();
   fill(0,255,200,80)
   vertex (random(width), random(height))
 endShape();
   fill(255,0,200,70)
   vertex (random(width), random(height))
 endShape();
 }
  }
 function mousePressed() {
  let fs = fullscreen();
  fullscreen(!fs);
 }
