import './App.css';
import { createBrowserRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Detail />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
