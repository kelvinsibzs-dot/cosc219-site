
/*
  COSC 219 — Lab 7
  Application logic
*/

import {
    loadTrails,
    saveTrails,
    clearTrails
} from "./storage.js";

import {
    renderTrails,
    summaryText
} from "./render.js";

import {
    isValidTrail,
    makeTrail,
    addTrail,
    removeTrail,
    toggleTrail,
    findAction
} from "./trails.js";

// Load saved trails
let trails = loadTrails();

// Get page elements
const form = document.querySelector("#add-form");
const nameInput = document.querySelector("#name");
const kmInput = document.querySelector("#km");
const error = document.querySelector("#error");
const trailList = document.querySelector("#trail-list");
const summary = document.querySelector("#summary");
const clearButton = document.querySelector("#clear-all");

// Update the page
function update() {
    renderTrails(trails, trailList);
    summary.textContent = summaryText(trails);
    saveTrails(trails);
}

// Add a trail
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value;
    const km = kmInput.value;

    if (!isValidTrail(name, km)) {
        error.textContent =
            "Give the trail a name and a distance above zero.";

        nameInput.focus();
        return;
    }

    error.textContent = "";

    const trail = makeTrail(name, km);

    trails = addTrail(trails, trail);

    form.reset();

    update();
});

// Handle trail buttons
trailList.addEventListener("click", function(event) {
    const action = findAction(event.target);

    if (!action) {
        return;
    }

    error.textContent = "";

    if (action.action === "delete") {
        trails = removeTrail(trails, action.id);
    }

    if (action.action === "toggle") {
        trails = toggleTrail(trails, action.id);
    }

    update();
});

// Clear all trails
clearButton.addEventListener("click", function() {
    trails = [];

    clearTrails();

    update();
});

// Display trails when page loads
update();
