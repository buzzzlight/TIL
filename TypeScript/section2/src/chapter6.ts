// any
// 특정 변수의 타입을 확실히 모를 때 사용
// 모든 타입이 될 수 있다
// 타입을 지정하지 않으면 타입스크립트를 쓰는 이유가 없기 때문에 any 타입은 가급적 쓰지 않음

import { unzipSync } from "zlib";

let anyVar: any = 10;
// anyVar = "hello";

// anyVar = true;
// anyVar = {};
// anyVar = () => {};

// anyVar.toUpperCase();
// anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// any와는 다르게 unknown값을 변수에 넣을 수 없다
// 메서드나 연산도 불가능
// num = unknownVar;
// unknownVar.toUpperCase();

// 타입 정제
if (typeof unknownVar === "number") {
  num = unknownVar;
}
