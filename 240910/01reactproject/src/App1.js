import './App.css';
import { useState } from 'react';

function App1() {
  const [count, setCount] = useState(0);
  console.log(count)

  const plus = () => {
    // setCount(count + 1);
    // setCount(count + 2);
    // setCount(count + 3);
    setCount
    console.log(count)
  }

  const minus = () => {
    setCount(count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 2);
    setCount((count) => count + 3);
    console.log(count)
  }

  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

export default App1;

// - state = 상태 // 변수

// - setState() => state // 비동기적으로 작동

// 자바스크립트는 태생적으로 싱글 스레드
// > 비동기x //

// 콜백함수 => 비동기처리!!!
// > 콜백 의미!!!
// > 함수 제어 > "함수" 호출 타이밍
