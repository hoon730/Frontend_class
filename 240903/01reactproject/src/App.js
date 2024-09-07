import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

function App() {
  // const name = "Hoon";
  const BodyProps = {
    name: "David",
    location: "서울시",
    // favorList: ["파스타", "소금빵", "감바스"],
  };
  return (
    <div className="App">
      <Header />
      <Body {...BodyProps}/>
      {/* <Body name = {name} location = {"서울시"}/> */}
      <Footer />
    </div>
  );
}

export default App;
