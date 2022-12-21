# Function

- fundamental building block in the program

- subprogram, 여러번 재사용 가능

- 한가지의 task나 어떠한 값을 계산하기 위해 쓰임

## Function declaration

- function name(param1, param2) { body... return; }
- one function === one thing 하나의 함수는 한가지의 일만 하게 됨
- naming: doSomething, command, verb 동사로 이름 지정하기
- 세분화해서 함수를 만드는것이 좋음
  - e.g. `createCardAndPoint` -> `createCard`, `createPoint`

- function is object in JS
- [TypeScript Playground](https://www.typescriptlang.org/play?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCbvCwDKgU8JkY7p7ehCTkVDQS2E6gnPCxGcwmZqDSTgzxxWWVoASMFmgYkAAeRJTInN3ymj4d-jSCeNsMq-wuoPaOltigAKoASgAywhK7SbGQZIIz5VWCFzSeCrZagNYbChbHaxUDcCjJZLfSDbExIAgUdxkUBIursJzCFJtXydajBBCcQQ0MwAUVWDEQC0gADVHBQGNJ3KAALygABEAAkYNAMOB4GRonzFBTBPB3AERcwABS0+mM9ysygc9wASmCKhwzQ8ZC8iHFzmB7BoXzcZmY7AYzEg-Fg0HUiQ58D0Ii8fLpDKZgj5SWxfPADlQAHJhAA5SASPlBFQAeS+ZHegmdWkgR1QjgUrmkeFATjNOmGWH0KAQiGhwkuNok4uiIgMHGxCyYrA4PCCJSAA)

```js
function printHello() {
  console.log('Hello');
}
printHello();
// Hello

function log(message) {
  console.log(message);
}
log('Hello@');
log(1234);
// Hello@
// 1234
```

```typescript
// TypeScript
// type이 중요한 경우 typescript 씀
// 함수의 interface만 봐도 이름, 파라미터, 타입, 리턴값을 한눈에 확인할 수 있음
function log(message: string): number {
  console.log(message);
  return 0;
}
```

## Parameters

- primitive parameters: passed by value 메모리에 값이 저장되어 있기 때문에 값 그대로 전달
- object parameters: passed by reference

```js
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);
// {name: 'coder'}
```

### Default parameters (added in ES6)

```js
function showMessage(message, from) {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');
// Hi! by undefined
// from 값이 없기 때문에 undefined

// if문으로 default값 지정
function showMessage(message, from) {
  if (from === undefined) {
    from = 'unknown';
  }
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');
// Hi! by unknown

// 파라미터에 바로 default값 지정 ⭐
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');
// Hi! by unknown
```

### Rest parameters (added in ES6)

```js
// ... 배열 형태로 전달
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// dream
// coding
// ellie
```

## Local scope

```js
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);

  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  console.log(childMessage); // printAnother블럭 밖이므로 에러가 발생
}
printMessage();
```

## Return a value

- return 이 없는 함수들은 return undefined가 들어있는 것과 같음

```js
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);
// sum: 3
```

### Early return, early exit

```js
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
    // 블럭 안에서 많은 코드를 작성하게 되면 가독성이 떨어짐
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
  // 조건에 맞을때만 코드 실행하기
}
```

## Function expression

- a function declaration can be called earlier than it is defined (hoisted)
- 함수 선언 이전에 함수를 호출해도 값이 나옴 (호이스팅)
- a function expression is created when the execution reaches it

```js
// 함수를 선언함과 동시에 print라는 변수에 할당됨
const print = function () {
  // anonymous function (function 이름이 없는 것)
  console.log('print');
};
print();
// print

const printAgain = print;
printAgain();
// print
```

## Callback function using function expression

```js
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
const printNo = function print() {
  console.log('no!');
  print(); // recursions
};

randomQuiz('wrong', printYes, printNo);
// no!
randomQuiz('love you', printYes, printNo);
// yes!
```

## Arrow function

- always anonymous

```js
const simplePrint = function () {
  console.log('simplePrint!');
};
// Arrow function
const simplePrint = () => console.log('simplePrint!');

const add = function (a, b) {
  return a + b;
};
// Arrow function
const add = (a, b) => a + b;

// 블럭을 넣을 수도 있음 이 경우에는 return 필요
const simpleMultiply = (a, b) => {
  //do something more
  return a * b;
};
```

## IIFE

- Immediately Invoked Function Expression
- 선언함과 동시에 함수 호출할 때
- `()` 추가

```js
(function hello() {
  console.log('IIFE');
})();

// IIFE
```

## Quiz

- function calculate (command, a, b)

- command: add, subtract, divide, multiply, remainder

```js

```