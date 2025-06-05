import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard  from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
  import { ToastContainer, toast } from 'react-toastify';

export default function App() {
  let [login,setlogin]=useState(false);
  return (
    <div className=''>
<BrowserRouter>
<Navbar login={login} setlogin={setlogin}/>   
<Routes>
<Route path='/' element={<Home/>} ></Route>
<Route path='/dashboard' element={<Dashboard/>} ></Route>
<Route path='/login' element={<Login login={login} setlogin={setlogin}/>} ></Route>
<Route path='/signup' element={<Signup login={login} setlogin={setlogin}/>} ></Route>

</Routes>
</BrowserRouter>
<ToastContainer position='top-center' autoClose={3000}/>
   </div>
  )
}
