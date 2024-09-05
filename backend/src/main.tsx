

import { AppRoutes } from './routes/index.tsx';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './App.tsx'
import './index.css'
import { ThemeProvider } from '@mui/material';
import { DarkTheme } from './shared/themes/Dark';
import { AppDrawerProvider } from './shared/contexts/DrawerContext.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <ThemeProvider theme={DarkTheme}>
  <AppDrawerProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </AppDrawerProvider>,
  </ThemeProvider>,

)
