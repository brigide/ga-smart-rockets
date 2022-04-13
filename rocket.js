class Rocket {
    constructor(dna) {
        this.pos = createVector(width / 2, height);
        this.vel = createVector(0, -1);
        this.acc = createVector();
        this.completed = false;
        if (dna) {
            this.dna = dna;
        }
        else {
            this.dna = new DNA();
        }

        this.fitness = 0;
    }

    applyForce(force) {
        this.acc.add(force);
    }

    calculateFitness() {
        let distance = dist(this.pos.x, this.pos.y, target.x, target.y);
        this.fitness = map(distance, 0, width, width, 0);
        if (this.completed) { 
            this.fitness *= 10;
        }
    }

    update() {
        let distance = dist(this.pos.x, this.pos.y, target.x, target.y);
        if (distance < 10) {
            this.completed = true;
            this.pos = target.copy();
        }
        this.applyForce(this.dna.genes[count]);
        if (!this.completed) {
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
        }
    }

    show() {
        push();

        noStroke();
        fill(255, 150);
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        rectMode(CENTER);
        rect(0, 0, 25, 5);

        pop();
    }
}