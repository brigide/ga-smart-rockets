class DNA {
    constructor(genes) {
        if (genes) {
            this.genes = genes;
        }
        else {
            this.genes = [];
            for (let i = 0; i < lifespan; i++) {
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(maxforce);
            }
        }
    }

    crossover(partner) {
        let newgenes = [];
        let midpoint = floor(random(this.genes.length));
        for (let i = 0; i < this.genes.length; i++) {
            if (i > midpoint) {
                newgenes[i] = this.genes[i];
            }
            else {
                newgenes[i] = partner[i];
            }
        }
        return new DNA(newgenes);
    }

    mutation() {
        for (let i = 0; i < this.genes.length; i++) {
            if (random(1) < mutation) {
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(maxforce);
            }
        }
    }
}