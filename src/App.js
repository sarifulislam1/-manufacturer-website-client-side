import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/shared/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Tools from './components/pages/Home/Tools';
import Footer from './components/shared/Footer';
import Purchase from './components/pages/Purchase/Purchase';
import Login from './components/pages/Login/Login';
import SignUp from './components/pages/Login/SignUp';
import RequireAuth from './components/pages/Login/RequireAuth';
import NotFound from './components/shared/NotFound';
import Blogs from './components/pages/Blogs/Blogs';
import Dashboard from './components/pages/Dashboard/Dashboard';
import MyReviews from './components/pages/Dashboard/MyReviews';
import MyOrders from './components/pages/Dashboard/MyOrders';
import InsertNewTool from './components/pages/Dashboard/InsertNewTool';
import MyProfile from './components/pages/Dashboard/MyProfile';
import AllUsers from './components/pages/Dashboard/AllUsers';
import RequireAdmin from './components/pages/Login/RequireAdmin';
import Payment from './components/pages/Dashboard/Payment';
import MyPortfolio from './components/pages/Dashboard/MyPortfolio';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/tools' element={<RequireAuth>
          <Tools></Tools>
        </RequireAuth>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard>
          </Dashboard>
        </RequireAuth>}>

          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='/dashboard/review' element={<MyReviews></MyReviews>}></Route>
          <Route path='/dashboard/payment/:id' element={<Payment></Payment>}></Route>
          <Route path='/dashboard/my-portfolio' element={<MyPortfolio></MyPortfolio>}></Route>

          <Route path='/dashboard/insert-new-tool' element={<InsertNewTool></InsertNewTool>}></Route>
          <Route path='/dashboard/my-profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='/dashboard/all-users' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
