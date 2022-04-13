class Population {
    constructor() {
        this.rockets = [];
        this.size = 100;
        this.matingPool = [];

        for (let i = 0; i < this.size; i++) {
            this.rockets[i] = new Rocket();
        }
    }

    evaluate() {
        let maxfitness = 0;
        for (let i = 0; i < this.size; i++) {
            this.rockets[i].calculateFitness();
            if (this.rockets[i].fitness > maxfitness) {
                maxfitness = this.rockets[i].fitness;
            }
        }

        for (let i = 0; i < this.size; i++) {
            this.rockets[i].fitness /= maxfitness;
        }

        this.matingPool = [];
        for (let i = 0; i < this.size; i++) {
            let n = this.rockets[i].fitness * 100;
            for (let j = 0; j < n; j++) {
                this.matingPool.push(this.rockets[i]);
            }
        }
    }

    selection() {
        let newRockets = [];
        for (let i = 0; i < this.rockets.length; i++) {
            let parentA = random(this.matingPool).dna;
            let parentB = random(this.matingPool).dna;
    
            let child = parentA.crossover(parentB);
            child.mutation();

            newRockets[i] = new Rocket(child)
        }
        this.rockets = newRockets;
    }

    run() {
        for (let i = 0; i < this.size; i++) {
            this.rockets[i].update();
            this.rockets[i].show();
        }
    }
}