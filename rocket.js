class Rocket {
    constructor() {
        this.pos = createVector(width / 2, height);
        this.vel = createVector(0, -1);
        this.acc = createVector();
    }

    applyForce(force) {
        this.acc.add(force);
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    show() {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        rectMode(CENTER);
        rect(0, 0, 50, 10);
        pop();
    }
}