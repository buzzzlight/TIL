# React Router Dom

## React Router V6

> React에서 CSR 기반의 페이지 라우팅을 할 수 있게 해주는 라이브러리

### 1. Path Variable

- `useParams`

리액트 훅은 아니ㅏ지만 별도의 라이브러리가 자신의 라이브러리 기능을 더 편하게 사용할수있게 만들어준 사용자 정의 훅들을 커스텀훅이라고 부른다

경로에 변수 전달

```js
<Route path="/diary/:id" element={<Diary />} />
```

```js
import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h1>Home</h1>
      <p>이곳은 일기 상세 페이지 입니다.</p>
    </div>
  );
};

export default Diary;
```

### 2. Query String

- `useSearchParams`

- url과 함께 데이터를 전달할 수 있는 가장 쉽고 간단한 방법

```
/edit?id=10&mode=dark
```

```js
import { useSearchParams } from "react-router-dom";

const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // setSearchParams : searchParams를 변경시키는 역할

  const id = searchParams.get("id");
  console.log("id : ", id);

  const mode = searchParams.get("mode");
  console.log("mode : ", mode);
  
  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지 입니다.</p>
    </div>
  );
};

export default Edit;
```

### 3. Page Moving

- `useNavigate`

페이지를 이동시키는데 함수를 이용하여 유저가 액션을 하지 않았을 때도 강제로 이동시키는 ..

로그인이 필요한 페이지인 경우, 로그인이 안된 사용자를 강제로 로그인 페이지로 가게 할 때

링크태그를 클릭 안했을때도 의도적으로 페이지를 바꿔버릴 수 있다

````js
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정 페이지 입니다.</p>
      <button onClick={() => setSearchParams({ who: "buzz" })}>
        QS 바꾸기
      </button>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Home으로 가기
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;
````



