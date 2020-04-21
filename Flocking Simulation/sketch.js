const flock = [];

let alignSlider, cohesionSlider, seperationSlider;

function setup() {
  createCanvas(640, 360);
  alignSlider = createSlider(0, 5, 1, 0.1);
  cohesionSlider = createSlider(0, 5, 1, 0.1);
  seperationSlider = createSlider(0, 5, 1, 0.1)
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