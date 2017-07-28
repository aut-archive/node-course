/* Every */

function isBigEnough(element, index, array) { 
  return element >= 10; 
} 
[12, 5, 8, 130, 44].every(isBigEnough);   // false 
[12, 54, 18, 130, 44].every(isBigEnough); // true

/* Values */

let a = ['w', 'y', 'k', 'o', 'p']; 
let iterator = a.values();

console.log(iterator.next().value); // w 
console.log(iterator.next().value); // y 
console.log(iterator.next().value); // k 
console.log(iterator.next().value); // o 
console.log(iterator.next().value); // p

/* From */

const bar = ["a", "b", "c"];
Array.from(bar);
// ["a", "b", "c"]

Array.from('foo');
// ["f", "o", "o"]

// isArray
Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false

// of
Array.of(7);       // [7] 
Array.of(1, 2, 3); // [1, 2, 3]


// CopyWithin
['alpha', 'bravo', 'charlie', 'delta'].copyWithin(2, 0);

/* fill */
let numbers = [1, 2, 3]
numbers.fill(1);

// results in ["alpha", "bravo", "alpha", "bravo"]

/* Reverse */
let a = ['one', 'two', 'three'];
a.reverse(); 

console.log(a); // ['three', 'two', 'one']

/* shift */
let a = [1, 2, 3];
let b = a.shift();

/* sort */
let fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']

var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// sort by value
items.sort(function (a, b) {
  return a.value - b.value;
});

var myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
var removed = myFish.splice(myFish.length - 3, 2);

/* unshift */

var arr = [1, 2];

arr.unshift(0); // result of call is 3, the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-3]);
// arr is [[-3], -2, -1, 0, 1, 2]