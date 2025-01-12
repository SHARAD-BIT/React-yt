import React, { useState } from 'react';
import './login.css';  // Make sure this is correctly imported

export const Loginform = () => {
  const [action, setAction] = useState("Sign Up");

  const handleSignUp = () => {
    setAction("Sign Up");
  };

  const handleLogin = () => {
    setAction("Login");
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='input'>
        {/* Only render the Username input when action is "Sign Up" */}
        {action === "Sign Up" && (
          <div className='input1'>
            <i className="fa-solid fa-user-large"></i>
            <input type="text" placeholder='Username' />
          </div>
        )}
        
        <div className='input1'>
          <i className="fa-solid fa-envelope"></i>
          <input type="email" placeholder='Email Id' />
        </div>

        <div className='input1'>
          <i className="fa-solid fa-key"></i>
          <input type="password" placeholder='Password' />
        </div>
      </div>

      <div className='forgot'>
        Forgot password? <span>Click Here!</span>
      </div>
       
      <div className="submit-button">
        <div
          className={`sign-up ${action === "Sign Up" ? "active" : ""}`}
          onClick={handleSignUp}
        >
          Sign Up
        </div>
        <div
          className={`login ${action === "Login" ? "active" : ""}`}
          onClick={handleLogin}
        >
          Login
        </div>
      </div>
    </div>
  );
};