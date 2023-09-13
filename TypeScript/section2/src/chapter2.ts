// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "iam"];
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양한 경우
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 자바스크립트엔 없고 타입스크립트에서만 제공되는 타입
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
  ["홍길동", 1],
  ["김영희", 2],
  ["김철수", 3],
  // [4, "김땡땡"]
];
// 튜플을 쓰면 값을 잘못 넣지 않도록 방지할 수 있다
