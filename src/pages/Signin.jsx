import React,{useState,useContext} from "react";
import jazzy from "../assets/image 2.svg";
import { Link } from "react-router-dom";
import "../styles/Signin.css";
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import  toast  from "react-hot-toast";
import AuthContext from "../context/AuthContext";
const Signin = () => {
  const [email,setEmail] = useState('')
  const [ password,setPassword] = useState('')
  const {setLoggedIn} = useContext(AuthContext)

  const navigate = useNavigate()
  const handleSignin = async(e)=>{
    e.preventDefault()
    const SigninData = {
      email,
      password,
    }
    try {
      const data = await fetch('https://project2-48m7.onrender.com/api/user/login',{
        method:"POST",
        headers:{
          "Content-type": "application/json",
        },
        body: JSON.stringify(SigninData),
      });
      const res = await data.json();
      console.log(res);
      if(res.success === false){
        toast.error(res.message)
      }
      if(res.success === true){
        toast.success(res.message)
       
      }
      if(res.user.token){
        localStorage.setItem('token',res.user.token)
        navigate('/')
        setLoggedIn(true)
      }
    } catch (error) {
      toast.error
    }

   
  
  }
  
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
        <Form.Control type="email" placeholder="Enter email"value={email} onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}  />
      </Form.Group>

        <Form.Group className="mb-3 sec" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Keep me signed in " />

        <Link className="text-decoration-none" to='/Forgotpassword'>
        
        <p className="d-none d-lg-block">Reset password</p>
      </Link>
      </Form.Group>
         
        
      </Form>

       
      </div>

      <div className="justify-content-center align-items-center text-center">
        <button className="btn btn-danger w-50" onClick={handleSignin}>Sign in </button>

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
