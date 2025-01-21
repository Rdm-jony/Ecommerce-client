import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../Redux/Features/authenticationSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ childern }) => {
    const location = useLocation()
    const disPathch = useDispatch()
    const { isLoading, email } = useSelector((state) => state.authenticationSlice)

    console.log(email)
    // if (isLoading) {
    //     return <p>Loadind..................</p>
    // }
    // if (email) {
    //     return childern;
    // }
    // return <Navigate to='/signIn' state={location.pathname}></Navigate>
};

export default PrivateRoute;