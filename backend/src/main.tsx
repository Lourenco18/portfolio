
import { AppRoutes } from './routes/index.tsx';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './App.tsx'
import './index.css'
import { AppThemeProvider } from './shared/contexts/ThemeContext';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppThemeProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </AppThemeProvider>,


)
