// 타입 별칭 (Type Alias)
type User = {
  id: number;
  name: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "홍길동",
  birth: "1348.03.02",
  bio: "하이",
  location: "서울",
};

let user2: User = {
  id: 2,
  name: "김철수",
  birth: "1968.03.02",
  bio: "하이",
  location: "서울",
};

// 인덱스 시그니처
// key와 value의 객체의 타입을 정의할 수 있음
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
};
