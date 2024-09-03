import React, { ChangeEventHandler } from 'react';
import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
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
      <Input
        className='input-text'
        pr='4.5rem'
        variant='outline'
        placeholder='email@gmail.com'
        name={name}
        value={value}
        onChange={onChange}
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
      <InputGroup className='input-text' size='md'>
        <Input
         
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Enter password'
          variant='outline'
          name={name}
          value={value}
          onChange={onChange}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    </div>
  );
};
