import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Listing from "../Pages/Listing/Listing";
import AllProducts from "../Pages/Listing/AllProducts/AllProducts";
import Details from "../Pages/Details/Details";
import AdminDashboardLayout from "../Pages/Admin/AdminDashboardLayout/AdminDashboardLayout";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import CategoryList from "../Pages/Admin/Category/CategoryList";
import AddCategory from "../Pages/Admin/Category/AddCategory";
import Cart from "../Pages/Cart/Cart";
import EditCategory from "../Pages/Admin/Category/EditCategory";
import AddSubCategory from "../Pages/Admin/Category/AddSubCategory";
import SubCategoryList from "../Pages/Admin/Category/SubCategoryList";
import ProductUpload from "../Pages/Admin/Products/ProductUpload";
import ProductList from "../Pages/Admin/Products/ProductList";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Checkout from "../Pages/Checkout/Checkout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [

            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/listing',
                element: <Listing></Listing>,

            },
            {
                path: "/details/:id",
                element: <Details></Details>
            },
            {
                path: "carts",
                element: <Cart></Cart>
            },

            {
                path: 'signUp',
                element: <SignUp></SignUp>
            }, {
                path: 'signIn',
                element: <SignIn></SignIn>
            },
            {
                path:"/checkout",
                element:<Checkout></Checkout>
            }
        ]
    }, {
        path: '/dashboard',
        element: <AdminDashboardLayout></AdminDashboardLayout>,
        children: [
            {
                path: "",
                element: <Dashboard></Dashboard>
            },
            {
                path: 'category',
                element: <CategoryList></CategoryList>
            },
            {
                path: 'category/add',
                element: <AddCategory></AddCategory>
            },
            {
                path: 'category/edit/:id',
                element: <EditCategory></EditCategory>
            },
            {
                path: 'subCategory/add',
                element: <AddSubCategory></AddSubCategory>
            }, {
                path: 'subCategory',
                element: <SubCategoryList></SubCategoryList>
            }, {
                path: 'product/add',
                element: <ProductUpload></ProductUpload>
            },
            {
                path: 'productList',
                element: <ProductList></ProductList>
            },
            {
                path: "products/:id",
                element: <Details></Details>
            },
            {
                path: 'product/update/:id',
                element: <ProductUpload></ProductUpload>
            },
        ]
    },


])