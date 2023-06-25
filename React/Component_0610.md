## Atomic Design Pattern

> 인터페이스 디자인 시스템을 만드는 방법론 + 디자인 패턴

- https://atomicdesign.bradfrost.com/

- Html element는 원소들과 같다

![스크린샷 2023-06-18 오후 11.38.52](/Users/subin/Desktop/스크린샷 2023-06-18 오후 11.38.52.png)

![스크린샷 2023-06-18 오후 11.39.24](/Users/subin/Desktop/스크린샷 2023-06-18 오후 11.39.24.png)이 방법론을 사용하면 인터페이스를 구성하는 기본 단위를 명확하게 구분할 수 있기 떄문에 디자인 시스템을 일관성 있게 유지하며 개발을 더욱 효율적으로 할 수 있음

또한 컴포넌트를 재사용할 수 있으며 수정이 용이하여 유지보수에 용이함

정해진 기준이 없음 (기준이 다 다름)

- Atom (조합 X)
  - 인터페이스를 구성하는 가장 작은 단위
- Molecule (조합 O)
  - Atom을 조합하여 만든 더 복잡한 컴포넌트
- Organism (조합 O)
  - Molecule을 조합하여 만든 더 복잡한 컴포넌트
- Template
  - Organisms, Atom과 Molecule을 조합하여 만든 레이아웃
- Page
  - 여러 Template과 Organism을 조합하여 만든 페이지

아토믹 디자인 방법론이란

원자와 분자를 구성하는 인터페이스를 만드는 방법론

약속을 만드는 것

### 인터페이스

- 자동차 대시보드, 깜빡이
- 충전 포트
  - 휴대용선풍기 충전포트를 만들 때 => Usb c 표준 문서를 보고 인터페이스를 확인
- 표준 문서 = 인터페이스
- 가위바위보 규칙 / 신호등 같은 약속

- 예시를 참고하여 스스로 기준과 조합을 찾아가는게 좋음







- 아토믹 디자인 패턴은 정답은 아님
- 하지만 개발을 배우며 학습하는 관점에서는 정말 좋은 예시이자 방법론임
- 아토민 디자인 방법론을 구성하는 기본 단위(인터페이스) 에 정답이 있는 건지..

- React 스럽게 생각하며 / 회사의 도메인 컨텍스트를 생각하며 아토믹 디자인 방법론을 지킬 수 있을까 ? 가 문제라고 생각



### 리액트스러운 컴포넌트 생각하기

- React는 디자인을 바라보는 방식과 앱을 빌드하는 방식
- React로 사용자 인터페이스를 빌드하는 방법
  1. 컴포넌트라는 조각으로 분해
  2. 각 컴포넌트에 대해 서로 생김새가 다른 상태 정의
  3. 컴포넌트를 서로 연결해 데이터가 흐르도록 한다

### 결론

- 리액트 컴포넌트를 만들때 아토믹 디자인 패턴을 도입하는 것
- 아토믹 디자인 패턴을 구성하는 기준 + 리액트스러운 컴포넌트 조합
  - +@ 회사에서 추구하는 비즈니스 가치, 도메인 컨텍스트 고려
  - Time(시간), Project(프로젝트), Occasion(상황) 고려해야함
- 아토믹 디자인 패턴은 누군가가 만든 아토믹 디자인 방법론에 개발자가 원하는 디자인 패턴을 더한 것
- 아토믹 디자인 방법론이란 누군가가 화학적인 요소들을 html 요소들에 더해서 이러한 방법론이 있다고 정의한것 (?)
- 아토믹 디자인 패턴을 도입할 때 힘든 이유  = 인터페이스를 나누는 기준이 정답이 없고 사람마다 다름 왜냐면 아토믹 디자인 방법론을 설계한 저자가 정의한건 디자인 명세와 생김새, 방법론으로 정의했기 때문에 컴포넌트를 개발하는 사람들이 생각하는 것과 다름



도메인 컨텍스트란 ?



## CDD (Component-Driven Development)

> 컴포넌트 주도 개발 / 컴포넌트 중심으로 UI를 개발하는 방법론

- 컴포넌트 주위에 개발 프로세스를 고정하는 개발 방법론
- 컴포넌트 수준에서 시작해 페이지나 화면 수준에서 끝나는것 (bottom up)
- 점점 더 많은 회사들이 고품질의 보다 복잡한 사용자 인터페이스를 구축하기 위해 채택하고 있는 개발 방법론

