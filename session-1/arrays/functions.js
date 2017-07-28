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

let items = [
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

let myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
let removed = myFish.splice(myFish.length - 3, 2);

/* unshift */

let arr = [1, 2];

arr.unshift(0); // result of call is 3, the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-3]);
// arr is [[-3], -2, -1, 0, 1, 2]

/* Concat */
let alpha = ['a', 'b', 'c'];

let alphaNumeric = alpha.concat(1, [2, 3]);

console.log(alphaNumeric); 
// results in ['a', 'b', 'c', 1, 2, 3]


let num1 = [[1]];
let num2 = [2, [3]];

let nums = num1.concat(num2);

console.log(nums);
// results in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);

console.log(nums);
// results in [[1, 4], 2, [3]]

/* includes */
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true

/* indexOf */
let array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0


/* join */
let a = ['Wind', 'Rain', 'Fire'];
a.join();      // 'Wind,Rain,Fire'
a.join(', ');  // 'Wind, Rain, Fire'
a.join(' + '); // 'Wind + Rain + Fire'
a.join('');    // 'WindRainFire'

/* lastIndexOf */
let numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2);     // 3
numbers.lastIndexOf(7);     // -1
numbers.lastIndexOf(2, 3);  // 3
numbers.lastIndexOf(2, 2);  // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3

/* toString */
let months = ['Jan', 'Feb', 'Mar', 'Apr'];
months.toString(); // "Jan,Feb,Mar,Apr"

/* entries */
let a = ['a', 'b', 'c'];
let iterator = a.entries();

console.log(iterator.next().value); // [0, 'a']
console.log(iterator.next().value); // [1, 'b']
console.log(iterator.next().value); // [2, 'c']

/* filter */
let words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

let longWords = words.filter(function(word){
  return word.length > 6;
});

// Filtered array longWords is ["exuberant", "destruction", "present"]

/* find */
function isBigEnough(element) {
  return element >= 15;
}

[12, 5, 8, 130, 44].find(isBigEnough); // 130

/* findIndex */
function isBigEnough(element) {
  return element >= 15;
}

[12, 5, 8, 130, 44].findIndex(isBigEnough); 
// index of 4th element in the Array is returned,
// so this will result in '3'

/* for */
let items = ['item1', 'item2', 'item3'];
let copy = [];

for (let i=0; i<items.length; i++) {
  copy.push(items[i])
}

/* forEach */
let items = ['item1', 'item2', 'item3'];
let copy = [];

items.forEach(function(item){
  copy.push(item)
});

/* keys */
var arr = ['a', , 'c'];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]


/* map */
var kvArray = [{key: 1, value: 10}, 
               {key: 2, value: 20}, 
               {key: 3, value: 30}];

var reformattedArray = kvArray.map(function(obj) { 
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;
});

// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}], 

// kvArray is still: 
// [{key: 1, value: 10}, 
//  {key: 2, value: 20}, 
//  {key: 3, value: 30}]

var total = [0, 1, 2, 3].reduce(function(sum, value) {
  return sum + value;
}, 0);
// total is 6

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
}, []);
// flattened is [0, 1, 2, 3, 4, 5]