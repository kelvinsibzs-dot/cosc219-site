
import {
    makeTrail,
    isValidTrail,
    addTrail,
    removeTrail,
    toggleTrail,
    findAction
} from "./trails.js";

import {
    createTrailItem,
    renderTrails,
    summaryText
} from "./render.js";

import {
    saveTrails,
    loadTrails,
    clearTrails
} from "./storage.js";

const results = document.querySelector("#results");

let passed = 0;
let failed = 0;
const messages = [];

function test(description, callback) {
    try {
        if (callback()) {
            passed++;
            messages.push(`PASS: ${description}`);
        } else {
            failed++;
            messages.push(`FAIL: ${description}`);
        }
    } catch (error) {
        failed++;
        messages.push(`FAIL: ${description} — ${error.message}`);
    }
}

function equal(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

// PART A: VALIDATION

test("Valid trail is accepted", () =>
    isValidTrail("Knox", "2.8") === true);

test("Whitespace name is rejected", () =>
    isValidTrail("   ", "2.8") === false);

test("Empty name is rejected", () =>
    isValidTrail("", "2.8") === false);

test("Empty distance is rejected", () =>
    isValidTrail("Knox", "") === false);

test("Invalid distance is rejected", () =>
    isValidTrail("Knox", "abc") === false);

test("Zero distance is rejected", () =>
    isValidTrail("Knox", "0") === false);

test("Negative distance is rejected", () =>
    isValidTrail("Knox", "-2") === false);

test("Infinity is rejected", () =>
    isValidTrail("Knox", "Infinity") === false);

// MAKE TRAIL

const trail = makeTrail("  Bear Creek  ", "5.5");

test("makeTrail returns an object", () =>
    typeof trail === "object");

test("makeTrail trims the name", () =>
    trail.name === "Bear Creek");

test("makeTrail converts distance to number", () =>
    trail.km === 5.5);

test("New trail starts open", () =>
    trail.closed === false);

test("New trail has an ID", () =>
    typeof trail.id === "string" && trail.id.length > 0);

test("New trails have unique IDs", () =>
    makeTrail("Knox", "2").id !== makeTrail("Knox", "2").id);

// ADD TRAIL

const first = { id: "a1", name: "Knox", km: 2, closed: false };
const second = { id: "b2", name: "Bear Creek", km: 5, closed: false };
const original = [first];

const added = addTrail(original, second);

test("addTrail returns an array", () =>
    Array.isArray(added));

test("addTrail adds the trail", () =>
    added.length === 2);

test("addTrail keeps the original trail", () =>
    added[0] === first);

test("addTrail does not mutate original array", () =>
    original.length === 1);

test("addTrail adds trail at the end", () =>
    added[1] === second);

// REMOVE TRAIL

const removed = removeTrail([first, second], "a1");

test("removeTrail returns an array", () =>
    Array.isArray(removed));

test("removeTrail removes matching trail", () =>
    removed.length === 1 && removed[0].id === "b2");

test("removeTrail does not mutate original array", () =>
    original.length === 1);

test("Unknown ID does not remove a trail", () =>
    removeTrail([first, second], "unknown").length === 2);

test("removeTrail can remove the last trail", () =>
    removeTrail([first], "a1").length === 0);

// TOGGLE TRAIL

const toggled = toggleTrail([first, second], "a1");

test("toggleTrail returns an array", () =>
    Array.isArray(toggled));

test("toggleTrail changes closed to true", () =>
    toggled[0].closed === true);

test("toggleTrail does not mutate original object", () =>
    first.closed === false);

test("toggleTrail creates a new object", () =>
    toggled[0] !== first);

test("toggleTrail leaves other trails unchanged", () =>
    toggled[1] === second);

// FIND ACTION

const container = document.createElement("ul");
container.innerHTML = `
    <li class="trail" data-id="a1">
        <button data-action="toggle">
            <span>Close</span>
        </button>
        <button data-action="delete">Delete</button>
    </li>
`;

const toggleButton = container.querySelector('[data-action="toggle"]');
const deleteButton = container.querySelector('[data-action="delete"]');
const label = toggleButton.querySelector("span");
const row = container.querySelector(".trail");

test("findAction identifies toggle button", () =>
    equal(findAction(toggleButton), { action: "toggle", id: "a1" }));

test("findAction identifies delete button", () =>
    equal(findAction(deleteButton), { action: "delete", id: "a1" }));

test("findAction works when clicking button text", () =>
    equal(findAction(label), { action: "toggle", id: "a1" }));

test("findAction returns null for row padding", () =>
    findAction(row) === null);

test("findAction returns null for unrelated element", () =>
    findAction(document.createElement("div")) === null);

// PART B: RENDERING

const item = createTrailItem(first);

test("createTrailItem creates an li", () =>
    item.tagName === "LI");

test("Trail item has trail class", () =>
    item.classList.contains("trail"));

test("Trail item has correct ID", () =>
    item.dataset.id === "a1");

test("Trail item displays name", () =>
    item.querySelector(".trail-name").textContent === "Knox");

test("Trail item displays distance", () =>
    item.querySelector(".trail-km").textContent === "2 km");

test("Trail item has toggle button", () =>
    item.querySelector('[data-action="toggle"]') !== null);

test("Trail item has delete button", () =>
    item.querySelector('[data-action="delete"]') !== null);

test("Closed trail gets is-closed class", () =>
    createTrailItem({ ...first, closed: true }).classList.contains("is-closed"));

// RENDER TRAILS

const list = document.createElement("ul");

renderTrails([first, second], list);

test("renderTrails creates two items", () =>
    list.children.length === 2);

test("renderTrails displays first trail", () =>
    list.children[0].dataset.id === "a1");

test("renderTrails displays second trail", () =>
    list.children[1].dataset.id === "b2");

renderTrails([], list);

test("renderTrails clears an empty list", () =>
    list.children.length === 0);

// SUMMARY

test("Empty summary is correct", () =>
    summaryText([]) === "No trails yet. Add one above.");

test("Summary uses singular trail", () =>
    summaryText([first]).includes("1 trail,"));

test("Summary counts open trails", () =>
    summaryText([first, { ...second, closed: true }]).includes("1 open"));

test("Summary calculates total distance", () =>
    summaryText([first, second]).includes("7.0 km total."));

// PART E: STORAGE

clearTrails();

test("Empty storage returns an array", () =>
    Array.isArray(loadTrails()));

saveTrails([first]);

test("saveTrails stores data", () =>
    localStorage.getItem("cosc219.trails") !== null);

test("loadTrails returns saved trail", () =>
    loadTrails()[0].id === "a1");

test("Loaded trail has correct name", () =>
    loadTrails()[0].name === "Knox");

test("clearTrails removes saved data", () => {
    clearTrails();
    return localStorage.getItem("cosc219.trails") === null;
});

test("loadTrails returns empty array after clearing", () =>
    equal(loadTrails(), []));

// DISPLAY RESULTS

results.textContent =
    `Lab 7 Self Check\n\n` +
    `Passed: ${passed}\n` +
    `Failed: ${failed}\n\n` +
    messages.join("\n");
