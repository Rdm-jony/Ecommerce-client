import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    showSizeBox: false,
    showCountryBox: false,
    caurrentCategory: null,
    selectedCountry: [],
    countryFilter: [],
    size: [],
    rating: 1
}
export const productUploadSlice = createSlice({
    name: 'productUpload',
    initialState: initialState,
    reducers: {
        setShowSizebox: (state, { payload }) => {
            state.showSizeBox = payload
        },
        setShowCountryBox: (state, { payload }) => {
            state.showCountryBox = payload
        },
        setCurrentCategory: (state, { payload }) => {
            state.caurrentCategory = payload
        },
        setSelectedCountry: (state, { payload }) => {

            state.selectedCountry = payload
        },
        setCountryFilter: (state, { payload }) => {
            const { countries, searchText } = payload;

            if (countries) {
                if (searchText) {
                    state.countryFilter = countries.filter(country => country.toLowerCase().includes(searchText.toLowerCase()))
                } else {
                    state.countryFilter = countries
                }

            }
        },
        setSize: (state, { payload }) => {
            if (payload) {
                if (payload?.target.checked) {
                    const newSize = [...state.size, payload.target.value]
                    state.size = newSize

                } else {
                    const newSize = state.size.filter(s => s !== payload.target.value);
                    state.size = newSize
                }
            } else {
                state.size = []
            }

        },
        setRating: (state, { payload }) => {
            state.rating = payload
        }
    },

})

export const { setShowSizebox, setShowCountryBox, setCurrentCategory, selectedCountry, setSelectedCountry, setCountryFilter, setSize, setRating } = productUploadSlice.actions

export default productUploadSlice.reducer