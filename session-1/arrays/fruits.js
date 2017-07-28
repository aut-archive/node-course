// Creating simple array
let fruits = ['Apple', 'Banana'];
console.log(fruits.length);
// Getting items
let first = fruits[0];
// Apple
let last = fruits[fruits.length - 1];
// Banana
let newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]
let last = fruits.pop(); // remove Orange (from the end)
// ["Apple", "Banana"];

// this is how to remove an item
let removedItem = fruits.splice(1, 1);