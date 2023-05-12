### React.js를 쓰는 이유

- Node 기반의 Javascript UI 라이브러리

- 컴포넌트화 할 수 있어서 공통으로 사용되는 요소에 무언가 수정사항이나 문제가 발생했을 때 수정하기가 훨씬 쉬워짐 유지보수를 하기 쉬워짐 / 산탄총수술을 피할 수 있다
- React는 Component 기반의 UI 라이브러리 => 레고같이 맞춰서 쓰는 느낌

- 명령형 프로그래밍 (절차를 하나하나 다 나열해야함 예로 제이쿼리) 이 아닌 선언형 프로그래밍 (그냥 목적을 바로 말함) 임
- Virtual DOM 을 쓸 수 있음

### Creat Reactapp

```bash
npx -v # npx 버전 확인
node -v
npm -v
npm i # node_mudules 설치 (없을때)

npx create-react-app reactexam1 # React app 생성
npm start # localhost:3000
```

## JSX

- 닫는 태그 필수

```js
<image />
<br />
// 셀프클로징 태그
```

- 