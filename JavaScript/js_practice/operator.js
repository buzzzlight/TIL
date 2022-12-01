// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log("subin's \n\tbook")

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`)
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`)
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`)

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// ||(or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// &&(and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('nope!'); 
    }
    return true;
}

// !(not)
// 값을 반대로 바꿔서 출력
console.log(!value1); // false

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
// 타입을 자체 변경해서 검사
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
// 타입을 변경하지 않고 검사
// 웬만하면 === 쓴다 ...
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const subin1 = { name: 'subin'};
const subin2 = { name: 'subin'};
const subin3 = subin1;
console.log(subin1 == subin2); // false
console.log(subin1 === subin2); // false
console.log(subin1 === subin3); // true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = 'subin';
if (name === 'subin') {
    console.log('Welcome, Subin!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'subin' ? 'yes' : 'no');
// true면 왼쪽 값 출력, false면 오른쪽 값 출력
// 간단하게 출력할 때만 사용하는게 좋음

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}
// go away!

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}
// while: 3
// while: 2
// while: 1

// do while loop, body cod is executed first,
// then check the condition.
// 일단 do 블럭 실행함
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);
// do while: 0

// for loop, for(begin; condition; step)
// 1. begin 2. condition 조건에 맞으면 블럭 실행 3.step 실행 4. condition 조건에 ...
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}
// Big O 가 O(n^2)이므로 CPU에 좋지 않음 가급적 쓰지 않는 것이 좋음

// break, continue
// break는 아예 끝내는거고 countinue는 지금 것만 스킵하고 다음걸 실행 하는 것
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`q1. ${i}`);
}

for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(`q1. ${i}`);
    }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}