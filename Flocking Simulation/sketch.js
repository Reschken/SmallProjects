const flock = [];

function setup() {
  createCanvas(640, 360);
  for (let i = 0; i < 100; i++) {
    flock.push(new Particle());
  }

}

function draw() {
  background(51);

  for (let particle of flock) {
    particle.edges();
    particle.flock(flock)
    particle.update();
    particle.show();
  }
}