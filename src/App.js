import logo from './logo.svg';
import './App.css';
import NavBar from './components/shared/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Tools from './components/pages/Home/Tools';
import Footer from './components/shared/Footer';
import Purchase from './components/pages/Purchase/Purchase';
import Login from './components/pages/Login/Login';
import SignUp from './components/pages/Login/SignUp';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/tools' element={<Tools></Tools>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
