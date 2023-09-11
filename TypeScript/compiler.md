# TS 실행

```
# nodejs 패키지 초기화
npm init

# npm library 설치
npm i @types/nod

# 타입스크립트 컴파일러 설치
npm install typescript -g

# 타입스크립트 컴파일러 실행
tsc [파일 경로]

# 자바스크립트 실행
node [파일 경로]

# 타입스크립트 실행 가능한 ts-node 컴파일러 설치
npm install ts-node -g

# ts-node 실행
ts-node [파일 경로]
```

# TS 컴파일러 옵션 설정

- nodejs 패키지 단위로 설정 가능 (프로젝트마다 설정 가능)

```
# 기본적인 컴파일러 옵션 파일 만들기
tsc --init
```

- tsconfig.json (타입스크립트 컴파일러의 설정파일)
- 기본적으로 모든 타입스크립트 파일은 전역모듈로 취급 받기 때문에 개별모듈로 취급하려면 export{}; 와 같은 코드를 넣어줘야함 아니면 컴파일 옵션에 moduleDetection을 추가해주기
