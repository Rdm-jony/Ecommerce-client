import { createAsyncThunk, createSlice } from "@reduxjs/toolkit/react";

export const fetchCountries = createAsyncThunk(
    'countries',
    async (name, { rejectWithValue }) => {
        const response = await fetch(`https://restcountries.com/v3.1/all`)
        const data = await response.json()
        if (response.status < 200 || response.status >= 300) {
            return rejectWithValue(data)
        }
        const countryNames = data?.map(country => country?.name.common)

        return countryNames
    },
)

const initialState = {
    isLoading: false,
    isError: false,
    countries: []
}

export const countrySlice = createSlice({
    name: 'countries',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCountries.pending, (state, { payload }) => {
            state.isLoading = true,
                state.isError = false
        }).addCase(fetchCountries.fulfilled, (state, { payload }) => {
            state.isLoading = false,
                state.isError = false,
                state.countries = payload
        }).addCase(fetchCountries.rejected, (state, { payload }) => {
            state.isLoading = false,
                state.isError = true
        })
    }
})