import logo from './logo.svg';
import './App.css';
import NavBar from './components/shared/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Tools from './components/pages/Home/Tools';
import Footer from './components/shared/Footer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/tools' element={<Tools></Tools>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
