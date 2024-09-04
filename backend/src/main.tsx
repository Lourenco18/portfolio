import { ChakraProvider } from '@chakra-ui/react'; // bibliotecas
import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.tsx'
import LoginForm from './pages/LoginPage.tsx'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <ChakraProvider>
      <LoginForm />
     </ChakraProvider>
    
  </React.StrictMode>,
)
