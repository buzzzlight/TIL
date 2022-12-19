# JavaScript data types

## MDN 문서를 활용한 문법 학습

- https://developer.mozilla.org/ko/docs/Web/JavaScript
- https://developer.mozilla.org/ko/docs/Learn/JavaScript
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide

- 프로그래밍 언어에서 가장 중요한것: 입력 연산 출력 + 전송

## async vs defer

### head 안에 script

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="operator.js"></script>
</head>
<body>
</body>
</html>
```

- js 파일 사이즈가 크고 인터넷이 느릴 경우 사용자가 웹사이트를 보는데까지 많은 시간 소요

### body 끝부분에 script

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div></div>
    <script src="operator.js"></script>
</body>
</html>
```

- 기본적인 html 컨텐츠를 빨리 볼 수 있지만 js 의존도가 높은 웹사이트라면 사용자가 정상적인 페이지를 보는데까지 많은 시간 소요

### head + async

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script async src="operator.js"></script>
</body>
</head>
<body>
    <div></div>
</html>
```

- `async`는 boolean 타입의 속성값이기 때문에 선언하는것만으로도 사용 가능
- 브라우저가 async를 만나면 병렬로 js파일을 fetching 하게 되고, fetching 완료 후 다운로드 받은 js 파일을 실행하게 됨
- 다운로드 받는 시간을 절약할 수 있지만 여전히 시간이 소요됨

### head + defer

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script defer src="operator.js"></script>
</body>
</head>
<body>
    <div></div>
</html>
```

- 병렬적으로 js를 다운받고 html parsing이 끝난 뒤 js 실행

- 가장 시간 소요가 적고 효율적이고 안전함

### use strict

- 바닐라 자바스크립트로 개발할때 맨 위에 `'use strict';` 선언하기
- 자바스크립트 엔진이 더 효율적으로 빠르게 자바스크립트 분석 가능

## Variable

### `let`

- 변수 선언 키워드

- rw (read/write) 읽기, 쓰기(수정) 가능

- added in ES6
- mutable type

```js
// Global Scope
let globalName = 'global name'; 
// Block 밖에서 선언 시 Block 안에서나 밖에서나 출력 가능
// global 변수들은 어플리케이션이 실행되는 순간부터 끝날 때까지 메모리 안에 항상 탑재되어 있기 때문에 최소한으로 쓰는 것이 좋음
// 가능하다면 class나 함수 필요한 부분에서만 쓰는것이 좋음

// Block Scope
// Block Scope 안에서 선언 시 Block 밖에서는 출력 불가능
{
  let name = 'Subin';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name); // 출력되지 않음
console.log(globalName); // global name
```

### `var`를 쓰지 않는 이유

- 변수 선언하기도 전에 값을 할당할 수 있고, 값을 할당하기전에도 출력가능(undefined), 블록스콥이 없음 (무시함)
- 변수를 선언하기 전에 값을 할당하고 출력을 시도하면 에러가 나는게 정상인데 var는 그렇지 않음
- var hoisting (move declaration from bottom to top)
  - 어디에 선언했냐에 상관없이 항상 제일 위로 선언을 끌어올려주는 것

- 빠르게 만들때는 유연한 언어지만 규모있는 프로젝트에서는 위험부담이 있어 쓰지 않음

### `constant`

- 값을 선언함과 동시에 할당한 이후로 값을 절대 바꿀 수 없음 (immutable type)

- 변수의 값이 변경될 특별한 이유가 없다면 const를 쓰는것이 좋음

- use const whenever possible

- only use let if variable needs to change

- r (read only)

- immutable data type을 쓰는 이유
  - **security** - 보안상의 이유 해커들이 값을 변경할 수 없게 한다
  - **thread safety** - 다양한 thread들이 동시에 접근해서 값을 변경할 수 있는데 그것을 방지할 수 있음
  - **reduce human mistakes**
  


```js
const daysInWeek = 7;
const maxNumber = 5;
```

## Variable types

- primitive, single item 
  - `number`, `string`, `boolean`, `null`, `undefined`, `symbol` 

  - 값 자체가 메모리에 저장됨

- object
  - single item들을 하나로 묶어서 박스로 관리할 수 있게 해줌

  - box container

