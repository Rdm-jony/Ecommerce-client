import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Listing from "../Pages/Listing/Listing";
import AllProducts from "../Pages/Listing/AllProducts/AllProducts";

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
                children: [{
                    path: '/listing',
                    element: <AllProducts></AllProducts>
                }]
            }
        ]
    }

])