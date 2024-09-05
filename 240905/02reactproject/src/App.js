import './App.css';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoEditor />
      <div>Todo List</div>
    </div>
  );
}

export default App;


// Todo List

// Header Component : 오늘이 며칠인지 알려주는 컴포넌트 역할

// Editor Component  : 사용자가 오늘 해야 할 일을 입력할 수 있는도록 도와주는 컴포넌트 역활 

// List Component : Editor 컴포넌트를 통해서 사용자가 입력한 오늘 할 일이 출력되어지는 목록, 공간 역할



// 리액트 공부법

// 1. 각각의 개념 정의 확실하게!!

// 2. 큰 요소들 => 리액트 작동되는 원리 이해!!

// > 약 10여개 리액트 예제

// useState() : 컴포넌트를 만들면 거의 대부분의 활률로 무조건 state값을 관리해야하는 상황 발생
// - 사용자의 이벤트가 거의 대부분 발생
// - 가상돔 => 일반변수를 x // state관리!!

// useRef() : 특정 노드를 제어하고자 할 때, 혹은 컴포넌트 그 자체를 제어할 때

// useEffect() :컴포넌트가 어떤 단계 및 상황에 도착했을 때에 무언가를 실행시켜야할 때