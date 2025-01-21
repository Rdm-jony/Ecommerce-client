import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../api/baseApi";
import productUploadReducer from "../Features/productUploadSlice";
import { countrySlice } from "../Features/countrySlice";
import productListingReducer from "../Features/ProuctListingSlice";
import { authenticationSlice } from "../Features/authenticationSlice";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        productUploadSlice: productUploadReducer,
        countrySlice: countrySlice.reducer,
        authenticationSlice: authenticationSlice.reducer,
        productListingSlice: productListingReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
})