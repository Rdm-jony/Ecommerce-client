import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Navigate, useLocation } from 'react-router-dom';
import useUserRole from '../Hooks/useUserRole';

const AdminRoute = ({ children }) => {
    const location = useLocation()
    const { isLoading, email } = useSelector((state) => state.authenticationSlice)
    const [isAdmin,isAdminLoading]=useUserRole()
    if (isLoading || isAdminLoading) {
        return <p>Loadind..................</p>
    }
    if (email && isAdmin) {
        return children;
    }
    return <Navigate to='/signIn' state={location.pathname}></Navigate>
};

export default AdminRoute;