## 상향식 컴포넌트 개발 (Bottom Up)

- 가장 작은 단위의 하위 컴포넌트들을 먼저 개발

- 이런 작은 하위 컴포넌트들을 조합하여 전체적인 컴포넌트를 완성

- 일반 사용자뿐만 아니라 개발자도 사용할 수 있는 컴포넌트를 고려해야함

- YAGNI

  - 숙련도가 부족하다면 YAGNI에 빠지기 쉽다

- 예시)

  - 작고 하찮을정도로 귀여운 컴포넌트 ===> Next.js Page

  - Atom ======> Page

## 하향식 컴포넌트 개발 (Top Down)

- 하향식 컴포넌트 개발은 전체 시스템의 큰 구성 요소들을 먼저 개발
- 이후에 중복되는 작은 컴포넌트를 분리하거나 공동 혹은 교차되는 컴포넌트를 분리
- 전체 시스템의 디자인과 구조를 먼저 구성하고 이를 바탕으로 세부적인 요소들을 개발
- 르블랑의 법칙 (Leblance's Law)
  - 한번 작성한 쓰레기 코드를 나중에 수정하는 일은 결코 없다

- 예시
  - Next.js Page ===> 작고 하찮을정도로 귀여운 컴포넌트
  - Page(페이지) => 템플릿 => 올가니즘 => 몰레큘 => Atom



# 제어 컴포넌트와 비제어 컴포넌트

## Controlled Component (제어 컴포넌트)

> Push & SIngle Source of Truth

- React에 값이 완전히 제어되는 Input Element - input handler에 value를 onchange로 단 것
- State를 값으로 넘기고 그 State을 다를수 있는 핸들러를 콜백으로 넘긴다
- 값을 -로 받는다
- 사용자가 입력하면 값을 계속 push 하는  것
- 진실의 원천이 유지되기 쉬움 (?)
- DOM에 바뀌는 상태, React 상태, DOM 객체에 들어있는 값이 계속 진실의 원천으로 동기화가 됨
- 내가 제어하고 내가 push 하고 진실의 원천으로 계쏙 상태가 유지된다
- 값 유효성 체크를 해야하는 경우(비밀번호)에 제어 컴포넌트 사용
- 타이핑마다 유효성 체크

```js
// input의 값은 항상 React state의 값
<input value={value} onChange={handeChange}/>
```

```js
const PushComponent = () => {
  // inputValue => 렌더링 시점마다 고유의 값을 가진다..
  const [inputValue, setInputValue] = useState('')
  
  // 이벤트 핸들러를 항상 작성해야한다 (push 해야 하기 때문)
  const handleChange = ({ target }) => {
    setInputValue(target.value)
  }
  
  return (<input
    value = {inputValue}
	onChange = {handleChange}
	<h2>
    {inputValue}
	</h2>
  />)
}
```



## Uncontrolled Component (비제어 컴포넌트)

> Pull & get State

- 전통적인 HTML처럼 DOM에 제어되는 Input Element
- 오직 사용자만 값과 상호작용
- 값을 -로 사용한다

- 내가 제어하지 않고 필요할때 상태를 꺼내옴
- 상태를 꺼내오기 전엔 렌더링이 일어나지 않음
- 값 유효성 체크를 해야할 필요가 없이 값을 전달하는 경우엔 비제어 컴포넌트 사용
- form 제출 시 한번 유효성 체크

```js
<input value={value} onChange={handleChange} ref={inputRef}/>
```

```js
const PullComponent = () => {
  // 렌더링시에는 원하는 값을 볼 수 없다
  // 개발자가 직접 트리거해야한다
  const inputRef = useRef('')
  
  // 이벤트 핸들러를 항상 작성해야한다 (push 해야 하기 때문)
  // 항상 쓸 필요는 없다 <=== 이게 핵심
  // 비제어 컴포넌트는 필요한 시점에 트리거 하기 때문
  const handleChange = ({ target }) => {
    inputValue.current.value = target.value
  }
  
  return (<input
	onChange = {handleChange}
	ref = {inputRef}
	<h2>
    {inputValue.current.value}
	</h2>
  />)
}
```



|             | Controlled (제어)                                            | Uncontrolled (비제어)                                        |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 지향점      | Push                                                         | Pull                                                         |
| 사용성      | 항상 진실의 원천을 유지                                      | 값을 담아내는 방법 필요<br />값을 가져오는 트리거 포인트 필요<br />그리고 이 모든것을 관리하는 코드 직접 작성 |
| 성능        | 잦은 리렌더링                                                | 구현하는 방법에 따라 다르지만 성능에 이점이 있을 수 있음     |
| 동적 핸들링 | 상태를 중심으로 개발하기 때문에 상태 변경에 따른 핸들링이 용이함 | DOM을 직접 조작하기 때문에 핸들링이 어렵고 값 비싼 비용 지불 |
| 유효성 검사 | 상태 변경 => UI 자동으로 업데이트<br />이러한 자동 업데이트로 인해 개발자가 별도의 업데이트 코드를 작성할 필요가 없음 | DOM을 직접 조작하기 때문에 핸들링이 어렵고 값 비싼 비용 지불 |

### 제어 vs 비제어 컴포넌트가 중요한 이유

- CDD (컴포넌트 주도 개발)에 엄청난 연향을 끼침
- 컴포넌트를 만들고 구성하는데 코드레벨, 설계에 엄청난 영향을 줌

 

## 스토리북 상호작용 테스트

### TDD (Test-Driven-Development)

- 테스트 주도 개발
- https://martinfowler.com/bliki/TestPyramid.html

- UI 테스트 시 비용이 많이들고 느리다 (코드를 작성하기 위한 노력 비용)

create react app 시 jest와 rtl(react testing library) 자동으로 깔림 

테스트 도구 - jest

- 이제는 피라미드 x .. 테스트 트로피를 생각 ..



### 테스팅 트로피

![Shapes from top to bottom: End to end (triangle), Integration (hexagon), Unit (trapezoid), and Static (trapezoid)](https://pbs.twimg.com/media/DVUoM94VQAAzuws?format=jpg&name=900x900)

- 트로피에 페인트를 칠할 때, 맨 위 꼭대기를 칠하려면 붓을 들고 올라가야 한다
- **올바른 테스트 전략을 선택하는 것**이 벽을 칠하기 위한 붓을 선택하는 것과 같다
- 만약 미세한 붓을 사용하게 된다면 작업시간이 매우 오래걸리고 표면이 고르지 않을 것

#### 테스팅 트로피의 테스트 종류

- End to End
  - 사용자 입장에서 애플리케이션이 잘 동작하는지 전체적으로 테스트
  - 일반적으로 전체 애플리케이션(프론트엔드 및 백엔드 모드)을 실행, 테스트는 실제 사용자가 사용하는 것처럼 앱과 상호작용
- Integration
  - 여러 유닛 테스트를 합친 것
  - 여러 단위가 함께 상호 작용
  - 실제 DB, 브라우저 없이 큰 규모의 기능이나 하나의 페이지가 잘 작동하는지 테스트
  - 통합 테스트의 범주는 회사마다 사람마다 다름
- Unit
  - 기능의 개별적인 단위나 하나의 컴포넌트를 테스트
- Static
  - 코드 작성 레벨에서 오타와 타입에러를 확인
  - 구문 오류, 나쁜 코드 스타일, 잘못된 API 사용 등을 Linit
  - Prettier / typescript 등등 ..



### 올바른 테스트 전략 - Redux 예시

- 테스트 전략 예시: Redux에 모든 중요한 코드를 넣고 있다 그렇다면 redux만 테스트해도 안전한 앱을 만들 수 있지 않을까 ?

- Redux만 테스트 하더라도 다 테스트를 하는게 아닌 단위를 나눠서 테스트 할 수 있다



### 테스트 도구

- Jest
  - 거의 모든 기능과 플랫폼을 지원하는 JavaScript Testing Framework
- Vitest
  - 빠른 속도를 지향하는 단위 테스트 프레임워크 (Jest API 호환, HMR, TS, JSX, ESM 지원)
- React Testing Library
  - BDD 방법론에 어울리며 간결하면서도 꼭 필요한 API 지원
  - Jest와 jsdom 기반의 브라우저 DOM Testing
- Enzyme
  - React Virtual DOM Testing
- Storybook + Chromatic
  - 컴포넌트 주도의 독립적인 개발 환경 제공
  - 스냅샷 테스트 지원
  - 테스트에 용이한 Addon 지원
- Cypress, Playwright
  - E2E or 통합 테스트
- Flow, TypeScript
