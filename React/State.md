# State

- 계속해서 변화하는 특정 값

- 그 값에 따라 다른 동작을 하게함

- 예) 다크모드 (Dark, Light 두가지의 상태가 있음)

## Counter 예제

### Counter.js

```js
import React, { useState } from "react";

const Counter = () => {
  // 0에서 출발
  // 1씩 증가하고
  // 1씩 감소하는
  // count 상태

  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default Counter;
```

- 컴포넌트의 state가 바뀌면 컴포넌트가 re-render 됨
- `+`와 `-`를 누를 때 마다 re-render 됨

### Usestate

```js
const [count, setCount] = useState(0);

// count: 상태의 값
// setCount: count의 상태값을 변화시키는 상태변화 함수
// (0): 초기값
```

