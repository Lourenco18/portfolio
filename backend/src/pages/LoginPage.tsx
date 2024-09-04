import React, { useState } from 'react';
import { Email, Password } from '../components/Login/Login';


import '../components/Login/login.css';
import '../index.css';




function LoginForm() {
  const DefaultEmail = "daniellourenco897@gmail.com";
  const DefaultPassword = "daniel123";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');
  
  

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Invalid email');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (password: string) => {
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginError('');
    if(password === ''){
      setPasswordError('Password is required');
    }
    if(email === ''){
      setEmailError('Email is required');
    
    
    }else{
      if (email !== DefaultEmail) {
        setLoginError('Unauthorized email');
      } else if (password !== DefaultPassword) {  
        setPasswordError('Incorrect password');
      } else {
        setEmailError('');
        setPasswordError('');
        setLoginError('');
  
        console.log('Login successful');
        //entrar na pagina de admin
        
        
      }
      
    }
    
  };

  return (
    <div className='container'>
      
      <form onSubmit={handleSubmit}>
        <div className={`input-container ${emailError ? 'error' : ''}`}>
          <Email
            value={email}
            onChange={handleEmailChange}
            name="email"
            label="Enter your email"
          />
          {emailError && <span className="error-message">{emailError}</span>}
        </div>
        <div className={`input-container ${passwordError ? 'error' : ''}`}>
          <Password
            value={password}
            onChange={handlePasswordChange}
            name="password"
            label="Enter your password"
          />
          {passwordError && <span className="error-message">{passwordError}</span>}
        </div>
        <button className='submit'>Login</button><br/>
        {loginError && <span className="error-message">{loginError}</span>}
      </form>
    </div> 
  );
}

export default LoginForm;