import { Routes,Route,  Navigate } from 'react-router-dom';
import LoginPage from '../pages/admin/LoginPage';
import  {AdminPage} from '../pages/AdminPage';
import { UserPage } from '../pages/UserPage';
import { ControlPanel } from '../pages/controlPanel.tsx';
import { ListPage } from '../pages/ListPage.tsx';
import { TablePage } from '../pages/TablePage.tsx';
import {RegisterPage } from '../pages/admin/RegisterPage';
import {ResetPasswordPage } from '../pages/admin/ResetPasswordPage';
import {ForgotPasswordPage}  from '../pages/admin/ForgotPasswordPage';
import {NotFoundPage } from '../pages/admin/NotFoundPage';

export const AppRoutes = () => {   
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/controlpanel" element={<ControlPanel />} />
            <Route path="/listpage" element={<ListPage />} />
            <Route path="/tablepage" element={<TablePage />} />
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