
/*
  COSC 219 — Lab 7 · render.js
  Creates and displays trail elements.
*/

export function createTrailItem(trail) {
    const li = document.createElement("li");
    li.classList.add("trail");
    li.dataset.id = trail.id;

    if (trail.closed) {
        li.classList.add("is-closed");
    }

    const name = document.createElement("span");
    name.classList.add("trail-name");
    name.textContent = trail.name;

    const km = document.createElement("span");
    km.classList.add("trail-km");
    km.textContent = `${trail.km} km`;

    const toggleButton = document.createElement("button");
    toggleButton.type = "button";
    toggleButton.dataset.action = "toggle";

    const toggleLabel = document.createElement("span");
    toggleLabel.classList.add("btn-label");
    toggleLabel.textContent = trail.closed ? "Reopen" : "Close";
    toggleButton.append(toggleLabel);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.dataset.action = "delete";
    deleteButton.setAttribute("aria-label", `Delete ${trail.name}`);

    const deleteLabel = document.createElement("span");
    deleteLabel.classList.add("btn-label");
    deleteLabel.textContent = "Delete";
    deleteButton.append(deleteLabel);

    li.append(name, km, toggleButton, deleteButton);

    return li;
}

export function renderTrails(trails, container) {
    const items = trails.map(createTrailItem);
    container.replaceChildren(...items);
}

export function summaryText(trails) {
    if (trails.length === 0) {
        return "No trails yet. Add one above.";
    }

    const total = trails.reduce((sum, trail) => sum + trail.km, 0);
    const open = trails.filter(trail => !trail.closed).length;
    const count = trails.length;
    const word = count === 1 ? "trail" : "trails";

    return `${count} ${word}, ${open} open, ${total.toFixed(1)} km total.`;
}
