# Class

- 연관있는 데이터를 한데 묶어놓는 컨테이너

- fields, methods로 구성

- fields만 있는 class === data class

## Class vs Object

### class

- template (붕어빵 틀, 청사진)
- declare once (한번만 선언)
- no data in
- 데이터는 들어있지 않고 어떤 데이터가 들어올 수 있는지만 정함

### object

- 데이터를 넣어서 만드는것이 object (붕어빵)
- instance of a class
- data in
- created many times

## Class declarations

```js
// class 선언하기

class Person {
	// constructor
    // object를 만들 때 필요한 데이터 전달
	constructor(name, age) {
		// fields (속성)
		this.name = name;
		this.age = age;
	}

	// methods (행동)
	speak() {
		console.log(`${this.name}: hello!`);
	}
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
// ellie
console.log(ellie.age);
// 20
ellie.speak();
// ellie: hello!
```

## Getter and setters

- 사용자가 잘못된 값을 입력하는 것을 방지

```js
class User {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

    // 값 return
	get age() {
		return this._age;
	}
	
    // 값 설정 (value 필요)
	set age(value) {
		// if (value < 0) {
		// 	throw Error('age can not be negative');
		// }
		this._age = value < 0 ? 0 : value;
	}
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);
// 0
```

## Fields (public, private)

- 최근에 추가되어 잘 쓰이지 않음

```js
class Experiment {
	publicField = 2;
	#privateField = 0; // class 내부에서만 값이 보여지고 변경 가능함
}
const experiment = new Experiment();

console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined
```

## Static properties and methods

- 최근에 추가되어 잘 쓰이지 않음

```js
class Article {
	static publisher = 'Dream Coding';
	constructor(articleNumber) {
		this.articleNumber = articleNumber;
	}

	static printPublisher() {
		console.log(Article.publisher);
	}
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher); // Dream Coding
Article.printPublisher(); // Dream Coding
```

## Inheritance (상속 & 다양성)

- a way for one class to extend another class

```js
class Shape {
	constructor(width, height, color) {
		this.width = width;
		this.height = heigth;
		this.color = color;
	}

	draw() {
		console.log(`drawing ${this.color} color!`);
	}

	getArea() {
		return this.width * this.height;
	}
}

// extends를 이용해서 Shape를 그대로 상속 받는 Rectangle이라는 Class를 만들 수 있음
class Rectangle extends Shape {}

// 필요한 함수만 재정의(overrriding) 할 수 있음 (다양성)
class Triangle extends Shape {
	draw() {
        // 부모의 draw 함수 호출
		super.draw();
		console.log('삼각형')
	}
	getArea() {
		return (this.width * this.height) / 2;
	}
    // Object의 toString 함수를 overriding 할 수 있음
	toString() {
		return `Triangle: color: ${this.color}`:
	}
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); 
// drawing blue color!
console.log(rectangle.getArea()); 
// 400

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
// drawing red color!
// 삼각형
console.log(triangle.getArea());
// 200
console.log(triangle.toString());
// Triangle: color: red
```

## instanceOf

- 왼쪽에 있는 object가 오른쪽에 있는 class의 instance인지 아닌지 확인
- true or false

```js
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
// js에서 만든 모든 object, class들은 js의 Object를 상속한 것
console.log(triangle instanceof Object); // true
// js Object에서 이미 정해져있는 method를 쓸 수 있음
console.log(triangle.toString()); // Triangle: color: red
```

## Reference

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference