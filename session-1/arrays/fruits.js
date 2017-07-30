// Creating simple array
let fruits = ['Apple', 'Banana'];
let newFruits = []
// console.log(fruits.length);
// // Getting items
// let first = fruits[0];
// // Apple
// // let last = fruits[fruits.length - 1];
// // Banana
let newLength = fruits.push('Orange');
// ["Apple", "Banana", "Orange"]
console.log(newLength)

for(let item in fruits) {
    console.log(item)
}

let numOfElements = fruits.length

for(let i = 0; i < numOfElements; i++) {
    newFruits.push(fruits.pop())
}

console.log(newFruits)
for(let i = 0; i < numOfElements; i++) {
    fruits.push(newFruits.pop())
}
console.log(fruits)
// this is how to remove an item
// let removedItem = fruits.splice(1, 1);