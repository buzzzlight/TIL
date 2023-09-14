// void 타입
// void -> 공허 -> 아무것도 없음
// 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

// 아무런 값도 반환하지 않을 때
function func2(): void {
  console.log("hello");
}

// 오직 undefined만 할당할 수 있음
let a: void;
a = undefined;
// strictNullChecks 옵션을 끄면 Null 할당 가능
// a = null;

// never 타입
// 존재하지 않는, 불가능한 타입

// 값을 반환을 할 수 가 없는 함수일 때
// 반환값이 있는것이 모순일때
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

// undefined, null도 할당하지 못함
// 그 어떤값도 저장 불가능..
