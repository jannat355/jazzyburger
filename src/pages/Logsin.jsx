import React from 'react'
import log from '../assets/Vector (5).svg'
import sign from '../assets/Vector (6).svg'
import { Link } from 'react-router-dom'
// import '../styles/log.css'

const Logsin = () => {
  return (
    <main className='container shadow-lg bg-light row py-5'>
        <div>
           <Link to='/Signin'> <button className="btn btn-primary btn-lg align-items-center w-100 "><img src={log} alt="" /> Login</button></Link>
              
              <Link to='/Signup'><button className="btn btn-light btn-lg text-danger align-items-center w-100 mt-3 border-danger  "><img src={sign} alt="" /> SignUp</button></Link>
            
        </div>

    </main>
  )
}

export default Logsin