
/*
  COSC 219 — Lab 7 · trails.js
  The data operations. No DOM in this file at all.
*/

export function makeTrail(name, km) {
    return {
        id: String(Date.now()) + Math.random().toString(16).slice(2, 8),
        name: name.trim(),
        km: Number(km),
        closed: false
    };
}

export function isValidTrail(name, km) {
    const trimmedName = name.trim();
    const distance = Number(km);

    return (
        trimmedName.length > 0 &&
        km !== "" &&
        Number.isFinite(distance) &&
        distance > 0
    );
}

export function addTrail(trails, trail) {
    return [...trails, trail];
}

export function removeTrail(trails, id) {
    return trails.filter(trail => trail.id !== id);
}

export function toggleTrail(trails, id) {
    return trails.map(trail =>
        trail.id === id
            ? { ...trail, closed: !trail.closed }
            : trail
    );
}

export function findAction(target) {
    const button = target.closest("button[data-action]");

    if (!button) {
        return null;
    }

    const row = button.closest(".trail");

    if (!row) {
        return null;
    }

    return {
        action: button.dataset.action,
        id: row.dataset.id
    };
}
