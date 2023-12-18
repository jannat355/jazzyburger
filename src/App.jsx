import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Home from './pages/Home'
import Order from './pages/Order'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Footer from './layouts/Footer'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<Navbar/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/Order' element={<Order/>}/>
        </Route>

        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
      
      
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
