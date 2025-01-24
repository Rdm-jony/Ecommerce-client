import React from 'react';
import { useSelector } from 'react-redux';
import { useCheckIsAdminQuery } from '../Redux/api/baseApi';

const useUserRole = () => {
    const {email}=useSelector(state=>state.authenticationSlice)
    const {data,isLoading}=useCheckIsAdminQuery(email)
    return [data?.isAdmin,isLoading]
};

export default useUserRole;