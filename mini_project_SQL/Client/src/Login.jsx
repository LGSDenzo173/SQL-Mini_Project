import { useState } from "react"
// import axios from "axios";
export default function Login() {
    const [email,setEmail] = useState();
    const [password, setPasswrod]= useState();

    const handleSubmit = (e)=>{
        e.preventDefault()
        
    }

    return (
    <div className="d-flex justify-content-center  align-items-center bg-bg-primary vh-100">
    <div className="bg-white p-3 rounded w-25">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
              <div className="mb-3">
              <label htmlFor="name"> <strong>Email</strong></label>
              <input type="email" name="email" placeholder="Enter Email"
              className="form-control rounded-0"  
              onChange={(e)=>setEmail(e.target.value)}/>
              </div>
              <div className="mb-3">
              <label htmlFor="name"> <strong>Password</strong></label>
              <input type="password" name="name" placeholder="Enter Password"
              className="form-control rounded-0" 
              onChange={(e)=>setPasswrod(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-success w-100 rounded-0">Log In</button>
              <p>You are agree to our terms and policies</p>
              <button className="btn btn-default border w-100 bg-light rounded-0 text-text-decoration-none">Sign Up</button>
      </form>

    </div>

  </div>
  )
}
