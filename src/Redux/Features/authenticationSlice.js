import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { auth } from "../../Firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
import { toast } from "react-toastify";

const provider = new GoogleAuthProvider();
export const createUser = createAsyncThunk('createUser', async ({ email, password, name, phoneNumber }, { rejectWithValue }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(auth.currentUser, {
        displayName: name, phoneNumber: phoneNumber
    })
    const { result } = await axios.put('https://ecommerce-server-flax-eight.vercel.app/users', { email, name, phoneNumber })
    if (result?.acknowledged) {
        return rejectWithValue = "database error!"
    }
    return {
        email: data.user.email,
        name: data.user.displayName,
        phoneNumber: data.user.phoneNumber
    }

})

export const signInGoogle = createAsyncThunk('signGoogle', async () => {
    const data = await signInWithPopup(auth, provider)
    const { result } = await axios.put('https://ecommerce-server-flax-eight.vercel.app/users', { email: data.user.email, name: data.user.displayName, phoneNumber: data.user.phoneNumber, })
    if (result?.acknowledged) {
        return rejectWithValue = "database error!"
    }
    return {
        email: data.user.email,
        name: data.user.displayName,
        phoneNumber: data.user.phoneNumber
    }
})

export const signInUser = createAsyncThunk('signInUser', async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password)
    console.log(data)
    return {
        email: data.user.email,
        name: data.user.displayName,
        phoneNumber: data.user.phoneNumber
    }
})


const initialState = {
    name: "",
    email: "",
    status: false,
    phoneNumber: "",
    isLoading: true,
    isError: false,
    error: ""
}
export const authenticationSlice = createSlice({
    name: 'authenticationSlice',
    initialState: initialState,
    reducers: {
        setUser: (state, { payload }) => {
            console.log(payload)
            state.email = payload.email,
                state.name = payload.name,
                state.phoneNumber = payload.phoneNumber,
                state.status = payload.status,
                state.isError = payload.isError,
                state.error = payload.error,
                state.isLoading = payload.isLoading

        },
        setLogOut: (state) => {

            state.name = "",
                state.email = "",
                state.status = false,
                state.phoneNumber = "",
                state.isLoading = false,
                state.isError = false,
                state.error = ""

        }

    },
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state, action) => {
            state.email = "",
                state.name = "",
                state.phoneNumber = "",
                state.isLoading = true,
                state.isError = false,
                state.error = '',
                state.status = false
        }).addCase(createUser.fulfilled, (state, action) => {
            state.email = action.payload.email,
                state.name = action.payload.name,
                state.phoneNumber = action.payload.phoneNumber,
                state.isLoading = false,
                state.isError = false,
                state.error = '',
                state.status = true

        }).addCase(createUser.rejected, (state, action) => {
            state.email = "",
                state.name = "",
                state.isLoading = false,
                state.phoneNumber = "",
                state.isError = true,
                state.error = action.error.message,
                state.status = false

        })

        builder.addCase(signInGoogle.pending, (state, action) => {
            state.email = "",
                state.name = "",
                state.isLoading = true,
                state.phoneNumber = "",
                state.isError = false,
                state.error = "",
                state.status = false
        }).addCase(signInGoogle.fulfilled, (state, action) => {
            state.email = action.payload.email,
                state.name = action.payload.name,
                state.isLoading = false,
                state.isError = false,
                state.error = '',
                state.status = true

        }).addCase(signInGoogle.rejected, (state, action) => {
            state.email = "",
                state.name = "",
                state.isLoading = false,
                state.isError = true,
                state.error = action.error.message,
                state.status = false

        })
        builder.addCase(signInUser.pending, (state, action) => {
            state.email = "",
                state.name = "",
                state.isLoading = true,
                state.phoneNumber = "",
                state.isError = false,
                state.error = "",
                state.status = false
        }).addCase(signInUser.fulfilled, (state, action) => {
            state.email = action.payload.email,
                state.name = action.payload.name,
                state.isLoading = false,
                state.isError = false,
                state.error = '',
                state.status = true

        }).addCase(signInUser.rejected, (state, action) => {
            state.email = "",
                state.name = "",
                state.isLoading = false,
                state.isError = true,
                state.error = action.error.message,
                state.status = false

        })
    }

})

export const { setUser, setLogOut } = authenticationSlice.actions