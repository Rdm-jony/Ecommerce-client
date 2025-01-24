import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Listing from "../Pages/Listing/Listing";
import Details from "../Pages/Details/Details";
import AdminDashboardLayout from "../Pages/Admin/AdminDashboardLayout/AdminDashboardLayout";
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
import BKashErrorPage from "../Pages/Error/PaymentErrorPage";
import BKashPaymentSuccessPage from "../Pages/Success/BkashSuccessPage";
import ProductOrder from "../Pages/Orders/ProductOrder";
import BannerList from "../Pages/Admin/HomeBanner/BannerList";
import AddBanner from "../Pages/Admin/HomeBanner/AddBanner";
import ProductDashboard from "../Pages/Admin/ProductDashboard/ProductDashboard";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

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
                path: "/checkout",
                element: <Checkout></Checkout>
            },
            {
                path: "/payment/error/:status",
                element: <BKashErrorPage></BKashErrorPage>
            },
            {
                path: '/payment/success',
                element: <BKashPaymentSuccessPage></BKashPaymentSuccessPage>
            },
            {
                path: '/product/order',
                element: <ProductOrder></ProductOrder>
            }
        ]
    }, {
        path: '/dashboard',
        element: <AdminRoute><AdminDashboardLayout></AdminDashboardLayout></AdminRoute>,
        children: [
            {
                path: "",
                element: <ProductDashboard></ProductDashboard>
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
            {
                path: 'product/orders',
                element: <ProductOrder></ProductOrder>
            },
            {
                path: 'bannerList',
                element: <BannerList></BannerList>
            },
            {
                path: 'banner/add/:id',
                element: <AddBanner></AddBanner>
            },
            {
                path: 'banner/add',
                element: <AddBanner></AddBanner>
            },

        ]
    },


])