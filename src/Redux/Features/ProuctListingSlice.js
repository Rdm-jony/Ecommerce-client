import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: "",
    subCategory: "",
    priceRange: [],
    rating: "",
    maxPrice:null

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
            console.log(payload)
            state.priceRange = payload
        },
        setRating: (state, { payload }) => {

            state.rating = payload
        },
        setMaxPrice:(state,{payload})=>{
            state.maxPrice=payload
        }

    }
})
export const { setCategory, setSubCategory, setPriceRange, setRating,setMaxPrice } = productListingSlice.actions
export default productListingSlice.reducer