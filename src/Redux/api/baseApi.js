import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['products', 'carts'],
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
            query: (id) => `/category/edit/${id}`,
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
            query: ({ newProduct, id }) => ({
                url: `products/${id}`,
                method: 'PUT',
                body: newProduct
            })
        }),
        getTotalProducts: builder.query({
            query: () => '/products/total',
        }),
        getProducts: builder.query({
            query: (category) => `products?category=${category}`,
            providesTags: ['products']
        }),
        getProductsById: builder.query({
            query: (id) => `products/product/${id}`
        }),
        deleteProductsById: builder.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE',

            }),
            invalidatesTags: ['products']
        }),
        getPopularProducts: builder.query({
            query: (category) => `products/popular/${category}`,
        }),
        getListingProducts: builder.query({
            query: ({ category, subCategory, priceRange, rating }) => `products/listing?category=${category}&subCategory=${subCategory}&priceRange=${priceRange}&rating=${rating}`
        }),
        addUserToDb: builder.mutation({
            query: (userData) => (
                {
                    url: '/users',
                    method: 'PUT',
                    body: userData
                })
        }),
        addProductReview: builder.mutation({
            query: (ratingInfo) => ({
                url: `products/review/add`,
                method: 'PUT',
                body: ratingInfo
            })
        }),
        addToCart: builder.mutation({
            query: (cartInfo) => ({
                url: 'products/carts/add',
                method: 'POST',
                body: cartInfo,

            }),
            invalidatesTags: ['carts']
        }),
        getAllCarts: builder.query({
            query: () => 'products/carts',
            providesTags: ['carts']
        }),
        updateProductCart: builder.mutation({
            query: (updateCount) => ({
                url: 'products/carts',
                method: 'PATCH',
                body: updateCount
            }),
            invalidatesTags: ['carts']
        }),
        productCartDelete: builder.mutation({
            query: (id) => ({
                url: `products/carts/${id}`,
                method: 'DELETE',

            }),
            invalidatesTags: ['carts']
        })

    })
})

export const { useAddCategoryMutation, useAddSubCategoryMutation, useGetCategoryQuery, useGetSubCategoryQuery, useDeleteSubCategoryMutation, useUpdateCategoryMutation, useGetCategoryByIdQuery, useGetCountriesApiQuery, useGetSubCategoryBycategoryQuery, useGetCategoryImageMutation, useDeleteCategoryMutation, useUploadProductMutation, useGetTotalProductsQuery, useGetProductsQuery, useGetProductsByIdQuery, useDeleteProductsByIdMutation, useGetPopularProductsQuery, useGetListingProductsQuery, useAddUserToDbMutation, useAddProductReviewMutation, useAddToCartMutation, useGetAllCartsQuery, useProductCartDeleteMutation, useUpdateProductCartMutation } = baseApi

