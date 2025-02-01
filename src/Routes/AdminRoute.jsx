import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Navigate, useLocation } from 'react-router-dom';
import useUserRole from '../Hooks/useUserRole';

const AdminRoute = ({ children }) => {
    const location = useLocation()
    const [isAdmin, isAdminLoading] = useUserRole()
    if (isAdminLoading) {
        return <p>Loadind..................</p>
    }
    if (isAdmin) {
        return children;
    }
    return <Navigate to='/signIn' state={location.pathname}></Navigate>
};

export default AdminRoute;