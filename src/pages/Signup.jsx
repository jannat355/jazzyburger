import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import jazzy from "../assets/image 2.svg";
import Form from 'react-bootstrap/Form';
import  { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [firstname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')
  const [email,setEmail]= useState('')
  const [password,setPassword] = useState('')
  const [verifypassword,setVerifyPassword]=useState('')
  const [phonenumber,setPhoneNumber] = useState('')

  const navigate = useNavigate()

  const handleSignUp = async(e)=>{
    e.preventDefault()
    const signUpData = {
      firstname,
      lastname,
      email,
      phonenumber,
      password,
      verifypassword
    }
    try {
      const data = await fetch('https://project2-48m7.onrender.com/api/user/registration',{
        method:"POST",
        headers:{
          "Content-type": "application/json",
        },
        body: JSON.stringify(signUpData),
      });
      const res = await data.json();
      console.log(res);
      if(res.success === false){
        toast.error(res.message)
      }
      if(res.success === true){
        toast.success(res.message)
        navigate('/SignIn')
      }
    } catch (error) {
      toast.error
    }
  
  }
  return (
   <main className='container mt-5'>
    <div className="text-center">
       <Link to='/'> <img src={jazzy} alt="" /></Link>
        <h4 className="pt-4 fw-bolder">Create your account</h4>
      </div>

      <div className='mt-5 container w-75'>
      <Form  onSubmit={handleSignUp}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Firstname</Form.Label>
        <Form.Control type="text" placeholder="First name" value={firstname} onChange={(e)=>setFirstname(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Lastname</Form.Label>
        <Form.Control type="text" placeholder="Lastname" value={lastname} onChange={(e)=>setLastname(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phonenumber</Form.Label>
        <Form.Control type="number" value={phonenumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password (minium is 8 characters)</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={verifypassword} onChange={(e)=>setVerifyPassword(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3 sec" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Keep me signed in " />
        </Form.Group>

       
      
        <button className="btn btn-danger w-75" >Create account </button>
      </Form>

      <div className="justify-content-center align-items-center text-center">

        <div className="mt-3">
          <p>
            Have an account?
            <Link className="text-decoration-none" to='/Signin'> Sign In</Link>
          </p>
          <p>By Creating your Quickmunch account,you agree to the <a href="">Terms of use</a> and <a href="">Privacy Policy</a></p>
        </div>
      </div>


      </div>

      <div>
      
      </div>
   </main>
  )
}

export default Signup