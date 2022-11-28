import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
    const isAuth = { 'token': false };
    return (
        !auth.token ? <Outlet /> : <Navigate to="/login" />
    )
}

export default ProtectedRoutes