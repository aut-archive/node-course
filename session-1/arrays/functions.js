// Every

function isBigEnough(element, index, array) { 
  return element >= 10; 
} 

[12, 5, 8, 130, 44].every(isBigEnough);   // false 
[12, 54, 18, 130, 44].every(isBigEnough); // true

// Values

let a = ['w', 'y', 'k', 'o', 'p']; 
let iterator = a.values();

console.log(iterator.next().value); // w 
console.log(iterator.next().value); // y 
console.log(iterator.next().value); // k 
console.log(iterator.next().value); // o 
console.log(iterator.next().value); // p

// From

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

// results in ["alpha", "bravo", "alpha", "bravo"]