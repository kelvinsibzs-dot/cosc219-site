
console.log("Part A - Object References");

// Example 1: Object reference
const original = { name: "Knox", km: 2.8 };
const alias = original;
const copy = { ...original };

alias.km = 99;
copy.km = 1;

console.log("Original:", original);
console.log("Alias:", alias);
console.log("Copy:", copy);

// Example 2: Shallow copy with nested objects
const outer = {
  name: "X",
  meta: {
    tags: ["steep"]
  }
};

const shallow = { ...outer };

shallow.meta.tags.push("rocky");

console.log("Outer:", outer);
console.log("Shallow:", shallow);

// Example 3: Comparing objects
console.log({ x: 1 } === { x: 1 });
