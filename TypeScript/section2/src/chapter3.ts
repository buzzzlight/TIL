// 객체 object
// 객체 리터럴 타입 사용

// 구조적 타입 시스템 (Property Based Type System)
let user: {
  id?: number;
  // ?를 붙이면 있어도 되고 없어도 되는 선택적(optional) 프로퍼티
  name: string;
} = {
  id: 1,
  name: "홍길동",
};

let config: {
  readonly apiKey: string;
  // readonly를 붙이면 값 변경 불가능
} = {
  apiKey: "MY API KEY",
};
