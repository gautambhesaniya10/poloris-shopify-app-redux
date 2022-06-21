import React from 'react'
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    let getToken = localStorage.getItem('token');
    return getToken ? children : <Navigate to="/" />;
}

export default PrivateRoute
