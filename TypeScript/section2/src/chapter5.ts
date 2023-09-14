// enumerable type 타입
// 열거형 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 자바스크립트엔 없고 타입스크립트에서만 제공됨
// enum은 컴파일해도 사라지지 않고 자바스크립트의 객체로 변환됨

// 숫자형 enum
enum Role {
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "김철수",
  role: Role.ADMIN, // 0은 관리자
  language: Language.korean,
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 1은 일반 유저
  language: Language.english,
};

const user3 = {
  name: "김영희",
  role: Role.GUEST, // 2는 게스트
};

console.log(user1, user2, user3);
