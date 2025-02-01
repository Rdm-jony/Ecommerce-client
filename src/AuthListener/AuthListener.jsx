import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { setLogOut, setUser } from '../Redux/Features/authenticationSlice';
import { useDeleteCookieTokenMutation, useJwtAuthMutation } from '../Redux/api/baseApi';
import { Navigate, useNavigate } from 'react-router-dom';

const AuthListener = () => {
    const dispatch = useDispatch();
    const [setJwt] = useJwtAuthMutation()
    const [deleteCookieToken] = useDeleteCookieTokenMutation()

    useEffect(() => {
        const auth = getAuth();

        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            const hasRedirected = localStorage.getItem('redirected');

            if (user) {
                if (hasRedirected) {
                    // Reset the redirect flag if the user is logged in
                    localStorage.removeItem('redirected');
                }
                dispatch(setUser({ email: user?.email, name: user?.displayName, phoneNumber: user?.phoneNumber, status: true, isLoading: false, isError: false, error: '' })
                )
                const data = await setJwt(user?.email).unwrap()
                console.log(user)
            } else {
                if (!hasRedirected) {
                    localStorage.setItem('redirected', 'true');
                    try {
                        await deleteCookieToken().unwrap();

                        await signOut(auth);
                        dispatch(setLogOut());  

                        window.location.replace("/signIn");
                    } catch (error) {
                        console.error('Error during logout:', error);
                    }
                }

            }
        });
        return () => unsubscribe();
    }, [dispatch, setJwt]);

    return null;
};

export default AuthListener;
