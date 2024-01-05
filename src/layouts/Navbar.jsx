import React, { useState,useContext, useEffect } from 'react'
import jazzy from '../assets/image 2.svg'
import {Outlet, Link } from 'react-router-dom'
import location from '../assets/Vector (2).svg'
import foodpan from '../assets/Vector (3).svg'
import guest from '../assets/Vector (4).svg'
import cartimg from '../assets/cartt.svg'
import Cart from '../pages/Cart'
import Logsign from '../components/Logsign'
import CartContext from '../context/CartContext'
import '../styles/NavBar.css'


const Navbar = () => {
  const {cart} = useContext(CartContext)
    const [show,setShow]= useState(false)
    const [see,setSee]= useState(false)
    const [user,setUser] = useState(null)
    const token = localStorage.getItem('token')
    

    let getUser = async () => {
      let response = await fetch('https://project2-48m7.onrender.com/api/user/getusername', {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
  
      let data = await response.json();
      setUser(data.firstname);
      console.log(data.firstname);
    };
    useEffect(()=>{
      getUser()
    },[])
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
         <Link className='text-decoration-none'> <h5 className='d-none d-lg-block mt-2 text-danger'>All products</h5></Link>
         <div>
            <div onClick={()=>(!see ? setSee(true) :setSee(false))} className='d-flex '>
            <img src={guest} alt="" />
              <p role='button' className='mt-3 d-none d-lg-block'> Hi,{token ? <>{user}</> :<>Guests</>}  </p>
              <img src={<Logsign/>} alt=""  />            </div>
              
          </div>

          <div>
            <div onClick={()=>(!show ? setShow(true) :setShow(false))} className='cart-container'>
            <p className='pod'>{cart.length}</p>
            <img src={cartimg}alt="" role='button' className='pod2'  />
            </div>
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
