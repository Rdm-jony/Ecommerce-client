import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../api/baseApi";
import productUploadReducer from "../Features/productUploadSlice";
import { countrySlice } from "../Features/countrySlice";

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        productUploadSlice: productUploadReducer,
        countrySlice:countrySlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
})