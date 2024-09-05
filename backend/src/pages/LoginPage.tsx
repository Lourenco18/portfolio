import React, { useState } from 'react';
import { Email, Password } from '../components/Login/Login';
import { Button } from '@mui/material';
import '../components/Login/login.css';
import '../index.css';
import { ThemeProvider } from '@mui/material/styles';
import { DarkTheme } from '../shared/themes/Dark'; // Tema que criamos



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
    e.preventDefault(); // Previne o comportamento padrão do formulário
    setLoginError('');

    // Validação dos campos
    if (email === '') {
      setEmailError('Email is required');
    } 
    if (password === '') {
      setPasswordError('Password is required');
    }

    // Verificação das credenciais
    if (email !== '' && password !== '') {
      if (email !== DefaultEmail) {
        setLoginError('Unauthorized email');
      } else if (password !== DefaultPassword) {
        setPasswordError('Incorrect password');
      } else {
        setEmailError('');
        setPasswordError('');
        setLoginError('');
        console.log('Login successful');
        // Aqui você pode redirecionar para outra página ou realizar outras ações
      }
    }
  };


  return (
    <ThemeProvider theme={DarkTheme}>
      <div className='container'>
        <div className="logo-container">
          <img src="../../..//Logo-Empresa/svg/logo-color.svg" alt="Company Logo" className="logo" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="title">Login</div>
          <div className={`input-container ${emailError ? 'error' : ''}`}>
            <Email
              value={email}
              onChange={handleEmailChange}
              name="email"
              label="Enter your email"
            />
            {emailError && <h2 className="error-message">{emailError}</h2>}
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
          {/* O botão de submissão precisa ser do tipo submit */}
          <Button type="submit" variant='contained' color='primary' className='submit'>Login</Button><br/><br/>
          

          {loginError && <span className="error-message">{loginError}</span>}
        </form>
      </div>
    </ThemeProvider>
  );
}

export default LoginForm;
