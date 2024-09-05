import React, { ChangeEventHandler } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './login.css';



interface LoginProps {
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  label: string;
}

export const Email: React.FC<LoginProps> = ({ name, value, onChange, label }) => {
  return (
    <div className='input-container'>
      <label className='input-label'>{label}</label>
      <TextField
        className='input-text'
        variant='outlined'
        placeholder='email@gmail.com'
        name={name}
        value={value}
        onChange={onChange}
        fullWidth
        InputProps={{
          style: { color: "#ffffff", backgroundColor: "#1f1f1f" }, // Cor de texto e fundo
        }}
      />
    </div>
  );
};

export const Password: React.FC<LoginProps> = ({ name, value, onChange, label }) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className='input-container'>
      <label className='input-label'>{label}</label>
      <TextField
        className='input-text'
        type={show ? 'text' : 'password'}
        variant='outlined'
        placeholder='*********'
        name={name}
        value={value}
        onChange={onChange}
        fullWidth
        InputProps={{
          style: { color: "#ffffff", backgroundColor: "#1f1f1f" }, // Cor de texto e fundo
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton onClick={handleClick} edge='end' style={{ color: "#ffffff" }}>
                {show ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};