# 타입스트립트 기본 타입

## 원시타입 (Primitive Type)

>  하나의 값만 저장하는 타입

- number
- string
- boolean
- null
- undefined

```ts
// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// 리터럴
// 값을 타입인 것처럼 정해놓을 수 있다.
let numA: 10 = 10;
let strA: "hello" = "hello";
let boolA: true = true;
```
