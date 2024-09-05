
import { AppRoutes } from './routes/index.tsx';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './App.tsx'

import './index.css'
import { ThemeProvider } from '@mui/material';
import { DarkTheme } from './shared/themes/Dark';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={DarkTheme}>
 <BrowserRouter>

    
<AppRoutes />




</BrowserRouter>
  </ThemeProvider>,
 
  
)
