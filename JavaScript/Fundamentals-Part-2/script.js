"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

const interface = "Audio";

function logger() {
  console.log("My name is Subin");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");

// function declarations -> 정의 하기 전에 함수를 호출할 수 있다 (호이스팅 됨)
function calcAge1(birthYear) {
  return 2023 - birthYear;
}

const age1 = calcAge1(1996);

// function expression -> 정의 하기 전에 함수를 호출할 수 없음 (호이스팅X)
const calcAge2 = function (birthYear) {
  // anonymous function
  return 2023 - birthYear;
};

const age2 = calcAge2(1996);

console.log(age1, age2);

// Arrow Functions
const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(1996);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1996, "Subin"));
console.log(yearsUntilRetirement(1980, "Bob"));

//Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retire ${retirement} years`); // return 전에 넣어야 출력됨
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1996, "Subin"));
console.log(yearsUntilRetirement(1950, "Mike"));

// Coding challenge # 1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No team wins...`);
  }
};

checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);

// Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

//const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]); // Michael
console.log(friends[2]); // Peter

console.log(friends.length); // 3
console.log(friends[friends.length - 1]); // Peter (배열의 마지막요소 가져오기)

friends[2] = "Jay";
console.log(friends); // ['Michael', 'Steven', 'Jay'] Peter ==> Jay
// premitive values 만 immutable 하다
// array의 요소는 premitive values가 아니라서 바뀔 수 있음
// friends = ['Bob', 'Alice'] // 이렇게는 바꿀 수 없음

const firstName = "Subin";
const Subin = [firstName, "Kim", 2023 - 1996, "teacher", friends];
console.log(Subin);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

// Methods
const friends = ["Michael", "Steven", "Peter"];

// add elements
const newLength = friends.push("Jay"); // 요소 추가 & 추가된 배열의 길이 반환
console.log(friends);
console.log(newLength);

friends.unshift("John"); // 요소 맨 앞에 추가 & 추가된 배열의 길이 반환
console.log(friends);

// Remove elements
friends.pop(); // 마지막 요소 제거 & 제거된 요소 반환
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // 첫번째 요소 제거 & 제거된 요소 반환
console.log(friends);

// 요소 인덱스 찾기
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob")); // 없는 요소일때 -1 반환

// 요소가 배열 안에 있는지
// includes는 strict한 methods이기 때문에 타입이 다르면 false 반환
friends.push(23);
console.log(friends.includes("Steven")); // true
console.log(friends.includes("Bob")); // false
console.log(friends.includes("23")); // false
console.log(friends.includes(23)); // true

if (friends.includes("Steven")) {
  console.log(`You have a friend called Steven`);
}

// Coding challenge # 2
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);

// Object
const subin = {
  firstName: "Subin",
  lastName: "Kim",
  age: 2023 - 1996,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
// key - value 값
// array는 순서가 중요하지만 object는 순서가 중요하지 않다

// Dot vs Bracket Notation
console.log(subin);

console.log(subin.lastName); // lastName value값 가져오기
console.log(subin["lastName"]);

const nameKey = "Name";
console.log(subin["first" + nameKey]);
console.log(subin["last" + nameKey]);
// Dot은 반드시 .key값을 입력해야하지만 []는 안에 식을 넣어도 됨(속성 이름을 계산해야할 떄 쑴)

const interestedIn = prompt(
  "What do you want to know about subin? choose between firstName, lastName, age, job, and friends"
);
console.log(subin.interestedIn); // undefined
console.log(subin[interestedIn]); // teacher

if (subin[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! choose between firstName, lastName, age, job, and friends"
  );
}

// 요소 추가
subin.location = "Portugal";
subin["twitter"] = "@asdasd";
console.log(subin);

// Challenge
// "subin has 3 friends, and his best friend is called Micheal"
console.log(
  `${subin.firstName} has ${subin.friends.length} friends, and his best friend is called ${subin.friends[0]}`
);

// Object Methods
const subin = {
  firstName: "Subin",
  lastName: "Kim",
  birthYear: 1996,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2023 - birthYear;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2023 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2023 - this.birthYear; // this를 이용해 새로운 요소을 만들어낼 수 있음
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and she has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(subin.calcAge());

console.log(subin.age);
console.log(subin.age);
console.log(subin.age);

// Challenge
// "Subin is a 27-year old teacher, and she has a/no driver's license"
console.log(subin.getSummary());

// Coding Challenge # 3
const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI(); // 호출해야 mark.bmi가 나옴...
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})!`
  );
}

// Loop
// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}
// rep 이라는 변수를 선언 (rep은 계속 바뀌는 변수이기 떄문에 let을 사용)
// rep <= 10 가 true 일 때 동안 계속 실행
// rep++1 rep은 1씩 증가

// Looping Arrays
const subin = [
  "Subin",
  "Kim",
  2023 - 1996,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < subin.length; i++) {
  // Reading from subin array
  console.log(subin[i], typeof subin[i]);

  // Filling types array
  // types[i] = typeof subin[i];
  types.push(typeof subin[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < subin.length; i++) {
  if (typeof subin[i] !== "string") continue; // 타입이 스트링이 아니면 건너뛰기
  console.log(subin[i], typeof subin[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < subin.length; i++) {
  if (typeof subin[i] === "number") break; // 타입이 넘버면 break
  console.log(subin[i], typeof subin[i]);
}

// Looping Backwards
const subin = [
  "Subin",
  "Kim",
  2023 - 1996,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// 0, 1, 2, 3, 4
// 4, 3, 2, 1, 0

for (let i = subin.length - 1; i >= 0; i--) {
  console.log(i, subin[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------- Starting exercise ${exercise}-----------`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}

// The while loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

// 주사위의 숫자가 6이 나올때까지 돌리기
let dice = Math.trunc(Math.random() * 6) + 1; // 랜덤 숫자 생성 (1 - 6)

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end...`);
}

// Coding Challenge # 4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// 내가 쓴 코드
// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(tips[i] + bills[i]);
// }

// 아래같이 쓰면 calcTip 함수 계산을 한번만 하면 되므로 효율적임
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(tips, totals);

// 평균구하기
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
