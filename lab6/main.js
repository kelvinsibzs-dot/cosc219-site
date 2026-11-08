
import { TRAIL_DATA } from "./data.js";
import { TrailRegistry } from "./registry.js";

// Create the trail registry using the data
const registry = TrailRegistry.fromData(TRAIL_DATA);

// Close Bear Creek
registry.find("Bear Creek").close();

// Find the HTML elements
const trailsList = document.querySelector("#trails");
const summary = document.querySelector("#summary");

// Display each trail
registry.describeAll().forEach(description => {
  const li = document.createElement("li");
  li.textContent = description;
  trailsList.append(li);
});

// Display the summary
summary.textContent =
  `${registry.size} trails, ${registry.openTrails.length} open, ` +
  `${registry.totalDistance} km total. Steepest: ${registry.steepest.name}.`;
