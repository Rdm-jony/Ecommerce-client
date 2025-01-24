import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { setLogOut, setUser } from '../Redux/Features/authenticationSlice';
import { useJwtAuthMutation } from '../Redux/api/baseApi';

const AuthListener = () => {
    const dispatch = useDispatch();
    const [setJwt] = useJwtAuthMutation()
    useEffect(() => {
        const auth = getAuth();

        const unsubscribe = onAuthStateChanged(auth,async (user) => {
            if (user) {
                dispatch(setUser({ email: user?.email, name: user?.displayName, phoneNumber: user?.phoneNumber, status: true, isLoading: false, isError: false, error: '' })
                )
                const data=await setJwt(user?.email).unwrap()
                console.log(data)
            } else {
                dispatch(setLogOut());
            }
        });
        return () => unsubscribe();
    }, [dispatch]);

    return null;
};

export default AuthListener;
