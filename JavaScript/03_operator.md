# operator

### String concatenation

- 문자열 연산

```js
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log("subin's \n\tbook")

// my cat
// 12
// string literals: 1 + 2 = 3
// subin's 
// 		book
```

### Numeric operators

- 숫자 연산

```js
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 2
// 0
// 1
// 1
// 1
// 8
```

### Increment and decrement operators

- ++, -- operators

```js
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)
// preIncrement: 3, counter: 3

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`)
// postIncrement: 3, counter: 4

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`)
// preDecrement: 3, counter: 3

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`)
// postDecrement: 3, counter: 2
```

### Assignment operators

- = operators

```js
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;
```

### Comparison operators

- <, >, <=, >=

```js
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// false
// false
// true
// true
```

### Logical operators

- `||` (or)
- `&&` (and)
- `!` (not)

```js
const value1 = false;
const value2 = 4 < 2; // false

// ||(or), finds the first truthy value
// 하나라도 true이면 true 반환
// value1, value2가 false, check() 함수가 true 이므로 값은 true
// ⭐ or 연산에서는 true가 나오는 순간 연산을 멈추기 때문에 연산을 많이하는 함수를 제일 앞에 두는 것은 효율적이지 않음 ⭐
// 심플한 value item을 맨 앞에 두는 것이 효율적 
console.log(`or: ${value1 || value2 || check()}`);
// or: true

// &&(and), finds the first falsy value
// 모두 true여야 true 반환
// 하나라도 false이면 false 반환
// ⭐ and 연산에서는 false가 나오는 순간 연산을 멈추기 때문에 연산을 많이하는 함수를 제일 앞에 두는 것은 효율적이지 않음 ⭐
// 심플한 value item을 맨 앞에 두는 것이 효율적
console.log(`and: ${value1 && value2 && check()}`);
// and: false

// null 체크할 때
// often used to compress long if-statement
// nullableObject && nullableObject.something
if (nullableObject != null) {
    nullableObject.something;
}

function check() {
  for (let i = 0; i < 10; i++) {
	// wasting time
	console.log('nope!'); 
  }
  return true;
} // true

// !(not)
// 값을 반대로 바꿔서 출력
console.log(!value1); // false
```

### Equality

- `==`
- `===`

```js
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
```

### Conditional operators

- `if`
- `else if` 
- `else`

```js
const name = 'subin';
if (name === 'subin') {
  console.log('Welcome, Subin!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unknown');
}

/// Welcome, Subin!
```

### Ternary operator

- `?`

```js
// condition ? value1 : value2;
console.log(name === 'subin' ? 'yes' : 'no');
// true면 왼쪽 값(yes) 출력, false면 오른쪽 값(no) 출력

// 간단하게 출력할 때만 사용하는게 좋음
```

### Switch operator

- if 문에서 else, if가 여러개 반복 될 때 switch 사용 고려
- TypeScript에서 정해져 있는 type을 검사할 때 사용 

```js
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
```

### Loops

- `while`

```js
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
```

- `do while`

```js
// do while loop, body cod is executed first,
// then check the condition.
// 일단 do 블럭 실행한 뒤에 조건이 맞는지 검사
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);
// do while: 0
```

- `for`

```js
// for loop, for(begin; condition; step)
// 1. begin 2. condition 조건에 맞으면 블럭 실행 3.step 실행 4. condition 조건에 맞으면 블럭 실행 5. step 실행 6. condition...
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}
// for: 3
// for: 2
// for: 1

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    // for 안에서 let이라는 지역 변수 선언
    console.log(`inline variable for: ${i}`);
}
// inline variable for: 3
// inline variable for: 1
```

- `nested loop`

```js
// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}
// Big O 가 O(n^2)이므로 CPU에 좋지 않음 가급적 쓰지 않는 것이 좋음
```

- `break`, `continue`

```js
// break는 아예 코드 실행 끝냄
// countinue는 지금 것만 스킵하고 다음 step 실행

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
```

