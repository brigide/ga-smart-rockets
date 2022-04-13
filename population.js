class Population {
    constructor() {
        this.rockets = [];
        this.size = 100;

        for (let i = 0; i < this.size; i++) {
            this.rockets[i] = new Rocket();
        }
    }

    run() {
        for (let i = 0; i < this.size; i++) {
            this.rockets[i].update();
            this.rockets[i].show();
        }
    }
}