- function, first class function
  - function도 다른 데이터 타입처럼 변수에 할당이 가능
  - 함수의 파라미터로도 전달이 되고 return값으로도 가능


### `number`

- 정수든 소수점이든 상관없이 type이 number로 지정됨

```js
const count = 17; //integer
const size = 17.1; // decimal number

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// value: 17, type: number
// value: 17.1, type: number
```

- ⭐ special numeric values ⭐
  - infinity, -infinity, NaN
  - 나누고자 하는 값이 0인지 아닌지, 숫자가 맞는지 확인하지 않고 연산을 하게되면 에러가 발생할 수 있으므로 연산을 할때 그 값이 valid 한지 확인하는 과정이 중요함

```js
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// Infinity
// -Infinity
// NaN
```

- `bigInt`
  - -2^53 ~ 2^53 범위 밖에 있는 숫자를 표현할 때
  - 숫자 끝에 n 추가
  - 거의 안쓰임

```js
const bigInt = 12345678923423423422434234234234234234n; // over (-2**53 ~ 2**53)

console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// value: 12345678923423423422434234234234234234, type: bigint
```

### `string`

```js
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// value: hello brendan, type: string
// value: hi brendan!, type: string
// value: hi brendan!, type: string
```

### `boolean`

- false : 0, null, undefined, NaN, ''

- true : any other value

```js
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// value: true, type: boolean
// value: false, type: boolean
```

### `null `

- 텅 빈 empty 값으로 할당

```js
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// value: null, type: object
```

### `undefined`

- 선언은 되었지만 아무것도 값이 지정되어 있지 않음

- 텅텅 비었는지 값이 지정되어있는지 정해져있지않음

- 아무런 값이 지정되어있지 않은 상태

```js
let x = undefined; // 또는 let x;
console.log(`value: ${x}, type: ${typeof x}`);

// value: undefined, type: undefined
```

### `symbol`

- create unique identifiers for objects

- map이나 다른 자료구조에서 고유한 식별자가 필요하거나 동시다발적으로 일어날수있는 코드에서 우선순위를 주고싶을때, 고유한 식별자가 필요할때 쓰여짐

```js
// 동일한 id로 symbol을 만들어도 다른 symbol로 만들어짐
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false

// Symbol.for을 쓰면 동일한 symbol로 만들어짐
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // ture

// 출력할때 .description 으로 string으로 변경해서 출력해야함
console.log(`value: ${symbol.description}, type: ${typeof symbol1}`);
// value: id, type: symbol
```

### `object`

- real-life object, data structure
- 일상생활에서 보는 물건과 물체들을 대표할 수 있는 박스형태

```js
// subin 이라는 object
// subin 은 const로 지정되었기 때문에 다른 값으로 할당이 불가하지만 그 안에 subin.name, subin.age 변수는 다른 값으로 변경이 가능

const subin = { name: 'subin', age: 20 };
subin.age = 21;
```

## Dynamic typing: dynamically typed language 

- C, Java
  - statically typed language
  - 변수를 선언할 때 어떤 타입인지 결정해서 타입을 같이 선언함 

- JavaScript

  - dynamically typed language 
  - 선언할 때 어떤 타입인지 선언하지 않고 런타임(프로그램이 동작)할때 할당된 값에 따라 타입이 변경될 수 있음

  - dynamically typed language는 좋은 아이디어가 있을때 빠르게 프로토타입을 만들떄는 유용한 언어지만 다수의 엔지니어들이 규모가 있는 프로젝트를 만들 때는 에러 발생이 잦을 수 있음 => TypeScript 사용

```js
let text = 'hello';
console.log(text.charAt(0)); 
// h

console.log(`value: ${text}, type: ${typeof text}`);
// value: hello, type: string

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
// value: 1, type: number

text = '7' + 5; // 5를 string으로 인식
console.log(`value: ${text}, type: ${typeof text}`);
// value: 75, type: string

text = '8' / '2'; // number로 인식
console.log(`value: ${text}, type: ${typeof text}`);
// value: 4, type: number

console.log(text.charAt(0));
// Uncaught TypeError

// 처음 h였던 text.charAt(0)가 타입이 여러번 바뀌면서 마지막에 출력했을땐 에러가 뜨게됨
```
