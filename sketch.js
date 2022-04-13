var rocket;

function setup() {
    createCanvas(400, 300);
    rocket = new Rocket();
}

function draw() {
    background(0);
    rocket.update();
    rocket.show();
}

