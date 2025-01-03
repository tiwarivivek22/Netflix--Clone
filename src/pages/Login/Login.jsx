import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {

  const [signState,setSignState] = useState("Sign In")
  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==="Sign Up"?<input type="text" placeholder="Your name" />:<></>}
          
          <input type="password" placeholder="Password" />
          <input type="email" placeholder="Email" />
          <button type="submit">{signState}</button>
          <div className="from-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"?<p>Already have an account? <span onClick={()=>{setSignState("Sign In")}}>Sign In</span></p>:
          <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up</span></p>
          }
          
          
        </div>
      </div>
    </div>
  )
}

export default Login