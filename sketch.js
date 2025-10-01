// my assignment is based off of wall drawing 86
//Ten thousand lines about 10 inches (25 cm) long, covering the wall evenly.
//I have done less than 10,000 lines for performance
//and visual clarity 
//I have also done color since there was no color guidelines
//each line could not be 10 inches, but they are all the same length
function setup() {
  createCanvas(4000, 4000);
}

function draw() {
//180 makes the lines fade out
 background(255, 180);

 frameRate(7);

 
//random lines each the same length
    for (let i = 0; i < 1700; i++) {
      push();
      strokeWeight(5);
      let r = random(130, 255);
      let g = random(0, 255);
      let b = random(0, 255);
      stroke(r, g, b);
    //line appears random coordinates but always the same length
    let x1 = random(width);
    let y1 = random(height);
    let length = 300;
    //translate and rotate functions
  translate(x1, y1);
  rotate(random(TWO_PI));
  line(-length / 2, 0, length / 2, 0);
  pop();
  }
  //frame for the interactive piece as if its in a museum
  push();
  noStroke();
  fill(249, 215, 228);
  rect(0, 3800, 4000, 200);
  rect(0, 0, 4000, 200);
  rect(0, 0, 200, 4000);
  rect(3800, 0, 200, 4000);
  pop();

//outline of the frame
push();
noFill();
stroke(203, 46, 187);
strokeWeight(15);
rect(200, 200, 3600, 3600);
pop();

//name of the piece 
text("Wall Generative Drawing 86", 200, 3900);
textSize(100);
fill(203, 46, 187);

}
