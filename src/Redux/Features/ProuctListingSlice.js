import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: "",
    subCategory: "",
    priceRange: [0, 80000],
    rating: ""

}
export const productListingSlice = createSlice({
    name: 'listing',
    initialState: initialState,
    reducers: {
        setCategory: (state, { payload }) => {
        
            state.category = payload
        },
        setSubCategory: (state, { payload }) => {
            console.log(payload)
            state.subCategory = payload
        },
        setPriceRange: (state, { payload }) => {
            state.priceRange = payload
        },
        setRating: (state, { payload }) => {

            state.rating = payload
        }

    }
})
export const { setCategory, setSubCategory, setPriceRange, setRating } = productListingSlice.actions
export default productListingSlice.reducer