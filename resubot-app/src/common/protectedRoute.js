import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Auth from './auth.js'; // Import your authentication logic

const ProtectedRoute = ({ element, ...rest }) => {
    if (Auth.getUser()) {
        return <Route {...rest} element={element} />;
    } else {
        return <Navigate to="/login" replace />;
    }
};

export default ProtectedRoute;
