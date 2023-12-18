import React, { useState } from 'react'
import jazzy from '../assets/image 2.svg'
import {Outlet, Link } from 'react-router-dom'
import location from '../assets/Vector (2).svg'
import foodpan from '../assets/Vector (3).svg'
import guest from '../assets/Vector (4).svg'
import cart from '../assets/cartt.svg'
import Cart from '../pages/Cart'
import Logsign from '../components/Logsign'


const Navbar = () => {
    const [show,setShow]= useState(false)
    const [see,setSee]= useState(false)
  return (
    <main className='container position-relative'>
        <nav className='d-flex justify-content-between align-items-center gap-3'>
     <section className='d-flex justify-content-between align-items-center gap-3 my-3'>

               <div>
                <Link to='/'>
                    <img src={jazzy} alt="" />
                </Link>
               </div>

               <div>
                <img src={location} alt="" className='d-none d-lg-block'/>
               </div>
               <h5 className='d-none d-lg-block text-danger'>Lagos, Nigeria</h5>
     </section>

     <section className='d-flex justify-content-between align-items-center gap-3'>
          <img src={foodpan} alt="" className='img-fluid'/>
         <Link to='/Order'className='text-decoration-none'> <h5 className='d-none d-lg-block mt-2 text-danger'>All products</h5></Link>
          {/* <img src={guest} alt="" /> */}
          {/* <h5 className='d-none d-lg-block mt-2'>Hi, Guest</h5> */}
          {/* <select onClick={()=>(!see ? setSee(true) :setSee(false))} >
            <option  >Hi,Guests</option>
            <option value=""><img src={<Logsign/>} alt="" role='button' /> </option>
            
          </select> */}

          <div>
            <div onClick={()=>(!show ? setShow(true) :setShow(false))}>
                <img src={cart}alt="" role='button' />
            </div>
          </div>
          <div>
            <div onClick={()=>(!see ? setSee(true) :setSee(false))}>
              <p> Hi,Guests </p>
              <img src={<Logsign/>} alt="" role='button' />            </div>
              <img src={guest} alt="" />

          </div>
     </section>
        </nav>
        <div className='position-absolute end-0'>{show && <Cart/>}</div>
        <div className='position-absolute end-0'>{see && <Logsign/>}</div>
        <Outlet/>
    </main>
  )
}

export default Navbar
