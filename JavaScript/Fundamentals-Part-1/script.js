/*
let js = 'amazing';
console.log(40 + 8 - 10);

console.log("Subin");
console.log(27);

let firstName = "Subin";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 25;

let person = 'jonas';
let PI = 3.1415;

// 좋은 예
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

// 나쁜 예
let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true); // boolean
console.log(typeof javascriptIsFun); // boolean
console.log(typeof 23); // number
console.log(typeof 'Jonas'); // string

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun); // string

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year); // number

console.log(typeof null); // object << bug


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Kim';
console.log(lastName);


// Math operators
const now = 2023;
const ageSubin = now - 1996;
const ageSarah = now - 2018;
console.log(ageSubin, ageSarah);

console.log(ageSubin * 2, ageSubin / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Subin';
const lastName = 'Kim';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison operators
console.log(ageSubin > ageSarah); // true
console.log(ageSubin >= 27); // true

const isFullAge = ageSarah >= 18; // true


const now = 2037;
const ageSubin = now - 1996;
const ageSarah = now - 2018;

console.log(now - 1996 > now - 2018);

console.log(25 - 10 - 5);


let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageSubin + ageSarah) / 2;
console.log(ageSubin, ageSarah, averageAge);


const firstName = 'Subin';
const job = 'student';
const birthYear = 1996;
const year = 2037;

const Subin = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + '!';
console.log(Subin);

const subinNew = `I'm ${firstName}, a ${year - birthYear}years old ${job}!`;
console.log(subinNew);

console.log(`Just a regular string...`)

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


const age = 14;

if (age >= 18) {
  console.log('Sarah can start driving license 😉');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years 😀`)
}

let century;
const birthYear = 1991;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


// Coding Challenge #2

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const markBMI = massMark / (heightMark * heightMark);
const johnBMI = massJohn / (heightJohn * heightJohn);
console.log(markBMI, johnBMI);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
}



// type conversion
const inputYear = '1991'; // String이기 때문에
console.log(Number(inputYear));
console.log(inputYear + 18); // 199118
console.log(Number(inputYear) + 18); // 2009

console.log(Number('Subin')); // Nan (Not a number)
console.log(typeof NaN); // (invalid) number

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old'); // 'I am 23 years old' 숫자 -> 문자열
console.log('23' - '10' - 3); // 10 문자열 -> 숫자
console.log('23' + '10' + 3); // '23103' 숫자 -> 문자열
console.log('23' * '2'); // 46 문자 -> 숫자

let n = '1' + 1; // '11'
n = n - 1;
console.log(n); // 10

console.log(2 + 3 + 4 + '5'); // '95'
console.log('10' - '4' - '3' - 2 + '5'); // '15'

// Truthy and Falsy Values
// 5 falsy value: 0, '', undefined, null, NaN

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('')); // false
console.log(Boolean('Subin')); // true
console.log(Boolean({})); // true (empty object)

const money = 100;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log('You should get a job!');
}

let height = 0; // 버그 발생
if (height) {
  console.log('Height is defined');
} else {
  console.log('Height is UNDEFINED');
}


// Equality Operators == vs ===
// === 는 타입까지 같을 때 true
// == 는 type coercion 적용돼서 타입 달라도 true

const age = '18';
if (age === 18) console.log('You just became an adult! (strict)');
if (age == 18) console.log('You just became an adult! (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log('Cool! 23 is an amazing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number!')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7')
}

if (favourite !== 23) console.log('Why not 23?');


const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}


const day = 'monday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day...');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day...');
}

// Statements and Expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Subin'
console.log(`I'm ${2037 - 1991} years old ${me}`);

*/

const age = 23;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// const bill = 40;

// // if (50 <= bill <= 300) {
// //   console.log(`The bill was ${bill}, the tip was ${bill * 0.15}, and the total value ${bill + bill * 0.15}`);
// // } else {
// //   console.log(`The bill was ${bill}, the tip was ${bill * 0.2}, and the total value ${bill + bill * 0.2}`);
// // }

// 50 <= bill <= 300 ? console.log(`The bill was ${bill}, the tip was ${bill * 0.15}, and the total value ${bill + bill * 0.15}`)
// : console.log(`The bill was ${bill}, the tip was ${bill * 0.2}, and the total value ${bill + bill * 0.2}`)

const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
