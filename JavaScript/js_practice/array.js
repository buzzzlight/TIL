'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];


// 2. Index position
const fruits = ['🍉', '🍓'];
console.log(fruits);
// (2) ['🍉', '🍓']
console.log(fruits.length);
// 2
console.log(fruits[0]);
// 🍉
console.log(fruits[fruits.length - 1]);
// 🍓
console.log(fruits[-1]);
// undefined
console.log(fruits[2]);
// undefined


// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// 🍉
// 🍓

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
// callback function
fruits.forEach(function () {
  console.log('he');
})
// he
// he

fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
})
// 🍉 0 (2) ['🍉', '🍓']
// 🍓 1 (2) ['🍉', '🍓']

fruits.forEach(function (fruit, index) {
  console.log(fruit, index);
})
fruits.forEach((fruit, index) => {
  console.log(fruit, index);
})
// 🍉 0
// 🍓 1
fruits.forEach((fruit) => console.log(fruit));
// 🍉
// 🍓


// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍌','🥝');
console.log(fruits);
// (4) ['🍉', '🍓', '🍌', '🥝']

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);
// (3) ['🍉', '🍓']

// unshift: add an item to the beginning
fruits.unshift('🍌','🥝');
console.log(fruits);
// (4) ['🍌', '🥝', '🍉', '🍓']

// shift: remove an item to the beginning
fruits.shift();
console.log(fruits);
// (3) ['🥝', '🍉', '🍓']

// note!! shift, unshift are slower than pop, push

// splice: remove an item by index position
fruits.push('🍋', '🍇');
console.log(fruits);
// (5) ['🥝', '🍉', '🍓', '🍋', '🍇']

// fruits.splice(1);
// console.log(fruits);
// ['🥝']

fruits.splice(1, 1);
console.log(fruits);
// (4) ['🥝', '🍓', '🍋', '🍇']

fruits.splice(1, 1, '🍏', '🍅');
console.log(fruits);
// (5) ['🥝', '🍏', '🍅', '🍋', '🍇']

// combine two arrays
const fruits2 = ['🍍', '🍑'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);
// (7) ['🥝', '🍏', '🍅', '🍋', '🍇', '🍍', '🍑']


// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🥝'));
// 0
console.log(fruits.indexOf('🍗'));
// -1

// includes
console.log(fruits.includes('🍅'));
// true
console.log(fruits.includes('🍗'));
// false

// lastIndexOf
console.clear();
fruits.push('🥝');
console.log(fruits);
console.log(fruits.indexOf('🥝'));
// 0
// 제일 첫번째의 인덱스를 리턴
console.log(fruits.lastIndexOf('🥝'));
// 5
// 제일 마지막의 인덱스를 리턴