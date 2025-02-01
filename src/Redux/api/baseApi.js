import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ecommerce-server-flax-eight.vercel.app', credentials: 'include' }),
    tagTypes: ['products', 'carts', 'reviews'],
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
                method: 'POST',
                body: ratingInfo
            }),
            invalidatesTags: ['reviews'],
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
            query: (email) => `products/carts/${email}`,
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
        }),
        createBkashPayment: builder.mutation({
            query: (paymentInfo) => ({
                url: 'api/bkash/payment/create',
                method: 'POST',
                body: paymentInfo,

            })
        }),
        getProductOrders: builder.query({
            query: (email) => `products/order/${email}`
        }),
        getProductReviews: builder.query({
            query: (productId) => `products/review/${productId}`,
            providesTags: ['reviews']
        }),
        updateProductPayStatus: builder.mutation({
            query: (updateStatus) => ({
                url: `products/order`,
                method: 'PATCH',
                body: updateStatus
            })
        }),
        addHomeBanner: builder.mutation({
            query: (bannerData) => ({
                url: 'products/banner/add',
                method: 'PUT',
                body: bannerData
            })
        }),
        getHomeBanner: builder.query({
            query: () => 'products/banner'
        }),
        getHomeBannerById: builder.query({
            query: (bannerId) => `products/banner/${bannerId}`
        }),
        deleteHomeBanner: builder.mutation({
            query: (bannerId) => ({
                url: `products/banner/${bannerId}`,
                method: "DELETE"
            })
        }),
        checkIsAdmin: builder.query({
            query: (email) => `users/admin/${email}`
        }),
        jwtAuth: builder.mutation({
            query: (email) => ({
                url: `users/jwt/${email}`,
                method: 'POST'
            })
        }),
        deleteCookieToken: builder.mutation({
            query: () => ({
                url: 'users/logOut',
                method: 'POST'
            })
        }),
        getFeaturedProducts: builder.query({
            query: () => 'products/feature'
        }),
        getRelatedProducts: builder.query({
            query: (querInfo) => `products/related/${querInfo.category}?subCategory=${querInfo.subCategory}`
        }),
        getMaxPrice: builder.query({
            query: (category) => `products/price/max/${category}`
        }),
        getUserByEmail: builder.query({
            query: (email) => `users/profile/${email}`
        }),
        updateUser: builder.mutation({
            query: (userData) => ({
                url: 'users/profile/update',
                method: 'PATCH',
                body: userData
            })
        })


    })
})

export const { useAddCategoryMutation, useAddSubCategoryMutation, useGetCategoryQuery, useGetSubCategoryQuery, useDeleteSubCategoryMutation, useUpdateCategoryMutation, useGetCategoryByIdQuery, useGetCountriesApiQuery, useGetSubCategoryBycategoryQuery, useGetCategoryImageMutation, useDeleteCategoryMutation, useUploadProductMutation, useGetTotalProductsQuery, useGetProductsQuery, useGetProductsByIdQuery, useDeleteProductsByIdMutation, useGetPopularProductsQuery, useGetListingProductsQuery, useAddUserToDbMutation, useAddProductReviewMutation, useAddToCartMutation, useGetAllCartsQuery, useProductCartDeleteMutation, useUpdateProductCartMutation, useCreateBkashPaymentMutation, useGetProductOrdersQuery, useGetProductReviewsQuery, useUpdateProductPayStatusMutation, useAddHomeBannerMutation, useGetHomeBannerQuery, useGetHomeBannerByIdQuery, useDeleteHomeBannerMutation, useCheckIsAdminQuery, useJwtAuthMutation, useDeleteCookieTokenMutation, useGetFeaturedProductsQuery, useGetRelatedProductsQuery, useGetMaxPriceQuery, useGetUserByEmailQuery, useUpdateUserMutation } = baseApi

