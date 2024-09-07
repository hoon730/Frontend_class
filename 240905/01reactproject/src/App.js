import './App.css';
import { useState, useEffect, useRef } from "react";
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const didMountRef = useRef(false);

  const handleSetCount = (value) => {
    setCount(count + value);
  };


  // useEffect(() => {
  //   console.log("업데이트 : ", count, text);
  // }, [count, text]);

  // useEffect(() => {
  //   console.log("컴포넌트 업데이트");
  // });

  useEffect(() => {
    if(!didMountRef.current) {
      didMountRef.current = true
      console.log(didMountRef.current);
    } else {
      console.log("컴포넌트 업데이트!");
    }
  })

  useEffect(() => {
    console.log("컴포넌트 마운트!");
  }, []);

  // useEffect(() => {
  //   const intervalID = setInterval(() => {
  //     console.log("깜빡");
  //   }, 1000);

  //   return () => {
  //     console.log("클린업!");
  //     clearInterval(intervalID);
  //   }
  // });

  const handleChangeText = (e) => {
    setText(e.target.value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText}/>
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount}/>
      </section>
    </div>
  );
}

export default App;

// 5. hooks
// - useState(): state 변수값 관리.제어
// - useRef(): VD에서 특정 Node 요소를 찾아서 제어
// - useEffect(): 리액트 컴포넌트 "라이프 사이클" = "생애주기" 제어
// > 탄생(*컴포넌트) > 성장(*업데이트) => 죽음(*컴포넌트 실행 x)

// 1) 버튼을 클릭하게 된다면 해당 버튼에 입력된 값을 찾아온다
// 2) 찾아온 해당값을 현재 카운트영역으로 출력해준다

// > state > useState
// > state를 관리하는 요소 > 최상위부모

// 1) useEffect 기능

// 1. 기본기능: 의존성 배열에 입력된 state의 값이 업데이트가 되면 콜백함수를 실행시킨다. ex) 넷플릭스 사이트를 만들었는데, 최초에는 API 데이터를 굳이 가져올 필요가 없는 상황 => 영화 썸네일을 클릭할 때에만 모달페이지를 만들면서 동시에 영화 API 데이터를 찾아와야하는 상황

// 2. 컴포넌트가 실행되자마자 무조건 실행기능!!
// > useEffect에 의존성 배열이 존재하지 않는 경우, 컴포넌트 안에 있는 값을 렌더링 할 때마다 무조건 콜백함수를 실행시킴!!!

// ex) 넷플릭스 사이트를 만들었는데, 상단 슬라이드 => API 데이터를 활용해서 무조건 생성상황

// 3. 컴포넌트 안에 있는 요소들을 렌더링 할 때만 실행, 최초에 컴포넌트가 마운트 되는 시점 x
// > 비동기처리 방식으로 A데이터 먼저 실행 => B데이터 나중에 실행
// > useRef(false)를 활용해서 사용!!!

// 4. 컴포넌트가 마운트 되는 시점에 딱 1번만 실행!!!
// > useEffect() 함수 내 의존성 배열 안에 있는 값이 존재하지 않는 경우

// 5. 컴포넌트가 언마운트 되는 경우!!!
// > 기존에 컴포넌트가 마운트된 이후에 실행하고 있던 어떤 작업이 종료가 되었다는 것을 의미!!!
// > 자연스럽게 언마운트의 단계 // 의도적으로 언마운트의 단계
// > 기존 작업을 종료시키는 명칭 : 클린업!!!!

// 리액트에서는 컴포넌트의 생애주기 !!!!

// 1) 브라우저가 컴포넌트 파싱하는 순간 : 마운트

// 2) UI 내 state 상태변화가 업데이트 : 렌더링

// 3) 컴포넌트가 언마운트가 되려면 : 클린업

// 3) 더이상 컴포넌트를 사용하지 않는 순간 : 언마운트

// 단로회로평가 !!!! => JSX문업 : "문장"x // "식" => 
// AND 단락평가!!! => 좌항이 참이면 => 우항을 실행