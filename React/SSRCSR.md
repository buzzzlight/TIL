### Sever-Side Rendering vs Client-Side Rendering

- 예전엔 컴퓨터 성능이 좋지 않아서 서버에서 모든 파일들을 다 만들어서 html을 다 전달해야 했음

- Static Side Generation
  - 이미 만들어진 서버에 있는 html파일들을 불러오는 것
  - /home, /list, /mypage  등등에 접근할 때마다 해당 html파일을 호출해서 가져옴
- AJAX
  - json으로 데이터를 주고받을 수 있게 됨
  - html 파일을 가져오고
  - javascript를 활용해서 서버에 데이터 호출
  - 데이터를 json으로 받아와서 화면에 보여줌
  - SPA 등장 => React를 비롯한 Client-side rendering이 뜨기 시작

### Sever-Side Rendering

- next js 가 뜨면서 많이 회자됨
- 리액트18 부터는 next js를 안쓰고도 가능해짐
- 더 오래된 기술
- static이 사실 Sever Side Rendering
- 서버쪽에서 렌더링 준비를 끝마친 상태로 클라이언트에 전달하는 방식
- 서버에 접근하면 'index.html' 을 만들어서 전송함
  - 비어있지 않아서 CSR보다 렌더링 빠름
  - 자바스크립트 코드도 같이 보내줌
- 장점
  - 첫페이지 로딩이 빠름
  - index.html에 이것저것 들어있어서 SEO에 좋음
- 단점
  - index.html을 서버에서 다시 불러오는 것
  - 서버에 지속적인 요청을 보내기 때문에 서버에 부하가 걸릴 수 있음
  - 동적인 javascript가 붙을때까지 interactive하지 않음,
- SEO때문에 요즘 다시 뜨는 추세

### Client-Side Rendering

- SSR과 달리 렌더링이 클라이언트 쪽에서 일어남 

- 서버에서 index.html을 클라이언트에게 전송
  - index.html에는 아무것도 없음
  - main.tsx (app.js) 에서 application에서 필요한 소스코드를 불러옴
- 장점
  - 요즘 트렌드 / 개발하기 편함
- 단점
  - 소스코드가 커서 첫 페이지 로딩이 오래걸림 (사용자가 빈 화면을 보고 있게될수있음)
  - index.html이 비어있기 때문에 SEO에 좋지 않다 (크롤링 시 크롤링 할 게 없음)

```js
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
```

### Static Site Generation

- 지킬, 개츠비, 휴고, 깃북 등등
- 웹사이트를 미리 렌더링해서 정적인 HTML, CSS, JavaScript 파일로 만드는 방식
- 'index.html'들을 생성해서 서버에 미리 배포하는 것
- Javascript 파일을 얹어서 주면 동적으로 작동할 수 있음
- 블로그, 문서 페이지, 소규모 웹 사이트 등에 많이 사용

### Frontend MSA

> Microservices Architecture

- 하나의 프로젝트를 여러 개의 작은 독립적인 서비스로 분할하고, 이러한 서비스들이 협력하여 애플리케이션을 구축
- Monolithic vs MSA
  - 하나가 다 처리하느냐 여러개 나눠서 처리하느냐
- 어느정도 규모가 있는 서비스가 아니라면 MSA는 무의미함
- 배포/운영/관리가 편해질 수 있음
- 번들링을 부분적으로만 하면 배포가 빨라질 수 잇음

### 디자인패턴

- 요즘은 거의 atomic + react-query
- 디자인패턴
- Atomic 패턴
  - 사용자 인터페이스(UI) 요소를 구성하는 작은 독립적인 구성 요소를 생성하고 조합하여 일관된 디자인과 재사용성을 갖춘 UI를 구축하는 패턴
  - Atoms(원자), Molecules(분자), Organisms(유기체), Templates(템플릿), Pages(페이지)
  - 쪼개는데 정해진 기준은 없다
- 최선의 디자인 패턴은 없음
  - 필요에 맞게
  - 컨벤션에 맞게
  - 요즘 이게 힙하니까 이걸 따른다는 하지 않아도 됨
  - 운영하는 서비스에 가장 적합한 디자인패턴 선택하는게 좋다

### 테스트코드

- Unit Test
  - 함수, 컴포넌트가 독립적으로 잘 작동하는지 확인하는 것
  - 디펜던시 신경 안쓰고 이것만 잘되는지 확인
  - text input/이메일 /비번 형식 에러 체크
- Integration Test
  - 여러 함수들 또는 여러 컴포넌트들이 같이 잘 동작(상호작용)하는지 확인하는 것
  - 이메일/비번이 잘 될때 버튼이 잘 눌리는지
- E2E test
  - 실제 사용자의 흐름으로 시스템의 동작을 검증

