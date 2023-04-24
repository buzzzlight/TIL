# Objects

- one of the JavaScript's data types
- a collection of related data and/or functionality
- Nearly all objects in JavaScript are instances of Object
- object = { key : value }; object는 key와 value의 집합체
- array는 순서가 중요하지만 object는 순서가 중요하지 않다

## Literals and properties

```js
// primitive 타입은 변수 하나당 하나의 값만 받을 수 있음
const name = 'subin';
const age = '4';
// 이름과 나이를 각각 전달해줘야함
print(name, age);
// 두가지의 변수를 받아 올 수 있도록 함수를 만들어야함
function print(name, age) {
  console.log(name);
  console.log(age);
}
// 인자가 많아지면 추가해야할 것들이 많아지기 때문에
// 관리가 힘들고 그룹으로 묶을 수도 없음
// 그래서 Obejct를 쓰는 것임.


// Object
// Object 만드는 두가지 방법
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const subin = { name: 'subin', age: 4 };
print(subin);
// subin
// 4
```

#### JavaScript는 dynamically typed language이기 때문에...

- Object 정의 후에 property 추가, 삭제 가능
- 유지보수가 힘들고 에러가 발생할 수 있기 때문에 가능한 사용하지 않는게 좋음

``` js
// can add properties later

subin.hasJob = true;
subin.location = 'Portugal';
subin['twitter'] = '@asdasd';

console.log(subin.hasJob);
// true
```

```js
// can delete properties later

delete subin.hasJob;
console.log(subin.hasJob);
// undefined
```

## Computed properties

- 코딩할땐 `.` 을 써서 값을 받아오는게 일반적임
- Computed properties는 runtime에서 key가 결정될 때 씀 (실시간으로 원하는 key의 값을 받아오고 싶을 때)

```js
console.log(subin.name);
// subin

// Computed properties
console.log(subin['name']);
// subin

// key should be always string
// key는 항상 string 타입으로 지정해서 받아와야함
console.log(subin[name]);
// undefined

subin['hasJob'] = true;
console.log(subin.hasJob);
// true


function printValue(obj, key) {
  console.log(obj.key);
  // obj에 key라는 property가 없기 때문에 에러뜸
}
printValue(subin, 'name');
// undefined
printValue(subin, 'age');
// undefined

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(subin, 'name');
// subin
printValue(subin, 'age');
// 4
```

```js
// Dot vs Bracket Notation
console.log(subin);

console.log(subin.lastName); // lastName value값 가져오기
console.log(subin['lastName']);

const nameKey = 'Name';
console.log(subin['first' + nameKey]);
console.log(subin['last' + nameKey]);
// Dot은 반드시 .key값을 입력해야하지만 []는 안에 식을 넣어도 됨(속성 이름을 계산해야할 떄 쑴)

const interestedIn = prompt('What do you want to know about subin? choose between firstName, lastName, age, job, and friends');
console.log(subin.interestedIn); // undefined
console.log(subin[interestedIn]); // teacher
```

## Property value shorthand

```js
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4};
const person4 = makePerson('subin', 30);
console.log(person4);
// {name: "subin", age: 30}

function makePerson(name, age) {
  return {
    // key와 value의 이름이 동일할 때 생략 가능
    name,
    age,
  }
}
```

## Constructor Function

```js
const person4 = new Person('subin', 30);
console.log(person4);
// {name: "subin", age: 30}

// 다른 계산을 하지 않고 오브젝트만 생성하는 함수 이름은 대문자로 시작
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}
```

## in operator: property existence check (key in obj)

- 해당 object 안에 key가 있는지 없는지 확인

```js
console.log('name' in subin); // true
console.log('age' in subin); // true
console.log('random' in subin); // false
console.log(subin.random); // undefined
```

## for..in vs for..of

- for (key in obj)

```js
console.clear(); // 이전 log들 지워짐
for (key in subin) {
  console.log(key);
}
// name
// age
// hasjob
```

- for (value of iterable)

```js
const array = [1, 2, 4, 5];
for(value of array) {
  console.log(value);
}
// 1
// 2
// 4
// 5

// 안좋은 방법
for(let i = 0; i < array.length ; i++ ) {
  console.log(array[i]);
}
// 1
// 2
// 4
// 5
```

## cloning

- Object.assign(dest, [obj1, obj2, obj3...])
- js에 기본적으로 들어있는 Object의 assign을 사용

```js
const user = { name: 'subin', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);
// {name: "coder", age: "20"}


// object cloning
const user4 = {};
Object.assign(user4, user);
console.log(user4);
// {name: "coder", age: "20"}
const user4 = Object.assign({}, user);
console.log(user4);
// {name: "coder", age: "20"}

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);
// {name: "coder", age: "20"}


// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
// blue
console.log(mixed.size);
// big
// 뒤에 있는 인자들로 덮어씌워짐
```
