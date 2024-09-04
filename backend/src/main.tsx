import { ChakraProvider } from '@chakra-ui/react'; // bibliotecas
import { AppRoutes } from './routes/index.tsx';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './App.tsx'

import './index.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>

     <ChakraProvider>
      <AppRoutes />
     
     </ChakraProvider>
    

  </BrowserRouter>,
  
)
