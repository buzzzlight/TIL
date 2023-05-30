# 다양한 사용자 입력 처리

## 한 줄 입력 처리

```js
<div>
  <input
  name="author"
  value={state.author}
  // input에 값이 바뀌었을 때 onChange라는 prop에 전달한 콜백함수를 수행한다..
  />
</div>
```

## 여러 줄 입력 처리

```js
<div>
  <textarea
  name="content"
  value={state.content}
  onChange={handleChangeState}
  />
</div>
```

## 선택 박스 입력 처리

```js
<div>
  <span>오늘의 감정점수 : </span>
  <select
  naem="emotion"
  value={state.emotion}
  onchange={handleChangeState}
  >
  <option value={1}>1</option>
  <option value={2}>2</option>
  <option value={3}>3</option>
  <option value={4}>4</option>
  <option value={5}>5</option>
  </select>
</div>
```

## 사용자 입력 데이터 핸들링





## React에서 DOM 조작하기 - useRef

### 일기 저장 버튼을 클릭했을 때

```js
  const handleSubmit = () => {
    if (state.author.length < 1) {
      alert("작성자는 최소 한글자 이상 입력해주세요");
      // focus
      return;
    }

    if (state.content.length < 5) {
      alert("일기 본문은 최소 다섯글자 이상 입력해주세요");
      // focus
      return;
    }
    alert("저장 성공");
  };
```

### 작성자와 일기가 정상적으로 입력되었는지 확인하고 아니라면 focus하기

```js
import useRef from "react";
```



# React에서 배열 사용하기

## 리스트 렌더링 (데이터 조회)

### 배열을 이용하여 React에서 List 렌더링 해보고 개별적인 컴포넌트로 만들어보기



## 데이터 추가

### 배열을 이용한 React의 List에 아이템을 동적으로 추가해보기 with React처럼 생각하기



## 데이터 삭제

```js
  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };
```



## 데이터 수정

### 배열을 이용한 React의 List에 아이템을 동적으로 수정하기 with 조건부 렌더링

