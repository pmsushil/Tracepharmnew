import React,{useEffect} from 'react'
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Orders from './Components/Orders'
import Products from './Components/Products'
import Layouts from './Components/Shared/Layouts'
import Tenants from './Components/Tenants'
import Users from './Components/Users'
import Adduser from './pages/Adduser'
import { Link, useNavigate } from "react-router-dom";
import Login from './pages/Login'
import Signup from './pages/Signup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Landing from './pages/Landing'

const App = () => {

  // const usenavigate = useNavigate();

  //   useEffect(() => {
  //    let email=sessionStorage.getItem('email');
  //    if(email==='' || email ===null){
  //       usenavigate('/login');
  //    }
  //   }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
      <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/home' element={<Layouts/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='tenants' element={<Tenants/>}/>
          <Route path='users' element={<Users/>}/>
          <Route path='adduser' element={<Adduser/>}/>

        </Route>
       
      </Routes>
    </Router>
  )
}

export default App
