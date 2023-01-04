# Array

## Declaration

```js
const arr1 = new Array();
const arr2 = [1, 2];
```

## Index position

```js
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
```

## Looping over an array

> 배열의 모든 요소 출력하는 세가지 방법

### for

```js
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// 🍉
// 🍓
```

### for of

```js
for (let fruit of fruits) {
  console.log(fruit);
}
// 🍉
// 🍓
```

### forEach

```js
// forEach는 callback function를 받아옴
fruits.forEach(function () {
  console.log('he');
})
// he
// he
// fruits 배열의 인자가 2개이므로 he가 2번 출력됨

fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
})
// 🍉 0 (2) ['🍉', '🍓']
// 🍓 1 (2) ['🍉', '🍓']

// 보통 array는 잘 받아오지 않음
fruits.forEach(function (fruit, index) {
  console.log(fruit, index);
})

// 이름이 없는 함수의 경우 => arrow function으로 표현 가능
fruits.forEach((fruit, index) => {
  console.log(fruit, index);
})
// 🍉 0
// 🍓 1

// 괄호도 생략 가능
fruits.forEach((fruit) => console.log(fruit));
// 🍉
// 🍓
```

## Addition, deletion, copy

### `push`

- add an item to the end
- 맨 뒤에 인자 추가

```js
fruits.push('🍌','🥝');
console.log(fruits);
// (4) ['🍉', '🍓', '🍌', '🥝']
```

### `pop`

- remove an item from the end
- 맨 뒤 인자 삭제

```js
fruits.pop();
fruits.pop();
console.log(fruits);
// (3) ['🍉', '🍓']
```

### `unshift`

- add an item to the beginning
- 맨 앞에 인자 추가

```js
fruits.unshift('🍌','🥝');
console.log(fruits);
// (4) ['🍌', '🥝', '🍉', '🍓']
```

### `shift`

- remove an item to the beginning
- 맨 앞 인자 삭제

```js
fruits.shift();
console.log(fruits);
// (3) ['🥝', '🍉', '🍓']
```

### 주의할 점❗

- `shift`, `unshift` are slower than `pop`, `push`
- `pop`, `push` 는 배열의 맨 뒤 빈공간에 data를 추가했다 삭제했다 하기때문에 기존에 들어있던 data들은 움직이지 않아도 됨 => 빠른 operation
- `unshift` 처럼 배열의 맨 앞에 data를 추가하려면 맨앞에 있던 data를 먼저 하나 뒤로 옮기고, 그 다음 data를 또 하나 뒤로 옮기고 해서 모든 데이터를 하나 뒤로 옮겨야 하므로 `push`보다 훨씬 느림
- `shift`도 맨 앞의 data를 지우고 그 뒤에 있던 data들을 하나씩 땡겨와야 하기 떄문에 `pop`보다 훨씬 느림
- 배열의 길이가 길수록 `shift`와 `unshift`는 가능하면 쓰지 않는것이 좋음
- 중간에 data를 넣고 빼는것도 index를 이용해서 하기때문에 빠름

### `splice`

- remove an item by index position
- 지정된 위치에서 data 삭제
- splice(start: number, deleteCount?(optional): number)

```js
fruits.push('🍋', '🍇');
console.log(fruits);
// (5) ['🥝', '🍉', '🍓', '🍋', '🍇']

// fruits.splice(1);
// console.log(fruits);
// ['🥝']
// 지울 갯수를 지정하지 않으면 모든 데이터를 지워버림

fruits.splice(1, 1);
console.log(fruits);
// (4) ['🥝', '🍓', '🍋', '🍇']

// 지운 자리에 데이터 추가
fruits.splice(1, 1, '🍏', '🍅');
console.log(fruits);
// (5) ['🥝', '🍏', '🍅', '🍋', '🍇']
```

### combine two arrays

```js
const fruits2 = ['🍍', '🍑'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);
// (7) ['🥝', '🍏', '🍅', '🍋', '🍇', '🍍', '🍑']
```

## Searching

### `indexOf`

- data의 인덱스 번호를 찾는 함수

```js
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🥝'));
// 0
console.log(fruits.indexOf('🍗'));
// -1
```

### `includes`

- 배열에 data가 있는지 없는지 확인하는 함수

```js
console.log(fruits.includes('🍅'));
// true
console.log(fruits.includes('🍗'));
// false
```

### `lastIndexOf`

- 찾는 데이터가 중복일때, `indexOf`는 첫번째에 있는 데이터의 인덱스 번호를 return하고 `lastIndexOf`는 가장 마지막에 있는 데이터의 인덱스 번호를 return

```js
fruits.push('🥝');
console.log(fruits);
console.log(fruits.indexOf('🥝'));
// 0
// 제일 첫번째의 인덱스를 리턴
console.log(fruits.lastIndexOf('🥝'));
// 5
// 제일 마지막의 인덱스를 리턴
```