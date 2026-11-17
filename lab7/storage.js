
/*
  COSC 219 — Lab 7 · storage.js
  Reading and writing localStorage.
*/

const KEY = "cosc219.trails";

export function saveTrails(trails) {
    localStorage.setItem(KEY, JSON.stringify(trails));
}

export function loadTrails() {
    const raw = localStorage.getItem(KEY);

    if (raw === null) {
        return [];
    }

    try {
        const trails = JSON.parse(raw);

        if (!Array.isArray(trails)) {
            return [];
        }

        return trails;
    } catch (error) {
        return [];
    }
}

export function clearTrails() {
    localStorage.removeItem(KEY);
}
