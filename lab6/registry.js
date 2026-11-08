/*
  COSC 219 — Lab 6 · registry.js
  A class that owns a collection of Trails.
*/

// Import both classes
import { Trail, BikeTrail } from "./trail.js";

export class TrailRegistry {

    // Private array
    #trails = [];

    // Constructor
    constructor(trails = []) {
        trails.forEach(trail => this.add(trail));
    }

    // Get number of trails
    get size() {
        return this.#trails.length;
    }

    // Return a copy of the array
    get all() {
        return [...this.#trails];
    }

    // Add a trail
    add(trail) {
        if (!(trail instanceof Trail)) {
            throw new TypeError("Only Trail objects can be added");
        }

        this.#trails.push(trail);
        return this;
    }

    // Find a trail by name (case-insensitive)
    find(name) {
        return this.#trails.find(
            trail => trail.name.toLowerCase() === name.toLowerCase()
        );
    }

    // Find trails by rating
    byRating(rating) {
        return this.#trails.filter(
            trail => trail.rating === rating
        );
    }

    // Get all open trails
    get openTrails() {
        return this.#trails.filter(
            trail => !trail.isClosed
        );
    }

    // Calculate total distance
    get totalDistance() {
        const total = this.#trails.reduce(
            (sum, trail) => sum + trail.km,
            0
        );

        return Math.round(total * 10) / 10;
    }

    // Find the steepest trail
    get steepest() {
        return this.#trails.reduce(
            (steepest, trail) =>
                !steepest || trail.steepness > steepest.steepness
                    ? trail
                    : steepest,
            undefined
        );
    }

    // Get descriptions of all trails
    describeAll() {
        return this.#trails.map(
            trail => trail.describe()
        );
    }

    // Build a registry from plain objects
    static fromData(rows) {
        const registry = new TrailRegistry();

        rows.forEach(row => {
            const {
                name,
                km,
                rating,
                gain = 0,
                surface
            } = row;

            const trail = surface !== undefined
                ? new BikeTrail(name, km, rating, gain, surface)
                : new Trail(name, km, rating, gain);

            registry.add(trail);
        });

        return registry;
    }
}
