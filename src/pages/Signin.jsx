import React from "react";
import jazzy from "../assets/image 2.svg";
import { Link } from "react-router-dom";
import "../styles/Signin.css";
import Form from 'react-bootstrap/Form';
const Signin = () => {
  return (
    <main className="container mt-5  pt-4  ">
      <div className="text-center">
       <Link to='/'> <img src={jazzy} alt="" /></Link>
        <h4 className="pt-4 fw-bolder">Sign In To Your Account</h4>
      </div>
      <div className="mt-5 container w-75  ">
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

        <Form.Group className="mb-3 sec" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Keep me signed in " />

        <Link className="text-decoration-none">
        
        <p className="d-none d-lg-block">Reset password</p>
      </Link>
      </Form.Group>
         
        
      </Form>

       
      </div>

      <div className="justify-content-center align-items-center text-center">
        <button className="btn btn-danger w-50">Sign in </button>

        <div className="mt-3">
          <p>
            Don't have an account?
            <Link className="text-decoration-none" to='/Signup'> Create one</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Signin;
