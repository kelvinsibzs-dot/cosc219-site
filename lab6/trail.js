
/*
  COSC 219 — Lab 6 · trail.js
  Two classes. Export both.
*/

export class Trail {

    // Private field
    #closed = false;

    // Static property
    static count = 0;

    // Constructor
    constructor(name, km, rating, gain) {
        this.name = name;
        this.km = km;
        this.rating = rating;
        this.gain = gain;

        Trail.count++;
    }

    // Getter: calculate steepness
    get steepness() {
        return Math.round(this.gain / this.km);
    }

    // Getter: check whether trail is closed
    get isClosed() {
        return this.#closed;
    }

    // Close the trail
    close() {
        this.#closed = true;
        return this;
    }

    // Open the trail
    open() {
        this.#closed = false;
        return this;
    }

    // Describe the trail
    describe() {
        return `${this.name} — ${this.km} km, ${this.rating}`;
    }

    // Convert Trail into a JSON object
    toJSON() {
        return {
            name: this.name,
            km: this.km,
            rating: this.rating,
            gain: this.gain,
            closed: this.#closed
        };
    }

    // Create a Trail from a plain object
    static fromObject(obj) {
        const { name, km, rating, gain = 0 } = obj;

        return new Trail(name, km, rating, gain);
    }
}


// Child class
export class BikeTrail extends Trail {

    constructor(name, km, rating, gain, surface = "gravel") {
        super(name, km, rating, gain);

        this.surface = surface;
    }

    // Override describe()
    describe() {
        return `${super.describe()} — ${this.surface}`;
    }

    // Extend parent's JSON output
    toJSON() {
        return {
            ...super.toJSON(),
            surface: this.surface
        };
    }
}
