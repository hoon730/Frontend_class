import './App.css';
import Header from './components/Header';
// import Body1 from './components/Body1';
// import Body2 from './components/Body2'
// import Body3 from './components/Body3'
// import Body4 from './components/Body4';
import Body5 from './components/Body5';
import Footer from './components/Footer';

function ChildComp() {
  return <div>child component</div>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Body5 />
      <Footer />
    </div>
  );
}

export default App;


// React 특징
// - Props: 객체의 속성 유사한 형태 띄고 있음

// -1) 단일 값으로도 전달 가능
// > Props의 값을 전달하는 쪽 key = { value }
// > Props의 값을 전달받는 쪽 Object

// -2) 여러개의 값으로도 전달 가능
// > Props를 여러개 작성해서 전달하는 방법
// > Props로 보내고자 하는 요소들을 객체로 새성
// - 전개 연산자 구문으로 전달하는 방법

// -3) 컴포넌트의 형태를 띄고있는 자료역시 전달 가능
// > 자식요소의 컴포넌트 형태 전달 가능!!
// >  Props의 값을 받아오는 쪽에서 children이라는 key값으로도 찾아올 수 있었음

// - 컴포넌트 간 Props 값을 전달하는데 있어서 대원칙!!
// 1) 반드시 부모 => 자식(*일방통행만 가능)
// - 자식 => 부모 x
// - 자식 => 자식 x

// -Event: JS에서 언급했던 이벤트와 동일!!!

// - State: 상태!!

// -> React Hooks

// 1) useState: 리액트는 가상돔을 사용하기 때문에 반드시 하나의 UI화면에서 상태변화가 발생되는 요소는 state라는 변수안에 담아서 관리를 해야 한다!!! 이때, state라는 변수는 리액트 안에 내장되어 있는 리액트 훅 함수 중 "useState"를 사용하면 된다!!!

// useState라는 훅 함수는 state라는 변수와 setState() 함수를 모두 반환하는데, 이때 setState()함수만이 유일하게 state변수를 제어할 수 있다!!

//  2) useRef: UI화면에 출력된 요소들을 제어할 수 있는 리액트 훅 함수