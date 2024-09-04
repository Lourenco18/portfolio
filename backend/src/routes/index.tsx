import { Routes,Route,  Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import  {AdminPage} from '../pages/AdminPage';
import { UserPage } from '../pages/UserPage';
import {RegisterPage } from '../pages/RegisterPage';
import {ResetPasswordPage } from '../pages/ResetPasswordPage';
import {ForgotPasswordPage}  from '../pages/ForgotPasswordPage';
import {NotFoundPage } from '../pages/NotFoundPage';
export const AppRoutes = () => {   
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    );
 }