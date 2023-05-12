## useState vs useReducer

### useState

- 간단한 상태 관리
  - 값이 하나인 경우
  - 상태들이 서로 관련 없는 경우
- 컴포넌트 내에서 사용

### useReducer

- 복잡한 상태관리
  - 상태들이 서로 관련있거나 참조가 필요한 경우 (이커머스에서 제품, 카테고리 주문정보, 사용자정보, 쿼리정보 등을 담아야할때)
  - 로그인된 사용자의 권한을 확인해서 다른 화면을 보여주는 경우
- 여러 컴포넌트에서 상태가 공유되어야 할 때
  - ContextAPI(useContext)와 같이 사용하는 것이 일반적
- reducer를 따로 선언하는 것이 일반적

### useState vs useReducer

```react
`const [state, setState] = useState(initialState);`

`const [state, dispatch] = useReducer(reducer, initialState);`
```

- useState가 useReducer를 기반으로 만들어졌는데 값이 하나니까 reducer가 빠진...
- component안에서 관리를 한다면 useState만 써도 되고, 이 경우가 대부분임
- useReducer를 사용하는 것이 효율적인 경우
  - 관리해야하는 상태값들이 많을 때
  - 상태들이 서로 관련이 있을 때
  - 비지니스 로직 분리 
  - Immutability

## useMemo vs useCallback

### useMemo

- 함수의 결과를 cache하기 위해 사용
  - Expensive computation
- 조건에 따른 컴포넌트를 리턴할 때나 특정 변수를 계산할 때
- 초기렌더링보다는 cache되는 것을 고려할 때 re-rendering에 유리

### UseCallback

- 함수 자체를 cache하기 위해 사용
- dependency를 확인해야 하는 함수일 때
- ChildComponent에 prop으로 넘겨주는 함수일 때

## React18 새로운 hook

- useld
- useTransition
- useDeferredValue
- useSsyncExternalStore
- useInsertionEffect

## 전역 상태관리 툴

### Context API

### Redux

### Recoil