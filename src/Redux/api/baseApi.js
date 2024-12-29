import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        getCategory: builder.query({
            query: () => '/category'
        }),
        addCategory: builder.mutation({
            query: (newCategory) => ({
                url: '/category',
                method: 'POST',
                body: newCategory
            })
        }),
        addSubCategory: builder.mutation({
            query: (newSubCategory) => ({
                url: '/category/subCategory',
                method: 'POST',
                body: newSubCategory
            })
        }),
        getSubCategory: builder.query({
            query: () => '/category/subCategory'
        }),
        deleteSubCategory: builder.mutation({
            query: ({ _id, subCategory }) => ({
                url: `/category/subCategory/${_id}?sub=${subCategory}`,
                method: 'DELETE'
            })
        }),
        getCategoryById: builder.query({
            query: (id) => `/category/edit/${id}`
        }),
        updateCategory: builder.mutation({
            query: ({ _id, updatedCategory }) => ({
                url: `/category/edit/${_id}`,
                method: "PATCH",
                body: updatedCategory
            })
        }),
        getCountriesApi: builder.query({
            query: () => '/products/countries'
        }),
        getSubCategoryBycategory: builder.query({
            query: (caurrentCategory) => `/category/subCategory/${caurrentCategory}`
        }),
        getCategoryImage: builder.mutation({
            query: (file) => {
                return {
                    url: '/imageUpload',
                    method: 'POST',
                    body: file,

                }
            }
        }),
        deleteCategory: builder.mutation({
            query: (id) => ({
                url: `/category/${id}`,
                method: 'DELETE',

            })
        }),
        uploadProduct: builder.mutation({
            query: (newProduct) => ({
                url: 'products',
                method: 'POST',
                body: newProduct
            })
        }),
        getTotalProducts: builder.query({
            query: () => '/products/total',
        }),
        getProducts: builder.query({
            query: () => "products"
        }),
        getProductsById:builder.query({
            query:(id)=>`products/${id}`
        })
    })
})

export const { useAddCategoryMutation, useAddSubCategoryMutation, useGetCategoryQuery, useGetSubCategoryQuery, useDeleteSubCategoryMutation, useUpdateCategoryMutation, useGetCategoryByIdQuery, useGetCountriesApiQuery, useGetSubCategoryBycategoryQuery, useGetCategoryImageMutation, useDeleteCategoryMutation, useUploadProductMutation, useGetTotalProductsQuery, useGetProductsQuery,useGetProductsByIdQuery } = baseApi

