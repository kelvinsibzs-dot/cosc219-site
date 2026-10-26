
/*
  COSC 219 — Lab 5
  Arrays, loops and iterators.
*/

// PART A — helpers from Lab 4

// A1 — revealWord(word, guessedLetters)
function revealWord(word, guessedLetters) {
  return word.split("").map(function(letter) {
    if (guessedLetters.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  }).join("");
}

// A2 — hasWon(word, guessedLetters)
function hasWon(word, guessedLetters) {
  return word.split("").every(function(letter) {
    return guessedLetters.includes(letter);
  });
}


// PART B — array basics

// B1 — trailNames(trails)
function trailNames(trails) {
  return trails.map(function(trail) {
    return trail.name;
  });
}

// B2 — openTrails(trails)
function openTrails(trails) {
  return trails.filter(function(trail) {
    return !trail.closed;
  });
}

// B3 — findByName(trails, name)
function findByName(trails, name) {
  return trails.find(function(trail) {
    return trail.name.toLowerCase() === name.toLowerCase();
  });
}

// B4 — sortedByDistance(trails)
function sortedByDistance(trails) {
  return trails.slice().sort(function(a, b) {
    return a.km - b.km;
  });
}


// PART C — iterators

// C1 — anyClosed(trails)
function anyClosed(trails) {
  return trails.some(function(trail) {
    return trail.closed;
  });
}

// C2 — allUnder(trails, limit)
function allUnder(trails, limit) {
  return trails.every(function(trail) {
    return trail.km < limit;
  });
}

// C3 — totalDistance(trails)
function totalDistance(trails) {
  var total = trails.reduce(function(sum, trail) {
    return sum + trail.km;
  }, 0);

  return Math.round(total * 10) / 10;
}

// C4 — longestTrail(trails)
function longestTrail(trails) {
  return trails.reduce(function(longest, trail) {
    if (longest === undefined || trail.km > longest.km) {
      return trail;
    } else {
      return longest;
    }
  }, undefined);
}

// C5 — countByRating(trails)
function countByRating(trails) {
  return trails.reduce(function(counts, trail) {
    if (counts[trail.rating] === undefined) {
      counts[trail.rating] = 0;
    }

    counts[trail.rating] = counts[trail.rating] + 1;

    return counts;
  }, {});
}


// PART D — chaining

// D1 — openDistance(trails)
function openDistance(trails) {
  var open = trails.filter(function(trail) {
    return !trail.closed;
  });

  var distances = open.map(function(trail) {
    return trail.km;
  });

  var total = distances.reduce(function(sum, distance) {
    return sum + distance;
  }, 0);

  return Math.round(total * 10) / 10;
}

// D2 — summaryLines(trails)
function summaryLines(trails) {
  return trails.map(function(trail) {
  var line = trail.name + " \u2014 " + trail.km + " km, " + trail.rating;  

    if (trail.closed) {
      line = line + " (closed)";
    }

    return line;
  });
}

// D3 — report(trails)
function report(trails) {
  var open = openTrails(trails);

  var longestOpen = longestTrail(open);

  if (longestOpen === undefined) {
    longestOpen = null;
  } else {
    longestOpen = longestOpen.name;
  }

  return {
    total: trails.length,
    open: open.length,
    closed: trails.filter(function(trail) {
      return trail.closed;
    }).length,
    openKm: openDistance(trails),
    longestOpen: longestOpen,
    byRating: countByRating(trails)
  };
}
