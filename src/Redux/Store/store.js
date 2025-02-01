import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../api/baseApi";
import productUploadReducer from "../Features/productUploadSlice";
import { countrySlice } from "../Features/countrySlice";
import productListingReducer from "../Features/ProuctListingSlice";
import { authenticationSlice, setLogOut } from "../Features/authenticationSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";

const apiInterceptor = (store) => (next) => async (action) => {
    if (action.type.endsWith("/rejected")) {
        console.log(action)
        if (action?.payload?.status === 401 || action?.payload?.status === 403) {
            await signOut(auth)
        }
    }
    return next(action);
};


export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        productUploadSlice: productUploadReducer,
        countrySlice: countrySlice.reducer,
        authenticationSlice: authenticationSlice.reducer,
        productListingSlice: productListingReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware).concat(apiInterceptor)
})