import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    showSizeBox: false,
    showCountryBox: false,
    caurrentCategory: null,
    updatedUrlImg: [],
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
            state.size = payload

        },
        setRating: (state, { payload }) => {
            state.rating = payload
        },
        setUpdatedUrlImg: (state, { payload }) => {
            state.updatedUrlImg = payload
        }
    },


})

export const { setShowSizebox, setShowCountryBox, setCurrentCategory, selectedCountry, setSelectedCountry, setCountryFilter, setSize, setRating, setUpdatedUrlImg } = productUploadSlice.actions

export default productUploadSlice.reducer