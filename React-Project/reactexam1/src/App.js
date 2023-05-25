import React from "react";
// import "./App.css";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import Counter from "./Counter";
import Container from "./Container";

function App() {
  let name = "김수빈";

  const style = {
    App: {
      backgroundColor: "white",
    },
    h2: {
      color: "red",
    },
    bold_text: {
      color: "green",
    },
  };

  const number = 5;

  const counterProps = {
    a: 1,
    b: 2,
    initialValue: 5,
  };

  return (
    <Container>
      <div style={style.App}>
        <MyHeader />
        <h2 style={style.h2}>ㅎㅇ 리액트 {name}</h2>
        <b style={style.bold_text}>
          {number}는 {number % 2 === 0 ? "짝수" : "홀수"}
        </b>
        <Counter {...counterProps} />
      </div>
    </Container>
  );
}
// {}안에 삼항연산자를 활용해 조건에 따라 다른요소를 렌더링 할 수 있음 (조건부 렌더링)

export default App;
