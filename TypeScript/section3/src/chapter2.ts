// unknown 타입
// 전체집합
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  //   let num: number = unknownVar;
  //   let str: string = unknownVar;
  //   let bool: boolean = unknownVar;
}

// never 타입
// 공집합
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운캐스팅
  //   let never1: never = 10;
  //   let never2: never = "string";
  //   let never3: never = true;
}

// void 타입
// undefined 타입의 슈퍼타입
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }
  let voidVar: void = undefined;
}

// any 타입
// never 타입으로 다운캐스팅은 불가
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;

  undefinedVar = anyVar;

  //   neverVar = anyVar;
}
