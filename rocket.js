class Rocket {
    constructor(dna) {
        this.pos = createVector(width / 2, height);
        this.vel = createVector(0, -1);
        this.acc = createVector();
        this.completed = false;
        this.crashedobstacle = false;
        this.crashed = false;

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
            successCount++;
            successP.html('generation success: ' + successCount);
        }
        if (this.crashed) {
            this.fitness /= 10;
        }
        if (this.crashedobstacle) {
            this.fitness = 0;
        }
    }

    update() {
        let distance = dist(this.pos.x, this.pos.y, target.x, target.y);
        if (distance < 10) {
            this.completed = true;
            this.pos = target.copy();
        }

        if (this.pos.x > rx && this.pos.x < rx + rw && this.pos.y > ry && this.pos.y < ry + rh) {
            this.crashedobstacle = true;
        }

        if (this.pos.x > width || this.pos.x < 0) {
            this.crashed = true;
        }

        if (this.pos.y > height || this.pos.y < 0) {
            this.crashed = true;
        }


        this.applyForce(this.dna.genes[count]);
        if (!this.completed && !this.crashed && !this.crashedobstacle) {
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
            this.vel.limit(4)
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