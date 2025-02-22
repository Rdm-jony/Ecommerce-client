import React from 'react';
import {  useSelector } from 'react-redux';

import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { isLoading, email } = useSelector((state) => state.authenticationSlice)
    if (isLoading) {
        console.log(isLoading)
        return <p>Loadind..................</p>
    }
    if (email) {
        console.log(email)
        return children;
    }
    return <Navigate to='/signIn' state={location.pathname}></Navigate>
};

export default PrivateRoute;