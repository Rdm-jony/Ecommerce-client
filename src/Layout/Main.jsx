import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import Subscribe from "../Pages/Home/Subscribe/Subscribe";
import Facilities from "../Pages/Home/Facilities/Facilities";

const Main = () => {
    const location = useLocation()
    console.log(location)
    return (
        <div className="mx-auto max-w-7xl">
            <Header></Header>
            <hr />
            <Navbar></Navbar>
            <hr />
            <Outlet></Outlet>
            {
                location.pathname != '/signIn' && <div>
                    <Subscribe></Subscribe>
                    <Facilities></Facilities>
                </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default Main;