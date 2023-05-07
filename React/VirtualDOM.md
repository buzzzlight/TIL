# VirtualDOM

## VirtualDOM의 역할

- 최적화된 업데이트로 사용자 경험 개선
  - 브라우저에 반영하기 전에 사전작업을 하는 것
- 업데이트에 우선순위 부여
  - Animation vs Text
- DOM 보다 업데이트가 빠름
- html을 직접적으로 업데이트 하지 않음
- 새로운 element가 업데이트된 경우 새로운 가상 DOM 생성 후 이전 DOM과 비교 후 차이가 있는 DOM만 업데이트
- 메모리 낭비가 덜함

### vite

- 컴파일 
- 번들링이 매우 빨라짐
- webpack, rollup, parcel등을 ESBuild라는 것으로 대체
- 번들링이 빠르면 빌드시간이 빠르다 (개발할 때 빠르다)
- hotflx할 때 좋다.

### createRoot()

- DOM Tree vs Virtual DOM Tree
- VirtualDOM Tree에서 `<div id="root"/>`를 나타내는 node를 생성함 (HostRoot)

HostRoot는 Fiber node

### Fiber

- 리액트 렌더링/업데이트의 가장 작은 단위
- work의 가장 작은 단위
- 효율적인 업데이트를 위해
  - work를 중지하고 필요 시 다시 시작할 수 있어야 함
  - 다른 종류의 work들에게 우선순위를 부여할 수 있어야 한다
  - 이미 완료된 work를 재사용 할 수 있어야 한다
  - work가 더이상 필요 없게 되면 버릴 수 있어야 한다

### render()

- Render phase
  - 업데이트를 수행해서 화면을 변경하는것
  - 화면에 업데이트 될 것을 미리 그려보는 것 
  - 실제로 화면에 렌더링 하는것은 아님, 뒷단에서 작업되고있는것
  - Render Phase 순서
    - `performUnitOfWork`
    - `beginWork`
    - `completeUnitOfWork`
    - `completeWork`
  - console.log()로 확인
- Commit phase
  - 변경된 화면을 실제 브라우저에 나타내는것
  - virtualDOM 에 작업된 사항을 실제 브라우저에 띄움
  - Current : 현재 브라우저에 보이는 DOM Tree
  - Work-in-progress: 업데이트 사항이 반영되는 중인 DOM Tree

## Reconciliation

- 업데이트가 발생할 때 기존의 DOM tree와 VirtualDOM tree의 차이점을 비교하는 방법
- DFS(Depth First Search)로 tree를 Traverse

## Render 효율

- 불필요한 jsx element는 없는 것이 좋음
- key를 잘 지정해주어야 함

