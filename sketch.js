let population;
let lifespan = 200;
let lifeParagraph;
let count = 0;
let target;


function setup() {
    createCanvas(400, 300);
    population = new Population();
    lifeParagraph = createP();
    target = createVector(width / 2, 50);
}

function draw() {
    background(0);
    population.run();
    lifeParagraph.html(count);
    count++;
    if (count == lifespan) {
        population = new Population();
        count = 0;
    }

    ellipse(target.x, target.y, 16, 16);
}

