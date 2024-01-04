import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Home from './pages/Home'
import Order from './pages/Order'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Footer from './layouts/Footer'
import  { Toaster } from 'react-hot-toast';
// import Update from './pages/Update'
import Forgotpassword from './pages/Forgotpassword'
import ResetPassword from './pages/Resetpassword'
import Orders from './pages/Orders'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<Navbar/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/Order' element={<Order/>}/>
          <Route path='/Orders' element={<Orders/>}/>
     
        </Route>

        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Forgotpassword' element={<Forgotpassword/>}/>
        <Route path='/password/:resetToken' element={<ResetPassword/>}/>
      </Routes>
      
      
      <Footer/>
      <Toaster/>
      </BrowserRouter>
    </>
  )
}

export default App
