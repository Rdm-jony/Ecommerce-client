import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { setLogOut, setUser } from '../Redux/Features/authenticationSlice';

const AuthListener = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const auth = getAuth();

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser({ email: user?.email, name: user?.displayName, phoneNumber: user?.phoneNumber, status: true, isLoading: false, isError: false, error: '' })
                )
            } else {
                dispatch(setLogOut());
            }
        });
        return () => unsubscribe();
    }, [dispatch]);

    return null;
};

export default AuthListener;
