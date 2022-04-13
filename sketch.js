let population;
let popsize = 1000;
let popsizeP;
let lifespan = 400;
let lifeParagraph;
let count = 0;
let target;
let mutation = 0.01;
let maxforce = 0.2;
let generation = 0;
let generationP;
let mutationP;
let successCount = 0;
let successP;

let rx = 100;
let ry = 150;
let rw = 200;
let rh = 10;

function setup() {
    createCanvas(400, 300);
    population = new Population();
    lifeParagraph = createP();
    generationP = createP();
    mutationP = createP();
    successP = createP();
    popsizeP = createP();
    popsizeP.html('population size: ' + popsize);
    generationP.html('generation: ' + generation);
    mutationP.html('mutation rate: ' + mutation * 100 + '%');
    successP.html('generation success: ' + successCount);
    target = createVector(width / 2, 50);
}

function draw() {
    background(0);
    population.run();
    lifeParagraph.html(count);
    count++;
    if (count == lifespan) {
        population.evaluate();
        population.selection();
        count = 0;
    }

    fill(255);
    rect(rx, ry, rw, rh);

    ellipse(target.x, target.y, 16, 16);
}

