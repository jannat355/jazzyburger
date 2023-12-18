import React from 'react'
import first from '../assets/Group 28 (1).svg'
import second from '../assets/Group 29.svg'
import apple from '../assets/Frame 9 (1).svg'
import play from '../assets/Frame 10.svg'
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <main className=' bg-dark mt-5  '>
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
            <p>+2349074666655 or</p>
            <p>help@jazzyburger.com</p>
        </div>

        <div className='text-light'>
            <h4>Follow us</h4>
            <RiFacebookBoxFill />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
        </div>
       </div>
    </main>
  )
}

export default Footer