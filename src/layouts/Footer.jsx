import React from 'react'
import first from '../assets/Group 28 (1).svg'
import second from '../assets/Group 29.svg'
import apple from '../assets/Frame 9 (1).svg'
import play from '../assets/Frame 10.svg'
import { Icon } from '@iconify/react';

const Footer = () => {
  
  return (
    <main className=' bg-dark mt-5 d-lg-block d-none  '>
       <div className='container '>
       <div className='d-flex justify-content-between ' >
         <div className='pt-4 '>
            <img src={first} alt="" />
            <img src={second} alt="" />
            
         </div>
         <div className='pt-4'>
         <img src={apple} alt="" />
            <img src={play} alt="" />
         </div>
        </div>

        <div className='text-light mt-5'>
        <h4>Need Help</h4>
           <a href="" >
            <p>+2349074666655 or</p>
            <p>help@jazzyburger.com</p>
           </a>
        </div>

        <div className='text-light'>
            <h4>Follow us</h4>
            <Icon icon="ant-design:facebook-outlined" />
            <Icon icon="la:twitter-square"/>
            <Icon icon="mdi:instagram" />
            <Icon icon="circum:youtube" />
        </div>
       </div>
    </main>
  )
}

export default Footer