import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div className="mx-auto max-w-7xl">
            <Header></Header>
            <hr />
            <Navbar></Navbar>
            <hr />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;