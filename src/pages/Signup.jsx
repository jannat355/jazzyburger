import React from 'react'
import { Link } from 'react-router-dom'
import jazzy from "../assets/image 2.svg";
import Form from 'react-bootstrap/Form';

const Signup = () => {
  return (
   <main className='container mt-5'>
    <div className="text-center">
       <Link to='/'> <img src={jazzy} alt="" /></Link>
        <h4 className="pt-4 fw-bolder">Create your account</h4>
      </div>

      <div className='mt-5 container w-75'>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Firstname</Form.Label>
        <Form.Control type="email" placeholder="First name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Lastname</Form.Label>
        <Form.Control type="password" placeholder="Lastname" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="password" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="password" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password (minium is 8 characters)</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3 sec" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Keep me signed in " />
        </Form.Group>

       
      
      </Form>

      <div className="justify-content-center align-items-center text-center">
        <button className="btn btn-danger w-75">Create account </button>

        <div className="mt-3">
          <p>
            Have an account?
            <Link className="text-decoration-none" to='/Signin'> Sign In</Link>
          </p>
        </div>
      </div>


      </div>

      <div>
      
      </div>
   </main>
  )
}

export default Signup